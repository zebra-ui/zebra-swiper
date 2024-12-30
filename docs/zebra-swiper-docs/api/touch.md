# 触摸滑动

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
</script>

## allowSlideNext

设置为false可禁用滑动到下一个滑动方向（向右或向下）

<ComponentInfo type="Boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :initialSlide="2" :allowSlideNext="false">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :initialSlide="2" :allowSlideNext="false"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## allowSlidePrev

设置为 false 可禁用滑动至上一个方向（向左或向上），从而限制用户的滑动操作。

<ComponentInfo type="Boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :initialSlide="2" :allowSlidePrev="false">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :initialSlide="2" :allowSlidePrev="false"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## allowTouchMove

设置为 false 时，切换幻灯片的唯一方式是使用外部 API 函数，如 slidePrev 或 slideNext。

<ComponentInfo type="Boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :allowTouchMove="false">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :allowTouchMove="false"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## followFinger

禁用该选项时，Slider 仅会在释放手指后触发动画效果，手指按住时幻灯片不会移动。

<ComponentInfo type="Boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :followFinger="false">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :followFinger="false"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## longSwipesMs

长滑动时，触发滑动至上一张或下一张幻灯片所需的最小持续时间（单位：ms）。

<ComponentInfo type="Number" value="300"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :longSwipesMs="100">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :longSwipesMs="100"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## longSwipesRatio

在长时间滑动时触发切换到下一张/上一张幻灯片的比例。

<ComponentInfo type="Number" value="0.5"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :longSwipesRatio="0.1">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :longSwipesRatio="0.1"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## longSwipes

设置为 false 时，可禁用长滑动操作。

<ComponentInfo type="Boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :longSwipes="false">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :longSwipes="false"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## touchRatio

触摸比例

<ComponentInfo type="Number" value="1"></ComponentInfo>

设置为 `2` 时：
<DemoBlock expanded>
<z-swiper grabCursor :touchRatio="2">
<z-swiper-item v-for="item in list" :key="item.id">
<DemoItem :text="item.text"></DemoItem>
</z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :touchRatio="2"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

设置为 `-1` 时：
<DemoBlock expanded>
<z-swiper grabCursor :touchRatio="-1">
<z-swiper-item v-for="item in list" :key="item.id">
<DemoItem :text="item.text"></DemoItem>
</z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :touchRatio="-1"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## shortSwipes

设置为`false`时，如果滑动距离太短，将不会触发swiper切换。

<ComponentInfo type="Boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :shortSwipes="false">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :shortSwipes="false"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## threshold

滑动的阈值，如果滑动距离小于设置的值，swiper将不会进行切换。

<ComponentInfo type="Number" value="5"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :threshold="100">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :threshold="100"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## touchAngle

滑动角度的阈值，如果滑动的角度大于设置的值，swiper将不会进行响应。

::: tip
滑动角度以 `X` `Y` 轴为基准进行计算。
:::

<ComponentInfo type="Number" value="45"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :touchAngle="5">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :touchAngle="5"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## resistance

当swiper位于第一个或最后一个item时，再次向左/右拖动时的橡皮筋阻力。

设置为`false`时，swiper将不再受边界阻力影响。

<ComponentInfo type="Boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :resistance="false">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :resistance="false"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## resistanceRatio

当swiper位于第一个或最后一个item时，再次向左/右拖动时的橡皮筋阻力比例。值越小，阻力越大。

::: tip
设置为0时，swiper将失去回弹效果
:::

<ComponentInfo type="Number" value="0.85"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :resistanceRatio="0">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :resistanceRatio="0"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## preventInteractionOnTransition

开启该选项后，在swiper的动画执行期间，将不能通过任何方法改变swiper的动画状态。

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :speed="5000" preventInteractionOnTransition>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :speed="5000" preventInteractionOnTransition> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>
