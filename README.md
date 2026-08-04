# PSM Code Lab

PSM Code Lab 是「AI 编程日志」项目的完整程序化视觉规范与资产实验库。PSM 全称 **Prestige Soft Material**。

本版从零重建原 GitHub Pages：不调用图像生成，不把参考图切片、描摹或作为网页背景，也不使用旧 PNG 参与页面渲染。环境、光影、材质、模块插图、空状态和徽章全部由 SVG、CSS、渐变、滤镜与几何图形构成。

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

验证内容包括：10 个系统章节、17 项资产清单、WXSS 导出一致性、编号唯一性、SVG 与源定义一致、manifest 同步、无图片嵌入、无外部资源、无动画依赖，以及最小显式字号不低于 12px。

GitHub Pages：<https://ixyixiang.github.io/psm-asset-library/>
