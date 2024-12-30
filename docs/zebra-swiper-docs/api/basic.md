# 基础

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

## initialSlide

:::warning
此配置仅在初始化swiper时使用，切勿与切换swiper的概念混淆。
:::

默认情况下，z-swiper 初始化时会显示第一个 Slide。如果需要在初始化时显示其他特定的 Slide，可以通过指定初始索引来实现。

<ComponentInfo type="Number" value="0"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :initialSlide="2">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :initialSlide="2"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## direction

:::warning
此配置需设置`z-swiper`高度，或给父元素设置高度。
:::

Swiper 的滑动方向可根据需求进行设置，支持水平方向切换（horizontal）和垂直方向切换（vertical），灵活适配不同场景。

<ComponentInfo type="String" value="horizontal" :options="['horizontal','vertical']"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor direction="vertical" :custom-style="{height:'200px'}">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor direction="vertical" :custom-style="{height:'200px'}"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## enabled

Swiper 的初始启用状态。当 Swiper 被禁用时，它将隐藏所有导航元素，并且不会响应任何事件或交互。

:::warning
此配置只设置初始化状态。动态变更请使用 enable 和 disable 方法。
:::

<ComponentInfo type="Boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :enabled="false">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :enabled="false"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## grabCursor

该选项为 Swiper 使用者提供了贴心的用户体验。当设置为 true 时，鼠标悬停在 Swiper 上时，指针会变成手掌形状；拖动时，指针则会变成抓手形状，提升操作的直观性和便捷性。

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

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

## autoHeight

设置为 true 时，Slider 容器会自动适配当前激活幻灯片的高度。

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor autoHeight>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text" :height="`${(index+1) * 50}px`"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor autoHeight> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text" :height="`${(index+1) * 50}px`"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## cssMode <Badge type="tip" text="Web-H5" />

:::warning
开启后，web-pc不支持拖动。web-h5可滑动。小程序和App暂不支持该配置。
:::

开启此配置后，将由`CSS Scroll Snap API`接管轮播。swiper中大多功能都不再支持，但在简单的轮播中，可以带来更好的性能。

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor cssMode>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor cssMode> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## height

:::warning
设置swiper高度请使用`custom-style`。
:::

强制设置swiper容器的高度。仅在隐藏时初始化swiper时才有用。

<ComponentInfo type="Number" value="-"></ComponentInfo>

```html
<z-swiper grabCursor :height="100"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

## rewind

将此配置设置为 true 启用倒带模式。

启用后，在最后一个幻灯片上点击“下一步”导航按钮（或调用 .slideNext()）将滑动回第一个幻灯片。
在第一个幻灯片上点击“上一步”导航按钮（或调用 .slidePrev()）将滑动到最后一个幻灯片。

:::warning
不可与`loop`同时使用。
:::

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor rewind>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor rewind> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## speed

切换速度是指 Slider 自动滑动从开始到结束所需的时间（单位：ms），同时也指触摸滑动释放后到与目标位置贴合所用的时间。

<ComponentInfo type="Number" value="300"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :speed="3000">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :speed="3000"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## width

:::warning
设置swiper宽度请使用`custom-style`。
:::

强制设置swiper容器的宽度。仅在隐藏时初始化swiper时才有用。

<ComponentInfo type="Number" value="-"></ComponentInfo>

```html
<z-swiper grabCursor :width="100"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

## modules

::: tip
所有模块`modules`功能都需要通过此参数配置。
:::

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

<ComponentInfo type="Array" value="-"></ComponentInfo>

```html
<z-swiper grabCursor autoplay :modules="[AutoPlay]"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

## nested <Badge type="tip" text="web" />

当存在嵌套swiper时，设置子swiper的nested为true后，滑动子swiper将不影响父swiper的滑动。

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor>
  <z-swiper-item>
    <DemoItem text="ParentSlide 1"></DemoItem>
  </z-swiper-item>
  <z-swiper-item>
    <z-swiper grabCursor nested :resistanceRatio="0">
       <z-swiper-item v-for="item in list" :key="item.id">
      <DemoItem :text="item.text"></DemoItem>
       </z-swiper-item>
     </z-swiper>
  </z-swiper-item>
   <z-swiper-item>
    <DemoItem text="ParentSlide 2"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor>
  <z-swiper-item>
    <DemoItem text="ParentSlide 1"></DemoItem>
  </z-swiper-item>
  <z-swiper-item>
    <z-swiper grabCursor nested :resistanceRatio="0">
      <z-swiper-item v-for="item in list" :key="item.id">
        <DemoItem :text="item.text"></DemoItem>
      </z-swiper-item>
    </z-swiper>
  </z-swiper-item>
  <z-swiper-item>
    <DemoItem text="ParentSlide 2"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>
