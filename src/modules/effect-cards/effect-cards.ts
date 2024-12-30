import createShadow from '../../components/shared/create-shadow'
import effectInit from '../../components/shared/effect-init'
import effectTarget from '../../components/shared/effect-target'
import effectVirtualTransitionEnd from '../../components/shared/effect-virtual-transition-end'
import { getSlideTransformEl, isWeb } from '../../components/shared/utils'
import type { CardsEffectOptions } from '../../types/module/effect-cards'
import type { SwiperInterface } from '../../types/swiper-class'
import type { SwiperItemInstance } from '../../types/swiper-item-instance'
import type { VirtualOptions } from '../../types/modules/virtual'

export default function EffectCards({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    } as CardsEffectOptions
  })

  const setTranslate = () => {
    const { slides, activeIndex, rtlTranslate: rtl } = swiper
    const params = swiper.params.cardsEffect as CardsEffectOptions
    const { startTranslate, isTouched } = swiper.touchEventsData
    const currentTranslate = rtl ? -swiper.translate : swiper.translate

    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i]
      const slideProgress = (slideEl as SwiperItemInstance).progress
      const progress = Math.min(Math.max(slideProgress, -4), 4)
      let offset = (slideEl as SwiperItemInstance).swiperSlideOffset

      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= (slides[0] as SwiperItemInstance).swiperSlideOffset
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset
      let tY = 0
      const tZ = -100 * Math.abs(progress)
      let scale = 1
      let rotate = -params.perSlideRotate! * progress
      let tXAdd = params.perSlideOffset! - Math.abs(progress) * 0.75

      const slideIndex =
        swiper.virtual && (swiper.params.virtual as VirtualOptions).enabled
          ? swiper.virtual.from + i
          : i

      const isSwipeToNext =
        (slideIndex === activeIndex || slideIndex === activeIndex - 1) &&
        progress > 0 &&
        progress < 1 &&
        (isTouched || swiper.params.cssMode) &&
        currentTranslate < startTranslate

      const isSwipeToPrev =
        (slideIndex === activeIndex || slideIndex === activeIndex + 1) &&
        progress < 0 &&
        progress > -1 &&
        (isTouched || swiper.params.cssMode) &&
        currentTranslate > startTranslate

      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress =
          (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5
        rotate += -28 * progress * subProgress
        scale += -0.5 * subProgress
        tXAdd += 96 * subProgress
        tY = `${-25 * subProgress * Math.abs(progress)}%` as unknown as number
      }

      if (progress < 0) {
        // next
        tX =
          `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))` as unknown as number
      } else if (progress > 0) {
        // prev
        tX =
          `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))` as unknown as number
      } else {
        tX = `${tX}px` as unknown as number
      }

      if (!swiper.isHorizontal()) {
        const prevY = tY
        tY = tX
        tX = prevY
      }
      const scaleString =
        progress < 0
          ? `${1 + (1 - scale) * progress}`
          : `${1 - (1 - scale) * progress}`

      const transform = `translate3d(${tX}, ${tY}, ${tZ}px) rotateZ(${params.rotate ? (rtl ? -rotate : rotate) : 0}deg) scale(${scaleString})`

      if (params.slideShadows) {
        // Set shadows
        if (isWeb()) {
          let shadowEl = (slideEl as HTMLElement).querySelector(
            '.swiper-slide-shadow'
          )
          if (!shadowEl) {
            shadowEl = createShadow('cards', slideEl)
          }
          if (shadowEl) {
            ;(shadowEl as HTMLElement).style.opacity = String(
              Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1)
            )
          }
        } else {
          let shadowEl = (slideEl as SwiperItemInstance).getShadowByClass(
            'swiper-slide-shadow'
          )
          if (!shadowEl) {
            shadowEl = createShadow('cards', slideEl)
          }
          if (shadowEl) {
            ;(shadowEl as HTMLElement).style.opacity = String(
              Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1)
            )
          }
        }
      }

      ;(slideEl as HTMLElement).style.zIndex = String(
        -Math.abs(Math.round(slideProgress)) + slides.length
      )
      const targetEl = effectTarget(params, slideEl)
      ;(targetEl as HTMLElement).style.transform = transform
    }
  }

  const setTransition = (duration: number) => {
    const transformElements = swiper.slides.map((slideEl) =>
      getSlideTransformEl(slideEl)
    )

    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`
      if (isWeb()) {
        el.querySelectorAll('.swiper-slide-shadow').forEach(
          (shadowEl: HTMLElement) => {
            shadowEl.style.transitionDuration = `${duration}ms`
          }
        )
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
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  })
}
