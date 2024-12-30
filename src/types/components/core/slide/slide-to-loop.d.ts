import type { SwiperInterface } from '../../../swiper-class'

export interface SlideToLoop {
  (
    this: SwiperInterface,
    index?: number | string,
    speed?: number,
    runCallbacks?: boolean,
    internal?: boolean
  ): SwiperInterface | void
}
