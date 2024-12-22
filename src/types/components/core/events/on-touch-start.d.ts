import type { SwiperInterface } from '../../../swiper-class'

export interface OnTouchStart {
  (this: SwiperInterface, event: TouchEvent | PointerEvent): void
}
