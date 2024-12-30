import {
  elementTransitionEnd,
  isWeb,
  nextTick
} from '../../components/shared/utils'
import type {
  ControllerOptions,
  Controller
} from '../../types/modules/controller'
import type { SwiperInterface } from '../../types/swiper-class'
import type Swiper from '../../types/swiper-class'

export default function Controller({
  swiper,
  extendParams,
  on
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
}): void {
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide'
    } as ControllerOptions
  })

  swiper.controller = {
    control: undefined
  }

  function LinearSpline(this: any, x: number[], y: number[]) {
    const binarySearch = (function search() {
      let maxIndex
      let minIndex
      let guess
      return (array: number[], val: number) => {
        minIndex = -1
        maxIndex = array.length
        while (maxIndex - minIndex > 1) {
          guess = (maxIndex + minIndex) >> 1
          if (array[guess] <= val) {
            minIndex = guess
          } else {
            maxIndex = guess
          }
        }
        return maxIndex
      }
    })()
    this.x = x
    this.y = y
    this.lastIndex = x.length - 1
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1
    let i3

    this.interpolate = function interpolate(x2: number) {
      if (!x2) return 0

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2)
      i1 = i3 - 1

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (
        ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) /
          (this.x[i3] - this.x[i1]) +
        this.y[i1]
      )
    }
    return this
  }

  function getInterpolateFunction(c: SwiperInterface) {
    ;(swiper.controller as Controller).spline = swiper.params.loop
      ? new (LinearSpline as any)(swiper.slidesGrid, c.slidesGrid)
      : new (LinearSpline as any)(swiper.snapGrid, c.snapGrid)
  }

  function setTranslate(_t: number, byController?: SwiperInterface) {
    const controlled = swiper.controller.control
    let multiplier: number
    let controlledTranslate: number
    const Swiper = swiper.constructor

    function setControlledTranslate(c: SwiperInterface) {
      if (c.destroyed) return

      const translate = swiper.rtlTranslate
        ? -swiper.translate
        : swiper.translate

      if (swiper.params.controller?.by === 'slide') {
        getInterpolateFunction(c)
        // @ts-ignore
        controlledTranslate = -swiper.controller.spline.interpolate(-translate)
      }

      if (
        !controlledTranslate ||
        swiper.params.controller?.by === 'container'
      ) {
        multiplier =
          (c.maxTranslate() - c.minTranslate()) /
          (swiper.maxTranslate() - swiper.minTranslate())
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1
        }
        controlledTranslate =
          (translate - swiper.minTranslate()) * multiplier + c.minTranslate()
      }

      if ((swiper.params.controller as ControllerOptions).inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate
      }
      c.updateProgress(controlledTranslate)
      c.setTranslate(controlledTranslate, swiper)
      c.updateActiveIndex()
      c.updateSlidesClasses()
    }

    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i])
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled as SwiperInterface)
    }
  }

  function setTransition(duration: number, byController?: SwiperInterface) {
    const Swiper = swiper.constructor
    const controlled = swiper.controller.control
    let i: number

    function setControlledTransition(c: SwiperInterface) {
      if (c.destroyed) return
      c.setTransition(duration, swiper)
      if (duration !== 0) {
        c.transitionStart()
        if (c.params.autoHeight) {
          nextTick(() => {
            c.updateAutoHeight()
          })
        }
        elementTransitionEnd(c.wrapperEl, () => {
          if (!controlled) return
          c.transitionEnd()
        })
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i])
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      // @ts-ignore
      setControlledTransition(controlled)
    }
  }

  function removeSpline() {
    if (!swiper.controller.control) return
    if ((swiper.controller as Controller).spline) {
      ;(swiper.controller as Controller).spline = undefined
      delete (swiper.controller as Controller).spline
    }
  }

  on('beforeInit', () => {
    if (
      typeof window !== 'undefined' &&
      isWeb() &&
      (typeof swiper.params.controller?.control === 'string' ||
        swiper.params.controller?.control instanceof HTMLElement)
    ) {
      const controlElements = document.querySelectorAll(
        swiper.params.controller.control as string
      )
      controlElements.forEach((controlElement) => {
        if (!swiper.controller.control) swiper.controller.control = []
        // @ts-ignore
        if (controlElement.swiper) {
          // @ts-ignore
          ;(swiper.controller.control as Swiper[]).push(controlElement.swiper)
        } else {
          const onInit = (e: CustomEvent) => {
            ;(swiper.controller.control as Swiper[]).push(e.detail[0])
            swiper.update()
            // @ts-ignore
            controlElement.removeEventListener(
              `${swiper.params.eventsPrefix}init`,
              onInit
            )
          }
          // @ts-ignore
          controlElement.addEventListener(
            `${swiper.params.eventsPrefix}init`,
            onInit
          )
        }
      })
      return
    }
    swiper.controller.control = swiper.params.controller?.control
  })

  on('update', () => {
    removeSpline()
  })

  on('resize', () => {
    removeSpline()
  })

  on('observerUpdate', () => {
    removeSpline()
  })

  on('setTranslate', (_s: Swiper, translate: number, byController: Swiper) => {
    // @ts-ignore
    if (!swiper.controller.control || swiper.controller.control.destroyed)
      return
    ;(swiper.controller as SwiperInterface).setTranslate(
      translate,
      byController
    )
  })

  on('setTransition', (_s: Swiper, duration: number, byController: Swiper) => {
    // @ts-ignore
    if (!swiper.controller.control || swiper.controller.control.destroyed)
      return
    ;(swiper.controller as SwiperInterface).setTransition(
      duration,
      byController
    )
  })

  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  })
}
