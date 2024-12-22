---
outline: deep
---

# 卡片

卡片式切换效果。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  EffectCards
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
  const modules = ref([EffectCards])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{
    swiperInstance.value[name] = swiper;
  }
</script>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-cards/effect-cards.scss";
</style>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { EffectCards } from '@zebra-ui/swiper/modules'

const modules = ref([EffectCards])
</script>
```

```css
<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-cards/effect-cards.scss";
</style>
```

## 使用

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="cards" :modules="modules" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper grabCursor effect="cards" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## 配置

### rotate

是否开启卡片旋转

<ComponentInfo type="boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="cards" :modules="modules" :cardsEffect="{rotate:false}" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="cards"
  :cardsEffect="{rotate:false}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### perSlideOffset

swiper的偏移量。单位（px）

<ComponentInfo type="number" value="8"></ComponentInfo>

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="cards" :modules="modules" :cardsEffect="{perSlideOffset:20}" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="cards"
  :cardsEffect="{perSlideOffset:20}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### perSlideRotate

swiper的旋转角度

<ComponentInfo type="number" value="2"></ComponentInfo>

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="cards" :modules="modules" :cardsEffect="{perSlideRotate:10}" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="cards"
  :cardsEffect="{perSlideRotate:10}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
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
<z-swiper grabCursor effect="cards" :modules="modules" :cardsEffect="{slideShadows:false}" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="cards"
  :cardsEffect="{slideShadows:false}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>
