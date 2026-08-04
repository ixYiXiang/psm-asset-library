# PSM WXSS Deliverables

- `psm-tokens.wxss`：颜色、边缘、圆角、阴影与层级变量。
- `psm-components.wxss`：白瓷表面、按钮、输入与公共弹窗基础类。

两份文件由根目录 `system.mjs` 生成。调整规范数据后运行 `npm run export`，不要手工维护两份相互冲突的值。

这些代码是设计系统交付物；SVG 资产仍只用于适合几何表达的场景，真实小程序界面不应为了装饰强制依赖 SVG。
