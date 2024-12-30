import { getCurrentInstance, type ComponentInternalInstance } from 'vue'
import type { UseExpose } from '../../types/components/shared/use-expose'

const useExpose: UseExpose = (apis) => {
  const instance = getCurrentInstance() as ComponentInternalInstance
  if (instance) {
    // @ts-ignore
    Object.assign(instance.proxy, apis)
  }
}

export { useExpose }
