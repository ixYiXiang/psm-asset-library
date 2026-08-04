import { mkdir, writeFile } from 'node:fs/promises';
import { expansionWaves, getRoadmapManifest, getRoadmapMarkdown } from '../roadmap.mjs';

const roadmapDirectory = new URL('../roadmap/', import.meta.url);

await mkdir(roadmapDirectory, { recursive: true });
await writeFile(new URL('expansion-plan.json', roadmapDirectory), JSON.stringify(getRoadmapManifest(), null, 2) + '\n', 'utf8');
await writeFile(new URL('README.md', roadmapDirectory), getRoadmapMarkdown(), 'utf8');

console.log('Exported ' + expansionWaves.length + ' PSM expansion waves, including the recurring quality loop.');
