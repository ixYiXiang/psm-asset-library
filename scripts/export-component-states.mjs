import { mkdir, writeFile } from 'node:fs/promises';
import { getComponentStateManifest, getComponentStateMarkdown } from '../components/catalog.mjs';
import { getW03QaSvg } from '../qa/w03-component-state-matrix.mjs';

const componentDirectory = new URL('../components/', import.meta.url);
const qaDirectory = new URL('../qa/', import.meta.url);

await mkdir(componentDirectory, { recursive: true });
await mkdir(qaDirectory, { recursive: true });
await writeFile(new URL('manifest.json', componentDirectory), JSON.stringify(getComponentStateManifest(), null, 2) + '\n', 'utf8');
await writeFile(new URL('README.md', componentDirectory), getComponentStateMarkdown(), 'utf8');
await writeFile(new URL('w03-component-matrix.svg', qaDirectory), getW03QaSvg() + '\n', 'utf8');

console.log('Exported 8 component groups, 40 state variants, and W03-QA-001.');
