import type { SwiperInterface } from '../../../swiper-class'

export interface OnLoad {
  (this: SwiperInterface, e: Event): void
}
