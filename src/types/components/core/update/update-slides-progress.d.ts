import type { SwiperInterface } from '../../../swiper-class'

export interface ToggleSlideClasses {
  (slideEl: HTMLElement, condition: boolean, className: string): void
}

export interface UpdateSlidesProgress {
  (this: SwiperInterface, translate?: number): void
}
