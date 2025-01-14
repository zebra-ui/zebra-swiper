<script setup>
import { computed, ref } from 'vue'
import { Autoplay } from '@zebra-ui/swiper/modules'
import { isWeb } from '@zebra-ui/swiper/components/shared/utils'

const props = defineProps({
  height: String,
  width: String
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

const modules = ref([Autoplay])
const splitNumber = ref(6)
const swiperInstance = ref(null)
let isLoopFix = ref(false)
// swiper监听
const onSwiperBeforeInit = (swiper) => {
  swiper.classNames.push('swiper-slicer')
}
const swiperOnInit = (swiper) => {
  createSlicerClones()
  setSlicerSize(swiper)
  swiper.emit('setTranslate', swiper, swiper.translate)
}
const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}
const onSlidesLengthChange = (swiper) => {
  createSlicerClones()
  setSlicerSize(swiper)
}
const onSwiperResize = (swiper) => {
  setSlicerSize(swiper)
}
const onSetTransition = (swiper, duration) => {
  setTransition(swiper, duration)
}
const onSetTranslate = (swiper, translate) => {
  setSlicerEffect(swiper)
}
const onBeforeLoopFix = () => {
  isLoopFix.value = true
}
const onLoopFix = () => {
  isLoopFix.value = false
}
const slicerImageTransitionend = (e) => {
  if (e.target.dataset.swiperItemActive == swiperInstance.value.activeIndex) {
    if (e.target.dataset.swiperItemCloneActive == 0) {
      swiperInstance.value.animating = false
      const transitionEndEvent = isWeb()
        ? new window.CustomEvent('transitionend', {
            bubbles: true,
            cancelable: true
          })
        : {
            bubbles: true,
            cancelable: true,
            target: {
              // @ts-ignore
              id: `swiperWrapper${swiperInstance.value.adapterEl?.uid}`
            }
          }
      swiperInstance.value.wrapperEl.dispatchEvent(transitionEndEvent)
    }
  }
}

// 创建切片克隆
const createSlicerClones = () => {
  list.value.forEach((slide) => {
    slide.clones = Array.from({
      length: splitNumber.value
    }).map((child, childIndex) => {
      const sliceSize = 100 / splitNumber.value
      return {
        url: slide.url,
        id: `childIndex${childIndex}`,
        viewStyle: {},
        imageStyle: {}
      }
    })
  })
}

// 设置切片尺寸
const setSlicerSize = (swiper) => {
  list.value.forEach((slide) => {
    slide.clones.forEach((clone, index) => {
      const sliceSize = 100 / splitNumber.value
      clone.imageStyle.width = `${swiper.width}px`
      clone.imageStyle.height = `${swiper.height}px`
      if (swiper.params.direction === 'horizontal') {
        clone.viewStyle.height = `${sliceSize}%`
        clone.viewStyle.top = `${sliceSize * index}%`
        clone.imageStyle.top = `-${100 * index}%`
      } else {
        clone.viewStyle.width = `${sliceSize}%`
        clone.viewStyle.left = `${sliceSize * index}%`
        clone.imageStyle.left = `-${100 * index}%`
      }
    })
  })
}

// 设置过渡效果
const setTransition = (swiper, duration) => {
  swiper.slides.forEach((el) => {
    el.style.transitionDuration = `${duration}ms`
  })
  list.value.forEach((slide) => {
    const clones = slide.clones
    clones.forEach((clone, index) => {
      if (duration === 0) {
        clone.viewStyle.transitionTimingFunction = 'ease-out'
        clone.viewStyle.transitionDuration = isLoopFix.value
          ? '0ms'
          : `${
              swiper.params.speed +
              (swiper.params.speed / (clones.length - 1)) *
                (clones.length - index - 1)
            }ms`
      } else {
        clone.viewStyle.transitionTimingFunction = ''
        clone.viewStyle.transitionDuration = `${
          duration +
          (duration / (clones.length - 1)) * (clones.length - index - 1)
        }ms`
      }
    })
  })
}

// 处理过渡结束事件
const handleTransitionEnd = ({ swiper, duration }) => {
  const { slides, activeIndex } = swiper
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled

  if (duration === 0) return

  let transitionEnded = false
  const firstClone = (
    isVirtual
      ? slides.find(
          (slide) =>
            parseInt(slide.getAttribute('data-swiper-slide-index'), 10) ===
            activeIndex
        )
      : slides[activeIndex]
  ).querySelector('.swiper-slicer-image-clone:nth-child(1)')

  if (!firstClone) return

  const onTransitionEnd = (e) => {
    if (e.target !== firstClone) return
    if (transitionEnded) return
    if (!swiper || swiper.destroyed) return

    firstClone.removeEventListener('transitionend', onTransitionEnd)
    transitionEnded = true
    swiper.animating = false

    const transitionEndEvent = new window.CustomEvent('transitionend', {
      bubbles: true,
      cancelable: true
    })
    swiper.wrapperEl.dispatchEvent(transitionEndEvent)
  }

  firstClone.addEventListener('transitionend', onTransitionEnd)
}

// 设置切片效果
const setSlicerEffect = (swiper) => {
  const axis = swiper.params.direction === 'vertical' ? 'Y' : 'X'
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled

  swiper.slides.forEach((slide, slideIndex) => {
    if (isVirtual) {
      slideIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10)
    }

    slide.style.transform = `translate${axis}(-${slideIndex * 100}%)`

    const progress = slide.progress
    if (list.value[slideIndex]) {
      list.value[slideIndex].clones.forEach((clone) => {
        const translate = -progress
        clone.viewStyle.transform = `translate${axis}(${translate * 100}%)`
      })
    }
  })
}
</script>

<template>
  <div
    class="zebra-template-component-stack"
    :style="{ height: props.height, width: '100%' }"
  >
    <z-swiper
      grabCursor
      autoplay
      rewind
      :speed="1000"
      watchSlidesProgress
      virtualTranslate
      :modules="modules"
      :custom-style="{ height: props.height, width: props.width }"
      @beforeInit="onSwiperBeforeInit"
      @init="swiperOnInit"
      @swiper="onSwiper"
      @slidesLengthChange="onSlidesLengthChange"
      @resize="onSwiperResize"
      @setTransition="onSetTransition"
      @setTranslate="onSetTranslate"
      @beforeLoopFix="onBeforeLoopFix"
      @loopFix="onLoopFix"
    >
      <z-swiper-item v-for="(item, index) in list" :key="item.id">
        <image
          class="swiper-slicer-image"
          :src="item.url"
          mode="aspectFill"
        ></image>
        <div class="swiper-slicer-image-clones">
          <div
            class="swiper-slicer-image-clone"
            v-for="(clone, cloneIndex) in item.clones"
            :key="clone.id"
            :data-swiper-item-active="index"
            :data-swiper-item-clone-active="cloneIndex"
            :style="clone.viewStyle"
            @transitionend="slicerImageTransitionend"
          >
            <img
              class="swiper-slicer-image"
              :src="clone.url"
              :style="clone.imageStyle"
            />
          </div>
        </div>
      </z-swiper-item>
    </z-swiper>
  </div>
</template>

<style lang="scss" scoped>
.zebra-template-component-stack {
  .swiper-slicer-image {
    display: none;
    object-fit: cover;
    object-position: center;
    max-width: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .swiper-slicer {
    height: 100%;
    width: 100%;

    .swiper-slide {
      overflow: hidden;
    }
  }

  .swiper-slicer-image-clones {
    .swiper-slicer-image-clone {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      transition-timing-function: cubic-bezier(1, 0, 0.5, 1);

      .swiper-slicer-image {
        display: block;
      }
    }
  }
}
</style>
