import type { SwiperOptions } from '../../../swiper-options'

export interface BreakpointItem {
  value: string | number
  point: string
}

export interface GetBreakpoint {
  (
    breakpoints: SwiperOptions['breakpoints'],
    base?: 'window' | 'container',
    containerEl?: HTMLElement
  ): string | undefined
}
