---
outline: deep
---

# 控制器

用于同步多个 Swiper 实例。通过这个功能，可以让一个 Swiper 控制另一个 Swiper 的行为，实现联动效果。

例如，当滑动一个 Swiper 时，另一个 Swiper 会同步滑动。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  Controller
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
  const modules = ref([Controller])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{

    swiperInstance.value[name] = swiper;

  }
</script>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { Controller } from '@zebra-ui/swiper/modules'

const modules = ref([Controller])
</script>
```

## 配置

### control

被控制的swiper实例。

<ComponentInfo type="SwiperInstance" value="-"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :modules="modules" :controller="{ control: swiperInstance['control'] }">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<z-swiper grabCursor :modules="modules" @swiper="onSwiper($event, 'control')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<template #code>

```html
<z-swiper
  grabCursor
  :modules="modules"
  :controller="{ control: swiperInstance['control'] }"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<z-swiper grabCursor :modules="modules" @swiper="onSwiper($event, 'control')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### inverse

是否开启反向控制。

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :modules="modules" :controller="{ control: swiperInstance['inverse'],inverse:true }">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<z-swiper grabCursor :modules="modules" @swiper="onSwiper($event, 'inverse')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<template #code>

```html
<z-swiper
  grabCursor
  :modules="modules"
  :controller="{ control: swiperInstance['inverse'],inverse:true }"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<z-swiper grabCursor :modules="modules" @swiper="onSwiper($event, 'inverse')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## 示例

三个swiper相互控制对方。

<DemoBlock expanded>
<z-swiper grabCursor :modules="modules" :controller="{ control: [swiperInstance['example2'],swiperInstance['example3']] }" @swiper="onSwiper($event, 'example1')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<z-swiper grabCursor :modules="modules" :controller="{ control: swiperInstance['example1'] }" @swiper="onSwiper($event, 'example2')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<z-swiper grabCursor :modules="modules" :controller="{ control: swiperInstance['example1'] }" @swiper="onSwiper($event, 'example3')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<template #code>

```html
<z-swiper
  grabCursor
  :modules="modules"
  :controller="{ control: [swiperInstance['example2'],swiperInstance['example3']] }"
  @swiper="onSwiper($event, 'example1')"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<z-swiper
  grabCursor
  :modules="modules"
  :controller="{ control: swiperInstance['example1'] }"
  @swiper="onSwiper($event, 'example2')"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<z-swiper
  grabCursor
  :modules="modules"
  :controller="{ control: swiperInstance['example1'] }"
  @swiper="onSwiper($event, 'example3')"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>
