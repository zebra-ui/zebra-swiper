import type { SwiperInterface } from '../../../swiper-class'

export interface UpdateClickedSlide {
  (this: SwiperInterface, el: HTMLElement, path?: HTMLElement[]): void
}
