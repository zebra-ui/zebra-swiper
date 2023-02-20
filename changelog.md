## 2.2.6（2023-02-20）
`2023-02-20`

**Feat**

- `panorama`全景切换效果新增`stretch`参数，用于控制slide之间的距离。

**Fix**

- 修复字节小程序3D样式失效的问题。
- 修复`panorama`切换效果参数无效的问题。
- 修复`autoHeight`高度自适应使用报错的问题。（`autoHeight`选项可以正常使用，且在大多数场景下可以正确获取高度）
## 2.2.5（2022-11-10）
`2022-11-10`

**Feat**

- `cards`卡片切换效果新增`perSlideRotate`，`perSlideOffset`参数用于控制卡片的偏移距离及旋转角度。
- 微信小程序中默认使用虚拟节点渲染，即`virtualHost`: `true`。

**Fix**

- 修复`pagination`选项开启后，动态控制`swiper`禁用或启用报错的问题。
- 修复支付宝小程序3D样式失效的问题。
## 2.2.4（2022-09-23）
`2022-09-23`

**Feat**

- 新增`noSwiping`参数控制是否禁止触摸。当禁止触摸开启时，不可通过滑动切换。可通过自动切换，`slideTo`等方法切换。

**Fix**

- 修复`vue3`下`app`触摸无效的问题。
- 新增触摸事件`touchcancel`。
## 2.2.3（2022-07-26）
`2022-07-26`

**Feat**

- 卡片切换效果`cards`新增`rotate`参数，用于控制卡片切换时是否发生旋转。

**Fix**

- 修复微信小程序使用`zebra-swiper`时，页面无法滚动。
- 修复`app`报错`toJSON`的问题。
- 修复`swiper`在`vue3`中无法自动播放的问题。

## 2.2.2（2022-07-01）
`2022-07-01`

**Feat**

- 兼容`PC`浏览器端。
- 初步兼容`VUE3`。

**Fix**

- 修复使用`zebra-swiper`时，页面无法滚动。（`zebra-swiper`将不再默认阻止事件冒泡）。
## 2.2.1（2022-03-31）
`2022-03-31`

**Feat**

- 新增`changeDirection`方法，该方法用于动态改变swiper方向。
- `z-swiper-item`新增`swiperItemWidth` `swiperItemHeight` 属性，用于在swiper无法正确获取宽高的情况下设置swiper的宽高（如快手小程序）。

**Fix**

- 消除快手小程序itemPropWxs的警告。
## 2.2.0（2022-03-21）
`2022-03-21`

**本次更新调整了组件的整体架构及组件入口逻辑。主要为性能优化，不涉及新功能。**

不兼容性更新：

- `z-swiper` 的 `customStyle` 由字符串类型更改为Object类型（与`z-swiper-item`保持一致）。
- `z-swiper-item` 删除了加载的效果。

**Fix**

- 修复因数据改变而无法正确触发更新的问题。
- 修复方法 `disable` `enable`  提示未定义的问题。

**Perf**

- 组件首次渲染速度优化。
- loop模式处理数据后才开始加载swiper，确保数据的一致性。
- 部分同步方法更改为异步，体验更流畅。
## 2.1.4（2022-03-05）
`2022-03-05`

**Feat**

- 高级案例加入开屏页。[点击预览](https://swiper.zebraui.com/h5/pages/demos/paper/index)

**Fix**

- 修复百度小程序高度计算错误的问题。
## 2.1.3（2022-03-03）
`2022-03-03`

**Feat**

- 新增高级案例模块。
- 高级案例加入环游地球。[点击预览](https://swiper.zebraui.com/h5/pages/demos/travel-slider/index)
- 微信小程序，qq小程序使用wxs赋值样式。
## 2.1.2（2022-03-02）
`2022-03-02`

本次改版涉及所有开启loop的功能。请更新后删除手动拼接的数据。

**Feat**

- loop无限循环模式无需再手动拼接数据。
## 2.1.1（2022-03-01）
`2022-03-01`

**Fix**

- 修复字节小程序轮播内容不显示的问题。
- 修复字节小程序获取位置信息错误的问题。

**Docs**

- [文档新增事件。](https://swiper.zebraui.com/basic/events/)
## 2.1.0（2022-02-27）
`2022-02-27`

更新须知

使用组件时，需在z-swiper标签上以`v-model`的形式传入list数据，也就是要循环的列表数据，该属性为强制性，不加会导致意外错误。例：

之前的方式：

```vue
<z-swiper>
        <z-swiper-item v-for="(item,index) in list" :key="index">
		<image class="image" :src="item" mode="aspectFill">
		</image>
	</z-swiper-item>
</z-swiper>
```

现在的方式：

```vue
<z-swiper v-model="list"> //这里传入的需和下方循环的保持一致
	<z-swiper-item v-for="(item,index) in list" :key="index">
		<image class="image" :src="item" mode="aspectFill">
		</image>
	</z-swiper-item>
</z-swiper>
```

这个操作也为swiper接管数据操作铺垫，对后续很多新功能非常有用，也为loop无限循环的痛点提供了解决方案。

**Fix**

- 修复数据为空时报错。
- 修复请求数据时swiper提前初始化的问题。

**Feat**

- 新增滚动条功能。
## 2.0.1（2022-02-25）
`2022-02-25`

**Fix**

- 修复插槽内容class样式不生效问题。

**Feat**

- 新增缩略图功能。
## 2.0.0（2022-02-24）
`2022-02-24`

**Feat**

- 该版本为破坏性改版，无法兼容1.0。
- 代码重构，使用模块化将功能分割，大幅提升性能，方便后续维护。
- 全面对标swiper组件，并实现全端兼容。小程序也可实现炫酷的轮播效果。
- 所有切换效果全部支持loop无限循环。
- 新增全景切换效果。
- 新增轮播块功能，可自定义显示数量。
- 新增进度条指示器。
## 1.0.7（2022-01-25）
`2022-01-25`

**Feat**

- 新增轮播切换器功能，可使用默认切换或自定义切换。
- 示例项目新增切换器的使用及自定义切换器。
## 1.0.6（2022-01-24）
`2022-01-24`

**Chore**

- 示例项目新增指示器的使用及自定义指示器。
## 1.0.5（2022-01-21）
`2022-01-21`

**Docs**

- README.md新增手机预览，包含微信，支付宝小程序码，H5二维码。
## 1.0.4（2022-01-20）
`2022-01-20`

**Style**

- 示例项目首页px统一修改为rpx。
## 1.0.3（2022-01-19）
`2022-01-19`

**Fix**

- 修复轮播设置为纵向时，高度错误的问题。
- 修复在百度小程序中样式错乱的问题。

## 1.0.2（2022-01-18）
`2022-01-18`
**Docs**

- README.md新增gif预览图
- 修复因未知原因引起的uni_modules组件上传错误的问题。

`2022-01-14`
### [v1.0.1](https://github.com/zebra-ui/zebra-uniapp-swiper)
**Feature**

- 新增zebra-swiper,zebra-swiper-item组件。
- 新增多种3D切换效果。包括渐变，方块，3D流，翻转，卡片，创意性等多种切换效果。
- 新增[示例项目](https://swiper.zebraui.com)，包含多种切换效果示例。
