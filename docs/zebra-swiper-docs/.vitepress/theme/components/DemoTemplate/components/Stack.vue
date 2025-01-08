<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps({
  isMini: Boolean
})

const list = ref(
  Array.from({
    length: 7
  }).map((item, index) => {
    return {
      url: `/images/template/resource/swipe${index + 1}.jpg`,
      id: index + 1
    }
  })
)
const height = ref('0px')
const element = document.getElementById('VPContent')
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    height.value = entry.contentRect.height + 'px'
  }
})

resizeObserver.observe(element as HTMLElement)

const miniStyle = computed(() => {
  if (!props.isMini) return
  return {
    padding: 0,
    height: '100%',
    width: '100%'
  }
})

const stackEffect = {
  opacityStep: 0.33,
  scaleStep: 0.2,
  sideSlides: 2
}

const onSetTranslate = (swiper, translate) => {
  const scaleStep = stackEffect.scaleStep
  const zIndexMax = swiper.slides.length
  const stackSideSlides = Math.max(Math.min(stackEffect.sideSlides, 3), 1)
  const stackSideSlidesValue = { 1: 2, 2: 1, 3: 0.2 }[stackSideSlides]
  // 循环遍历每个swiper-item
  for (let i = 0; i < swiper.slides.length; i += 1) {
    const slideEl = swiper.slides[i]
    // 每个swiper-item的进度
    const slideProgress = swiper.slides[i].progress
    const absProgress = Math.abs(slideProgress)
    let modify = 1
    if (absProgress > 1) {
      modify = (absProgress - 1) * 0.3 * stackSideSlidesValue! + 1
    }
    // 计算swiper-item的样式
    const translate = `${slideProgress * modify * 50}%`
    const scale = 1 - absProgress * scaleStep
    const zIndex = zIndexMax - Math.abs(Math.round(slideProgress))
    // 最终赋值给swiper-item的样式
    const slideTransform = `translateX(${translate}) scale(${scale})`
    slideEl.style.transform = slideTransform
    slideEl.style.zIndex = zIndex
    slideEl.style.opacity = absProgress > stackSideSlides + 1 ? 0 : 1
  }
}

const onSetTransition = (swiper, duration) => {
  swiper.slides.forEach((el) => {
    // 为每个swiper-item设置transitionDuration
    el.style.transitionDuration = `${duration}ms`
  })
}
</script>

<template>
  <div
    class="zebra-template-component-stack"
    :style="{ height: height, ...miniStyle }"
  >
    <z-swiper
      :enabled="!isMini"
      grabCursor
      loop
      watchSlidesProgress
      slidesPerView="2"
      centeredSlides
      @setTranslate="onSetTranslate"
      @setTransition="onSetTransition"
    >
      <z-swiper-item v-for="item in list" :key="item.id">
        <img
          :src="item.url"
          :style="{ borderRadius: isMini ? '4px' : '20px' }"
        />
      </z-swiper-item>
    </z-swiper>
  </div>
</template>

<style lang="scss" scoped>
.zebra-template-component-stack {
  height: 100%;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper {
    height: 70%;
    width: 70%;
  }

  @media (max-width: 768px) {
    .swiper {
      height: 40%;
      width: 100%;
    }
  }

  .swiper-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
}

@media (max-width: 768px) {
  .zebra-template-component-stack {
    padding: 10px;
  }
}
</style>
