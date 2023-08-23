# 基础使用

zebraSwiper 组件主要由 `z-swiper` ， `z-swiper-item` 组成。

其中， `z-swiper-item` 组件只可放置在 `z-swiper` 组件中。

## 基础用法

```html
<z-swiper v-model="list">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
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
```

```css
.image {
  height: 300rpx;
  width: 100%;
}
```

## 监听事件

通过 `@slideChange` 事件即可监听 `swiper` 的变化。当 swiper 通过滑动发生变化，自动播放发生变化，手动切换发生变化时，都会触发该事件。
该事件返回一个 swiper 实例，可以获取 swiper 中的任意参数。

```html
<z-swiper v-model="list" ref="zSwiper" @slideChange="onChange">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
onChange(swiper) {
    uni.showToast({
        title: '当前 swiper 索引：' + swiper.activeIndex,
        icon: 'none'
    })
}
```

## 纵向滑动

通过在 `options` 中添加 `direction: 'vertical'` 即可设置 swiper 为纵向，这个配置在所有切换效果中都可支持。

:::warning 注意
在设置为纵向后，必须为 swiper 指定一个高度。可以通过 `custom-style` 设置组件的高度。
:::

```html
<z-swiper v-model="list" :custom-style="{height:'300rpx'}" :options="options">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
data() {
    return {
        options: {
            direction: 'vertical'
        },
        list: [
            'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
            'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
            'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
            'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
            'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg',
        ]
    }
},
```

## 切换速度

通过在 `options` 中添加 `speed` 属性即可设置 swiper 的切换速度。这个配置的单位是 `ms` 。

```html
<z-swiper v-model="list" :options="{speed:2000}">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

## 禁用

通过在 `options` 中添加 `enabled` 属性并设置为 `false` 即可设置 swiper 为禁用状态。

```html
<z-swiper v-model="list" :options="{enabled:false}">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

<Simulator src="https://swiper.zebraui.com/h5/pages/base/index"></Simulator>
