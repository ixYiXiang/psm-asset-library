import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { assetCatalog, getAssetSvg } from '../assets/catalog.mjs';
import {
  iconCatalog,
  iconCategories,
  getIconSvg,
  getIconSprite,
  getIconCss,
  getIconManifest
} from '../icons/catalog.mjs';
import { expansionWaves, continuousLoop, getRoadmapManifest, getRoadmapMarkdown } from '../roadmap.mjs';
import {
  systemChapters,
  tokenMap,
  materials,
  lightLayers,
  shadowScale,
  textureLayers,
  colorGroups,
  typeScale,
  componentGroups,
  svgPrimitives,
  renderingChecklist,
  getWxssTokens,
  getComponentWxss
} from '../system.mjs';

const root = new URL('../', import.meta.url);
const generatedDirectory = new URL('../assets/generated/', import.meta.url);
const iconDirectory = new URL('../icons/', import.meta.url);
const iconGeneratedDirectory = new URL('../icons/generated/', import.meta.url);
const roadmapDirectory = new URL('../roadmap/', import.meta.url);
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

const iconIds = iconCatalog.map((icon) => icon.id);
const iconSlugs = iconCatalog.map((icon) => icon.slug);
assert.equal(iconCategories.length, 8, 'The icon system must contain eight semantic categories.');
assert.equal(iconCatalog.length, 48, 'Wave W01 must contain 48 code-native icons.');
assert.equal(new Set(iconIds).size, 48, 'Icon IDs must be unique.');
assert.equal(new Set(iconSlugs).size, 48, 'Icon slugs must be unique.');
assert.deepEqual(
  iconIds,
  Array.from({ length: 48 }, (_, index) => 'PSM-IC-' + String(index + 1).padStart(3, '0')),
  'Icon IDs must remain contiguous and stable.'
);
for (const category of iconCategories) {
  assert.equal(iconCatalog.filter((icon) => icon.category === category.id).length, 6, category.id + ' must contain six icons.');
}

const generatedIconFiles = (await readdir(iconGeneratedDirectory)).filter((name) => name.endsWith('.svg')).sort();
assert.deepEqual(generatedIconFiles, iconIds.map((id) => id + '.svg').sort(), 'Generated icon SVG files must exactly match the icon catalog.');

for (const icon of iconCatalog) {
  const sourceSvg = getIconSvg(icon.id, 'file');
  const exportedSvg = (await readFile(new URL(icon.id + '.svg', iconGeneratedDirectory), 'utf8')).trim();
  assert.equal(exportedSvg, sourceSvg, icon.id + ' export differs from its source definition.');
  assert.match(exportedSvg, /^<svg\b/, icon.id + ' must start with an SVG root.');
  assert.ok(exportedSvg.includes('viewBox="0 0 24 24"'), icon.id + ' must use the 24 × 24 grid.');
  assert.ok(exportedSvg.includes('stroke="currentColor"'), icon.id + ' must inherit semantic color.');
  assert.ok(!/<image\b/i.test(exportedSvg), icon.id + ' must not embed image elements.');
  assert.ok(!/data:image/i.test(exportedSvg), icon.id + ' must not embed data images.');
  assert.ok(!/(?:href|src)=["']https?:\/\//i.test(exportedSvg), icon.id + ' must not load external resources.');
}

const iconManifest = JSON.parse(await readFile(new URL('manifest.json', iconDirectory), 'utf8'));
const iconSprite = (await readFile(new URL('psm-icons.svg', iconDirectory), 'utf8')).trim();
const iconCss = (await readFile(new URL('psm-icons.css', iconDirectory), 'utf8')).trim();
assert.deepEqual(iconManifest, getIconManifest(), 'Icon manifest differs from icons/catalog.mjs.');
assert.equal(iconSprite, getIconSprite(), 'Icon sprite differs from icons/catalog.mjs.');
assert.equal(iconCss, getIconCss(), 'Icon CSS differs from icons/catalog.mjs.');
assert.equal((iconSprite.match(/<symbol\b/g) || []).length, 48, 'Icon sprite must contain 48 symbols.');
assert.ok(!/<image\b/i.test(iconSprite), 'Icon sprite must not embed raster images.');

const roadmapManifest = JSON.parse(await readFile(new URL('expansion-plan.json', roadmapDirectory), 'utf8'));
const roadmapMarkdown = await readFile(new URL('README.md', roadmapDirectory), 'utf8');
assert.deepEqual(roadmapManifest, getRoadmapManifest(), 'Roadmap manifest differs from roadmap.mjs.');
assert.equal(roadmapMarkdown, getRoadmapMarkdown(), 'Roadmap README differs from roadmap.mjs.');
assert.equal(expansionWaves.length, 6, 'Roadmap must include five waves and one recurring loop.');
assert.equal(continuousLoop.length, 6, 'Continuous expansion loop must contain six reproducible steps.');
assert.equal(expansionWaves.at(-1).id, 'W∞', 'Roadmap must end in the recurring quality loop.');

const indexHtml = await readFile(new URL('index.html', root), 'utf8');
const css = await readFile(new URL('styles.css', root), 'utf8');
const app = await readFile(new URL('app.js', root), 'utf8');
const systemSource = await readFile(new URL('system.mjs', root), 'utf8');
const tokenWxss = (await readFile(new URL('tokens/psm-tokens.wxss', root), 'utf8')).trim();
const componentWxss = (await readFile(new URL('tokens/psm-components.wxss', root), 'utf8')).trim();
const systemManifest = JSON.parse(await readFile(new URL('assets/system-manifest.json', root), 'utf8'));

assert.equal(systemChapters.length, 10, 'The complete PSM atlas must contain 10 chapters.');
assert.deepEqual(
  systemChapters.map((chapter) => chapter.id),
  ['world', 'material', 'lighting', 'texture', 'color', 'type', 'components', 'svg', 'tokens', 'guide'],
  'PSM chapter order must remain stable.'
);
assert.equal(materials.length, 4, 'Material chapter must cover four base materials.');
assert.equal(lightLayers.length, 5, 'Lighting chapter must cover five light layers.');
assert.equal(shadowScale.length, 4, 'Lighting chapter must cover four shadow levels.');
assert.equal(textureLayers.length, 4, 'Texture chapter must cover four texture layers.');
assert.equal(colorGroups.semantic.length, 8, 'Color chapter must cover eight semantic groups.');
assert.equal(typeScale.length, 8, 'Type chapter must cover eight type levels.');
assert.equal(componentGroups.length, 8, 'Components chapter must cover eight component groups.');
assert.equal(svgPrimitives.length, 10, 'SVG chapter must cover ten primitive groups.');
assert.equal(renderingChecklist.length, 8, 'Rendering guide must contain eight checks.');
assert.ok(Object.keys(tokenMap).length >= 30, 'The WXSS foundation must expose at least 30 core tokens.');
assert.equal(tokenWxss, getWxssTokens(), 'Exported token WXSS differs from system.mjs.');
assert.equal(componentWxss, getComponentWxss(), 'Exported component WXSS differs from system.mjs.');
assert.equal(systemManifest.coverage.chapters, 10, 'System manifest chapter count is incorrect.');
assert.equal(systemManifest.coverage.core_tokens, Object.keys(tokenMap).length, 'System manifest token count is incorrect.');
assert.equal(systemManifest.coverage.icon_categories, 8, 'System manifest icon category count is incorrect.');
assert.equal(systemManifest.coverage.code_icons, 48, 'System manifest icon count is incorrect.');
assert.equal(systemManifest.coverage.expansion_waves, 6, 'System manifest roadmap count is incorrect.');

assert.ok(!/<img\b/i.test(indexHtml), 'The page must not contain raster or image-tag previews.');
assert.ok(!/url\(\s*["']?(?!#|data:)[^)]+\.(png|jpe?g|webp)/i.test(css), 'CSS must not load raster artwork.');
assert.ok(!/\banimation\s*:/i.test(css), 'PSM page must not rely on animation.');
assert.ok(!/\btransition\s*:/i.test(css), 'PSM page must not rely on transitions.');
assert.ok(!/@keyframes/i.test(css), 'PSM page must not define keyframes.');
assert.ok(indexHtml.includes('app.js?v=7'), 'The page must load the expanded PSM application.');
assert.ok(indexHtml.includes('styles.css?v=8'), 'The page must load the expanded PSM stylesheet.');
assert.ok(indexHtml.includes('id="system-content"'), 'The page must include the complete PSM atlas mount.');
assert.ok(indexHtml.includes('id="icon-grid"'), 'The page must include the 48-icon library mount.');
assert.ok(indexHtml.includes('id="roadmap-grid"'), 'The page must include the expansion roadmap mount.');
assert.ok(indexHtml.includes('10 / 10'), 'The page must state complete system coverage.');
assert.ok(app.includes("from './assets/catalog.mjs'"), 'The page must use the shared asset source.');
assert.ok(app.includes("from './system.mjs'"), 'The page must use the shared system source.');
assert.ok(app.includes("from './icons/catalog.mjs'"), 'The page must use the shared icon source.');
assert.ok(app.includes("from './roadmap.mjs'"), 'The page must use the shared roadmap source.');
assert.ok(!/<img\b/i.test(systemSource), 'The system source must not emit image tags.');
assert.ok(!/data:image/i.test(systemSource), 'The system source must not embed data images.');

const fontSizes = [...css.matchAll(/font-size:\s*([0-9.]+)px/g)].map((match) => Number(match[1]));
assert.ok(fontSizes.length > 0, 'CSS should contain explicit readable font sizes.');
assert.ok(Math.min(...fontSizes) >= 12, 'No explicit CSS font size may be below 12px.');

console.log('Validated 10 chapters, 17 assets, 48 icons, six expansion waves, zero image embedding, and static rules.');
