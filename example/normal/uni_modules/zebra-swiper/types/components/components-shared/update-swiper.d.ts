import type { SwiperInterface } from '../../swiper-class'

export interface UpdateSwiperParams {
  swiper: SwiperInterface
  slides?: any[]
  passedParams: Record<string, any>
  changedParams: string[]
  nextEl?: HTMLElement | string | null
  prevEl?: HTMLElement | string | null
  scrollbarEl?: HTMLElement | string | null
  paginationEl?: HTMLElement | string | null
  tag?: string
}

export interface UpdateSwiper {
  (params: UpdateSwiperParams): void
}
