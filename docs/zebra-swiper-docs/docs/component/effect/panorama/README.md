# 全景

在 `options` 中添加 `effect` 属性并设置为 `panorama` ，即可使用全景的切换效果。

```html
<z-swiper v-model="list" :options="options">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
options: {
        effect: 'panorama',
        slidesPerView: 1.5,
        centeredSlides: true,
        panorama: {
            depth: 150,
            rotate: 45,
        },
    },
    list: [
        'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
        'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
        'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
        'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
        'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg',
    ],
```

```css
.image {
  height: 300rpx;
  width: 100%;
}
```

<Simulator src="https://swiper.zebraui.com/h5/pages/panorama/index"></Simulator>
