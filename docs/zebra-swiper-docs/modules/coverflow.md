---
outline: deep
---

# 3D流

3D 旋转效果，让幻灯片看起来像一个旋转的卡片堆叠。提供立体的旋转和堆叠效果。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  EffectCoverflow
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
  const modules = ref([EffectCoverflow])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{
    swiperInstance.value[name] = swiper;
  }
</script>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-coverflow/effect-coverflow.scss";
</style>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { EffectCoverflow } from '@zebra-ui/swiper/modules'

const modules = ref([EffectCoverflow])
</script>
```

```css
<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-coverflow/effect-coverflow.scss";
</style>
```

## 使用

::: tip
该切换效果与轮播块结合使用体验更佳。
:::

<DemoBlock expanded>
<z-swiper grabCursor effect="coverflow" centeredSlides :slidesPerView="3" :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  effect="coverflow"
  centeredSlides
  :slidesPerView="3"
  :coverflowEffect="{   // [!code ++]
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## 配置

### depth

幻灯片在 Z 轴上的深度偏移，增加立体感。单位(px)

会对幻灯片之间的距离产生影响。

<ComponentInfo type="number" value="100"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor effect="coverflow" centeredSlides :slidesPerView="3" :coverflowEffect="{depth: 200}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  effect="coverflow"
  centeredSlides
  :slidesPerView="3"
  :coverflowEffect="{depth: 200}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### rotate

幻灯片旋转的角度，以度数为单位。

<ComponentInfo type="number" value="50"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor effect="coverflow" centeredSlides :slidesPerView="3" :coverflowEffect="{rotate: 10}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  effect="coverflow"
  centeredSlides
  :slidesPerView="3"
  :coverflowEffect="{rotate: 10}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### scale

幻灯片的缩放效果。

<ComponentInfo type="number" value="1"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor effect="coverflow" centeredSlides :slidesPerView="3" :coverflowEffect="{scale: 0.5}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  effect="coverflow"
  centeredSlides
  :slidesPerView="3"
  :coverflowEffect="{scale: 0.5}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### stretch

幻灯片之间的拉伸距离。单位（px）

<ComponentInfo type="number" value="0"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor effect="coverflow" centeredSlides :slidesPerView="3" :coverflowEffect="{stretch: 20}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  effect="coverflow"
  centeredSlides
  :slidesPerView="3"
  :coverflowEffect="{stretch: 20}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### modifier

效果倍增器。调整效果的强度，数值越大，效果越明显。

<ComponentInfo type="number" value="1"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor effect="coverflow" centeredSlides :slidesPerView="3" :coverflowEffect="{modifier: 1.2}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  effect="coverflow"
  centeredSlides
  :slidesPerView="3"
  :coverflowEffect="{modifier: 1.2}"
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

<ComponentInfo type="boolean" value="true"></ComponentInfo>

是否启用幻灯片阴影效果。增加幻灯片的阴影，使其更具立体感。

```html
<z-swiper
  grabCursor
  effect="coverflow"
  centeredSlides
  :slidesPerView="3"
  :coverflowEffect="{slideShadows: false}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```
