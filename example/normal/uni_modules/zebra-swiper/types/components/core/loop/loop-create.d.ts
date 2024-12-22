import type { SwiperInterface } from '../../../swiper-class'

export interface LoopCreate {
  (this: SwiperInterface, slideRealIndex?: number): void
}
