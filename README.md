# chrome-extensions html2md

## 如何安装

### 从 Chrome 商店安装

插件地址: https://chrome.google.com/webstore/detail/html2md/nhphileonjdmmeijobgabiajckecckjj

### 从源码安装

#### 下载源码并编译
+ clone: 
```bash
git clone https://github.com/powerfulyang/html2md.git
```
+ install dependencies: 如果没有安装 pnpm, 请先安装 [pnpm](https://pnpm.io/installation)
```bash
pnpm install
```
+ build: 
```bash
pnpm run build
```

#### 安装插件

+ 打开 Chrome 的扩展程序页面: `chrome://extensions/`
+ 点击 `开发者模式`/`Developer mode` 按钮
+ 点击 `加载已解压的扩展程序`/`Load unpacked` 按钮
+ 选择 `html2md/dist` 目录
+ 安装成功

## 如何使用

+ 打开任意网页
+ 选中你想要转换的内容
+ 使用快捷键 `Ctrl+Alt` 或者 `Command+Option` 转换选中的内容

Using shortcut `Ctrl+Alt` or `Command+Option` to convert selected html to markdown.
