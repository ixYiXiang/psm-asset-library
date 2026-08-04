export const systemChapters = [
  { id: 'world', index: '01', title: '世界', english: 'World', summary: '环境底色、空气感、留白与统一光源方向。' },
  { id: 'material', index: '02', title: '材质', english: 'Material', summary: '白瓷、磨砂、矿物与透明表面的边缘行为。' },
  { id: 'lighting', index: '03', title: '光影', english: 'Lighting & Shadow', summary: '五层光线、强度比例、色温与阴影尺度。' },
  { id: 'texture', index: '04', title: '纹理', english: 'Texture', summary: '低密度纹理层、组合强度与光线响应。' },
  { id: 'color', index: '05', title: '色彩', english: 'Color', summary: '主色、辅助色、语义色、中性色与使用比例。' },
  { id: 'type', index: '06', title: '字体与层级', english: 'Type & Hierarchy', summary: '字号、字重、行高、字距、对齐与阅读优先级。' },
  { id: 'components', index: '07', title: '组件', english: 'Components', summary: '按钮、卡片、标签、输入、导航、弹窗与反馈状态。' },
  { id: 'svg', index: '08', title: 'SVG 语汇', english: 'SVG Language', summary: '十组可复用的代码绘图基础语汇与使用边界。' },
  { id: 'tokens', index: '09', title: 'WXSS 令牌', english: 'WXSS Tokens', summary: '颜色、间距、圆角、字体、边框、层级与主题变量。' },
  { id: 'guide', index: '10', title: '渲染规范', english: 'Rendering Guide', summary: '层级规则、交互反馈、应用法则与检查清单。' }
];

export const world = {
  colors: [
    { name: 'Base', value: '#ECEEF2' },
    { name: 'Top', value: '#F5F7FA' },
    { name: 'Bottom', value: '#E5E8ED' }
  ],
  direction: '左上 → 右下',
  angle: '约 135°',
  temperature: '约 6500K',
  keywords: ['自然', '空气', '矿物', '精密', '柔光', '冷暖平衡'],
  applications: ['全局背景', '页面容器', '卡片背景', '弹窗背景', '底部导航', '静态载入环境']
};

export const materials = [
  { id: 'ceramic', name: 'White Ceramic', cn: '低亮白瓷', surface: '细腻', light: '柔光', roughness: '极低', thickness: '中等', note: '温润冷白，使用统一低对比边缘与贴地阴影。' },
  { id: 'frost', name: 'Frost Glass', cn: '轻磨砂玻璃', surface: '磨砂', light: '柔散', roughness: '中等', thickness: '中等', note: '强调光线扩散与层次，不追求强透明折射。' },
  { id: 'mineral', name: 'Mineral Background', cn: '低杂质矿物', surface: '矿物', light: '哑光', roughness: '中等', thickness: '弱', note: '只保留极少自然不均匀感，禁止密集砂点。' },
  { id: 'clear', name: 'Clear Glass', cn: '清透玻璃', surface: '光滑', light: '高光', roughness: '极低', thickness: '弱', note: '仅用于检测、层级区分或少量透明叠层。' }
];

export const materialDetails = [
  ['微观结构', '低频自然变化，不形成可辨识的脏点。'],
  ['边缘表现', '柔和釉光定义厚度，四边保持统一。'],
  ['光线响应', '随角度产生克制明度变化，不出现碎裂高光。'],
  ['透光层次', '以柔散与叠层建立空间，不依赖背景模糊。'],
  ['粒子分布', '颗粒稀疏、大小不一，但不抢正文。'],
  ['厚度对比', '同组表面用边缘和短阴影建立清晰层级。']
];

export const lightLayers = [
  { index: 1, name: '主光', english: 'Key Light', value: '100%', purpose: '塑造形体与方向', temperature: '5000K–6500K' },
  { index: 2, name: '环境光', english: 'Ambient Light', value: '20%–30%', purpose: '提供基础亮度与空气感', temperature: '约 6500K' },
  { index: 3, name: '接触阴影', english: 'Contact Shadow', value: '10%–20%', purpose: '建立物体与平面的接触关系', temperature: '中性' },
  { index: 4, name: '投影', english: 'Cast Shadow', value: '15%–25%', purpose: '表达漂浮、遮挡与空间关系', temperature: '冷灰' },
  { index: 5, name: '反射光', english: 'Reflected Light', value: '5%–15%', purpose: '平衡暗部并补充细节', temperature: '随环境变化' }
];

export const shadowScale = [
  { token: '--psm-shadow-xs', name: 'S1 接触影', y: '2–4px', blur: '8px', usage: '按钮 / 标签', css: '0 3px 8px rgba(35,50,69,.16)' },
  { token: '--psm-shadow-sm', name: 'S2 卡片影', y: '8px', blur: '24px', usage: '卡片 / 面板', css: '0 8px 24px rgba(45,62,84,.12)' },
  { token: '--psm-shadow-md', name: 'S3 导航影', y: '12px', blur: '40px', usage: '底部导航 / Dock', css: '0 12px 40px rgba(45,62,84,.14)' },
  { token: '--psm-shadow-lg', name: 'S4 弹窗影', y: '24px', blur: '60px', usage: '弹窗 / 遮罩层', css: '0 24px 60px rgba(31,44,58,.18)' }
];

export const textureLayers = [
  { id: 'A', name: '矿物颗粒层', english: 'Mineral Particles', range: '0.5%–1.5%', recommended: '0.8%', contrast: '极低', note: '自然形态微小颗粒，提供细微质感。' },
  { id: 'B', name: '纸张纤维层', english: 'Paper Fibers', range: '0.8%–1.5%', recommended: '1.0%', contrast: '低', note: '有方向感的细纤维，维持柔和秩序。' },
  { id: 'C', name: '空气颗粒层', english: 'Air Particles', range: '0.2%–0.6%', recommended: '0.3%', contrast: '极低', note: '近乎浮尘的空间点，只增加空气深度。' },
  { id: 'D', name: '加工痕迹层', english: 'Craft Marks', range: '0.3%–0.8%', recommended: '0.5%', contrast: '低', note: '轻微切削或工艺痕迹，体现工程秩序。' }
];

export const textureStyles = [
  { id: 'soft-mineral', name: '柔白矿物', marks: [4, 2, 1, 2] },
  { id: 'paper-fiber', name: '纸张纤维', marks: [3, 4, 2, 2] },
  { id: 'fine-sand', name: '细砂质感', marks: [2, 2, 3, 3] },
  { id: 'brushed-metal', name: '拉丝金属', marks: [2, 4, 2, 3] },
  { id: 'machined', name: '切削痕迹', marks: [2, 4, 3, 3] },
  { id: 'porous', name: '微孔陶瓷', marks: [3, 2, 3, 2] }
];

export const colorGroups = {
  primary: ['#E6F2FF', '#CDE6FF', '#99CCFF', '#66B3FF', '#329EE6', '#2072CC', '#1F5FAE', '#0F5F7A'],
  secondary: ['#E6FDF7', '#C8F5EF', '#99EDE3', '#5EEAD4', '#44C6BE', '#2EA6A1'],
  neutrals: [
    ['50', '#FFFFFF'], ['100', '#F5F7FA'], ['200', '#ECEEF2'], ['300', '#E5E8ED'], ['400', '#CDD2DA'],
    ['500', '#9CA3AF'], ['600', '#6B7280'], ['700', '#4B5563'], ['800', '#2D3748'], ['900', '#111827']
  ],
  semantic: [
    { name: '成功', english: 'Success', from: '#10B981', to: '#52C41A', usage: '通过、完成、可用' },
    { name: '警告', english: 'Warning', from: '#FBBF24', to: '#EA9815', usage: '提醒、注意、待处理' },
    { name: '危险', english: 'Danger', from: '#C7443B', to: '#E74C3C', usage: '错误、删除、失败' },
    { name: '信息', english: 'Info', from: '#329EE6', to: '#38BDF8', usage: '通知、提示、一般信息' },
    { name: '点赞', english: 'Like', from: '#FF99BB', to: '#FF6FA3', usage: '点赞、喜欢、正向反馈' },
    { name: '踩坑', english: 'Pitfall', from: '#8D6E4B', to: '#D08968', usage: '经验、踩坑、教训' },
    { name: '效率', english: 'Efficiency', from: '#1565C0', to: '#42A5F5', usage: '工具、性能、专注' },
    { name: '审核中', english: 'Reviewing', from: '#FBBF24', to: '#EA9815', usage: '审核、等待处理' }
  ],
  ratio: [
    { name: '中性色', value: 60 },
    { name: '主色', value: 20 },
    { name: '辅助色', value: 10 },
    { name: '语义色', value: 5 },
    { name: '金色点缀', value: 5 }
  ]
};

export const fontFamilies = [
  { name: '思源黑体', english: 'Source Han Sans', usage: '中文 / 西文 / 数字', sample: 'Aa 日志回响 PSM 123' },
  { name: 'JetBrains Mono', english: 'Monospace', usage: '代码 / 编号 / 数字', sample: 'const psm = 01;' }
];

export const fontWeights = [
  ['300', 'Light', '短说明 / 次要信息'],
  ['400', 'Regular', '正文 / 长文阅读'],
  ['500', 'Medium', '辅助标题 / 强调信息'],
  ['600', 'Semibold', '组件标题 / 按钮文本'],
  ['700', 'Bold', '主标题 / 关键强调']
];

export const typeScale = [
  { size: 72, name: '特大标题', token: 'display', lineHeight: 1.2 },
  { size: 56, name: '大标题', token: 'h1', lineHeight: 1.2 },
  { size: 48, name: '标题', token: 'h2', lineHeight: 1.3 },
  { size: 36, name: '小标题', token: 'h3', lineHeight: 1.4 },
  { size: 30, name: '副标题', token: 'subtitle', lineHeight: 1.4 },
  { size: 26, name: '正文', token: 'body', lineHeight: 1.6 },
  { size: 22, name: '辅助文字', token: 'caption', lineHeight: 1.6 },
  { size: 18, name: '注释文字', token: 'note', lineHeight: 1.7 }
];

export const readingHierarchy = [
  { name: '标题', value: 100, purpose: '最重要信息' },
  { name: '正文', value: 70, purpose: '主要内容' },
  { name: 'Meta', value: 45, purpose: '次要信息' },
  { name: '按钮', value: 30, purpose: '功能操作' },
  { name: '装饰', value: 10, purpose: '视觉点缀' }
];

export const componentStateOrder = Object.freeze([
  { id: 'default', label: '默认', english: 'Default', rule: '保持真实组件的常规层级与可读性。' },
  { id: 'focus', label: '关注', english: 'Focus', rule: '使用清楚的轮廓与边缘反馈，不依赖位移或缩放。' },
  { id: 'pressed', label: '按下', english: 'Pressed', rule: '以短接触影和明度变化表达按下，不改变布局尺寸。' },
  { id: 'disabled', label: '禁用', english: 'Disabled', rule: '降低对比并移除可操作阴影，同时保留状态文案。' },
  { id: 'semantic', label: '语义', english: 'Semantic', rule: '使用成功、警告、危险、信息或回响色，并保留文字说明。' }
]);

const componentDefinitions = [
  {
    id: 'button',
    workItemId: 'W03-CS-001',
    name: '按钮',
    english: 'Button',
    targetContainers: ['文档导出主按钮', '日志发布与提交审核', '隐私提示双按钮'],
    semanticTone: 'danger',
    stateExamples: ['导出文档', '键盘关注', '确认提交', '条件不足', '删除日志'],
    stateExamplesEnglish: ['Export document', 'Keyboard focus', 'Confirm submit', 'Unavailable', 'Delete log']
  },
  {
    id: 'card',
    workItemId: 'W03-CS-002',
    name: '卡片',
    english: 'Card',
    targetContainers: ['日志列表卡片', '本地事务三项预览', '管理员审核列表'],
    semanticTone: 'warning',
    stateExamples: ['日志摘要', '当前选中', '正在打开', '已停用事务', '逾期事务'],
    stateExamplesEnglish: ['Log summary', 'Selected card', 'Opening', 'Disabled item', 'Overdue task']
  },
  {
    id: 'tag',
    workItemId: 'W03-CS-003',
    name: '标签与徽标',
    english: 'Tag / Badge',
    targetContainers: ['日志类型标签', '审核状态标签', '事务时间状态'],
    semanticTone: 'success',
    stateExamples: ['效率', '已聚焦', '已选择', '不可选择', '已通过'],
    stateExamplesEnglish: ['Efficiency', 'Focused', 'Selected', 'Unavailable', 'Approved']
  },
  {
    id: 'input',
    workItemId: 'W03-CS-004',
    name: '输入',
    english: 'Input',
    targetContainers: ['综合搜索框', '事务名称输入', '日志标题与正文编辑'],
    semanticTone: 'danger',
    stateExamples: ['输入内容', '正在编辑', '确认输入', '只读字段', '必填项缺失'],
    stateExamplesEnglish: ['Enter content', 'Editing', 'Confirm input', 'Read-only', 'Required missing']
  },
  {
    id: 'navigation',
    workItemId: 'W03-CS-005',
    name: '导航',
    english: 'Navigation',
    targetContainers: ['五项常驻底部导航', '效率 / 踩坑分段控件', 'Radio 时间选择芯片'],
    semanticTone: 'echo',
    stateExamples: ['工具', '日志', '搜索', '夜幕占位', '回响模式'],
    stateExamplesEnglish: ['Tools', 'Logs', 'Search', 'Night placeholder', 'Echo mode']
  },
  {
    id: 'dialog',
    workItemId: 'W03-CS-006',
    name: '弹窗与面板',
    english: 'Modal / Dialog',
    targetContainers: ['隐私提示', '本地事务管理面板', '删除与注销确认'],
    semanticTone: 'danger',
    stateExamples: ['说明弹窗', '键盘焦点', '确认操作', '等待条件', '危险确认'],
    stateExamplesEnglish: ['Information', 'Keyboard focus', 'Confirm action', 'Waiting', 'Destructive']
  },
  {
    id: 'feedback',
    workItemId: 'W03-CS-007',
    name: '反馈',
    english: 'Feedback',
    targetContainers: ['搜索完成状态条', '本地保存结果', '加载失败与空状态'],
    semanticTone: 'success',
    stateExamples: ['等待操作', '当前提示', '正在处理', '无可用操作', '保存成功'],
    stateExamplesEnglish: ['Idle', 'Current notice', 'Processing', 'Unavailable', 'Saved']
  },
  {
    id: 'fab',
    workItemId: 'W03-CS-008',
    name: '固定 / 浮动高优先级操作',
    english: 'Fixed / Floating Action',
    targetContainers: ['“我的”页固定发布操作栏', '本地事务管理标题栏新增', 'Code Lab 源码复制与下载'],
    semanticTone: 'primary',
    stateExamples: ['新建草稿', '发布日志', '提交审核', '审核中', '新增事务'],
    stateExamplesEnglish: ['New draft', 'Publish log', 'Submit review', 'In review', 'Add task']
  }
];

export const componentGroups = Object.freeze(componentDefinitions.map((group) => Object.freeze({
  ...group,
  targetContainers: Object.freeze(group.targetContainers),
  states: Object.freeze(componentStateOrder.map((state, index) => Object.freeze({
    ...state,
    example: group.stateExamples[index],
    exampleEnglish: group.stateExamplesEnglish[index],
    tone: state.id === 'semantic' ? group.semanticTone : state.id
  })))
})));

export const svgPrimitives = [
  { index: '01', name: 'Background', cn: '背景图案', variants: ['bg-grid', 'bg-gradient-orb', 'bg-mesh', 'bg-noise'], tileable: true, repeatable: true },
  { index: '02', name: 'Noise', cn: '噪点纹理', variants: ['noise-fine', 'noise-medium', 'noise-heavy', 'noise-scratch'], tileable: true, repeatable: true },
  { index: '03', name: 'Light', cn: '光效元素', variants: ['light-ray', 'light-spot', 'light-glow', 'light-streak'], tileable: false, repeatable: true },
  { index: '04', name: 'Corner Highlight', cn: '圆角高光', variants: ['corner-soft', 'corner-sharp', 'corner-glass', 'corner-gold'], tileable: false, repeatable: false },
  { index: '05', name: 'Button Material', cn: '按钮材质', variants: ['btn-primary-bg', 'btn-secondary-bg', 'btn-ghost-bg', 'btn-glass-bg'], tileable: false, repeatable: false },
  { index: '06', name: 'Card Material', cn: '卡片材质', variants: ['card-neu', 'card-glass', 'card-gradient', 'card-border'], tileable: false, repeatable: false },
  { index: '07', name: 'Divider', cn: '分割线', variants: ['divider-solid', 'divider-dashed', 'divider-dotted', 'divider-gradient'], tileable: true, repeatable: false },
  { index: '08', name: 'Particle', cn: '粒子元素', variants: ['particle-dot', 'particle-circle', 'particle-line', 'particle-orbit'], tileable: false, repeatable: true },
  { index: '09', name: 'Pattern', cn: '图案纹理', variants: ['pattern-waves', 'pattern-hex', 'pattern-dots', 'pattern-diagonal'], tileable: true, repeatable: true },
  { index: '10', name: 'Icon Base', cn: '图标基底', variants: ['icon-circle', 'icon-rounded', 'icon-square', 'icon-hexagon'], tileable: false, repeatable: false }
];

export const spacingScale = [8, 12, 20, 24, 32, 48, 64];
export const radiusScale = [0, 4, 8, 12, 16, 24, 32, 9999];
export const zIndexScale = [
  ['dropdown', 1000], ['sticky', 1100], ['modal', 1200], ['toast', 1300], ['notification', 1400]
];
export const durationScale = [
  ['fast', '150ms'], ['base', '250ms'], ['slow', '350ms'], ['reserved', '500ms+']
];

export const tokenMap = {
  '--psm-color-bg': '#E2E7EB',
  '--psm-color-bg-top': '#F5F7FA',
  '--psm-color-bg-deep': '#D7DEE5',
  '--psm-color-surface': '#F6F7F8',
  '--psm-color-surface-bottom': '#F7F9FA',
  '--psm-color-surface-muted': '#EEF1F4',
  '--psm-color-primary': '#329EE6',
  '--psm-color-primary-deep': '#2D72CC',
  '--psm-color-primary-soft': '#DCEEFF',
  '--psm-color-gold': '#B58A3D',
  '--psm-color-gold-soft': '#F5D37A',
  '--psm-color-text': '#1D2936',
  '--psm-color-text-body': '#334155',
  '--psm-color-text-muted': '#64748B',
  '--psm-color-border': '#C7D0D7',
  '--psm-color-border-soft': '#E5E7EB',
  '--psm-color-success': '#10B981',
  '--psm-color-warning': '#FBBF24',
  '--psm-color-danger': '#C7443B',
  '--psm-color-like': '#D95D8C',
  '--psm-color-favorite': '#B8872E',
  '--psm-color-overlay': 'rgba(31,42,53,.60)',
  '--psm-color-tab-bridge-solid': 'rgba(247,249,250,.78)',
  '--psm-color-tab-bridge-tail': 'rgba(247,249,250,.64)',
  '--psm-border-width': '1rpx',
  '--psm-radius-control': '18rpx',
  '--psm-radius-surface': '22rpx',
  '--psm-radius-modal': '24rpx',
  '--psm-shadow-contact': '0 2rpx 4rpx rgba(35,50,69,.30)',
  '--psm-shadow-surface': '0 6rpx 16rpx rgba(31,44,58,.10)',
  '--psm-shadow-structure': '5rpx 8rpx 14rpx rgba(45,62,84,.20)',
  '--psm-z-navigation': '1000',
  '--psm-z-light': '4800',
  '--psm-z-theme-curtain': '4900',
  '--psm-z-modal': '5000',
  '--psm-z-progress': '5200'
};

export const renderingGoals = ['一致性', '可读性', '层次感', '舒适度', '高效性'];

export const hierarchyRules = [
  { level: 'L1', value: '100%', name: '核心信息 / 强焦点' },
  { level: 'L2', value: '70%', name: '重要信息 / 次焦点' },
  { level: 'L3', value: '50%', name: '辅助信息 / 弱焦点' },
  { level: 'L4', value: '30%', name: '背景信息 / 环境层' },
  { level: 'L5', value: '10%', name: '装饰元素 / 氛围层' }
];

export const applicationRules = [
  ['保持一致', '使用同一组组件、变量和状态口径。'],
  ['尊重留白', '留白是内容的呼吸空间，不用装饰填满。'],
  ['建立层次', '先组织信息，再加入边缘和材质。'],
  ['控制装饰', '光线服务内容，不能喧宾夺主。'],
  ['适配场景', '根据屏宽、安全区和键盘环境调整。'],
  ['测试验证', '在真实设备与手势路径中确认可读性。']
];

export const renderingChecklist = [
  '是否使用了正确的组件？',
  '层级是否清晰、焦点明确？',
  '光影方向是否统一？',
  '颜色与对比度是否可读？',
  '交互反馈是否及时且克制？',
  '状态、禁用与加载是否有意义？',
  '不同设备上是否表现一致？',
  '装饰是否低于正文与操作？'
];

export function getWxssTokens() {
  return [
    'page {',
    ...Object.entries(tokenMap).map(([name, value]) => '  ' + name + ': ' + value + ';'),
    '}',
    '',
    '/* PSM 静态 UI：动效令牌仅登记，不作为视觉品质依赖。 */'
  ].join('\n');
}

export function getComponentWxss() {
  return [
    '.psm-surface {',
    '  border: var(--psm-border-width) solid var(--psm-color-border);',
    '  border-radius: var(--psm-radius-surface);',
    '  background: var(--psm-color-surface);',
    '  box-shadow: var(--psm-shadow-surface), inset 1rpx 1rpx 0 rgba(255,255,255,.72);',
    '}',
    '',
    '.psm-button {',
    '  min-height: 72rpx;',
    '  border-radius: var(--psm-radius-control);',
    '  background: var(--psm-color-primary);',
    '  color: #FFFFFF;',
    '  font-size: 26rpx;',
    '  font-weight: 600;',
    '  box-shadow: var(--psm-shadow-contact);',
    '}',
    '.psm-state--focus { border-color: var(--psm-color-primary); box-shadow: 0 0 0 3rpx rgba(50,158,230,.14); }',
    '.psm-state--pressed { background: var(--psm-color-primary-deep); box-shadow: inset 0 4rpx 8rpx rgba(20,47,78,.22); }',
    '.psm-state--disabled { border-color: var(--psm-color-border-soft); background: var(--psm-color-surface-muted); color: var(--psm-color-text-muted); box-shadow: none; opacity: .58; }',
    '.psm-state--success { border-color: rgba(16,185,129,.34); background: rgba(16,185,129,.10); color: var(--psm-color-success); }',
    '.psm-state--warning { border-color: rgba(251,191,36,.42); background: rgba(251,191,36,.12); color: #9A6A12; }',
    '.psm-state--danger { border-color: rgba(199,68,59,.34); background: rgba(199,68,59,.10); color: var(--psm-color-danger); }',
    '.psm-state--info { border-color: rgba(50,158,230,.34); background: rgba(50,158,230,.10); color: var(--psm-color-primary-deep); }',
    '.psm-state--echo { border-color: rgba(108,92,231,.34); background: rgba(108,92,231,.10); color: #5B4CC4; }',
    '.psm-state--primary { border-color: var(--psm-color-primary); background: var(--psm-color-primary); color: #FFFFFF; }',
    '',
    '.psm-field {',
    '  min-height: 72rpx;',
    '  border: var(--psm-border-width) solid var(--psm-color-border);',
    '  border-radius: var(--psm-radius-control);',
    '  background: #FFFFFF;',
    '  box-shadow: inset 0 2rpx 6rpx rgba(31,44,58,.06);',
    '}',
    '',
    '.psm-modal-root { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: var(--psm-z-modal); }',
    '.psm-modal-mask { position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: var(--psm-color-overlay); }',
    '.psm-modal-card { border-radius: var(--psm-radius-modal); background: var(--psm-color-surface); box-shadow: 0 24rpx 60rpx rgba(31,44,58,.18); }'
  ].join('\n');
}
