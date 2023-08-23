# Events（事件）

事件的监听提供了如下两种方式。

**1. 通过传统的@( `v-on` )监听：**

如监听 Slide 切换到另一个 Slide：

```html
<z-swiper v-model="list" @slideChange="onChange">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    onChange(swiper, index) {
        uni.showToast({
            title: '当前 swiper 索引：' + index,
            icon: 'none'
        })
    }
}
```

:::warning 注意
使用@方式时，h5 端的所有事件都可选 Swiper 实例作为第一个参数。小程序端则只能使用 ref 获取 swiper 的实例。
:::

```js
//h5获取swiper当前的下标，可以通过第一个swiper参数直接获取
onChange(swiper, index) {
    uni.showToast({
        title: '当前 swiper 索引：' + swiper.activeIndex,
        icon: 'none'
    })
}
//小程序则需要声明ref后通过ref获取
onChange(swiper, index) {
    //小程序第一个swiper参数为空，请勿使用
    uni.showToast({
        title: '当前 swiper 索引：' + this.$refs.zSwiper.swiper.activeIndex,
        icon: 'none'
    })
}
```

> 缺点：
>
> - 使用时需通过 `v-on` 声明。
> - 小程序端需要声明 ref 后才可使用 swiper 实例。
> - 小程序端无法获取参数，只能通过 ref 获取。

**2. 通过 swiper 内置的方式监听：（推荐）**

:::warning 注意
使用这种方式必须保证 swiper 监听事件已经挂载，所以必须监听 `swiper` 事件。

```html
<z-swiper v-model="list" ref="zSwiper" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

:::

```js
swiper() {
    //swiper已经加载完毕。在这里可以添加任何你想监听的事件，而无需再通过`v-on`声明。
    this.$refs.zSwiper.swiper.on("slideChange", (swiper) => {
        console.log(swiper.activeIndex)
    })
},
```

> 优点
>
> - 只需监听一次 swiper 挂载完成，就可以监听任何事件而无需再通过 `v-on` 声明。
> - 无需使用 ref 获取 swiper 实例，可直接获取 swiper 参数。
> - 全端适用。

## init

事件函数，初始化后执行。
可选 Swiper 实例作为参数。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @init="init">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    init() {
        console.log("swiper初始化完成", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("init", (swiper) => {
            console.log("swiper初始化完成", swiper)
        })
    }
}
```

:::

## touchStart

回调函数，当碰触到 slider 时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @touch-start="touchStart">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    touchStart() {
        console.log("swiper触摸了", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("touch-start", (swiper) => {
            console.log("swiper触摸了", swiper)
        })
    }
}
```

:::

## touchMove

手指触碰 Swiper 并滑动（手指）时执行，此时 slide 不一定会发生移动。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @touch-move="touchMove">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    touchMove() {
        console.log("swiper触摸了", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("touch-move", (swiper) => {
            console.log("swiper触摸了", swiper)
        })
    }
}
```

:::

## touchEnd

触摸释放时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @touch-end="touchEnd">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    touchEnd() {
        console.log("swiper触摸结束了", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("touch-end", (swiper) => {
            console.log("swiper触摸结束了", swiper)
        })
    }
}
```

:::

## slideChangeTransitionStart

回调函数，swiper 从当前 slide 开始过渡到另一个 slide 时执行。

:::tip one

```html
<z-swiper
  ref="zSwiper"
  v-model="list"
  @slideChangeTransitionStart="slideChangeTransitionStart"
>
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    slideChangeTransitionStart() {
        console.log("swiper从当前slide开始过渡到另一个slide", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("slideChangeTransitionStart", (swiper) => {
            console.log("swiper从当前slide开始过渡到另一个slide", swiper)
        })
    }
}
```

:::

## slideChangeTransitionEnd

回调函数，swiper 从一个 slide 过渡到另一个 slide 结束时执行。

:::tip one

```html
<z-swiper
  ref="zSwiper"
  v-model="list"
  @slideChangeTransitionEnd="slideChangeTransitionEnd"
>
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    slideChangeTransitionEnd() {
        console.log("swiper从一个slide过渡到另一个slide结束", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("slideChangeTransitionEnd", (swiper) => {
            console.log("swiper从一个slide过渡到另一个slide结束", swiper)
        })
    }
}
```

:::

## transitionStart

回调函数，过渡开始时触发。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @transitionStart="transitionStart">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    transitionStart() {
        console.log("过渡开始", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("transitionStart", (swiper) => {
            console.log("过渡开始", swiper)
        })
    }
}
```

:::

## transitionEnd

回调函数，过渡结束时触发。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @transitionEnd="transitionEnd">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    transitionEnd() {
        console.log("过渡结束", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("transitionEnd", (swiper) => {
            console.log("过渡结束", swiper)
        })
    }
}
```

:::

## sliderMove

回调函数，手指触碰 Swiper 并拖动 slide 的过程中不断触发 sliderMove 函数。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @sliderMove="sliderMove">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    sliderMove() {
        console.log("拖动slide", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("sliderMove", (swiper) => {
            console.log("拖动slide", swiper)
        })
    }
}
```

:::

## click

回调函数，当你点击或轻触 Swiper 后执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @click="click">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    click() {
        console.log("点击", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("click", (swiper) => {
            console.log("点击", swiper)
        })
    }
}
```

:::

## doubleTap

回调函数，当你两次轻触 Swiper 时执行，类似于双击。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @doubleTap="doubleTap">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    doubleTap() {
        console.log("双击", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("doubleTap", (swiper) => {
            console.log("双击", swiper)
        })
    }
}
```

:::

## progress

回调函数，当 Swiper 的 progress 被改变时执行

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @progress="progress">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    progress() {
        console.log("progress被改变", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("progress", (swiper) => {
            console.log("progress被改变", swiper)
        })
    }
}
```

:::

## reachBeginning

回调函数，Swiper 切换到初始化位置时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @reachBeginning="reachBeginning">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    reachBeginning() {
        console.log("Swiper切换到初始化位置", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("reachBeginning", (swiper) => {
            console.log("Swiper切换到初始化位置", swiper)
        })
    }
}
```

:::

## beforeDestroy

回调函数，销毁 Swiper 时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @beforeDestroy="beforeDestroy">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    reachBeginning() {
        console.log("销毁Swiper", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("beforeDestroy", (swiper) => {
            console.log("销毁Swiper", swiper)
        })
    }
}
```

:::

## reachEnd

回调函数，当 Swiper 切换到最后一个 Slide 时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @reachEnd="reachEnd">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    reachEnd() {
        console.log("Swiper切换到最后一个Slide", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("reachEnd", (swiper) => {
            console.log("Swiper切换到最后一个Slide", swiper)
        })
    }
}
```

:::

## setTransition

回调函数，每当设置 Swiper 开始过渡动画时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @setTransition="setTransition">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    setTransition() {
        console.log("Swiper开始过渡动画", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("setTransition", (swiper) => {
            console.log("Swiper开始过渡动画", swiper)
        })
    }
}
```

:::

## setTranslate

回调函数。当设置 wrapper 的偏移量时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @setTranslate="setTranslate">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    setTranslate() {
        console.log("设置wrapper的偏移量", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("setTranslate", (swiper) => {
            console.log("设置wrapper的偏移量", swiper)
        })
    }
}
```

:::

## slideNextTransitionStart

回调函数，滑块释放时如果触发 slider 向前(右、下)切换则执行。类似于 slideChangeTransitionStart，但规定了方向。

:::tip one

```html
<z-swiper
  ref="zSwiper"
  v-model="list"
  @slideNextTransitionStart="slideNextTransitionStart"
>
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    slideNextTransitionStart() {
        console.log("滑块释放时如果触发slider向前(右、下)切换则执行", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("slideNextTransitionStart", (swiper) => {
            console.log("滑块释放时如果触发slider向前(右、下)切换则执行", swiper)
        })
    }
}
```

:::

## slideNextTransitionEnd

回调函数，slider 向前(右、下)切换结束时执行。类似于 slideChangeTransitionEnd，但规定了方向。

:::tip one

```html
<z-swiper
  ref="zSwiper"
  v-model="list"
  @slideNextTransitionEnd="slideNextTransitionEnd"
>
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    slideNextTransitionEnd() {
        console.log("slider向前(右、下)切换结束时执行", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("slideNextTransitionEnd", (swiper) => {
            console.log("slider向前(右、下)切换结束时执行", swiper)
        })
    }
}
```

:::

## slidePrevTransitionStart

回调函数，滑块释放时如果触发 slider 向后(左、上)切换则执行。类似于 slideChangeTransitionStart，但规定了方向。

:::tip one

```html
<z-swiper
  ref="zSwiper"
  v-model="list"
  @slidePrevTransitionStart="slidePrevTransitionStart"
>
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    slidePrevTransitionStart() {
        console.log("滑块释放时如果触发slider向后(左、上)切换", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("slidePrevTransitionStart", (swiper) => {
            console.log("滑块释放时如果触发slider向后(左、上)切换", swiper)
        })
    }
}
```

:::

## slidePrevTransitionEnd

回调函数，slider 向后(左、上)切换结束时执行。类似于 slideChangeTransitionEnd，但规定了方向。

:::tip one

```html
<z-swiper
  ref="zSwiper"
  v-model="list"
  @slidePrevTransitionEnd="slidePrevTransitionEnd"
>
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    slidePrevTransitionEnd() {
        console.log("slider向后(左、上)切换结束时执行", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("slidePrevTransitionEnd", (swiper) => {
            console.log("slider向后(左、上)切换结束时执行", swiper)
        })
    }
}
```

:::

## fromEdge

当 Swiper 是从第一个或最后一个 Slide 切换时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @fromEdge="fromEdge">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    fromEdge() {
        console.log("从第一个或最后一个Slide切换时执行", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("fromEdge", (swiper) => {
            console.log("从第一个或最后一个Slide切换时执行", swiper)
        })
    }
}
```

:::

## toEdge

当 Swiper 要切换到第一个或最后一个 Slide 时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @toEdge="toEdge">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    toEdge() {
        console.log("Swiper要切换到第一个或最后一个Slide时执行", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("toEdge", (swiper) => {
            console.log("Swiper要切换到第一个或最后一个Slide时执行", swiper)
        })
    }
}
```

:::

## slideChange

事件函数。在当前 Slide 切换到另一个 Slide 时执行(activeIndex 发生改变)，一般是在点击控制组件、释放滑动的时间点。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @slideChange="slideChange">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    slideChange() {
        console.log("在当前Slide切换到另一个Slide时执行", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("slideChange", (swiper) => {
            console.log("在当前Slide切换到另一个Slide时执行", swiper)
        })
    }
}
```

:::

## autoplayStart

回调函数，自动切换开始时执行(由不自动切换进入到自动切换)。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @autoplayStart="autoplayStart">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    autoplayStart() {
        console.log("自动切换开始时执行", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("autoplayStart", (swiper) => {
            console.log("自动切换开始时执行", swiper)
        })
    }
}
```

:::

## autoplayStop

回调函数，自动切换结束时执行（由自动切换进入到不自动切换）。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @autoplayStop="autoplayStop">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    autoplayStop() {
        console.log("自动切换结束时执行", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("autoplayStop", (swiper) => {
            console.log("自动切换结束时执行", swiper)
        })
    }
}
```

:::

## autoplay

回调函数，在 slide 自动切换开始时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @autoplay="autoplay">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    autoplay() {
        console.log("slide自动切换开始时执行", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("autoplay", (swiper) => {
            console.log("slide自动切换开始时执行", swiper)
        })
    }
}
```

:::

## beforeLoopFix

loop 模式下，swiper 每次切换之前都会进行一次判断，如果位于边缘的 slide，比如复制的 slide，则会瞬间定位到一个相同位置的常规 slide，这就是 loop fix。
在 loop fix 之前会触发一次 beforeLoopFix 事件，loop fix 之后（无论是否发生定位）会触发一次 loopFix 事件。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @beforeLoopFix="beforeLoopFix">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    beforeLoopFix() {
        console.log("loop 模式下，swiper每次切换之前都会进行一次判断", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("beforeLoopFix", (swiper) => {
            console.log("loop 模式下，swiper每次切换之前都会进行一次判断", swiper)
        })
    }
}
```

:::

## loopFix

loop fix 之后（无论是否发生定位）会触发一次 loopFix 事件。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @loopFix="loopFix">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    loopFix() {
        console.log("loop fix之后（无论是否发生定位）会触发一次loopFix 事件", this.$refs.zSwiper.swiper)
    }
}
```

:::

:::tip two

```html
<z-swiper ref="zSwiper" v-model="list" @swiper="swiper">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    swiper() {
        this.$refs.zSwiper.swiper.on("loopFix", (swiper) => {
            console.log("loop fix之后（无论是否发生定位）会触发一次loopFix 事件", swiper)
        })
    }
}
```

:::
