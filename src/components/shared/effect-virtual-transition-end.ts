import { elementTransitionEnd, isWeb } from './utils'
import type { EffectVirtualTransitionEnd } from '../../types/components/shared/effect-virtual-transition-end'

const effectVirtualTransitionEnd: EffectVirtualTransitionEnd = ({
  swiper,
  duration,
  transformElements,
  allSlides
}) => {
  const { activeIndex } = swiper

  const getSlide = (el: HTMLElement) => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.filter(
        (slideEl) =>
          (slideEl as HTMLElement).shadowRoot &&
          (slideEl as HTMLElement).shadowRoot === el.parentNode
      )[0]
      return slide
    }
    return el.parentElement
  }

  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false
    let transitionEndTarget: HTMLElement[]

    if (allSlides) {
      transitionEndTarget = transformElements
    } else {
      transitionEndTarget = transformElements.filter((transformEl) => {
        const el = transformEl.classList.contains('swiper-slide-transform')
          ? getSlide(transformEl)
          : transformEl
        return swiper.getSlideIndex(el as HTMLElement) === activeIndex
      })
    }

    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return
        if (!swiper || swiper.destroyed) return
        eventTriggered = true
        swiper.animating = false
        const evt = isWeb()
          ? new window.CustomEvent('transitionend', {
              bubbles: true,
              cancelable: true
            })
          : ({
              bubbles: true,
              cancelable: true,
              target: {
                // @ts-ignore
                id: `swiperWrapper${swiper.adapterEl?.uid}`
              }
            } as unknown as Event)
        swiper.wrapperEl.dispatchEvent(evt)
      })
    })
  }
}

export default effectVirtualTransitionEnd
