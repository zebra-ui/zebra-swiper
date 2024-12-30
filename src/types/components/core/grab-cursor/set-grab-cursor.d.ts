import type { SwiperInterface } from '../../../swiper-class'

export interface SetGrabCursor {
  (
    this: SwiperInterface & { __preventObserver__?: boolean },
    moving?: boolean
  ): void
}
