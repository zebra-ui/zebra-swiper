import { isWeb, simulateRequestAnimationFrame } from '../../shared/utils'
import type { UnsetGrabCursor } from '../../../types/components/core/grab-cursor/unset-grab-cursor'
import type { SwiperInterface } from '../../../types/swiper-class'

const unsetGrabCursor: UnsetGrabCursor = function (this: SwiperInterface) {
  const swiper = this as SwiperInterface & { __preventObserver__?: boolean }

  if (
    (swiper.params.watchOverflow && swiper.isLocked) ||
    swiper.params.cssMode
  ) {
    return
  }

  if (swiper.isElement) {
    swiper.__preventObserver__ = true
  }

  ;(
    swiper[
      swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ] as HTMLElement
  ).style.cursor = ''

  if (swiper.isElement) {
    if (isWeb()) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false
      })
    } else {
      simulateRequestAnimationFrame(() => {
        swiper.__preventObserver__ = false
      })
    }
  }
}

export default unsetGrabCursor
