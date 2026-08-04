const ICON_ACCEPTANCE_SIZES = Object.freeze([24, 32, 64]);
const ICON_VERIFY_STEPS = Object.freeze([
  'compare the 24 × 24 geometry with each listed near-semantic icon',
  'render at 24, 32, and 64px; use 16px only as a stress preview',
  'confirm currentColor, unique slug and stable contiguous ID',
  'confirm independent SVG, Sprite, Manifest and CSS exports match the catalog'
]);

const iconItem = ({ id, slug, semantic, targetContainers, compareAgainst, summary }) => Object.freeze({
  id,
  kind: 'icon',
  slug,
  semantic,
  targetContainers: Object.freeze(targetContainers),
  sourceFiles: Object.freeze(['icons/catalog.mjs', 'icons/generated/' + id + '.svg']),
  acceptanceSizes: ICON_ACCEPTANCE_SIZES,
  stressSize: 16,
  compareAgainst: Object.freeze(compareAgainst),
  verifySteps: ICON_VERIFY_STEPS,
  changeSummary: summary
});

export const w02BatchItems = Object.freeze([
  iconItem({
    id: 'PSM-IC-049',
    slug: 'close',
    semantic: 'Dismiss the current dialog or temporary overlay without navigating back.',
    targetContainers: ['PSM Code Lab source dialog header', 'PSM modal or sheet header review mockups'],
    compareAgainst: ['PSM-IC-006', 'PSM-IC-021'],
    summary: 'Adds a bare close mark that remains distinct from Back and circled Danger.'
  }),
  iconItem({
    id: 'PSM-IC-050',
    slug: 'copy',
    semantic: 'Copy source code, text, or a value to the clipboard.',
    targetContainers: ['PSM Code Lab source dialog actions', 'PSM Code Lab Sprite delivery actions'],
    compareAgainst: ['PSM-IC-038', 'PSM-IC-030'],
    summary: 'Adds overlapping sheets for an existing clipboard action.'
  }),
  iconItem({
    id: 'PSM-IC-051',
    slug: 'save',
    semantic: 'Persist the current draft or local transaction state.',
    targetContainers: ['AI 编程日志 draft editor', 'AI 编程日志 local transaction editor'],
    compareAgainst: ['PSM-IC-028', 'PSM-IC-034'],
    summary: 'Adds explicit persistence semantics, separate from Favorite and Backup.'
  }),
  iconItem({
    id: 'PSM-IC-052',
    slug: 'download',
    semantic: 'Download an exported asset or document to the current device.',
    targetContainers: ['PSM Code Lab asset delivery actions', 'AI 编程日志 document export module'],
    compareAgainst: ['PSM-IC-011', 'PSM-IC-034'],
    summary: 'Adds a downward device transfer, opposite to Export and cloud Backup.'
  }),
  iconItem({
    id: 'PSM-IC-053',
    slug: 'publish',
    semantic: 'Make an approved log revision publicly available.',
    targetContainers: ['AI 编程日志 publish control', 'AI 编程日志 published-state review surface'],
    compareAgainst: ['PSM-IC-046', 'PSM-IC-030'],
    summary: 'Adds a broadcast form for public release, not notification or sharing.'
  }),
  iconItem({
    id: 'PSM-IC-054',
    slug: 'submit-review',
    semantic: 'Send a draft or content revision into the review queue.',
    targetContainers: ['AI 编程日志 draft submission control', 'AI 编程日志 revision submission control'],
    compareAgainst: ['PSM-IC-011', 'PSM-IC-020'],
    summary: 'Adds document-to-queue motion for a real review submission path.'
  }),
  iconItem({
    id: 'PSM-IC-055',
    slug: 'moderation-review',
    semantic: 'Inspect and decide a log, revision, nickname, user, or report as an administrator.',
    targetContainers: ['AI 编程日志 admin review list', 'AI 编程日志 moderation decision panel'],
    compareAgainst: ['PSM-IC-048', 'PSM-IC-020'],
    summary: 'Adds a clipboard inspection mark, separate from Checklist and Pending.'
  }),
  iconItem({
    id: 'PSM-IC-056',
    slug: 'report',
    semantic: 'Submit content for administrator moderation.',
    targetContainers: ['AI 编程日志 report action', 'AI 编程日志 admin report queue'],
    compareAgainst: ['PSM-IC-045', 'PSM-IC-021'],
    summary: 'Adds an alert document for reporting, not a reminder flag or generic danger state.'
  }),
  iconItem({
    id: 'PSM-IC-057',
    slug: 'echo-pause',
    semantic: 'Pause a public echo thread while retaining published history.',
    targetContainers: ['日志回响 status control', '日志回响 active-thread management surface'],
    compareAgainst: ['PSM-IC-013', 'PSM-IC-024'],
    summary: 'Combines the Echo signal with explicit pause bars for the v0.4 lifecycle.'
  }),
  iconItem({
    id: 'PSM-IC-058',
    slug: 'echo-resume',
    semantic: 'Resume a paused echo thread under current revision rules.',
    targetContainers: ['日志回响 paused-thread control', '日志回响 history status surface'],
    compareAgainst: ['PSM-IC-013', 'PSM-IC-047'],
    summary: 'Combines the Echo signal with a single resume arc, distinct from two-way Sync.'
  }),
  Object.freeze({
    id: 'W02-AD-001',
    kind: 'adapter',
    semantic: 'Derive all visible and exported icon coverage counts from icons/catalog.mjs.',
    targetContainers: ['GitHub Pages hero and icon catalog', 'icon export README', 'system manifest and validation output'],
    sourceFiles: Object.freeze(['app.js', 'index.html', 'scripts/export-icons.mjs', 'scripts/validate-assets.mjs', 'README.md']),
    acceptanceSizes: Object.freeze(['all supported viewport sizes']),
    verifySteps: Object.freeze(['run npm run export', 'run npm test', 'compare page, Manifest, Sprite and generated-file totals']),
    changeSummary: 'Removes W01-only 48/6 coverage assumptions while preserving the W01 history.'
  }),
  Object.freeze({
    id: 'W02-QA-001',
    kind: 'qa',
    semantic: 'Make W02 semantic evidence, target containers, near-semantic comparisons and size checks executable.',
    targetContainers: ['repository validation pipeline', 'W02 pull-request evidence'],
    sourceFiles: Object.freeze(['qa/w02-semantic-matrix.mjs', 'scripts/export-w02-qa.mjs', 'qa/w02-icon-matrix.svg', 'scripts/validate-assets.mjs']),
    acceptanceSizes: Object.freeze([16, 24, 32, 64]),
    verifySteps: Object.freeze(['validate exactly ten reserved W02 icon IDs', 'validate comparator IDs and unique geometry', 'validate no raster or external SVG resource is introduced']),
    changeSummary: 'Adds a machine-readable semantic collision and acceptance matrix without claiming a stable asset number.'
  })
]);

export const w02IconItems = Object.freeze(w02BatchItems.filter((item) => item.kind === 'icon'));

export const w02Evidence = Object.freeze([
  'Notion: PSM｜当前设计基线',
  'Notion: PSM｜资产输出规格基线 v1',
  'Notion: AI 编程日志｜基本程序基线',
  'Notion: AI 编程日志｜日志回响系统实施基线 v0.4｜干净重构版',
  'GitHub main: roadmap.mjs and current PSM Code Lab controls'
]);

const escapeXml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

export function getW02QaSvg(iconCatalog) {
  const width = 960;
  const headerHeight = 104;
  const rowHeight = 96;
  const height = headerHeight + w02IconItems.length * rowHeight + 40;
  const sizeColumns = [
    [16, 310],
    [24, 400],
    [32, 500],
    [64, 640]
  ];
  const icons = w02IconItems.map((item) => {
    const icon = iconCatalog.find((entry) => entry.id === item.id);
    if (!icon) throw new Error('Missing W02 icon for QA matrix: ' + item.id);
    return [item, icon];
  });

  const headerLabels = sizeColumns.map(([size, x]) => '<text x="' + x + '" y="89" text-anchor="middle">' + size + 'px</text>').join('');
  const rows = icons.map(([item, icon], index) => {
    const y = headerHeight + index * rowHeight;
    const centerY = y + rowHeight / 2;
    const previews = sizeColumns.map(([size, x]) => [
      '<rect x="' + (x - 38) + '" y="' + (centerY - 38) + '" width="76" height="76" rx="12" fill="#ffffff" stroke="#dce5ed"/>',
      '<svg x="' + (x - size / 2) + '" y="' + (centerY - size / 2) + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" color="#1e293b" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + icon.body + '</svg>'
    ].join('')).join('');
    return [
      '<g>',
      '<rect x="16" y="' + y + '" width="928" height="88" rx="14" fill="' + (index % 2 === 0 ? '#f7f9fc' : '#f1f5f9') + '" stroke="#e2e8f0"/>',
      '<text x="36" y="' + (centerY - 9) + '" class="id">' + item.id + '</text>',
      '<text x="36" y="' + (centerY + 17) + '" class="name">' + escapeXml(icon.english) + '</text>',
      previews,
      '<text x="744" y="' + (centerY - 9) + '" class="compare">Compare</text>',
      '<text x="744" y="' + (centerY + 17) + '" class="comparators">' + escapeXml(item.compareAgainst.join(' · ')) + '</text>',
      '</g>'
    ].join('');
  }).join('');

  return [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + width + ' ' + height + '" width="' + width + '" height="' + height + '" role="img" aria-labelledby="w02-qa-title w02-qa-desc" data-psm-work-item="W02-QA-001">',
    '<title id="w02-qa-title">W02 semantic and size acceptance matrix</title>',
    '<desc id="w02-qa-desc">Ten W02 icons at 16, 24, 32 and 64 pixels with explicit near-semantic comparators. Sixteen pixels is a stress preview; 24, 32 and 64 pixels are acceptance sizes.</desc>',
    '<style>text{font-family:ui-sans-serif,system-ui,sans-serif;fill:#334155;font-size:14px}.title{font-size:24px;font-weight:700;fill:#172033}.note{font-size:13px;fill:#64748b}.id{font-family:ui-monospace,monospace;font-size:13px;font-weight:700;fill:#2d72cc}.name{font-size:14px;font-weight:600}.compare{font-size:12px;font-weight:700;fill:#64748b}.comparators{font-family:ui-monospace,monospace;font-size:12px;fill:#475569}</style>',
    '<rect width="' + width + '" height="' + height + '" fill="#eef2f6"/>',
    '<text x="24" y="35" class="title">W02-A · Semantic / Size QA</text>',
    '<text x="24" y="61" class="note">24 / 32 / 64px acceptance · 16px stress only · currentColor · zero raster</text>',
    headerLabels,
    rows,
    '<text x="24" y="' + (height - 14) + '" class="note">Source: icons/catalog.mjs · Work item: W02-QA-001</text>',
    '</svg>'
  ].join('');
}
