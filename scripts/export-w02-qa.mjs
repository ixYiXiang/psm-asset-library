import { writeFile } from 'node:fs/promises';
import { iconCatalog } from '../icons/catalog.mjs';
import { getW02QaSvg } from '../qa/w02-semantic-matrix.mjs';

await writeFile(new URL('../qa/w02-icon-matrix.svg', import.meta.url), getW02QaSvg(iconCatalog) + '\n', 'utf8');
console.log('Exported W02-QA-001 semantic and size matrix.');
