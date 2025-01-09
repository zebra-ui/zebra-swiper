import {
  isWeb,
  simulateRequestAnimationFrame
} from '../../components/shared/utils'
import type {
  AutoplayOptions,
  AutoplayMethods
} from '../../types/modules/autoplay'
import type { SwiperInterface } from '../../types/swiper-class'
import type { SwiperItemInstance } from '../../types/swiper-item-instance'

export default function Autoplay({
  swiper,
  extendParams,
  on,
  emit,
  params
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: () => void) => void
  emit: (event: string, ...args: any[]) => void
  params?: Record<string, any>
}): void {
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  } as AutoplayMethods

  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    } as AutoplayOptions
  })

  let timeout: number | undefined
  let raf: number | undefined
  let autoplayDelayTotal = params?.autoplay?.delay || 3000
  let autoplayDelayCurrent = params?.autoplay?.delay || 3000
  let autoplayTimeLeft: number
  let autoplayStartTime = new Date().getTime()
  let wasPaused: boolean
  let isTouched: boolean
  let pausedByTouch: boolean
  let touchStartTimeout: number | undefined
  let slideChanged: boolean
  let pausedByInteraction: boolean
  let pausedByPointerEnter: boolean

  function onTransitionEnd(e: Event) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return
    if (isWeb()) {
      if (e.target !== swiper.wrapperEl) return
      swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd)
    } else {
      if (
        (e.target as HTMLElement).id !== `swiperWrapper${swiper.adapterEl.uid}`
      )
        return
      swiper.wrapperEl.removeEventListener(
        'transitionend',
        onTransitionEnd,
        // @ts-ignore
        'onTransitionEnd'
      )
    }
    if (pausedByPointerEnter || (e as any).detail?.bySwiperTouchMove) {
      return
    }
    resume()
  }

  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return
    if (swiper.autoplay.paused) {
      wasPaused = true
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft
      wasPaused = false
    }
    const timeLeft = swiper.autoplay.paused
      ? autoplayTimeLeft
      : autoplayStartTime + autoplayDelayCurrent - new Date().getTime()
    swiper.autoplay.timeLeft = timeLeft
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal)
    if (isWeb()) {
      raf = requestAnimationFrame(() => {
        calcTimeLeft()
      })
    } else {
      raf = simulateRequestAnimationFrame(() => {
        calcTimeLeft()
      })
    }
  }

  const getSlideDelay = (): number | undefined => {
    let activeSlideEl: HTMLElement | undefined
    if (
      swiper.virtual &&
      typeof swiper.params.virtual === 'object' &&
      swiper.params.virtual?.enabled
    ) {
      activeSlideEl = swiper.slides.filter(
        (slideEl: HTMLElement | SwiperItemInstance) =>
          slideEl.classList.contains('swiper-slide-active')
      )[0] as HTMLElement
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex] as HTMLElement
    }
    if (!activeSlideEl) return undefined
    return parseInt(
      activeSlideEl.getAttribute('data-swiper-autoplay') || '',
      10
    )
  }

  const run = (delayForce?: number) => {
    if (swiper.destroyed || !swiper.autoplay.running) return
    if (isWeb()) cancelAnimationFrame(Number(raf))
    calcTimeLeft()

    let delay =
      typeof delayForce === 'undefined'
        ? (swiper.params.autoplay as AutoplayOptions)?.delay
        : delayForce
    autoplayDelayTotal = (swiper.params.autoplay as AutoplayOptions)?.delay
    autoplayDelayCurrent = (swiper.params.autoplay as AutoplayOptions)?.delay
    const currentSlideDelay = getSlideDelay()
    if (
      !Number.isNaN(currentSlideDelay) &&
      currentSlideDelay &&
      currentSlideDelay > 0 &&
      typeof delayForce === 'undefined'
    ) {
      delay = currentSlideDelay
      autoplayDelayTotal = currentSlideDelay
      autoplayDelayCurrent = currentSlideDelay
    }
    autoplayTimeLeft = delay || 0

    const { speed } = swiper.params
    const proceed = () => {
      if (!swiper || swiper.destroyed) return
      if ((swiper.params.autoplay as AutoplayOptions)?.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true)
          emit('autoplay')
        } else if (
          !(swiper.params.autoplay as AutoplayOptions)?.stopOnLastSlide
        ) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true)
          emit('autoplay')
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true)
          emit('autoplay')
        } else if (
          !(swiper.params.autoplay as AutoplayOptions)?.stopOnLastSlide
        ) {
          swiper.slideTo(0, speed, true, true)
          emit('autoplay')
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime()
        if (isWeb()) {
          requestAnimationFrame(() => {
            run()
          })
        } else {
          simulateRequestAnimationFrame(() => {
            run()
          })
        }
      }
    }

    if (delay && delay > 0) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        proceed()
      }, delay)
    } else {
      if (isWeb()) {
        requestAnimationFrame(() => {
          proceed()
        })
      } else {
        simulateRequestAnimationFrame(() => {
          proceed()
        })
      }
    }

    return delay
  }

  const start = (): boolean => {
    autoplayStartTime = new Date().getTime()
    swiper.autoplay.running = true
    run()
    emit('autoplayStart')
    return true
  }

  const stop = (): boolean => {
    swiper.autoplay.running = false
    clearTimeout(timeout)
    if (isWeb()) cancelAnimationFrame(Number(raf))
    emit('autoplayStop')
    return true
  }

  const pause = (internal?: boolean, reset?: boolean) => {
    if (swiper.destroyed || !swiper.autoplay.running) return
    clearTimeout(timeout)
    if (!internal) {
      pausedByInteraction = true
    }

    const proceed = () => {
      emit('autoplayPause')
      if ((swiper.params.autoplay as AutoplayOptions)?.waitForTransition) {
        if (isWeb()) {
          swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd)
        } else {
          swiper.wrapperEl.addEventListener(
            'transitionend',
            // @ts-ignore
            onTransitionEnd.bind(this),
            // @ts-ignore
            'onTransitionEnd'
          )
        }
      } else {
        resume()
      }
    }

    swiper.autoplay.paused = true
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = (swiper.params.autoplay as AutoplayOptions)
          ?.delay as number
      }
      slideChanged = false
      proceed()
      return
    }
    const delay =
      autoplayTimeLeft ||
      ((swiper.params.autoplay as AutoplayOptions)?.delay as number)
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime)
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0
    proceed()
  }

  const resume = () => {
    if (
      (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) ||
      swiper.destroyed ||
      !swiper.autoplay.running
    )
      return
    autoplayStartTime = new Date().getTime()
    if (pausedByInteraction) {
      pausedByInteraction = false
      run(autoplayTimeLeft)
    } else {
      run()
    }
    swiper.autoplay.paused = false
    emit('autoplayResume')
  }

  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return
    const { document } = window
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true
      pause(true)
    }
    if (document.visibilityState === 'visible') {
      resume()
    }
  }

  const onPointerEnter = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    pausedByInteraction = true
    pausedByPointerEnter = true
    if (swiper.animating || swiper.autoplay.paused) return
    pause(true)
  }

  const onPointerLeave = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    pausedByPointerEnter = false
    if (swiper.autoplay.paused) {
      resume()
    }
  }

  const attachMouseEvents = () => {
    if (
      (swiper.params.autoplay as AutoplayOptions)?.pauseOnMouseEnter &&
      isWeb()
    ) {
      ;(swiper.el as HTMLElement).addEventListener(
        'pointerenter',
        onPointerEnter
      )
      ;(swiper.el as HTMLElement).addEventListener(
        'pointerleave',
        onPointerLeave
      )
    }
  }

  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== 'string' && isWeb()) {
      ;(swiper.el as HTMLElement).removeEventListener(
        'pointerenter',
        onPointerEnter
      )
      ;(swiper.el as HTMLElement).removeEventListener(
        'pointerleave',
        onPointerLeave
      )
    }
  }

  const attachDocumentEvents = () => {
    if (isWeb()) {
      document.addEventListener('visibilitychange', onVisibilityChange)
    }
  }

  const detachDocumentEvents = () => {
    if (isWeb()) {
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }

  // 事件监听
  on('init', () => {
    if ((swiper.params.autoplay as AutoplayOptions)?.enabled) {
      attachMouseEvents()
      attachDocumentEvents()
      start()
    }
  })

  on('destroy', () => {
    detachMouseEvents()
    detachDocumentEvents()
    if (swiper.autoplay.running) {
      stop()
    }
  })

  on('_freeModeStaticRelease', () => {
    if (pausedByTouch || pausedByInteraction) {
      resume()
    }
  })

  on('_freeModeNoMomentumRelease', () => {
    if (!(swiper.params.autoplay as AutoplayOptions)?.disableOnInteraction) {
      pause(true, true)
    } else {
      stop()
    }
  })

  on(
    'beforeTransitionStart',
    // @ts-ignore
    (_s: Swiper, speed: number, internal: boolean) => {
      if (swiper.destroyed || !swiper.autoplay.running) return
      if (
        internal ||
        !(swiper.params.autoplay as AutoplayOptions)?.disableOnInteraction
      ) {
        pause(true, true)
      } else {
        stop()
      }
    }
  )

  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return

    if ((swiper.params.autoplay as AutoplayOptions)?.disableOnInteraction) {
      stop()
      return
    }
    isTouched = true
    pausedByTouch = false
    pausedByInteraction = false
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true
      pausedByTouch = true
      pause(true)
    }, 200)
  })

  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return
    clearTimeout(touchStartTimeout)
    clearTimeout(timeout)

    if ((swiper.params.autoplay as AutoplayOptions)?.disableOnInteraction) {
      pausedByTouch = false
      isTouched = false
      return
    }

    if (pausedByTouch && swiper.params.cssMode) resume()
    pausedByTouch = false
    isTouched = false
  })

  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return
    slideChanged = true
  })

  // 暴露方法
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  })
}
