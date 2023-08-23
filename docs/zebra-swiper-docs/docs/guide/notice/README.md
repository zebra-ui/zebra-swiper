# 注意事项

### 1. 关于组件的样式穿透。

h5 和大部分小程序都支持使用 `::v-deep` 覆盖组件样式。少数小程序使用后无效，这时可使用组件提供的 `custom-style` 参数自定义样式。

在自定义 swiper 宽高时， `z-swiper` 提供了 `width` , `height` 属性。 `z-swiper-item` 提供了 `swiper-item-width` , `swiper-item-height` 属性。在设置宽高时，更推荐使用这些属性。

### 2. 快手小程序使用。

在快手小程序中，swiper 无法正确的获取元素的宽度与高度。导致组件的部分切换效果发生异常。

目前的解决方案为，手动设置 `z-swiper` , `z-swiper-item` 的宽高。

`z-swiper` 使用 `width` 或者 `height` 设置， `z-swiper-item` 使用 `swiper-item-width` 或者 `swiper-item-height` 。

如：

```vue
<z-swiper v-model="list" :options="options">
	<z-swiper-item swiper-item-width="500rpx" v-for="(item,index) in list" :key="index">
		<image class="image" :src="item" mode="aspectFill">
		</image>
	</z-swiper-item>
</z-swiper>
```

```js
options: {
    effect: 'cards',
    width: 315
},
```
