import type { VNode } from 'vue'

export interface GetChildrenReturn {
  slides: VNode[]
}

export interface GetChildren {
  (
    children: VNode[],
    slidesRef: { value: VNode[] },
    oldSlidesRef: { value: VNode[] }
  ): GetChildrenReturn
}
