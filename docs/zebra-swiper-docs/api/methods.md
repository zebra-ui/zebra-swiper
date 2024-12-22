# 方法

挂载在swiper实例中的方法。

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

  const swiperInstance = ref({})

  const onSwiper = (swiper,name)=>{
    swiperInstance.value[name] = swiper;

  }
</script>

## slideTo

将swiper切换到指定下标

| 参数名称     |   类型    | 必填 | 描述                   |
| ------------ | :-------: | :--: | ---------------------- |
| index        | `number`  |  是  | 目标item的下标         |
| speed        | `number`  |  否  | 切换速度(单位ms)       |
| runCallbacks | `boolean` |  否  | 是否触发transition回调 |

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['slideTo'].slideTo(3)">切换至下标3的item</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'slideTo')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['slideTo'].slideTo(3)"
>切换至下标3的item</DemoOprate>
```

  </template>

</DemoBlock>

## slideToLoop

在`loop`无限循环的情况下将swiper切换到指定下标

| 参数名称     |   类型    | 必填 | 描述                   |
| ------------ | :-------: | :--: | ---------------------- |
| index        | `number`  |  是  | 目标item的下标         |
| speed        | `number`  |  否  | 切换速度(单位ms)       |
| runCallbacks | `boolean` |  否  | 是否触发transition回调 |

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['slideToLoop'].slideToLoop(3)">切换至下标3的item</DemoOprate>
</template>
<z-swiper grabCursor loop @swiper="onSwiper($event,'slideToLoop')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['slideToLoop'].slideToLoop(3)"
>切换至下标3的item</DemoOprate>
```

  </template>

</DemoBlock>

## slideNext

将swiper切换至下一个item

| 参数名称     |   类型    | 必填 | 描述                   |
| ------------ | :-------: | :--: | ---------------------- |
| speed        | `number`  |  否  | 切换速度(单位ms)       |
| runCallbacks | `boolean` |  否  | 是否触发transition回调 |

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['slideNext'].slideNext()">切换至下一个item</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'slideNext')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['slideNext'].slideNext()"
>切换至下一个item</DemoOprate>
```

  </template>

</DemoBlock>

## slidePrev

将swiper切换至上一个item

| 参数名称     |   类型    | 必填 | 描述                   |
| ------------ | :-------: | :--: | ---------------------- |
| speed        | `number`  |  否  | 切换速度(单位ms)       |
| runCallbacks | `boolean` |  否  | 是否触发transition回调 |

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['slidePrev'].slidePrev()">切换至上一个item</DemoOprate>
</template>
<z-swiper grabCursor :initialSlide="3" @swiper="onSwiper($event,'slidePrev')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['slidePrev'].slidePrev()"
>切换至上一个item</DemoOprate>
```

  </template>

</DemoBlock>

## enable & disable

启用和禁用swiper

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['enableAndDisable'].disable()">禁用swiper</DemoOprate>
<DemoOprate type="primary" @click="()=>swiperInstance['enableAndDisable'].enable()">启用swiper</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'enableAndDisable')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['enableAndDisable'].disable()"
>禁用swiper</DemoOprate>
<DemoOprate
  type="primary"
  @click="() => swiperInstance['enableAndDisable'].enable()"
>启用swiper</DemoOprate>
```

  </template>

</DemoBlock>

## destroy

销毁swiper

| 参数名称       |   类型    | 必填 | 描述               |
| -------------- | :-------: | :--: | ------------------ |
| deleteInstance | `boolean` |  否  | 是否销毁swiper实例 |
| cleanupStyles  | `boolean` |  否  | 是否清除swiper样式 |

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['destroy'].destroy()">销毁swiper</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'destroy')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['destroy'].destroy()"
>销毁swiper</DemoOprate>
```

  </template>

</DemoBlock>

## changeDirection

动态切换swiper的滑动方向

| 参数名称  |   类型   | 必填 | 描述                               |
| --------- | :------: | :--: | ---------------------------------- |
| direction | `string` |  否  | 切换的方向 `horizontal` `vertical` |

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['changeDirection'].changeDirection()">切换swiper方向</DemoOprate>
</template>
<z-swiper grabCursor :custom-style="{height:'200px'}" @swiper="onSwiper($event,'changeDirection')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['changeDirection'].changeDirection()"
>切换swiper方向</DemoOprate>
```

  </template>

</DemoBlock>

## getTranslate

获取swiper当前实时的translate

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['getTranslate'].getTranslate()"
>获取当前的translate</DemoOprate>
```

## setTranslate

设置swiper的translate

| 参数名称  |   类型   | 必填 | 描述     |
| --------- | :------: | :--: | -------- |
| translate | `number` |  是  | 单位`px` |

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['setTranslate'].setTranslate(-100)">设置swiper的translate</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'setTranslate')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['setTranslate'].setTranslate(-100)"
>设置swiper的translate</DemoOprate>
```

  </template>

</DemoBlock>

## translateTo

设置transform中的translate位移

| 参数名称        |   类型    | 必填 | 描述                         |
| --------------- | :-------: | :--: | ---------------------------- |
| translate       | `number`  |  是  | 位移的值，单位`px`           |
| speed           | `number`  |  是  | 动画持续时间，单位`ms`       |
| runCallbacks    | `boolean` |  否  | 是否触发transition回调       |
| translateBounds | `boolean` |  否  | 是否在swiper的位移区间中移动 |

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['translateTo'].translateTo(-200,1000)">translateTo</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'translateTo')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['translateTo'].translateTo(-200, 1000)"
>translateTo</DemoOprate>
```

  </template>

</DemoBlock>

## setProgress

通过进度百分比设置swiper的位移

| 参数名称 |   类型   | 必填 | 描述                   |
| -------- | :------: | :--: | ---------------------- |
| progress | `number` |  是  | 进度，范围0-1          |
| speed    | `number` |  是  | 动画持续时间，单位`ms` |

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['setProgress'].setProgress(0.5,1000)">setProgress</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'setProgress')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['setProgress'].setProgress(0.5, 1000)"
>setProgress</DemoOprate>
```

  </template>

</DemoBlock>

## attachEvents && detachEvents

重新绑定事件和移除绑定事件

<DemoBlock expanded>
<template #operate>
<DemoOprate @click="()=>swiperInstance['attachEvents'].detachEvents()">移除绑定事件</DemoOprate>
<DemoOprate type="primary" @click="()=>swiperInstance['attachEvents'].attachEvents()">重新绑定事件</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'attachEvents')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['attachEvents'].detachEvents()"
>移除绑定事件</DemoOprate>
<DemoOprate
  type="primary"
  @click="() => swiperInstance['attachEvents'].attachEvents()"
>重新绑定事件</DemoOprate>
```

  </template>

</DemoBlock>

## on & off

设置swiper监听，移除swiper监听

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['on'].on('click',()=>{console.log('swiper点击了')})">监听swiper点击</DemoOprate>
<DemoOprate  @click="()=>swiperInstance['on'].off('click')">移除监听</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'on')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="
    () =>
      swiperInstance['on'].on('click', () => {
        console.log('swiper点击了')
      })
  "
>监听swiper点击</DemoOprate>
```

  </template>

</DemoBlock>

## once

添加swiper监听，该监听中的回调只执行一次

```vue
<DemoOprate
  type="primary"
  @click="
    () =>
      swiperInstance['once'].once('click', () => {
        console.log('swiper点击了')
      })
  "
>监听swiper点击</DemoOprate>
```

## emit

触发swiper监听

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['emit'].emit('click')"
>触发swiper监听</DemoOprate>
```

## maxTranslate & minTranslate

获取当前最大和最小位移值

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['maxTranslate'].maxTranslate()"
>获取最大位移值</DemoOprate>
```

## setGrabCursor & unsetGrabCursor

开启鼠标抓手，关闭鼠标抓手

<DemoBlock expanded>
<template #operate>
<DemoOprate type="primary" @click="()=>swiperInstance['setGrabCursor'].setGrabCursor()">开启鼠标抓手</DemoOprate>
<DemoOprate @click="()=>swiperInstance['setGrabCursor'].unsetGrabCursor()">关闭鼠标抓手</DemoOprate>
</template>
<z-swiper @swiper="onSwiper($event,'setGrabCursor')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['setGrabCursor'].setGrabCursor()"
>开启鼠标抓手</DemoOprate>
<DemoOprate
  @click="() => swiperInstance['setGrabCursor'].unsetGrabCursor()"
>关闭鼠标抓手</DemoOprate>
```

  </template>

</DemoBlock>

## slideToClosest

设置swiper到最近的边界

| 参数名称     |   类型    | 必填 | 描述                   |
| ------------ | :-------: | :--: | ---------------------- |
| speed        | `number`  |  否  | 切换速度(单位ms)       |
| runCallbacks | `boolean` |  否  | 是否触发transition回调 |

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['slideToClosest'].slideToClosest(3000)"
>slideToClosest</DemoOprate>
```

## updateAutoHeight

当开启高度自适应时，设置高度自适应动画的持续时间

| 参数名称 |   类型   | 必填 | 描述                   |
| -------- | :------: | :--: | ---------------------- |
| speed    | `number` |  否  | 动画持续时间，单位`ms` |

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['updateAutoHeight'].updateAutoHeight(3000)"
>updateAutoHeight</DemoOprate>
```

## updateSize

更新swiper的尺寸

<DemoBlock expanded>
<template #operate>
swiper的高度：{{swiperInstance['updateSize'] && swiperInstance['updateSize'].height}}
<DemoOprate type="primary" @click="()=>swiperInstance['updateSize'].slides[0].style.height = '300px'">修改swiper高度</DemoOprate>
<DemoOprate type="primary" @click="()=>swiperInstance['updateSize'].updateSize()">更新swiper高度</DemoOprate>
</template>
<z-swiper grabCursor @swiper="onSwiper($event,'updateSize')">
  <z-swiper-item v-for="(item, index) in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>

<template #code>

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['updateSize'].updateSize()"
>更新swiper高度</DemoOprate>
```

  </template>

</DemoBlock>

## updateSlides

更新item的数量和偏移。

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['updateSlides'].updateSlides()"
>updateSlides</DemoOprate>
```

## updateProgress

更新swiper的progress。

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['updateProgress'].updateProgress()"
>updateProgress</DemoOprate>
```

## updateSlidesClasses

更新item的类名。

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['updateSlidesClasses'].updateSlidesClasses()"
>updateSlidesClasses</DemoOprate>
```

## update

更新swiper

```vue
<DemoOprate
  type="primary"
  @click="() => swiperInstance['update'].update()"
>update</DemoOprate>
```
