import type { SwiperInterface } from '../../../swiper-class'

export interface OnScroll {
  (this: SwiperInterface & { previousTranslate?: number }): void
}
