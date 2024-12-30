import type {
  Support,
  GetSupport,
  CalcSupport
} from '../../types/components/shared/get-support'
import { isWeb } from './utils'

let support: Support | undefined

const calcSupport: CalcSupport = () => {
  const isH5 = typeof window !== 'undefined' && typeof document !== 'undefined'

  const smoothScrollSupport =
    isH5 && 'scrollBehavior' in document.documentElement.style
  const touchSupport =
    isH5 && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  return {
    smoothScroll: smoothScrollSupport,
    touch: touchSupport
  }
}

const getSupport: GetSupport = () => {
  if (isWeb()) {
    if (!support) {
      support = calcSupport()
    }
    return support
  }
  return {
    smoothScroll: false,
    touch: true
  }
}

export { getSupport }
