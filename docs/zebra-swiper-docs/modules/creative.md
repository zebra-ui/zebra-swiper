---
outline: deep
---

# 创意效果

结合各种旋转、缩放、透明度和位置变化，创造出丰富的动画效果。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  EffectCreative
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
  const modules = ref([EffectCreative])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{
    swiperInstance.value[name] = swiper;
  }
</script>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-creative/effect-creative.scss";
</style>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

::: code-group

```vue [npm]
<script lang="ts" setup>
import { EffectCreative } from '@zebra-ui/swiper/modules'

const modules = ref([EffectCreative])
</script>
```

```vue [uni_modules]
<script lang="ts" setup>
import { EffectCreative } from '@/uni_modules/zebra-swiper/modules'

const modules = ref([EffectCreative])
</script>
```

:::

::: code-group

```css [npm]
<style lang="scss">
    @use "@zebra-ui/swiper/modules/effect-creative/effect-creative.scss";
</style>
```

```css [uni_modules]
<style lang="scss">
    @use "@/uni_modules/zebra-swiper/modules/effect-creative/effect-creative.scss";
</style>
```

:::

## 配置

### prev && next

前一张和后一张轮播item的动画效果

<ComponentInfo type="Object" value="-"></ComponentInfo>

#### translate

<ComponentInfo type="(string | number)[]" value="-"></ComponentInfo>

- 描述：幻灯片在 X、Y、Z 轴上的位移。
- 作用：控制幻灯片在三维空间中的位置。

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="creative" :modules="modules" :creativeEffect="{
    prev:{
        translate:['-100%',50,-100]
    },
    next:{
        translate:['100%',150,100]
    }
  }" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="creative"
  :modules="modules"
  :creativeEffect="{
    prev:{
        translate:['-100%',50,-100]
    },
    next:{
        translate:['100%',150,100]
    }
  }"
  :custom-style="{width:'200px'}"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

#### rotate

<ComponentInfo type="number[]" value="-"></ComponentInfo>

- 描述：幻灯片在 X、Y、Z 轴上的旋转角度。
- 作用：控制幻灯片的旋转效果。

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="creative" :modules="modules" :creativeEffect="{
    prev:{
        translate:['-100%',0,0],
        rotate:[0,0,100]
    },
    next:{
        translate:['100%',0,0],
        rotate:[0,0,100]
    }
  }" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="creative"
  :modules="modules"
  :creativeEffect="{
    prev:{
        translate:['-100%',0,0],
        rotate:[0,0,100]
    },
    next:{
        translate:['100%',0,0],
        rotate:[0,0,100]
    }
  }"
  :custom-style="{width:'200px'}"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

#### scale

<ComponentInfo type="number" value="-"></ComponentInfo>

- 描述：幻灯片的缩放比例。
- 作用：调整幻灯片的大小。

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="creative" :modules="modules" :creativeEffect="{
    prev:{
        translate:['-100%',0,0],
        scale:0.5
    },
    next:{
        translate:['100%',0,0],
        scale:10
    }
  }" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="creative"
  :modules="modules"
  :creativeEffect="{
    prev:{
        translate:['-100%',0,0],
        scale:0.5
    },
    next:{
        translate:['100%',0,0],
        scale:10
    }
  }"
  :custom-style="{width:'200px'}"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

#### opacity

<ComponentInfo type="number" value="-"></ComponentInfo>

- 描述：幻灯片的透明度。
- 作用：控制幻灯片的可见性。

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="creative" :modules="modules" :creativeEffect="{
    prev:{
        translate:['-100%',0,0],
        opacity:0.1
    },
    next:{
        translate:['100%',0,0],
        opacity:0.1
    }
  }" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="creative"
  :modules="modules"
  :creativeEffect="{
    prev:{
        translate:['-100%',0,0],
        opacity:0.1
    },
    next:{
        translate:['100%',0,0],
        opacity:0.1
    }
  }"
  :custom-style="{width:'200px'}"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

#### origin

<ComponentInfo type="string" value="-"></ComponentInfo>

- 描述：旋转和缩放的原点。
- 作用：指定动画的中心点。

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="creative" :modules="modules" :creativeEffect="{
    prev:{
        translate:['-100%',0,0],
        scale:0,
        origin:'left top'
    },
    next:{
        translate:['100%',0,0],
        scale:0,
        origin:'right bottom'
    }
  }" :custom-style="{width:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="creative"
  :modules="modules"
  :creativeEffect="{
    prev:{
        translate:['-100%',0,0],
        scale:0,
        origin:'left top'
    },
    next:{
        translate:['100%',0,0],
        scale:0,
        origin:'right bottom'
    }
  }"
  :custom-style="{width:'200px'}"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

#### shadow

<ComponentInfo type="boolean" value="-"></ComponentInfo>

- 描述：幻灯片item的阴影。
- 作用：控制是否显示幻灯片阴影。

```html
<z-swiper
  grabCursor
  effect="creative"
  :modules="modules"
  :creativeEffect="{
    prev:{
        translate:['-100%',0,0],
        shadow:true
    },
    next:{
        translate:['100%',0,0],
        shadow:true
    }
  }"
  :custom-style="{width:'200px'}"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

### limitProgress

将进度/偏移量限制为侧幻灯片的数量。

如果为 1，则上一张/下一张幻灯片之后的所有幻灯片都将具有相同的状态。

如果为 2，则第二张前/后活动幻灯片之后的所有幻灯片都将具有相同的状态

<ComponentInfo type="number" value="1"></ComponentInfo>

<DemoBlock expanded>
<div style="padding:40px;">
<z-swiper grabCursor effect="creative" :slidesPerView="3" :modules="modules" :creativeEffect="{
    prev:{
        translate:['-100%',0,100]
    },
    next:{
        translate:['100%',0,-100]
    },
    limitProgress:2
  }" :custom-style="{width:'300px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
</div>
<template #code>

```html
<z-swiper
  grabCursor
  effect="creative"
  :slidesPerView="3"
  :modules="modules"
  :creativeEffect="{
    prev:{
        translate:['-100%',0,100]
    },
    next:{
        translate:['100%',0,-100]
    },
    limitProgress:2
  }"
  :custom-style="{width:'300px'}"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### perspective

如果你的自定义变换需要 3D 变换（translateZ、rotateX、rotateY），则需要启用此参数。

::: tip
默认启用。
:::

<ComponentInfo type="boolean" value="true"></ComponentInfo>

### progressMultiplier

变形强度。设置的其他参数将会以此值为基准，进行倍数增长。

<ComponentInfo type="number" value="1"></ComponentInfo>

### shadowPerProgress

是否开启阴影跟随progress。此功能需要和limitProgress一起使用。

默认false，所有阴影透明度都是1。如果开启并设置limitProgress为4，那么每个Slide的阴影的透明度将变成0.25、0.5、0.75、1，颜色逐渐加深。

<ComponentInfo type="boolean" value="false"></ComponentInfo>
