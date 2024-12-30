import {
  elementChildren,
  elementOuterSize,
  elementStyle,
  setCSSProperty,
  isWeb
} from '../../shared/utils'
import type {
  UpdateSlides,
  GetDirectionPropertyValue
} from '../../../types/components/core/update/update-slides'
import type { SwiperInterface } from '../../../types/swiper-class'
import type { SwiperEvents } from '../../../types/swiper-events'

const updateSlides: UpdateSlides = function (this: SwiperInterface) {
  const swiper = this

  const getDirectionPropertyValue: GetDirectionPropertyValue = (
    node,
    label
  ) => {
    if (isWeb()) {
      return parseFloat(
        node.getPropertyValue(swiper.getDirectionLabel(label)) || '0'
      )
    }
    return parseFloat(node[swiper.getDirectionLabel(label)] || '0')
  }

  const { params } = swiper
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper

  const isVirtual =
    swiper.virtual &&
    typeof params.virtual === 'object' &&
    params.virtual.enabled
  const previousSlidesLength = isVirtual
    ? swiper.virtual.slides.length
    : swiper.slides.length
  const slides = elementChildren(
    slidesEl,
    `.${swiper.params.slideClass}, swiper-slide`
  )
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length
  let snapGrid: number[] = []
  const slidesGrid: number[] = []
  const slidesSizesGrid: number[] = []

  let offsetBefore = params.slidesOffsetBefore
  if (typeof offsetBefore === 'function') {
    offsetBefore =
      // @ts-ignore
      params.slidesOffsetBefore && params.slidesOffsetBefore.call(swiper)
  }

  let offsetAfter = params.slidesOffsetAfter
  if (typeof offsetAfter === 'function') {
    offsetAfter =
      // @ts-ignore
      params.slidesOffsetAfter && params.slidesOffsetAfter.call(swiper)
  }

  const previousSnapGridLength = swiper.snapGrid.length
  const previousSlidesGridLength = swiper.slidesGrid.length

  let { spaceBetween } = params
  let slidePosition = offsetBefore ? -offsetBefore : 0
  let prevSlideSize = 0
  let index = 0

  if (typeof swiperSize === 'undefined') {
    return
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween =
      (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween)
  }

  swiper.virtualSize = spaceBetween ? -spaceBetween : 0

  // reset margins
  slides.forEach((slideEl: HTMLElement) => {
    if (rtl) {
      slideEl.style.marginLeft = ''
    } else {
      slideEl.style.marginRight = ''
    }
    slideEl.style.marginBottom = ''
    slideEl.style.marginTop = ''
  })

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '')
    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '')
  }

  const gridEnabled =
    params.grid && params.grid.rows && params.grid.rows > 1 && swiper.grid
  if (gridEnabled) {
    swiper.grid.initSlides(slides)
  } else if (swiper.grid) {
    swiper.grid.unsetSlides()
  }

  // Calc slides
  let slideSize: number
  const shouldResetSlideSize =
    params.slidesPerView === 'auto' &&
    params.breakpoints &&
    Object.keys(params.breakpoints).filter((key) => {
      // @ts-ignore
      return typeof params.breakpoints[key].slidesPerView !== 'undefined'
    }).length > 0

  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0
    let slide: HTMLElement | undefined
    if (slides[i]) slide = slides[i]

    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide as HTMLElement, slides)
    }

    if (slides[i] && elementStyle(slide, 'display') === 'none') continue

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ''
      }

      let slideStyles: CSSStyleDeclaration | any
      if (isWeb()) {
        slideStyles = getComputedStyle(slide as HTMLElement)
      } else {
        slideStyles = slide && slide.style
      }

      const currentTransform = slide && slide.style.transform
      const currentWebKitTransform = slide && slide.style.webkitTransform

      if (currentTransform && slide) {
        slide.style.transform = 'none'
      }
      if (currentWebKitTransform && slide) {
        slide.style.webkitTransform = 'none'
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal()
          ? elementOuterSize(slide, 'width', true)
          : elementOuterSize(slide, 'height', true)
      } else {
        const width = getDirectionPropertyValue(slideStyles, 'width')
        const paddingLeft = getDirectionPropertyValue(
          slideStyles,
          'padding-left'
        )
        const paddingRight = getDirectionPropertyValue(
          slideStyles,
          'padding-right'
        )
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left')
        const marginRight = getDirectionPropertyValue(
          slideStyles,
          'margin-right'
        )
        const boxSizing = isWeb()
          ? slideStyles.getPropertyValue('box-sizing')
          : slideStyles['box-sizing']

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight
        } else {
          if (isWeb()) {
            const { clientWidth, offsetWidth } = slide as HTMLElement
            slideSize =
              width +
              paddingLeft +
              paddingRight +
              marginLeft +
              marginRight +
              (offsetWidth - clientWidth)
          } else {
            slideSize =
              width + paddingLeft + paddingRight + marginLeft + marginRight
          }
        }
      }

      if (currentTransform && slide) {
        slide.style.transform = currentTransform
      }
      if (currentWebKitTransform && slide) {
        slide.style.webkitTransform = currentWebKitTransform
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize)
    } else {
      slideSize =
        (swiperSize -
          (params.slidesPerView ? params.slidesPerView - 1 : 0) *
            (spaceBetween || 0)) /
        (params.slidesPerView || 1)
      if (params.roundLengths) slideSize = Math.floor(slideSize)

      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize
    }
    slidesSizesGrid.push(slideSize)

    if (params.centeredSlides) {
      slidePosition =
        slidePosition + slideSize / 2 + prevSlideSize / 2 + (spaceBetween || 0)
      if (prevSlideSize === 0 && i !== 0) {
        slidePosition = slidePosition - swiperSize / 2 - (spaceBetween || 0)
      }
      if (i === 0)
        slidePosition = slidePosition - swiperSize / 2 - (spaceBetween || 0)
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0
      if (params.roundLengths) slidePosition = Math.floor(slidePosition)
      if (index % (params.slidesPerGroup || 0) === 0)
        snapGrid.push(slidePosition)

      slidesGrid.push(slidePosition)
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition)
      if (
        (index - Math.min(Number(swiper.params.slidesPerGroupSkip), index)) %
          (swiper.params.slidesPerGroup || 0) ===
        0
      )
        snapGrid.push(slidePosition)
      slidesGrid.push(slidePosition)
      slidePosition = slidePosition + slideSize + (spaceBetween || 0)
    }

    swiper.virtualSize += slideSize + (spaceBetween || 0)

    prevSlideSize = slideSize

    index += 1
  }

  swiper.virtualSize =
    Math.max(swiper.virtualSize, swiperSize) + (offsetAfter || 0)

  if (
    rtl &&
    wrongRTL &&
    (params.effect === 'slide' || params.effect === 'coverflow')
  ) {
    wrapperEl.style.width = `${swiper.virtualSize + (spaceBetween || 0)}px`
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width') as any] = `${
      swiper.virtualSize + (spaceBetween || 0)
    }px`
  }

  if (gridEnabled) {
    // @ts-ignore
    swiper.grid.updateWrapperSize(slideSize, snapGrid)
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid: number[] = []
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i]
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem)
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem)
      }
    }
    snapGrid = newSlidesGrid

    if (
      Math.floor(swiper.virtualSize - swiperSize) -
        Math.floor(snapGrid[snapGrid.length - 1]) >
      1
    ) {
      snapGrid.push(swiper.virtualSize - swiperSize)
    }
  }

  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + (spaceBetween || 0)
    if (params.slidesPerGroup && params.slidesPerGroup > 1) {
      const groups = Math.ceil(
        (swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) /
          params.slidesPerGroup
      )
      const groupSize = size * params.slidesPerGroup
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize)
      }
    }
    for (
      let i = 0;
      i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter;
      i += 1
    ) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size)
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size)
      swiper.virtualSize += size
    }
  }

  if (snapGrid.length === 0) snapGrid = [0]

  if (spaceBetween !== 0) {
    const key =
      swiper.isHorizontal() && rtl
        ? 'marginLeft'
        : swiper.getDirectionLabel('marginRight')
    slides
      .filter((_, slideIndex) => {
        if (!params.cssMode || params.loop) return true
        if (slideIndex === slides.length - 1) {
          return false
        }
        return true
      })
      .forEach((slideEl: HTMLElement) => {
        slideEl.style[key as any] = `${spaceBetween}px`
      })
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0)
    })
    allSlidesSize -= spaceBetween || 0
    const maxSnap = allSlidesSize - swiperSize
    snapGrid = snapGrid.map((snap) => {
      if (snap <= 0) return -(offsetBefore || 0)
      if (snap > maxSnap) return maxSnap + (offsetAfter || 0)
      return snap
    })
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0)
    })
    allSlidesSize -= spaceBetween || 0
    const offsetSize =
      (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0)
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset
      })
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset
      })
    }
  }

  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  })

  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(
      wrapperEl,
      '--swiper-centered-offset-before',
      `${-snapGrid[0]}px`
    )
    setCSSProperty(
      wrapperEl,
      '--swiper-centered-offset-after',
      `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`
    )
    const addToSnapGrid = -swiper.snapGrid[0]
    const addToSlidesGrid = -swiper.slidesGrid[0]
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid)
    swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid)
  }

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange' as keyof SwiperEvents)
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow()
    swiper.emit('snapGridLengthChange' as keyof SwiperEvents)
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange' as keyof SwiperEvents)
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset()
  }

  swiper.emit('slidesUpdated' as keyof SwiperEvents)

  if (
    !isVirtual &&
    !params.cssMode &&
    (params.effect === 'slide' || params.effect === 'fade')
  ) {
    if (!swiper.el) return
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`
    const hasClassBackfaceClassAdded =
      swiper.el.classList.contains(backFaceHiddenClass)
    if (slidesLength <= (params.maxBackfaceHiddenSlides || 0)) {
      if (!hasClassBackfaceClassAdded)
        swiper.el.classList.add(backFaceHiddenClass)
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass)
    }
  }
}

export default updateSlides
