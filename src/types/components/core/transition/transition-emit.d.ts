import type { SwiperInterface } from '../../../swiper-class'

export interface TransitionEmitOptions {
  swiper: SwiperInterface
  runCallbacks?: boolean
  direction?: 'next' | 'prev' | 'reset'
  step: string
}

export interface TransitionEmit {
  (options: TransitionEmitOptions): void
}
