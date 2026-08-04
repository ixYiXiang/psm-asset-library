import { componentGroups, componentStateOrder } from '../system.mjs';

export const componentAcceptanceViewports = Object.freeze([360, 768, 1280]);

export const w03ComponentItems = Object.freeze(componentGroups.map((group) => Object.freeze({
  id: group.workItemId,
  kind: 'component-state',
  group: group.id,
  name: group.name,
  english: group.english,
  realSemantic: group.name + '的默认、关注、按下、禁用与语义状态',
  targetContainers: group.targetContainers,
  sourceFile: 'system.mjs',
  acceptanceViewports: componentAcceptanceViewports
})));

export const w03BatchItems = Object.freeze([
  ...w03ComponentItems,
  Object.freeze({
    id: 'W03-AD-001',
    kind: 'adapter',
    name: '组件状态导出适配器',
    realSemantic: '从 system.mjs 派生 WXSS、Manifest、README 与页面覆盖数',
    targetContainers: Object.freeze(['GitHub Pages 组件章节', 'tokens/psm-components.wxss', 'components/manifest.json']),
    sourceFile: 'scripts/export-component-states.mjs',
    acceptanceViewports: componentAcceptanceViewports
  }),
  Object.freeze({
    id: 'W03-QA-001',
    kind: 'qa',
    name: '组件状态与容器 QA 矩阵',
    realSemantic: '逐组核对五态、真实容器、静态反馈与零栅格边界',
    targetContainers: Object.freeze(['qa/w03-component-matrix.svg', 'scripts/validate-assets.mjs']),
    sourceFile: 'qa/w03-component-state-matrix.mjs',
    acceptanceViewports: componentAcceptanceViewports
  })
]);

export function getComponentStateManifest() {
  return {
    schema_version: 1,
    name: 'PSM Component State Matrix',
    version: '1.0.0',
    source_of_truth: 'system.mjs',
    strategy: 'code-native-component-states',
    coverage: {
      groups: componentGroups.length,
      state_types: componentStateOrder.length,
      state_variants: componentGroups.length * componentStateOrder.length,
      work_items: w03BatchItems.length
    },
    acceptance_viewports: componentAcceptanceViewports,
    state_order: componentStateOrder,
    groups: componentGroups,
    work_items: w03BatchItems,
    deliverables: [
      'tokens/psm-components.wxss',
      'components/manifest.json',
      'components/README.md',
      'qa/w03-component-matrix.svg'
    ],
    constraints: {
      generated_images: false,
      raster_dependencies: false,
      animation_required: false,
      production_weui_replacement: false,
      production_miniprogram_modified: false
    }
  };
}

export function getComponentStateMarkdown() {
  const lines = [
    '# PSM Component State Matrix',
    '',
    'W03 publishes eight real component groups with five static states each. The state system is a reviewable design asset layer; it does not modify the production mini-program or replace WeUI icons.',
    '',
    '## Coverage',
    '',
    '- 8 component groups',
    '- 5 state types per group: Default / Focus / Pressed / Disabled / Semantic',
    '- 40 state variants',
    '- Acceptance viewports: 360px / 768px / 1280px',
    '',
    '## Groups and real containers',
    '',
    '| Work item | Group | Real containers | Semantic example |',
    '|---|---|---|---|'
  ];

  for (const group of componentGroups) {
    const semanticState = group.states.find((state) => state.id === 'semantic');
    lines.push('| ' + group.workItemId + ' | ' + group.english + ' / ' + group.name + ' | ' + group.targetContainers.join('<br>') + ' | ' + semanticState.example + ' |');
  }

  lines.push(
    '',
    '## Generated deliverables',
    '',
    '- `components/manifest.json` — machine-readable groups, states, containers and work items',
    '- `tokens/psm-components.wxss` — PSM component and state helpers',
    '- `qa/w03-component-matrix.svg` — static visual QA matrix',
    '- GitHub Pages `#system` → Components — responsive live preview',
    '',
    '## Boundaries',
    '',
    '- No PNG, JPEG, WebP, GIF, Data URL, SVG image element or external raster dependency.',
    '- No animation or transition is required to communicate state.',
    '- No production mini-program file or WeUI function icon is changed.',
    '- W03 IDs are wave work-item IDs, not stable asset IDs.',
    ''
  );

  return lines.join('\n');
}
