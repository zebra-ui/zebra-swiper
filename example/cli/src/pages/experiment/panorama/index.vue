<template>
  <view class="demo-swiper">
    <demo-block title="全景">
      <z-swiper
        v-model:list="list"
        loop
        watchSlidesProgress
        slidesPerView="auto"
        centeredSlides
        @beforeInit="onSwiperBeforeInit"
        @setTranslate="onSetTranslate"
        @setTransition="onSetTransition"
      >
        <z-swiper-item
          v-for="item in list"
          :key="item.id"
          :custom-style="{ width: '400rpx' }"
        >
          <demo-item :item="item"></demo-item>
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="反向全景">
      <z-swiper
        v-model:list="listReverse"
        loop
        watchSlidesProgress
        slidesPerView="auto"
        centeredSlides
        @beforeInit="onSwiperBeforeInitReverse"
        @setTranslate="onSetTranslateReverse"
        @setTransition="onSetTransitionReverse"
      >
        <z-swiper-item
          v-for="item in listReverse"
          :key="item.id"
          :custom-style="{ width: '400rpx' }"
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
const listReverse = ref([...data])
const options = {
  panorama: {
    depth: 300,
    rotate: 50,
    stretch: 1
  },
  panoramaReverse: {
    depth: 300,
    rotate: -50,
    stretch: 1
  }
}

const onSwiperBeforeInit = (swiper) => {
  swiper.classNames.push(`${swiper.params.containerModifierClass}3d`)
}

const onSwiperBeforeInitReverse = (swiper) => {
  swiper.classNames.push(`${swiper.params.containerModifierClass}3d`)
}

const onSetTranslate = (swiper) => {
  const sizesGrid = swiper.slidesSizesGrid
  const { depth, rotate, stretch } = options.panorama
  const angleRad = (rotate * Math.PI) / 180
  const halfAngleRad = angleRad / 2
  const angleModifier = 1 / (180 / rotate)

  for (let i = 0; i < swiper.slides.length; i += 1) {
    const slideEl = swiper.slides[i]
    const slideProgress = slideEl.progress
    const slideSize = sizesGrid[i]
    const progressModifier = swiper.params.centeredSlides
      ? 0
      : (swiper.params.slidesPerView - 1) * 0.5
    const modifiedProgress = slideProgress + progressModifier
    const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI)
    const translateX = `${modifiedProgress * ((stretch * slideSize) / 3) * angleCos}px`
    const rotateY = modifiedProgress * rotate
    const radius = (slideSize * 0.5) / Math.sin(halfAngleRad)
    const translateZ = `${radius * angleCos - depth}px`
    slideEl.style.transform = `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)`
  }
}

const onSetTranslateReverse = (swiper) => {
  const sizesGrid = swiper.slidesSizesGrid
  const { depth, rotate, stretch } = options.panoramaReverse
  const angleRad = (rotate * Math.PI) / 180
  const halfAngleRad = angleRad / 2
  const angleModifier = 1 / (180 / rotate)

  for (let i = 0; i < swiper.slides.length; i += 1) {
    const slideEl = swiper.slides[i]
    const slideProgress = slideEl.progress
    const slideSize = sizesGrid[i]
    const progressModifier = swiper.params.centeredSlides
      ? 0
      : (swiper.params.slidesPerView - 1) * 0.5
    const modifiedProgress = slideProgress + progressModifier
    const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI)
    const translateX = `${modifiedProgress * ((stretch * slideSize) / 3) * angleCos}px`
    const rotateY = modifiedProgress * rotate
    const radius = (slideSize * 0.5) / Math.sin(halfAngleRad)
    const translateZ = `${radius * angleCos - depth}px`
    slideEl.style.transform = `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)`
  }
}

const onSetTransition = (swiper, duration) => {
  swiper.slides.forEach((el) => {
    el.style.transitionDuration = `${duration}ms`
  })
}

const onSetTransitionReverse = (swiper, duration) => {
  swiper.slides.forEach((el) => {
    el.style.transitionDuration = `${duration}ms`
  })
}
</script>
