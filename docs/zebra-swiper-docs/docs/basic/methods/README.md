# Methods（Swiper 方法）

swiper 方法的推荐使用 ref 调用，如跳转到某个 slide：

```html
<z-swiper ref="zSwiper" v-model="list">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
<button type="primary" @click="slideTo()">跳转</button>
```

```js
data() {
        return {
            list: [
                'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
                'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
                'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
                'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
                'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg',
            ]
        }
    },
    methods: {
        slideTo() {
            this.$refs.zSwiper.swiper.slideTo(2, 1000, false); //切换到第三个slide，速度为1秒
        }
    }
```

## mySwiper.slideNext(speed, runCallbacks)

滑动到下一个滑块。

| 参数名       | 类型    | 是否必填 | 描述                                        |
| ------------ | ------- | -------- | ------------------------------------------- |
| speed        | num     | 可选     | 切换速度(单位 ms)                           |
| runCallbacks | boolean | 可选     | 设置为 false 时不会触发 transition 回调函数 |

```js
methods: {
    slideNext() {
        this.$refs.zSwiper.swiper.slideNext();
    }
}
```

## mySwiper.slidePrev(speed, runCallbacks)

滑动到前一个滑块。

| 参数名       | 类型    | 是否必填 | 描述                                        |
| ------------ | ------- | -------- | ------------------------------------------- |
| speed        | num     | 可选     | 切换速度(单位 ms)                           |
| runCallbacks | boolean | 可选     | 设置为 false 时不会触发 transition 回调函数 |

```js
methods: {
    slidePrev() {
        this.$refs.zSwiper.swiper.slidePrev();
    }
}
```

## mySwiper.slideTo(index, speed, runCallbacks)

控制 Swiper 切换到指定 slide。

| 参数名       | 类型    | 是否必填 | 描述                                        |
| ------------ | ------- | -------- | ------------------------------------------- |
| index        | num     | 必选     | 指定将要切换到的 slide 的索引               |
| speed        | num     | 可选     | 切换速度(单位 ms)                           |
| runCallbacks | boolean | 可选     | 设置为 false 时不会触发 transition 回调函数 |

```js
methods: {
    slidePrev() {
        this.$refs.zSwiper.swiper.slideTo(0, 1000, false); //切换到第一个slide，速度为1秒
    }
}
```

## mySwiper.slideToLoop(index, speed, runCallbacks)

在 Loop 模式下 Swiper 切换到指定 slide。切换到的是 slide 索引是 realIndex

比如你的 swiper 是 loop 模式且只复制一个 slide(默认情况)，你想跳转到第三个 slide 时（activeIndex:3/realIndex:2），应该使用 `slideTo(3)` 或者 `slideToLoop(2)` 。

| 参数名       | 类型    | 是否必填 | 描述                                        |
| ------------ | ------- | -------- | ------------------------------------------- |
| index        | num     | 必选     | 指定将要切换到的 slide 的索引               |
| speed        | num     | 可选     | 切换速度(单位 ms)                           |
| runCallbacks | boolean | 可选     | 设置为 false 时不会触发 transition 回调函数 |

```js
methods: {
    slidePrev() {
        this.$refs.zSwiper.swiper.slideToLoop(0, 1000, false); //切换到第一个slide，速度为1秒
    }
}
```

## mySwiper.destroy(deleteInstance, cleanupStyles)

销毁 Swiper。销毁所有绑定的监听事件。

| 参数名         | 类型    | 是否必填 | 描述                                                                        |
| -------------- | ------- | -------- | --------------------------------------------------------------------------- |
| deleteInstance | boolean | 可选     | 设为 false 则不销毁 Swiper 对象，默认为 true                                |
| cleanupStyles  | boolean | 可选     | 设为 true 则清除所有 swiper 设定选项和样式，比如 direction 等，默认为 false |

```js
methods: {
    destroy() {
        this.$refs.zSwiper.swiper.destroy();
    }
}
```

## mySwiper.getTranslate()

返回实时的 wrapper 位移（translate）。

这与通过属性 mySwiper.translate 获取到的数值稍有不同，即使是在过渡时（animating）也能获取到，而后者精度较高。

```js
methods: {
    getTranslate() {
        this.$refs.zSwiper.swiper.getTranslate();
    }
}
```

## mySwiper.setTranslate(translate)

手动设置 wrapper 的位移。在其他非位移的切换时则表现为相应的效果，例如 3D 切换时改变的是角度。
translate：必选，位移值（单位 px）。

例：swiper 宽度为 500，设置 translate 为-250。在默认的 effect: slide 时，swiper 会向左滑动 250px，如果设置了切换效果 effect: cube，swiper 会旋转 45 度。

```js
methods: {
    setTranslate() {
        this.$refs.zSwiper.swiper.setTranslate(-300);
    }
}
```

## mySwiper.updateSize()

这个方法会重新计算 Swiper 的尺寸。

```js
methods: {
    updateSize() {
        this.$refs.zSwiper.swiper.updateSize();
    }
}
```

## mySwiper.updateSlides()

这个方法会重新计算 Slides 的数量。

```js
methods: {
    updateSlides() {
        this.$refs.zSwiper.swiper.updateSlides();
    }
}
```

## mySwiper.updateProgress()

这个方法会重新计算 Swiper 的 progress 值。

```js
methods: {
    updateProgress() {
        this.$refs.zSwiper.swiper.updateProgress();
    }
}
```

## mySwiper.updateSlidesClasses()

更新 slides 和 bullets 的 active/prev/next 类名。

```js
methods: {
    updateSlidesClasses() {
        this.$refs.zSwiper.swiper.updateSlidesClasses();
    }
}
```

## mySwiper.update(updateTranslate)

更新 Swiper，就像重新初始化一样。这个方法包含了 updateContainerSize，updateSlidesSize，updateProgress，updateClasses 方法。

可选参数：updateTranslate，默认 false，设置为 true 则重新计算 Wrapper 的位移。

```js
methods: {
    update() {
        this.$refs.zSwiper.swiper.update();
    }
}
```

## mySwiper.detachEvents()

移除所有监听事件。

```js
methods: {
    detachEvents() {
        this.$refs.zSwiper.swiper.detachEvents();
    }
}
```

## mySwiper.attachEvents()

重新绑定所有监听事件。

```js
methods: {
    attachEvents() {
        this.$refs.zSwiper.swiper.attachEvents();
    }
}
```

## mySwiper.on(event, handler)

添加回调函数或者事件句柄。（监听事件非常有用）

```js
methods: {
    on() {
        this.$refs.zSwiper.swiper.on("slideChange", (swiper) => {
            console.log(swiper)
        });
    }
}
```

## mySwiper.once(event, handler)

添加回调函数或者事件句柄，这些事件只会执行一次。

```js
methods: {
    once() {
        this.$refs.zSwiper.swiper.once("slideChange", (swiper) => {
            console.log(swiper)
        });
    }
}
```

## mySwiper.off(event)

移除事件的所有句柄

```js
methods: {
    off() {
        this.$refs.zSwiper.swiper.off("slideChange");
    }
}
```

## mySwiper.off(event, handler)

移除某个回调/事件。

```js
methods: {
    off() {
        this.$refs.zSwiper.swiper.off("slideChange");
    }
}
```

## mySwiper.changeDirection(direction)

动态改变切换方向。

可选择方向 direction: horizontal 或 vertical，留空则自动改变。

```js
methods: {
    changeDirection() {
        this.$refs.zSwiper.swiper.changeDirection();
    }
}
```

## mySwiper.translateTo(translate, speed, runCallbacks, translateBounds)

对 Swiper 的 Wrapper 进行自定义的 CSS3 位移动画。

| 参数名          | 类型    | 是否必填 | 描述                                                               |
| --------------- | ------- | -------- | ------------------------------------------------------------------ |
| translate       | num     | 必选     | 位移值(单位像素)                                                   |
| speed           | num     | 必选     | 动画持续时间(单位毫秒)                                             |
| runCallbacks    | boolean | 可选     | 设置为 false 时不会触发 transition 回调函数（默认 true）           |
| translateBounds | boolean | 可选     | 设置为 false 时只能在 Swiper 的最大和最小位移值内移动（默认 true） |

```js
methods: {
    translateTo() {
        this.$refs.zSwiper.swiper.translateTo(-2000, 1000, true, false);
    }
}
```

## mySwiper.setProgress(progress, speed)

设置 swiper 的 progress。

| 参数名   | 类型 | 是否必填 | 描述                                                             |
| -------- | ---- | -------- | ---------------------------------------------------------------- |
| progress | num  | 必选     | 设置的 progress 值，范围 0~1。0 是初始位置，1 是最后一个 slide。 |
| speed    | num  | 可选     | 变换的速度。单位 ms。                                            |

```js
methods: {
    setProgress() {
        this.$refs.zSwiper.swiper.setProgress(0.3, 1500);
    }
}
```

## mySwiper.enable()

动态启用 Swiper（如果已经禁用）。

```js
methods: {
    enable() {
        this.$refs.zSwiper.swiper.enable();
    }
}
```

## mySwiper.disable()

禁用 Swiper（如果已启用）。当 Swiper 被禁用时，它将隐藏所有导航元素并且不会响应任何事件和交互。

```js
methods: {
    disable() {
        this.$refs.zSwiper.swiper.disable();
    }
}
```
