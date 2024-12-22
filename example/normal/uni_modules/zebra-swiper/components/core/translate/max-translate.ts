import type { MaxTranslate } from '../../../types/components/core/translate/max-translate'
import type { SwiperInterface } from '../../../types/swiper-class'

const maxTranslate: MaxTranslate = function (this: SwiperInterface) {
  return -this.snapGrid[this.snapGrid.length - 1]
}

export default maxTranslate
