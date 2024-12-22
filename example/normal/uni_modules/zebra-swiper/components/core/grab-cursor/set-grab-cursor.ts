import { isWeb, simulateRequestAnimationFrame } from '../../shared/utils'
import type { SetGrabCursor } from '../../../types/components/core/grab-cursor/set-grab-cursor'
import type { SwiperInterface } from '../../../types/swiper-class'

const setGrabCursor: SetGrabCursor = function (
  this: SwiperInterface,
  moving?: boolean
) {
  const swiper = this as SwiperInterface & { __preventObserver__?: boolean }

  if (
    !swiper.params.simulateTouch ||
    (swiper.params.watchOverflow && swiper.isLocked) ||
    swiper.params.cssMode
  )
    return

  const el =
    swiper.params.touchEventsTarget === 'container'
      ? swiper.el
      : swiper.wrapperEl
  if (swiper.isElement) {
    swiper.__preventObserver__ = true
  }
  ;(el as HTMLElement).style.cursor = 'move'
  ;(el as HTMLElement).style.cursor = moving ? 'grabbing' : 'grab'
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

export default setGrabCursor
