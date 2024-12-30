import type { MinTranslate } from '../../../types/components/core/translate/min-translate'
import type { SwiperInterface } from '../../../types/swiper-class'

const minTranslate: MinTranslate = function (this: SwiperInterface) {
  return -this.snapGrid[0]
}

export default minTranslate
