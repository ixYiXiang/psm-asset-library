const categories = {
  BG: '背景',
  FX: '光影',
  MT: '材质',
  IL: '模块插图',
  ES: '空状态',
  BD: '徽章'
};

export const assetCatalog = [
  {
    id: 'PSM-BG-001',
    category: 'BG',
    name: '默认主题干净环境背景',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGB',
    ratio: '9:16',
    width: 540,
    height: 960,
    primitives: ['background', 'light', 'noise'],
    description: '浅冷灰蓝环境、左上柔光与极弱叶影。中心和下部保持安静留白，供真实界面叠加。'
  },
  {
    id: 'PSM-BG-002',
    category: 'BG',
    name: '白昼主题环境背景',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGB',
    ratio: '9:16',
    width: 540,
    height: 960,
    primitives: ['background', 'light', 'pattern'],
    description: '更通透的晨光空气层，顶部叶影被限制在低对比范围，底部不制造固定导航阴影。'
  },
  {
    id: 'PSM-BG-003',
    category: 'BG',
    name: '夜幕主题环境方向稿',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGB',
    ratio: '9:16',
    width: 540,
    height: 960,
    primitives: ['background', 'light', 'particle'],
    description: '仅作为重新设计方向：深蓝矿物面、单一冷光与极少金色句点，不等同于可开放主题。'
  },
  {
    id: 'PSM-FX-001',
    category: 'FX',
    name: '左上晨光透明叠加层',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '9:20',
    width: 540,
    height: 1200,
    primitives: ['light', 'corner'],
    description: '透明的冷白晨光从左上进入，暖白核心范围受控。没有文字、UI、树叶或卡片专属阴影。'
  },
  {
    id: 'PSM-FX-002',
    category: 'FX',
    name: '冷空气柔雾叠加层',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '9:20',
    width: 540,
    height: 1200,
    primitives: ['light', 'noise'],
    description: '由低强度矢量雾团与柔化滤镜构成，边缘透明，可跨默认和白昼背景复用。'
  },
  {
    id: 'PSM-MT-001',
    category: 'MT',
    name: '低亮白瓷面板底纹',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGB',
    ratio: '1:1',
    width: 720,
    height: 720,
    primitives: ['card', 'corner', 'noise'],
    description: '低亮白瓷、细冷灰边缘、局部釉光与短接触影。微纹理只负责消除塑料感。'
  },
  {
    id: 'PSM-MT-002',
    category: 'MT',
    name: '轻磨砂玻璃面板底纹',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '1:1',
    width: 720,
    height: 720,
    primitives: ['card', 'light', 'noise'],
    description: '以柔光扩散和纤细层次表达磨砂，而非强透明折射；适合作为独立叠层实验。'
  },
  {
    id: 'PSM-MT-003',
    category: 'MT',
    name: '低杂质矿物底纹',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGB',
    ratio: '1:1',
    width: 720,
    height: 720,
    primitives: ['noise', 'pattern', 'divider'],
    description: '用稀疏、确定性的点与细脉络表达自然不均匀感，避免密集砂点和脏纸纤维。'
  },
  {
    id: 'PSM-IL-001',
    category: 'IL',
    name: '文档导出模块主视觉',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '4:3',
    width: 960,
    height: 720,
    primitives: ['card', 'icon', 'particle'],
    description: '以文档层、归档托盘和克制的向下路径表达整理、导出与沉淀，不做办公海报。'
  },
  {
    id: 'PSM-IL-002',
    category: 'IL',
    name: '本地事务提醒模块主视觉',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '4:3',
    width: 960,
    height: 720,
    primitives: ['card', 'icon', 'divider'],
    description: '时钟、设备基座与有序刻度共同表达本地、时间和提醒，视觉权重低于导出主功能。'
  },
  {
    id: 'PSM-IL-003',
    category: 'IL',
    name: '日志回响系统主视觉',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '4:3',
    width: 960,
    height: 720,
    primitives: ['card', 'particle', 'divider'],
    description: '三篇日志与两条有向关系线表达引用、修订和衍生；连接可读，不使用抽象乱线。'
  },
  {
    id: 'PSM-IL-004',
    category: 'IL',
    name: '主题切换入口插图',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '4:3',
    width: 960,
    height: 720,
    primitives: ['card', 'background', 'icon'],
    description: '三块环境样本说明默认、白昼与夜幕的系统扩展性，而不是简单的太阳/月亮开关。'
  },
  {
    id: 'PSM-ES-001',
    category: 'ES',
    name: '暂无日志空状态',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '1:1',
    width: 720,
    height: 720,
    primitives: ['icon', 'card', 'particle'],
    description: '打开但尚未落笔的陶瓷日志与一个蓝色起点，表达安静地等待开始记录。'
  },
  {
    id: 'PSM-ES-002',
    category: 'ES',
    name: '暂无事务空状态',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '1:1',
    width: 720,
    height: 720,
    primitives: ['icon', 'card', 'divider'],
    description: '空的秩序托盘与低权重时间刻度，保持清爽，不把“暂无事务”渲染成紧迫告警。'
  },
  {
    id: 'PSM-ES-003',
    category: 'ES',
    name: '暂无导出记录空状态',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '1:1',
    width: 720,
    height: 720,
    primitives: ['icon', 'card', 'corner'],
    description: '尚未封存的空归档盒与悬停文档，表达目前还没有形成可沉淀的内容。'
  },
  {
    id: 'PSM-BD-001',
    category: 'BD',
    name: '升格状态标识',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '1:1',
    width: 720,
    height: 720,
    primitives: ['icon', 'corner', 'particle'],
    description: '蓝金双层菱形与向上刻度组成的小尺寸徽章；材质受控，轮廓优先。'
  },
  {
    id: 'PSM-BD-002',
    category: 'BD',
    name: '回响状态标识',
    version: '0.1.0',
    status: 'code-candidate',
    engine: 'SVG',
    mode: 'RGBA',
    ratio: '1:1',
    width: 720,
    height: 720,
    primitives: ['icon', 'particle', 'divider'],
    description: '两枚相扣的回响环与向外传播的低对比波纹，语义先于复杂材质。'
  }
].map((asset, index) => ({
  ...asset,
  index: index + 1,
  categoryName: categories[asset.category],
  path: 'assets/generated/' + asset.id + '.svg'
}));

function safePrefix(id, instance) {
  return (id + '-' + instance).toLowerCase().replace(/[^a-z0-9_-]/g, '-');
}

function commonDefs(p) {
  return [
    '<linearGradient id="' + p + '-ceramic" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#ffffff"/>',
    '<stop offset=".55" stop-color="#f5f7fa"/>',
    '<stop offset="1" stop-color="#e5ebf1"/>',
    '</linearGradient>',
    '<linearGradient id="' + p + '-blue" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#52b9f3"/>',
    '<stop offset=".52" stop-color="#329ee6"/>',
    '<stop offset="1" stop-color="#2d72cc"/>',
    '</linearGradient>',
    '<linearGradient id="' + p + '-gold" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#f7dda0"/>',
    '<stop offset=".56" stop-color="#e8c67a"/>',
    '<stop offset="1" stop-color="#b77c4a"/>',
    '</linearGradient>',
    '<radialGradient id="' + p + '-glow" cx=".22" cy=".16" r=".82">',
    '<stop offset="0" stop-color="#fffbe8" stop-opacity=".98"/>',
    '<stop offset=".35" stop-color="#ffffff" stop-opacity=".42"/>',
    '<stop offset="1" stop-color="#d8e8f6" stop-opacity="0"/>',
    '</radialGradient>',
    '<filter id="' + p + '-shadow" x="-35%" y="-35%" width="190%" height="210%">',
    '<feDropShadow dx="9" dy="14" stdDeviation="12" flood-color="#31445d" flood-opacity=".20"/>',
    '</filter>',
    '<filter id="' + p + '-contact" x="-30%" y="-30%" width="170%" height="180%">',
    '<feDropShadow dx="3" dy="5" stdDeviation="4" flood-color="#263a54" flood-opacity=".22"/>',
    '</filter>',
    '<filter id="' + p + '-blur18" x="-45%" y="-45%" width="190%" height="190%">',
    '<feGaussianBlur stdDeviation="18"/>',
    '</filter>',
    '<filter id="' + p + '-blur34" x="-55%" y="-55%" width="210%" height="210%">',
    '<feGaussianBlur stdDeviation="34"/>',
    '</filter>',
    '<filter id="' + p + '-noise" x="-10%" y="-10%" width="120%" height="120%">',
    '<feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="2" seed="17" stitchTiles="stitch"/>',
    '<feColorMatrix values="0 0 0 0 .32 0 0 0 0 .40 0 0 0 0 .49 0 0 0 .18 0"/>',
    '</filter>'
  ].join('');
}

function shell(asset, p, extraDefs, body) {
  const titleId = p + '-title';
  const descId = p + '-desc';
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + asset.width + ' ' + asset.height + '"',
    ' width="' + asset.width + '" height="' + asset.height + '" role="img"',
    ' aria-labelledby="' + titleId + ' ' + descId + '" data-psm-asset="' + asset.id + '">',
    '<title id="' + titleId + '">' + asset.id + ' ' + asset.name + '</title>',
    '<desc id="' + descId + '">' + asset.description + '</desc>',
    '<defs>' + commonDefs(p) + extraDefs + '</defs>',
    body,
    '</svg>'
  ].join('');
}

function bg001(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-env" x1="0" y1="0" x2=".78" y2="1">',
    '<stop offset="0" stop-color="#f7f8fa"/>',
    '<stop offset=".48" stop-color="#eceff3"/>',
    '<stop offset="1" stop-color="#dfe7ef"/>',
    '</linearGradient>',
    '<pattern id="' + p + '-grid" width="44" height="44" patternUnits="userSpaceOnUse">',
    '<path d="M44 0H0V44" fill="none" stroke="#2d72cc" stroke-opacity=".045" stroke-width="1"/>',
    '</pattern>',
    '<filter id="' + p + '-leaf" x="-60%" y="-60%" width="220%" height="220%">',
    '<feGaussianBlur stdDeviation="13"/>',
    '</filter>'
  ].join('');
  const body = [
    '<rect width="540" height="960" fill="url(#' + p + '-env)"/>',
    '<rect width="540" height="960" fill="url(#' + p + '-grid)"/>',
    '<rect width="540" height="960" fill="url(#' + p + '-glow)"/>',
    '<g filter="url(#' + p + '-leaf)" fill="#446a58" opacity=".075">',
    '<path d="M-28 32C31-4 95 5 130 44 81 64 31 65-28 32Z"/>',
    '<path d="M42 75c43-39 98-38 132-5-33 36-86 47-132 5Z"/>',
    '<path d="M-18 154c42-36 88-31 116 2-35 28-76 31-116-2Z"/>',
    '<path d="M127 12c36-25 77-12 88 20-36 17-68 9-88-20Z"/>',
    '</g>',
    '<path d="M-70 22 240 0 62 624-70 660Z" fill="#fff8d8" opacity=".15" filter="url(#' + p + '-blur18)"/>',
    '<ellipse cx="420" cy="808" rx="205" ry="105" fill="#9bc8ed" opacity=".075" filter="url(#' + p + '-blur34)"/>',
    '<rect width="540" height="960" filter="url(#' + p + '-noise)" opacity=".12"/>',
    '<circle cx="62" cy="286" r="1.2" fill="#e8c67a" opacity=".36"/>',
    '<circle cx="456" cy="536" r=".9" fill="#6b86a2" opacity=".18"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function bg002(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-day" x1=".1" y1="0" x2=".82" y2="1">',
    '<stop offset="0" stop-color="#fbfcfd"/>',
    '<stop offset=".54" stop-color="#f3f6f9"/>',
    '<stop offset="1" stop-color="#dceaf6"/>',
    '</linearGradient>',
    '<linearGradient id="' + p + '-beam" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#fff9dc" stop-opacity=".72"/>',
    '<stop offset=".7" stop-color="#ffffff" stop-opacity=".05"/>',
    '<stop offset="1" stop-color="#ffffff" stop-opacity="0"/>',
    '</linearGradient>',
    '<filter id="' + p + '-leaf" x="-60%" y="-60%" width="220%" height="220%">',
    '<feGaussianBlur stdDeviation="10"/>',
    '</filter>'
  ].join('');
  const body = [
    '<rect width="540" height="960" fill="url(#' + p + '-day)"/>',
    '<path d="M-50-40H250L38 720H-50Z" fill="url(#' + p + '-beam)" filter="url(#' + p + '-blur18)"/>',
    '<g filter="url(#' + p + '-leaf)" fill="#496d5b" opacity=".095">',
    '<path d="M-40 10c64-23 119-8 150 38C53 64 2 55-40 10Z"/>',
    '<path d="M42 85c54-42 108-29 129 12-47 32-94 29-129-12Z"/>',
    '<path d="M126 18c42-25 88-4 93 34-40 16-77 1-93-34Z"/>',
    '<path d="M-30 166c47-35 98-27 123 12-40 27-83 22-123-12Z"/>',
    '</g>',
    '<ellipse cx="366" cy="842" rx="256" ry="122" fill="#8fc3eb" opacity=".11" filter="url(#' + p + '-blur34)"/>',
    '<ellipse cx="102" cy="752" rx="138" ry="84" fill="#ffffff" opacity=".55" filter="url(#' + p + '-blur34)"/>',
    '<rect width="540" height="960" filter="url(#' + p + '-noise)" opacity=".08"/>',
    '<path d="M425 154h38" stroke="#e8c67a" stroke-opacity=".34" stroke-width="1"/>',
    '<circle cx="473" cy="154" r="2" fill="#e8c67a" opacity=".5"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function bg003(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-night" x1=".1" y1="0" x2=".9" y2="1">',
    '<stop offset="0" stop-color="#172b4d"/>',
    '<stop offset=".48" stop-color="#10233f"/>',
    '<stop offset="1" stop-color="#09182d"/>',
    '</linearGradient>',
    '<radialGradient id="' + p + '-moon" cx=".18" cy=".1" r=".72">',
    '<stop offset="0" stop-color="#dff3ff" stop-opacity=".44"/>',
    '<stop offset=".42" stop-color="#82bcec" stop-opacity=".11"/>',
    '<stop offset="1" stop-color="#335985" stop-opacity="0"/>',
    '</radialGradient>',
    '<pattern id="' + p + '-grid" width="48" height="48" patternUnits="userSpaceOnUse">',
    '<path d="M48 0H0V48" fill="none" stroke="#83b9e8" stroke-opacity=".035"/>',
    '</pattern>'
  ].join('');
  const body = [
    '<rect width="540" height="960" fill="url(#' + p + '-night)"/>',
    '<rect width="540" height="960" fill="url(#' + p + '-grid)"/>',
    '<rect width="540" height="960" fill="url(#' + p + '-moon)"/>',
    '<path d="M-35 112 246-18 78 712-40 764Z" fill="#9ed9ff" opacity=".045" filter="url(#' + p + '-blur18)"/>',
    '<ellipse cx="386" cy="762" rx="240" ry="132" fill="#245e94" opacity=".12" filter="url(#' + p + '-blur34)"/>',
    '<rect width="540" height="960" filter="url(#' + p + '-noise)" opacity=".09"/>',
    '<g fill="#e8c67a">',
    '<circle cx="425" cy="184" r="2.1" opacity=".8"/>',
    '<circle cx="456" cy="217" r="1.1" opacity=".42"/>',
    '<circle cx="92" cy="685" r="1.3" opacity=".32"/>',
    '</g>',
    '<path d="M391 184h26M433 184h34" stroke="#e8c67a" stroke-opacity=".26" stroke-width="1"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function fx001(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-ray-a" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#fff7d6" stop-opacity=".34"/>',
    '<stop offset=".54" stop-color="#eaf7ff" stop-opacity=".12"/>',
    '<stop offset="1" stop-color="#d9efff" stop-opacity="0"/>',
    '</linearGradient>',
    '<linearGradient id="' + p + '-ray-b" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#ffffff" stop-opacity=".26"/>',
    '<stop offset="1" stop-color="#d8edff" stop-opacity="0"/>',
    '</linearGradient>'
  ].join('');
  const body = [
    '<path d="M-84-40H212L82 1260H-128Z" fill="url(#' + p + '-ray-a)" filter="url(#' + p + '-blur34)"/>',
    '<path d="M14-30h148L278 920 72 1002Z" fill="url(#' + p + '-ray-b)" filter="url(#' + p + '-blur18)" opacity=".74"/>',
    '<ellipse cx="52" cy="98" rx="156" ry="130" fill="#fff4c2" opacity=".21" filter="url(#' + p + '-blur34)"/>',
    '<ellipse cx="244" cy="470" rx="210" ry="350" fill="#d8efff" opacity=".055" filter="url(#' + p + '-blur34)"/>',
    '<path d="M-12 2 175 0" stroke="#fff" stroke-opacity=".24" stroke-width="2"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function fx002(asset, p) {
  const defs = [
    '<radialGradient id="' + p + '-mist-a">',
    '<stop offset="0" stop-color="#d9efff" stop-opacity=".22"/>',
    '<stop offset=".72" stop-color="#cde8fb" stop-opacity=".07"/>',
    '<stop offset="1" stop-color="#b9dcf5" stop-opacity="0"/>',
    '</radialGradient>',
    '<radialGradient id="' + p + '-mist-b">',
    '<stop offset="0" stop-color="#ffffff" stop-opacity=".18"/>',
    '<stop offset="1" stop-color="#dbefff" stop-opacity="0"/>',
    '</radialGradient>'
  ].join('');
  const body = [
    '<ellipse cx="112" cy="302" rx="245" ry="176" fill="url(#' + p + '-mist-a)" filter="url(#' + p + '-blur34)"/>',
    '<ellipse cx="448" cy="592" rx="286" ry="220" fill="url(#' + p + '-mist-b)" filter="url(#' + p + '-blur34)"/>',
    '<ellipse cx="166" cy="930" rx="260" ry="140" fill="#cde7f9" opacity=".065" filter="url(#' + p + '-blur34)"/>',
    '<path d="M-60 542C98 465 228 546 370 492c79-30 141-24 226 18" fill="none" stroke="#d9efff" stroke-opacity=".075" stroke-width="92" filter="url(#' + p + '-blur34)"/>',
    '<rect width="540" height="1200" filter="url(#' + p + '-noise)" opacity=".035"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function mt001(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-surface" x1=".05" y1=".02" x2=".88" y2=".96">',
    '<stop offset="0" stop-color="#ffffff"/>',
    '<stop offset=".58" stop-color="#f7f8fa"/>',
    '<stop offset="1" stop-color="#e8edf2"/>',
    '</linearGradient>',
    '<linearGradient id="' + p + '-edge" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#ffffff" stop-opacity=".9"/>',
    '<stop offset=".48" stop-color="#ffffff" stop-opacity=".08"/>',
    '<stop offset="1" stop-color="#9cb0c4" stop-opacity=".2"/>',
    '</linearGradient>'
  ].join('');
  const body = [
    '<rect x="91" y="91" width="538" height="538" rx="76" fill="#dce4ec" opacity=".68" filter="url(#' + p + '-shadow)"/>',
    '<rect x="81" y="75" width="538" height="538" rx="76" fill="url(#' + p + '-surface)" stroke="#d2dbe5" stroke-width="2"/>',
    '<rect x="92" y="86" width="516" height="516" rx="67" fill="none" stroke="url(#' + p + '-edge)" stroke-width="3"/>',
    '<path d="M123 121C257 61 431 76 568 155" fill="none" stroke="#ffffff" stroke-opacity=".66" stroke-width="28" filter="url(#' + p + '-blur18)"/>',
    '<rect x="91" y="85" width="518" height="518" rx="68" filter="url(#' + p + '-noise)" opacity=".075"/>',
    '<path d="M144 554H550" stroke="#91a5b9" stroke-opacity=".13" stroke-width="2"/>',
    '<circle cx="548" cy="146" r="3" fill="#e8c67a" opacity=".52"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function mt002(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-frost" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#ffffff" stop-opacity=".84"/>',
    '<stop offset=".5" stop-color="#e7f0f7" stop-opacity=".67"/>',
    '<stop offset="1" stop-color="#cbd9e6" stop-opacity=".48"/>',
    '</linearGradient>',
    '<linearGradient id="' + p + '-sweep" x1="0" y1="0" x2="1" y2="0">',
    '<stop offset="0" stop-color="#ffffff" stop-opacity="0"/>',
    '<stop offset=".5" stop-color="#ffffff" stop-opacity=".76"/>',
    '<stop offset="1" stop-color="#ffffff" stop-opacity="0"/>',
    '</linearGradient>'
  ].join('');
  const body = [
    '<rect x="103" y="102" width="514" height="514" rx="70" fill="#ced9e5" opacity=".42" filter="url(#' + p + '-shadow)"/>',
    '<rect x="85" y="80" width="520" height="520" rx="70" fill="url(#' + p + '-frost)" stroke="#d2dce6" stroke-width="2"/>',
    '<rect x="94" y="89" width="502" height="502" rx="62" filter="url(#' + p + '-noise)" opacity=".22"/>',
    '<path d="m57 541 489-395 105 116-489 394Z" fill="url(#' + p + '-sweep)" opacity=".58" filter="url(#' + p + '-blur18)"/>',
    '<path d="M117 112C246 67 464 69 574 160" fill="none" stroke="#fff" stroke-opacity=".72" stroke-width="5"/>',
    '<path d="M130 569c141 24 283 18 436-16" fill="none" stroke="#6f8ba5" stroke-opacity=".13" stroke-width="3"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function mt003(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-mineral" x1=".05" y1=".08" x2=".95" y2=".92">',
    '<stop offset="0" stop-color="#f7f8f9"/>',
    '<stop offset=".55" stop-color="#eef1f4"/>',
    '<stop offset="1" stop-color="#e3e8ed"/>',
    '</linearGradient>'
  ].join('');
  const body = [
    '<rect x="65" y="65" width="590" height="590" rx="44" fill="url(#' + p + '-mineral)" stroke="#d3dce5" stroke-width="2" filter="url(#' + p + '-contact)"/>',
    '<rect x="72" y="72" width="576" height="576" rx="38" filter="url(#' + p + '-noise)" opacity=".09"/>',
    '<g fill="none" stroke-linecap="round">',
    '<path d="M114 219c74-28 127-17 194-56 50-29 101-28 164-12" stroke="#71869b" stroke-opacity=".09" stroke-width="2"/>',
    '<path d="M204 574c54-41 79-89 141-107 44-13 81 2 141-28" stroke="#b77c4a" stroke-opacity=".11" stroke-width="1.6"/>',
    '<path d="M518 118c-12 66 9 108-20 164-17 33-43 59-44 112" stroke="#7890a8" stroke-opacity=".075" stroke-width="2"/>',
    '</g>',
    '<g fill="#b77c4a">',
    '<circle cx="146" cy="167" r="2.2" opacity=".34"/>',
    '<circle cx="561" cy="243" r="1.5" opacity=".28"/>',
    '<circle cx="408" cy="544" r="2" opacity=".3"/>',
    '<circle cx="240" cy="422" r="1.2" opacity=".22"/>',
    '</g>',
    '<g fill="#6c839a">',
    '<circle cx="336" cy="128" r="1.5" opacity=".2"/>',
    '<circle cx="132" cy="494" r="1.7" opacity=".19"/>',
    '<circle cx="586" cy="574" r="1.3" opacity=".22"/>',
    '</g>',
    '<path d="M101 101H619" stroke="#fff" stroke-opacity=".68" stroke-width="2"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function il001(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-tray" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#f9fbfd"/>',
    '<stop offset="1" stop-color="#d9e4ee"/>',
    '</linearGradient>'
  ].join('');
  const body = [
    '<ellipse cx="482" cy="594" rx="280" ry="54" fill="#395571" opacity=".12" filter="url(#' + p + '-blur18)"/>',
    '<path d="M240 489h480l-56 115H296Z" fill="url(#' + p + '-tray)" stroke="#cbd7e2" stroke-width="3" filter="url(#' + p + '-contact)"/>',
    '<path d="M296 489h368l-27 55H323Z" fill="#e1e8ef" stroke="#c7d2dd" stroke-width="2"/>',
    '<g filter="url(#' + p + '-shadow)">',
    '<rect x="286" y="120" width="332" height="410" rx="32" fill="url(#' + p + '-ceramic)" stroke="#ced8e3" stroke-width="3"/>',
    '<path d="M548 120v82h70" fill="#e6edf4" stroke="#ced8e3" stroke-width="3" stroke-linejoin="round"/>',
    '</g>',
    '<rect x="342" y="245" width="166" height="15" rx="7.5" fill="#2d72cc" opacity=".82"/>',
    '<rect x="342" y="287" width="214" height="10" rx="5" fill="#91a4b7" opacity=".35"/>',
    '<rect x="342" y="323" width="190" height="10" rx="5" fill="#91a4b7" opacity=".26"/>',
    '<rect x="342" y="359" width="224" height="10" rx="5" fill="#91a4b7" opacity=".22"/>',
    '<path d="M452 402v105m0 0-41-43m41 43 41-43" fill="none" stroke="url(#' + p + '-blue)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>',
    '<circle cx="697" cy="175" r="6" fill="#e8c67a"/>',
    '<path d="M661 175h25m23 0h39" stroke="#e8c67a" stroke-opacity=".48" stroke-width="2"/>',
    '<circle cx="216" cy="331" r="4" fill="#329ee6" opacity=".28"/>',
    '<circle cx="733" cy="422" r="3" fill="#329ee6" opacity=".2"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function il002(asset, p) {
  const defs = [
    '<radialGradient id="' + p + '-clock" cx=".34" cy=".28" r=".75">',
    '<stop offset="0" stop-color="#ffffff"/>',
    '<stop offset="1" stop-color="#e4ebf2"/>',
    '</radialGradient>'
  ].join('');
  const body = [
    '<ellipse cx="480" cy="585" rx="260" ry="50" fill="#38536f" opacity=".11" filter="url(#' + p + '-blur18)"/>',
    '<rect x="198" y="405" width="564" height="164" rx="48" fill="url(#' + p + '-ceramic)" stroke="#cbd6e1" stroke-width="3" filter="url(#' + p + '-shadow)"/>',
    '<rect x="250" y="447" width="292" height="18" rx="9" fill="#c8d3df"/>',
    '<rect x="250" y="488" width="216" height="12" rx="6" fill="#dde4eb"/>',
    '<rect x="250" y="520" width="250" height="12" rx="6" fill="#e0e6ec"/>',
    '<circle cx="646" cy="486" r="43" fill="#e7f2fc" stroke="#96c9ef" stroke-width="2"/>',
    '<path d="m628 486 12 12 27-29" fill="none" stroke="#2d72cc" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',
    '<g filter="url(#' + p + '-shadow)">',
    '<circle cx="480" cy="253" r="150" fill="url(#' + p + '-clock)" stroke="#c9d4df" stroke-width="4"/>',
    '<circle cx="480" cy="253" r="118" fill="#f9fbfd" stroke="#dce4ec" stroke-width="2"/>',
    '</g>',
    '<g stroke="#7e92a7" stroke-linecap="round">',
    '<path d="M480 151v18M480 337v18M378 253h18M564 253h18" stroke-width="5" opacity=".6"/>',
    '<path d="m480 253-2-61M480 253l54 31" stroke="#2d72cc" stroke-width="12"/>',
    '</g>',
    '<circle cx="480" cy="253" r="13" fill="url(#' + p + '-gold)"/>',
    '<path d="M253 183h74M633 183h74" stroke="#e8c67a" stroke-opacity=".5" stroke-width="3"/>',
    '<circle cx="340" cy="183" r="4" fill="#e8c67a" opacity=".6"/>',
    '<circle cx="620" cy="183" r="4" fill="#e8c67a" opacity=".6"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function il003(asset, p) {
  const defs = [
    '<marker id="' + p + '-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">',
    '<path d="M0 0 10 5 0 10Z" fill="#329ee6"/>',
    '</marker>'
  ].join('');
  const body = [
    '<ellipse cx="480" cy="608" rx="340" ry="52" fill="#3a5570" opacity=".1" filter="url(#' + p + '-blur18)"/>',
    '<path d="M292 297c40-112 142-148 243-96" fill="none" stroke="#329ee6" stroke-opacity=".54" stroke-width="6" stroke-dasharray="4 12" stroke-linecap="round" marker-end="url(#' + p + '-arrow)"/>',
    '<path d="M608 322c87 35 115 112 72 187" fill="none" stroke="#329ee6" stroke-opacity=".54" stroke-width="6" stroke-dasharray="4 12" stroke-linecap="round" marker-end="url(#' + p + '-arrow)"/>',
    '<g filter="url(#' + p + '-shadow)">',
    '<g transform="translate(126 263) rotate(-7 140 120)">',
    '<rect width="280" height="240" rx="31" fill="url(#' + p + '-ceramic)" stroke="#cbd6e1" stroke-width="3"/>',
    '<rect x="38" y="42" width="118" height="14" rx="7" fill="#329ee6" opacity=".72"/>',
    '<rect x="38" y="83" width="196" height="9" rx="4.5" fill="#93a5b7" opacity=".31"/>',
    '<rect x="38" y="117" width="166" height="9" rx="4.5" fill="#93a5b7" opacity=".22"/>',
    '<circle cx="228" cy="196" r="11" fill="#ff99bb" opacity=".72"/>',
    '</g>',
    '<g transform="translate(354 100)">',
    '<rect width="280" height="240" rx="31" fill="url(#' + p + '-ceramic)" stroke="#bfcddd" stroke-width="3"/>',
    '<rect x="38" y="42" width="118" height="14" rx="7" fill="#2d72cc"/>',
    '<rect x="38" y="83" width="196" height="9" rx="4.5" fill="#93a5b7" opacity=".31"/>',
    '<rect x="38" y="117" width="166" height="9" rx="4.5" fill="#93a5b7" opacity=".22"/>',
    '<path d="M201 190h38" stroke="#e8c67a" stroke-width="4"/>',
    '<circle cx="189" cy="190" r="5" fill="#e8c67a"/>',
    '</g>',
    '<g transform="translate(558 367) rotate(7 140 120)">',
    '<rect width="280" height="240" rx="31" fill="url(#' + p + '-ceramic)" stroke="#cbd6e1" stroke-width="3"/>',
    '<rect x="38" y="42" width="118" height="14" rx="7" fill="#5aafe8"/>',
    '<rect x="38" y="83" width="196" height="9" rx="4.5" fill="#93a5b7" opacity=".31"/>',
    '<rect x="38" y="117" width="166" height="9" rx="4.5" fill="#93a5b7" opacity=".22"/>',
    '<path d="m211 181 12 12 27-29" fill="none" stroke="#10b981" stroke-width="7" stroke-linecap="round"/>',
    '</g>',
    '</g>',
    '<circle cx="286" cy="199" r="5" fill="#e8c67a"/>',
    '<circle cx="694" cy="286" r="4" fill="#329ee6" opacity=".45"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function il004(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-default" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#f7f9fb"/>',
    '<stop offset="1" stop-color="#dfe7ef"/>',
    '</linearGradient>',
    '<linearGradient id="' + p + '-day" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#fffce9"/>',
    '<stop offset=".5" stop-color="#f5f9fc"/>',
    '<stop offset="1" stop-color="#d8ebf9"/>',
    '</linearGradient>',
    '<linearGradient id="' + p + '-night" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#203b66"/>',
    '<stop offset="1" stop-color="#0e213d"/>',
    '</linearGradient>'
  ].join('');
  const body = [
    '<ellipse cx="480" cy="603" rx="320" ry="48" fill="#38536f" opacity=".12" filter="url(#' + p + '-blur18)"/>',
    '<g filter="url(#' + p + '-shadow)">',
    '<g transform="translate(99 183) rotate(-6 125 178)">',
    '<rect width="250" height="356" rx="37" fill="url(#' + p + '-default)" stroke="#cbd6e1" stroke-width="3"/>',
    '<circle cx="125" cy="98" r="38" fill="#fff" stroke="#d6e0e9"/>',
    '<path d="M74 180h102M74 213h84M74 246h119" stroke="#91a4b7" stroke-opacity=".38" stroke-width="10" stroke-linecap="round"/>',
    '<circle cx="125" cy="313" r="8" fill="#329ee6"/>',
    '</g>',
    '<g transform="translate(355 112)">',
    '<rect width="250" height="390" rx="37" fill="url(#' + p + '-day)" stroke="#bfcfe0" stroke-width="3"/>',
    '<path d="M0 12 160 0 18 254Z" fill="#fff4c8" opacity=".4" filter="url(#' + p + '-blur18)"/>',
    '<circle cx="125" cy="104" r="40" fill="#fff" stroke="#d4e2ec"/>',
    '<path d="M74 193h102M74 226h84M74 259h119" stroke="#829bb2" stroke-opacity=".34" stroke-width="10" stroke-linecap="round"/>',
    '<circle cx="125" cy="342" r="9" fill="url(#' + p + '-gold)"/>',
    '</g>',
    '<g transform="translate(611 183) rotate(6 125 178)">',
    '<rect width="250" height="356" rx="37" fill="url(#' + p + '-night)" stroke="#36577d" stroke-width="3"/>',
    '<circle cx="125" cy="98" r="38" fill="#1a3f6d" stroke="#6f9bc7"/>',
    '<path d="M74 180h102M74 213h84M74 246h119" stroke="#b5cee6" stroke-opacity=".35" stroke-width="10" stroke-linecap="round"/>',
    '<circle cx="125" cy="313" r="8" fill="#e8c67a"/>',
    '</g>',
    '</g>',
    '<path d="M311 582h338" stroke="#9eb0c2" stroke-opacity=".4" stroke-width="2"/>',
    '<circle cx="480" cy="582" r="10" fill="url(#' + p + '-blue)"/>',
    '<circle cx="311" cy="582" r="5" fill="#c8d3dd"/>',
    '<circle cx="649" cy="582" r="5" fill="#183457"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function es001(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-page" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#ffffff"/>',
    '<stop offset="1" stop-color="#e9eef3"/>',
    '</linearGradient>'
  ].join('');
  const body = [
    '<ellipse cx="360" cy="564" rx="224" ry="44" fill="#395571" opacity=".11" filter="url(#' + p + '-blur18)"/>',
    '<g filter="url(#' + p + '-shadow)">',
    '<path d="M117 222c94-36 171-14 243 45v285c-75-55-153-78-243-37Z" fill="url(#' + p + '-page)" stroke="#cbd6e1" stroke-width="3"/>',
    '<path d="M603 222c-94-36-171-14-243 45v285c75-55 153-78 243-37Z" fill="url(#' + p + '-page)" stroke="#cbd6e1" stroke-width="3"/>',
    '</g>',
    '<path d="M360 268v284" stroke="#a8b7c6" stroke-opacity=".45" stroke-width="3"/>',
    '<path d="M167 322c55-13 102-5 145 20M167 371c51-11 96-5 137 17M553 322c-55-13-102-5-145 20M553 371c-51-11-96-5-137 17" fill="none" stroke="#9aacbd" stroke-opacity=".23" stroke-width="10" stroke-linecap="round"/>',
    '<circle cx="360" cy="209" r="17" fill="url(#' + p + '-blue)" filter="url(#' + p + '-contact)"/>',
    '<path d="M360 183v-41M333 190l-28-28M387 190l28-28" stroke="#329ee6" stroke-opacity=".38" stroke-width="4" stroke-linecap="round"/>',
    '<circle cx="516" cy="178" r="4" fill="#e8c67a" opacity=".7"/>',
    '<path d="M474 178h30m24 0h45" stroke="#e8c67a" stroke-opacity=".35" stroke-width="2"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function es002(asset, p) {
  const defs = '';
  const body = [
    '<ellipse cx="360" cy="564" rx="218" ry="43" fill="#395571" opacity=".1" filter="url(#' + p + '-blur18)"/>',
    '<rect x="133" y="184" width="454" height="350" rx="48" fill="url(#' + p + '-ceramic)" stroke="#cbd6e1" stroke-width="3" filter="url(#' + p + '-shadow)"/>',
    '<path d="M194 266h332M194 359h332M194 452h332" stroke="#cbd5df" stroke-width="2"/>',
    '<g fill="none" stroke="#8da0b3" stroke-width="4">',
    '<circle cx="226" cy="313" r="17" opacity=".46"/>',
    '<circle cx="226" cy="406" r="17" opacity=".34"/>',
    '</g>',
    '<rect x="271" y="301" width="183" height="12" rx="6" fill="#94a6b8" opacity=".31"/>',
    '<rect x="271" y="394" width="142" height="12" rx="6" fill="#94a6b8" opacity=".23"/>',
    '<circle cx="493" cy="313" r="4" fill="#e8c67a" opacity=".76"/>',
    '<circle cx="493" cy="406" r="4" fill="#329ee6" opacity=".42"/>',
    '<g transform="translate(457 91)">',
    '<circle cx="76" cy="76" r="73" fill="#f8fafc" stroke="#c7d3df" stroke-width="3" filter="url(#' + p + '-contact)"/>',
    '<path d="M76 76V32M76 76l33 20" stroke="#2d72cc" stroke-width="9" stroke-linecap="round"/>',
    '<circle cx="76" cy="76" r="10" fill="#e8c67a"/>',
    '</g>',
    '<path d="M157 158h112" stroke="#e8c67a" stroke-opacity=".42" stroke-width="3"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function es003(asset, p) {
  const defs = '';
  const body = [
    '<ellipse cx="360" cy="563" rx="225" ry="44" fill="#395571" opacity=".11" filter="url(#' + p + '-blur18)"/>',
    '<g filter="url(#' + p + '-shadow)">',
    '<path d="M139 356h442l-58 202H197Z" fill="url(#' + p + '-ceramic)" stroke="#c9d5e0" stroke-width="3"/>',
    '<path d="M139 356h442l-68 72H207Z" fill="#e6edf3" stroke="#c9d5e0" stroke-width="3"/>',
    '</g>',
    '<rect x="271" y="137" width="240" height="284" rx="30" fill="url(#' + p + '-ceramic)" stroke="#cbd6e1" stroke-width="3" filter="url(#' + p + '-contact)" transform="rotate(5 391 279)"/>',
    '<path d="M446 142v66l65 5" fill="#e4ebf2" stroke="#cbd6e1" stroke-width="3" transform="rotate(5 391 279)"/>',
    '<path d="M318 245h138M318 284h103M318 323h124" stroke="#94a6b8" stroke-opacity=".29" stroke-width="10" stroke-linecap="round" transform="rotate(5 391 279)"/>',
    '<path d="M306 469h108" stroke="#2d72cc" stroke-opacity=".46" stroke-width="9" stroke-linecap="round"/>',
    '<circle cx="436" cy="469" r="5" fill="#e8c67a"/>',
    '<path d="M211 242h58M520 272h64" stroke="#e8c67a" stroke-opacity=".36" stroke-width="2"/>',
    '<circle cx="199" cy="242" r="4" fill="#e8c67a" opacity=".62"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function bd001(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-badge" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#fdfefe"/>',
    '<stop offset=".55" stop-color="#e8f2fb"/>',
    '<stop offset="1" stop-color="#c4d7e8"/>',
    '</linearGradient>'
  ].join('');
  const body = [
    '<circle cx="360" cy="360" r="250" fill="#c7d8e7" opacity=".32" filter="url(#' + p + '-blur34)"/>',
    '<path d="M360 91 615 236 615 484 360 629 105 484 105 236Z" fill="url(#' + p + '-badge)" stroke="#b9cadd" stroke-width="5" filter="url(#' + p + '-shadow)"/>',
    '<path d="M360 132 574 254 574 466 360 588 146 466 146 254Z" fill="none" stroke="url(#' + p + '-gold)" stroke-width="8"/>',
    '<path d="M360 194 509 279 509 441 360 526 211 441 211 279Z" fill="url(#' + p + '-blue)" stroke="#9ed5f5" stroke-width="4"/>',
    '<path d="m360 249 76 121h-48v100h-56V370h-48Z" fill="#fff" fill-opacity=".94" stroke="#e5f4ff" stroke-width="3" stroke-linejoin="round"/>',
    '<circle cx="360" cy="194" r="8" fill="#e8c67a"/>',
    '<circle cx="509" cy="279" r="6" fill="#e8c67a" opacity=".74"/>',
    '<circle cx="211" cy="441" r="6" fill="#e8c67a" opacity=".74"/>',
    '<path d="M215 158h73M432 158h73" stroke="#e8c67a" stroke-opacity=".35" stroke-width="3"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

function bd002(asset, p) {
  const defs = [
    '<linearGradient id="' + p + '-echo-a" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#58c0f2"/>',
    '<stop offset="1" stop-color="#2d72cc"/>',
    '</linearGradient>',
    '<linearGradient id="' + p + '-echo-b" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#f3b6cc"/>',
    '<stop offset="1" stop-color="#ff99bb"/>',
    '</linearGradient>'
  ].join('');
  const body = [
    '<circle cx="360" cy="360" r="272" fill="#d6e4ef" opacity=".28" filter="url(#' + p + '-blur34)"/>',
    '<circle cx="360" cy="360" r="248" fill="none" stroke="#329ee6" stroke-opacity=".09" stroke-width="4"/>',
    '<circle cx="360" cy="360" r="204" fill="none" stroke="#329ee6" stroke-opacity=".14" stroke-width="5"/>',
    '<g filter="url(#' + p + '-shadow)">',
    '<circle cx="288" cy="360" r="122" fill="none" stroke="url(#' + p + '-echo-a)" stroke-width="54"/>',
    '<circle cx="432" cy="360" r="122" fill="none" stroke="url(#' + p + '-echo-b)" stroke-width="54"/>',
    '</g>',
    '<path d="M360 269c39 22 63 53 72 91-9 38-33 69-72 91-39-22-63-53-72-91 9-38 33-69 72-91Z" fill="url(#' + p + '-ceramic)" stroke="#c5d3df" stroke-width="4"/>',
    '<circle cx="360" cy="360" r="26" fill="url(#' + p + '-gold)"/>',
    '<path d="M360 150v61M360 509v61M150 360h61M509 360h61" stroke="#e8c67a" stroke-opacity=".48" stroke-width="4" stroke-linecap="round"/>',
    '<circle cx="360" cy="130" r="5" fill="#e8c67a"/>',
    '<circle cx="590" cy="360" r="5" fill="#329ee6" opacity=".62"/>'
  ].join('');
  return shell(asset, p, defs, body);
}

const renderers = {
  'PSM-BG-001': bg001,
  'PSM-BG-002': bg002,
  'PSM-BG-003': bg003,
  'PSM-FX-001': fx001,
  'PSM-FX-002': fx002,
  'PSM-MT-001': mt001,
  'PSM-MT-002': mt002,
  'PSM-MT-003': mt003,
  'PSM-IL-001': il001,
  'PSM-IL-002': il002,
  'PSM-IL-003': il003,
  'PSM-IL-004': il004,
  'PSM-ES-001': es001,
  'PSM-ES-002': es002,
  'PSM-ES-003': es003,
  'PSM-BD-001': bd001,
  'PSM-BD-002': bd002
};

export function getAsset(id) {
  return assetCatalog.find((asset) => asset.id === id);
}

export function getAssetSvg(id, instance = 'file') {
  const asset = getAsset(id);
  const renderer = renderers[id];
  if (!asset || !renderer) {
    throw new Error('Unknown PSM asset: ' + id);
  }
  return renderer(asset, safePrefix(id, instance));
}

export function getHeroSvg(instance = 'hero') {
  const p = safePrefix('psm-hero', instance);
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720" role="img" aria-labelledby="' + p + '-title ' + p + '-desc">',
    '<title id="' + p + '-title">PSM 程序化材质核心</title>',
    '<desc id="' + p + '-desc">由代码绘制的白瓷层、蓝色核心、金色边缘与同向光影。</desc>',
    '<defs>' + commonDefs(p),
    '<linearGradient id="' + p + '-glass" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0" stop-color="#ffffff" stop-opacity=".86"/>',
    '<stop offset=".48" stop-color="#d8e9f6" stop-opacity=".48"/>',
    '<stop offset="1" stop-color="#a7c6df" stop-opacity=".24"/>',
    '</linearGradient>',
    '</defs>',
    '<ellipse cx="360" cy="589" rx="242" ry="53" fill="#344b67" opacity=".14" filter="url(#' + p + '-blur18)"/>',
    '<g filter="url(#' + p + '-shadow)">',
    '<path d="m360 100 142 82-142 82-142-82Z" fill="url(#' + p + '-glass)" stroke="#c9d8e5" stroke-width="3"/>',
    '<path d="m360 178 142 82-142 82-142-82Z" fill="url(#' + p + '-ceramic)" stroke="#cbd6e1" stroke-width="3"/>',
    '<path d="m360 256 142 82-142 82-142-82Z" fill="url(#' + p + '-blue)" stroke="#86cbf2" stroke-width="3"/>',
    '<path d="m360 334 142 82-142 82-142-82Z" fill="url(#' + p + '-ceramic)" stroke="#cbd6e1" stroke-width="3"/>',
    '<path d="m360 412 142 82-142 82-142-82Z" fill="url(#' + p + '-gold)" stroke="#f4dda8" stroke-width="3"/>',
    '</g>',
    '<path d="M360 97v483" stroke="#fff" stroke-opacity=".38" stroke-width="2" stroke-dasharray="3 12"/>',
    '<path d="M174 108 55 39M546 108l119-69" stroke="#e8c67a" stroke-opacity=".32" stroke-width="2"/>',
    '<circle cx="360" cy="338" r="21" fill="#fff" fill-opacity=".94"/>',
    '<circle cx="360" cy="338" r="8" fill="#329ee6"/>',
    '<g fill="#329ee6">',
    '<circle cx="145" cy="440" r="4" opacity=".45"/>',
    '<circle cx="574" cy="384" r="5" opacity=".34"/>',
    '<circle cx="533" cy="553" r="3" opacity=".28"/>',
    '</g>',
    '<g fill="#e8c67a">',
    '<circle cx="181" cy="301" r="4" opacity=".7"/>',
    '<circle cx="610" cy="258" r="3" opacity=".54"/>',
    '</g>',
    '</svg>'
  ].join('');
}
