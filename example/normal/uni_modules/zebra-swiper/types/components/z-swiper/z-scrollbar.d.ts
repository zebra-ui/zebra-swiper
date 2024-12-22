import type { SwiperInterface } from '../../swiper-class'

export interface ScrollbarDragEl {
  classList: {
    value: string
  }
  style: Record<string, any>
}

export interface ScrollbarRect {
  value: DOMRect | Record<string, number>
}

export interface ScrollbarProps {
  swiperRef: Ref<SwiperInterface | null>
}

export interface ScrollbarListenerMethod {
  funcName: string
  callback: (e: Event) => void
}

export interface ScrollbarExpose {
  classList: any
  style: Record<string, any>
  dragElRef: ScrollbarDragEl
  scrollbarRect: ScrollbarRect
  addEventListener: (
    name: string,
    callback: (e: Event) => void,
    funcName: string
  ) => void
  removeEventListener: (
    name: string,
    callback: (e: Event) => void,
    funcName: string
  ) => void
}
