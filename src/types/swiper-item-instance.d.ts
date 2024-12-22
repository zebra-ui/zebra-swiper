import type { Ref } from 'vue'

export interface SwiperItemInstance {
  style: CSSStyleDeclaration
  classList: DOMTokenList
  uid: string
  childrenList: HTMLElement[]
  className: string
  getAttribute: (name: string) => string | null
  setAttribute: (name: string, value: string) => void
  removeAttribute: (name: string) => void
  swiperItemIndex: Ref<number>
  getSwiperItemRect: () => DOMRect
  swiperItemRect: DOMRect
  shadowList: HTMLElement[]
  addShadowItem: (item: HTMLElement) => void
  getShadowList: () => HTMLElement[]
  getShadowByClass: (className: string) => HTMLElement | null
  clearShadow: () => void
  swiperSlideSize: number
  swiperSlideOffset: number
  offsetLeft: number
  offsetTop: number
  progress: number
  originalProgress: number
  progress: number
}
