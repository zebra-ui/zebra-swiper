import type { SwiperInterface } from '../../../swiper-class'

export interface SetTranslate {
  (this: SwiperInterface, translate: number, byController?: boolean): void
}
