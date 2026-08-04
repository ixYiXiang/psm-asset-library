# PSM Component State Matrix

W03 publishes eight real component groups with five static states each. The state system is a reviewable design asset layer; it does not modify the production mini-program or replace WeUI icons.

## Coverage

- 8 component groups
- 5 state types per group: Default / Focus / Pressed / Disabled / Semantic
- 40 state variants
- Acceptance viewports: 360px / 768px / 1280px

## Groups and real containers

| Work item | Group | Real containers | Semantic example |
|---|---|---|---|
| W03-CS-001 | Button / 按钮 | 文档导出主按钮<br>日志发布与提交审核<br>隐私提示双按钮 | 删除日志 |
| W03-CS-002 | Card / 卡片 | 日志列表卡片<br>本地事务三项预览<br>管理员审核列表 | 逾期事务 |
| W03-CS-003 | Tag / Badge / 标签与徽标 | 日志类型标签<br>审核状态标签<br>事务时间状态 | 已通过 |
| W03-CS-004 | Input / 输入 | 综合搜索框<br>事务名称输入<br>日志标题与正文编辑 | 必填项缺失 |
| W03-CS-005 | Navigation / 导航 | 五项常驻底部导航<br>效率 / 踩坑分段控件<br>Radio 时间选择芯片 | 回响模式 |
| W03-CS-006 | Modal / Dialog / 弹窗与面板 | 隐私提示<br>本地事务管理面板<br>删除与注销确认 | 危险确认 |
| W03-CS-007 | Feedback / 反馈 | 搜索完成状态条<br>本地保存结果<br>加载失败与空状态 | 保存成功 |
| W03-CS-008 | Fixed / Floating Action / 固定 / 浮动高优先级操作 | “我的”页固定发布操作栏<br>本地事务管理标题栏新增<br>Code Lab 源码复制与下载 | 新增事务 |

## Generated deliverables

- `components/manifest.json` — machine-readable groups, states, containers and work items
- `tokens/psm-components.wxss` — PSM component and state helpers
- `qa/w03-component-matrix.svg` — static visual QA matrix
- GitHub Pages `#system` → Components — responsive live preview

## Boundaries

- No PNG, JPEG, WebP, GIF, Data URL, SVG image element or external raster dependency.
- No animation or transition is required to communicate state.
- No production mini-program file or WeUI function icon is changed.
- W03 IDs are wave work-item IDs, not stable asset IDs.
