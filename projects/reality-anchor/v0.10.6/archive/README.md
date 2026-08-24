# Reality Anchor v0.10.6 源码恢复说明

本目录保存 v0.10.6 当前可重建源码的 Base64 分片，共 11 段：

`source-v0.10.6.tar.xz.b64.part01` ～ `part11`

## Windows PowerShell

```powershell
Get-Content source-v0.10.6.tar.xz.b64.part* -Raw | Set-Content source-v0.10.6.b64 -NoNewline
certutil -decode source-v0.10.6.b64 source-v0.10.6.tar.xz
```

随后用 7-Zip 解压 `source-v0.10.6.tar.xz`。

## macOS / Linux

```bash
cat source-v0.10.6.tar.xz.b64.part* | base64 -d > source-v0.10.6.tar.xz
tar -xJf source-v0.10.6.tar.xz
```

## 校验

恢复后的 `source-v0.10.6.tar.xz`：

`SHA256 63529def421ed847dd3d8cdda2a11b0765db31c6ec5b38c4e18f62c4ca5a9b6e`

源码包包含当前可重建所需内容：基线 HTML、cards.js、engine.js、bot.js、ui.js、build_v0.10.6.py。
