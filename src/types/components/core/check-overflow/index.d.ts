import type { SwiperInterface } from '../../../swiper-class'

export interface CheckOverflow {
  (this: SwiperInterface): void
}

export interface CheckOverflowModule {
  checkOverflow: CheckOverflow
}
