import { motionCatalog, motionCategories, motionCounts } from './catalog.mjs';
import { demoMarkup } from './demos.mjs';

const motionGrid = document.querySelector('#motion-grid');
const filterRow = document.querySelector('#filter-row');
const searchInput = document.querySelector('#motion-search');
const visibleTotal = document.querySelector('#visible-total');
const resultNote = document.querySelector('#result-note');
const emptyState = document.querySelector('#empty-state');
const motionToggle = document.querySelector('#motion-toggle');
const toggleLabel = motionToggle.querySelector('.toggle-label');
const creditList = document.querySelector('#credit-list');
const densityButtons = [...document.querySelectorAll('[data-density]')];
const codeDialog = document.querySelector('#code-dialog');
const dialogId = document.querySelector('#dialog-id');
const dialogTitle = document.querySelector('#dialog-title');
const dialogCode = document.querySelector('#dialog-code');
const dialogDescription = document.querySelector('#dialog-description');
const dialogMeta = document.querySelector('#dialog-meta');
const dialogSourceLink = document.querySelector('#dialog-source-link');
const copyCodeButton = document.querySelector('#copy-code');
const liveToast = document.querySelector('#live-toast');

let activeCategory = 'ALL';
let activeItem = null;
let toastTimer = null;

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

function cardMarkup(item) {
  const source = item.source;
  const sourceLabel = source.kind === 'adapted' ? `Uiverse · ${source.author}` : 'PSM 原创';
  const sourceClass = source.kind === 'adapted' ? ' adapted' : '';
  return `<article class="motion-card" data-id="${item.id}" data-category="${item.category}" data-search="${escapeHtml([
    item.id, item.name, item.en, item.description, item.technique.join(' '), source.author
  ].join(' ').toLowerCase())}">
    <div class="preview-shell"><div class="demo">${demoMarkup(item.demo)}</div></div>
    <div class="motion-card-info">
      <div class="card-kicker"><span class="card-id">${item.id}</span><span class="origin-badge${sourceClass}">${escapeHtml(sourceLabel)}</span></div>
      <h3>${escapeHtml(item.name)}<span>${escapeHtml(item.en)}</span></h3>
      <p>${escapeHtml(item.description)}</p>
      <div class="tech-list">${item.technique.map((tech) => `<span>${escapeHtml(tech)}</span>`).join('')}</div>
      <div class="card-actions">
        <button type="button" data-open-code="${item.id}">查看实现</button>
        <a href="${source.url || '#credits'}" ${source.url ? 'target="_blank" rel="noreferrer"' : ''} ${source.url ? '' : 'hidden'}>原始来源</a>
      </div>
    </div>
  </article>`;
}

function renderFilters() {
  const all = `<button type="button" class="filter-button is-active" data-filter="ALL" aria-pressed="true">全部 <span>${motionCatalog.length}</span></button>`;
  const categoryButtons = motionCategories.map((category) => (
    `<button type="button" class="filter-button" data-filter="${category.id}" aria-pressed="false">${escapeHtml(category.name)} <span>${motionCounts[category.id]}</span></button>`
  )).join('');
  filterRow.innerHTML = all + categoryButtons;
}

function renderCatalog() {
  motionGrid.innerHTML = motionCatalog.map(cardMarkup).join('');
  attachPreviewInteractions();
  applyFilters();
}

function renderCredits() {
  creditList.innerHTML = motionCatalog
    .filter((item) => item.source.kind === 'adapted')
    .map((item) => `<article class="credit-item">
      <span>${item.id}</span>
      <div><strong>${escapeHtml(item.source.author)}</strong><small>${escapeHtml(item.name)} · ${escapeHtml(item.source.license)} · ${escapeHtml(item.source.note)}</small></div>
      <a href="${item.source.url}" target="_blank" rel="noreferrer">原页面</a>
    </article>`)
    .join('');
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  let count = 0;
  motionGrid.querySelectorAll('.motion-card').forEach((card) => {
    const categoryMatches = activeCategory === 'ALL' || card.dataset.category === activeCategory;
    const queryMatches = !query || card.dataset.search.includes(query);
    const visible = categoryMatches && queryMatches;
    card.hidden = !visible;
    if (visible) count += 1;
  });

  visibleTotal.textContent = String(count).padStart(2, '0');
  const categoryName = activeCategory === 'ALL'
    ? '全部分类'
    : motionCategories.find((category) => category.id === activeCategory)?.name || activeCategory;
  resultNote.textContent = query
    ? `${categoryName}中找到 ${count} 个与“${searchInput.value.trim()}”匹配的动效`
    : `${categoryName}显示 ${count} 个动效`;
  emptyState.hidden = count !== 0;
}

function showToast(message) {
  liveToast.textContent = message;
  liveToast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => liveToast.classList.remove('is-visible'), 1800);
}

function getExample(item) {
  return `<!-- ${item.id} · ${item.name}\n     样式来源：motion.css；行为增强：motion.js -->\n<div class="demo">\n  ${demoMarkup(item.demo).replaceAll('\n', '\n  ')}\n</div>`;
}

function openCodeDialog(id) {
  const item = motionCatalog.find((entry) => entry.id === id);
  if (!item) return;
  activeItem = item;
  dialogId.textContent = item.id;
  dialogTitle.textContent = `${item.name} / ${item.en}`;
  dialogCode.textContent = getExample(item);
  dialogDescription.textContent = `${item.description} ${item.source.note}`;
  dialogMeta.innerHTML = [
    ['分类', motionCategories.find((category) => category.id === item.category)?.name || item.category],
    ['交互', item.interaction],
    ['技术', item.technique.join(' · ')],
    ['来源', item.source.platform],
    ['作者', item.source.author],
    ['许可', item.source.license]
  ].map(([term, detail]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(detail)}</dd></div>`).join('');

  dialogSourceLink.hidden = !item.source.url;
  if (item.source.url) dialogSourceLink.href = item.source.url;
  if (typeof codeDialog.showModal === 'function') codeDialog.showModal();
  else codeDialog.setAttribute('open', '');
}

function attachPreviewInteractions() {
  motionGrid.querySelectorAll('.magnetic-wrap').forEach((wrap) => {
    const button = wrap.querySelector('.magnetic-button');
    wrap.addEventListener('pointermove', (event) => {
      if (document.body.dataset.motion === 'paused') return;
      const rect = wrap.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
      button.style.setProperty('--mx', `${x}px`);
      button.style.setProperty('--my', `${y}px`);
    });
    wrap.addEventListener('pointerleave', () => {
      button.style.setProperty('--mx', '0px');
      button.style.setProperty('--my', '0px');
    });
  });

  motionGrid.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      if (document.body.dataset.motion === 'paused') return;
      const rect = card.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = (event.clientY - rect.top) / rect.height;
      card.style.setProperty('--ry', `${(nx - 0.5) * 12}deg`);
      card.style.setProperty('--rx', `${(0.5 - ny) * 10}deg`);
      card.style.setProperty('--gx', `${nx * 100}%`);
      card.style.setProperty('--gy', `${ny * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--gx', '50%');
      card.style.setProperty('--gy', '50%');
    });
  });

  motionGrid.querySelectorAll('.elastic-dock').forEach((dock) => {
    const items = [...dock.querySelectorAll('.dock-item')];
    dock.addEventListener('pointermove', (event) => {
      if (document.body.dataset.motion === 'paused') return;
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(event.clientX - (rect.left + rect.width / 2));
        const influence = Math.max(0, 1 - distance / 90);
        item.style.setProperty('--scale', String(1 + influence * 0.38));
        item.style.setProperty('--lift', `${-influence * 18}px`);
      });
    });
    dock.addEventListener('pointerleave', () => items.forEach((item) => {
      item.style.setProperty('--scale', '1');
      item.style.setProperty('--lift', '0px');
    }));
  });
}

filterRow.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  activeCategory = button.dataset.filter;
  filterRow.querySelectorAll('[data-filter]').forEach((candidate) => {
    const active = candidate === button;
    candidate.classList.toggle('is-active', active);
    candidate.setAttribute('aria-pressed', String(active));
  });
  applyFilters();
});

searchInput.addEventListener('input', applyFilters);

densityButtons.forEach((button) => {
  button.addEventListener('click', () => {
    densityButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-pressed', String(active));
    });
    motionGrid.dataset.density = button.dataset.density;
  });
});

motionToggle.addEventListener('click', () => {
  const paused = document.body.dataset.motion !== 'paused';
  document.body.dataset.motion = paused ? 'paused' : 'running';
  motionToggle.setAttribute('aria-pressed', String(paused));
  toggleLabel.textContent = paused ? '继续动效' : '暂停动效';
  showToast(paused ? '页面动效已暂停' : '页面动效已恢复');
});

motionGrid.addEventListener('click', (event) => {
  const codeButton = event.target.closest('[data-open-code]');
  if (codeButton) {
    openCodeDialog(codeButton.dataset.openCode);
    return;
  }

  const submit = event.target.closest('.submit-morph');
  if (submit && !submit.classList.contains('is-loading')) {
    submit.classList.remove('is-done');
    submit.classList.add('is-loading');
    submit.disabled = true;
    setTimeout(() => {
      submit.classList.remove('is-loading');
      submit.classList.add('is-done');
      setTimeout(() => {
        submit.classList.remove('is-done');
        submit.disabled = false;
      }, 1200);
    }, 1050);
    return;
  }

  const menu = event.target.closest('.menu-button');
  if (menu) {
    const open = menu.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    return;
  }

  const tabButton = event.target.closest('.trace-tabs button');
  if (tabButton) {
    const tabs = tabButton.closest('.trace-tabs');
    const buttons = [...tabs.querySelectorAll('button')];
    buttons.forEach((button) => {
      const active = button === tabButton;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
    tabs.style.setProperty('--tab-left', `${tabButton.offsetLeft - 5}px`);
    tabs.style.setProperty('--tab-width', `${tabButton.offsetWidth}px`);
    return;
  }

  const pillButton = event.target.closest('.pill-slider button');
  if (pillButton) {
    const slider = pillButton.closest('.pill-slider');
    const buttons = [...slider.querySelectorAll('button')];
    const index = buttons.indexOf(pillButton);
    buttons.forEach((button) => button.classList.toggle('is-active', button === pillButton));
    slider.style.setProperty('--index', String(index));
    return;
  }

  const segmentButton = event.target.closest('.segmented-choice button');
  if (segmentButton) {
    const segmented = segmentButton.closest('.segmented-choice');
    const buttons = [...segmented.querySelectorAll('button')];
    const index = buttons.indexOf(segmentButton);
    buttons.forEach((button) => button.setAttribute('aria-selected', String(button === segmentButton)));
    segmented.style.setProperty('--seg-index', String(index));
  }
});

motionGrid.addEventListener('change', (event) => {
  const switchInput = event.target.closest('.track-switch input');
  if (!switchInput) return;
  switchInput.closest('.track-switch').querySelector('strong').textContent = switchInput.checked ? '已启用' : '未启用';
});

motionGrid.addEventListener('input', (event) => {
  const input = event.target.closest('.validation-field input');
  if (!input) return;
  const field = input.closest('.validation-field');
  const icon = field.querySelector('.validation-icon');
  const message = field.querySelector('.validation-message');
  const value = input.value.trim();
  field.classList.remove('is-valid', 'is-invalid');
  if (value.length < 4) {
    icon.textContent = '✓';
    message.textContent = '输入至少 4 个字符开始校验';
  } else if (/^PSM-MO-\d{3}$/i.test(value)) {
    field.classList.add('is-valid');
    icon.textContent = '✓';
    message.textContent = '编号格式有效';
  } else {
    field.classList.add('is-invalid');
    icon.textContent = '!';
    message.textContent = '请使用 PSM-MO-000 格式';
  }
});

copyCodeButton.addEventListener('click', async () => {
  if (!activeItem) return;
  try {
    await navigator.clipboard.writeText(getExample(activeItem));
    showToast(`${activeItem.id} 示例已复制`);
  } catch {
    showToast('复制失败，请手动选择代码');
  }
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.dataset.motion = 'paused';
  motionToggle.setAttribute('aria-pressed', 'true');
  toggleLabel.textContent = '继续动效';
}

renderFilters();
renderCatalog();
renderCredits();
