# Loop （无限循环）

## loop

- 类型：`boolean`
- 默认值：false

设置为 true 则开启 loop 模式。loop 模式：会在原本 slide 前后复制若干个 slide(默认一个)并在合适的时候切换，让 Swiper 看起来是循环的。

```js
options: {
    loop: true,
}
```

## loopedSlides

- 类型：`number`
- 默认值：1

在 loop 模式下使用 slidesPerview:'auto'，还需使用该参数设置所要用到的 loop 个数(一般设置大于可视 slide 个数 2 个即可)。

```js
options: {
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 5,
}
```

## loopFillGroupWithBlank

- 类型：`boolean`
- 默认值：false

在 loop 模式下，为 group 填充空白 slide。

```js
options: {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
}
```
