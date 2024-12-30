import type { SwiperInterface } from '../../swiper-class'

export interface ProcessLazyPreloader {
  (swiper: SwiperInterface | null, imageEl: HTMLElement): void
}

export interface Unlazy {
  (swiper: SwiperInterface, index: number): void
}

export interface Preload {
  (swiper: SwiperInterface | null): void
}
