import { mkdir, writeFile } from 'node:fs/promises';
import { assetCatalog, getAssetSvg } from '../assets/catalog.mjs';

const outputDirectory = new URL('../assets/generated/', import.meta.url);
const manifestPath = new URL('../assets/manifest.json', import.meta.url);

await mkdir(outputDirectory, { recursive: true });

for (const asset of assetCatalog) {
  const svg = getAssetSvg(asset.id, 'file');
  await writeFile(new URL(asset.id + '.svg', outputDirectory), svg + '\n', 'utf8');
}

const manifest = {
  schema_version: 2,
  library: 'PSM Code Lab',
  repository: 'ixYiXiang/psm-asset-library',
  strategy: 'code-native',
  source_of_truth: 'assets/catalog.mjs',
  constraints: {
    external_raster_images: false,
    traced_reference_images: false,
    generated_images: false,
    light_direction: 'top-left to bottom-right',
    texture: 'low-density, low-contrast, low-presence'
  },
  categories: [
    { code: 'BG', name: '背景', count: 3 },
    { code: 'FX', name: '光影', count: 2 },
    { code: 'MT', name: '材质', count: 3 },
    { code: 'IL', name: '模块插图', count: 4 },
    { code: 'ES', name: '空状态', count: 3 },
    { code: 'BD', name: '徽章', count: 2 }
  ],
  assets: assetCatalog.map((asset) => ({
    id: asset.id,
    category: asset.category,
    name: asset.name,
    version: asset.version,
    status: asset.status,
    engine: asset.engine,
    color_mode: asset.mode,
    ratio: asset.ratio,
    width: asset.width,
    height: asset.height,
    path: asset.path,
    source: 'assets/catalog.mjs',
    primitives: asset.primitives,
    description: asset.description
  }))
};

await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log('Exported ' + assetCatalog.length + ' code-native PSM assets.');
