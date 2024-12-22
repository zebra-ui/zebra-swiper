---
outline: deep
---

# 无限循环

## 前言

::: tip
v3版本对loop的逻辑进行了深度重构。

在2.x版本中，`loop` 功能是通过克隆节点的方式实现的。这种设计虽然简单，但在性能和维护性上存在显著问题。
并且对开发者的反馈进行总结后，90%的问题都与loop配置有关。

所以在v3版本中，完全摒弃了克隆节点的模式，采用更高效的节点移动机制。

但是在小程序平台无法操作DOM，页面只能通过数据变更进行渲染。所以小程序中使用依然需要将循环的列表数据传给swiper内部进行处理，swiper处理后通过`update:list`回传给页面从而完成循环数据的渲染。
:::

:::danger
使用`loop`无限循环必须设置`v-for`的`key`值为唯一标识。且强烈推荐数组中的item使用对象，如果是字符串，必须确保字符串是唯一的。不可使用循环中的`index`，因为无法正确匹配到需要移动的节点。

设置循环的`key`不仅对for循环的性能有好处，并且会影响节点更新时的处理方式。

具体可以查看vue文档：[key](https://cn.vuejs.org/api/built-in-special-attributes.html#key)，[通过 key 管理状态](https://cn.vuejs.org/guide/essentials/list.html#maintaining-state-with-key)。
:::

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

## 基本使用

### loop

::: tip
web-h5，web-pc 不需要将数据传递给swiper，swiper会直接操作dom节点。
:::

通过将`loop`设置为`true`即可开启无限循环。

通过 `v-model:list` 将数据传递给swiper。（H5不需要传递）

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper v-model:list="list" grabCursor loop>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper v-model:list="list" grabCursor loop>
  // H5不需要传递v-model // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### loopPreventsSliding

当swiper正在执行动画的过程中，调用`slideNext`或`slidePrev`等跳转方法时，将不会执行跳转。

<ComponentInfo type="Boolean" value="true"></ComponentInfo>

```html
<z-swiper v-model:list="list" grabCursor loop :loopPreventsSliding="false">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```
