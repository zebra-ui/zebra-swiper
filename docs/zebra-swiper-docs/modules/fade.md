---
outline: deep
---

# 淡入淡出

幻灯片之间以淡入淡出的方式过渡。与传统的滑动效果不同，fade 提供了一种更柔和的视觉体验。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  EffectFade
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
  const modules = ref([EffectFade])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{
    swiperInstance.value[name] = swiper;
  }
</script>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-fade/effect-fade.scss";
</style>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

::: code-group

```vue [npm]
<script lang="ts" setup>
import { EffectFade } from '@zebra-ui/swiper/modules'

const modules = ref([EffectFade])
</script>
```

```vue [uni_modules]
<script lang="ts" setup>
import { EffectFade } from '@/uni_modules/zebra-swiper/modules'

const modules = ref([EffectFade])
</script>
```

:::

::: code-group

```css [npm]
<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-fade/effect-fade.scss";
</style>
```

```css [uni_modules]
<style lang="scss">
    @use "@/uni_modules/zebra-swiper/modules/effect-fade/effect-fade.scss";
</style>
```

:::

## 使用

<DemoBlock expanded>
<z-swiper grabCursor effect="fade" :modules="modules">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor effect="fade" :modules="modules"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## 配置

### crossFade <Badge type="tip" text="推荐开启" />

- 交叉淡入淡出：当 crossFade 设置为 true 时，当前幻灯片淡出和下一张幻灯片淡入的过程是同时进行的。这会使过渡更平滑和自然。

- 非交叉淡入淡出：当 crossFade 设置为 false 时，当前幻灯片会完全淡出后，下一张幻灯片才开始淡入。

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor effect="fade" :fadeEffect="{crossFade:true}" :modules="modules">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html{4}
<z-swiper
  grabCursor
  effect="fade"
  :fadeEffect="{crossFade:true}"
  :modules="modules"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>
