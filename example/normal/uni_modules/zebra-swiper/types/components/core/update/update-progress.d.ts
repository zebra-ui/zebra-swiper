import type { SwiperInterface } from '../../../swiper-class'

export interface UpdateProgress {
  (this: SwiperInterface, translate?: number): void
}
