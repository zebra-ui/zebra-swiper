import {
  ref,
  inject,
  computed,
  onBeforeUnmount,
  getCurrentInstance,
  type ComponentInternalInstance
} from 'vue'
import type {
  UseParent,
  ParentProvide
} from '../../types/components/use-relation/use-parent'

export const useParent: UseParent = (key) => {
  const parent = inject<ParentProvide | null>(key, null)

  if (parent) {
    const instance = getCurrentInstance() as ComponentInternalInstance
    const { link, unlink, internalChildren } = parent

    link(instance)
    onBeforeUnmount(() => unlink(instance))

    const index = computed(() => internalChildren.indexOf(instance))

    return {
      parent,
      index
    }
  }

  return {
    parent: null,
    index: ref(-1)
  }
}
