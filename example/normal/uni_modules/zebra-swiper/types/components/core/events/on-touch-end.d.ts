import type { SwiperInterface } from '../../../swiper-class'

export interface OnTouchEnd {
  (this: SwiperInterface, event: TouchEvent | PointerEvent): void
}
