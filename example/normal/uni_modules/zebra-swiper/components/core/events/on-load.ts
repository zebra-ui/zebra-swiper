import type { OnLoad } from '../../../types/components/core/events/on-load'
import type { SwiperInterface } from '../../../types/swiper-class'

const onLoad: OnLoad = function (this: SwiperInterface) {
  const swiper = this
  // processLazyPreloader(swiper, e.target)

  if (
    swiper.params.cssMode ||
    (swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight)
  ) {
    return
  }

  swiper.update()
}

export default onLoad
