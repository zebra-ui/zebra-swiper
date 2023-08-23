# Carousel （旋转木马）

## slidesPerView

- 类型：`number or auto`
- 默认值：1

设置 slider 容器能够同时显示的 slides 数量(carousel 模式)。

可以设置为数字（可为小数，小数不可 loop），或者 'auto'则自动根据 slides 的宽度来设定数量。

loop 模式下如果设置为'auto'还需要设置另外一个参数 loopedSlides。

```js
options: {
    slidesPerView: 2,
}
```

## centeredSlides

- 类型：`boolean`
- 默认值：false

设定为 true 时，active slide 会居中，而不是默认状态下的居左。

```js
options: {
    slidesPerView: 3,
    centeredSlides: true,
}
```

## centeredSlidesBounds

- 类型：`boolean`
- 默认值：false

当设置了 Active Slide 居中后，还可以配合设置此参数，使得第一个和最后一个 Slide 始终贴合边缘。

```js
options: {
    slidesPerView: 3,
    centeredSlides: true,
    centeredSlidesBounds: true,
}
```

## slidesPerGroup

- 类型：`number`
- 默认值：1

在 carousel mode 下定义 slides 的数量多少为一组。

```js
options: {
    slidesPerView: 3,
    slidesPerGroup: 3,
}
```

## spaceBetween

- 类型：`number`
- 默认值：0

在 slide 之间设置距离（单位 px）。

```js
options: {
    slidesPerView: 3,
    spaceBetween: 20,
}
```

## slidesOffsetBefore

- 类型：`number`
- 默认值：0

设定 slide 与左边框的预设偏移量（单位 px）。

```js
options: {
    slidesOffsetBefore: 100,
}
```

## slidesOffsetAfter

- 类型：`number`
- 默认值：0

设定 slide 与右边框的预设偏移量（单位 px）。

```js
options: {
    slidesOffsetAfter: 100,
}
```

## centerInsufficientSlides

- 类型：`boolean`
- 默认值：false

如果开启这个参数，当 slides 的总数小于 slidesPerView 时，slides 居中。
不适用于 loop 模式。

```js
options: {
    slidesPerView: 3,
    centerInsufficientSlides: true,
}
```
