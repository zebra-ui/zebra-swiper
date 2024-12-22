import type { SwiperInterface } from '../../../swiper-class'

export interface OnDocumentTouchStart {
  (this: SwiperInterface & { documentTouchHandlerProceeded?: boolean }): void
}
