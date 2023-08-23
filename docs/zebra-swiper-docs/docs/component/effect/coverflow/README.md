# 3D 流

在 `options` 中添加 `effect` 属性并设置为 `coverflow` ，即可使用 3D 流的切换效果。

```html
<z-swiper v-model="list" :options="options">
  <z-swiper-item
    :custom-style="{width:'500rpx',height:'500rpx'}"
    v-for="(item,index) in list"
    :key="index"
  >
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
options: {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
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
  height: 100%;
  width: 100%;
}
```

<Simulator src="https://swiper.zebraui.com/h5/pages/coverflow/index"></Simulator>
