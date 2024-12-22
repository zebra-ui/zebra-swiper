---
outline: deep
---

# 滚动条

为轮播图提供了一个可视化的滚动条，用户可以通过拖动滚动条来快速浏览幻灯片内容。

<script setup>
  import {
   ref
  } from 'vue';
  import {
  Scrollbar
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
  const modules = ref([Scrollbar])

  const swiperInstance = ref({})

  const onSwiper = (swiper, name)=>{

    swiperInstance.value[name] = swiper;

  }
</script>

<style lang="scss">
    @use "@zebra-ui/swiper/modules/scrollbar/scrollbar.scss";
</style>

## 引入

<!--@include: ./../.vitepress/mixins/modulesTip.md-->

```vue
<script lang="ts" setup>
import { Scrollbar } from '@zebra-ui/swiper/modules'

const modules = ref([Scrollbar])
</script>
```

```css
<style lang="scss">
    @use "@zebra-ui/swiper/modules/scrollbar/scrollbar.scss";
</style>
```

## 配置

### scrollbar

设置为 `true` 开启滚动条。

<ComponentInfo type="Boolean, Object" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor scrollbar :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor scrollbar :modules="modules"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### enabled

是否启用滚动条。

<ComponentInfo type="boolean" value="false"></ComponentInfo>

```html
<z-swiper grabCursor :scrollbar="{enabled:true}" :modules="modules"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

### draggable

是否允许拖动滚动条

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :scrollbar="{draggable:true}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :scrollbar="{draggable:true}" :modules="modules"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### dragSize

滚动条可拖动元素的大小（单位：px）

<ComponentInfo type="number,'auto'" value="auto"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :scrollbar="{dragSize:200}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :scrollbar="{dragSize:200}" :modules="modules"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### hide

是否在操作后自动隐藏滚动条。

<ComponentInfo type="boolean" value="false"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :scrollbar="{hide:true}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<z-swiper grabCursor :scrollbar="{hide:true}" :modules="modules"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

### snapOnRelease

拖动滚动条后是否贴合边缘

<ComponentInfo type="boolean" value="true"></ComponentInfo>

<DemoBlock expanded>
<z-swiper grabCursor :scrollbar="{draggable:true,snapOnRelease:false}" :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html{3}
<z-swiper
  grabCursor
  :scrollbar="{draggable:true,snapOnRelease:false}"
  :modules="modules"
>
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

  </template>

</DemoBlock>

## 方法

### destroy

销毁滚动条

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['destroy'].scrollbar.destroy()"
>销毁滚动条</DemoOprate>
```

### init

初始化滚动条

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['init'].scrollbar.init()"
>初始化滚动条</DemoOprate>
```

### updateSize

更新滚动条尺寸

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['updateSize'].scrollbar.updateSize()"
>更新滚动条尺寸</DemoOprate>
```

### setTranslate

更新滚动条的位置

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['setTranslate'].scrollbar.setTranslate()"
>更新滚动条的位置</DemoOprate>
```

## 事件

### scrollbarDragStart

拖动滚动条开始时触发

```html
<z-swiper @scrollbarDragStart="onSwiperScrollbarDragStart"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperScrollbarDragStart = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### scrollbarDragMove

拖动滚动条过程中触发

```html
<z-swiper @scrollbarDragMove="onSwiperScrollbarDragMove"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperScrollbarDragMove = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

### scrollbarDragEnd

拖动滚动条释放时触发

```html
<z-swiper @scrollbarDragEnd="onSwiperScrollbarDragEnd"> // [!code ++]
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperScrollbarDragEnd = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                             |       默认值       | 描述                   |
| -------------------------------- | :----------------: | ---------------------- |
| --swiper-scrollbar-border-radius |        10px        | 滚动条的圆角半径       |
| --swiper-scrollbar-top           |        auto        | 滚动条距顶部的距离     |
| --swiper-scrollbar-bottom        |        4px         | 滚动条距底部的距离     |
| --swiper-scrollbar-left          |        auto        | 滚动条距左侧的距离     |
| --swiper-scrollbar-right         |        4px         | 滚动条距右侧的距离     |
| --swiper-scrollbar-sides-offset  |         1%         | 滚动条两侧的偏移量     |
| --swiper-scrollbar-bg-color      | rgba(0, 0, 0, 0.1) | 滚动条背景色           |
| --swiper-scrollbar-drag-bg-color | rgba(0, 0, 0, 0.5) | 滚动条拖动部分的背景色 |
| --swiper-scrollbar-size          |        4px         | 滚动条的尺寸           |

使用示例：

::: tip
示例为了方便演示直接使用style设置。项目中推荐绑定到class上。
:::

<DemoBlock expanded style="--swiper-scrollbar-size:14px;">
<z-swiper grabCursor scrollbar :modules="modules">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```html
<div style="--swiper-scrollbar-size:14px;"> // [!code ++]
  <z-swiper grabCursor scrollbar :modules="modules">
    <z-swiper-item v-for="(item, index) in list" :key="item.id">
      <DemoItem :text="item.text"></DemoItem>
    </z-swiper-item>
  </z-swiper>
</div>
```

  </template>

</DemoBlock>
