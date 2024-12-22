import type { Ref } from 'vue'

export interface SwiperInstance {
  uid: string
  swiperItemIndex: Ref<number>
  clearShadow: () => void
  rectWidth: number
  rectHeight: number
  classList: DOMTokenList
}
