import { isWeb, simulateRequestAnimationFrame } from './utils'
import type { EffectInit } from '../../types/components/shared/effect-init'
import type { SwiperInstance } from '../../types/swiper-instance'

const effectInit: EffectInit = (params) => {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params

  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`)
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`)
    }

    const overwriteParamsResult = overwriteParams ? overwriteParams() : {}

    Object.assign(swiper.params, overwriteParamsResult)
    Object.assign(swiper.originalParams, overwriteParamsResult)
  })

  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return
    setTranslate()
  })

  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return
    setTransition(duration)
  })

  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return
      // remove shadows
      swiper.slides.forEach((slideEl) => {
        if (isWeb()) {
          ;(slideEl as HTMLElement)
            .querySelectorAll(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .forEach((shadowEl) => shadowEl.remove())
        } else {
          ;(slideEl as unknown as SwiperInstance).clearShadow()
        }
      })
      // create new one
      recreateShadows()
    }
  })

  let requireUpdateOnVirtual: boolean
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true
    }
    if (isWeb()) {
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate()
          requireUpdateOnVirtual = false
        }
      })
    } else {
      simulateRequestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate()
          requireUpdateOnVirtual = false
        }
      })
    }
  })
}

export default effectInit
