# Autoplay （自动切换）

## autoplay

- 类型：`object/boolean`
- 默认值：false

设置为 true 启动自动切换，并使用默认的切换设置。

```js
options: {
    autoplay: true,
    //等同于
    /*
    autoplay: {
    delay: 3000,
    }
    */
}
```

## delay

- 类型：`number`
- 默认值：3000

自动切换的时间间隔，单位 ms。

```js
options: {
    autoplay: {
        delay: 1000, //1秒切换一次
    },
}
```

## stopOnLastSlide

- 类型：`boolean`
- 默认值：false

如果设置为 true，当切换到最后一个 slide 时停止自动切换。（loop 模式下无效）。

```js
options: {
    autoplay: {
        stopOnLastSlide: true,
    },
}
```

## disableOnInteraction

- 类型：`boolean`
- 默认值：true

用户操作 swiper 之后，是否禁止 autoplay。默认为 true：停止。
如果设置为 false，用户操作 swiper 之后自动切换不会停止，每次都会重新启动 autoplay。
操作包括触碰(touch)，拖动，点击 pagination 等。

```js
options: {
    autoplay: {
        disableOnInteraction: false,
    },
}
```

## reverseDirection

- 类型：`boolean`
- 默认值：false

开启反向自动轮播。

```js
options: {
    autoplay: {
        reverseDirection: true,
    },
}
```

## mySwiper.autoplay.running

如果 Swiper 开启了 autoplay，这个值为 true。

## mySwiper.autoplay.start()

开始自动切换。

```js
methods: {
    start() {
        this.$refs.zSwiper.swiper.autoplay.start();
    }
}
```

## mySwiper.autoplay.stop()

停止自动切换。

```js
methods: {
    start() {
        this.$refs.zSwiper.swiper.autoplay.stop();
    }
}
```

## autoplay()

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

## autoplayResume()

回调函数，当自动切换（autoplay）从暂停状态恢复运行时执行。

:::tip one

```html
<z-swiper ref="zSwiper" v-model="list" @autoplayResume="autoplayResume">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
methods: {
    autoplayResume() {
        console.log("当自动切换（autoplay）从暂停状态恢复运行时执行", this.$refs.zSwiper.swiper)
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
        this.$refs.zSwiper.swiper.on("autoplayResume", (swiper) => {
            console.log("当自动切换（autoplay）从暂停状态恢复运行时执行", swiper)
        })
    }
}
```

:::

## autoplayStart()

回调函数，自动切换开始时执行(由不自动切换进入到自动切换)。

## autoplayStop(swiper)

回调函数，自动切换结束时执行（由自动切换进入到不自动切换）。
