import type { SwiperInterface } from '../../../swiper-class'

export interface SlideNext {
  (
    this: SwiperInterface,
    speed?: number,
    runCallbacks?: boolean,
    internal?: boolean
  ): SwiperInterface | boolean
}
