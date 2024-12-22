import type { SwiperInterface } from '../../../swiper-class'

export interface SetTransition {
  (this: SwiperInterface, duration: number, byController?: boolean): void
}
