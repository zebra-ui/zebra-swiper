import type { SwiperInterface } from '../../../swiper-class'

export interface TranslateTo {
  (
    this: SwiperInterface,
    translate?: number,
    speed?: number,
    runCallbacks?: boolean,
    translateBounds?: boolean,
    internal?: boolean
  ): boolean
}
