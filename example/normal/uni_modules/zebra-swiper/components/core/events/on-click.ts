import type { OnClick } from '../../../types/components/core/events/on-click'
import type { SwiperInterface } from '../../../types/swiper-class'

const onClick: OnClick = function (this: SwiperInterface, e) {
  const swiper = this
  if (!swiper.enabled) return

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault()
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation()
      e.stopImmediatePropagation()
    }
  }
}

export default onClick
