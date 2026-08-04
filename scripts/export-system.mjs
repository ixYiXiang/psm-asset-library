import { mkdir, writeFile } from 'node:fs/promises';
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
import { iconCatalog, iconCategories } from '../icons/catalog.mjs';
import { expansionWaves } from '../roadmap.mjs';

const tokenDirectory = new URL('../tokens/', import.meta.url);
const manifestPath = new URL('../assets/system-manifest.json', import.meta.url);

await mkdir(tokenDirectory, { recursive: true });
await writeFile(new URL('psm-tokens.wxss', tokenDirectory), getWxssTokens() + '\n', 'utf8');
await writeFile(new URL('psm-components.wxss', tokenDirectory), getComponentWxss() + '\n', 'utf8');

const manifest = {
  schema_version: 1,
  name: 'PSM Complete System',
  source_of_truth: 'system.mjs',
  strategy: 'code-native',
  coverage: {
    chapters: systemChapters.length,
    materials: materials.length,
    light_layers: lightLayers.length,
    shadow_levels: shadowScale.length,
    texture_layers: textureLayers.length,
    semantic_colors: colorGroups.semantic.length,
    type_levels: typeScale.length,
    component_groups: componentGroups.length,
    component_state_types: componentStateOrder.length,
    component_state_variants: componentGroups.length * componentStateOrder.length,
    svg_groups: svgPrimitives.length,
    rendering_checks: renderingChecklist.length,
    core_tokens: Object.keys(tokenMap).length,
    icon_categories: iconCategories.length,
    code_icons: iconCatalog.length,
    expansion_waves: expansionWaves.length
  },
  chapters: systemChapters,
  deliverables: [
    'tokens/psm-tokens.wxss',
    'tokens/psm-components.wxss',
    'components/manifest.json',
    'components/README.md',
    'qa/w03-component-matrix.svg',
    'assets/generated/*.svg',
    'icons/generated/*.svg',
    'icons/psm-icons.svg',
    'icons/manifest.json',
    'roadmap/expansion-plan.json'
  ],
  constraints: {
    generated_images: false,
    traced_reference_images: false,
    external_image_dependencies: false,
    business_ui_depends_on_decorative_svg: false,
    static_material_first: true
  }
};

await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log('Exported ' + systemChapters.length + ' PSM chapters, ' + Object.keys(tokenMap).length + ' core WXSS tokens, and ' + (componentGroups.length * componentStateOrder.length) + ' component states.');
