import { elementParents, isWeb } from '../../../shared/utils'
import type { SwiperInterface } from '../../../../types/swiper-class'

export default function Observer({
  swiper,
  extendParams,
  on,
  emit
}: {
  swiper: SwiperInterface & { __preventObserver__?: boolean }
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: () => void) => void
  emit: (event: string, ...args: any[]) => void
}): void {
  const observers: MutationObserver[] = []

  const attach = (target: Node, options: MutationObserverInit = {}) => {
    const ObserverFunc =
      // @ts-ignore
      window.MutationObserver || window.WebkitMutationObserver
    const observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__) return
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0])
        return
      }

      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0])
      }

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate)
      } else {
        window.setTimeout(observerUpdate, 0)
      }
    })

    observer.observe(target, {
      attributes:
        typeof options.attributes === 'undefined' ? true : options.attributes,
      childList:
        swiper.isElement ||
        (typeof options.childList === 'undefined' ? true : options.childList),
      characterData:
        typeof options.characterData === 'undefined'
          ? true
          : options.characterData
    })

    observers.push(observer)
  }

  const init = () => {
    if (!isWeb()) return
    if (!swiper.params.observer) return

    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl)
      if (!containerParents) return
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i])
      }
    }

    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    })

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    })
  }

  const destroy = () => {
    if (!isWeb()) return
    observers.forEach((observer) => {
      observer.disconnect()
    })
    observers.splice(0, observers.length)
  }

  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  })

  on('init', init)
  on('destroy', destroy)
}
