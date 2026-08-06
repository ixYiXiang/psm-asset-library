# PSM Code Lab

PSM Code Lab 是「AI 编程日志」项目的完整程序化视觉规范与资产实验库。PSM 全称 **Prestige Soft Material**。

本版从零重建原 GitHub Pages：不调用图像生成，不把参考图切片、描摹或作为网页背景，也不使用旧 PNG 参与页面渲染。环境、光影、材质、模块插图、空状态和徽章全部由 SVG、CSS、渐变、滤镜与几何图形构成。

当前交付包含 10 个系统章节、17 项程序化资产、58 枚代码原生图标、48 个独立动效实验、36+ 个 WXSS 核心令牌，以及一条可重复执行的持续扩展队列。

## Motion Lab 动效实验库

[motion/](motion/) 是与主站静态规范隔离的独立动效实验页。当前包含：

- 48 个动效样本，使用稳定编号 `PSM-MO-001` 至 `PSM-MO-048`
- 7 个语义分类：载入、按钮、卡片、反馈、导航、表单与环境
- 40 个 PSM 原创实现；W03-B 新增 12 种非重复运动机制
- 8 个基于 Uiverse 公开作品改造的样本，逐项保留作者、原链接、MIT 许可和改造说明
- 页面级暂停、系统 `prefers-reduced-motion` 支持、搜索、分类筛选、预览密度和源码示例
- 零第三方运行依赖，不加载远程脚本、样式、字体或图片

第三方来源与许可见 [motion/ATTRIBUTION.md](motion/ATTRIBUTION.md) 和 [motion/THIRD_PARTY_NOTICES.md](motion/THIRD_PARTY_NOTICES.md)。Motion Lab 只承担实验、筛选与复用验证，不自动进入生产小程序。

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

## 持续扩展队列

[roadmap.mjs](roadmap.mjs) 是扩展计划的单一数据源，并生成 [roadmap/expansion-plan.json](roadmap/expansion-plan.json) 与 [roadmap/README.md](roadmap/README.md)。

- W01 核心图标：48 枚，已完成
- W02 语义补全：已接受 PSM-IC-049 至 PSM-IC-058，共 10 枚；剩余 2 个编号等待真实语义，不提前占用
- W03 组件状态矩阵；Motion Lab W03-A 建立基线，W03-B 扩展至 48 项
- W04 主题令牌包
- W05 工程适配器
- W∞ 持续质量循环

每一波都重复执行：发现 → 定义 → 绘制 → 导出 → 验证 → 发布。只有真实语义缺口进入队列，不用数量替代质量。

W02-A 的 12 个发布工作项（10 枚图标、动态计数适配器与 QA 矩阵）记录在 [qa/w02-semantic-matrix.mjs](qa/w02-semantic-matrix.mjs)，并导出可直接检查的 [qa/w02-icon-matrix.svg](qa/w02-icon-matrix.svg)。其中 `W02-AD-001` 与 `W02-QA-001` 是波次工作项编号，不冒充稳定资产编号。

## PSM 约束

- 左上至右下的统一光源方向。
- 白瓷、轻磨砂、浅冷蓝空气感和克制蓝金。
- 纹理保持低密度、低对比、低存在感。
- 真实界面、排版和交互不做成不可交互的大图。
- 不嵌入 image 元素、Data URL 或外部图片资源。
- 主站静态规范页的视觉品质不依赖动画、过渡或高饱和霓虹效果。
- 动效实验必须隔离在 Motion Lab，并支持暂停与减少动态效果。

## 本地验证

    npm run export
    npm test
    npm run test:motion
    npm run test:motion:w03b

主站验证内容包括：10 个系统章节、17 项资产、58 枚图标、12 个 W02-A 工作项、6 个扩展波次、WXSS 导出一致性、编号唯一性、语义近邻冲突、24/32/64px 验收声明、SVG / Sprite / Manifest 与源定义一致、无图片嵌入、无外部资源、无动画依赖，以及最小显式字号不低于 12px。

Motion Lab 验证内容包括：48 个连续稳定编号、7 个语义分类、40 个原创项、8 个 MIT 署名改造项、12 个 W03-B 去重工作项、逐项来源文档、暂停与低动态模式、无外部运行依赖，以及最小显式字号不低于 12px。

GitHub Pages：<https://ixyixiang.github.io/psm-asset-library/>  
Motion Lab：<https://ixyixiang.github.io/psm-asset-library/motion/>
