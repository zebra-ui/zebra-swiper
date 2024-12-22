---
outline: deep
---

# 自动播放

自动播放指的是轮播图组件能够在不需要用户操作的情况下，自动切换到下一个幻灯片。

::: tip
不要与无限循环 `loop` 混淆。
:::

<script setup>
  import {
   ref
  } from 'vue';
  import {
  Autoplay
} from '@zebra-ui/swiper/modules'

  const list = ref(Array.from({
   length: 5
  }).map((item, index) => {
    return {
     text: `Slide ${index + 1}`,
     id: index + 1
    }
   }
  ))
  const modules = ref([Autoplay])

  const swiperInstance = ref({})

  const onSwiper = (swiper,name)=>{
    swiperInstance.value[name] = swiper;
  }
</script>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { Autoplay } from '@zebra-ui/swiper/modules'

const modules = ref([Autoplay])
</script>
```

## 配置

### autoplay

设置为`true`开启自动播放。

<ComponentInfo type="Boolean,Object" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor autoplay :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor autoplay :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### delay

自动播放的时间间隔，单位（ms）

<ComponentInfo type="number" value="3000"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :autoplay="{ delay:500 }" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :autoplay="{ delay:500 }" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### disableOnInteraction

用户操作后是否禁用自动播放

:::tip
2.x版本中，该配置的默认值为`true`。3.x中更改为`false`。
:::

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :autoplay="{ disableOnInteraction: true }" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  :autoplay="{ disableOnInteraction: true }"
  :modules="modules"
>
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

</template>
</DemoBlock>

### pauseOnMouseEnter <Badge type="info" text="only web" />

鼠标悬停时是否暂停自动播放

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :autoplay="{ pauseOnMouseEnter: true }" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :autoplay="{ pauseOnMouseEnter: true }" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

</template>
</DemoBlock>

### reverseDirection

是否开启反向自动播放

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :autoplay="{ reverseDirection: true }" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :autoplay="{ reverseDirection: true }" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

</template>
</DemoBlock>

### stopOnLastSlide

是否在最后一页停止自动播放（在循环模式下无效）

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :autoplay="{ stopOnLastSlide: true }" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :autoplay="{ stopOnLastSlide: true }" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

</template>
</DemoBlock>

### waitForTransition

当swiper处于动画状态中时，是否等待过渡完成后再开始自动播放计时

<ComponentInfo type="boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :autoplay="{ waitForTransition: false }" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  grabCursor
  :autoplay="{ waitForTransition: false }"
  :modules="modules"
>
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

</template>
</DemoBlock>

## 属性

### paused & running & timeLeft

- paused：自动播放是否处于暂停状态
- running：autoplay是否处于运行状态
- timeLeft：暂停状态下切换的剩余时间

<DemoBlock expanded>
<div style="padding:20px;">
autoplay：{{swiperInstance['paused'] && swiperInstance['paused'].autoplay}}
</div>
<z-swiper grabCursor autoplay :modules="modules" @swiper="onSwiper($event,'paused')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```js
autoplay：{{swiperInstance['paused'] && swiperInstance['paused'].autoplay}}
```

  </template>

</DemoBlock>

## 方法

### pause

暂停自动播放

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['pause'].autoplay.pause()">暂停自动播放</DemoOprate>
</template>
<z-swiper grabCursor autoplay :modules="modules" @swiper="onSwiper($event,'pause')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['pause'].autoplay.pause()"
>暂停自动播放</DemoOprate>
```

  </template>

</DemoBlock>

### resume

将自动播放从暂停的状态中恢复至播放状态

<DemoBlock expanded>
<template #operate>
<DemoOprate @click="()=>swiperInstance['resume'].autoplay.pause()">暂停自动播放</DemoOprate>
<DemoOprate type="primary" @click="()=>swiperInstance['resume'].autoplay.resume()">恢复自动播放</DemoOprate>
</template>
<z-swiper grabCursor autoplay :modules="modules" @swiper="onSwiper($event,'resume')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['resume'].autoplay.resume()"
>恢复自动播放</DemoOprate>
```

  </template>

</DemoBlock>

### start

开始自动播放

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['start'].autoplay.start()"
>开始自动播放</DemoOprate>
```

### stop

停止自动播放

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['stop'].autoplay.stop()"
>停止自动播放</DemoOprate>
```

## 事件

### autoplay

自动播放发生变化时触发

```html
<z-swiper @autoplay="onSwiperAutoplay">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperAutoplay = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### autoplayPause

暂停时触发

```html
<z-swiper @autoplayPause="onSwiperAutoplayPause">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperAutoplayPause = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### autoplayResume

恢复时触发

```html
<z-swiper @autoplayResume="onSwiperAutoplayResume">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperAutoplayResume = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### autoplayStart

开始时触发

```html
<z-swiper @autoplayStart="onSwiperAutoplayStart">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperAutoplayStart = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### autoplayStop

停止时触发

```html
<z-swiper @autoplayStop="onSwiperAutoplayStop">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperAutoplayStop = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### autoplayTimeLeft

启用自动播放后，事件会持续触发。它包含转换到下一张幻灯片之前的剩余时间（以毫秒为单位）以及与自动播放延迟相关的时间百分比

```html
<z-swiper @autoplayTimeLeft="onSwiperAutoplayTimeLeft">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperAutoplayTimeLeft = (swiper, timeLeft, percentage) => {
  console.log('swiper实例：', swiper, timeLeft, percentage)
}
</script>
```
