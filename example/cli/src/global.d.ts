import { ZSwiper, ZSwiperItem } from '@zebra-ui/swiper'

declare module 'vue' {
  export interface GlobalComponents {
    ZSwiper: typeof ZSwiper
    ZSwiperItem: typeof ZSwiperItem
  }
}
