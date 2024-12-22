---
outline: deep
---

# 缩略图

用于在轮播图中显示缩略图导航。用户可以通过点击缩略图来快速切换到对应的幻灯片。在展示图片画廊时特别有用。

::: tip
缩略图需要两组swiper。主体轮播配置需要绑定负责缩略图swiper的实例
:::

<script setup>
  import {
   ref
  } from 'vue';
  import {
  Thumb, FreeMode
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
  const modules = ref([Thumb, FreeMode])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{

    swiperInstance.value[name] = swiper;

  }
</script>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { Thumb } from '@zebra-ui/swiper/modules'

const modules = ref([Thumb])
</script>
```

## 配置

### swiper

负责缩略图显示的swiper实例。

::: tip
负责显示缩略图的swiper通过`@swiper`接收swiper实例后通过该参数传递给主swiper。
:::

<ComponentInfo type="SwiperInstance" value="-"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :modules="modules" :thumbs="{ swiper: swiperInstance['thumbs'] }">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<div class="thumb-swiper">
   <z-swiper grabCursor :modules="modules" watch-slides-progress :spaceBetween="10" :slidesPerView="4" freeMode :custom-style="{height:'100px'}" @swiper="onSwiper($event, 'thumbs')">
     <z-swiper-item v-for="(item, index) in list" :key="item.id">
       <DemoItem :text="item.text" height="100px"></DemoItem>
     </z-swiper-item>
   </z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  :modules="modules"
  :thumbs="{ swiper: swiperInstance['thumbs'] }"
>
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<div class="thumb-swiper">
  <z-swiper
    grabCursor
    :modules="modules"
    watch-slides-progress
    :spaceBetween="10"
    :slidesPerView="4"
    freeMode
    :custom-style="{height:'100px'}"
    @swiper="onSwiper($event,'thumbs')"
  >
    // [!code ++]
    <z-swiper-item v-for="(item, index) in list" :key="item.id">
      <DemoItem :text="item.text" height="100px"></DemoItem>
    </z-swiper-item>
  </z-swiper>
</div>
```

```vue
<script setup>
import { ref } from 'vue'
import { Thumb, FreeMode } from '@zebra-ui/swiper/modules'

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
const modules = ref([Thumb, FreeMode])

const swiperInstance = ref({})

const onSwiper = (swiper, name) => {
  swiperInstance.value[name] = swiper
}
</script>
```

::: tip
缩略图的样式需开发者维护。
:::

```css
<style lang="scss">
.thumb-swiper {
    margin-top: 10px;

    .swiper-slide {
        opacity: 0.4;
    }

    .swiper-slide-thumb-active {
        opacity: 1;
    }
}
</style>
```

  </template>

</DemoBlock>

<style lang="scss">
    .thumb-swiper{
        margin-top:10px;

        .swiper-slide {
            opacity: 0.4;
        }

        .swiper-slide-thumb-active {
            opacity: 1;
        }
    }
</style>

### autoScrollOffset

设置自动滚动的边缘Slide个数。

如果swiper有五个item，默认情况需要主swiper滚动至第五个item时，缩略图swiper才会向后滚动。

当设置为1时，swiper滚动至第四个item时，缩略图swiper就会执行滚动。

<ComponentInfo type="number" value="0"></ComponentInfo>

```html
<z-swiper
  grabCursor
  :modules="modules"
  :thumbs="{ swiper: swiperInstance['thumbs'],autoScrollOffset:1 }"
>
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
<div class="thumb-swiper">
  <z-swiper
    grabCursor
    :modules="modules"
    watch-slides-progress
    :spaceBetween="10"
    :slidesPerView="4"
    freeMode
    :custom-style="{height:'100px'}"
    @swiper="onSwiper($event,'thumbs')"
  >
    // [!code ++]
    <z-swiper-item v-for="(item, index) in list" :key="item.id">
      <DemoItem :text="item.text" height="100px"></DemoItem>
    </z-swiper-item>
  </z-swiper>
</div>
```

## 方法

### init

初始化缩略图

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['init'].thumbs.init()"
>初始化缩略图</DemoOprate>
```

### update

更新缩略图

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['init'].thumbs.update(1)"
>更新缩略图</DemoOprate>
```
