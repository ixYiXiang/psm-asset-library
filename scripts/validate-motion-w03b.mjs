import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { motionCatalog as baselineCatalog, motionCategories } from '../motion/catalog.mjs';
import { motionBatchW03B } from '../motion/catalog-w03b.mjs';
import { motionCatalog, motionCounts } from '../motion/catalog-all.mjs';
import { w03bDemoMarkup } from '../motion/demos-w03b.mjs';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');
const [html, cssA, cssB, cssC, cssD, renderApp, interactionApp, report, readme, attribution] = await Promise.all([
  read('motion/index.html'),
  read('motion/effects-w03b-a.css'),
  read('motion/effects-w03b-b.css'),
  read('motion/effects-w03b-c.css'),
  read('motion/effects-w03b-d.css'),
  read('motion/extension-render-w03b.mjs'),
  read('motion/extension-interactions-w03b.mjs'),
  read('motion/W03-B.md'),
  read('README.md'),
  read('motion/ATTRIBUTION.md')
]);
const css = [cssA, cssB, cssC, cssD].join('\n');
const app = renderApp + '\n' + interactionApp;

assert.equal(baselineCatalog.length, 36, 'W03-A baseline must remain 36 items.');
assert.equal(motionBatchW03B.length, 12, 'W03-B must contain exactly twelve release items.');
assert.equal(motionCatalog.length, 48, 'Combined Motion Lab catalog must contain 48 items.');
assert.deepEqual(
  motionCatalog.map((item) => item.id),
  Array.from({ length: 48 }, (_, index) => `PSM-MO-${String(index + 1).padStart(3, '0')}`),
  'Motion IDs must remain contiguous and stable.'
);

for (const field of ['id', 'name', 'en', 'demo']) {
  assert.equal(new Set(motionCatalog.map((item) => item[field])).size, motionCatalog.length, `${field} values must be unique.`);
}
assert.equal(new Set(motionBatchW03B.map((item) => item.description)).size, 12, 'W03-B descriptions must be unique.');
assert.equal(new Set(motionBatchW03B.map((item) => item.source.note)).size, 12, 'W03-B differentiation notes must be unique.');

const categories = new Set(motionCategories.map((category) => category.id));
for (const item of motionBatchW03B) {
  assert.ok(categories.has(item.category), `${item.id} uses an unknown category.`);
  assert.equal(item.source.kind, 'original', `${item.id} must be original in W03-B.`);
  assert.equal(item.source.platform, 'PSM Code Lab', `${item.id} platform must be PSM Code Lab.`);
  assert.equal(item.source.url, '', `${item.id} must not claim a third-party URL.`);
  assert.ok(item.technique.length >= 3, `${item.id} must declare at least three techniques.`);
  assert.ok(item.description.length >= 24, `${item.id} description is too short.`);
  const markup = w03bDemoMarkup(item.demo);
  assert.ok(markup && markup.length >= 80, `${item.id} must have substantial preview markup.`);
}

assert.deepEqual(motionCounts, {
  loading: 10,
  button: 6,
  card: 7,
  feedback: 7,
  navigation: 6,
  form: 6,
  ambient: 6
}, 'Category counts must reflect the twelve-item expansion.');
assert.equal(motionCatalog.filter((item) => item.source.kind === 'original').length, 40, 'Original count must be 40.');
assert.equal(motionCatalog.filter((item) => item.source.kind === 'adapted').length, 8, 'Adapted count must remain 8.');

assert.ok(html.includes('48 个独立动效'), 'Hero must state the 48-item coverage.');
assert.ok(html.includes('motion.css?v=1'), 'Page must retain the W03-A stylesheet.');
assert.ok(html.includes('motion.js?v=1'), 'Page must retain the W03-A application.');
for (const file of ['effects-w03b-a.css', 'effects-w03b-b.css', 'effects-w03b-c.css', 'effects-w03b-d.css', 'extension-render-w03b.mjs']) {
  assert.ok(html.includes(file), `Page must load ${file}.`);
}
assert.ok(html.includes('W03-B.md'), 'Page must link the W03-B differentiation report.');
assert.ok(renderApp.includes("from './catalog-w03b.mjs'"), 'Extension must use the W03-B catalog.');
assert.ok(renderApp.includes("from './demos-w03b.mjs'"), 'Extension must use the W03-B preview source.');
for (const behavior of ['revision-scale', 'orbital-map', 'fold-tabs', 'wave-slider', 'droplet-radio', 'tomography-window', 'fieldline-plaque']) {
  assert.ok(app.includes(behavior), `Application must implement ${behavior} interaction.`);
}

for (const selector of [
  '.origami-beacon', '.fluid-meter', '.tomography-window', '.fieldline-plaque',
  '.particle-resolve', '.revision-scale', '.orbital-map', '.fold-tabs',
  '.wave-slider', '.droplet-radio', '.fiber-field', '.refractive-caustic'
]) {
  assert.ok(css.includes(selector), `${selector} stylesheet is missing.`);
}
assert.ok((css.match(/@keyframes\s+/g) || []).length >= 12, 'W03-B must define substantial motion behavior.');
assert.ok(!/(?:url\(|href=|src=)[^\n]*(?:https?:|data:)/i.test(css + app), 'W03-B runtime must not load remote or data resources.');
assert.ok(!/<img\b/i.test(html), 'Motion Lab must not use raster image tags.');
assert.ok(report.includes('只改变颜色、阴影、圆角、文字或动画时长，不算新增资产'), 'W03-B report must state the anti-duplication rule.');
assert.ok(readme.includes('48 个动效样本'), 'README must state 48 motion items.');
assert.ok(attribution.includes('40 个为 PSM Code Lab 原创实现'), 'Attribution must state 40 originals.');

const fontSizes = [...css.matchAll(/font-size:\s*([0-9.]+)px/g)].map((match) => Number(match[1]));
assert.ok(fontSizes.length > 0, 'W03-B CSS must contain explicit font sizes.');
assert.ok(Math.min(...fontSizes) >= 9, 'No W03-B explicit font size may be below 9px in an experimental preview.');

console.log('Validated W03-B: 12 original non-repeating assets, 48 total motions, unique mechanisms, local runtime, and stable IDs.');
