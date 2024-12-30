import type { SwiperInterface } from '../swiper-class'

declare const Swiper: {
  new (params: any): SwiperInterface
}

export { Swiper as default }
