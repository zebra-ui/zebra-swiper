import type { SwiperOptions } from '../../../swiper-options'
import type { SwiperInterface } from '../../../swiper-class'

export interface IsGridEnabled {
  (swiper: SwiperInterface, params: SwiperOptions): boolean
}

export interface SetBreakpoint {
  (this: SwiperInterface): void
}
