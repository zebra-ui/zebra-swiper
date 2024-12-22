import type { App } from 'vue'
import ZSwiper from './components/z-swiper/z-swiper.vue'
import ZSwiperItem from './components/z-swiper-item/z-swiper-item.vue'
// @ts-ignore
import { ZSwiperNative } from './components/z-swiper-native/swiper-vue.js'
// @ts-ignore
import { ZSwiperItemNative } from './components/z-swiper-native/swiper-vue.js'
export { ZSwiper, ZSwiperItem, ZSwiperNative, ZSwiperItemNative }
export type { SwiperInterface } from './types/swiper-class'
export type { SwiperOptions } from './types/swiper-options'
export type { SwiperEvents } from './types/swiper-events'
export type {
  AutoplayOptions,
  PaginationOptions,
  NavigationOptions,
  ScrollbarOptions,
  VirtualOptions,
  FadeEffectMethods,
  CubeEffectMethods,
  FlipEffectMethods,
  CardsEffectMethods,
  CreativeEffectMethods,
  CoverflowEffectMethods
} from './modules'
const install = (app: App): void => {
  app.component('ZSwiper', ZSwiper)
  app.component('ZSwiperItem', ZSwiperItem)
  app.component('ZSwiperNative', ZSwiperNative)
  app.component('ZSwiperItemNative', ZSwiperItemNative)
}
export default {
  install
}
export const version = '__VERSION__'
export const libName = 'ZebraSwiper'
