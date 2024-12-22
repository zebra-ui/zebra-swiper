import type { SwiperInterface } from '../../../swiper-class'

export interface TransitionEnd {
  (
    this: SwiperInterface,
    runCallbacks?: boolean,
    direction?: 'next' | 'prev' | 'reset'
  ): void
}
