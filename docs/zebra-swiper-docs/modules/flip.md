---
outline: deep
---

# 翻转

使幻灯片在切换时像翻页一样旋转。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  EffectFlip
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
  const modules = ref([EffectFlip])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{
    swiperInstance.value[name] = swiper;
  }
</script>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-flip/effect-flip.scss";
</style>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { EffectFlip } from '@zebra-ui/swiper/modules'

const modules = ref([EffectFlip])
</script>
```

```css
<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-flip/effect-flip.scss";
</style>
```

## 使用

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="flip" :modules="modules" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper grabCursor effect="flip" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## 配置

### slideShadows

是否显示item的3D阴影

<ComponentInfo type="boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="flip" :modules="modules" :flipEffect="{slideShadows:false}" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="flip"
  :flipEffect="{slideShadows:false}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### limitRotation

是否限制swiper的旋转角度

<ComponentInfo type="boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="flip" :modules="modules" :flipEffect="{limitRotation:false}" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="flip"
  :flipEffect="{limitRotation:false}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>
