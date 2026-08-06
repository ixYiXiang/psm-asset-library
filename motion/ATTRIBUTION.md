# PSM Motion Lab｜来源与改造说明

PSM Motion Lab 共收录 36 个代码动效，其中 28 个为 PSM Code Lab 原创实现，8 个基于 Uiverse 公开作品的交互构思进行改造。

所有改造项均重新编写 HTML、CSS 或 JavaScript，并按 PSM 的矿物灰、低亮白瓷、克制蓝金、固定容器和可访问性约束重新设计。页面运行不依赖 Uiverse CDN、第三方脚本、远程样式或图片。

Uiverse 作品页声明相关 UI 元素采用 MIT License。完整许可文本与版权持有人列表见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 改造项清单

| 编号 | PSM 动效 | 原作者 | 原作品 | 改造范围 |
|---|---|---|---|---|
| PSM-MO-001 | 轨道点阵 / Orbital Dots | mrhyddenn | [new-walrus-45](https://uiverse.io/mrhyddenn/new-walrus-45) | 保留多环旋转载入器的概念，重绘为三层 PSM 轨道、陶瓷核心和差异化节奏。 |
| PSM-MO-003 | 液态光环 / Liquid Halo | Valeron-T；原构思版权同时标注 mrhyddenn | [happy-wolverine-36](https://uiverse.io/Valeron-T/happy-wolverine-36) | 借鉴双层旋转构成，改写为不规则液态边缘，移除深色霓虹和高饱和效果。 |
| PSM-MO-005 | 行进方块 / Marching Cubes | vinodjangid07 | [popular-owl-27](https://uiverse.io/vinodjangid07/popular-owl-27) | 保留多单元顺序运动思路，改写为四枚陶瓷方块的透视翻面和批处理语义。 |
| PSM-MO-009 | 釉面扫光 / Glaze Sweep | Praashoo7（Prashant） | [quick-fish-43](https://uiverse.io/Praashoo7/quick-fish-43) | 借鉴悬停扫光反馈，重绘为低亮釉面、固定按钮尺寸和克制高光位移。 |
| PSM-MO-012 | 双层揭示 / Split Reveal | adamgiebl（Adam Giebl） | [big-ape-36](https://uiverse.io/adamgiebl/big-ape-36) | 保留双层文字揭示思路，改写为上下裁切、蓝金语义层和无布局位移实现。 |
| PSM-MO-015 | 基座抬升卡 / Plinth Lift | uiverse-astronaut（Astronaut） | [serious-badger-44](https://uiverse.io/uiverse-astronaut/serious-badger-44) | 借鉴实体基座卡片的深度反馈，重构为白瓷表面、深色基座和按压回落状态。 |
| PSM-MO-027 | 胶囊滑块 / Pill Slider | adamgiebl（Adam Giebl）；原构思版权同时标注 njesenberger（Nicolas Jesenberger） | [unlucky-dingo-92](https://uiverse.io/adamgiebl/unlucky-dingo-92) | 借鉴滑动选择器构成，改写为三段时间筛选、共享滑块和明确激活态。 |
| PSM-MO-029 | 浮动标签输入 / Floating Label | Praashoo7（Prashant） | [tame-sloth-39](https://uiverse.io/Praashoo7/tame-sloth-39) | 借鉴浮动标签交互，补充语义标签、焦点环、稳定输入边界和 PSM 表面。 |

## 原创实现范围

以下编号为 PSM Code Lab 原创实现：

- PSM-MO-002、004、006–008
- PSM-MO-010–011、013–014
- PSM-MO-016–026、028
- PSM-MO-030–036

原创实现不表示相关交互范式从未在其他产品中出现，而是表示本仓库未直接基于某一特定第三方作品改写代码或视觉结构。

## 使用边界

- 本页是独立实验室，不代表所有动效均已批准进入「AI 编程日志」小程序。
- 生产使用前仍需验证真实状态、性能、触控热区、键盘操作、不同设备、安全区及 `prefers-reduced-motion`。
- 转载或继续改造第三方来源项时，应保留本文件和 `THIRD_PARTY_NOTICES.md` 中的许可与署名。
