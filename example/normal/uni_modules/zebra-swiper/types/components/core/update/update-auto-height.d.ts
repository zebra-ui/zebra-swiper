import type { SwiperInterface } from '../../../swiper-class'

export interface UpdateAutoHeight {
  (this: SwiperInterface, speed?: number | boolean): void
}
