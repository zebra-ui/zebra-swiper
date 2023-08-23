# 轮播块

## 数量

通过设置 `slidesPerView` 即可设置轮播的显示数量。

```html
<z-swiper v-model="list" :options="{slidesPerView : 2}">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

## 居中

通过设置 `centeredSlides` 为 `true` 即可使轮播居中。

```html
<z-swiper v-model="list" :options="{slidesPerView : 2,centeredSlides : true}">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

## 贴合边缘

通过设置 `centeredSlidesBounds` 为 `true` 即可使轮播贴合边缘。

```html
<z-swiper
  v-model="list"
  :options="{slidesPerView : 3,centeredSlides : true,centeredSlidesBounds: true}"
>
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

## 分组

通过设置 `slidesPerGroup` 即可设置分组数量。

```html
<z-swiper v-model="list" :options="{slidesPerView : 3, slidesPerGroup : 3}">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

## 距离

通过设置 `spaceBetween` 即可设置每个 slide 之间的距离。

```html
<z-swiper v-model="list" :options="{slidesPerView : 3,spaceBetween : 20}">
  <z-swiper-item v-for="(item,index) in list" :key="index">
    <image class="image" :src="item" mode="aspectFill"> </image>
  </z-swiper-item>
</z-swiper>
```

<Simulator src="https://swiper.zebraui.com/h5/pages/carousel/index"></Simulator>
