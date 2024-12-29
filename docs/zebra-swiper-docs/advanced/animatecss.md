---
outline: deep
---

# 与animate.css搭配使用 {#swiper-and-animatecss}

<script setup>
  import {
  ref
  } from 'vue';
  const list = ref(Array.from({
   length: 5
  }).map((item, index) => {
    return {
     text: `Slide ${index + 1}`,
     id: index + 1
    }
   }
  ))
</script>

::: warning
该方法中动画无法实时根据手指滑动的进程进行动态调整。
:::

## 在swiper-item中使用animatecss {#use-animatecss-for-item}

### Swiper 动画效果的类名机制与实现方法 {#use-class-animate-methods}

在交互式网页设计中，`swiper` 通常提供以下三种关键类名来标识不同状态的滑动项：

- **`swiper-slide-active`**：当前处于活动状态的滑动项。
- **`swiper-slide-prev`**：当前活动滑动项的前一项。
- **`swiper-slide-next`**：当前活动滑动项的后一项。

通过结合这些类名与 `animate.css` 等动画样式库，可以设计出多样化的视觉效果。例如，可以在滑动项切换时添加动态的进入和退出动画，从而增强用户体验。

#### 动画触发的机制与局限性 {#swiper-animate-trigger}

::: tip 提示
采用基于类名的动画控制方法时，动画的触发依赖于类名的改变。也就是说，当通过滑动或拖动操作切换滑动项时，只有在类名发生变化的情况下，动画才会被触发。因此，若类名未更新，动画不会实时响应用户的手势滑动。

这种机制的主要局限性在于，**动画无法实时根据手指滑动的进程进行动态调整**。

然而，这一实现方式的显著优点在于，其对性能的影响较低，特别是在需要处理复杂场景时。对于可以接受动画延后触发的场景，这种方法能够有效减轻渲染压力。

值得一提的是，uniapp和小程序自带的`swiper`组件，通常实现不一样的轮播效果时，基本都是采用`current`判断下标从而改变类名的方式。所以自带的swiper组件在功能上有很多局限性。
:::

#### 使用该机制实现简单的轮播效果 {#mechanism-to-achieve-simple-effects}

实现常见的中间大两边小的轮播效果。

::: tip
示例仅展示该机制的使用方法。

`zebra-swiper`提供了更完整的类似轮播效果，如`effect-coverflow` `effect-creative`，以及通过自定义实现的**层叠效果**，他们都可以根据手指滑动的进程进行动态调整。
:::

<DemoBlock :expanded="false">

<div class="swiper-animate-base">
 <z-swiper grabCursor loop :slidesPerView="3" centeredSlides :spaceBetween="10">
  <z-swiper-item v-for="item in list" :key="item.id">
    <view class="swiper-item-text">
    {{item.text}}
    </view>
  </z-swiper-item>
 </z-swiper>
</div>

<style lang="scss">
.swiper-animate-base {
  padding: 80px;

  .swiper-slide {
    .swiper-item-text {
      transform: scale(0.7);
      transition: all 0.3s ease;
    }
  }

  .swiper-slide-active {
    .swiper-item-text {
      transform: scale(1);
    }
  }

  .swiper-item-text {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    background: #1f8fff;
  }
}
</style>

<template #code>

```html
<script setup>
  import { ref } from 'vue'
  const list = ref(
    Array.from({
      length: 5
    }).map((item, index) => {
      return {
        text: `Slide ${index + 1}`,
        id: index + 1
      }
    })
  )
</script>

<div class="swiper-animate-base">
 <z-swiper grabCursor loop :slidesPerView="3" centeredSlides :spaceBetween="10">
  <z-swiper-item v-for="item in list" :key="item.id">
    <view class="swiper-item-text">
    {{item.text}}
    </view>
  </z-swiper-item>
 </z-swiper>
</div>

<style lang="scss">
.swiper-animate-base {
  padding: 80px;

  .swiper-slide {
    .swiper-item-text {
      transform: scale(0.7);
      transition: all 0.3s ease;
    }
  }

  .swiper-slide-active {
    .swiper-item-text {
      transform: scale(1);
    }
  }

  .swiper-item-text {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    background: #1f8fff;
  }
}
</style>
```

  </template>

</DemoBlock>

## animate示例

swiper结合animate的动画效果。

<DemoBlock :expanded="false">

<div class="swiper-animate-text">
 <z-swiper grabCursor :slidesPerView="3" centeredSlides :spaceBetween="10">
  <z-swiper-item v-for="item in list" :key="item.id">
    <view class="swiper-item-text">
       <view class="text-content">{{item.text}}</view>
    </view>
  </z-swiper-item>
 </z-swiper>
</div>

<style lang="scss">
.swiper-animate-text {
  .swiper-slide-active {
    .swiper-item-text {
         animation: jackInTheBox;
         animation-duration: 1s;

        .text-content{
           animation: fadeInDownBig;
           animation-duration: 1s;
        }
    }
  }
  .swiper-slide-next {
    animation: zoomInRight;
    animation-duration: 1s;

    .swiper-item-text {
        .text-content{
           animation: fadeInRightBig;
           animation-duration: 1s;
        }
    }
  }

  .swiper-slide-prev {
    animation: rollIn;
    animation-duration: 1s;

    .swiper-item-text {
        .text-content{
           animation: fadeInLeftBig;
           animation-duration: 1s;
        }
    }
  }
  
  .swiper-item-text {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    background: #1f8fff;
    font-size:30px;
  }
}
</style>

<template #code>

```html
<div class="swiper-animate-text">
 <z-swiper grabCursor :slidesPerView="3" centeredSlides :spaceBetween="10">
  <z-swiper-item v-for="item in list" :key="item.id">
    <view class="swiper-item-text">
       <view class="text-content">{{item.text}}</view>
    </view>
  </z-swiper-item>
 </z-swiper>
</div>

<style lang="scss">
.swiper-animate-text {
  .swiper-slide-active {
    .swiper-item-text {
         animation: jackInTheBox;
         animation-duration: 1s;

        .text-content{
           animation: fadeInDownBig;
           animation-duration: 1s;
        }
    }
  }
  .swiper-slide-next {
    animation: zoomInRight;
    animation-duration: 1s;

    .swiper-item-text {
        .text-content{
           animation: fadeInRightBig;
           animation-duration: 1s;
        }
    }
  }

  .swiper-slide-prev {
    animation: rollIn;
    animation-duration: 1s;

    .swiper-item-text {
        .text-content{
           animation: fadeInLeftBig;
           animation-duration: 1s;
        }
    }
  }
  
  .swiper-item-text {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    background: #1f8fff;
    font-size:30px;
  }
}
</style>
```

  </template>

</DemoBlock>

同时设置多种动画。

<DemoBlock :expanded="false">

<div class="swiper-animate-more">
 <z-swiper grabCursor :slidesPerView="3" centeredSlides :spaceBetween="10">
  <z-swiper-item v-for="item in list" :key="item.id">
    <view class="swiper-item-text">
       <view class="text-content">{{item.text}}</view>
    </view>
  </z-swiper-item>
 </z-swiper>
</div>

<style lang="scss">
.swiper-animate-more {
  .swiper-slide-active {
    .swiper-item-text {
         animation: bounceInDown 1s,bounceOutDown 1s 1s,bounceInUp 1s 2s;

        .text-content{
           animation: fadeInDownBig;
           animation-duration: 1s;
        }
    }
  }
  .swiper-slide-next {
    animation: rotateInDownRight 1s,rotateOutDownRight 1s 1s,rotateIn 1s 2s;

    .swiper-item-text {
        .text-content{
           animation: fadeInRightBig;
           animation-duration: 1s;
        }
    }
  }

  .swiper-slide-prev {
    animation: slideInLeft 1s,slideOutLeft 1s 1s,zoomInLeft 1s 2s;

    .swiper-item-text {
        .text-content{
           animation: fadeInLeftBig;
           animation-duration: 1s;
        }
    }
  }
  
  .swiper-item-text {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    background: #1f8fff;
    font-size:30px;
  }
}
</style>

<template #code>

```html
<<style lang="scss">
.swiper-animate-more {
  .swiper-slide-active {
    .swiper-item-text {
         animation: bounceInDown 1s,bounceOutDown 1s 1s,bounceInUp 1s 2s;

        .text-content{
           animation: fadeInDownBig;
           animation-duration: 1s;
        }
    }
  }
  .swiper-slide-next {
    animation: rotateInDownRight 1s,rotateOutDownRight 1s 1s,rotateIn 1s 2s;

    .swiper-item-text {
        .text-content{
           animation: fadeInRightBig;
           animation-duration: 1s;
        }
    }
  }

  .swiper-slide-prev {
    animation: slideInLeft 1s,slideOutLeft 1s 1s,zoomInLeft 1s 2s;

    .swiper-item-text {
        .text-content{
           animation: fadeInLeftBig;
           animation-duration: 1s;
        }
    }
  }
  
  .swiper-item-text {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    background: #1f8fff;
    font-size:30px;
  }
}
</style>
```

  </template>

</DemoBlock>
