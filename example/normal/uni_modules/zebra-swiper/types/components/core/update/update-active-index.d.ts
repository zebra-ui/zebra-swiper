import type { SwiperInterface } from '../../../swiper-class'

export interface GetActiveIndexByTranslate {
  (swiper: SwiperInterface): number
}

export interface UpdateActiveIndex {
  (this: SwiperInterface, newActiveIndex?: number): void
}
