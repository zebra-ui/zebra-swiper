import type { RemoveClasses } from '../../../types/components/core/classes/remove-classes'
import type { SwiperInterface } from '../../../types/swiper-class'

const removeClasses: RemoveClasses = function (this: SwiperInterface) {
  const swiper = this
  const { el, classNames } = swiper

  if (!el || typeof el === 'string') return

  el.classList.remove(...classNames)
  swiper.emitContainerClasses()
}

export default removeClasses
