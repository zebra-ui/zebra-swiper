# 组件

`zebra-swiper`中内置的组件包括：

## z-swiper

::: tip z-swiper <Badge type="tip" text="核心组件" />
swiper的主容器
:::

::: tip z-swiper-item <Badge type="tip" text="核心组件" />
swiper的子容器，通常每个item代表一个轮播块。与`z-swiper`搭配使用。
:::

<script setup>
  import {
   ref
  } from 'vue';
  import { Navigation,Pagination,Scrollbar } from "@zebra-ui/swiper/modules"
  const list = ref(Array.from({
   length: 5
  }).map((item, index) => {
    return {
     text: `Slide ${index + 1}`,
     id: index + 1
    }
   }
  ))
  const modules = ref([Navigation,Pagination,Scrollbar])
</script>

<DemoBlock expanded>
<z-swiper grabCursor>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor>
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    // [!code ++]
    <view class="swiper-item"> {{item.text}} </view>
  </z-swiper-item>
  // [!code ++]
</z-swiper>
// [!code ++]
```

  </template>

</DemoBlock>

## z-swiper-shadow

::: info z-swiper-shadow
为3D轮播提供阴影效果。开发者不需要关注此组件。
:::

## z-swiper-native

::: info z-swiper-native
函数式组件（该组件仅支持web平台，如果你的项目只需兼容`h5`，推荐使用此组件）
:::

::: info z-swiper-item-native
函数式组件的子容器，与`z-swiper-native`搭配使用。
:::

<DemoBlock expanded>

<z-swiper-native grabCursor>
  <z-swiper-item-native v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item-native>
</z-swiper-native>

<template #code>

```html
<z-swiper-native grabCursor>
  // [!code ++]
  <z-swiper-item-native v-for="(item, index) in list" :key="item.id">
    // [!code ++]
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item-native>
  // [!code ++]
</z-swiper-native>
// [!code ++]
```

</template>

</DemoBlock>

## z-navigation

::: info z-navigation
swiper内置的切换器组件，开发者无需关注。
:::

<DemoBlock expanded>

<z-swiper grabCursor navigation :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor navigation :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
import { ref } from 'vue'
import { Navigation } from '@zebra-ui/swiper/modules' // [!code ++]
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
const modules = ref([Navigation]) // [!code ++]
</script>
```

```css
<style lang="scss">
    @use "@zebra-ui/swiper/modules/navigation/navigation.scss"; // [!code ++]
</style>
```

</template>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/navigation/navigation.scss";
</style>

</DemoBlock>

## z-pagination

::: info z-pagination
swiper内置的分页器组件，开发者无需关注。
:::

<DemoBlock expanded>

<z-swiper grabCursor pagination :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor pagination :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
import { ref } from 'vue'
import { Pagination } from '@zebra-ui/swiper/modules' // [!code ++]
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
const modules = ref([Pagination]) // [!code ++]
</script>
```

```css
<style lang="scss">
    @use "@zebra-ui/swiper/modules/pagination/pagination.scss"; // [!code ++]
</style>
```

</template>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/pagination/pagination.scss";
</style>

</DemoBlock>

## z-scrollbar

::: info z-scrollbar
swiper内置的滚动条组件，开发者无需关注。
:::

<DemoBlock expanded>

<z-swiper grabCursor scrollbar :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor scrollbar :modules="modules">
  // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
import { ref } from 'vue'
import { Scrollbar } from '@zebra-ui/swiper/modules' // [!code ++]
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
const modules = ref([Scrollbar]) // [!code ++]
</script>
```

```css
<style lang="scss">
    @use "@zebra-ui/swiper/modules/scrollbar/scrollbar.scss"; // [!code ++]
</style>
```

</template>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/scrollbar/scrollbar.scss";
</style>

</DemoBlock>
