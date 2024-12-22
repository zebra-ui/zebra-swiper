import type { Ref, VNode } from 'vue'
import type { SwiperInterface } from '../../swiper-class'

export interface VirtualData {
  from: number
  to: number
  offset: number
  slides: VNode[]
}

export interface RenderVirtual {
  (
    swiperRef: Ref<SwiperInterface>,
    slides: VNode[],
    virtualData: VirtualData | null
  ): VNode[] | null
}
