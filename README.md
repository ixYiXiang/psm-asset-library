# PSM Code Lab

PSM Code Lab 是「AI 编程日志」项目的完整程序化视觉规范与资产实验库。PSM 全称 **Prestige Soft Material**。

本版从零重建原 GitHub Pages：不调用图像生成，不把参考图切片、描摹或作为网页背景，也不使用旧 PNG 参与页面渲染。环境、光影、材质、模块插图、空状态和徽章全部由 SVG、CSS、渐变、滤镜与几何图形构成。

当前交付包含 10 个系统章节、17 项程序化资产、58 枚代码原生图标、40 项组件状态、36+ 个 WXSS 核心令牌，以及一条可重复执行的持续扩展队列。

## 完整系统覆盖

网页现在覆盖 10 个可核查章节：

1. 世界 World
2. 材质 Material
3. 光影与阴影 Lighting & Shadow
4. 纹理 Texture
5. 色彩 Color
6. 字体与层级 Type & Hierarchy
7. 组件 Components
8. SVG 语汇 SVG Language
9. WXSS 令牌 WXSS Tokens
10. 渲染规范 Rendering Guide

系统单一数据源是 [system.mjs](system.mjs)，并生成：

- [tokens/psm-tokens.wxss](tokens/psm-tokens.wxss)
- [tokens/psm-components.wxss](tokens/psm-components.wxss)
- [assets/system-manifest.json](assets/system-manifest.json)

## 资产清单覆盖

Notion 资产清单中的 17 项已全部生成代码候选：

- BG 背景：3 项
- FX 光影：2 项
- MT 材质：3 项
- IL 模块插图：4 项
- ES 空状态：3 项
- BD 徽章：2 项

资产的单一数据源是 [assets/catalog.mjs](assets/catalog.mjs)。网页实时预览、复制源码、浏览器下载、仓库中的独立 SVG 和 assets/manifest.json 都由这份定义产生。

## 代码原生图标库

W01 建立了 8 类、48 枚稳定编号；W02-A 又补充 10 枚有正式语义依据的图标。当前覆盖为：

- NV 导航 Navigation：6 枚
- CT 内容 Content：8 枚
- EC 回响 Echo：8 枚
- ST 状态 Status：6 枚
- AC 操作 Action：12 枚
- SY 系统 System：6 枚
- DT 数据 Data：6 枚
- TM 时间 Time：6 枚

图标的单一数据源是 [icons/catalog.mjs](icons/catalog.mjs)，可导出：

- 58 个独立 SVG：icons/generated/PSM-IC-001.svg 至 PSM-IC-058.svg
- [icons/psm-icons.svg](icons/psm-icons.svg) SVG Sprite
- [icons/manifest.json](icons/manifest.json) 机器可读清单
- [icons/psm-icons.css](icons/psm-icons.css) 尺寸与颜色助手

图标统一使用 24 × 24 网格、1.7 线宽、圆角线端和 currentColor，并在 24、32、64px 验收；16px 只作为压力测试。图标库是独立设计资产层，不会自动替换真实小程序中的 WeUI 功能图标。

## 组件状态矩阵

W03 将当前程序与仓库中已有真实容器整理为 8 个组件组，每组固定覆盖 Default、Focus、Pressed、Disabled 与 Semantic 五态，共 40 项状态变体：

- Button：文档导出、日志发布 / 提交审核、隐私提示双按钮
- Card：日志列表、本地事务三项预览、管理员审核列表
- Tag / Badge：日志类型、审核状态、事务时间状态
- Input：综合搜索、事务名称、日志标题与正文
- Navigation：五项常驻导航、分段控件、Radio 时间选择
- Modal / Dialog：隐私提示、本地事务管理、删除与注销确认
- Feedback：搜索完成、本地保存、加载失败与空状态
- Fixed / Floating Action：“我的”页固定发布、本地事务新增、Code Lab 源码操作

单一数据源继续是 [system.mjs](system.mjs)，并派生 [components/manifest.json](components/manifest.json)、[components/README.md](components/README.md)、[tokens/psm-components.wxss](tokens/psm-components.wxss) 与 [qa/w03-component-matrix.svg](qa/w03-component-matrix.svg)。W03 使用波次工作项编号 `W03-CS-001` 至 `W03-CS-008`、`W03-AD-001` 与 `W03-QA-001`，不冒充稳定资产编号。

## 持续扩展队列

[roadmap.mjs](roadmap.mjs) 是扩展计划的单一数据源，并生成 [roadmap/expansion-plan.json](roadmap/expansion-plan.json) 与 [roadmap/README.md](roadmap/README.md)。

- W01 核心图标：48 枚，已完成
- W02 语义补全：已接受 PSM-IC-049 至 PSM-IC-058，共 10 枚；无真实语义依据的 2 个编号保持未分配，波次已完成
- W03 组件状态矩阵：8 组 × 5 状态，共 40 项状态变体，已完成
- W04 主题令牌包：下一波
- W05 工程适配器
- W∞ 持续质量循环

每一波都重复执行：发现 → 定义 → 绘制 → 导出 → 验证 → 发布。只有真实语义缺口进入队列，不用数量替代质量。

W02-A 的 12 个发布工作项（10 枚图标、动态计数适配器与 QA 矩阵）记录在 [qa/w02-semantic-matrix.mjs](qa/w02-semantic-matrix.mjs)，并导出可直接检查的 [qa/w02-icon-matrix.svg](qa/w02-icon-matrix.svg)。其中 `W02-AD-001` 与 `W02-QA-001` 是波次工作项编号，不冒充稳定资产编号。

W03 的 10 个发布工作项（8 个组件组、导出适配器与 QA 矩阵）记录在 [components/catalog.mjs](components/catalog.mjs)，并从 `system.mjs` 生成全部派生产物。状态只用边缘、颜色、层级与文案表达，不依赖动画、位移或装饰图片。

## PSM 约束

- 左上至右下的统一光源方向。
- 白瓷、轻磨砂、浅冷蓝空气感和克制蓝金。
- 纹理保持低密度、低对比、低存在感。
- 真实界面、排版和交互不做成不可交互的大图。
- 不嵌入 image 元素、Data URL 或外部图片资源。
- 视觉品质不依赖动画、过渡或高饱和霓虹效果。

## 本地验证

    npm run export
    npm test

验证内容包括：10 个系统章节、17 项资产、58 枚图标、40 项组件状态、10 个 W03 工作项、6 个扩展波次、WXSS 导出一致性、编号唯一性、真实容器与五态覆盖、360/768/1280px 响应式验收、SVG / Sprite / Manifest 与源定义一致、无图片嵌入、无外部资源、无动画依赖，以及最小显式字号不低于 12px。

GitHub Pages：<https://ixyixiang.github.io/psm-asset-library/>
