import createShadow from '../../components/shared/create-shadow'
import effectInit from '../../components/shared/effect-init'
import effectTarget from '../../components/shared/effect-target'
import effectVirtualTransitionEnd from '../../components/shared/effect-virtual-transition-end'
import { getSlideTransformEl, isWeb } from '../../components/shared/utils'
import type {
  CreativeEffectOptions,
  CreativeEffectTransform
} from '../../types/module/effect-creative'
import type { SwiperInterface } from '../../types/swiper-class'
import type { SwiperItemInstance } from '../../types/swiper-item-instance'

export default function EffectCreative({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    } as CreativeEffectOptions
  })

  const getTranslateValue = (value: number | string): string => {
    if (typeof value === 'string') return value
    return `${value}px`
  }

  const setTranslate = () => {
    const { slides, wrapperEl, slidesSizesGrid } = swiper
    const params = swiper.params.creativeEffect as CreativeEffectOptions
    const { progressMultiplier: multiplier } = params

    const isCenteredSlides = swiper.params.centeredSlides

    if (isCenteredSlides) {
      const margin =
        slidesSizesGrid[0] / 2 - (swiper.params.slidesOffsetBefore || 0) || 0
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`
    }

    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i]
      const slideProgress = (slideEl as SwiperItemInstance).progress
      const progress = Math.min(
        Math.max(slideProgress, -params.limitProgress!),
        params.limitProgress!
      )
      let originalProgress = progress

      if (!isCenteredSlides) {
        originalProgress = Math.min(
          Math.max(
            (slideEl as SwiperItemInstance).originalProgress,
            -params.limitProgress!
          ),
          params.limitProgress!
        )
      }

      const offset = (slideEl as SwiperItemInstance).swiperSlideOffset
      const t = [
        swiper.params.cssMode ? -offset - swiper.translate : -offset,
        0,
        0
      ]
      const r = [0, 0, 0]
      let custom = false

      if (!swiper.isHorizontal()) {
        t[1] = t[0]
        t[0] = 0
      }

      let data: CreativeEffectTransform = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      }

      if (progress < 0) {
        data = params.next
        custom = true
      } else if (progress > 0) {
        data = params.prev
        custom = true
      }

      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(
          data.translate[index]
        )} * ${Math.abs(progress * multiplier!)}))` as unknown as number
      })

      // set rotates
      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier!)
      })
      ;(slideEl as HTMLElement).style.zIndex = String(
        -Math.abs(Math.round(slideProgress)) + slides.length
      )

      const translateString = t.join(', ')
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`
      const scaleString =
        originalProgress < 0
          ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier!})`
          : `scale(${1 - (1 - data.scale) * originalProgress * multiplier!})`
      const opacityString =
        originalProgress < 0
          ? 1 + (1 - data.opacity) * originalProgress * multiplier!
          : 1 - (1 - data.opacity) * originalProgress * multiplier!
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`

      // Set shadows
      if ((custom && data.shadow) || !custom) {
        if (isWeb()) {
          let shadowEl = (slideEl as HTMLElement).querySelector(
            '.swiper-slide-shadow'
          )
          if (!shadowEl && data.shadow) {
            shadowEl = createShadow('creative', slideEl)
          }
          if (shadowEl) {
            const shadowOpacity = params.shadowPerProgress
              ? progress * (1 / params.limitProgress!)
              : progress
            ;(shadowEl as HTMLElement).style.opacity = String(
              Math.min(Math.max(Math.abs(shadowOpacity), 0), 1)
            )
          }
        } else {
          let shadowEl = (slideEl as SwiperItemInstance).getShadowByClass(
            'swiper-slide-shadow'
          )
          if (!shadowEl && data.shadow) {
            shadowEl = createShadow('creative', slideEl)
          }
          if (shadowEl) {
            const shadowOpacity = params.shadowPerProgress
              ? progress * (1 / params.limitProgress!)
              : progress
            ;(shadowEl as HTMLElement).style.opacity = String(
              Math.min(Math.max(Math.abs(shadowOpacity), 0), 1)
            )
          }
        }
      }

      const targetEl = effectTarget(params, slideEl)
      targetEl.style.transform = transform
      targetEl.style.opacity = String(opacityString)
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin
      }
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
        el.getShadowList().forEach((shadowEl: HTMLElement) => {
          shadowEl.style.transitionDuration = `${duration}ms`
        })
      }
    })

    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    })
  }

  effectInit({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => !!swiper.params.creativeEffect?.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  })
}
