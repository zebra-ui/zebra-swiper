import effectInit from '../../components/shared/effect-init'
import effectTarget from '../../components/shared/effect-target'
import effectVirtualTransitionEnd from '../../components/shared/effect-virtual-transition-end'
import { getSlideTransformEl } from '../../components/shared/utils'
import type { FadeEffectOptions } from '../../types/module/effect-fade'
import type { SwiperInterface } from '../../types/swiper-class'
import type { SwiperItemInstance } from '../../types/swiper-item-instance'

export default function EffectFade({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    fadeEffect: {
      crossFade: false
    } as FadeEffectOptions
  })

  const setTranslate = () => {
    const { slides } = swiper
    const params = swiper.params.fadeEffect as FadeEffectOptions

    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i]
      const offset = (slideEl as SwiperItemInstance).swiperSlideOffset
      let tx = -offset
      if (!swiper.params.virtualTranslate) tx -= swiper.translate
      let ty = 0
      if (!swiper.isHorizontal()) {
        ty = tx
        tx = 0
      }

      const slideOpacity = swiper.params.fadeEffect?.crossFade
        ? Math.max(1 - Math.abs((slideEl as SwiperItemInstance).progress), 0)
        : 1 +
          Math.min(Math.max((slideEl as SwiperItemInstance).progress, -1), 0)

      const targetEl = effectTarget(params, slideEl)
      targetEl.style.opacity = String(slideOpacity)
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`
    }
  }

  const setTransition = (duration: number) => {
    const transformElements = swiper.slides.map((slideEl) =>
      getSlideTransformEl(slideEl)
    )
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`
    })

    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    })
  }

  effectInit({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  })
}
