import createShadow from '../../components/shared/create-shadow'
import effectInit from '../../components/shared/effect-init'
import effectTarget from '../../components/shared/effect-target'
import effectVirtualTransitionEnd from '../../components/shared/effect-virtual-transition-end'
import {
  getRotateFix,
  getSlideTransformEl,
  isWeb
} from '../../components/shared/utils'
import type { FlipEffectOptions } from '../../types/module/effect-flip'
import type { SwiperInterface } from '../../types/swiper-class'
import type { SwiperItemInstance } from '../../types/swiper-item-instance'

export default function EffectFlip({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    } as FlipEffectOptions
  })

  const createSlideShadows = (
    slideEl: HTMLElement | SwiperItemInstance,
    progress: number
  ) => {
    if (isWeb()) {
      let shadowBefore = swiper.isHorizontal()
        ? (slideEl as HTMLElement).querySelector('.swiper-slide-shadow-left')
        : (slideEl as HTMLElement).querySelector('.swiper-slide-shadow-top')
      let shadowAfter = swiper.isHorizontal()
        ? (slideEl as HTMLElement).querySelector('.swiper-slide-shadow-right')
        : (slideEl as HTMLElement).querySelector('.swiper-slide-shadow-bottom')

      if (!shadowBefore) {
        shadowBefore = createShadow(
          'flip',
          slideEl,
          swiper.isHorizontal() ? 'left' : 'top'
        )
      }
      if (!shadowAfter) {
        shadowAfter = createShadow(
          'flip',
          slideEl,
          swiper.isHorizontal() ? 'right' : 'bottom'
        )
      }
      if (shadowBefore) {
        ;(shadowBefore as HTMLElement).style.opacity = String(
          Math.max(-progress, 0)
        )
      }
      if (shadowAfter) {
        ;(shadowAfter as HTMLElement).style.opacity = String(
          Math.max(progress, 0)
        )
      }
    } else {
      let shadowBefore = swiper.isHorizontal()
        ? (slideEl as SwiperItemInstance).getShadowByClass(
            'swiper-slide-shadow-left'
          )
        : (slideEl as SwiperItemInstance).getShadowByClass(
            'swiper-slide-shadow-top'
          )
      let shadowAfter = swiper.isHorizontal()
        ? (slideEl as SwiperItemInstance).getShadowByClass(
            'swiper-slide-shadow-right'
          )
        : (slideEl as SwiperItemInstance).getShadowByClass(
            'swiper-slide-shadow-bottom'
          )

      if (!shadowBefore) {
        shadowBefore = createShadow(
          'flip',
          slideEl,
          swiper.isHorizontal() ? 'left' : 'top'
        )
      }
      if (!shadowAfter) {
        shadowAfter = createShadow(
          'flip',
          slideEl,
          swiper.isHorizontal() ? 'right' : 'bottom'
        )
      }
      if (shadowBefore) {
        shadowBefore.style.opacity = String(Math.max(-progress, 0))
      }
      if (shadowAfter) {
        shadowAfter.style.opacity = String(Math.max(progress, 0))
      }
    }
  }

  const recreateShadows = () => {
    // const params = swiper.params.flipEffect as FlipEffectOptions
    swiper.slides.forEach((slideEl) => {
      const { progress } = slideEl as SwiperItemInstance
      const limitedProgress = swiper.params.flipEffect?.limitRotation
        ? Math.max(Math.min(progress, 1), -1)
        : progress
      createSlideShadows(slideEl, limitedProgress)
    })
  }

  const setTranslate = () => {
    const { slides, rtlTranslate: rtl } = swiper
    const params = swiper.params.flipEffect as FlipEffectOptions
    const rotateFix = getRotateFix(swiper)

    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i]
      const { progress } = slideEl as SwiperItemInstance
      const limitedProgress = params.limitRotation
        ? Math.max(Math.min(progress, 1), -1)
        : progress
      const offset = (slideEl as SwiperItemInstance).swiperSlideOffset
      const rotate = -180 * limitedProgress
      let rotateY = rotate
      let rotateX = 0
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset
      let ty = 0

      if (!swiper.isHorizontal()) {
        ty = tx
        tx = 0
        rotateX = -rotateY
        rotateY = 0
      } else if (rtl) {
        rotateY = -rotateY
      }

      slideEl.style.zIndex = String(
        -Math.abs(Math.round(progress)) + slides.length
      )

      if (params.slideShadows) {
        createSlideShadows(slideEl, limitedProgress)
      }

      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(
        rotateX
      )}deg) rotateY(${rotateFix(rotateY)}deg)`

      const targetEl = effectTarget(params, slideEl)
      targetEl.style.transform = transform
    }
  }

  const setTransition = (duration: number) => {
    const transformElements = swiper.slides.map((slideEl) =>
      getSlideTransformEl(slideEl)
    )

    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`
      if (isWeb()) {
        el.querySelectorAll(
          '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
        ).forEach((shadowEl: HTMLElement) => {
          shadowEl.style.transitionDuration = `${duration}ms`
        })
      } else {
        el.getShadowList().forEach((subEl: HTMLElement) => {
          subEl.style.transitionDuration = `${duration}ms`
        })
      }
    })

    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    })
  }

  effectInit({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect as FlipEffectOptions,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  })
}
