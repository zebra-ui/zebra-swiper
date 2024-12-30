import type { SwiperInterface } from '../../../swiper-class'

export interface SlideReset {
  (
    this: SwiperInterface,
    speed?: number,
    runCallbacks?: boolean,
    internal?: boolean
  ): SwiperInterface | boolean | undefined
}
