import { componentGroups, componentStateOrder } from '../system.mjs';

const semanticTones = {
  danger: { fill: '#FCEBED', stroke: '#D9868E', text: '#A93640' },
  warning: { fill: '#FFF6DF', stroke: '#E3C179', text: '#8B5E0D' },
  success: { fill: '#E9F8F1', stroke: '#8ED7BA', text: '#147453' },
  echo: { fill: '#F0ECFB', stroke: '#B8ADEC', text: '#5949BE' },
  primary: { fill: '#E1F1FF', stroke: '#82BCE9', text: '#246AA8' }
};

const fixedStates = {
  default: { fill: '#FFFFFF', stroke: '#C7D0D7', text: '#334155' },
  focus: { fill: '#F2F8FE', stroke: '#329EE6', text: '#246AA8' },
  pressed: { fill: '#2D72CC', stroke: '#225EAA', text: '#FFFFFF' },
  disabled: { fill: '#E7EBEF', stroke: '#D2D8E0', text: '#8A96A3' }
};

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function stateColors(group, state) {
  if (state.id === 'semantic') return semanticTones[group.semanticTone] || semanticTones.primary;
  return fixedStates[state.id];
}

export function getW03QaSvg() {
  const width = 1240;
  const headerHeight = 118;
  const rowHeight = 118;
  const height = headerHeight + componentGroups.length * rowHeight + 34;
  const labelWidth = 262;
  const cellWidth = 180;
  const gap = 8;
  const startX = 286;

  const columnHeaders = componentStateOrder.map((state, index) => {
    const x = startX + index * (cellWidth + gap) + cellWidth / 2;
    return '<text x="' + x + '" y="91" text-anchor="middle" class="column">' + escapeXml(state.english) + '</text>';
  }).join('');

  const rows = componentGroups.map((group, rowIndex) => {
    const y = headerHeight + rowIndex * rowHeight;
    const centerY = y + rowHeight / 2;
    const cells = group.states.map((state, stateIndex) => {
      const x = startX + stateIndex * (cellWidth + gap);
      const colors = stateColors(group, state);
      const inset = state.id === 'pressed' ? 5 : 0;
      return [
        '<g data-state="' + state.id + '">',
        '<rect x="' + x + '" y="' + (y + 18) + '" width="' + cellWidth + '" height="82" rx="16" fill="' + colors.fill + '" stroke="' + colors.stroke + '" stroke-width="' + (state.id === 'focus' ? 3 : 1.5) + '"/>',
        state.id === 'focus' ? '<rect x="' + (x + 5) + '" y="' + (y + 23) + '" width="' + (cellWidth - 10) + '" height="72" rx="12" fill="none" stroke="#B9DCF7"/>' : '',
        state.id === 'pressed' ? '<path d="M' + (x + 16) + ' ' + (y + 27 + inset) + 'H' + (x + cellWidth - 16) + '" stroke="#75A9E0" stroke-linecap="round" opacity=".58"/>' : '',
        '<text x="' + (x + cellWidth / 2) + '" y="' + (centerY + 5) + '" text-anchor="middle" fill="' + colors.text + '" class="example">' + escapeXml(state.exampleEnglish) + '</text>',
        '<text x="' + (x + cellWidth / 2) + '" y="' + (centerY + 29) + '" text-anchor="middle" fill="' + colors.text + '" class="state-label">' + escapeXml(state.english) + '</text>',
        '</g>'
      ].join('');
    }).join('');

    return [
      '<g data-component-group="' + group.id + '" data-work-item="' + group.workItemId + '">',
      '<rect x="18" y="' + (y + 8) + '" width="1204" height="102" rx="18" fill="' + (rowIndex % 2 === 0 ? '#F7F9FC' : '#F1F5F9') + '" stroke="#E2E8F0"/>',
      '<text x="38" y="' + (centerY - 13) + '" class="work-item">' + group.workItemId + '</text>',
      '<text x="38" y="' + (centerY + 13) + '" class="group">' + escapeXml(group.english) + '</text>',
      '<text x="38" y="' + (centerY + 36) + '" class="container">3 evidenced containers</text>',
      cells,
      '</g>'
    ].join('');
  }).join('');

  return [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + width + ' ' + height + '" width="' + width + '" height="' + height + '" role="img" aria-labelledby="w03-title w03-desc" data-psm-work-item="W03-QA-001">',
    '<title id="w03-title">W03 component state acceptance matrix</title>',
    '<desc id="w03-desc">Eight real component groups across default, focus, pressed, disabled and semantic states. Static code-native geometry with zero raster dependency.</desc>',
    '<style>text{font-family:ui-sans-serif,system-ui,sans-serif}.title{font-size:26px;font-weight:700;fill:#172033}.note{font-size:13px;fill:#64748B}.column{font-size:13px;font-weight:700;fill:#475569}.work-item{font-family:ui-monospace,monospace;font-size:13px;font-weight:700;fill:#2D72CC}.group{font-size:16px;font-weight:700;fill:#1D2936}.container{font-size:12px;fill:#64748B}.example{font-size:14px;font-weight:700}.state-label{font-size:12px;opacity:.82}</style>',
    '<rect width="' + width + '" height="' + height + '" fill="#E9EEF4"/>',
    '<text x="24" y="38" class="title">W03 · Component State Matrix</text>',
    '<text x="24" y="64" class="note">8 groups × 5 states · 360 / 768 / 1280px acceptance · static feedback · zero raster</text>',
    columnHeaders,
    rows,
    '<text x="24" y="' + (height - 12) + '" class="note">Source: system.mjs · Work item: W03-QA-001</text>',
    '</svg>'
  ].join('');
}
