import type { SwiperInterface } from '../../swiper-class'

export interface UpdateOnVirtualData {
  (
    swiper: SwiperInterface & {
      params: {
        virtual?: {
          enabled?: boolean
        }
        parallax?: {
          enabled?: boolean
        }
      }
    }
  ): void
}
