# 快速上手

通过本章节你可以了解到 `ZebraSwiper` 的安装方法和基本使用方式。

## 安装

### 通过npm安装

在现有项目中使用 `ZebraSwiper` 时，可以通过 `npm` 或 `pnpm` 进行安装：

::: code-group

```bash [npm]
npm i @zebra-ui/swiper
```

```bash [pnpm]
# 通过 pnpm 安装
pnpm add @zebra-ui/swiper
```

:::

#### 引入

可以使用`uniapp`的`easycom`方式进行引入，也可以单独在使用的页面中引入组件。

::: tip
跨平台开发时，推荐使用`easycom`引入。
:::

::: warning
小程序无法通过引入 `js` 引入组件，所以引入的文件必须指向 `vue` 文件。
:::

::: code-group

```json [easycom]
// pages.json
{
  "easycom": {
    "custom": {
      "^z-(.*)": "@zebra-ui/swiper/components/z-$1/z-$1.vue"
    }
  },
  "pages": [...]
}
```

```vue [单页面引入]
<!-- index.vue -->
<script setup>
// Only Web // [!code ++]
import { ZSwiper, ZSwiperItem } from '@zebra-ui/swiper'

// 小程序 // [!code ++]
import ZSwiper from '@zebra-ui/swiper/components/z-swiper/z-swiper.vue'
import ZSwiperItem from '@zebra-ui/swiper/components/z-swiper-item/z-swiper-item.vue'
</script>
```

```js [全局引入]
// main.js
import { createSSRApp } from 'vue'

// Only Web // [!code ++]
import { ZSwiper, ZSwiperItem } from '@zebra-ui/swiper'

// 小程序 // [!code ++]
import ZSwiper from '@zebra-ui/swiper/components/z-swiper/z-swiper.vue'
import ZSwiperItem from '@zebra-ui/swiper/components/z-swiper-item/z-swiper-item.vue'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.component('ZSwiper', ZSwiper) // [!code ++]
  app.component('ZSwiperItem', ZSwiperItem) // [!code ++]
  return {
    app
  }
}
```

```js [插件引入]
// main.js
import { createSSRApp } from 'vue'

// 仅支持Web // [!code ++]
import ZebraSwiper from '@zebra-ui/swiper' // [!code ++]
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(ZebraSwiper) // [!code ++]
  return {
    app
  }
}
```

:::

### 通过 uni_modules 安装

[zebra-swiper](https://ext.dcloud.net.cn/plugin?id=7273)已经在uniapp的[插件市场](https://ext.dcloud.net.cn/plugin?id=7273)发布。

如果使用的`IDE`为`HbuilderX`，则可以通过uniapp的[插件市场](https://ext.dcloud.net.cn/plugin?id=7273)进行项目导入。

`uniapp`提供了`uni_modules`自动引入，使用此方法不需要再单独对组件进行引入。

## 引入样式

::: warning
两种安装方式都需要引入样式。
:::

::: code-group

```vue [npm]
<!-- APP.vue -->
<style lang="scss">
@use '@zebra-ui/swiper/index';
</style>
```

```vue [uni_modules]
<!-- APP.vue -->
<style lang="scss">
@use '@/uni_modules/zebra-swiper/index';
</style>
```

:::

## 快速实现一个简单的轮播

通过以下代码快速实现一个简单的`swiper`：

::: tip
建议给每个`swiper-item`绑定一个唯一`id`，并且这在`loop` `virtual` 中是必须的。
:::

<DemoBlock expanded>

<script setup>
  import {
  ref
  } from 'vue';
  const list = ref(Array.from({
   length: 5
  }).map((item, index) => {
    return {
     text: `Slide ${index + 1}`,
     id: index + 1
    }
   }
  ))
</script>

<z-swiper grabCursor>
  <z-swiper-item v-for="item in list" :key="item.id">
    <view class="swiper-item-text">
    {{item.text}}
    </view>
  </z-swiper-item>
</z-swiper>

<style lang="scss">
  .swiper-item-text{
    width:100%;
    height:200px;
    display:flex;
    align-items:center;
    justify-content:center;
    user-select: none;
  }
</style>

<template #code>

```html
<script setup>
  import { ref } from 'vue'
  const list = ref(
    Array.from({
      length: 5
    }).map((item, index) => {
      return {
        text: `Slide ${index + 1}`,
        id: index + 1
      }
    })
  )
</script>

<z-swiper grabCursor>
  <z-swiper-item v-for="item in list" :key="item.id">
    <view class="swiper-item"> {{item.text}} </view>
  </z-swiper-item>
</z-swiper>

<style lang="scss">
  .swiper-item {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }
</style>
```

  </template>

</DemoBlock>
