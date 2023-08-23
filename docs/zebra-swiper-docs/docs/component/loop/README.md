# 循环

## 基础用法

设置 `loop` 为 true，即可开启循环。

```html
<z-swiper v-model="list" :options="{loop : true}">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
list: [
    'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
    'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
    'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
    'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
    'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg'
],
```

```css
.demo-swiper {
  .image {
    height: 300rpx;
    width: 100%;
  }
}
```

<Simulator src="https://swiper.zebraui.com/h5/pages/loop/index"></Simulator>
