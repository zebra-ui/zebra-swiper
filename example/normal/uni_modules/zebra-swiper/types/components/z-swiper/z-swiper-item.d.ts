import type { Ref } from 'vue'

export interface SwiperItemInstance {
  swiperSlideIndex?: number
  proxy: any
}

export interface SwiperItemProps {
  tag?: string
  swiperSlideIndex?: number
  zoom?: boolean
  lazy?: boolean
  virtualIndex?: string | number
  customStyle?: Record<string, any>
}

export interface ShadowItem {
  classList: {
    contains: (className: string) => boolean
  }
  classNames: string
  styles: Record<string, any>
}

export interface SwiperItemExpose {
  style: any
  classList: any
  uid: string | number
  childrenList: any[]
  className: string
  getAttribute: (name: string) => any
  setAttribute: (name: string, value: any) => void
  removeAttribute: (name: string) => void
  swiperItemIndex: Ref<number>
  getSwiperItemRect: () => Promise<any>
  swiperItemRect: Ref<any>
  shadowList: Ref<ShadowItem[]>
  addShadowItem: (shadow: ShadowItem) => void
  getShadowList: () => ShadowItem[]
  getShadowByClass: (className: string) => ShadowItem | undefined
  clearShadow: () => void
}

export interface ItemTransitionEndMethod {
  name: string
  funcName: string
  callback: (e: Event) => void
}
