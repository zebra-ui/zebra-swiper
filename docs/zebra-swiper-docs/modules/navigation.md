---
outline: deep
---

# 切换器

在页面中通过点击切换器切换swiper。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  Navigation
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
  const modules = ref([Navigation])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{
    swiperInstance.value[name] = swiper;
  }
</script>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/navigation/navigation.scss";
</style>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { Navigation } from '@zebra-ui/swiper/modules'

const modules = ref([Navigation])
</script>
```

```css
<style lang="scss">
    @use "@zebra-ui/swiper/modules/navigation/navigation.scss";
</style>
```

## 配置

### navigation

设置为 `true` 开启切换器。

<ComponentInfo type="Boolean, Object" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor navigation :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor navigation :modules="modules"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### enabled

是否启用切换器。

```html
<z-swiper grabCursor :navigation="{enabled:true}" :modules="modules"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

### hideOnClick

点击swiper后是否隐藏

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :navigation="{hideOnClick:true}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :navigation="{hideOnClick:true}" :modules="modules"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## 方法

### destroy

销毁切换器

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['destroy'].navigation.destroy()"
>销毁切换器</DemoOprate>
```

### init

初始化切换器

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['init'].navigation.init()"
>初始化切换器</DemoOprate>
```

### update

更新切换器

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['update'].navigation.update()"
>更新切换器</DemoOprate>
```

## 事件

### navigationShow

切换器显示时触发

```html
<z-swiper @navigationShow="onSwiperNavigationShow"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperNavigationShow = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### navigationHide

切换器隐藏时触发

```html
<z-swiper @navigationHide="onSwiperNavigationHide"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperNavigationHide = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### navigationNext

点击切换器的向后切换时触发

```html
<z-swiper @navigationNext="onSwiperNavigationNext"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperNavigationNext = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### navigationPrev

点击切换器的向前切换时触发

```html
<z-swiper @navigationPrev="onSwiperNavigationPrev"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperNavigationPrev = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                             | 默认值  | 描述               |
| -------------------------------- | :-----: | ------------------ |
| --swiper-navigation-size         |  44px   | 切换器的尺寸       |
| --swiper-navigation-top-offset   |   50%   | 切换器顶部的偏移量 |
| --swiper-navigation-sides-offset |  10px   | 切换器两侧的偏移量 |
| --swiper-navigation-color        | #2549e8 | 切换器的颜色       |
