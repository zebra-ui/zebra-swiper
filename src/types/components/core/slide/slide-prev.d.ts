import type { SwiperInterface } from '../../../swiper-class'

export interface SlidePrev {
  (
    this: SwiperInterface,
    speed?: number,
    runCallbacks?: boolean,
    internal?: boolean
  ): SwiperInterface | boolean
}
