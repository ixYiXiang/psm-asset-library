export const iconCategories = Object.freeze([
  { id: 'NV', name: '导航', english: 'Navigation', accent: '#329EE6' },
  { id: 'CT', name: '内容', english: 'Content', accent: '#5A7FA7' },
  { id: 'EC', name: '回响', english: 'Echo', accent: '#6C5CE7' },
  { id: 'ST', name: '状态', english: 'Status', accent: '#10B981' },
  { id: 'AC', name: '操作', english: 'Action', accent: '#2D72CC' },
  { id: 'SY', name: '系统', english: 'System', accent: '#64748B' },
  { id: 'DT', name: '数据', english: 'Data', accent: '#51ACB0' },
  { id: 'TM', name: '时间', english: 'Time', accent: '#B8872E' }
]);

const definitions = [
  ['NV', 'home', '首页', 'Home', '返回产品的一级起点。', '<path d="M3.5 10.6 12 3.8l8.5 6.8"/><path d="M5.6 9.4v10.1h12.8V9.4"/><path d="M9.2 19.5v-5.7h5.6v5.7"/>'],
  ['NV', 'search', '搜索', 'Search', '提交查询与定位内容。', '<circle cx="10.7" cy="10.7" r="6.2"/><path d="m15.3 15.3 4.6 4.6"/><path d="M8.3 10.7h4.8"/>'],
  ['NV', 'learn', '学习', 'Learn', '进入术语与知识内容。', '<path d="M4 5.3c2.5-.8 5.2-.3 8 1.4v12c-2.8-1.7-5.5-2.2-8-1.4z"/><path d="M20 5.3c-2.5-.8-5.2-.3-8 1.4v12c2.8-1.7 5.5-2.2 8-1.4z"/><path d="M12 6.7v12"/>'],
  ['NV', 'explore', '探索', 'Explore', '进入工具与发现空间。', '<circle cx="12" cy="12" r="8.6"/><path d="m14.9 9.1-1.8 4-4 1.8 1.8-4z"/><circle cx="12" cy="12" r=".8" fill="currentColor" stroke="none"/>'],
  ['NV', 'profile', '我的', 'Profile', '进入个人资料与账户区域。', '<circle cx="12" cy="8.2" r="3.3"/><path d="M5.3 20c.5-4 2.7-6 6.7-6s6.2 2 6.7 6"/>'],
  ['NV', 'back', '返回', 'Back', '返回上一层，不承担关闭语义。', '<path d="m10 5-7 7 7 7"/><path d="M3.5 12H21"/>'],

  ['CT', 'log', '日志', 'Log', '表示一条正式编程日志。', '<path d="M6 3.5h8l4 4v13H6z"/><path d="M14 3.5v4h4"/><path d="M9 12h6M9 15.5h6"/>'],
  ['CT', 'draft', '草稿', 'Draft', '表示尚未发布的可编辑内容。', '<path d="M5 4h9l4 4v11.5H5z"/><path d="M14 4v4h4"/><path d="m8.2 16.8.5-2.7 6.1-6.1 1.9 1.9-6.1 6.1z"/>'],
  ['CT', 'revision', '修订', 'Revision', '表示版本更新与修改记录。', '<path d="M4.4 7.3A8 8 0 1 1 4 15"/><path d="M4.4 3.8v3.5h3.5"/><path d="M12 7.5V12l3 1.8"/>'],
  ['CT', 'quote', '引用', 'Quote', '标记引用、结论或摘录。', '<path d="M5 8h5v5H7.5c0 2-1 3.5-3 4.5"/><path d="M14 8h5v5h-2.5c0 2-1 3.5-3 4.5"/>'],
  ['CT', 'export', '导出', 'Export', '将内容导出到外部文件。', '<path d="M5 12.5v7h14v-7"/><path d="M12 4v11"/><path d="m8.5 7.5 3.5-3.5 3.5 3.5"/>'],
  ['CT', 'archive', '归档', 'Archive', '收纳已完成或低频内容。', '<rect x="4" y="6.5" width="16" height="13" rx="2"/><path d="M3 4h18v4H3zM9 12h6"/>'],

  ['EC', 'echo', '回响', 'Echo', '表示内容产生的持续影响。', '<circle cx="8" cy="12" r="1.4"/><path d="M11.2 8.8a4.5 4.5 0 0 1 0 6.4M14.2 5.8a8.8 8.8 0 0 1 0 12.4"/>'],
  ['EC', 'link', '关联', 'Link', '连接两条相关内容。', '<path d="m9.4 14.6 5.2-5.2"/><path d="M7.6 16.4 6 18a3.1 3.1 0 0 1-4.4-4.4l3.2-3.2a3.1 3.1 0 0 1 4.4 0"/><path d="M16.4 7.6 18 6a3.1 3.1 0 1 1 4.4 4.4l-3.2 3.2a3.1 3.1 0 0 1-4.4 0"/>'],
  ['EC', 'branch', '分支', 'Branch', '表示从同一来源派生的路径。', '<circle cx="7" cy="5" r="2"/><circle cx="17" cy="9" r="2"/><circle cx="17" cy="19" r="2"/><path d="M7 7v7a5 5 0 0 0 5 5h3M7 10h5a5 5 0 0 0 5-5v2"/>'],
  ['EC', 'ascend', '进阶', 'Ascend', '表示能力或成果向上演进。', '<path d="M4 18 9 13l3 3 7-8"/><path d="M14 8h5v5"/><path d="M4 21h16"/>'],
  ['EC', 'gratitude', '感谢', 'Gratitude', '表达对作者或帮助的感谢。', '<path d="M12 20s-7-4.3-7-10a3.8 3.8 0 0 1 7-2 3.8 3.8 0 0 1 7 2c0 5.7-7 10-7 10z"/><path d="m12 5 .5-1.8M16 5.7l1.2-1.4M8 5.7 6.8 4.3"/>'],
  ['EC', 'timeline', '轨迹', 'Timeline', '表示事件与版本的时间关系。', '<path d="M7 4v16"/><circle cx="7" cy="7" r="1.7"/><circle cx="7" cy="13" r="1.7"/><circle cx="7" cy="19" r="1.7"/><path d="M10 7h8M10 13h5M10 19h8"/>'],

  ['ST', 'success', '成功', 'Success', '操作或流程已经完成。', '<circle cx="12" cy="12" r="8.5"/><path d="m8.2 12.1 2.5 2.5 5.3-5.3"/>'],
  ['ST', 'warning', '警告', 'Warning', '需要注意但仍可继续。', '<path d="m12 3.8 9 16H3z"/><path d="M12 9v4.5"/><circle cx="12" cy="16.8" r=".8" fill="currentColor" stroke="none"/>'],
  ['ST', 'danger', '危险', 'Danger', '错误、删除或高风险结果。', '<circle cx="12" cy="12" r="8.5"/><path d="m9 9 6 6M15 9l-6 6"/>'],
  ['ST', 'info', '信息', 'Info', '一般提示与解释说明。', '<circle cx="12" cy="12" r="8.5"/><path d="M12 10.8v5.4"/><circle cx="12" cy="7.8" r=".8" fill="currentColor" stroke="none"/>'],
  ['ST', 'pending', '待处理', 'Pending', '流程正在等待或排队。', '<path d="M7 3.5h10M7 20.5h10"/><path d="M8 4c0 4 4 4.6 4 8s-4 4-4 8"/><path d="M16 4c0 4-4 4.6-4 8s4 4 4 8"/><path d="M9.4 16.8h5.2"/>'],
  ['ST', 'disabled', '禁用', 'Disabled', '当前能力不可用。', '<circle cx="12" cy="12" r="8.5"/><path d="m6 6 12 12"/>'],

  ['AC', 'add', '新增', 'Add', '创建新的内容或对象。', '<circle cx="12" cy="12" r="8.5"/><path d="M12 8v8M8 12h8"/>'],
  ['AC', 'edit', '编辑', 'Edit', '修改已有内容。', '<path d="M5 19h4l10-10-4-4L5 15z"/><path d="m13.5 6.5 4 4M5 19h14"/>'],
  ['AC', 'delete', '删除', 'Delete', '移除对象，需要风险确认。', '<path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13"/><path d="M10 11v5M14 11v5"/>'],
  ['AC', 'favorite', '收藏', 'Favorite', '保存内容供后续查看。', '<path d="m12 3.8 2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.7-5 2.7 1-5.6-4.1-4 5.6-.8z"/>'],
  ['AC', 'like', '点赞', 'Like', '表达正向反馈。', '<path d="M12 20s-7-4.3-7-10a3.8 3.8 0 0 1 7-2 3.8 3.8 0 0 1 7 2c0 5.7-7 10-7 10z"/>'],
  ['AC', 'share', '分享', 'Share', '将内容发送到其他位置。', '<circle cx="6" cy="12" r="2.2"/><circle cx="17.5" cy="6" r="2.2"/><circle cx="17.5" cy="18" r="2.2"/><path d="m8 11 7.5-3.9M8 13l7.5 3.9"/>'],

  ['SY', 'settings', '设置', 'Settings', '进入系统与账户配置。', '<circle cx="12" cy="12" r="3"/><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18"/><circle cx="12" cy="12" r="7"/>'],
  ['SY', 'theme', '主题', 'Theme', '切换已注册的视觉主题。', '<circle cx="9" cy="9" r="4"/><path d="M9 2.5v2M9 13.5v2M2.5 9h2M13.5 9h2M4.4 4.4l1.4 1.4M12.2 12.2l1.4 1.4"/><path d="M20 14.7A6.7 6.7 0 0 1 11.3 6 7.2 7.2 0 1 0 20 14.7z"/>'],
  ['SY', 'privacy', '隐私', 'Privacy', '表示隐私规则与数据保护。', '<path d="M12 3.5 19 6v5.2c0 4.3-2.6 7.5-7 9.3-4.4-1.8-7-5-7-9.3V6z"/><path d="M9.5 12v-1a2.5 2.5 0 0 1 5 0v1"/><rect x="8.3" y="12" width="7.4" height="5" rx="1.2"/>'],
  ['SY', 'backup', '备份', 'Backup', '保存当前数据的恢复副本。', '<path d="M7.2 18.5H6a4 4 0 0 1-.4-8A6.5 6.5 0 0 1 18 9a4.8 4.8 0 0 1 .2 9.5H17"/><path d="M12 20V11M8.8 14.2 12 11l3.2 3.2"/>'],
  ['SY', 'local', '本地', 'Local', '表示设备本地存储。', '<rect x="5" y="3.5" width="14" height="17" rx="2.2"/><path d="M9 6.5h6M10 17.5h4"/><circle cx="12" cy="14" r="1.8"/>'],
  ['SY', 'cloud', '云端', 'Cloud', '表示云端数据与服务。', '<path d="M7 18.5H6a4 4 0 0 1-.5-8A6.7 6.7 0 0 1 18.2 9a4.8 4.8 0 0 1 .3 9.5z"/>'],

  ['DT', 'image', '图片', 'Image', '表示媒体图片内容。', '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="9" r="1.5"/><path d="m5.5 17 4.5-4.5 3 3 2-2 3.5 3.5"/>'],
  ['DT', 'document', '文档', 'Document', '表示可阅读或导出的文档。', '<path d="M6 3.5h8l4 4v13H6z"/><path d="M14 3.5v4h4M9 12h6M9 15h6M9 18h4"/>'],
  ['DT', 'code', '代码', 'Code', '表示代码片段与技术内容。', '<path d="m9 7-5 5 5 5M15 7l5 5-5 5M13.5 5l-3 14"/>'],
  ['DT', 'database', '数据集', 'Database', '表示结构化数据与数据库。', '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>'],
  ['DT', 'chart', '统计', 'Chart', '表示趋势、指标与分析结果。', '<path d="M4 20V4M4 20h16"/><path d="M7 16v-4h3v4M12 16V8h3v8M17 16V5h3v11"/>'],
  ['DT', 'filter', '筛选', 'Filter', '缩小列表或数据范围。', '<path d="M4 5h16l-6.5 7v5.5l-3 1.5v-7z"/>'],

  ['TM', 'clock', '时间', 'Clock', '表示具体时间与时长。', '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>'],
  ['TM', 'calendar', '日历', 'Calendar', '表示日期与计划安排。', '<rect x="3.5" y="5.5" width="17" height="15" rx="2"/><path d="M7.5 3.5v4M16.5 3.5v4M3.5 9.5h17"/><path d="M8 13h2M14 13h2M8 17h2M14 17h2"/>'],
  ['TM', 'reminder', '提醒', 'Reminder', '标记需要在之后处理的事项。', '<path d="M6 21V4"/><path d="M6 5h11l-2 3 2 3H6"/><circle cx="6" cy="21" r="1" fill="currentColor" stroke="none"/>'],
  ['TM', 'notification', '通知', 'Notification', '表示消息与系统通知。', '<path d="M6 16.5h12l-1.5-2V10a4.5 4.5 0 0 0-9 0v4.5z"/><path d="M10 19a2.3 2.3 0 0 0 4 0M12 4V2.8"/>'],
  ['TM', 'sync', '同步', 'Sync', '表示本地与云端状态同步。', '<path d="M19 7V3.5l-2.3 2.3A7.8 7.8 0 0 0 4.5 9"/><path d="M5 17v3.5l2.3-2.3A7.8 7.8 0 0 0 19.5 15"/>'],
  ['TM', 'checklist', '清单', 'Checklist', '表示可逐项完成的任务列表。', '<rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="m7.5 8 1.2 1.2L11 7M13 8h4M7.5 13l1.2 1.2L11 12M13 13h4M7.5 18l1.2 1.2L11 17M13 18h4"/>'],

  ['AC', 'close', '关闭', 'Close', '关闭当前弹窗或临时覆盖层，不承担返回层级语义。', '<path d="m6.5 6.5 11 11M17.5 6.5l-11 11"/>'],
  ['AC', 'copy', '复制', 'Copy', '将源码、文本或值复制到剪贴板。', '<rect x="8" y="7" width="11" height="13" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2"/>'],
  ['AC', 'save', '保存', 'Save', '保存当前草稿或本地事务状态，不等同于收藏或备份。', '<path d="M5 3.5h11l3 3v14H5z"/><path d="M8 3.5v6h8v-6M8.5 20.5v-6h7v6"/>'],
  ['AC', 'download', '下载', 'Download', '把已生成的资产或文档下载到当前设备。', '<path d="M12 3.5v11"/><path d="m8.5 11 3.5 3.5 3.5-3.5"/><path d="M5 15.5v5h14v-5"/>'],
  ['CT', 'publish', '发布', 'Publish', '把已通过流程的日志内容公开发布。', '<path d="M4 10h3l9-4v12l-9-4H4z"/><path d="M7 14v4a2 2 0 0 0 2 2h1"/><path d="m19 8 2-1.5M19 12h2.5M19 16l2 1.5"/>'],
  ['CT', 'submit-review', '提交审核', 'Submit Review', '把草稿或内容修订送入审核队列。', '<path d="M4.5 3.5h8l3 3v7h-11z"/><path d="M12.5 3.5v3h3M7.5 9h5"/><path d="M10 17h9M16 14l3 3-3 3"/>'],
  ['AC', 'moderation-review', '管理审核', 'Moderation Review', '表示管理员查看并裁决日志、修订、昵称或举报。', '<path d="M8 4h8l1 2h2v14H5V6h2z"/><path d="M8 4v3h8V4"/><path d="M8 13s1.5-2.5 4-2.5 4 2.5 4 2.5-1.5 2.5-4 2.5S8 13 8 13z"/><circle cx="12" cy="13" r="1.2"/>'],
  ['AC', 'report', '举报', 'Report', '提交需要管理员处理的内容举报。', '<path d="M5.5 3.5h8l4 4v13h-12z"/><path d="M13.5 3.5v4h4"/><path d="M11.5 10v4.5"/><circle cx="11.5" cy="17.5" r=".8" fill="currentColor" stroke="none"/>'],
  ['EC', 'echo-pause', '暂停回响', 'Pause Echo', '暂停日志的公开回响线程，同时保留既有历史。', '<circle cx="5.5" cy="12" r="1.3"/><path d="M8.6 8.8a4.5 4.5 0 0 1 0 6.4"/><path d="M15.5 8v8M19.5 8v8"/>'],
  ['EC', 'echo-resume', '恢复回响', 'Resume Echo', '恢复已暂停的回响线程，并按当前修订状态继续。', '<circle cx="5.5" cy="12" r="1.3"/><path d="M8.6 8.8a4.5 4.5 0 0 1 0 6.4"/><path d="M17.5 7.2a5.5 5.5 0 1 1-4.5 9.8"/><path d="M17.5 4.5v2.7h-2.7"/>']
];

export const iconCatalog = Object.freeze(definitions.map((definition, index) => {
  const category = iconCategories.find((item) => item.id === definition[0]);
  return Object.freeze({
    index: index + 1,
    id: 'PSM-IC-' + String(index + 1).padStart(3, '0'),
    category: category.id,
    categoryName: category.name,
    categoryEnglish: category.english,
    accent: category.accent,
    slug: definition[1],
    name: definition[2],
    english: definition[3],
    description: definition[4],
    body: definition[5],
    viewBox: '0 0 24 24',
    grid: 24,
    strokeWidth: 1.7,
    sizes: [24, 32, 64],
    path: 'icons/generated/PSM-IC-' + String(index + 1).padStart(3, '0') + '.svg'
  });
}));

export function getIcon(id) {
  return iconCatalog.find((icon) => icon.id === id || icon.slug === id);
}

function svgAttributes(icon, context) {
  const common = 'viewBox="' + icon.viewBox + '" fill="none" stroke="currentColor" stroke-width="' + icon.strokeWidth + '" stroke-linecap="round" stroke-linejoin="round"';
  if (context === 'file') {
    return 'xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#1E293B" role="img" aria-label="' + icon.id + ' ' + icon.english + '" ' + common;
  }
  return 'class="psm-icon-svg" aria-hidden="true" focusable="false" ' + common;
}

export function getIconSvg(id, context = 'file') {
  const icon = getIcon(id);
  if (!icon) throw new Error('Unknown PSM icon: ' + id);
  return '<svg ' + svgAttributes(icon, context) + '>' + icon.body + '</svg>';
}

export function getIconSymbol(icon) {
  return '<symbol id="psm-icon-' + icon.slug + '" viewBox="' + icon.viewBox + '" fill="none" stroke="currentColor" stroke-width="' + icon.strokeWidth + '" stroke-linecap="round" stroke-linejoin="round">' + icon.body + '</symbol>';
}

export function getIconSprite() {
  return '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none">' + iconCatalog.map(getIconSymbol).join('') + '</svg>';
}

export function getIconCss() {
  return [
    ':root {',
    '  --psm-icon-size: 24px;',
    '  --psm-icon-stroke: currentColor;',
    '}',
    '',
    '.psm-icon {',
    '  display: inline-flex;',
    '  width: var(--psm-icon-size);',
    '  height: var(--psm-icon-size);',
    '  align-items: center;',
    '  justify-content: center;',
    '  color: var(--psm-icon-stroke);',
    '}',
    '',
    '.psm-icon > svg {',
    '  display: block;',
    '  width: 100%;',
    '  height: 100%;',
    '}',
    '',
    '.psm-icon--sm { --psm-icon-size: 16px; }',
    '.psm-icon--md { --psm-icon-size: 24px; }',
    '.psm-icon--lg { --psm-icon-size: 32px; }',
    '.psm-icon--xl { --psm-icon-size: 64px; }'
  ].join('\n');
}

export function getIconManifest() {
  return {
    schema_version: 1,
    name: 'PSM Code-Native Icon Library',
    version: '1.1.0',
    source_of_truth: 'icons/catalog.mjs',
    strategy: 'hand-authored-svg-geometry',
    coverage: {
      categories: iconCategories.length,
      icons: iconCatalog.length,
      base_grid: 24,
      acceptance_sizes: [24, 32, 64]
    },
    constraints: {
      generated_images: false,
      traced_reference_images: false,
      raster_dependencies: false,
      external_resources: false,
      semantic_recognition_first: true,
      production_ui_auto_adoption: false
    },
    categories: iconCategories.map((category) => ({
      ...category,
      count: iconCatalog.filter((icon) => icon.category === category.id).length
    })),
    icons: iconCatalog.map(({ body, accent, ...icon }) => icon),
    deliverables: [
      'icons/generated/*.svg',
      'icons/psm-icons.svg',
      'icons/manifest.json',
      'icons/psm-icons.css'
    ]
  };
}
