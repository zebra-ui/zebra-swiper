import type { SwiperInterface } from '../../../swiper-class'

export interface TransitionStart {
  (
    this: SwiperInterface,
    runCallbacks?: boolean,
    direction?: 'next' | 'prev' | 'reset'
  ): void
}
