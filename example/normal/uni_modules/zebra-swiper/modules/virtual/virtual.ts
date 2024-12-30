import {
  createElement,
  elementChildren,
  isWeb,
  setCSSProperty
} from '../../components/shared/utils'
import type {
  VirtualOptions,
  VirtualMethods
} from '../../types/modules/virtual'
import type { SwiperInterface } from '../../types/swiper-class'

export default function Virtual({
  swiper,
  extendParams,
  on,
  emit
}: {
  swiper: SwiperInterface
  extendParams: (params: Record<string, any>) => void
  on: (event: string, handler: (...args: any[]) => void) => void
  emit: (event: string, ...args: any[]) => void
}): void {
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      data: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    } as unknown as VirtualOptions
  })

  let cssModeTimeout: number | null

  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    data: [],
    offset: 0,
    slidesGrid: []
  } as unknown as VirtualMethods

  function renderSlide(slide: any, index: number): HTMLElement {
    const params = swiper.params.virtual as VirtualOptions
    // @ts-ignore
    if (params.cache && swiper.virtual.cache[index]) {
      // @ts-ignore
      return swiper.virtual.cache[index]
    }

    let slideEl: HTMLElement
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index)
      if (typeof slideEl === 'string') {
        const tempDOM = document.createElement('div')
        tempDOM.innerHTML = slideEl
        slideEl = tempDOM.children[0] as HTMLElement
      }
    } else if (swiper.isElement) {
      slideEl = createElement('swiper-slide') as HTMLElement
    } else {
      slideEl = createElement('div', swiper.params.slideClass) as HTMLElement
    }

    slideEl.setAttribute('data-swiper-slide-index', String(index))
    if (!params.renderSlide) {
      slideEl.innerHTML = slide
    }

    if (params.cache) {
      // @ts-ignore
      swiper.virtual.cache[index] = slideEl
    }
    return slideEl
  }

  function update(force?: boolean, beforeInit?: boolean) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop,
      initialSlide
    } = swiper.params
    if (beforeInit && !isLoop && (initialSlide as number) > 0) {
      return
    }
    const { addSlidesBefore, addSlidesAfter } = swiper.params
      .virtual as VirtualOptions
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset,
      data
    } = swiper.virtual

    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex()
    }

    const activeIndex = swiper.activeIndex || 0

    let offsetProp: 'left' | 'right' | 'top'
    if (swiper.rtlTranslate) offsetProp = 'right'
    else offsetProp = swiper.isHorizontal() ? 'left' : 'top'

    let slidesAfter: number
    let slidesBefore: number

    if (centeredSlides) {
      slidesAfter =
        Math.floor((slidesPerView as number) / 2) +
        (slidesPerGroup as number) +
        (addSlidesAfter as number)
      slidesBefore =
        Math.floor((slidesPerView as number) / 2) +
        (slidesPerGroup as number) +
        (addSlidesBefore as number)
    } else {
      slidesAfter =
        (slidesPerView as number) +
        (slidesPerGroup as number) -
        1 +
        (addSlidesAfter as number)
      slidesBefore =
        (isLoop ? (slidesPerView as number) : (slidesPerGroup as number)) +
        (addSlidesBefore as number)
    }

    let from = activeIndex - slidesBefore
    let to = activeIndex + slidesAfter

    if (!isLoop) {
      from = Math.max(from, 0)
      to = Math.min(to, slides.length - 1)
    }

    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0)

    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore
      if (!centeredSlides) offset += swiper.slidesGrid[0]
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore
      if (centeredSlides) offset += swiper.slidesGrid[0]
    }

    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    })

    function onRendered() {
      swiper.updateSlides()
      swiper.updateProgress()
      swiper.updateSlidesClasses()
      emit('virtualUpdate')
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (
        swiper.slidesGrid !== previousSlidesGrid &&
        offset !== previousOffset
      ) {
        swiper.slides.forEach((slideEl) => {
          slideEl.style[offsetProp] =
            `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`
        })
      }
      swiper.updateProgress()
      emit('virtualUpdate')
      return
    }

    if ((swiper.params.virtual as VirtualOptions)?.renderExternal) {
      ;(swiper.params.virtual as VirtualOptions).renderExternal?.call(swiper, {
        offset,
        from,
        to,
        slides: (function getSlides() {
          const slidesToRender = []
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i])
          }
          return slidesToRender
        })(),
        data: (function getSlides() {
          const slidesToRender = []
          for (let i = from; i <= to; i += 1) {
            // @ts-ignore
            slidesToRender.push(data[i])
          }
          return slidesToRender
        })()
      })

      if ((swiper.params.virtual as VirtualOptions)?.renderExternalUpdate) {
        onRendered()
      } else {
        emit('virtualUpdate')
      }
      return
    }

    const prependIndexes: number[] = []
    const appendIndexes: number[] = []

    const getSlideIndex = (index: number): number => {
      let slideIndex = index
      if (index < 0) {
        slideIndex = slides.length + index
      } else if (slideIndex >= slides.length) {
        slideIndex = slideIndex - slides.length
      }
      return slideIndex
    }

    if (force) {
      swiper.slides
        .filter((el) =>
          (el as HTMLElement).matches(
            `.${swiper.params.slideClass}, swiper-slide`
          )
        )
        .forEach((slideEl) => {
          ;(slideEl as HTMLElement).remove()
        })
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i)
          swiper.slides
            .filter((el) =>
              (el as HTMLElement).matches(
                `.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`
              )
            )
            .forEach((slideEl) => {
              ;(slideEl as HTMLElement).remove()
            })
        }
      }
    }

    const loopFrom = isLoop ? -slides.length : 0
    const loopTo = isLoop ? slides.length * 2 : slides.length
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i)
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex)
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex)
          if (i < previousFrom) prependIndexes.push(slideIndex)
        }
      }
    }

    appendIndexes.forEach((index) => {
      swiper.slidesEl.append(renderSlide(slides[index], index))
    })
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i]
        swiper.slidesEl.prepend(renderSlide(slides[index], index))
      }
    } else {
      prependIndexes.sort((a, b) => b - a)
      prependIndexes.forEach((index) => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index))
      })
    }
    elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(
      (slideEl) => {
        slideEl.style[offsetProp] =
          `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`
      }
    )
    onRendered()
  }

  function appendSlide(slides: HTMLElement | HTMLElement[]): void {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i])
      }
    } else {
      swiper.virtual.slides.push(slides)
    }
    update(true)
  }

  function prependSlide(slides: HTMLElement | HTMLElement[]): void {
    const { activeIndex } = swiper
    let newActiveIndex = activeIndex + 1
    let numberOfNewSlides = 1

    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i])
      }
      newActiveIndex = activeIndex + slides.length
      numberOfNewSlides = slides.length
    } else {
      swiper.virtual.slides.unshift(slides)
    }

    if ((swiper.params.virtual as VirtualOptions).cache) {
      const { cache } = swiper.virtual
      const newCache: Record<number, HTMLElement> = {}
      Object.keys(cache).forEach((cachedIndex) => {
        // @ts-ignore
        const cachedEl = cache[cachedIndex]
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index')
        if (cachedElIndex) {
          cachedEl.setAttribute(
            'data-swiper-slide-index',
            String(Number(cachedElIndex) + numberOfNewSlides)
          )
        }
        newCache[Number(cachedIndex) + numberOfNewSlides] = cachedEl
      })
      swiper.virtual.cache = newCache
    }

    update(true)
    swiper.slideTo(newActiveIndex, 0)
  }

  function removeSlide(slideIndexes: number | number[]): void {
    if (typeof slideIndexes === 'undefined' || slideIndexes === null) return

    let { activeIndex } = swiper

    if (Array.isArray(slideIndexes)) {
      for (let i = slideIndexes.length - 1; i >= 0; i -= 1) {
        if ((swiper.params.virtual as VirtualOptions).cache) {
          // @ts-ignore
          delete swiper.virtual.cache[slideIndexes[i]]
          Object.keys(swiper.virtual.cache).forEach((key) => {
            // @ts-ignore
            if (key > slidesIndexes) {
              // @ts-ignore
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key]
              // @ts-ignore
              swiper.virtual.cache[key - 1].setAttribute(
                'data-swiper-slide-index',
                // @ts-ignore
                key - 1
              )
              // @ts-ignore
              delete swiper.virtual.cache[key]
            }
          })
        }
        swiper.virtual.slides.splice(slideIndexes[i], 1)

        if (slideIndexes[i] < activeIndex) activeIndex -= 1
        activeIndex = Math.max(activeIndex, 0)
      }
    } else {
      if ((swiper.params.virtual as VirtualOptions).cache) {
        // @ts-ignore
        delete swiper.virtual.cache[slideIndexes]
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach((key) => {
          // @ts-ignore
          if (key > slidesIndexes) {
            // @ts-ignore
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key]
            // @ts-ignore
            swiper.virtual.cache[key - 1].setAttribute(
              'data-swiper-slide-index',
              // @ts-ignore
              key - 1
            )
            // @ts-ignore
            delete swiper.virtual.cache[key]
          }
        })
      }
      swiper.virtual.slides.splice(slideIndexes, 1)

      if (slideIndexes < activeIndex) activeIndex -= 1
      activeIndex = Math.max(activeIndex, 0)
    }

    update(true)
    swiper.slideTo(activeIndex, 0)
  }

  function removeAllSlides(): void {
    swiper.virtual.slides = []
    if ((swiper.params.virtual as VirtualOptions).cache) {
      swiper.virtual.cache = {}
    }
    update(true)
    swiper.slideTo(0, 0)
  }

  // Event handlers
  on('beforeInit', () => {
    if (!(swiper.params.virtual as VirtualOptions).enabled) return

    let domSlidesAssigned: boolean
    // @ts-ignore
    if (typeof swiper.passedParams.virtual?.slides === 'undefined') {
      const slides = Array.from(swiper.slidesEl.children).filter((el) => {
        if (isWeb()) {
          return el.matches(`.${swiper.params.slideClass}, swiper-slide`)
        }
        return el
      })
      if (slides && slides.length) {
        domSlidesAssigned = true
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', String(slideIndex))
          // @ts-ignore
          swiper.virtual.cache[slideIndex] = slideEl
          if (isWeb()) {
            slideEl.remove()
          }
        })
      }
    }

    // @ts-ignore
    if (!domSlidesAssigned) {
      swiper.virtual.slides =
        (swiper.params.virtual as VirtualOptions).slides || []
    }

    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`)

    swiper.params.watchSlidesProgress = true
    swiper.originalParams.watchSlidesProgress = true

    update(false, true)
  })

  on('setTranslate', () => {
    if (!(swiper.params.virtual as VirtualOptions).enabled) return
    // @ts-ignore
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout as number)
      cssModeTimeout = setTimeout(() => {
        update()
      }, 100)
    } else {
      update()
    }
  })

  on('init update resize', () => {
    if (!(swiper.params.virtual as VirtualOptions).enabled) return
    if (swiper.params.cssMode) {
      setCSSProperty(
        swiper.wrapperEl,
        '--swiper-virtual-size',
        `${swiper.virtualSize}px`
      )
    }
  })

  // Export methods
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  })
}
