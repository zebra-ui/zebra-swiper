# Basic （swiper 一般选项）

## initialSlide

- 类型：`number`
- 默认值：0

设定初始化时 slide 的索引。Swiper 默认初始化时显示第一个 slide，有时想初始化时直接显示其他 slide，可以做此设置。

```js
options: {
    initialSlide: 2,
}
```

## direction

- 类型：`string`
- 默认值：horizontal
- 可选：vertical

Swiper 的滑动方向，可设置为水平方向切换(horizontal)或垂直方向切换(vertical)。

```js
options: {
    direction: 'vertical',
}
```

## speed

- 类型：`number`
- 默认值：300

切换速度，即 slider 自动滑动开始到结束的时间（单位 ms），也是触摸滑动时释放至贴合的时间。

```js
options: {
    speed: 300,
}
```

## width

- 类型：`number`
- 默认值：-

设置 swiper 的宽度。通常情况下该参数无需设置。swiper 会自动获取父级的宽度。

## height

- 类型：`number`
- 默认值：-

设置 swiper 的高度。通常情况下该参数无需设置。swiper 会自动获取父级的高度。

## swiperItemWidth

- 类型：`number`
- 默认值：-

设置 swiper-item 的宽度。用于在 swiper 无法正确获取宽高的情况下设置 swiper 的宽高（如快手小程序）。

## swiperItemHeight

- 类型：`number`
- 默认值：-

设置 swiper-item 的高度。用于在 swiper 无法正确获取宽高的情况下设置 swiper 的宽高（如快手小程序）。

## noSwiping

- 类型：`boolean`
- 默认值：false

是否禁止触摸。当禁止触摸开启时，不可通过滑动切换。可通过自动切换，slideTo 等方法切换。

## roundLengths

- 类型：`boolean`
- 默认值：false

如果设置为 true，则将 slide 的宽和高取整(四舍五入)，以防止某些分辨率的屏幕上文字或边界(border)模糊。

例如当你设定 slidesPerView: 3 的时候，则可能出现 slide 的宽度为 341.33px，开启 roundLengths 后宽度取整数 341px。

```js
options: {
    roundLengths: true,
}
```

## autoHeight

- 类型：`boolean`
- 默认值：false

自动高度。设置为 true 时，wrapper 和 container 会随着当前 slide 的高度而发生变化。

```js
options: {
    autoHeight: true,
}
```

## watchOverflow

- 类型：`boolean`
- 默认值：false

当没有足够的 slide 切换时，例如只有 1 个 slide，swiper 会失效且隐藏导航等。默认不开启这个功能。
loop 模式无效，因为会复制 slide。

```js
options: {
    watchOverflow: true,
}
```

## init

- 类型：`boolean`
- 默认值：true

当你创建一个 Swiper 实例时是否立即初始化。
如果禁止了，可以稍后使用 this.$refs.zSwiper.swiper.init()来初始化。(2.2.0 后废弃，swiper 将会自动初始化。)

```js
options: {
    init: false,
}
```

## on

- 类型：`object`
- 默认值：-

注册事件。

因为小程序 props 无法传递函数，所以提供了向 swiper 注入事件的方法。如监听 swiper 的改变：

```js
onReady() {
    this.$refs.zSwiper.setSwiperOn("slideChange", (swiper) => {
        uni.showToast({
            title: '当前 swiper 索引：' + swiper.activeIndex,
            icon: 'none'
        })
    });
},
```

## enabled

- 类型：`boolean`
- 默认值：true

设置 Swiper 初始时是否可用，默认是可用(true)。当 Swiper 被禁用时，它将隐藏所有导航元素（分页器、按钮、滚动条）并且不会响应任何事件和交互。

```js
options: {
    enabled: false,
}
```
