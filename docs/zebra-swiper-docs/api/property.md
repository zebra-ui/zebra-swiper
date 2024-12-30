---
outline: deep
---

# Swiper 实例属性

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

  const swiperInstance = ref({})

  const swiperByRef= ref(null)

  const onSwiper = (swiper,name)=>{
    swiperInstance.value[name] = swiper;
  }

   const onSwiperLoop = (swiper)=>{
    swiperInstanceLoop.value = swiper;
  }
</script>

## activeIndex <Badge type="warning" text="只读" />

swiper中当前活动的下标。

<DemoBlock expanded>
<div style="padding:20px;">
{{swiperInstance['activeIndex'] && swiperInstance['activeIndex'].activeIndex}} 滑动轮播观察下标变化
</div>
<z-swiper grabCursor @swiper="onSwiper($event,'activeIndex')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## realIndex <Badge type="warning" text="只读" />

swiper当前活动item的真实下标。在`loop`与`virtual`中使用。

<DemoBlock expanded>
<div style="padding:20px;">
ActiveIndex:{{swiperInstance['realIndex'] && swiperInstance['realIndex'].activeIndex}} RealIndex:{{swiperInstance['realIndex'] && swiperInstance['realIndex'].realIndex}} 滑动轮播观察下标变化及区别
</div>
<z-swiper grabCursor loop @swiper="onSwiper($event,'realIndex')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## allowSlideNext

是否允许切换swiper到下一个item

<DemoBlock expanded>
<template #operate>
<DemoOprate @click="()=>swiperInstance['allowSlideNext'].allowSlideNext = false">设置allowSlideNext为false</DemoOprate>
<DemoOprate type="primary" @click="()=>swiperInstance['allowSlideNext'].allowSlideNext = true">设置allowSlideNext为true</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'allowSlideNext')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## allowSlidePrev

是否允许切换swiper到上一个item

<DemoBlock expanded>
<template #operate>
<DemoOprate @click="()=>swiperInstance['allowSlidePrev'].allowSlidePrev = false">设置allowSlidePrev为false</DemoOprate>
<DemoOprate type="primary" @click="()=>swiperInstance['allowSlidePrev'].allowSlidePrev = true">设置allowSlidePrev为true</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'allowSlidePrev')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## allowTouchMove

是否允许通过触摸切换swiper

<DemoBlock expanded>
<template #operate>
<DemoOprate @click="()=>swiperInstance['allowTouchMove'].allowTouchMove = false">设置allowTouchMove为false</DemoOprate>
<DemoOprate type="primary" @click="()=>swiperInstance['allowTouchMove'].allowTouchMove = true">设置allowTouchMove为true</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'allowTouchMove')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## animating <Badge type="warning" text="只读" />

动画状态

<DemoBlock expanded>
<template #operate>
{{swiperInstance['animating'] && swiperInstance['animating'].animating}}
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'animating')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## clickedIndex <Badge type="warning" text="只读" />

swiper最后一次点击的下标

<DemoBlock expanded>
<template #operate>
{{swiperInstance['clickedIndex'] && swiperInstance['clickedIndex'].clickedIndex}}
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'clickedIndex')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## isBeginning <Badge type="warning" text="只读" />

swiper是否位于最开始的位置

<DemoBlock expanded>
<template #operate>
{{swiperInstance['isBeginning'] && swiperInstance['isBeginning'].isBeginning}}
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'isBeginning')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## isEnd <Badge type="warning" text="只读" />

swiper是否位于末尾

<DemoBlock expanded>
<template #operate>
{{swiperInstance['isEnd'] && swiperInstance['isEnd'].isEnd}}
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'isEnd')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## progress <Badge type="warning" text="只读" />

swiper的进度 0-1

<DemoBlock expanded>
<template #operate>
{{swiperInstance['progress'] && swiperInstance['progress'].progress}}
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'progress')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## translate <Badge type="warning" text="只读" />

当前的translate值

<DemoBlock expanded>
<template #operate>
{{swiperInstance['translate'] && swiperInstance['translate'].translate}}
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'translate')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## width <Badge type="warning" text="只读" />

swiper的宽度

<DemoBlock expanded>
<template #operate>
{{swiperInstance['width'] && swiperInstance['width'].width}}
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'width')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## height <Badge type="warning" text="只读" />

swiper的高度

<DemoBlock expanded>
<template #operate>
{{swiperInstance['height'] && swiperInstance['height'].height}}
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'height')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</DemoBlock>

## 在页面中获取swiper实例 {#get-swiper-instance}

### 通过swiper挂载完成后的回调 <Badge type="tip" text="推荐" /> {#by-onswiper}

文档中所有获取实例都使用此方法。

<DemoBlock expanded>
<div style="padding:20px;">
{{swiperInstance['activeIndexInstance'] && swiperInstance['activeIndexInstance'].activeIndex}} 滑动轮播观察下标变化
</div>
<z-swiper grabCursor @swiper="onSwiper($event,'activeIndexInstance')">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor @swiper="onSwiper">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
  import {
   ref
  } from 'vue';

  const onSwiper = (swiper)=>{
    console.log("swiper实例:",swiper)
  }
</script>
```

  </template>

</DemoBlock>

### 通过ref {#by-ref}

通过访问`z-swiper`组件中的`swiper`属性。

::: warning
swiper挂载完成后才可访问swiper实例。
:::

<DemoBlock expanded>
<template #operate>
{{ swiperByRef && swiperByRef.swiper.activeIndex}}
</template>
<z-swiper ref="swiperByRef" grabCursor>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper ref="swiperByRef" grabCursor>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
  import {
   ref
  } from 'vue';
  const swiperByRef= ref(null) 
</script>
```

  </template>

</DemoBlock>
