import type { SwiperInterface } from '../../../swiper-class'

export interface SlideTo {
  (
    this: SwiperInterface,
    index?: number | string,
    speed?: number,
    runCallbacks?: boolean,
    internal?: boolean,
    initial?: boolean
  ): boolean
}
