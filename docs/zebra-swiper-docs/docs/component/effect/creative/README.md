# 创意性

在 `options` 中添加 `effect` 属性并设置为 `creative` ，即可使用创意切换。由于创意切换的 Slide 全部层叠在当前窗口，因此你还需要设置 creativeEffect 来制作想要的效果。

切换的参数将会在配置中详细解释。

```html
<z-swiper v-model="list" :options="options1">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
<z-swiper v-model="list" :options="options2">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
<z-swiper v-model="list" :options="options3">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
<z-swiper v-model="list" :options="options4">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
<z-swiper v-model="list" :options="options5">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
<z-swiper v-model="list" :options="options6">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

```js
data() {
    return {
        options1: {
            effect: 'creative',
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0]
                }
            }
        },
        options2: {
            effect: 'creative',
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ['-120%', 0, -500],
                },
                next: {
                    shadow: true,
                    translate: ['120%', 0, -500]
                }
            }
        },
        options3: {
            effect: 'creative',
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0]
                }
            }
        },
        options4: {
            effect: 'creative',
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: [0, 0, -800],
                    rotate: [180, 0, 0],
                },
                next: {
                    shadow: true,
                    translate: [0, 0, -800],
                    rotate: [-180, 0, 0]
                }
            }
        },
        options5: {
            effect: 'creative',
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ['-125%', 0, -800],
                    rotate: [0, 0, -90],
                },
                next: {
                    shadow: true,
                    translate: ['125%', 0, -800],
                    rotate: [0, 0, 90]
                }
            }
        },
        options6: {
            effect: 'creative',
            creativeEffect: {
                prev: {
                    shadow: true,
                    origin: 'left center',
                    translate: ['-5%', 0, -200],
                    rotate: [0, 100, 0],
                },
                next: {
                    origin: 'right center',
                    translate: ['5%', 0, -200],
                    rotate: [0, -100, 0],
                }
            }
        },
        list: [
            'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
            'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
            'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
            'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
            'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg',
        ],
    }
},
```

```css
.image {
  height: 300rpx;
  width: 100%;
}
```

<Simulator src="https://swiper.zebraui.com/h5/pages/creative/index"></Simulator>
