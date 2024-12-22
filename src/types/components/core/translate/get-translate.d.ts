import type { SwiperInterface } from '../../../swiper-class'

export interface GetTranslate {
  (this: SwiperInterface, axis?: 'x' | 'y'): number
}
