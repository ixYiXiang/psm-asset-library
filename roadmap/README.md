# PSM Continuous Expansion Roadmap

This queue keeps the code-native PSM asset system reproducible. It does not authorize image generation, tracing, raster embedding, or automatic replacement of production WeUI icons.

## Waves

### W01 · 核心图标 / Icon Core

- Status: complete
- Target: 8 类 × 6 枚，共 48 枚
- Deliverables: 单文件 SVG / SVG Sprite / Manifest / CSS 尺寸助手
- Gate: 48 个稳定编号；24、32、64px 可辨识；零栅格依赖。

### W02 · 语义补全 / Semantic Extension

- Status: in_progress
- Target: 已补充 10 枚，当前 58 枚；剩余 2 个编号等待真实语义
- Deliverables: PSM-IC-049 关闭 / PSM-IC-050 复制 / PSM-IC-051 保存 / PSM-IC-052 下载 / PSM-IC-053 发布 / PSM-IC-054 提交审核 / PSM-IC-055 管理审核 / PSM-IC-056 举报 / PSM-IC-057 暂停回响 / PSM-IC-058 恢复回响 / W02-AD-001 动态覆盖数适配器 / W02-QA-001 语义与尺寸验收矩阵
- Gate: 只登记正式基线或真实仓库操作支持的语义；未满足依据的两个稳定编号保持未分配。

### W03 · 组件状态矩阵 / Component State Matrix

- Status: planned
- Target: 8 个组件组 × 默认、关注、按下、禁用与语义状态
- Deliverables: 按钮状态 / 卡片状态 / 标签状态 / 输入状态 / 导航状态 / 弹窗状态 / 反馈状态 / 浮动操作状态
- Gate: 状态由边缘、颜色和层级表达，不依赖动画或装饰图。

### W04 · 主题令牌包 / Theme Token Packs

- Status: planned
- Target: 默认、白昼与夜幕探索三组令牌
- Deliverables: Default tokens / Daylight tokens / Night exploration tokens / 对比度报告
- Gate: 夜幕只登记为探索，不在通过页面级验收前标记可用。

### W05 · 工程适配器 / Developer Adapters

- Status: planned
- Target: 让同一数据源服务网页、CSS 与小程序评审流程
- Deliverables: Sprite 使用示例 / 静态 HTML 示例 / WXSS 评审映射 / 版本迁移清单
- Gate: 资产库与业务代码保持解耦；不得自动替换现有 WeUI 图标。

### W∞ · 持续质量循环 / Continuous Quality Loop

- Status: recurring
- Target: 每一波发布后重新发现语义缺口并进入下一波
- Deliverables: 唯一性检查 / 小尺寸检查 / 可访问性检查 / 零图片检查 / 页面回归 / 发布记录
- Gate: 只有真实语义缺口进入队列；不以数量替代质量。

## Continuous loop

01. 发现 — 从真实页面、Notion 基线和使用反馈收集缺口。
02. 定义 — 分配稳定编号、语义、容器与验收尺寸。
03. 绘制 — 只使用可审查的 SVG、CSS、WXSS 与几何代码。
04. 导出 — 从同一数据源生成单文件、Sprite、清单与辅助样式。
05. 验证 — 运行唯一性、依赖、尺寸、页面与交互回归。
06. 发布 — 经受控 PR 合并 GitHub main，检查 Pages，再回到发现阶段。
