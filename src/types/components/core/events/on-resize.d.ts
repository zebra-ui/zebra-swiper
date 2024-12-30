import type { SwiperInterface } from '../../../swiper-class'

export interface OnResize {
  (
    this: SwiperInterface & {
      autoplay?: {
        running?: boolean
        paused?: boolean
        resizeTimeout?: number
        resume: () => void
      }
    }
  ): void
}
