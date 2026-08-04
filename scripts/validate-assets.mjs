import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { assetCatalog, getAssetSvg } from '../assets/catalog.mjs';

const root = new URL('../', import.meta.url);
const generatedDirectory = new URL('../assets/generated/', import.meta.url);
const ids = assetCatalog.map((asset) => asset.id);
const uniqueIds = new Set(ids);

assert.equal(assetCatalog.length, 17, 'The Notion checklist must contain 17 code assets.');
assert.equal(uniqueIds.size, 17, 'Asset IDs must be unique.');

const expectedCounts = { BG: 3, FX: 2, MT: 3, IL: 4, ES: 3, BD: 2 };
for (const [category, expected] of Object.entries(expectedCounts)) {
  assert.equal(
    assetCatalog.filter((asset) => asset.category === category).length,
    expected,
    category + ' checklist count is incorrect.'
  );
}

const generatedFiles = (await readdir(generatedDirectory))
  .filter((name) => name.endsWith('.svg'))
  .sort();
assert.deepEqual(
  generatedFiles,
  ids.map((id) => id + '.svg').sort(),
  'Generated SVG files must exactly match the catalog.'
);

for (const asset of assetCatalog) {
  const sourceSvg = getAssetSvg(asset.id, 'file');
  const exportedSvg = (await readFile(new URL(asset.id + '.svg', generatedDirectory), 'utf8')).trim();
  assert.equal(exportedSvg, sourceSvg, asset.id + ' export differs from its source definition.');
  assert.match(exportedSvg, /^<svg\b/, asset.id + ' must start with an SVG root.');
  assert.match(exportedSvg, /<\/svg>$/, asset.id + ' must end with an SVG root.');
  assert.ok(
    exportedSvg.includes('viewBox="0 0 ' + asset.width + ' ' + asset.height + '"'),
    asset.id + ' viewBox must match catalog dimensions.'
  );
  assert.ok(!/<image\b/i.test(exportedSvg), asset.id + ' must not embed image elements.');
  assert.ok(!/data:image/i.test(exportedSvg), asset.id + ' must not embed data images.');
  assert.ok(!/(?:href|src)=["']https?:\/\//i.test(exportedSvg), asset.id + ' must not load external resources.');
}

const manifest = JSON.parse(await readFile(new URL('../assets/manifest.json', import.meta.url), 'utf8'));
assert.equal(manifest.schema_version, 2, 'Manifest must use the code-native schema.');
assert.equal(manifest.strategy, 'code-native', 'Manifest strategy must be code-native.');
assert.equal(manifest.assets.length, assetCatalog.length, 'Manifest count must match the catalog.');
assert.deepEqual(manifest.assets.map((asset) => asset.id), ids, 'Manifest order must match the catalog.');

const indexHtml = await readFile(new URL('index.html', root), 'utf8');
const css = await readFile(new URL('styles.css', root), 'utf8');
const app = await readFile(new URL('app.js', root), 'utf8');

assert.ok(!/<img\b/i.test(indexHtml), 'The page must not contain raster or image-tag previews.');
assert.ok(!/url\(\s*["']?(?!#|data:)[^)]+\.(png|jpe?g|webp)/i.test(css), 'CSS must not load raster artwork.');
assert.ok(!/\banimation\s*:/i.test(css), 'PSM page must not rely on animation.');
assert.ok(!/\btransition\s*:/i.test(css), 'PSM page must not rely on transitions.');
assert.ok(!/@keyframes/i.test(css), 'PSM page must not define keyframes.');
assert.ok(indexHtml.includes('app.js?v=5'), 'The page must load the code asset application.');
assert.ok(app.includes("from './assets/catalog.mjs'"), 'The page must use the shared asset source.');

const fontSizes = [...css.matchAll(/font-size:\s*([0-9.]+)px/g)].map((match) => Number(match[1]));
assert.ok(fontSizes.length > 0, 'CSS should contain explicit readable font sizes.');
assert.ok(Math.min(...fontSizes) >= 12, 'No explicit CSS font size may be below 12px.');

console.log('Validated 17 assets, manifest parity, zero image embedding, and static PSM rules.');
