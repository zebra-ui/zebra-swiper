# 快速开始

:::warning 提示
该组件只可以在 uniapp 项目中使用。
:::

## 1.npm 安装

```bash
npm i @zebra-ui/swiper
```

我们更推荐在引入时，使用 uniapp 的[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)方式引入。

```js
// pages.json

{
    "easycom": {
        "^z-(.*)": "@zebra-ui/swiper/components/z-$1/z-$1.vue"
    },
    "pages": [...],
    "globalStyle": {
        ...
    }
}
```

## 2.uni_modules

通过[插件市场](https://ext.dcloud.net.cn/plugin?id=7273)直接导入该组件，无需任何配置即可使用此组件。
