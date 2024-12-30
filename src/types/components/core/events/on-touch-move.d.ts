import type { SwiperInterface } from '../../../swiper-class'

export interface OnTouchMove {
  (this: SwiperInterface, event: TouchEvent | PointerEvent): void
}
