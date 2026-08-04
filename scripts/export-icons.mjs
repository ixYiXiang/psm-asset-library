import { mkdir, writeFile } from 'node:fs/promises';
import {
  iconCatalog,
  iconCategories,
  getIconSvg,
  getIconSprite,
  getIconCss,
  getIconManifest
} from '../icons/catalog.mjs';

const iconDirectory = new URL('../icons/', import.meta.url);
const generatedDirectory = new URL('../icons/generated/', import.meta.url);

await mkdir(generatedDirectory, { recursive: true });

for (const icon of iconCatalog) {
  await writeFile(new URL(icon.id + '.svg', generatedDirectory), getIconSvg(icon.id) + '\n', 'utf8');
}

await writeFile(new URL('psm-icons.svg', iconDirectory), getIconSprite() + '\n', 'utf8');
await writeFile(new URL('psm-icons.css', iconDirectory), getIconCss() + '\n', 'utf8');
await writeFile(new URL('manifest.json', iconDirectory), JSON.stringify(getIconManifest(), null, 2) + '\n', 'utf8');

const readme = [
  '# PSM Code-Native Icon Library',
  '',
  iconCatalog.length + ' hand-authored SVG icons on a 24 × 24 grid. Semantic recognition comes before decorative material styling.',
  '',
  '## Coverage',
  '',
  ...iconCategories.map((category) => '- ' + category.id + ' · ' + category.name + ' / ' + category.english + ': ' + iconCatalog.filter((icon) => icon.category === category.id).length + ' icons'),
  '',
  '## Deliverables',
  '',
  '- generated/' + iconCatalog.at(0).id + '.svg through generated/' + iconCatalog.at(-1).id + '.svg',
  '- psm-icons.svg reusable symbol sprite',
  '- psm-icons.css size and color helpers',
  '- manifest.json machine-readable catalog',
  '',
  '## Boundaries',
  '',
  '- No generated images, traced references, embedded raster data, or external resources.',
  '- Validate at 24, 32, and 64 px. A 16 px preview is included only as a stress test.',
  '- This is a design asset library. It does not automatically replace production WeUI icons.',
  '- Use currentColor so interaction semantics remain controlled by the consuming component.',
  ''
].join('\n');

await writeFile(new URL('README.md', iconDirectory), readme, 'utf8');
console.log('Exported ' + iconCatalog.length + ' PSM icons across ' + iconCategories.length + ' semantic categories.');
