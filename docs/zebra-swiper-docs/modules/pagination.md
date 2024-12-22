---
outline: deep
---

# 分页器

用于指示当前显示的是第几张幻灯片，并允许用户通过点击这些点来快速跳转到特定的幻灯片。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  Pagination
} from '@zebra-ui/swiper/modules'

  const list = ref(Array.from({
   length: 5
  }).map((item, index) => {

    return {
     text: `Slide ${index + 1}` ,
     id: index + 1
    }

   }
  ))
  const modules = ref([Pagination])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{

    swiperInstance.value[name] = swiper;

  }
</script>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/pagination/pagination.scss";
</style>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { Pagination } from '@zebra-ui/swiper/modules'

const modules = ref([Pagination])
</script>
```

```css
<style lang="scss">
    @use "@zebra-ui/swiper/modules/pagination/pagination.scss";
</style>
```

## 配置

### pagination

设置为 `true` 开启切换器。

<ComponentInfo type="Boolean, Object" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor pagination :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor pagination :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### enabled

是否启用分页器。

<ComponentInfo type="boolean" value="false"></ComponentInfo>

```html
<z-swiper grabCursor :pagination="{enabled:true}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

### type

设置分页器的类型。

<ComponentInfo type="string" value="bullets" :options="['bullets','fraction','progressbar','custom']"></ComponentInfo>

- bullets

<DemoBlock expanded>
<z-swiper grabCursor :pagination="{type:'bullets'}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :pagination="{type:'bullets'}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

- fraction

<DemoBlock expanded>
<z-swiper grabCursor :pagination="{type:'fraction'}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :pagination="{type:'fraction'}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

- progressbar

<DemoBlock expanded>
<z-swiper grabCursor :pagination="{type:'progressbar'}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :pagination="{type:'progressbar'}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### dynamicBullets

动态分页器，在大数据量的场景很有用。只会显示少量的分页器。

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :pagination="{dynamicBullets:true}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :pagination="{dynamicBullets:true}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### dynamicMainBullets

动态分页器显示主指示点数量.

::: tip
需要搭配dynamicBullets配置使用。
:::

<ComponentInfo type="number" value="1"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :pagination="{dynamicBullets:true,dynamicMainBullets:2}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  :pagination="{dynamicBullets:true,dynamicMainBullets:2}"
  :modules="modules"
>
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### progressbarOpposite

使分页进度条与 Swiper 的方向参数相反。

即垂直进度条对应水平 swiper 方向，水平进度条对应垂直 swiper 方向

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :pagination="{type:'progressbar',progressbarOpposite:true}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  :pagination="{type:'progressbar',progressbarOpposite:true}"
  :modules="modules"
>
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### hideOnClick

点击swiper是否隐藏分页器

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :pagination="{hideOnClick:true}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :pagination="{hideOnClick:true}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### clickable

点击指示点是否跳转至对应item

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :pagination="{clickable:true}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :pagination="{clickable:true}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### formatFractionCurrent

格式化 `fraction` 类型的当前下标。

<ComponentInfo type="function" value="-"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :pagination="{type:'fraction',formatFractionCurrent:(number)=>`第${number}张`}" :modules="modules">
    <z-swiper-item v-for="(item, index) in list" :key="item.id">
        <DemoItem :text="item.text"></DemoItem>
    </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  :pagination="{type:'fraction',formatFractionCurrent:(number)=>`第${number}张`}"
  :modules="modules"
>
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### formatFractionTotal

格式化 `fraction` 类型的总数量。

<ComponentInfo type="function" value="-"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :pagination="{type:'fraction',formatFractionTotal:(number)=>`共${number}张`}" :modules="modules">
    <z-swiper-item v-for="(item, index) in list" :key="item.id">
        <DemoItem :text="item.text"></DemoItem>
    </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  :pagination="{type:'fraction',formatFractionTotal:(number)=>`共${number}张`}"
  :modules="modules"
>
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## 方法

### destroy

销毁分页器

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['destroy'].pagination.destroy()"
>销毁分页器</DemoOprate>
```

### init

初始化分页器

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['init'].pagination.init()"
>初始化分页器</DemoOprate>
```

### update

更新分页器

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['update'].pagination.update()"
>更新分页器</DemoOprate>
```

## 事件

### navigationShow

分页器显示时触发

```html
<z-swiper @paginationShow="onSwiperPaginationShow">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperPaginationShow = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### paginationHide

分页器隐藏时触发

```html
<z-swiper @paginationHide="onSwiperPaginationHide">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperPaginationHide = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### paginationUpdate

分页器更新时触发

```html
<z-swiper @paginationUpdate="onSwiperPaginationUpdate">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperPaginationUpdate = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                                        |       默认值        | 描述                     |
| ------------------------------------------- | :-----------------: | ------------------------ |
| --swiper-pagination-color                   |       #2549e8       | 分页器的颜色             |
| --swiper-pagination-left                    |        auto         | 分页器距左侧的距离       |
| --swiper-pagination-right                   |         8px         | 分页器距右侧的距离       |
| --swiper-pagination-bottom                  |         8px         | 分页器距底部的距离       |
| --swiper-pagination-top                     |        auto         | 分页器距顶部的距离       |
| --swiper-pagination-fraction-color          |       inherit       | 分数式分页器的颜色       |
| --swiper-pagination-progressbar-bg-color    | rgba(0, 0, 0, 0.25) | 进度条分页器的背景色     |
| --swiper-pagination-progressbar-size        |         4px         | 进度条分页器的尺寸       |
| --swiper-pagination-bullet-size             |         8px         | 分页器圆点的尺寸         |
| --swiper-pagination-bullet-width            |         8px         | 分页器圆点的宽度         |
| --swiper-pagination-bullet-height           |         8px         | 分页器圆点的高度         |
| --swiper-pagination-bullet-inactive-color   |        #000         | 非活动分页器圆点的颜色   |
| --swiper-pagination-bullet-inactive-opacity |         0.2         | 非活动分页器圆点的透明度 |
| --swiper-pagination-bullet-opacity          |          1          | 活动分页器圆点的透明度   |
| --swiper-pagination-bullet-horizontal-gap   |         4px         | 水平分页器圆点之间的间距 |
| --swiper-pagination-bullet-vertical-gap     |         6px         | 垂直分页器圆点之间的间距 |
