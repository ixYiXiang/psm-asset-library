import { assetCatalog, getAsset, getAssetSvg, getHeroSvg } from './assets/catalog.mjs';
import {
  iconCatalog,
  iconCategories,
  getIcon,
  getIconSvg,
  getIconSprite,
  getIconCss,
  getIconManifest
} from './icons/catalog.mjs';
import { expansionWaves, continuousLoop } from './roadmap.mjs';
import {
  systemChapters,
  world,
  materials,
  materialDetails,
  lightLayers,
  shadowScale,
  textureLayers,
  textureStyles,
  colorGroups,
  fontFamilies,
  fontWeights,
  typeScale,
  readingHierarchy,
  componentGroups,
  svgPrimitives,
  spacingScale,
  radiusScale,
  zIndexScale,
  durationScale,
  tokenMap,
  renderingGoals,
  hierarchyRules,
  applicationRules,
  renderingChecklist,
  getWxssTokens,
  getComponentWxss
} from './system.mjs';

const primitiveDescriptions = {
  'Background': '网格、渐变球与环境底色',
  'Noise': '低密度、低对比程序化颗粒',
  'Light': '定向光束、柔光与空气层',
  'Corner Highlight': '白瓷边缘与局部釉面高光',
  'Button Material': '蓝色面状柔光与接触影',
  'Card Material': '冷白表面、细边缘与短阴影',
  'Divider': '用于层级而不是装饰的细线',
  'Particle': '稀疏点、环与微型金色句点',
  'Pattern': '可重复的克制几何节奏',
  'Icon Base': '小尺寸可辨识的陶瓷几何底'
};

const primitiveClass = {
  'Background': 'background-demo',
  'Noise': 'noise-demo',
  'Light': 'light-demo',
  'Corner Highlight': 'corner-demo',
  'Button Material': 'button-demo',
  'Card Material': 'card-demo',
  'Divider': 'divider-demo',
  'Particle': 'particle-demo',
  'Pattern': 'pattern-demo',
  'Icon Base': 'icon-demo'
};

const heroStage = document.querySelector('#hero-stage');
const primitiveGrid = document.querySelector('#primitive-grid');
const assetGrid = document.querySelector('#asset-grid');
const filterGroup = document.querySelector('#filter-group');
const resultCount = document.querySelector('#result-count');
const emptyFilter = document.querySelector('#empty-filter');
const iconGrid = document.querySelector('#icon-grid');
const iconFilterGroup = document.querySelector('#icon-filter-group');
const iconResultCount = document.querySelector('#icon-result-count');
const iconEmptyFilter = document.querySelector('#icon-empty-filter');
const iconDelivery = document.querySelector('#icon-delivery');
const roadmapGrid = document.querySelector('#roadmap-grid');
const roadmapLoop = document.querySelector('#roadmap-loop');
const dialog = document.querySelector('#source-dialog');
const sourceTitle = document.querySelector('#source-title');
const sourceKicker = document.querySelector('#source-kicker');
const sourcePreview = document.querySelector('#source-preview');
const sourceCode = document.querySelector('#source-code');
const closeDialogButton = document.querySelector('#close-dialog');
const dialogCopyButton = document.querySelector('#dialog-copy');
const dialogDownloadButton = document.querySelector('#dialog-download');
const toast = document.querySelector('#toast');
const systemNav = document.querySelector('#system-nav');
const systemContent = document.querySelector('#system-content');

let activeSource = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderPrimitives() {
  primitiveGrid.innerHTML = svgPrimitives.map((primitive) => [
    '<article class="primitive-card">',
    '<div class="primitive-title">',
    '<span>' + primitive.index + '</span>',
    '<strong>' + primitive.name + ' / ' + primitive.cn + '</strong>',
    '</div>',
    '<div class="primitive-preview ' + primitiveClass[primitive.name] + '" aria-hidden="true"></div>',
    '<p>' + primitiveDescriptions[primitive.name] + '</p>',
    '</article>'
  ].join('')).join('');
}

function chapterShell(id, body) {
  const chapter = systemChapters.find((item) => item.id === id);
  return [
    '<article class="system-chapter" id="chapter-' + chapter.id + '">',
    '<header class="chapter-heading">',
    '<p class="chapter-number">' + chapter.index + '</p>',
    '<div><p class="chapter-kicker">' + chapter.english + '</p><h3>' + chapter.title + '</h3><p>' + chapter.summary + '</p></div>',
    '<a href="#system-nav" aria-label="返回章节导航">↑</a>',
    '</header>',
    body,
    '</article>'
  ].join('');
}

function renderWorldChapter() {
  const colorCards = world.colors.map((color) => [
    '<div class="world-token"><i style="--world-color:' + color.value + '"></i><span>' + color.name + '</span><code>' + color.value + '</code></div>'
  ].join('')).join('');
  return chapterShell('world', [
    '<div class="chapter-grid chapter-grid-world">',
    '<section class="spec-panel world-stage-panel">',
    '<div class="panel-title"><h4>环境基础 / Environment</h4><span>Base of Everything</span></div>',
    '<div class="world-code-stage" aria-label="程序化世界环境示意"><i class="world-sun"></i><i class="world-air"></i><i class="world-mineral"></i><i class="world-cool"></i><b>135°</b></div>',
    '<div class="world-token-row">' + colorCards + '</div>',
    '</section>',
    '<section class="spec-panel world-rules-panel">',
    '<div class="panel-title"><h4>参数概览</h4><span>World Parameters</span></div>',
    '<dl class="spec-definition-list">',
    '<div><dt>光源方向</dt><dd>' + world.direction + ' / ' + world.angle + '</dd></div>',
    '<div><dt>主色调</dt><dd>冷灰蓝 / ' + world.temperature + '</dd></div>',
    '<div><dt>对比度</dt><dd>低对比，中心与下部保持留白</dd></div>',
    '<div><dt>饱和度</dt><dd>低饱和，蓝金只承担操作与句点</dd></div>',
    '</dl>',
    '<div class="keyword-cloud">' + world.keywords.map((item) => '<span>' + item + '</span>').join('') + '</div>',
    '<p class="panel-note">应用：' + world.applications.join(' / ') + '</p>',
    '</section>',
    '</div>'
  ].join(''));
}

function renderMaterialChapter() {
  const cards = materials.map((material) => [
    '<article class="material-spec-card">',
    '<div class="material-spec-swatch material-' + material.id + '"></div>',
    '<h4>' + material.name + '</h4><p class="material-cn">' + material.cn + '</p>',
    '<dl><div><dt>表面</dt><dd>' + material.surface + '</dd></div><div><dt>光泽</dt><dd>' + material.light + '</dd></div><div><dt>粗糙度</dt><dd>' + material.roughness + '</dd></div><div><dt>厚度感</dt><dd>' + material.thickness + '</dd></div></dl>',
    '<p>' + material.note + '</p>',
    '</article>'
  ].join('')).join('');
  const details = materialDetails.map((detail, index) => [
    '<div class="material-detail"><div class="detail-visual detail-' + (index + 1) + '"></div><h4>' + detail[0] + '</h4><p>' + detail[1] + '</p></div>'
  ].join('')).join('');
  return chapterShell('material', '<div class="material-spec-grid">' + cards + '</div><div class="material-detail-grid">' + details + '</div>');
}

function renderLightingChapter() {
  const layers = lightLayers.map((layer) => [
    '<article class="light-layer-spec" style="--layer-index:' + layer.index + '">',
    '<div class="light-sphere"><i></i></div>',
    '<p class="layer-index">0' + layer.index + '</p><h4>' + layer.name + '</h4><span>' + layer.english + '</span>',
    '<strong>' + layer.value + '</strong><p>' + layer.purpose + '</p><small>' + layer.temperature + '</small>',
    '</article>'
  ].join('')).join('');
  const shadows = shadowScale.map((shadow, index) => [
    '<article class="shadow-spec-card">',
    '<div class="shadow-sample shadow-sample-' + (index + 1) + '"></div>',
    '<div><h4>' + shadow.name + '</h4><p>' + shadow.usage + '</p><code>' + shadow.token + '</code></div>',
    '<dl><div><dt>Y</dt><dd>' + shadow.y + '</dd></div><div><dt>Blur</dt><dd>' + shadow.blur + '</dd></div></dl>',
    '</article>'
  ].join('')).join('');
  return chapterShell('lighting', [
    '<section class="spec-panel"><div class="panel-title"><h4>五层光影系统</h4><span>Light Layers</span></div><div class="light-layer-grid">' + layers + '</div></section>',
    '<section class="spec-panel"><div class="panel-title"><h4>阴影等级</h4><span>Shadow Scale</span></div><div class="shadow-grid">' + shadows + '</div></section>',
    '<section class="atmosphere-panel"><div><strong>晨光氛围</strong><span>Warm 5500K</span></div><div class="temperature-track"><i></i><i></i><i></i></div><div><strong>冷空气</strong><span>Cool 7500K</span></div></section>'
  ].join(''));
}

function renderTextureChapter() {
  const layers = textureLayers.map((layer) => [
    '<article class="texture-layer-row">',
    '<div class="texture-id">' + layer.id + '</div>',
    '<div><h4>' + layer.name + ' <span>' + layer.english + '</span></h4><p>' + layer.note + '</p></div>',
    '<div class="texture-chip texture-chip-' + layer.id.toLowerCase() + '"></div>',
    '<dl><div><dt>范围</dt><dd>' + layer.range + '</dd></div><div><dt>建议</dt><dd>' + layer.recommended + '</dd></div><div><dt>对比</dt><dd>' + layer.contrast + '</dd></div></dl>',
    '</article>'
  ].join('')).join('');
  const styles = textureStyles.map((style) => [
    '<article class="texture-style-card"><div class="texture-style-preview texture-' + style.id + '"></div><h4>' + style.name + '</h4>',
    '<div class="texture-marks">' + style.marks.map((value) => '<i style="--mark:' + value + '"></i>').join('') + '</div></article>'
  ].join('')).join('');
  return chapterShell('texture', [
    '<div class="texture-system-layout"><section class="spec-panel"><div class="panel-title"><h4>纹理层次体系</h4><span>Texture Layers System</span></div><div class="texture-layer-list">' + layers + '</div></section>',
    '<aside class="blend-panel"><div class="blend-preview"></div><h4>推荐叠加强度</h4><strong>总体验证范围 5%–10%</strong><div class="blend-values"><span>矿物 0.8%</span><span>纤维 1.0%</span><span>空气 0.3%</span><span>加工 0.5%</span></div></aside></div>',
    '<div class="texture-style-grid">' + styles + '</div>',
    '<div class="usage-strip"><span>页面背景 5%–10%</span><span>卡片表面 3%–8%</span><span>控件细节 2%–5%</span><span>避免高对比与密集颗粒</span></div>'
  ].join(''));
}

function renderColorChapter() {
  const primary = colorGroups.primary.map((value, index) => '<div style="--swatch:' + value + '"><span>' + (index + 1) + '</span><code>' + value + '</code></div>').join('');
  const secondary = colorGroups.secondary.map((value, index) => '<div style="--swatch:' + value + '"><span>' + (index + 1) + '</span><code>' + value + '</code></div>').join('');
  const neutrals = colorGroups.neutrals.map(([step, value]) => '<div style="--swatch:' + value + '"><span>' + step + '</span><code>' + value + '</code></div>').join('');
  const semantics = colorGroups.semantic.map((color) => [
    '<article class="semantic-card"><div class="semantic-gradient" style="--from:' + color.from + ';--to:' + color.to + '"><strong>' + color.name + '</strong><span>' + color.english + '</span></div><p>' + color.usage + '</p></article>'
  ].join('')).join('');
  const ratio = colorGroups.ratio.map((item, index) => '<i style="--ratio:' + item.value + ';--ratio-index:' + index + '" title="' + item.name + ' ' + item.value + '%"></i>').join('');
  return chapterShell('color', [
    '<div class="color-top-grid"><section class="spec-panel"><div class="panel-title"><h4>主色 / Primary</h4><span>#329EE6</span></div><div class="palette-row">' + primary + '</div><div class="gradient-pair"><i></i><span>#38BDF8 → #2B7FD4</span></div></section>',
    '<section class="spec-panel"><div class="panel-title"><h4>辅助色 / Secondary</h4><span>克制使用</span></div><div class="palette-row palette-secondary">' + secondary + '</div><div class="gradient-pair secondary-gradient"><i></i><span>#5EEAD4 → #51ACB0</span></div></section></div>',
    '<section class="spec-panel"><div class="panel-title"><h4>中性色</h4><span>Neutral 50–900</span></div><div class="palette-row neutral-row">' + neutrals + '</div></section>',
    '<div class="semantic-grid">' + semantics + '</div>',
    '<section class="color-ratio-panel"><div><h4>色彩使用比例</h4><p>中性色承担结构，主色负责操作，辅助色与语义色只在需要时出现。</p></div><div class="ratio-bar">' + ratio + '</div><div class="ratio-legend">' + colorGroups.ratio.map((item) => '<span><i></i>' + item.name + ' ' + item.value + '%</span>').join('') + '</div></section>'
  ].join(''));
}

function renderTypeChapter() {
  const families = fontFamilies.map((font) => '<article class="font-family-card"><b>Aa</b><div><h4>' + font.name + '</h4><span>' + font.english + ' · ' + font.usage + '</span><p>' + font.sample + '</p></div></article>').join('');
  const weights = fontWeights.map((weight) => '<div class="font-weight-row"><strong style="font-weight:' + weight[0] + '">' + weight[0] + '</strong><b>' + weight[1] + '</b><span>' + weight[2] + '</span></div>').join('');
  const scales = typeScale.map((type) => '<div class="type-scale-row"><strong style="--type-size:' + Math.max(14, Math.min(42, type.size / 1.45)) + 'px">' + type.size + '</strong><b>' + type.name + '</b><code>--psm-fs-' + type.token + '</code><span>行高 ' + type.lineHeight + '</span></div>').join('');
  const hierarchy = readingHierarchy.map((level) => '<div><i style="--priority:' + level.value + '"></i><strong>' + level.name + '</strong><span>' + level.value + '% · ' + level.purpose + '</span></div>').join('');
  return chapterShell('type', [
    '<div class="type-top-grid"><section class="spec-panel"><div class="panel-title"><h4>字体家族</h4><span>Font Family</span></div><div class="font-family-list">' + families + '</div></section>',
    '<section class="spec-panel"><div class="panel-title"><h4>字重体系</h4><span>Font Weight</span></div><div class="font-weight-list">' + weights + '</div></section></div>',
    '<section class="spec-panel"><div class="panel-title"><h4>字号体系</h4><span>Font Size Scale / rpx</span></div><div class="type-scale-list">' + scales + '</div></section>',
    '<div class="type-bottom-grid"><section class="spec-panel"><div class="panel-title"><h4>阅读层级</h4><span>Visual Priority</span></div><div class="hierarchy-chart">' + hierarchy + '</div></section>',
    '<section class="spec-panel type-rules"><div class="panel-title"><h4>排版参数</h4><span>Typesetting</span></div><dl class="spec-definition-list"><div><dt>行高</dt><dd>1.2 / 1.4 / 1.5 / 1.6 / 1.7 / 1.8</dd></div><div><dt>字距</dt><dd>-2% / -1% / 0 / 0.2% / 0.5%</dd></div><div><dt>对齐</dt><dd>左对齐为主，标题与数据允许居中</dd></div><div><dt>最小字号</dt><dd>网页 12px；小程序不低于 20rpx</dd></div></dl></section></div>'
  ].join(''));
}

function componentPreview(id) {
  if (id === 'button') return '<div class="demo-buttons"><button>主要按钮</button><button class="pressed">按下</button><button class="disabled">禁用</button><button class="loading">加载中</button></div>';
  if (id === 'card') return '<div class="demo-card"><span>效率</span><strong>AI 优化数据库查询性能</strong><p>将查询从 12s 降低到 320ms。</p><footer>PSM Team · 128</footer></div>';
  if (id === 'tag') return '<div class="demo-tags"><span>效率</span><span>踩坑</span><span>学习</span><span>审核中</span><span>已通过</span><span>已拒绝</span></div>';
  if (id === 'input') return '<div class="demo-inputs"><label>⌕ <span>搜索日志、标签或作者…</span></label><label><span>请输入内容…</span><b>0 / 50</b></label><label class="textarea"><span>记录你的思考与解决方案…</span></label></div>';
  if (id === 'navigation') return '<div class="demo-navigation"><div><span>推荐</span><strong>最新</strong><span>关注</span><span>收藏</span></div><nav><b>⌂<small>首页</small></b><b>▤<small>学习</small></b><b class="nav-plus">＋</b><b>□<small>消息</small></b><b>○<small>我的</small></b></nav></div>';
  if (id === 'dialog') return '<div class="demo-dialog"><i>i</i><strong>确认删除该日志？</strong><p>删除后将无法恢复。</p><div><button>取消</button><button>删除</button></div></div>';
  if (id === 'feedback') return '<div class="demo-feedback"><p><i>✓</i>操作成功 <b>×</b></p><p><i>×</i>操作失败，请重试 <b>×</b></p><div class="skeleton"><i></i><i></i><i></i></div></div>';
  return '<div class="demo-fab"><button>＋</button><button>✎</button><button>×</button><i>▣</i><i>□</i></div>';
}

function renderComponentsChapter() {
  const groups = componentGroups.map((group) => [
    '<article class="component-spec-card"><header><h4>' + group.name + '</h4><span>' + group.states.join(' · ') + '</span></header><div class="component-demo component-' + group.id + '">' + componentPreview(group.id) + '</div></article>'
  ].join('')).join('');
  return chapterShell('components', '<div class="component-overview-grid">' + groups + '</div><p class="component-rule-note">组件以统一令牌、光源、材质与状态规范构建；真实交互仍由组件代码承担，装饰不替代功能语义。</p>');
}

function renderSvgChapter() {
  const primitives = svgPrimitives.map((primitive) => [
    '<article class="svg-spec-card">',
    '<header><p>' + primitive.index + '</p><h4>' + primitive.name + ' <span>' + primitive.cn + '</span></h4></header>',
    '<div class="svg-variant-row">' + primitive.variants.map((variant, index) => '<div class="svg-variant variant-' + primitive.index + '-' + (index + 1) + '"><i></i><code>' + variant + '</code></div>').join('') + '</div>',
    '<footer><span>可平铺 ' + (primitive.tileable ? '✓' : '×') + '</span><span>可重复 ' + (primitive.repeatable ? '✓' : '×') + '</span></footer>',
    '</article>'
  ].join('')).join('');
  return chapterShell('svg', '<div class="svg-rule-bar"><span>背景层</span><span>装饰层</span><span>交互层</span><span>状态层</span><strong>SVG 只进入适合代码表达的几何层</strong></div><div class="svg-spec-grid">' + primitives + '</div>');
}

function renderTokensChapter() {
  const colors = Object.entries(tokenMap).filter(([name]) => name.includes('color')).map(([name, value]) => '<div class="token-row"><i style="--token-value:' + (value.startsWith('#') ? value : '#E9EDF2') + '"></i><code>' + name + '</code><span>' + value + '</span></div>').join('');
  const spacing = spacingScale.map((value) => '<div><i style="--space:' + value + 'px"></i><code>' + value + 'rpx</code></div>').join('');
  const radii = radiusScale.map((value) => '<div><i style="--radius:' + value + 'px"></i><code>' + (value === 9999 ? 'full' : value + 'rpx') + '</code></div>').join('');
  const z = zIndexScale.map(([name, value]) => '<div><code>--psm-z-' + name + '</code><strong>' + value + '</strong></div>').join('');
  const duration = durationScale.map(([name, value]) => '<div><code>--psm-duration-' + name + '</code><strong>' + value + '</strong></div>').join('');
  return chapterShell('tokens', [
    '<div class="token-layout"><section class="spec-panel token-color-panel"><div class="panel-title"><h4>背景、文字与语义变量</h4><span>' + Object.keys(tokenMap).length + ' core tokens</span></div><div class="token-list-large">' + colors + '</div></section>',
    '<div class="token-side"><section class="spec-panel"><div class="panel-title"><h4>间距体系</h4><span>Spacing / rpx</span></div><div class="spacing-scale">' + spacing + '</div></section><section class="spec-panel"><div class="panel-title"><h4>圆角体系</h4><span>Radius / rpx</span></div><div class="radius-scale">' + radii + '</div></section></div></div>',
    '<div class="token-lower-grid"><section class="spec-panel"><div class="panel-title"><h4>层级变量</h4><span>Z-Index</span></div><div class="z-scale">' + z + '</div></section><section class="spec-panel"><div class="panel-title"><h4>时长登记</h4><span>Motion Reference</span></div><div class="duration-scale">' + duration + '</div><p class="panel-note">静态 PSM 不依赖动画；时长仅供真实必要反馈和兼容流程登记。</p></section></div>',
    '<section class="code-delivery-panel"><div><p class="chapter-kicker">DOWNLOADABLE SOURCE</p><h4>基础令牌与组件 WXSS 已生成</h4><p>网页展示、下载文件与校验使用同一份 system.mjs 数据源。</p><div class="code-actions"><button type="button" data-system-action="copy-tokens">复制令牌</button><button type="button" data-system-action="download-tokens">下载 psm-tokens.wxss</button><button type="button" data-system-action="download-components">下载 psm-components.wxss</button></div></div><pre><code>' + escapeHtml(getWxssTokens().split('\n').slice(0, 14).join('\n')) + '\n  …\n}</code></pre></section>'
  ].join(''));
}

function renderGuideChapter() {
  const goals = renderingGoals.map((goal, index) => '<div><i>' + (index + 1) + '</i><strong>' + goal + '</strong></div>').join('');
  const hierarchy = hierarchyRules.map((rule) => '<div style="--hierarchy:' + rule.value + '"><span>' + rule.level + '</span><i></i><strong>' + rule.value + '</strong><p>' + rule.name + '</p></div>').join('');
  const rules = applicationRules.map((rule, index) => '<article><i>0' + (index + 1) + '</i><div><h4>' + rule[0] + '</h4><p>' + rule[1] + '</p></div></article>').join('');
  const checklist = renderingChecklist.map((item) => '<label><input type="checkbox" disabled checked /><span>' + item + '</span></label>').join('');
  return chapterShell('guide', [
    '<div class="guide-goals">' + goals + '</div>',
    '<div class="guide-system-grid"><section class="spec-panel"><div class="panel-title"><h4>层次规则</h4><span>Hierarchy Rules</span></div><div class="hierarchy-rules">' + hierarchy + '</div></section><section class="spec-panel"><div class="panel-title"><h4>交互反馈</h4><span>Interaction Feedback</span></div><div class="feedback-matrix"><div><button>默认</button><button class="focus">悬停 / 关注</button><button class="pressed">按下</button><button disabled>禁用</button></div><div><span>标签</span><span class="focus">标签</span><span class="success">标签</span><span class="danger">标签</span></div><div><input placeholder="输入内容" /><input class="focus" placeholder="输入内容" /><input disabled placeholder="输入内容" /></div></div></section></div>',
    '<div class="application-rule-grid">' + rules + '</div>',
    '<section class="checklist-panel"><div><p class="chapter-kicker">FINAL GATE</p><h4>发布前检查清单</h4><p>先检查结构与状态，再检查材质和装饰。</p></div><div class="checklist-grid">' + checklist + '</div></section>'
  ].join(''));
}

function renderSystemAtlas() {
  systemNav.innerHTML = systemChapters.map((chapter) => '<a href="#chapter-' + chapter.id + '"><span>' + chapter.index + '</span><strong>' + chapter.title + '</strong><small>' + chapter.english + '</small></a>').join('');
  systemContent.innerHTML = [
    renderWorldChapter(),
    renderMaterialChapter(),
    renderLightingChapter(),
    renderTextureChapter(),
    renderColorChapter(),
    renderTypeChapter(),
    renderComponentsChapter(),
    renderSvgChapter(),
    renderTokensChapter(),
    renderGuideChapter()
  ].join('');
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

function renderIconCard(icon) {
  const sizePreviews = [16, 24, 32, 64].map((size) => [
    '<div class="icon-size-sample" style="--icon-size:' + size + 'px">',
    '<span>' + getIconSvg(icon.id, 'card-' + size) + '</span>',
    '<small>' + size + '</small>',
    '</div>'
  ].join('')).join('');
  return [
    '<article class="icon-card" data-icon-category="' + icon.category + '" data-icon-id="' + icon.id + '" style="--icon-accent:' + icon.accent + '">',
    '<header><span>' + icon.id + '</span><b>' + icon.category + ' / ' + escapeHtml(icon.categoryName) + '</b></header>',
    '<div class="icon-stage" aria-label="' + escapeHtml(icon.name) + ' 图标的 16、24、32 与 64 像素预览">' + sizePreviews + '</div>',
    '<div class="icon-copy"><h3>' + escapeHtml(icon.name) + ' <span>' + escapeHtml(icon.english) + '</span></h3><p>' + escapeHtml(icon.description) + '</p></div>',
    '<footer>',
    '<button type="button" data-icon-action="source" data-icon="' + icon.id + '">源码</button>',
    '<button type="button" data-icon-action="copy" data-icon="' + icon.id + '">复制</button>',
    '<button type="button" class="primary" data-icon-action="download" data-icon="' + icon.id + '">下载</button>',
    '</footer>',
    '</article>'
  ].join('');
}

function renderIcons() {
  document.querySelectorAll('[data-icon-total]').forEach((node) => {
    node.textContent = String(iconCatalog.length);
  });
  document.querySelectorAll('[data-icon-category-total]').forEach((node) => {
    node.textContent = String(iconCategories.length);
  });
  const filterButtons = [
    '<button type="button" class="icon-filter-button is-active" data-icon-filter="ALL" aria-pressed="true">全部 <span>' + iconCatalog.length + '</span></button>',
    ...iconCategories.map((category) => '<button type="button" class="icon-filter-button" data-icon-filter="' + category.id + '" aria-pressed="false">' + category.id + ' · ' + category.name + ' <span>' + iconCatalog.filter((icon) => icon.category === category.id).length + '</span></button>')
  ];
  iconFilterGroup.innerHTML = filterButtons.join('');
  iconGrid.innerHTML = iconCatalog.map(renderIconCard).join('');
  iconResultCount.textContent = '显示 ' + iconCatalog.length + ' 枚图标';
}

function renderRoadmap() {
  const statusLabels = {
    complete: '已完成',
    in_progress: '进行中',
    queued: '下一波',
    planned: '已计划',
    recurring: '持续循环'
  };
  roadmapGrid.innerHTML = expansionWaves.map((wave) => [
    '<article class="roadmap-card roadmap-' + wave.status + '">',
    '<header><span>' + wave.id + '</span><b>' + statusLabels[wave.status] + '</b></header>',
    '<h3>' + wave.title + ' <span>' + wave.english + '</span></h3>',
    '<p>' + wave.target + '</p>',
    '<ul>' + wave.deliverables.map((item) => '<li>' + item + '</li>').join('') + '</ul>',
    '<footer><strong>验收门</strong><span>' + wave.gate + '</span></footer>',
    '</article>'
  ].join('')).join('');
  roadmapLoop.innerHTML = continuousLoop.map((step) => [
    '<li><span>' + step[0] + '</span><div><strong>' + step[1] + '</strong><p>' + step[2] + '</p></div></li>'
  ].join('')).join('');
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

function downloadIcon(id) {
  const svg = getIconSvg(id, 'file');
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

function downloadText(filename, content, type = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  queueMicrotask(() => URL.revokeObjectURL(url));
  showToast(filename + ' 已生成下载');
}

function openSourceDialog(id) {
  const asset = getAsset(id);
  if (!asset) return;
  activeSource = {
    id,
    kind: 'asset',
    filename: id + '.svg',
    svg: getAssetSvg(id, 'file')
  };
  const svg = getAssetSvg(id, 'dialog');
  sourcePreview.classList.remove('is-icon');
  sourceKicker.textContent = asset.category + ' / ' + asset.categoryName + ' / SVG SOURCE';
  sourceTitle.textContent = asset.id + ' · ' + asset.name;
  sourcePreview.innerHTML = svg;
  sourceCode.textContent = prettySvg(activeSource.svg);
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }
}

function openIconSourceDialog(id) {
  const icon = getIcon(id);
  if (!icon) return;
  activeSource = {
    id,
    kind: 'icon',
    filename: id + '.svg',
    svg: getIconSvg(id, 'file')
  };
  sourcePreview.classList.add('is-icon');
  sourceKicker.textContent = icon.category + ' / ' + icon.categoryEnglish + ' / 24 × 24 SVG';
  sourceTitle.textContent = icon.id + ' · ' + icon.name + ' / ' + icon.english;
  sourcePreview.innerHTML = getIconSvg(id, 'dialog');
  sourceCode.textContent = prettySvg(activeSource.svg);
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

function applyIconFilter(category) {
  const cards = [...iconGrid.querySelectorAll('.icon-card')];
  let visible = 0;
  cards.forEach((card) => {
    const isVisible = category === 'ALL' || card.dataset.iconCategory === category;
    card.hidden = !isVisible;
    if (isVisible) visible += 1;
  });
  iconFilterGroup.querySelectorAll('.icon-filter-button').forEach((button) => {
    const active = button.dataset.iconFilter === category;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  iconResultCount.textContent = '显示 ' + visible + ' 枚图标';
  iconEmptyFilter.hidden = visible !== 0;
}

heroStage.innerHTML = getHeroSvg();
renderSystemAtlas();
renderPrimitives();
renderAssets();
renderIcons();
renderRoadmap();

systemContent.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-system-action]');
  if (!button) return;
  const action = button.dataset.systemAction;
  if (action === 'download-tokens') {
    downloadText('psm-tokens.wxss', getWxssTokens());
    return;
  }
  if (action === 'download-components') {
    downloadText('psm-components.wxss', getComponentWxss());
    return;
  }
  if (action === 'copy-tokens') {
    try {
      await copyText(getWxssTokens());
      showToast('PSM WXSS 令牌已复制');
    } catch {
      showToast('复制未成功，请下载 WXSS 文件');
    }
  }
});

filterGroup.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-button');
  if (!button) return;
  applyFilter(button.dataset.filter);
});

iconFilterGroup.addEventListener('click', (event) => {
  const button = event.target.closest('.icon-filter-button');
  if (!button) return;
  applyIconFilter(button.dataset.iconFilter);
});

iconGrid.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-icon-action]');
  if (!button) return;
  const id = button.dataset.icon;
  const action = button.dataset.iconAction;
  if (action === 'source') {
    openIconSourceDialog(id);
    return;
  }
  if (action === 'download') {
    downloadIcon(id);
    return;
  }
  if (action === 'copy') {
    try {
      await copyText(getIconSvg(id, 'file'));
      showToast(id + ' 的 SVG 源码已复制');
    } catch {
      showToast('复制未成功，请打开“源码”手动复制');
    }
  }
});

iconDelivery.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-icon-export]');
  if (!button) return;
  const action = button.dataset.iconExport;
  if (action === 'sprite') {
    downloadText('psm-icons.svg', getIconSprite(), 'image/svg+xml;charset=utf-8');
    return;
  }
  if (action === 'css') {
    downloadText('psm-icons.css', getIconCss(), 'text/css;charset=utf-8');
    return;
  }
  if (action === 'manifest') {
    downloadText('psm-icons-manifest.json', JSON.stringify(getIconManifest(), null, 2), 'application/json;charset=utf-8');
    return;
  }
  if (action === 'copy-sprite') {
    try {
      await copyText(getIconSprite());
      showToast(iconCatalog.length + ' 枚图标的 SVG Sprite 已复制');
    } catch {
      showToast('复制未成功，请下载 Sprite 文件');
    }
  }
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
  if (!activeSource) return;
  try {
    await copyText(activeSource.svg);
    showToast(activeSource.id + ' 的 SVG 源码已复制');
  } catch {
    showToast('复制未成功，请在源码区域手动选择');
  }
});

dialogDownloadButton.addEventListener('click', () => {
  if (!activeSource) return;
  if (activeSource.kind === 'icon') {
    downloadIcon(activeSource.id);
  } else {
    downloadAsset(activeSource.id);
  }
});

toast.addEventListener('click', hideToast);
