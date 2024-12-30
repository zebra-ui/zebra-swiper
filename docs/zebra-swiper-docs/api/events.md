# 事件

:::tip
v3版本所有平台都可通过`v-on`绑定事件并获取`swiper`实例。
:::

## swiper

swiper组件挂载完成时触发。

```html
<z-swiper @swiper="onSwiper"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiper = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## slideChange

swiper中的activeIndex变化时触发。

```html
<z-swiper @slideChange="onSlideChange"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlideChange = (swiper) => {
  console.log('swiper当前下标：', swiper.activeIndex)
}
</script>
```

## realIndexChange

swiper中的realIndex变化时触发。

::: tip
`loop`模式监听下标变化应绑定此事件。
:::

```html
<z-swiper loop @realIndexChange="onRealIndexChange"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onRealIndexChange = (swiper) => {
  console.log('swiper当前下标：', swiper.realIndex)
}
</script>
```

## click

当用户点击/触摸 Swiper 时触发。

```html
<z-swiper @click="onClick"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onClick = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('点击事件：', event)
}
</script>
```

## beforeInit

swiper初始化前触发。

```html
<z-swiper @beforeInit="onSwiperBeforeInit"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperBeforeInit = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## init

swiper初始化时触发。

```html
<z-swiper @init="onSwiperInit"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperInit = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## afterInit

swiper初始化后触发。

```html
<z-swiper @afterInit="onSwiperAfterInit"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSwiperAfterInit = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## touchStart

当用户触摸 Swiper 时触发。

```html
<z-swiper @touchStart="onTouchStart"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onTouchStart = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('事件对象：', event)
}
</script>
```

## touchMove

当用户触摸并移动手指时触发。

```html
<z-swiper @touchMove="onTouchMove"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onTouchMove = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('事件对象：', event)
}
</script>
```

## touchEnd

当用户释放 Swiper 时触发。

```html
<z-swiper @touchEnd="onTouchEnd"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onTouchEnd = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('事件对象：', event)
}
</script>
```

## touchMoveOpposite

当用户触摸并移动手指时，且移动方向与设定方向相反时触发。

```html
<z-swiper @touchMoveOpposite="onTouchMoveOpposite"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onTouchMoveOpposite = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('事件对象：', event)
}
</script>
```

## snapIndexChange

snapIndex变化时触发。

```html
<z-swiper @snapIndexChange="onSnapIndexChange"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSnapIndexChange = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## slideChangeTransitionStart

在切换到其他幻灯片（下一个或上一个）的动画开始时触发。

```html
<z-swiper @slideChangeTransitionStart="onSlideChangeTransitionStart"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlideChangeTransitionStart = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## slideChangeTransitionEnd

在切换其他幻灯片（下一个或上一个）的动画结束后触发。

```html
<z-swiper @slideChangeTransitionEnd="onSlideChangeTransitionEnd"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlideChangeTransitionEnd = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## slideNextTransitionStart

与 "slideChangeTransitionStart" 相同，但仅在 "向前" 方向触发。

```html
<z-swiper @slideNextTransitionStart="onSlideNextTransitionStart"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlideNextTransitionStart = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## slideNextTransitionEnd

与 "slideChangeTransitionEnd" 相同，但仅在 "向前" 方向触发。

```html
<z-swiper @slideNextTransitionEnd="onSlideNextTransitionEnd"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlideNextTransitionEnd = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## activeIndexChange

当活动索引发生变化时触发。

```html
<z-swiper @activeIndexChange="onActiveIndexChange"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onActiveIndexChange = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## beforeDestroy

在 Swiper 销毁之前触发。

```html
<z-swiper @beforeDestroy="onBeforeDestroy"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onBeforeDestroy = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## beforeLoopFix

在 "loop fix" 之前触发。

```html
<z-swiper @beforeLoopFix="onBeforeLoopFix"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onBeforeLoopFix = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## beforeResize

在 resize 处理之前触发。

```html
<z-swiper @beforeResize="onBeforeResize"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onBeforeResize = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## beforeSlideChangeStart

在幻灯片切换过渡开始之前触发。

```html
<z-swiper @beforeSlideChangeStart="onBeforeSlideChangeStart"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onBeforeSlideChangeStart = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## beforeTransitionStart

在过渡开始之前触发。

```html
<z-swiper @beforeTransitionStart="onBeforeTransitionStart"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onBeforeTransitionStart = (swiper, speed, internal) => {
  console.log('swiper实例：', swiper)
  console.log('过渡速度：', speed)
  console.log('是否内部触发：', internal)
}
</script>
```

## breakpoint

在断点切换时触发。

```html
<z-swiper @breakpoint="onBreakpoint"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onBreakpoint = (swiper, breakpointParams) => {
  console.log('swiper实例：', swiper)
  console.log('断点参数：', breakpointParams)
}
</script>
```

## changeDirection

在方向改变时触发。

```html
<z-swiper @changeDirection="onChangeDirection"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onChangeDirection = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## destroy

在 Swiper 销毁时触发。

```html
<z-swiper @destroy="onDestroy"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onDestroy = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## doubleClick

当用户双击/双触 Swiper 时触发。

```html
<z-swiper @doubleClick="onDoubleClick"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onDoubleClick = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('双击事件：', event)
}
</script>
```

## doubleTap

当用户双击 Swiper 容器时触发。

```html
<z-swiper @doubleTap="onDoubleTap"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onDoubleTap = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('双触事件：', event)
}
</script>
```

## fromEdge

当 Swiper 从开始或结束位置移开时触发。

```html
<z-swiper @fromEdge="onFromEdge"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onFromEdge = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## lock

当 Swiper 被锁定时触发（当 watchOverflow 启用时）。

```html
<z-swiper @lock="onLock"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onLock = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## loopFix

在 "loop fix" 之后触发。

```html
<z-swiper @loopFix="onLoopFix"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onLoopFix = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## momentumBounce

在动量反弹时触发。

```html
<z-swiper @momentumBounce="onMomentumBounce"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onMomentumBounce = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## observerUpdate

当启用 observer 并检测到 DOM 变化时触发。

```html
<z-swiper @observerUpdate="onObserverUpdate"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onObserverUpdate = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## orientationchange

当方向改变时触发（例如从横屏切换到竖屏）。

```html
<z-swiper @orientationchange="onOrientationchange"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onOrientationchange = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## progress

当 Swiper 进度改变时触发，参数 progress 始终在 0 到 1 之间。

```html
<z-swiper @progress="onProgress"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onProgress = (swiper, progress) => {
  console.log('swiper实例：', swiper)
  console.log('进度：', progress)
}
</script>
```

## reachBeginning

当 Swiper 到达其起始位置时触发。

```html
<z-swiper @reachBeginning="onReachBeginning"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onReachBeginning = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## reachEnd

当 Swiper 到达最后一张幻灯片时触发。

```html
<z-swiper @reachEnd="onReachEnd"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onReachEnd = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## resize

在窗口大小调整之前触发。

```html
<z-swiper @resize="onResize"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onResize = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## setTransition

每次 Swiper 开始动画时触发。

```html
<z-swiper @setTransition="onSetTransition"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSetTransition = (swiper, transition) => {
  console.log('swiper实例：', swiper)
  console.log('过渡时间(ms)：', transition)
}
</script>
```

## setTranslate

当 Swiper 的包装器改变其位置时触发。

```html
<z-swiper @setTranslate="onSetTranslate"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSetTranslate = (swiper, translate) => {
  console.log('swiper实例：', swiper)
  console.log('当前位移值：', translate)
}
</script>
```

## slidePrevTransitionEnd

与 "slideChangeTransitionEnd" 相同，但仅在 "向后" 方向触发。

```html
<z-swiper @slidePrevTransitionEnd="onSlidePrevTransitionEnd"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlidePrevTransitionEnd = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## slidePrevTransitionStart

与 "slideChangeTransitionStart" 相同，但仅在 "向后" 方向触发。

```html
<z-swiper @slidePrevTransitionStart="onSlidePrevTransitionStart"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlidePrevTransitionStart = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## slideResetTransitionEnd

在重置幻灯片到当前位置的动画结束时触发。

```html
<z-swiper @slideResetTransitionEnd="onSlideResetTransitionEnd"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlideResetTransitionEnd = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## slideResetTransitionStart

在重置幻灯片到当前位置的动画开始时触发。

```html
<z-swiper @slideResetTransitionStart="onSlideResetTransitionStart"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlideResetTransitionStart = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## sliderFirstMove

在第一次触摸/拖动移动时触发。

```html
<z-swiper @sliderFirstMove="onSliderFirstMove"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSliderFirstMove = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('事件对象：', event)
}
</script>
```

## sliderMove

当用户触摸并移动手指时触发。

```html
<z-swiper @sliderMove="onSliderMove"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSliderMove = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('事件对象：', event)
}
</script>
```

## slidesGridLengthChange

当幻灯片网格长度发生变化时触发。

```html
<z-swiper @slidesGridLengthChange="onSlidesGridLengthChange"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlidesGridLengthChange = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## slidesLengthChange

当幻灯片数量发生变化时触发。

```html
<z-swiper @slidesLengthChange="onSlidesLengthChange"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlidesLengthChange = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## slidesUpdated

当幻灯片及其大小计算和更新后触发。

```html
<z-swiper @slidesUpdated="onSlidesUpdated"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSlidesUpdated = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## snapGridLengthChange

当捕捉网格长度发生变化时触发。

```html
<z-swiper @snapGridLengthChange="onSnapGridLengthChange"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onSnapGridLengthChange = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## tap

当用户点击/触摸 Swiper 时触发。

```html
<z-swiper @tap="onTap"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onTap = (swiper, event) => {
  console.log('swiper实例：', swiper)
  console.log('事件对象：', event)
}
</script>
```

## toEdge

当 Swiper 到达开始或结束位置时触发。

```html
<z-swiper @toEdge="onToEdge"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onToEdge = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## transitionEnd

在过渡结束后触发。

```html
<z-swiper @transitionEnd="onTransitionEnd"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onTransitionEnd = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## transitionStart

在过渡开始时触发。

```html
<z-swiper @transitionStart="onTransitionStart"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onTransitionStart = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## unlock

当 Swiper 解锁时触发（当 watchOverflow 启用时）。

```html
<z-swiper @unlock="onUnlock"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onUnlock = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```

## update

在 swiper.update() 调用后触发。

```html
<z-swiper @update="onUpdate"> // [!code ++]
  <z-swiper-item v-for="item in list" :key="item.id">
    <DemoItem :text="item.text"></DemoItem>
  </z-swiper-item>
</z-swiper>
```

```vue
<script setup>
const onUpdate = (swiper) => {
  console.log('swiper实例：', swiper)
}
</script>
```
