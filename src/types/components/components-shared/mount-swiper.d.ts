import type { SwiperInterface } from '../../swiper-class'
import type { NavigationOptions } from '../../modules/navigation'
import type { PaginationOptions } from '../../modules/pagination'
import type { ScrollbarOptions } from '../../modules/scrollbar'

export interface MountSwiperParams {
  el: HTMLElement
  adapterEl?: any
  nextEl?: HTMLElement | null
  prevEl?: HTMLElement | null
  paginationEl?: HTMLElement | null
  scrollbarEl?: HTMLElement | null
  swiper: SwiperInterface & {
    params: {
      navigation?: NavigationOptions
      pagination?: PaginationOptions
      scrollbar?: ScrollbarOptions
    }
    originalParams: {
      navigation?: NavigationOptions
      pagination?: PaginationOptions
      scrollbar?: ScrollbarOptions
    }
  }
}

export interface MountSwiper {
  (mountParams: MountSwiperParams, swiperParams: Record<string, any>): void
}
