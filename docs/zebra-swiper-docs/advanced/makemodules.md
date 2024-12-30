---
outline: deep
---

# 制作modules模块 {#make-swiper-modules}

本文将手把手带你制作一个自己的modules模块。

## 前言 {#make-swiper-modules-foreword}

制作modules模块的核心方法是监听`swiper`的事件。可以通过文档中的[事件](/api/events)查看详细的使用方法。

常用配置：

- watchSlidesProgress：用于监听`swiper-item`的进度。
- @beforeInit：用于在初始化swiper之前自定义，如添加类名。
- @setTransition：为每个swiper-item设置过渡时间。
- @setTranslate：为每个swiper-item定义详细动画。

## 制作层叠轮播效果 {#make-carousel-modules-example}

<script setup>
  import {
   ref
  } from 'vue';
  import EffectPanorama from '../.vitepress/theme/components/ExampleMethods/effect-panorama/effect-panorama'

  const modules = [EffectPanorama]

  const list = ref(Array.from({
   length: 5
  }).map((item, index) => {
    return {
     text: `Slide ${index + 1}`,
     id: index + 1
    }
   }
  ))

  const onSetTranslate = (swiper, translate) => {
  const scaleStep = 0.2;
  const zIndexMax = swiper.slides.length;
  for (let i = 0; i < swiper.slides.length; i += 1) {
   const slideEl = swiper.slides[i];
   const slideProgress = swiper.slides[i].progress;
   const absProgress = Math.abs(slideProgress);
   let modify = 1;
   if (absProgress > 1) {
    modify = (absProgress - 1) * 0.3 + 1;
   }
   const translate = `${slideProgress * modify * 50}%`;
   const scale = 1 - absProgress * scaleStep;
   const zIndex = zIndexMax - Math.abs(Math.round(slideProgress));
   const slideTransform = `translateX(${translate}) scale(${scale})`;
   slideEl.style.transform = slideTransform
   slideEl.style.zIndex = zIndex
   if (absProgress > 3) {
    slideEl.style.opacity = 0
   } else {
    slideEl.style.opacity = 1
   }
  }
 }

 const onSetTransition = (swiper, duration) => {
  swiper.slides.forEach((el) => {
   el.style.transitionDuration = `${duration}ms`
  })
 }

 const options = {
  panorama: {
   depth: 300,
   rotate: 50,
   stretch: 1
  },
 }

 const onSwiperBeforeInitPanorama = (swiper) => {
  swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
 }

 const onSetTranslatePanorama = (swiper) => {
  const sizesGrid = swiper.slidesSizesGrid;
  const {
   depth,
   rotate,
   stretch
  } = options.panorama;
  const angleRad = (rotate * Math.PI) / 180;
  const halfAngleRad = angleRad / 2;
  const angleModifier = 1 / (180 / rotate);

  for (let i = 0; i < swiper.slides.length; i += 1) {
   const slideEl = swiper.slides[i];
   const slideProgress = slideEl.progress;
   const slideSize = sizesGrid[i];
   const progressModifier = swiper.params.centeredSlides ?
    0 :
    (swiper.params.slidesPerView - 1) * 0.5;
   const modifiedProgress = slideProgress + progressModifier;
   const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI);
   const translateX = `${modifiedProgress * (stretch * slideSize / 3) * angleCos}px`;
   const rotateY = modifiedProgress * rotate;
   const radius = (slideSize * 0.5) / Math.sin(halfAngleRad);
   const translateZ = `${radius * angleCos - depth}px`;
   slideEl.style.transform = `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)`
  }
 }

 const onSetTransitionPanorama = (swiper, duration) => {
  swiper.slides.forEach((el) => {
   el.style.transitionDuration = `${duration}ms`
  })
 }
</script>

### 第一步 {#make-carousel-modules-first}

首先应该做好`swiper`的基础建设，即正常实现一个swiper。

<DemoBlock expanded>
<z-swiper grabCursor>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### 第二步 {#make-carousel-modules-second}

利用swiper提供的配置完善轮播效果。

<DemoBlock expanded>
<z-swiper grabCursor loop watchSlidesProgress slidesPerView="2" centeredSlides>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<!-- watchSlidesProgress配置用于监听swiper-item的进度 -->
<z-swiper grabCursor loop watchSlidesProgress slidesPerView="2" centeredSlides> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### 第三步：最终效果 {#make-carousel-modules-third}

通过`setTranslate`监听，为每个swiper-item设置`transform` `zIndex` `opacity`。

通过`setTransition`监听，为每个swiper-item设置`transitionDuration`。

<DemoBlock expanded>
<z-swiper grabCursor loop watchSlidesProgress slidesPerView="2" centeredSlides
 @setTranslate="onSetTranslate" @setTransition="onSetTransition">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<!-- watchSlidesProgress配置用于监听swiper-item的进度 -->
<z-swiper grabCursor loop watchSlidesProgress slidesPerView="2" centeredSlides
 @setTranslate="onSetTranslate" @setTransition="onSetTransition"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

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

  const onSetTranslate = (swiper, translate) => {
  const scaleStep = 0.2;
  const zIndexMax = swiper.slides.length;
  // 循环遍历每个swiper-item  // [!code ++]
  for (let i = 0; i < swiper.slides.length; i += 1) {
   const slideEl = swiper.slides[i];
   // 每个swiper-item的进度
   const slideProgress = swiper.slides[i].progress;
   const absProgress = Math.abs(slideProgress);
   let modify = 1;
   if (absProgress > 1) {
    modify = (absProgress - 1) * 0.3 + 1;
   }
   // 计算swiper-item的样式  // [!code ++]
   const translate = `${slideProgress * modify * 50}%`;
   const scale = 1 - absProgress * scaleStep;
   const zIndex = zIndexMax - Math.abs(Math.round(slideProgress));
   // 最终赋值给swiper-item的样式  // [!code ++]
   const slideTransform = `translateX(${translate}) scale(${scale})`;
   slideEl.style.transform = slideTransform
   slideEl.style.zIndex = zIndex
   if (absProgress > 3) {
    slideEl.style.opacity = 0
   } else {
    slideEl.style.opacity = 1
   }
  }
 }

 const onSetTransition = (swiper, duration) => {
  swiper.slides.forEach((el) => {
     // 为每个swiper-item设置transitionDuration // [!code ++]
   el.style.transitionDuration = `${duration}ms`
  })
 }
</script>
```

  </template>

</DemoBlock>

## 制作modules {#make-modules-detail}

上面讲了怎样利用swiper的事件监听实现自定义的轮播效果。

那么如何将该轮播效果封装成modules呢？下面将详细介绍封装modules。

以全景轮播为示例。

### 第一步 {#make-modules-detail-first}

基础建设

<DemoBlock expanded>
<z-swiper grabCursor loop watchSlidesProgress slidesPerView="2" centeredSlides>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<!-- watchSlidesProgress配置用于监听swiper-item的进度 -->
<z-swiper grabCursor loop watchSlidesProgress slidesPerView="2" centeredSlides> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### 第二步 {#make-modules-detail-second}

定义轮播效果需要用到的参数。

示例：

```js
panorama: {
    // 全景轮播的深度
   depth: 300,
    // 全景轮播的旋转角度
   rotate: 50,
    // 全景轮播的拉伸距离
   stretch: 1
  }
```

### 第三步 {#make-modules-detail-third}

实现全景轮播

<DemoBlock expanded>
<z-swiper grabCursor loop watchSlidesProgress slidesPerView="2" centeredSlides
@beforeInit="onSwiperBeforeInitPanorama" @setTranslate="onSetTranslatePanorama" @setTransition="onSetTransitionPanorama">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<!-- watchSlidesProgress配置用于监听swiper-item的进度 -->
<z-swiper grabCursor loop watchSlidesProgress slidesPerView="2" centeredSlides
@beforeInit="onSwiperBeforeInitPanorama" @setTranslate="onSetTranslatePanorama" @setTransition="onSetTransitionPanorama"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### 第四步 {#make-modules-detail-step4}

接下来正式封装modules。

#### 类型定义

首先新建一个轮播模块文件用于定义。示例命名：`effect-panorama.ts`

如果使用TypeScript，则需要定义类型。

```js
// 导入swiper提供的初始化轮播效果方法
import effectInit from '@zebra-ui/swiper/components/shared/effect-init'
// 导入swiper参数类型
import type { SwiperInterface } from '@zebra-ui/swiper/types/swiper-class' //swiper实体类
import type { SwiperOptions } from '@zebra-ui/swiper/types/swiper-options' //swiper参数
import type { SwiperItemInstance } from '@zebra-ui/swiper/types/swiper-item-instance' //swiper-item实体

// 定义全景轮播的配置参数类型
export interface PanoramaEffectOptions {
  depth?: number
  rotate?: number
  stretch?: number
}

interface SwiperOptionsPanorama extends SwiperOptions {
  customEffect?: PanoramaEffectOptions
}
```

#### 导出模块方法

回调里可接收三个参数。

- swiper：swiper实例。
- extendParams：合并配置方法。
- on：swiper监听方法。

```js
export default function EffectCoverflow({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {


}
```

#### 合并参数

使用`extendParams`方法合并配置参数。

```js
export default function EffectCoverflow({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({ // [!code ++]
    // swiper提供了customEffect参数用于自定义配置
    customEffect: {
      depth: 300,
      rotate: 50,
      stretch: 1
    } as SwiperOptionsPanorama
  })
}
```

#### 编写setTranslate

```js
export default function EffectCoverflow({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    // swiper提供了customEffect参数用于自定义配置
    customEffect: {
      depth: 300,
      rotate: 50,
      stretch: 1
    } as SwiperOptionsPanorama
  })

    const setTranslate = () => { // [!code ++]
    const params = (swiper.params as SwiperOptionsPanorama)
      .customEffect as PanoramaEffectOptions
    const sizesGrid = swiper.slidesSizesGrid
    const { depth, rotate, stretch } = params
    const angleRad = (rotate! * Math.PI) / 180
    const halfAngleRad = angleRad / 2
    const angleModifier = 1 / (180 / rotate!)

    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i]
      const slideProgress = (slideEl as SwiperItemInstance).progress
      const slideSize = sizesGrid[i]
      const progressModifier = swiper.params.centeredSlides
        ? 0
        : ((swiper.params.slidesPerView as number) - 1) * 0.5
      const modifiedProgress = slideProgress + progressModifier
      const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI)
      const translateX = `${modifiedProgress * ((stretch! * slideSize) / 3) * angleCos}px`
      const rotateY = modifiedProgress * rotate!
      const radius = (slideSize * 0.5) / Math.sin(halfAngleRad)
      const translateZ = `${radius * angleCos - depth!}px`
      slideEl.style.transform = `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)`
    }
  }
}
```

#### 使用setTransition赋值过渡时间

```js
export default function EffectCoverflow({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    // swiper提供了customEffect参数用于自定义配置
    customEffect: {
      depth: 300,
      rotate: 50,
      stretch: 1
    } as SwiperOptionsPanorama
  })

    const setTranslate = () => {
    const params = (swiper.params as SwiperOptionsPanorama)
      .customEffect as PanoramaEffectOptions
    const sizesGrid = swiper.slidesSizesGrid
    const { depth, rotate, stretch } = params
    const angleRad = (rotate! * Math.PI) / 180
    const halfAngleRad = angleRad / 2
    const angleModifier = 1 / (180 / rotate!)

    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i]
      const slideProgress = (slideEl as SwiperItemInstance).progress
      const slideSize = sizesGrid[i]
      const progressModifier = swiper.params.centeredSlides
        ? 0
        : ((swiper.params.slidesPerView as number) - 1) * 0.5
      const modifiedProgress = slideProgress + progressModifier
      const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI)
      const translateX = `${modifiedProgress * ((stretch! * slideSize) / 3) * angleCos}px`
      const rotateY = modifiedProgress * rotate!
      const radius = (slideSize * 0.5) / Math.sin(halfAngleRad)
      const translateZ = `${radius * angleCos - depth!}px`
      slideEl.style.transform = `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)`
    }
  }

    const setTransition = (duration: number) => { // [!code ++]
    swiper.slides.forEach((el: { style: { transitionDuration: string } }) => {
      el.style.transitionDuration = `${duration}ms`
    })
  }
}
```

#### 使用effectInit初始化轮播效果

swiper内部提供了`effectInit`方法。

```js
export default function EffectCoverflow({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  ...
  effectInit({  // [!code ++]
    effect: 'panorama',  // 轮播效果名称
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  })
}
```

这样，整个模块的编写就完成了。

### 使用模块 {#make-modules-detail-step5}

通过引入`effect-panorama.ts`文件后，配置`:modules="[EffectPanorama]"`后，设置`effect`为`panorama`即可使用模块。（与其他模块使用方式一致）

<DemoBlock expanded>
<z-swiper grabCursor loop slidesPerView="2" centeredSlides effect="panorama" :modules="modules">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor loop slidesPerView="2" centeredSlides
 effect="panorama" :modules="modules">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

#### 自定义参数实现反向全景 {#make-modules-detail-step6}

swiper提供了`customEffect`配置，用于接收自定的轮播效果中的参数。

通过将`rotate`旋转定义为负数，从而实现反向全景轮播。

<DemoBlock expanded>
<z-swiper grabCursor loop :slidesPerView="2" centeredSlides effect="panorama" :customEffect="{rotate:-50,depth: 0}" :modules="modules">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor loop :slidesPerView="2" centeredSlides effect="panorama"
 :customEffect="{rotate:-50,depth: 0}" :modules="modules">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

<style lang="scss">
    @use "../.vitepress/theme/components/ExampleMethods/effect-panorama/effect-panorama.scss"
</style>

### 完整代码

```js
// effect-panorama.ts

import effectInit from '@zebra-ui/swiper/components/shared/effect-init'
import type { SwiperInterface } from '@zebra-ui/swiper/types/swiper-class'
import type { SwiperOptions } from '@zebra-ui/swiper/types/swiper-options'
import type { SwiperItemInstance } from '@zebra-ui/swiper/types/swiper-item-instance'

export interface PanoramaEffectOptions {
  depth?: number
  rotate?: number
  stretch?: number
}

interface SwiperOptionsPanorama extends SwiperOptions {
  customEffect?: PanoramaEffectOptions
}

export default function EffectPanorama({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    customEffect: {
      depth: 300,
      rotate: 50,
      stretch: 1
    } as SwiperOptionsPanorama
  })

  const setTranslate = () => {
    const params = (swiper.params as SwiperOptionsPanorama)
      .customEffect as PanoramaEffectOptions
    const sizesGrid = swiper.slidesSizesGrid
    const { depth, rotate, stretch } = params
    const angleRad = (rotate! * Math.PI) / 180
    const halfAngleRad = angleRad / 2
    const angleModifier = 1 / (180 / rotate!)

    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i]
      const slideProgress = (slideEl as SwiperItemInstance).progress
      const slideSize = sizesGrid[i]
      const progressModifier = swiper.params.centeredSlides
        ? 0
        : ((swiper.params.slidesPerView as number) - 1) * 0.5
      const modifiedProgress = slideProgress + progressModifier
      const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI)
      const translateX = `${modifiedProgress * ((stretch! * slideSize) / 3) * angleCos}px`
      const rotateY = modifiedProgress * rotate!
      const radius = (slideSize * 0.5) / Math.sin(halfAngleRad)
      const translateZ = `${radius * angleCos - depth!}px`
      slideEl.style.transform = `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)`
    }
  }

  const setTransition = (duration: number) => {
    swiper.slides.forEach((el: { style: { transitionDuration: string } }) => {
      el.style.transitionDuration = `${duration}ms`
    })
  }

  effectInit({
    effect: 'panorama',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  })
}
```

```css
/* effect-panorama.scss */
.swiper-panorama {
  overflow: visible;
  .swiper-slide {
    backface-visibility: hidden;
  }
}
```

## 轮播效果征集 {#collection-of-broadcast-effect}

分享制作的轮播效果，将有机会被`zebra-swiper`收录并署名。

可通过群聊联系我们：[群聊](/guide/introduce.html#communication-group)。
