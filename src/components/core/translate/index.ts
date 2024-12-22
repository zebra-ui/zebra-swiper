import getTranslate from './get-translate'
import setTranslate from './set-translate'
import minTranslate from './min-translate'
import maxTranslate from './max-translate'
import translateTo from './translate-to'
import type { TranslateMethods } from '../../../types/components/core/translate'

const translate: TranslateMethods = {
  getTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
}

export default translate
