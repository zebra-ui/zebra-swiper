---
outline: deep
---

# 方块

3D 立方体旋转效果。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  EffectCube
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
  const modules = ref([EffectCube])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{
    swiperInstance.value[name] = swiper;
  }
</script>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-cube/effect-cube.scss";
</style>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

::: code-group

```vue [npm]
<script lang="ts" setup>
import { EffectCube } from '@zebra-ui/swiper/modules'

const modules = ref([EffectCube])
</script>
```

```vue [uni_modules]
<script lang="ts" setup>
import { EffectCube } from '@/uni_modules/zebra-swiper/modules'

const modules = ref([EffectCube])
</script>
```

:::

::: code-group

```css [npm]
<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-cube/effect-cube.scss";
</style>
```

```css [uni_modules]
<style lang="scss">
    @use "@/uni_modules/zebra-swiper/modules/effect-cube/effect-cube.scss";
</style>
```

:::

## 使用

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="cube" :modules="modules" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper grabCursor effect="cube" :modules="modules">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## 配置

### shadow

是否显示底部的主阴影

<ComponentInfo type="boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="cube" :modules="modules" :cubeEffect="{shadow:false}" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="cube"
  :cubeEffect="{shadow:false}"
  :modules="modules"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### slideShadows

是否显示item的3D阴影

<ComponentInfo type="boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="cube" :modules="modules" :cubeEffect="{slideShadows:false}" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="cube"
  :cubeEffect="{slideShadows:false}"
  :modules="modules"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### shadowOffset

底部阴影的偏移量。单位（px）

<ComponentInfo type="number" value="20"></ComponentInfo>

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="cube" :modules="modules" :cubeEffect="{shadowOffset:0}" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="cube"
  :cubeEffect="{shadowOffset:0}"
  :modules="modules"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### shadowScale

底部阴影的缩放比例。

<ComponentInfo type="number" value="0.94"></ComponentInfo>

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="cube" :modules="modules" :cubeEffect="{shadowScale:0.3}" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="cube"
  :cubeEffect="{shadowScale:0.3}"
  :modules="modules"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>
