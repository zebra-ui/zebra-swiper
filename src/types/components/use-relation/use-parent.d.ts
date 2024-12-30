import type { ComputedRef, Ref } from 'vue'

export interface ParentProvide {
  link: (child: any) => void
  unlink: (child: any) => void
  children: any[]
  internalChildren: any[]
  [key: string]: any
}

export interface UseParentReturn {
  parent: ParentProvide | null
  index: ComputedRef<number> | Ref<number>
}

export interface UseParent {
  (key: symbol | string): UseParentReturn
}
