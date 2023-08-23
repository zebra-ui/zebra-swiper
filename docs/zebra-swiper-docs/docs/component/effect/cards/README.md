# 卡片式

在 `options` 中添加 `effect` 属性并设置为 `cards` ，即可使用 3D 翻转的切换效果。

```html
<z-swiper v-model="list" :options="options">
  <z-swiper-item
    :custom-style="slideCustomStyle"
    v-for="(item,index) in list"
    :key="index"
  >
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
slideCustomStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '36rpx'
    },
    options: {
        effect: 'cards'
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
  height: 640rpx;
  width: 480rpx;
  border-radius: 24rpx;
}
```

<Simulator src="https://swiper.zebraui.com/h5/pages/cards/index"></Simulator>
