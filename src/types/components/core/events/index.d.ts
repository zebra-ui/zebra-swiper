import type { SwiperInterface } from '../../../swiper-class'

export interface Events {
  attachEvents(): void
  detachEvents(): void
}

export interface EventsInstance {
  (swiper: SwiperInterface, method: 'on' | 'off'): void
}
