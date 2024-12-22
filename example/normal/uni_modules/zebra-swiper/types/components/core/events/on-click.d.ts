import type { SwiperInterface } from '../../../swiper-class'

export interface OnClick {
  (this: SwiperInterface, e: MouseEvent): void
}
