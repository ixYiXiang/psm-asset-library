import { motionBatchW03B } from './catalog-w03b.mjs';
import { motionCategories } from './catalog.mjs';
import { w03bDemoMarkup } from './demos-w03b.mjs';
import { attachW03BInteractions } from './extension-interactions-w03b.mjs';

const motionGrid = document.querySelector('#motion-grid');
const filterRow = document.querySelector('#filter-row');
const visibleTotal = document.querySelector('#visible-total');
const resultNote = document.querySelector('#result-note');
const codeDialog = document.querySelector('#code-dialog');
const dialogId = document.querySelector('#dialog-id');
const dialogTitle = document.querySelector('#dialog-title');
const dialogCode = document.querySelector('#dialog-code');
const dialogDescription = document.querySelector('#dialog-description');
const dialogMeta = document.querySelector('#dialog-meta');
const dialogSourceLink = document.querySelector('#dialog-source-link');
const copyCodeButton = document.querySelector('#copy-code');
const liveToast = document.querySelector('#live-toast');
let activeW03BItem = null;
let toastTimer = null;

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

const cardMarkup = (item) => `<article class="motion-card" data-id="${item.id}" data-category="${item.category}" data-search="${escapeHtml([
  item.id, item.name, item.en, item.description, item.technique.join(' '), item.source.author
].join(' ').toLowerCase())}">
  <div class="preview-shell"><div class="demo">${w03bDemoMarkup(item.demo)}</div></div>
  <div class="motion-card-info">
    <div class="card-kicker"><span class="card-id">${item.id}</span><span class="origin-badge">PSM 原创</span></div>
    <h3>${escapeHtml(item.name)}<span>${escapeHtml(item.en)}</span></h3>
    <p>${escapeHtml(item.description)}</p>
    <div class="tech-list">${item.technique.map((tech) => `<span>${escapeHtml(tech)}</span>`).join('')}</div>
    <div class="card-actions"><button type="button" data-open-code="${item.id}">查看实现</button><a hidden href="#credits">原始来源</a></div>
  </div>
</article>`;

motionGrid.insertAdjacentHTML('beforeend', motionBatchW03B.map(cardMarkup).join(''));
attachW03BInteractions(motionGrid);

const cards = [...motionGrid.querySelectorAll('.motion-card')];
const updateCounts = () => {
  const allButton = filterRow.querySelector('[data-filter="ALL"] span');
  if (allButton) allButton.textContent = String(cards.length);
  motionCategories.forEach((category) => {
    const count = cards.filter((card) => card.dataset.category === category.id).length;
    const target = filterRow.querySelector(`[data-filter="${category.id}"] span`);
    if (target) target.textContent = String(count);
  });
  visibleTotal.textContent = String(cards.filter((card) => !card.hidden).length).padStart(2, '0');
  resultNote.textContent = `全部分类显示 ${cards.length} 个动效`;
};
updateCounts();

const getExample = (item) => `<!-- ${item.id} · ${item.name}\n     样式：effects-w03b-*.css；行为：extension-*.mjs -->\n<div class="demo">\n  ${w03bDemoMarkup(item.demo).replaceAll('\n', '\n  ')}\n</div>`;

const showToast = (message) => {
  liveToast.textContent = message;
  liveToast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => liveToast.classList.remove('is-visible'), 1800);
};

motionGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-open-code]');
  if (!button) return;
  const item = motionBatchW03B.find((entry) => entry.id === button.dataset.openCode);
  if (!item) return;
  event.stopImmediatePropagation();
  activeW03BItem = item;
  dialogId.textContent = item.id;
  dialogTitle.textContent = `${item.name} / ${item.en}`;
  dialogCode.textContent = getExample(item);
  dialogDescription.textContent = `${item.description} ${item.source.note}`;
  dialogMeta.innerHTML = [
    ['分类', motionCategories.find((category) => category.id === item.category)?.name || item.category],
    ['交互', item.interaction], ['技术', item.technique.join(' · ')],
    ['来源', item.source.platform], ['作者', item.source.author], ['许可', item.source.license]
  ].map(([term, detail]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(detail)}</dd></div>`).join('');
  dialogSourceLink.hidden = true;
  if (typeof codeDialog.showModal === 'function') codeDialog.showModal();
  else codeDialog.setAttribute('open', '');
}, true);

copyCodeButton.addEventListener('click', async (event) => {
  if (!activeW03BItem) return;
  event.stopImmediatePropagation();
  try {
    await navigator.clipboard.writeText(getExample(activeW03BItem));
    showToast(`${activeW03BItem.id} 示例已复制`);
  } catch {
    showToast('复制失败，请手动选择代码');
  }
}, true);
