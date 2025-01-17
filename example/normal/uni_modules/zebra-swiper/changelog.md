## 3.0.2（2025-01-17）
`2025-01-17`

#### 重要更新 ✨

在组件内部实现中，`props` 的声明方式已发生调整。这一变化并不影响开发者的使用方法。

此前的实现方式：

`withDefaults(defineProps<propsType>(), { ... })`

现已更改为传统形式：

`defineProps({...})`

此次变更涉及以下组件：
- `z-swiper`
- `z-swiper-item`
- `z-navigation`
- `z-pagination`
- `z-scrollbar`

该调整旨在提升对 `JavaScript` 项目的兼容性与友好性。

#### Bug 修复 ⚙️

- fix(swiper)：⚙️ 修复 小程序中使用特殊切换效果时，`transitionend`不执行的问题 by [@Tanch](https://github.com/Ru1ers) in [#0777fce](https://github.com/zebra-ui/zebra-swiper/pull/58/commits/0777fce88a99633eb0a6502b26f1b02425dfa813)。
- fix(swiper)：⚙️ 修复 当开启`autoplay`时，设置`delay`为`0`，小程序出现`requestAnimationFrame`相关异常 by [@Tanch](https://github.com/Ru1ers) in [#c9cca9c](https://github.com/zebra-ui/zebra-swiper/pull/58/commits/c9cca9c69697fb4c4684e32567307cd91e9de7a5)。
- fix(swiper)：⚙️ 修复 在弹窗中使用`swiper`时，小程序无法正常计算宽度与高度的问题 by [@Tanch](https://github.com/Ru1ers) in [#c40f96](https://github.com/zebra-ui/zebra-swiper/pull/58/commits/c40f96ca47d7c561939a8eceb10bbab18a1e3007)。
小程序在弹窗中使用swiper时，需提前设置`width`,`height`。具体可参考文档：
[小程序在弹窗 popup 中使用 swiper 时的加载问题](https://swiper.zebraui.com/guide/faq.html#swiper-on-popup-error)。

#### 文档更新 ✅

- docs: ✅ 组件文档新增[Template](https://swiper.zebraui.com/template/) 模板 by [@Tanch](https://github.com/Ru1ers) in [#57](https://github.com/zebra-ui/zebra-swiper/pull/57)。
## 3.0.1（2025-01-05）
`2025-01-05`

#### Bug 修复 ⚙️

- fix(swiper)：⚙️ 修复 因`touchstart` `touchmove` 事件的`passive`修饰符引起的App端无法滑动的问题 by [@Ru1ers](https://github.com/Ru1ers) in [#55](https://github.com/zebra-ui/zebra-swiper/pull/55)，close [#52](https://github.com/zebra-ui/zebra-swiper/issues/52)。
- fix(swiper-native)：⚙️ 修复 `virtual` 模式下二次赋值时，页面不更新的问题 by [@Ru1ers](https://github.com/Ru1ers) in [#56](https://github.com/zebra-ui/zebra-swiper/pull/56)。
- fix(swiper)：⚙️ 修复 使用切换效果时，`swiperSlideOffset` 获取不准确的问题 by [@Ru1ers](https://github.com/Ru1ers) in [#56](https://github.com/zebra-ui/zebra-swiper/pull/56)。

#### 文档更新 ✅

- docs: ✅ 组件文档新增[Playground](https://swiper.zebraui.com/playground/base.html) 集成`codesandbox` by [@Ru1ers](https://github.com/Ru1ers) in [#53](https://github.com/zebra-ui/zebra-swiper/pull/53)。
## 3.0.0（2025-01-01）

`2025-01-01`

#### 重要更新 ✨

`zebra-swiper` 组件已基于`vue3` + `TypeScript`重构。

**`zebra-swiper`3.0已不再兼容`vue2`**，同时，2.x版本非重大问题，将不再继续维护，且不再提供新功能。得益于`vue3`的proxy代理机制，`zebra-swiper`组件在性能上得到较大提升。

有关从2.x迁移至3.0的详细内容，请参考文档[从 2.x 迁移](https://swiper.zebraui.com/guide/migrate.html)。

3.0版本主要做出以下重大变更：

- 1.参数传递的结构性调整
- 2.事件监听机制的优化
- 3.`v-model` 的使用调整
- 4.`loop` 逻辑的深度重构
- 5.模块化按需引入

#### 新功能 ✨

- feat(swiper)：✨ `zebra-swiper` 组件基于`vue3` + `TypeScript`重构 by [@Ru1ers](https://github.com/Ru1ers) in [#33](https://github.com/zebra-ui/zebra-swiper/pull/33)。

#### 文档更新 ✅

- docs: ✅ 组件文档基于`vitepress`重构 by [@Ru1ers](https://github.com/Ru1ers) in [#33](https://github.com/zebra-ui/zebra-swiper/pull/33)。3.0文档提供更为完善的使用方法，以及更直观的展现方式。

#### 其他更改

- ci: ⚡ 新增文档自动构建`github-page`流程。
- ci: ⚡ 新增文档自动上传服务器流程。
- ci: ⚡ 新增组件自动发布`github`-`release`流程。

## 2.2.8（2023-12-21）

`2023-12-21`

**Fix**

- 修复`vue3`关于`transitionEnd`的相关报错。
- 修复`vue3`关于`emit`的相关警告。
- 修复`vue3`提示`onResize`方法的的警告。
- 修复`vue3`无法使用`virtual`的错误。
- 新增关于`vue3`的[示例项目](https://github.com/zebra-ui/zebra-swiper/tree/master/demos)，包含组合式api用法，开发者在`vue3`项目中使用`zebra-swiper`可获得更好的开发体验。

## 2.2.7（2023-09-15）

`2023-09-15`

**Feat**

- 新增`controller`控制器，用于多个swiper之间同步切换状态。
- 新增虚拟`slide`配置，用于处理在大量数据时产生的卡顿问题。（只能作用于`view`标签，图片及其他标签会出现闪烁问题，h5可使用`img`标签。）
- 示例项目样式及目录结构更改。

**Fix**

- 修复`swiper`滑动时会导致页面发生滚动的问题。

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
- 修复方法 `disable` `enable` 提示未定义的问题。

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
