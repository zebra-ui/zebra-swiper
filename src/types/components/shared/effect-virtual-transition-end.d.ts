import type { SwiperInterface } from '../../swiper-class'

export interface EffectVirtualTransitionEndParams {
  swiper: SwiperInterface
  duration: number
  transformElements: HTMLElement[]
  allSlides?: boolean
}

export interface EffectVirtualTransitionEnd {
  (params: EffectVirtualTransitionEndParams): void
}
