<p align="center">
 <img alt="logo" src="https://assets-1256020106.file.myqcloud.com/zebra-swiper/v3/logo.png" width="230">
</p>

<h1 align="center">ZebraSwiper</h1>

<p align="center">基于uniapp，兼容多端的高性能轮播组件库，支持多种复杂的 3D 轮播效果。</p>

<p align="center">
 🔥 <a href="https://swiper.zebraui.com/">文档网站</a>
 &nbsp;
 &nbsp;
 🚀 <a href="https://zebraui.com/" target="_blank">zebraUI组件库</a>
</p>

## 介绍

[zebra-swiper](https://swiper.zebraui.com/) 是一款兼容多端的高性能轮播组件库，支持多种复杂的 `3D` 轮播效果。它不仅具备丰富的内置功能，还为开发者提供了极大的灵活性，以适应复杂场景的需求。

## 特性

- 🧩 **多端兼容**：全面支持小程序、H5 和 App 平台，实现跨平台一致性。
- 🧩 **TypeScript支持**：提供完整的`TypeScript`支持。
- 🎨 **创意自定义**：通过 `creative` 特性，开发者可以定制具有独特表现力的轮播效果。
- ⚡ **流畅性能**：即使在数据量巨大的情况下，利用`virtual`特性依然能够实现丝滑的滚动体验。
- 🔧 **扩展性强**：通过监听特定事件，可以轻松集成和扩展自定义插件模块。
- 🏗️ **模块化设计**：功能独立分离，按需加载，确保最小化代码体积。

## 安装

**详细安装方法，可参考[文档](https://swiper.zebraui.com/guide/quickstart.html)**

### npm 方式

```bash
# npm
npm i @zebra-ui/swiper

# pnpm
pnpm add @zebra-ui/swiper
```

`easycom`方式引入：

```js
// pages.json

{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^z-(.*)": "@zebra-ui/swiper/components/z-$1/z-$1.vue"
    }
  },
 "pages": [...],
 "globalStyle": {...}
}
```

## 通过 uni_modules 安装

[zebra-swiper](https://ext.dcloud.net.cn/plugin?id=7273)已经在uniapp的[插件市场](https://ext.dcloud.net.cn/plugin?id=7273)发布。

如果使用的`IDE`为`HbuilderX`，则可以通过uniapp的[插件市场](https://ext.dcloud.net.cn/plugin?id=7273)进行项目导入。

`uniapp`提供了`uni_modules`自动引入，使用此方法不需要再单独对组件进行引入。

### 详细安装及使用方法，可参考[文档](https://swiper.zebraui.com/guide/quickstart.html)

## 文档网站

访问以下链接以获取完整的组件库文档和使用指南：

- [📘 zebra-swiper 官方文档](https://swiper.zebraui.com/)
- [📘 zebra-swiper GitHub Pages](https://github.swiper.zebraui.com/)（备用地址）

## 示例项目

以下是 `zebra-swiper` 官方提供的一些示例项目，开发者可以根据需求快速上手：

- [📂 normal](https://github.com/zebra-ui/zebra-swiper/tree/master/example/normal)：使用 `HbuilderX` 创建的示例项目，通过 `uni_modules` 引入 `zebra-ui`。
- [📂 cli](https://github.com/zebra-ui/zebra-swiper/tree/master/example/cli)：基于 `VSCode` 创建，通过 `pnpm` 引入 `zebra-ui` 的示例项目。

## Zebra 生态

Zebra 官方还维护了多个相关项目，为开发者提供了多样化的工具：

- [🛠️ zebra-ui](https://zebraui.com/)：基于 UniApp 的多端兼容组件库，采用 Vue 3 + TypeScript + Script Setup 构建。
- [🎨 zebra-color](https://color.zebraui.com/)：轻量级、全平台兼容的颜色选择器。
- [🌐 zebra-axios](https://axios.zebraui.com/)：专为 UniApp 设计的 Axios 适配器，兼容小程序、H5 和 App。

## 贡献指南

`zebra-swiper` 目前仍处于初期开发阶段，我们非常欢迎开发者参与项目的完善和优化。您可以通过以下方式为社区做出贡献：

- 🔄 提交 [PR](https://github.com/zebra-ui/zebra-swiper/pulls)：修复问题或添加新功能。
- 🐛 提交 [Issues](https://github.com/zebra-ui/zebra-swiper/issues)：报告使用中的问题或提出改进建议。
- 🤝 加入 Zebra 团队：与我们一同探索和推进开源项目的发展。

## 手机预览

<div>
 <img alt="wx" src="https://assets-1256020106.file.myqcloud.com/zebra-swiper/v3/preview-wx.jpg" width="200" />
 <img alt="ali" src="https://assets-1256020106.file.myqcloud.com/zebra-swiper/v3/preview-ali.jpg" width="200" />
 <img alt="h5" src="https://assets-1256020106.file.myqcloud.com/zebra-swiper/v3/preview-h5.png" width="200" />
</div>

## 预览

<div style="display:flex;flex-wrap:wrap;margin-top:30px;">
 <img alt="gif" src="https://assets-1256020106.file.myqcloud.com/zebra-swiper/show/total1.gif" width="300" style="margin:20px;" />
 <img alt="gif" src="https://assets-1256020106.file.myqcloud.com/zebra-swiper/show/total2.gif" width="300" style="margin:20px;" />
 <img alt="gif" src="https://assets-1256020106.file.myqcloud.com/zebra-swiper/show/total3.gif" width="300" style="margin:20px;" />
</div>

## 交流群

QQ群：947159437 [点击加入](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=j0ofK9kA3Um4GXM3mdu0SNFUCOPTapGK&authKey=C%2Fr2jznrkjfCNen37FXpfR30fXpz2piJVCHkDTLHepAoq5OtZxtKXHJc%2BCZ77qFF&noverify=0&group_code=947159437)

<img alt="image" src="https://assets-1256020106.file.myqcloud.com/zebra-ui/source/zebra-qq-code.jpg" width="300px" />
