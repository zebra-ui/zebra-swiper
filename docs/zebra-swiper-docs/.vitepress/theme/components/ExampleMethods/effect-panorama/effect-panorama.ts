import effectInit from '@zebra-ui/swiper/components/shared/effect-init'
import type { SwiperInterface } from '@zebra-ui/swiper/types/swiper-class'
import type { SwiperOptions } from '@zebra-ui/swiper/types/swiper-options'
import type { SwiperItemInstance } from '@zebra-ui/swiper/types/swiper-item-instance'

export interface PanoramaEffectOptions {
  depth?: number
  rotate?: number
  stretch?: number
}

interface SwiperOptionsPanorama extends SwiperOptions {
  customEffect?: PanoramaEffectOptions
}

export default function EffectPanorama({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    customEffect: {
      depth: 300,
      rotate: 50,
      stretch: 1
    } as SwiperOptionsPanorama
  })

  const setTranslate = () => {
    const params = (swiper.params as SwiperOptionsPanorama)
      .customEffect as PanoramaEffectOptions
    const sizesGrid = swiper.slidesSizesGrid
    const { depth, rotate, stretch } = params
    const angleRad = (rotate! * Math.PI) / 180
    const halfAngleRad = angleRad / 2
    const angleModifier = 1 / (180 / rotate!)

    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i]
      const slideProgress = (slideEl as SwiperItemInstance).progress
      const slideSize = sizesGrid[i]
      const progressModifier = swiper.params.centeredSlides
        ? 0
        : ((swiper.params.slidesPerView as number) - 1) * 0.5
      const modifiedProgress = slideProgress + progressModifier
      const angleCos = 1 - Math.cos(modifiedProgress * angleModifier * Math.PI)
      const translateX = `${modifiedProgress * ((stretch! * slideSize) / 3) * angleCos}px`
      const rotateY = modifiedProgress * rotate!
      const radius = (slideSize * 0.5) / Math.sin(halfAngleRad)
      const translateZ = `${radius * angleCos - depth!}px`
      slideEl.style.transform = `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}deg)`
    }
  }

  const setTransition = (duration: number) => {
    swiper.slides.forEach((el: { style: { transitionDuration: string } }) => {
      el.style.transitionDuration = `${duration}ms`
    })
  }

  effectInit({
    effect: 'panorama',
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
