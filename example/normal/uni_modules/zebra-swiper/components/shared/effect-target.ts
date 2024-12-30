import { getSlideTransformEl } from './utils'
import type { EffectTarget } from '../../types/components/shared/effect-target'

const effectTarget: EffectTarget = (effectParams, slideEl) => {
  const transformEl = getSlideTransformEl(slideEl)

  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden'
    transformEl.style['-webkit-backface-visibility'] = 'hidden'
  }

  return transformEl
}

export default effectTarget
