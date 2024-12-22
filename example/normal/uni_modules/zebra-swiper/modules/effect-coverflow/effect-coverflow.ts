import createShadow from '../../components/shared/create-shadow'
import effectInit from '../../components/shared/effect-init'
import effectTarget from '../../components/shared/effect-target'
import {
  getRotateFix,
  getSlideTransformEl,
  isWeb
} from '../../components/shared/utils'
import type { CoverflowEffectOptions } from '../../types/module/effect-coverflow'
import type { SwiperInterface } from '../../types/swiper-class'
import type { SwiperItemInstance } from '../../types/swiper-item-instance'

export default function EffectCoverflow({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    } as CoverflowEffectOptions
  })

  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper
    const params = swiper.params.coverflowEffect as CoverflowEffectOptions
    const isHorizontal = swiper.isHorizontal()
    const transform = swiper.translate
    const center = isHorizontal
      ? -transform + swiperWidth / 2
      : -transform + swiperHeight / 2
    const rotate = isHorizontal ? params.rotate : -params.rotate!
    const translate = params.depth
    const r = getRotateFix(swiper)

    // Each slide offset from center
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i]
      const slideSize = slidesSizesGrid[i]
      const slideOffset = (slideEl as SwiperItemInstance).swiperSlideOffset
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize
      const offsetMultiplier =
        typeof params.modifier === 'function'
          ? params.modifier(centerOffset)
          : centerOffset * (params.modifier as number)

      let rotateY = isHorizontal ? rotate! * offsetMultiplier : 0
      let rotateX = isHorizontal ? 0 : rotate! * offsetMultiplier
      let translateZ = -translate! * Math.abs(offsetMultiplier)

      const { stretch } = params
      // Allow percentage to make a relative stretch for responsive sliders
      const stretchValue =
        typeof stretch === 'string' && stretch.indexOf('%') !== -1
          ? (parseFloat(stretch) / 100) * slideSize
          : stretch

      let translateY = isHorizontal
        ? 0
        : Number(stretchValue)! * offsetMultiplier
      let translateX = isHorizontal
        ? Number(stretchValue)! * offsetMultiplier
        : 0
      let scale =
        1 - (1 - (params.scale as number)) * Math.abs(offsetMultiplier)

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0
      if (Math.abs(translateY) < 0.001) translateY = 0
      if (Math.abs(translateZ) < 0.001) translateZ = 0
      if (Math.abs(rotateY) < 0.001) rotateY = 0
      if (Math.abs(rotateX) < 0.001) rotateX = 0
      if (Math.abs(scale) < 0.001) scale = 0

      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  
         rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`

      const targetEl = effectTarget(params, slideEl)
      targetEl.style.transform = slideTransform
      ;(slideEl as HTMLElement).style.zIndex = String(
        -Math.abs(Math.round(offsetMultiplier)) + 1
      )

      if (params.slideShadows) {
        // Set shadows
        if (isWeb()) {
          let shadowBeforeEl = isHorizontal
            ? (slideEl as HTMLElement).querySelector(
                '.swiper-slide-shadow-left'
              )
            : (slideEl as HTMLElement).querySelector('.swiper-slide-shadow-top')
          let shadowAfterEl = isHorizontal
            ? (slideEl as HTMLElement).querySelector(
                '.swiper-slide-shadow-right'
              )
            : (slideEl as HTMLElement).querySelector(
                '.swiper-slide-shadow-bottom'
              )

          if (!shadowBeforeEl) {
            shadowBeforeEl = createShadow(
              'coverflow',
              slideEl,
              isHorizontal ? 'left' : 'top'
            )
          }
          if (!shadowAfterEl) {
            shadowAfterEl = createShadow(
              'coverflow',
              slideEl,
              isHorizontal ? 'right' : 'bottom'
            )
          }
          if (shadowBeforeEl) {
            ;(shadowBeforeEl as HTMLElement).style.opacity = String(
              offsetMultiplier > 0 ? offsetMultiplier : 0
            )
          }
          if (shadowAfterEl) {
            ;(shadowAfterEl as HTMLElement).style.opacity = String(
              -offsetMultiplier > 0 ? -offsetMultiplier : 0
            )
          }
        } else {
          let shadowBeforeEl = isHorizontal
            ? (slideEl as SwiperItemInstance).getShadowByClass(
                'swiper-slide-shadow-left'
              )
            : (slideEl as SwiperItemInstance).getShadowByClass(
                'swiper-slide-shadow-top'
              )
          let shadowAfterEl = isHorizontal
            ? (slideEl as SwiperItemInstance).getShadowByClass(
                'swiper-slide-shadow-right'
              )
            : (slideEl as SwiperItemInstance).getShadowByClass(
                'swiper-slide-shadow-bottom'
              )

          if (!shadowBeforeEl) {
            shadowBeforeEl = createShadow(
              'coverflow',
              slideEl,
              isHorizontal ? 'left' : 'top'
            )
          }
          if (!shadowAfterEl) {
            shadowAfterEl = createShadow(
              'coverflow',
              slideEl,
              isHorizontal ? 'right' : 'bottom'
            )
          }
          if (shadowBeforeEl) {
            ;(shadowBeforeEl as HTMLElement).style.opacity = String(
              offsetMultiplier > 0 ? offsetMultiplier : 0
            )
          }
          if (shadowAfterEl) {
            ;(shadowAfterEl as HTMLElement).style.opacity = String(
              -offsetMultiplier > 0 ? -offsetMultiplier : 0
            )
          }
        }
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
  }

  effectInit({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  })
}
