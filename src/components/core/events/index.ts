import onTouchStart from './on-touch-start'
import onTouchMove from './on-touch-move'
import onTouchEnd from './on-touch-end'
import onResize from './on-resize'
import onClick from './on-click'
import onScroll from './on-scroll'
import onLoad from './on-load'
import onDocumentTouchStart from './on-document-touch-start'
import { isWeb } from '../../shared/utils'
import type { SwiperInterface } from '../../../types/swiper-class'
import type { EventsInstance } from '../../../types/components/core/events'

const events: EventsInstance = (
  swiper: SwiperInterface,
  method: 'on' | 'off'
) => {
  const { params, el, wrapperEl, device } = swiper
  const capture = !!params.nested
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener'
  const swiperMethod = method

  if (!el || typeof el === 'string') return

  if (isWeb()) {
    // Touch Events
    document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
      passive: false,
      capture
    })
    ;(el as HTMLElement)[domMethod]('touchstart', swiper.onTouchStart, {
      passive: false
    })
    ;(el as HTMLElement)[domMethod]('pointerdown', swiper.onTouchStart, {
      passive: false
    })
    document[domMethod]('touchmove', swiper.onTouchMove, {
      passive: false,
      capture
    })
    document[domMethod]('pointermove', swiper.onTouchMove, {
      passive: false,
      capture
    })
    document[domMethod]('touchend', swiper.onTouchEnd, {
      passive: true
    })
    document[domMethod]('pointerup', swiper.onTouchEnd, {
      passive: true
    })
    document[domMethod]('pointercancel', swiper.onTouchEnd, {
      passive: true
    })
    document[domMethod]('touchcancel', swiper.onTouchEnd, {
      passive: true
    })
    document[domMethod]('pointerout', swiper.onTouchEnd, {
      passive: true
    })
    document[domMethod]('pointerleave', swiper.onTouchEnd, {
      passive: true
    })
    document[domMethod]('contextmenu', swiper.onTouchEnd, {
      passive: true
    })

    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      ;(el as HTMLElement)[domMethod]('click', swiper.onClick, true)
    }

    if (params.cssMode) {
      wrapperEl[domMethod]('scroll', swiper.onScroll)
    }
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod]('resize', onResize, true)
    swiper[swiperMethod]('observerUpdate', onResize, true)
    if (device.ios || device.android) {
      swiper[swiperMethod]('orientationchange', onResize, true)
    }
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true)
  }
}

function attachEvents(this: SwiperInterface): void {
  const swiper = this
  const { params } = swiper
  swiper.onTouchStart = onTouchStart.bind(swiper)
  swiper.onTouchMove = onTouchMove.bind(swiper)
  swiper.onTouchEnd = onTouchEnd.bind(swiper)
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper)

  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper)
  }

  swiper.onClick = onClick.bind(swiper)
  swiper.onLoad = onLoad.bind(swiper)

  events(swiper, 'on')
}

function detachEvents(this: SwiperInterface): void {
  const swiper = this
  events(swiper, 'off')
}

export default {
  attachEvents,
  detachEvents
}
