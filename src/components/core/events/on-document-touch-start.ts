import type { OnDocumentTouchStart } from '../../../types/components/core/events/on-document-touch-start'
import type { SwiperInterface } from '../../../types/swiper-class'

const onDocumentTouchStart: OnDocumentTouchStart = function (
  this: SwiperInterface
) {
  const swiper = this as SwiperInterface & {
    documentTouchHandlerProceeded?: boolean
  }
  if (swiper.documentTouchHandlerProceeded) return
  swiper.documentTouchHandlerProceeded = true

  if (swiper.params.touchReleaseOnEdges) {
    ;(swiper.el as HTMLElement).style.touchAction = 'auto'
  }
}

export default onDocumentTouchStart
