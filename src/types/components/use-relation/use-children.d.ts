import type { ComponentInternalInstance, VNode } from 'vue'

export interface InternalChild {
  proxy: any
  vnode: VNode
}

export interface ChildrenValue {
  [key: string]: any
}

export interface UseChildrenReturn {
  children: any[]
  linkChildren: (value?: ChildrenValue) => void
}

export interface FlattenVNodes {
  (children: VNode[]): VNode[]
}

export interface FindVNodeIndex {
  (vnodes: VNode[], vnode: VNode): number
}

export interface SortChildren {
  (
    parent: ComponentInternalInstance,
    publicChildren: any[],
    internalChildren: InternalChild[]
  ): void
}

export interface UseChildren {
  (key: symbol | string): UseChildrenReturn
}
