import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { motionCatalog, motionCategories, motionCounts } from '../motion/catalog.mjs';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');

const [html, entryCss, baseOneCss, baseTwoCss, effectsOneCss, effectsTwoCss, keyframesCss, demos, app, attribution, notices] = await Promise.all([
  read('motion/index.html'),
  read('motion/motion.css'),
  read('motion/base-01.css'),
  read('motion/base-02.css'),
  read('motion/effects-01.css'),
  read('motion/effects-02.css'),
  read('motion/motion-keyframes.css'),
  read('motion/demos.mjs'),
  read('motion/motion.js'),
  read('motion/ATTRIBUTION.md'),
  read('motion/THIRD_PARTY_NOTICES.md')
]);
const css = [entryCss, baseOneCss, baseTwoCss, effectsOneCss, effectsTwoCss, keyframesCss].join('\n');

assert.equal(motionCatalog.length, 36, 'Motion Lab must publish exactly 36 reviewed effects in W03-A.');
assert.equal(motionCategories.length, 7, 'Motion Lab must retain seven semantic categories.');
assert.equal(new Set(motionCatalog.map((item) => item.id)).size, 36, 'Motion IDs must be unique.');
assert.equal(new Set(motionCatalog.map((item) => item.demo)).size, 36, 'Demo keys must be unique.');
assert.deepEqual(
  motionCatalog.map((item, index) => item.id),
  Array.from({ length: 36 }, (_, index) => `PSM-MO-${String(index + 1).padStart(3, '0')}`),
  'Motion IDs must remain contiguous and stable.'
);

const expectedCounts = {
  loading: 8,
  button: 6,
  card: 5,
  feedback: 5,
  navigation: 4,
  form: 4,
  ambient: 4
};
assert.deepEqual(motionCounts, expectedCounts, 'Motion category coverage changed unexpectedly.');
for (const category of motionCategories) {
  assert.equal(
    motionCatalog.filter((item) => item.category === category.id).length,
    expectedCounts[category.id],
    `${category.id} count does not match its W03-A baseline.`
  );
}

const adapted = motionCatalog.filter((item) => item.source.kind === 'adapted');
const original = motionCatalog.filter((item) => item.source.kind === 'original');
assert.equal(adapted.length, 8, 'Exactly eight items must retain third-party attribution.');
assert.equal(original.length, 28, 'Exactly 28 W03-A items must remain PSM original implementations.');

for (const item of motionCatalog) {
  assert.ok(item.name && item.en && item.description, `${item.id} must include bilingual naming and a description.`);
  assert.ok(item.technique.length >= 2, `${item.id} must declare implementation techniques.`);
  assert.ok(['auto', 'hover', 'press', 'pointer', 'click', 'focus', 'type'].includes(item.interaction), `${item.id} uses an unknown interaction type.`);
  assert.ok(demos.includes(`case '${item.demo}'`), `${item.id} preview renderer is missing.`);
}

for (const item of adapted) {
  assert.equal(item.source.platform, 'Uiverse', `${item.id} must identify Uiverse as its platform.`);
  assert.equal(item.source.license, 'MIT', `${item.id} must retain the MIT license.`);
  assert.match(item.source.url, /^https:\/\/uiverse\.io\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+$/, `${item.id} must use a direct Uiverse work URL.`);
  assert.ok(item.source.author, `${item.id} must retain the original author.`);
  assert.ok(item.source.copyright, `${item.id} must retain a copyright notice.`);
  assert.ok(item.source.note.length >= 20, `${item.id} must explain the adaptation scope.`);
  assert.ok(attribution.includes(item.id), `${item.id} is missing from ATTRIBUTION.md.`);
  assert.ok(attribution.includes(item.source.url), `${item.id} source URL is missing from ATTRIBUTION.md.`);
}

assert.match(notices, /MIT License/, 'Third-party notices must include the MIT license heading.');
assert.match(notices, /Permission is hereby granted/, 'Third-party notices must include the MIT license text.');
assert.ok(html.includes('motion.css?v=1'), 'Motion page must load the isolated stylesheet.');
assert.ok(html.includes('motion.js?v=1'), 'Motion page must load the isolated application.');
assert.ok(html.includes('id="motion-toggle"'), 'Motion page must expose a page-level pause control.');
assert.ok(html.includes('id="credit-list"'), 'Motion page must expose runtime attribution.');
assert.ok(html.includes('36 个独立动效'), 'Motion page must state its reviewed effect count.');
assert.ok(html.includes('08</dt><dd>Uiverse 改造项'), 'Motion page must state the attributed adaptation count.');
assert.ok(app.includes("from './catalog.mjs'"), 'Motion page must render from the shared motion catalog.');
assert.ok(app.includes("prefers-reduced-motion: reduce"), 'Motion JavaScript must honor the system reduced-motion preference.');
assert.ok(keyframesCss.includes('@media (prefers-reduced-motion: reduce)'), 'Motion CSS must honor the system reduced-motion preference.');
assert.ok(keyframesCss.includes('body[data-motion="paused"]'), 'Motion CSS must support explicit animation pause.');
assert.ok(keyframesCss.includes('@keyframes'), 'The isolated Motion Lab must contain real keyframe motion.');
assert.ok(!/<img\b/i.test(html), 'Motion Lab must not rely on raster image tags.');
assert.ok(!/data:image/i.test(html + css + demos + app), 'Motion Lab must not embed raster data URLs.');
assert.ok(!/<script[^>]+src=["']https?:\/\//i.test(html), 'Motion Lab must not load remote runtime scripts.');
assert.ok(!/<link[^>]+href=["']https?:\/\//i.test(html), 'Motion Lab must not load remote stylesheets.');
assert.ok(!/url\(\s*["']?https?:\/\//i.test(css), 'Motion Lab CSS must not load remote assets.');

const fontSizes = [...css.matchAll(/font-size:\s*([0-9.]+)px/g)].map((match) => Number(match[1]));
assert.ok(fontSizes.length > 0, 'Motion stylesheet should contain explicit readable font sizes.');
assert.ok(Math.min(...fontSizes) >= 12, 'No explicit Motion Lab font size may be below 12px.');

console.log(`Validated ${motionCatalog.length} motion effects, ${motionCategories.length} categories, ${adapted.length} attributed adaptations, reduced-motion support, and zero external runtime dependencies.`);
