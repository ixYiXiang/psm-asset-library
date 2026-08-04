import { assetCatalog, getAsset, getAssetSvg, getHeroSvg } from './assets/catalog.mjs';

const primitiveDefinitions = [
  ['01', 'Background', '背景图案', 'background-demo', '网格、渐变球与环境底色'],
  ['02', 'Noise', '噪点纹理', 'noise-demo', '低密度、低对比程序化颗粒'],
  ['03', 'Light', '光效元素', 'light-demo', '定向光束、柔光与空气层'],
  ['04', 'Corner', '圆角高光', 'corner-demo', '白瓷边缘与局部釉面高光'],
  ['05', 'Button', '按钮材质', 'button-demo', '蓝色面状柔光与接触影'],
  ['06', 'Card', '卡片材质', 'card-demo', '冷白表面、细边缘与短阴影'],
  ['07', 'Divider', '分割线', 'divider-demo', '用于层级而不是装饰的细线'],
  ['08', 'Particle', '粒子元素', 'particle-demo', '稀疏点、环与微型金色句点'],
  ['09', 'Pattern', '图案纹理', 'pattern-demo', '可重复的克制几何节奏'],
  ['10', 'Icon Base', '图标基底', 'icon-demo', '小尺寸可辨识的陶瓷几何底']
];

const heroStage = document.querySelector('#hero-stage');
const primitiveGrid = document.querySelector('#primitive-grid');
const assetGrid = document.querySelector('#asset-grid');
const filterGroup = document.querySelector('#filter-group');
const resultCount = document.querySelector('#result-count');
const emptyFilter = document.querySelector('#empty-filter');
const dialog = document.querySelector('#source-dialog');
const sourceTitle = document.querySelector('#source-title');
const sourceKicker = document.querySelector('#source-kicker');
const sourcePreview = document.querySelector('#source-preview');
const sourceCode = document.querySelector('#source-code');
const closeDialogButton = document.querySelector('#close-dialog');
const dialogCopyButton = document.querySelector('#dialog-copy');
const dialogDownloadButton = document.querySelector('#dialog-download');
const toast = document.querySelector('#toast');

let activeAssetId = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderPrimitives() {
  primitiveGrid.innerHTML = primitiveDefinitions.map((primitive) => [
    '<article class="primitive-card">',
    '<div class="primitive-title">',
    '<span>' + primitive[0] + '</span>',
    '<strong>' + primitive[1] + ' / ' + primitive[2] + '</strong>',
    '</div>',
    '<div class="primitive-preview ' + primitive[3] + '" aria-hidden="true"></div>',
    '<p>' + primitive[4] + '</p>',
    '</article>'
  ].join('')).join('');
}

function renderAssetCard(asset) {
  const index = String(asset.index).padStart(2, '0');
  const svg = getAssetSvg(asset.id, 'card-' + asset.index);
  return [
    '<article class="asset-card" data-category="' + asset.category + '" data-asset-id="' + asset.id + '">',
    '<div class="asset-preview">',
    svg,
    '<span class="asset-code-label"><i></i>100% CODE</span>',
    '<span class="asset-sequence">' + index + ' / 17</span>',
    '</div>',
    '<div class="asset-info">',
    '<div class="asset-heading-row">',
    '<div>',
    '<p class="asset-kind">' + asset.category + ' / ' + escapeHtml(asset.categoryName) + '</p>',
    '<h3>' + asset.id + ' · ' + escapeHtml(asset.name) + '</h3>',
    '</div>',
    '<span class="asset-status"><i></i>代码候选</span>',
    '</div>',
    '<p class="asset-description">' + escapeHtml(asset.description) + '</p>',
    '<dl class="asset-meta">',
    '<div><dt>VERSION</dt><dd>v' + asset.version + '</dd></div>',
    '<div><dt>ENGINE</dt><dd>' + asset.engine + '</dd></div>',
    '<div><dt>MODE</dt><dd>' + asset.mode + '</dd></div>',
    '<div><dt>RATIO</dt><dd>' + asset.ratio + '</dd></div>',
    '</dl>',
    '<code class="asset-path">' + escapeHtml(asset.path) + '</code>',
    '<div class="asset-actions">',
    '<button class="asset-action" type="button" data-action="source" data-asset="' + asset.id + '">查看源码</button>',
    '<button class="asset-action" type="button" data-action="copy" data-asset="' + asset.id + '">复制 SVG</button>',
    '<button class="asset-action primary" type="button" data-action="download" data-asset="' + asset.id + '">下载 .svg</button>',
    '</div>',
    '</div>',
    '</article>'
  ].join('');
}

function renderAssets() {
  assetGrid.innerHTML = assetCatalog.map(renderAssetCard).join('');
}

function prettySvg(svg) {
  return svg
    .replace(/></g, '>\n<')
    .replace(/(<defs>)/g, '$1\n')
    .replace(/(<\/defs>)/g, '\n$1');
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const field = document.createElement('textarea');
  field.value = value;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.append(field);
  field.select();
  const copied = document.execCommand('copy');
  field.remove();
  if (!copied) {
    throw new Error('copy command unavailable');
  }
}

function showToast(message) {
  toast.textContent = message + '（点按关闭）';
  toast.classList.add('is-visible');
}

function hideToast() {
  toast.classList.remove('is-visible');
}

function downloadAsset(id) {
  const svg = getAssetSvg(id, 'file');
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = id + '.svg';
  document.body.append(link);
  link.click();
  link.remove();
  queueMicrotask(() => URL.revokeObjectURL(url));
  showToast(id + '.svg 已生成下载');
}

function openSourceDialog(id) {
  const asset = getAsset(id);
  if (!asset) return;
  activeAssetId = id;
  const svg = getAssetSvg(id, 'dialog');
  sourceKicker.textContent = asset.category + ' / ' + asset.categoryName + ' / SVG SOURCE';
  sourceTitle.textContent = asset.id + ' · ' + asset.name;
  sourcePreview.innerHTML = svg;
  sourceCode.textContent = prettySvg(getAssetSvg(id, 'file'));
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }
}

function closeSourceDialog() {
  if (typeof dialog.close === 'function') {
    dialog.close();
  } else {
    dialog.removeAttribute('open');
  }
}

function applyFilter(category) {
  const cards = [...assetGrid.querySelectorAll('.asset-card')];
  let visible = 0;
  cards.forEach((card) => {
    const isVisible = category === 'ALL' || card.dataset.category === category;
    card.hidden = !isVisible;
    if (isVisible) visible += 1;
  });
  filterGroup.querySelectorAll('.filter-button').forEach((button) => {
    const active = button.dataset.filter === category;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  resultCount.textContent = '显示 ' + visible + ' 项资产';
  emptyFilter.hidden = visible !== 0;
}

heroStage.innerHTML = getHeroSvg();
renderPrimitives();
renderAssets();

filterGroup.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-button');
  if (!button) return;
  applyFilter(button.dataset.filter);
});

assetGrid.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const id = button.dataset.asset;
  const action = button.dataset.action;
  if (action === 'source') {
    openSourceDialog(id);
    return;
  }
  if (action === 'download') {
    downloadAsset(id);
    return;
  }
  if (action === 'copy') {
    try {
      await copyText(getAssetSvg(id, 'file'));
      showToast(id + ' 的 SVG 源码已复制');
    } catch {
      showToast('复制未成功，请打开“查看源码”手动复制');
    }
  }
});

closeDialogButton.addEventListener('click', closeSourceDialog);

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeSourceDialog();
});

dialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeSourceDialog();
});

dialogCopyButton.addEventListener('click', async () => {
  if (!activeAssetId) return;
  try {
    await copyText(getAssetSvg(activeAssetId, 'file'));
    showToast(activeAssetId + ' 的 SVG 源码已复制');
  } catch {
    showToast('复制未成功，请在源码区域手动选择');
  }
});

dialogDownloadButton.addEventListener('click', () => {
  if (activeAssetId) downloadAsset(activeAssetId);
});

toast.addEventListener('click', hideToast);
