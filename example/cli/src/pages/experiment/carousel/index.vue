<template>
  <view class="demo-swiper">
    <demo-block title="层叠">
      <z-swiper
        v-model:list="list"
        loop
        watchSlidesProgress
        slidesPerView="auto"
        centeredSlides
        @setTranslate="onSetTranslate"
        @setTransition="onSetTransition"
      >
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="{ width: '500rpx' }"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import data from '../../../common/js/data.js'
const list = ref([...data])
const onSetTranslate = (swiper, translate) => {
  const scaleStep = 0.2
  const zIndexMax = swiper.slides.length
  for (let i = 0; i < swiper.slides.length; i += 1) {
    const slideEl = swiper.slides[i]
    const slideProgress = swiper.slides[i].progress
    const absProgress = Math.abs(slideProgress)
    let modify = 1
    if (absProgress > 1) {
      modify = (absProgress - 1) * 0.3 + 1
    }
    const translate = `${slideProgress * modify * 50}%`
    const scale = 1 - absProgress * scaleStep
    const zIndex = zIndexMax - Math.abs(Math.round(slideProgress))
    const slideTransform = `translateX(${translate}) scale(${scale})`
    slideEl.style.transform = slideTransform
    slideEl.style.zIndex = zIndex
    if (absProgress > 3) {
      slideEl.style.opacity = 0
    } else {
      slideEl.style.opacity = 1
    }
  }
}

const onSetTransition = (swiper, duration) => {
  swiper.slides.forEach((el) => {
    el.style.transitionDuration = `${duration}ms`
  })
}
</script>
