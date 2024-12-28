# 轮播块

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

## slidesPerView

每个视图的幻灯片数量（在滑块容器中同时可见的幻灯片数量）。

<ComponentInfo type="Number" value="1" :options="['auto']"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :slidesPerView="2">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :slidesPerView="2"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

当设置为`auto`是，将根据宽度自动计算显示的数量。

:::warning
此时需要设置`z-swiper-item`的宽度。
:::

<DemoBlock expanded>
<z-swiper grabCursor slidesPerView="auto">
  <z-swiper-item v-for="item in list" :key="item.id" :custom-style="{width:'40%'}">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor slidesPerView="auto"> // [!code ++]
  <z-swiper-item
    v-for="item in list"
    :key="item.id"
    :custom-style="{width:'40%'}"
  >
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## centeredSlides

如果设置为 true，则活动幻灯片将居中显示，而不是始终位于左侧。

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :slidesPerView="3" centeredSlides>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :slidesPerView="3" centeredSlides> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## centeredSlidesBounds

如果设置为 true，则活动幻灯片将居中显示，并且在滑块的开头和结尾不会添加间隙。此选项需要与 `centeredSlides` 搭配使用。

:::warning
不可以与loop或pagination同时使用
:::

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :slidesPerView="3" centeredSlides centeredSlidesBounds>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :slidesPerView="3" centeredSlides centeredSlidesBounds> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## slidesPerGroup

设置swiper每一组的数量，设置后可启用分组滑动。

<ComponentInfo type="Number" value="1"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :slidesPerView="2" :slidesPerGroup="2">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :slidesPerView="2" :slidesPerGroup="2"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## slidesPerGroupSkip

如果 slidesPerGroupSkip 等于 0（默认值），则所有幻灯片都会参与分组，行为与未进行更改时相同。

如果 slidesPerGroupSkip 大于或等于 1，则前 X 张幻灯片将被视为单独的组，其后的幻灯片则按照 slidesPerGroup 的值进行分组。

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :slidesPerView="2" :slidesPerGroup="2" :slidesPerGroupSkip="1">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html{3-5}
<z-swiper
  grabCursor
  :slidesPerView="2"
  :slidesPerGroup="2"
  :slidesPerGroupSkip="1"
>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## slidesPerGroupAuto

该参数仅适用于 slidesPerView: 'auto' 和 slidesPerGroup: 1 的情况。启用后，在调用 .slideNext() 和 .slidePrev() 方法、点击导航按钮以及自动播放时，它将跳过视图中的所有幻灯片。

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor slidesPerView="auto" slidesPerGroupAuto>
  <z-swiper-item v-for="item in list" :key="item.id" :custom-style="{width:'40%'}">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor slidesPerView="auto" slidesPerGroupAuto> // [!code ++]
  <z-swiper-item
    v-for="item in list"
    :key="item.id"
    :custom-style="{width:'40%'}"
  >
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## spaceBetween

设置轮播块之前的距离。单位`px`

<ComponentInfo type="Number" value="0"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :slidesPerView="2" :spaceBetween="10">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :slidesPerView="2" :spaceBetween="10"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## slidesOffsetBefore

在容器的开头（所有幻灯片之前）添加额外的幻灯片偏移量（单位：px）。

<ComponentInfo type="Number" value="0"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :slidesPerView="2" :slidesOffsetBefore="30">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :slidesPerView="2" :slidesOffsetBefore="30"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## slidesOffsetAfter

在容器的结尾（所有幻灯片之后）添加额外的幻灯片偏移量（单位：px）。

<ComponentInfo type="Number" value="0"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :slidesPerView="2" :slidesOffsetAfter="30">
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :slidesPerView="2" :slidesOffsetAfter="30"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## normalizeSlideIndex

标准化index。

正常情况下，swiper的下标始终为显示区域最左边的item下标。

在关闭centeredSlides后，当前下标将变为实际滑动的下标。

```html
<z-swiper grabCursor :normalizeSlideIndex="false"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

## centerInsufficientSlides

启用后，如果幻灯片数量少于 slidesPerView，则会居中显示幻灯片。此选项不适用于循环模式。

<ComponentInfo type="Boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :slidesPerView="8" centerInsufficientSlides>
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :slidesPerView="8" centerInsufficientSlides> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## 案例

### 自适应居中

本案例通过 `slidesPerView` 和 `centeredSlides` 实现轮播前后各显示另一部分的效果。

<DemoBlock expanded>
<z-swiper grabCursor slidesPerView="auto" centeredSlides :spaceBetween="10">
  <z-swiper-item v-for="item in list" :key="item.id" :custom-style="{width:'80%'}">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :slidesPerView="auto" centeredSlides :spaceBetween="10"> // [!code ++]
  <z-swiper-item
    v-for="item in list"
    :key="item.id"
    :custom-style="{width:'80%'}"
  >
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>
