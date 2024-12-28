import {
  elementChildren,
  isObject,
  isWeb,
  elementChildrenByTagIndex
} from '../../components/shared/utils'
import type { ThumbsOptions, ThumbsMethods } from '../../types/modules/thumbs'
import type { SwiperInterface } from '../../types/swiper-class'

export default function Thumb({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    } as ThumbsOptions
  })

  let initialized = false
  let swiperCreated = false

  swiper.thumbs = {
    swiper: null
  } as unknown as ThumbsMethods

  function onThumbClick(): void {
    const thumbsSwiper = swiper.thumbs.swiper
    // @ts-ignore
    if (!thumbsSwiper || thumbsSwiper.destroyed) return

    const { clickedIndex, clickedSlide } = thumbsSwiper as SwiperInterface
    if (
      clickedSlide &&
      clickedSlide.classList.contains(
        (swiper.params.thumbs as ThumbsOptions).slideThumbActiveClass as string
      )
    )
      return
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return

    let slideToIndex: number
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(
        thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index') ||
          '0',
        10
      )
    } else {
      slideToIndex = clickedIndex
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex)
    } else {
      swiper.slideTo(slideToIndex)
    }
  }

  function init(): boolean {
    const thumbsParams = swiper.params.thumbs as ThumbsOptions
    if (initialized) return false
    initialized = true

    const SwiperClass = swiper.constructor
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      })
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      })
      swiper.thumbs.swiper.update()
    } else if (isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper)
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      })
      // @ts-ignore
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams)
      swiperCreated = true
    }

    swiper.thumbs.swiper?.el.classList.add(
      (swiper.params.thumbs as ThumbsOptions).thumbsContainerClass as string
    )
    swiper.thumbs.swiper?.on('tap', onThumbClick)
    return true
  }

  function update(initial?: boolean): void {
    const thumbsSwiper = swiper.thumbs.swiper
    if (!thumbsSwiper || thumbsSwiper.destroyed) return

    const slidesPerView =
      thumbsSwiper.params.slidesPerView === 'auto'
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView

    // Activate thumbs
    let thumbsToActivate = 1
    const thumbActiveClass = (swiper.params.thumbs as ThumbsOptions)
      .slideThumbActiveClass as string

    if (
      (swiper.params.slidesPerView as number) > 1 &&
      !swiper.params.centeredSlides
    ) {
      thumbsToActivate = swiper.params.slidesPerView as number
    }

    if (!(swiper.params.thumbs as ThumbsOptions).multipleActiveThumbs) {
      thumbsToActivate = 1
    }

    thumbsToActivate = Math.floor(thumbsToActivate)

    thumbsSwiper.slides.forEach((slideEl) =>
      slideEl.classList.remove(thumbActiveClass)
    )

    if (
      thumbsSwiper.params.loop ||
      (thumbsSwiper.params.virtual &&
        typeof thumbsSwiper.params.virtual === 'object' &&
        thumbsSwiper.params.virtual.enabled)
    ) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (isWeb()) {
          elementChildren(
            thumbsSwiper.slidesEl,
            `[data-swiper-slide-index="${swiper.realIndex + i}"]`
          ).forEach((slideEl) => {
            slideEl.classList.add(thumbActiveClass)
          })
        } else {
          elementChildrenByTagIndex(
            thumbsSwiper.slidesEl,
            swiper.realIndex + i,
            // @ts-ignore
            `[data-swiper-slide-index="${swiper.realIndex + i}"]`
          ).forEach((slideEl) => {
            slideEl.classList.add(thumbActiveClass)
          })
        }
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(
            thumbActiveClass
          )
        }
      }
    }

    const autoScrollOffset = (swiper.params.thumbs as ThumbsOptions)
      .autoScrollOffset as number
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex
      let newThumbsIndex: number
      let direction: 'next' | 'prev'

      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(
          (slideEl) =>
            slideEl.getAttribute('data-swiper-slide-index') ===
            String(swiper.realIndex)
        )[0]
        // @ts-ignore
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide)
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev'
      } else {
        newThumbsIndex = swiper.realIndex
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev'
      }

      if (useOffset) {
        newThumbsIndex +=
          direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset
      }

      if (
        thumbsSwiper.visibleSlidesIndexes &&
        thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0
      ) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex =
              newThumbsIndex - Math.floor((slidesPerView as number) / 2) + 1
          } else {
            newThumbsIndex =
              newThumbsIndex + Math.floor((slidesPerView as number) / 2) - 1
          }
        } else if (
          newThumbsIndex > currentThumbsIndex &&
          thumbsSwiper.params.slidesPerGroup === 1
        ) {
          newThumbsIndex = newThumbsIndex - (slidesPerView as number) + 1
        }
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined)
      }
    }
  }

  on('beforeInit', () => {
    const { thumbs } = swiper.params
    if (!thumbs || !thumbs.swiper) return

    if (
      isWeb() &&
      (typeof thumbs.swiper === 'string' ||
        thumbs.swiper instanceof HTMLElement)
    ) {
      const getThumbsElementAndInit = () => {
        const thumbsElement =
          typeof thumbs.swiper === 'string'
            ? document.querySelector(thumbs.swiper)
            : thumbs.swiper
        if (thumbsElement && (thumbsElement as any).swiper) {
          thumbs.swiper = (thumbsElement as any).swiper
          init()
          update(true)
        } else if (thumbsElement) {
          const eventName = `${swiper.params.eventsPrefix}init`
          const onThumbsSwiper = (e: CustomEvent) => {
            thumbs.swiper = e.detail[0]
            // @ts-ignore
            thumbsElement.removeEventListener(eventName, onThumbsSwiper)
            init()
            update(true)
            ;(thumbs.swiper as SwiperInterface).update()
            swiper.update()
          }

          // @ts-ignore
          thumbsElement.addEventListener(
            eventName,
            onThumbsSwiper as EventListener
          )
        }
        return thumbsElement
      }

      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return
        const thumbsElement = getThumbsElementAndInit()
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear)
        }
      }
      requestAnimationFrame(watchForThumbsToAppear)
    } else {
      init()
      update(true)
    }
  })

  on('slideChange update resize observerUpdate', () => {
    update()
  })

  on('setTransition', (_s: any, duration: number) => {
    const thumbsSwiper = swiper.thumbs.swiper
    if (!thumbsSwiper || thumbsSwiper.destroyed) return
    thumbsSwiper.setTransition(duration)
  })

  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper
    if (!thumbsSwiper || thumbsSwiper.destroyed) return
    if (swiperCreated) {
      thumbsSwiper.destroy()
    }
  })

  Object.assign(swiper.thumbs, {
    init,
    update
  })
}
