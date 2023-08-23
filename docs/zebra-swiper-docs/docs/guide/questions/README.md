# 常见问题

## 1. 如果 z-swiper-item 不使用循环的话，v-model 该如何设置？

#### v-model 存在的意义是为了判断所有子组件的加载状态，以及接管渲染的数据。

#### 如果你的 z-swiper-item 是静态的，那么你也需要将 item 的数量告知 swiper。

#### v-model 接收一个数组，例如你有三个 item，你可以这样传：

#### listCount: Array(... Array(3))

#### 总之，你要传递一个长度与 item 的数量一致的数组。

## 2. 部分切换效果开启 loop 后，首尾处的图片会出现闪烁。

#### uniapp 的 image 组件加载需要时间，并且改变图片的位置也需要一个过渡，所以会出现闪烁问题。该问题暂无优化思路。

## 3. 数据多时会卡顿，该如何优化？

#### 卡顿的根本原因在于页面存在过多的 dom，而操作的 dom 越多，耗时就越长。可以将数据进行分页或切割。

## 4. 页面空白，出现加载。

#### swiper2.0 版本后，需要在 z-swiper 上加如 `v-model` 属性，绑定循环的列表。如果仍不能正确显示，请审查元素，检查数据。

#### 如有 swiper 的报错信息，欢迎加群反馈。

## 5. 通过 vue-cli 创建的项目，编译时提示'userAgent' of undefined 或 Module parse failed: Identifier 'key' has already been declared。

#### 导致这个的原因是 node_modules 中的 uniapp 条件编译没有转义，所以编译时无法生效，导致一些代码存在重复定义或未定义的错误。

#### 解决方案为，在 vue.config.js 配置 transpileDependencies 选项。

#### 参考：[链接](https://cli.vuejs.org/zh/config/#transpiledependencies)

## 6.swiper 触摸无法触发页面滚动。

#### 这个问题是事件冒泡导致的。在 2.2.2 版本之后，移除了默认的阻值触摸冒泡。
