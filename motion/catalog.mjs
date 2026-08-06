export const motionCategories = [
  { id: 'loading', name: '载入与等待', short: 'Loading' },
  { id: 'button', name: '按钮与触发', short: 'Buttons' },
  { id: 'card', name: '卡片与容器', short: 'Cards' },
  { id: 'feedback', name: '反馈与状态', short: 'Feedback' },
  { id: 'navigation', name: '导航与切换', short: 'Navigation' },
  { id: 'form', name: '表单与控制', short: 'Forms' },
  { id: 'ambient', name: '环境与氛围', short: 'Ambient' }
];

const uiverse = (author, url, note, copyright = author) => ({
  kind: 'adapted',
  platform: 'Uiverse',
  author,
  url,
  license: 'MIT',
  copyright,
  note
});

const original = (note = 'PSM Code Lab 原创实现。') => ({
  kind: 'original',
  platform: 'PSM Code Lab',
  author: 'PSM Code Lab',
  url: '',
  license: 'Project source',
  copyright: 'PSM Code Lab',
  note
});

export const motionCatalog = [
  {
    id: 'PSM-MO-001', category: 'loading', name: '轨道点阵', en: 'Orbital Dots',
    description: '三层不同节奏的轨道围绕核心旋转，适合短时初始化与同步。',
    technique: ['CSS', 'conic-gradient', 'transform'], interaction: 'auto', demo: 'orbit-dots',
    source: uiverse('mrhyddenn', 'https://uiverse.io/mrhyddenn/new-walrus-45', '保留“多环旋转载入器”的概念，重绘为 PSM 轨道、核心与节奏层。', 'mrhyddenn')
  },
  {
    id: 'PSM-MO-002', category: 'loading', name: '磁场条带', en: 'Magnetic Bars',
    description: '条带按相位依次拉伸并回落，形成稳定、低噪声的处理感。',
    technique: ['CSS', 'stagger', 'scaleY'], interaction: 'auto', demo: 'magnetic-bars', source: original()
  },
  {
    id: 'PSM-MO-003', category: 'loading', name: '液态光环', en: 'Liquid Halo',
    description: '柔和光环以非均匀边缘旋转，避免普通圆环载入器的机械感。',
    technique: ['CSS', 'filter', 'border-radius'], interaction: 'auto', demo: 'liquid-halo',
    source: uiverse('Valeron-T', 'https://uiverse.io/Valeron-T/happy-wolverine-36', '借鉴双层旋转载入器的构成，改为不规则液态光环并移除深色霓虹。', 'mrhyddenn; Valeron-T')
  },
  {
    id: 'PSM-MO-004', category: 'loading', name: '呼吸核心', en: 'Breathing Core',
    description: '核心脉冲、外环扩散和微粒闪烁共同表达“系统仍在工作”。',
    technique: ['CSS', 'box-shadow', 'pseudo-elements'], interaction: 'auto', demo: 'breathing-core', source: original()
  },
  {
    id: 'PSM-MO-005', category: 'loading', name: '行进方块', en: 'Marching Cubes',
    description: '方块沿轨道推进、翻面与交接，适合导出或批处理状态。',
    technique: ['CSS', '3D transform', 'delay'], interaction: 'auto', demo: 'marching-cubes',
    source: uiverse('vinodjangid07', 'https://uiverse.io/vinodjangid07/popular-owl-27', '保留多单元顺序运动思路，重写为四枚陶瓷方块的 3D 行进。', 'vinodjangid07')
  },
  {
    id: 'PSM-MO-006', category: 'loading', name: '文字波列', en: 'Type Wave',
    description: '逐字抬升与回落，适合品牌化、低频率的等待提示。',
    technique: ['CSS', 'stagger', 'translateY'], interaction: 'auto', demo: 'type-wave', source: original()
  },
  {
    id: 'PSM-MO-007', category: 'loading', name: '扫描进程', en: 'Scan Progress',
    description: '扫描线穿过离散进度节点，同时保留可读的真实百分比。',
    technique: ['CSS', 'mask', 'progress'], interaction: 'auto', demo: 'scan-progress', source: original()
  },
  {
    id: 'PSM-MO-008', category: 'loading', name: '双螺旋序列', en: 'Helix Sequence',
    description: '双列节点交错穿行，适合数据解析、模型构建等高复杂度过程。',
    technique: ['CSS', 'perspective', 'stagger'], interaction: 'auto', demo: 'helix-sequence', source: original()
  },

  {
    id: 'PSM-MO-009', category: 'button', name: '釉面扫光', en: 'Glaze Sweep',
    description: '悬停时高光从左上掠过，不改变按钮尺寸或文字位置。',
    technique: ['CSS', 'hover', 'linear-gradient'], interaction: 'hover', demo: 'glaze-button',
    source: uiverse('Praashoo7', 'https://uiverse.io/Praashoo7/quick-fish-43', '借鉴扫光按钮的交互反馈，改为 PSM 低亮釉面和克制位移。', 'Praashoo7 (Prashant)')
  },
  {
    id: 'PSM-MO-010', category: 'button', name: '陶瓷按压', en: 'Ceramic Press',
    description: '使用接触影与结构影变化表现真实按压，不使用夸张缩放。',
    technique: ['CSS', 'active', 'shadow'], interaction: 'press', demo: 'ceramic-press', source: original()
  },
  {
    id: 'PSM-MO-011', category: 'button', name: '磁吸指针', en: 'Magnetic Pointer',
    description: '按钮在有限范围内追随指针，并让内部光点反向补偿。',
    technique: ['JS', 'pointermove', 'CSS variables'], interaction: 'pointer', demo: 'magnetic-button', source: original()
  },
  {
    id: 'PSM-MO-012', category: 'button', name: '分层揭示', en: 'Split Reveal',
    description: '前景文字与底层强调色错位切换，适合关键但低频的 CTA。',
    technique: ['CSS', 'clip-path', 'hover'], interaction: 'hover', demo: 'split-reveal',
    source: uiverse('adamgiebl', 'https://uiverse.io/adamgiebl/big-ape-36', '借鉴双层按钮的空间关系，重写为上下分层揭示与蓝金语义。', 'adamgiebl (Adam Giebl)')
  },
  {
    id: 'PSM-MO-013', category: 'button', name: '边界彗星', en: 'Border Comet',
    description: '一枚短光点沿边界巡航，仅在悬停时出现，避免持续抢夺注意力。',
    technique: ['CSS', 'offset-path', 'hover'], interaction: 'hover', demo: 'border-comet', source: original()
  },
  {
    id: 'PSM-MO-014', category: 'button', name: '提交完成态', en: 'Submit Morph',
    description: '点击后从提交按钮过渡为进度，再收束为完成状态。',
    technique: ['JS', 'state machine', 'CSS'], interaction: 'click', demo: 'submit-morph', source: original()
  },

  {
    id: 'PSM-MO-015', category: 'card', name: '基座抬升', en: 'Plinth Lift',
    description: '卡片离开深色基座后显露厚度，点击时重新贴合。',
    technique: ['CSS', 'hover', 'active'], interaction: 'hover', demo: 'plinth-card',
    source: uiverse('uiverse-astronaut', 'https://uiverse.io/uiverse-astronaut/serious-badger-44', '保留基座与抬升的核心体验，改为 PSM 材质、圆角和信息层级。', 'uiverse-astronaut (Astronaut)')
  },
  {
    id: 'PSM-MO-016', category: 'card', name: '视差釉光', en: 'Parallax Glaze',
    description: '卡片随指针轻微倾斜，釉面高光与内容层产生不同视差。',
    technique: ['JS', '3D transform', 'CSS variables'], interaction: 'pointer', demo: 'tilt-glare', source: original()
  },
  {
    id: 'PSM-MO-017', category: 'card', name: '极光边缘', en: 'Aurora Edge',
    description: '低饱和渐变仅沿卡片边缘缓慢流动，主体保持安静可读。',
    technique: ['CSS', 'mask-composite', 'gradient'], interaction: 'auto', demo: 'aurora-edge', source: original()
  },
  {
    id: 'PSM-MO-018', category: 'card', name: '折角档案', en: 'Folded Archive',
    description: '悬停时折角揭示次级元数据，模拟纸张但保持平面化。',
    technique: ['CSS', 'clip-path', 'hover'], interaction: 'hover', demo: 'folded-card', source: original()
  },
  {
    id: 'PSM-MO-019', category: 'card', name: '数据扫描卡', en: 'Data Scan Card',
    description: '扫描束经过时局部指标被点亮，适合诊断与检查面板。',
    technique: ['CSS', 'mask', 'animation'], interaction: 'auto', demo: 'data-scan-card', source: original()
  },

  {
    id: 'PSM-MO-020', category: 'feedback', name: '层叠通知', en: 'Stacked Toast',
    description: '通知从右下进入，前后层级依次错开，退出时不影响页面布局。',
    technique: ['CSS', 'stagger', 'transform'], interaction: 'auto', demo: 'stacked-toast', source: original()
  },
  {
    id: 'PSM-MO-021', category: 'feedback', name: '路径完成', en: 'Path Check',
    description: '圆环与勾选路径按真实绘制顺序完成，适合一次性成功反馈。',
    technique: ['SVG', 'stroke-dasharray', 'CSS'], interaction: 'auto', demo: 'path-check', source: original()
  },
  {
    id: 'PSM-MO-022', category: 'feedback', name: '错误回弹', en: 'Error Rebound',
    description: '短促水平位移后快速收敛，并通过边缘颜色说明错误。',
    technique: ['CSS', 'keyframes', 'aria-live'], interaction: 'auto', demo: 'error-rebound', source: original()
  },
  {
    id: 'PSM-MO-023', category: 'feedback', name: '真实环形进度', en: 'Measured Ring',
    description: '环形进度绑定真实数值，动画仅用于数值变化的平滑表达。',
    technique: ['SVG', 'CSS variables', 'progress'], interaction: 'auto', demo: 'measured-ring', source: original()
  },
  {
    id: 'PSM-MO-024', category: 'feedback', name: '骨架流光', en: 'Quiet Skeleton',
    description: '低对比流光掠过占位结构，并遵守 reduced-motion。',
    technique: ['CSS', 'background-position', 'accessibility'], interaction: 'auto', demo: 'quiet-skeleton', source: original()
  },

  {
    id: 'PSM-MO-025', category: 'navigation', name: '柔性 Dock', en: 'Elastic Dock',
    description: '指针邻近项轻微放大并抬升，远离后恢复稳定尺寸。',
    technique: ['JS', 'distance mapping', 'transform'], interaction: 'pointer', demo: 'elastic-dock', source: original()
  },
  {
    id: 'PSM-MO-026', category: 'navigation', name: '轨迹下划线', en: 'Trace Underline',
    description: '激活线在标签之间移动并调整宽度，不重排导航。',
    technique: ['JS', 'CSS variables', 'tabs'], interaction: 'click', demo: 'trace-tabs', source: original()
  },
  {
    id: 'PSM-MO-027', category: 'navigation', name: '胶囊滑块', en: 'Pill Slider',
    description: '背景滑块在选项间移动，选中态由位置而不是颜色堆叠表达。',
    technique: ['JS', 'radio', 'transform'], interaction: 'click', demo: 'pill-slider',
    source: uiverse('adamgiebl', 'https://uiverse.io/adamgiebl/unlucky-dingo-92', '借鉴滑块式开关的空间反馈，扩展为三段语义选择器并重写样式。', 'njesenberger; adamgiebl (Adam Giebl)')
  },
  {
    id: 'PSM-MO-028', category: 'navigation', name: '菜单形变', en: 'Menu Morph',
    description: '三条线形变为关闭符号，保持按钮外框和点击热区不变。',
    technique: ['CSS', 'button state', 'transform'], interaction: 'click', demo: 'menu-morph', source: original()
  },

  {
    id: 'PSM-MO-029', category: 'form', name: '浮动标签输入', en: 'Floating Label',
    description: '标签随焦点与内容上移，输入框边界保持稳定，不遮挡文本。',
    technique: ['CSS', ':placeholder-shown', 'focus'], interaction: 'focus', demo: 'floating-label',
    source: uiverse('Praashoo7', 'https://uiverse.io/Praashoo7/tame-sloth-39', '借鉴浮动标签输入的基本交互，重构语义标签、焦点环与 PSM 表面。', 'Praashoo7 (Prashant)')
  },
  {
    id: 'PSM-MO-030', category: 'form', name: '轨道开关', en: 'Track Switch',
    description: '开关滑块带有轻微惯性与状态图标，不通过纯颜色区分。',
    technique: ['CSS', 'checkbox', 'spring-like easing'], interaction: 'click', demo: 'track-switch', source: original()
  },
  {
    id: 'PSM-MO-031', category: 'form', name: '校验输入', en: 'Validation Field',
    description: '输入完成后边缘逐段点亮并显示校验结果，错误时保持可读提示。',
    technique: ['JS', 'input', 'state'], interaction: 'type', demo: 'validation-field',
    source: original('以稳定边界、逐步校验与明确文本反馈为核心的 PSM 原创表单状态。')
  },
  {
    id: 'PSM-MO-032', category: 'form', name: '分段选择', en: 'Segmented Choice',
    description: '选中块通过共享滑块移动，键盘与点击都能更新状态。',
    technique: ['JS', 'ARIA', 'CSS variables'], interaction: 'click', demo: 'segmented-choice', source: original()
  },

  {
    id: 'PSM-MO-033', category: 'ambient', name: '矿物网格漂移', en: 'Mineral Mesh',
    description: '低对比多层径向渐变缓慢漂移，适合作为实验页背景而非业务正文。',
    technique: ['CSS', 'radial-gradient', 'background-position'], interaction: 'auto', demo: 'mineral-mesh', source: original()
  },
  {
    id: 'PSM-MO-034', category: 'ambient', name: '微粒景深', en: 'Particle Depth',
    description: '三层粒子以不同速度和模糊度移动，产生克制景深。',
    technique: ['CSS', 'box-shadow', 'parallax'], interaction: 'auto', demo: 'particle-depth', source: original()
  },
  {
    id: 'PSM-MO-035', category: 'ambient', name: '梯度涡流', en: 'Gradient Vortex',
    description: '色带围绕中心缓慢旋转，使用遮罩控制饱和度和覆盖范围。',
    technique: ['CSS', 'conic-gradient', 'filter'], interaction: 'auto', demo: 'gradient-vortex', source: original()
  },
  {
    id: 'PSM-MO-036', category: 'ambient', name: '网格光束', en: 'Grid Beam',
    description: '一束斜向柔光穿过工程网格，表达扫描、部署与构建状态。',
    technique: ['CSS', 'repeating-linear-gradient', 'mask'], interaction: 'auto', demo: 'grid-beam', source: original()
  }
];

export const motionCounts = Object.fromEntries(
  motionCategories.map((category) => [
    category.id,
    motionCatalog.filter((item) => item.category === category.id).length
  ])
);
