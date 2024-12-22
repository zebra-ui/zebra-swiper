---
outline: deep
---

# 虚拟节点

用于处理大量幻灯片时的性能优化。

它只渲染当前可见的幻灯片，而不是一次性渲染所有幻灯片，可以显著提高性能。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  Virtual
} from '@zebra-ui/swiper/modules'

  const list = ref([])

  const virtualList = ref(Array.from({
   length: 1000
  }).map((item, index) => {
    return {
     text: `Slide ${index + 1}` ,
     id: index + 1
    }
   }
  ))

  const virtualListToWeb = ref(Array.from({
   length: 1000
  }).map((item, index) => {
    return {
     text: `Slide ${index + 1}` ,
     id: index + 1
    }
   }
  ))

  const modules = ref([Virtual])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{
    swiperInstance.value[name] = swiper;
  }
</script>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/virtual/virtual.scss";
</style>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { Virtual } from '@zebra-ui/swiper/modules'

const modules = ref([Virtual])
</script>
```

```css
<style lang="scss">
    @use "@zebra-ui/swiper/modules/virtual/virtual.scss";
</style>
```

## 全平台兼容式写法 {#virtual-all-platform}

::: warning
使用此模块时，无论任何平台，都需要通过`v-model:list`绑定数据列表，且这个列表作为最终显示的数据列表，初始化时应该为空数组。

需要注意的是，swiper会接管此数据列表，这意味着不可手动操作这个数据列表。

而大量数据的列表则通过`virtualList`传递给swiper。用户应维护此列表，而不是`v-model:list`传给swiper的列表。
:::

### 示例

1000个item节点渲染。可通过控制台观察dom变化。

::: warning
需要注意的是，`swiper-item`需要绑定数据列表中的样式，`:custom-style="item.props.style"`，这个变量是固定的，由swiper组件维护，开发者无需关注。
:::

<DemoBlock expanded>
<z-swiper v-model:list="list" grabCursor virtual :modules="modules" :virtualList="virtualList">
  <z-swiper-item v-for="(item, index) in list" :key="item.id" :custom-style="item.props.style">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper
  v-model:list="list"
  grabCursor
  virtual
  :modules="modules"
  :virtualList="virtualList"
>
  <z-swiper-item
    v-for="(item, index) in list"
    :key="item.id"
    :custom-style="item.props.style"
  >
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
import { ref } from 'vue'
import { Virtual } from '@zebra-ui/swiper/modules'
const list = ref([])
const virtualList = ref(
  Array.from({
    length: 1000
  }).map((item, index) => {
    return {
      text: `Slide ${index + 1}`,
      id: index + 1
    }
  })
)
const modules = ref([Virtual])
</script>
```

  </template>

</DemoBlock>

## web平台专用 {#virtual-to-web}

::: tip
如果只需兼容web平台，推荐使用[z-swiper-native](/api/components.html#z-swiper-native)组件。

使用此组件不需要向swiper传递数据，直接引入并传递`modules`后即可循环数据。
:::

### 示例

1000个item节点渲染。可通过控制台观察dom变化。

<DemoBlock expanded>
<z-swiper-native grabCursor virtual :modules="modules">
  <z-swiper-item-native v-for="(item, index) in virtualListToWeb" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item-native>
</z-swiper-native>

<template #code>

```html
<z-swiper-native grabCursor virtual :modules="modules">
  <z-swiper-item-native
    v-for="(item, index) in virtualListToWeb"
    :key="item.id"
  >
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item-native>
</z-swiper-native>
```

```vue
<script setup>
import { ref } from 'vue'
import { Virtual } from '@zebra-ui/swiper/modules'
const virtualListToWeb = ref(
  Array.from({
    length: 1000
  }).map((item, index) => {
    return {
      text: `Slide ${index + 1}`,
      id: index + 1
    }
  })
)
const modules = ref([Virtual])
</script>
```

  </template>

</DemoBlock>
