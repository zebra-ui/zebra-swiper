import {
  isWeb,
  showWarning,
  simulateRequestAnimationFrame
} from '../../shared/utils'
import type {
  LoopFix,
  LoopFixOptions
} from '../../../types/components/core/loop/loop-fix'
import type { SwiperInterface } from '../../../types/swiper-class'

const loopFix: LoopFix = function (
  this: SwiperInterface,
  {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  }: LoopFixOptions = {}
) {
  const swiper = this as SwiperInterface & { __preventObserver__?: boolean }
  if (!swiper.params.loop) return
  swiper.emit('beforeLoopFix')

  const { slides, allowSlidePrev, allowSlideNext, slidesEl, params } = swiper
  const { centeredSlides } = params

  swiper.allowSlidePrev = true
  swiper.allowSlideNext = true

  if (
    swiper.virtual &&
    typeof swiper.params.virtual === 'object' &&
    swiper.params.virtual.enabled
  ) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true)
      } else if (
        params.centeredSlides &&
        swiper.snapIndex < Number(params.slidesPerView)
      ) {
        swiper.slideTo(
          swiper.virtual.slides.length + swiper.snapIndex,
          0,
          false,
          true
        )
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true)
      }
    }
    swiper.allowSlidePrev = allowSlidePrev
    swiper.allowSlideNext = allowSlideNext
    swiper.emit('loopFix')
    return
  }

  let { slidesPerView } = params
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic()
  } else {
    slidesPerView = Math.ceil(parseFloat(String(params.slidesPerView)))
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1
    }
  }

  const slidesPerGroup = params.slidesPerGroupAuto
    ? slidesPerView
    : params.slidesPerGroup || 1
  let loopedSlides = slidesPerGroup

  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - (loopedSlides % slidesPerGroup)
  }
  loopedSlides += params.loopAdditionalSlides || 0
  swiper.loopedSlides = loopedSlides

  const gridEnabled =
    swiper.grid && params.grid && params.grid.rows && params.grid.rows > 1

  if (slides.length < slidesPerView + loopedSlides) {
    showWarning(
      'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
    )
  } else if (gridEnabled && params.grid?.fill === 'row') {
    showWarning(
      'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
    )
  }

  const prependSlidesIndexes: number[] = []
  const appendSlidesIndexes: number[] = []

  let { activeIndex } = swiper

  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(
      slides.filter((el) =>
        el.classList.contains(params.slideActiveClass || '')
      )[0] as HTMLElement
    )
  } else {
    activeIndex = activeSlideIndex
  }

  const isNext = direction === 'next' || !direction
  const isPrev = direction === 'prev' || !direction

  let slidesPrepended = 0
  let slidesAppended = 0

  const cols = gridEnabled
    ? Math.ceil(slides.length / (params.grid?.rows || 1))
    : slides.length
  const activeColIndex = gridEnabled
    ? (slides[activeSlideIndex || 0] as any).column
    : activeSlideIndex
  const activeColIndexWithShift =
    activeColIndex +
    (centeredSlides && typeof setTranslate === 'undefined'
      ? -slidesPerView / 2 + 0.5
      : 0)

  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(
      loopedSlides - activeColIndexWithShift,
      slidesPerGroup
    )
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if ((slides[i] as any).column === colIndexToPrepend)
            prependSlidesIndexes.push(i)
        }
      } else {
        prependSlidesIndexes.push(cols - index - 1)
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(
      activeColIndexWithShift - (cols - loopedSlides * 2),
      slidesPerGroup
    )
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if ((slide as any).column === index)
            appendSlidesIndexes.push(slideIndex)
        })
      } else {
        appendSlidesIndexes.push(index)
      }
    }
  }

  swiper.__preventObserver__ = true
  if (isWeb()) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false
    })
  } else {
    simulateRequestAnimationFrame(() => {
      swiper.__preventObserver__ = false
    })
  }

  if (isPrev) {
    if (isWeb()) {
      prependSlidesIndexes.forEach((index) => {
        ;(slides[index] as any).swiperLoopMoveDOM = true
        slidesEl.prepend(slides[index] as HTMLElement)
        ;(slides[index] as any).swiperLoopMoveDOM = false
      })
    } else {
      // @ts-ignore
      prependSlidesIndexes.length && slidesEl.prepend(prependSlidesIndexes)
    }
  }
  if (isNext) {
    if (isWeb()) {
      appendSlidesIndexes.forEach((index) => {
        ;(slides[index] as any).swiperLoopMoveDOM = true
        slidesEl.append(slides[index] as HTMLElement)
        ;(slides[index] as any).swiperLoopMoveDOM = false
      })
    } else {
      // @ts-ignore
      appendSlidesIndexes.length && slidesEl.append(appendSlidesIndexes)
    }
  }

  swiper.recalcSlides()

  if (params.slidesPerView === 'auto') {
    swiper.updateSlides()
  } else if (
    gridEnabled &&
    ((prependSlidesIndexes.length > 0 && isPrev) ||
      (appendSlidesIndexes.length > 0 && isNext))
  ) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(
        slideIndex,
        slide as HTMLElement,
        swiper.slides as HTMLElement[]
      )
    })
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset()
  }

  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex]
        const newSlideTranslate =
          swiper.slidesGrid[activeIndex + slidesPrepended]
        const diff = newSlideTranslate - currentSlideTranslate
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff)
        } else {
          swiper.slideTo(
            activeIndex + Math.ceil(slidesPrepended),
            0,
            false,
            true
          )
          if (setTranslate) {
            swiper.touchEventsData.startTranslate =
              swiper.touchEventsData.startTranslate - diff
            swiper.touchEventsData.currentTranslate =
              swiper.touchEventsData.currentTranslate - diff
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled
            ? prependSlidesIndexes.length / (params.grid?.rows || 1)
            : prependSlidesIndexes.length
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true)
          swiper.touchEventsData.currentTranslate = swiper.translate
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex]
        const newSlideTranslate =
          swiper.slidesGrid[activeIndex - slidesAppended]
        const diff = newSlideTranslate - currentSlideTranslate
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff)
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true)
          if (setTranslate) {
            swiper.touchEventsData.startTranslate =
              swiper.touchEventsData.startTranslate - diff
            swiper.touchEventsData.currentTranslate =
              swiper.touchEventsData.currentTranslate - diff
          }
        }
      } else {
        const shift = gridEnabled
          ? appendSlidesIndexes.length / (params.grid?.rows || 1)
          : appendSlidesIndexes.length
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true)
      }
    }
  }

  swiper.allowSlidePrev = allowSlidePrev
  swiper.allowSlideNext = allowSlideNext

  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    }
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach((c) => {
        if (!c.destroyed && c.params.loop)
          c.loopFix({
            ...loopParams,
            slideTo:
              c.params.slidesPerView === params.slidesPerView ? slideTo : false
          })
      })
    } else if (
      swiper.controller.control instanceof swiper.constructor &&
      // @ts-ignore
      swiper.controller.control.params.loop
    ) {
      // @ts-ignore
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo:
          // @ts-ignore
          swiper.controller.control.params.slidesPerView ===
          params.slidesPerView
            ? slideTo
            : false
      })
    }
  }

  swiper.emit('loopFix')
}

export default loopFix
