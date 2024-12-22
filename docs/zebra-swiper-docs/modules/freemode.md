---
outline: deep
---

# 自由滑动模式

自由滑动模式将脱离swiper的边界贴合。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  FreeMode
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
  const modules = ref([FreeMode])

  const swiperInstance = ref({})

  const onSwiper = (swiper,name)=>{
    swiperInstance.value[name] = swiper;
  }
</script>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { FreeMode } from '@zebra-ui/swiper/modules'

const modules = ref([FreeMode])
</script>
```

## 配置

### freeMode

设置为`true`开启自由滑动。

<ComponentInfo type="Boolean,Object" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor freeMode :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor freeMode :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### enabled

是否启用自由滑动。

```html
<z-swiper grabCursor :freeMode="{enabled:true}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

### momentum

自由滑动默认情况下，在释放滑块后滑动将继续移动一段时间。关闭后，释放滑块将立即停止移动。

<ComponentInfo type="boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :freeMode="{momentum:false}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :freeMode="{momentum:false}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### momentumBounce

是否开启swiper的撞击边缘反弹效果。

<ComponentInfo type="boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :freeMode="{momentumBounce:false}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :freeMode="{momentumBounce:false}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### momentumBounceRatio

设置swiper的撞击边缘反弹效果强度

<ComponentInfo type="number" value="1"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :freeMode="{momentumBounceRatio:5}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :freeMode="{momentumBounceRatio:5}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### momentumRatio

swiper滑动释放后，滑动的距离。

<ComponentInfo type="number" value="1"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :freeMode="{momentumRatio:5}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :freeMode="{momentumRatio:5}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### momentumVelocityRatio

swiper滑动释放后，滑动的速度。

<ComponentInfo type="number" value="1"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :freeMode="{momentumVelocityRatio:5}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :freeMode="{momentumVelocityRatio:5}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### minimumVelocity

触发自由模式动量所需的最小触摸移动速度，低于此值时，swiper将不会进行惯性移动。

<ComponentInfo type="number" value="0.02"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :freeMode="{minimumVelocity:1}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :freeMode="{minimumVelocity:1}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### sticky

开启后，自由模式也可以进行边界贴合

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :freeMode="{sticky:true}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :freeMode="{sticky:true}" :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

 </template>

</DemoBlock>
