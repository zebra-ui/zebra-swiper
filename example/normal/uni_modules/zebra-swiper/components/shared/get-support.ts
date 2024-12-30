import type {
  Support,
  GetSupport,
  CalcSupport
} from '../../types/components/shared/get-support'

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
  if (!support) {
    support = calcSupport()
  }
  return support
}

export { getSupport }
