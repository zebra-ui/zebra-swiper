import type { SwiperInterface } from '../../../swiper-class'

export interface SlideToClosest {
  (
    this: SwiperInterface,
    speed?: number,
    runCallbacks?: boolean,
    internal?: boolean,
    threshold?: number
  ): boolean | void
}
