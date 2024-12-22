import { DefineComponent } from 'vue'
import type { App } from 'vue'
import type { SwiperOptions } from './types/swiper-options'
import type { SwiperEvents } from './types/swiper-events'

export interface SwiperItemProps {
  tag?: string
  swiperSlideIndex?: number
  zoom?: boolean
  lazy?: boolean
  virtualIndex?: string | number
  customStyle?: Record<string, any>
}

export const ZSwiper: DefineComponent<
  Partial<SwiperOptions> & {
    customStyle?: Record<string, any>
  } & {
    [K in keyof SwiperEvents as `on${Capitalize<K>}`]?: SwiperEvents[K]
  }
>
export const ZSwiperItem: DefineComponent<SwiperItemProps>

declare const _default: {
  install(app: App): void
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ZSwiper: DefineComponent<
      Partial<SwiperOptions> & {
        customStyle?: Record<string, any>
      } & {
        [K in keyof SwiperEvents as `on${Capitalize<K>}`]?: SwiperEvents[K]
      }
    >
    ZSwiperItem: DefineComponent<SwiperItemProps>
    'z-swiper': typeof ZSwiper
    'z-swiper-item': typeof ZSwiperItem
  }
}

export default _default
