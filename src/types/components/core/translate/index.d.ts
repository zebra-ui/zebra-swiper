import type { GetTranslate } from './get-translate'
import type { SetTranslate } from './set-translate'
import type { MinTranslate } from './min-translate'
import type { MaxTranslate } from './max-translate'
import type { TranslateTo } from './translate-to'

export interface TranslateMethods {
  getTranslate: GetTranslate
  setTranslate: SetTranslate
  minTranslate: MinTranslate
  maxTranslate: MaxTranslate
  translateTo: TranslateTo
}
