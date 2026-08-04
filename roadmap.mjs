export const expansionWaves = Object.freeze([
  {
    id: 'W01',
    status: 'complete',
    title: '核心图标',
    english: 'Icon Core',
    target: '8 类 × 6 枚，共 48 枚',
    deliverables: ['单文件 SVG', 'SVG Sprite', 'Manifest', 'CSS 尺寸助手'],
    gate: '48 个稳定编号；24、32、64px 可辨识；零栅格依赖。'
  },
  {
    id: 'W02',
    status: 'queued',
    title: '语义补全',
    english: 'Semantic Extension',
    target: '补充 12 枚，达到约 60 枚概念基线',
    deliverables: ['菜单', '关闭', '复制', '保存', '回复', '提及', '已验证', '离线', '下载', '上传', '锁定', '解锁'],
    gate: '每枚必须对应真实功能，不为凑数制造同义图标。'
  },
  {
    id: 'W03',
    status: 'planned',
    title: '组件状态矩阵',
    english: 'Component State Matrix',
    target: '8 个组件组 × 默认、关注、按下、禁用与语义状态',
    deliverables: ['按钮状态', '卡片状态', '标签状态', '输入状态', '导航状态', '弹窗状态', '反馈状态', '浮动操作状态'],
    gate: '状态由边缘、颜色和层级表达，不依赖动画或装饰图。'
  },
  {
    id: 'W04',
    status: 'planned',
    title: '主题令牌包',
    english: 'Theme Token Packs',
    target: '默认、白昼与夜幕探索三组令牌',
    deliverables: ['Default tokens', 'Daylight tokens', 'Night exploration tokens', '对比度报告'],
    gate: '夜幕只登记为探索，不在通过页面级验收前标记可用。'
  },
  {
    id: 'W05',
    status: 'planned',
    title: '工程适配器',
    english: 'Developer Adapters',
    target: '让同一数据源服务网页、CSS 与小程序评审流程',
    deliverables: ['Sprite 使用示例', '静态 HTML 示例', 'WXSS 评审映射', '版本迁移清单'],
    gate: '资产库与业务代码保持解耦；不得自动替换现有 WeUI 图标。'
  },
  {
    id: 'W∞',
    status: 'recurring',
    title: '持续质量循环',
    english: 'Continuous Quality Loop',
    target: '每一波发布后重新发现语义缺口并进入下一波',
    deliverables: ['唯一性检查', '小尺寸检查', '可访问性检查', '零图片检查', '页面回归', '发布记录'],
    gate: '只有真实语义缺口进入队列；不以数量替代质量。'
  }
]);

export const continuousLoop = Object.freeze([
  ['01', '发现', '从真实页面、Notion 基线和使用反馈收集缺口。'],
  ['02', '定义', '分配稳定编号、语义、容器与验收尺寸。'],
  ['03', '绘制', '只使用可审查的 SVG、CSS、WXSS 与几何代码。'],
  ['04', '导出', '从同一数据源生成单文件、Sprite、清单与辅助样式。'],
  ['05', '验证', '运行唯一性、依赖、尺寸、页面与交互回归。'],
  ['06', '发布', '提交 GitHub main，检查 Pages，再回到发现阶段。']
]);

export function getRoadmapManifest() {
  return {
    schema_version: 1,
    name: 'PSM Continuous Expansion Roadmap',
    source_of_truth: 'roadmap.mjs',
    current_wave: 'W01',
    next_wave: 'W02',
    principles: [
      'semantic recognition before material unity',
      'code-native drawing only',
      'no image generation or tracing',
      'stable identifiers and reproducible exports',
      'real usage gaps before quantity goals'
    ],
    waves: expansionWaves,
    loop: continuousLoop
  };
}

export function getRoadmapMarkdown() {
  const lines = [
    '# PSM Continuous Expansion Roadmap',
    '',
    'This queue keeps the code-native PSM asset system reproducible. It does not authorize image generation, tracing, raster embedding, or automatic replacement of production WeUI icons.',
    '',
    '## Waves',
    ''
  ];

  for (const wave of expansionWaves) {
    lines.push('### ' + wave.id + ' · ' + wave.title + ' / ' + wave.english);
    lines.push('');
    lines.push('- Status: ' + wave.status);
    lines.push('- Target: ' + wave.target);
    lines.push('- Deliverables: ' + wave.deliverables.join(' / '));
    lines.push('- Gate: ' + wave.gate);
    lines.push('');
  }

  lines.push('## Continuous loop');
  lines.push('');
  for (const step of continuousLoop) {
    lines.push(step[0] + '. ' + step[1] + ' — ' + step[2]);
  }
  lines.push('');
  return lines.join('\n');
}
