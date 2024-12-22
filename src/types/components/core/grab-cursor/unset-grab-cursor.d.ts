import type { SwiperInterface } from '../../../swiper-class'

export interface UnsetGrabCursor {
  (this: SwiperInterface & { __preventObserver__?: boolean }): void
}
