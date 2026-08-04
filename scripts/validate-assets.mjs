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
import { w02BatchItems, w02IconItems, getW02QaSvg } from '../qa/w02-semantic-matrix.mjs';
import {
  componentAcceptanceViewports,
  w03ComponentItems,
  w03BatchItems,
  getComponentStateManifest,
  getComponentStateMarkdown
} from '../components/catalog.mjs';
import { getW03QaSvg } from '../qa/w03-component-state-matrix.mjs';
import {
  systemChapters,
  tokenMap,
  materials,
  lightLayers,
  shadowScale,
  textureLayers,
  colorGroups,
  typeScale,
  componentStateOrder,
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
const componentDirectory = new URL('../components/', import.meta.url);
const qaDirectory = new URL('../qa/', import.meta.url);
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
assert.ok(iconCatalog.length >= 48, 'The completed W01 baseline of 48 icons must not regress.');
assert.equal(new Set(iconIds).size, iconCatalog.length, 'Icon IDs must be unique.');
assert.equal(new Set(iconSlugs).size, iconCatalog.length, 'Icon slugs must be unique.');
assert.deepEqual(
  iconIds,
  Array.from({ length: iconCatalog.length }, (_, index) => 'PSM-IC-' + String(index + 1).padStart(3, '0')),
  'Icon IDs must remain contiguous and stable.'
);
for (const category of iconCategories) {
  assert.ok(iconCatalog.filter((icon) => icon.category === category.id).length >= 6, category.id + ' must retain its six-icon W01 baseline.');
}

assert.equal(w02BatchItems.length, 12, 'W02-A must stay within the twelve-item release limit.');
assert.equal(new Set(w02BatchItems.map((item) => item.id)).size, w02BatchItems.length, 'W02 work-item IDs must be unique.');
assert.deepEqual(
  w02IconItems.map((item) => item.id),
  Array.from({ length: 10 }, (_, index) => 'PSM-IC-' + String(index + 49).padStart(3, '0')),
  'W02-A may reserve only PSM-IC-049 through PSM-IC-058.'
);
assert.deepEqual(
  w02BatchItems.filter((item) => item.kind !== 'icon').map((item) => item.id),
  ['W02-AD-001', 'W02-QA-001'],
  'Adapter and QA items must use wave work-item IDs instead of stable asset IDs.'
);
for (const item of w02IconItems) {
  const icon = iconCatalog.find((entry) => entry.id === item.id);
  assert.ok(icon, item.id + ' must exist in icons/catalog.mjs.');
  assert.equal(icon.slug, item.slug, item.id + ' slug must match the W02 semantic matrix.');
  assert.deepEqual(icon.sizes, [24, 32, 64], item.id + ' must declare all acceptance sizes.');
  assert.deepEqual(item.acceptanceSizes, [24, 32, 64], item.id + ' QA sizes must match the icon manifest.');
  assert.equal(item.stressSize, 16, item.id + ' must reserve 16px for stress preview only.');
  assert.ok(item.targetContainers.length > 0, item.id + ' must name a real target container.');
  assert.ok(item.verifySteps.length >= 4, item.id + ' must include reproducible verification steps.');
  for (const comparatorId of item.compareAgainst) {
    const comparator = iconCatalog.find((entry) => entry.id === comparatorId);
    assert.ok(comparator, item.id + ' comparator ' + comparatorId + ' must exist.');
    assert.notEqual(icon.body, comparator.body, item.id + ' must not duplicate ' + comparatorId + ' geometry.');
  }
}
assert.equal(new Set(w02IconItems.map((item) => iconCatalog.find((icon) => icon.id === item.id).body)).size, 10, 'W02-A icon geometry must be unique within the batch.');
const w02QaSvg = (await readFile(new URL('w02-icon-matrix.svg', qaDirectory), 'utf8')).trim();
assert.equal(w02QaSvg, getW02QaSvg(iconCatalog), 'W02 QA matrix differs from the catalog and semantic matrix.');
assert.ok(!/<image\b/i.test(w02QaSvg), 'W02 QA matrix must not embed image elements.');
assert.ok(!/data:image/i.test(w02QaSvg), 'W02 QA matrix must not embed raster data.');
assert.ok(!/(?:href|src)=["']https?:\/\//i.test(w02QaSvg), 'W02 QA matrix must not load external resources.');

assert.equal(w03BatchItems.length, 10, 'W03 must publish eight component groups, one adapter and one QA item.');
assert.ok(w03BatchItems.length <= 12, 'W03 must stay within the twelve-item release limit.');
assert.equal(new Set(w03BatchItems.map((item) => item.id)).size, w03BatchItems.length, 'W03 work-item IDs must be unique.');
assert.deepEqual(
  w03ComponentItems.map((item) => item.id),
  Array.from({ length: 8 }, (_, index) => 'W03-CS-' + String(index + 1).padStart(3, '0')),
  'W03 component work items must remain contiguous and wave-scoped.'
);
assert.deepEqual(
  w03BatchItems.filter((item) => item.kind !== 'component-state').map((item) => item.id),
  ['W03-AD-001', 'W03-QA-001'],
  'W03 adapter and QA items must use wave work-item IDs.'
);
assert.deepEqual(componentAcceptanceViewports, [360, 768, 1280], 'W03 must declare mobile, tablet and desktop acceptance viewports.');
assert.deepEqual(componentStateOrder.map((state) => state.id), ['default', 'focus', 'pressed', 'disabled', 'semantic'], 'W03 state order must remain stable.');
for (const group of componentGroups) {
  assert.match(group.workItemId, /^W03-CS-00[1-8]$/, group.id + ' must use a W03 component work-item ID.');
  assert.equal(group.targetContainers.length, 3, group.id + ' must name three real target containers.');
  assert.equal(new Set(group.targetContainers).size, group.targetContainers.length, group.id + ' target containers must be unique.');
  assert.deepEqual(group.states.map((state) => state.id), componentStateOrder.map((state) => state.id), group.id + ' must cover all five states in order.');
  assert.equal(group.states.length, 5, group.id + ' must expose exactly five states.');
  for (const state of group.states) {
    assert.ok(state.example.length > 0, group.id + '/' + state.id + ' must name a real example.');
    assert.ok(state.exampleEnglish.length > 0, group.id + '/' + state.id + ' must name a portable QA example.');
    assert.ok(state.rule.length > 0, group.id + '/' + state.id + ' must include a static state rule.');
  }
}

const componentManifest = JSON.parse(await readFile(new URL('manifest.json', componentDirectory), 'utf8'));
const componentMarkdown = await readFile(new URL('README.md', componentDirectory), 'utf8');
const w03QaSvg = (await readFile(new URL('w03-component-matrix.svg', qaDirectory), 'utf8')).trim();
assert.deepEqual(componentManifest, getComponentStateManifest(), 'Component state manifest differs from system.mjs.');
assert.equal(componentMarkdown, getComponentStateMarkdown(), 'Component state README differs from system.mjs.');
assert.equal(w03QaSvg, getW03QaSvg(), 'W03 QA matrix differs from the component state source.');
assert.equal(componentManifest.coverage.state_variants, 40, 'Component manifest must publish forty state variants.');
assert.equal((w03QaSvg.match(/data-component-group=/g) || []).length, 8, 'W03 QA matrix must render all eight component groups.');
assert.equal((w03QaSvg.match(/data-state=/g) || []).length, 40, 'W03 QA matrix must render all forty state cells.');
assert.ok(!/<image\b/i.test(w03QaSvg), 'W03 QA matrix must not embed image elements.');
assert.ok(!/data:image/i.test(w03QaSvg), 'W03 QA matrix must not embed raster data.');
assert.ok(!/(?:href|src)=["']https?:\/\//i.test(w03QaSvg), 'W03 QA matrix must not load external resources.');

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
assert.equal((iconSprite.match(/<symbol\b/g) || []).length, iconCatalog.length, 'Icon sprite symbol count must match the catalog.');
assert.ok(!/<image\b/i.test(iconSprite), 'Icon sprite must not embed raster images.');

const roadmapManifest = JSON.parse(await readFile(new URL('expansion-plan.json', roadmapDirectory), 'utf8'));
const roadmapMarkdown = await readFile(new URL('README.md', roadmapDirectory), 'utf8');
assert.deepEqual(roadmapManifest, getRoadmapManifest(), 'Roadmap manifest differs from roadmap.mjs.');
assert.equal(roadmapMarkdown, getRoadmapMarkdown(), 'Roadmap README differs from roadmap.mjs.');
assert.equal(expansionWaves.length, 6, 'Roadmap must include five waves and one recurring loop.');
assert.equal(continuousLoop.length, 6, 'Continuous expansion loop must contain six reproducible steps.');
assert.equal(expansionWaves.at(-1).id, 'W∞', 'Roadmap must end in the recurring quality loop.');
assert.equal(expansionWaves.find((wave) => wave.id === 'W02').status, 'complete', 'W02 must close without allocating unsupported icon IDs.');
assert.equal(expansionWaves.find((wave) => wave.id === 'W03').status, 'complete', 'W03 must be complete after all ten controlled work items pass.');
assert.equal(roadmapManifest.current_wave, 'W03', 'Roadmap current wave must reflect the W03 release.');
assert.equal(roadmapManifest.next_wave, 'W04', 'Roadmap must point to W04 after W03 completion.');

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
assert.equal(componentStateOrder.length, 5, 'Components must use five stable state types.');
assert.equal(componentGroups.length, 8, 'Components chapter must cover eight component groups.');
assert.equal(svgPrimitives.length, 10, 'SVG chapter must cover ten primitive groups.');
assert.equal(renderingChecklist.length, 8, 'Rendering guide must contain eight checks.');
assert.ok(Object.keys(tokenMap).length >= 30, 'The WXSS foundation must expose at least 30 core tokens.');
assert.equal(tokenWxss, getWxssTokens(), 'Exported token WXSS differs from system.mjs.');
assert.equal(componentWxss, getComponentWxss(), 'Exported component WXSS differs from system.mjs.');
for (const stateClass of ['focus', 'pressed', 'disabled', 'success', 'warning', 'danger', 'info', 'echo', 'primary']) {
  assert.ok(componentWxss.includes('.psm-state--' + stateClass), 'Component WXSS must export the ' + stateClass + ' state helper.');
}
assert.equal(systemManifest.coverage.chapters, 10, 'System manifest chapter count is incorrect.');
assert.equal(systemManifest.coverage.core_tokens, Object.keys(tokenMap).length, 'System manifest token count is incorrect.');
assert.equal(systemManifest.coverage.icon_categories, 8, 'System manifest icon category count is incorrect.');
assert.equal(systemManifest.coverage.code_icons, iconCatalog.length, 'System manifest icon count is incorrect.');
assert.equal(systemManifest.coverage.component_state_types, 5, 'System manifest component state type count is incorrect.');
assert.equal(systemManifest.coverage.component_state_variants, 40, 'System manifest component state variant count is incorrect.');
assert.equal(systemManifest.coverage.expansion_waves, 6, 'System manifest roadmap count is incorrect.');

assert.ok(!/<img\b/i.test(indexHtml), 'The page must not contain raster or image-tag previews.');
assert.ok(!/url\(\s*["']?(?!#|data:)[^)]+\.(png|jpe?g|webp)/i.test(css), 'CSS must not load raster artwork.');
assert.ok(!/\banimation\s*:/i.test(css), 'PSM page must not rely on animation.');
assert.ok(!/\btransition\s*:/i.test(css), 'PSM page must not rely on transitions.');
assert.ok(!/@keyframes/i.test(css), 'PSM page must not define keyframes.');
assert.ok(indexHtml.includes('app.js?v=9'), 'The page must load the W03 PSM application.');
assert.ok(indexHtml.includes('styles.css?v=10'), 'The page must load the W03 PSM stylesheet.');
assert.ok(indexHtml.includes('id="system-content"'), 'The page must include the complete PSM atlas mount.');
assert.ok(indexHtml.includes('id="icon-grid"'), 'The page must include the icon library mount.');
assert.ok(indexHtml.includes('data-icon-total'), 'Visible icon coverage must be derived from the icon catalog at runtime.');
assert.ok(indexHtml.includes('id="roadmap-grid"'), 'The page must include the expansion roadmap mount.');
assert.ok(indexHtml.includes('10 / 10'), 'The page must state complete system coverage.');
assert.ok(app.includes("from './assets/catalog.mjs'"), 'The page must use the shared asset source.');
assert.ok(app.includes("from './system.mjs'"), 'The page must use the shared system source.');
assert.ok(app.includes("from './icons/catalog.mjs'"), 'The page must use the shared icon source.');
assert.ok(app.includes("from './roadmap.mjs'"), 'The page must use the shared roadmap source.');
assert.ok(app.includes('data-component-group'), 'The page must expose component groups for W03 browser QA.');
assert.ok(app.includes('data-component-state'), 'The page must expose all W03 state cells for browser QA.');
assert.ok(css.includes('.component-state-grid'), 'The page must include the responsive W03 state matrix.');
assert.ok(css.includes('.component-state-sample.is-semantic'), 'The page must distinguish semantic component states.');
assert.ok(!/<img\b/i.test(systemSource), 'The system source must not emit image tags.');
assert.ok(!/data:image/i.test(systemSource), 'The system source must not embed data images.');
assert.equal(componentManifest.constraints.raster_dependencies, false, 'W03 must keep zero raster dependencies.');
assert.equal(componentManifest.constraints.production_weui_replacement, false, 'W03 must not replace production WeUI icons.');

const fontSizes = [...css.matchAll(/font-size:\s*([0-9.]+)px/g)].map((match) => Number(match[1]));
assert.ok(fontSizes.length > 0, 'CSS should contain explicit readable font sizes.');
assert.ok(Math.min(...fontSizes) >= 12, 'No explicit CSS font size may be below 12px.');

console.log('Validated 10 chapters, 17 assets, ' + iconCatalog.length + ' icons, 40 component states, 10 W03 work items, six expansion waves, zero image embedding, and static rules.');
