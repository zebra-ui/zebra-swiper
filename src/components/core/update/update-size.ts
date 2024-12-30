import { elementStyle, getWindowSize, isWeb } from '../../shared/utils'
import type { UpdateSize } from '../../../types/components/core/update/update-size'
import type { SwiperInterface } from '../../../types/swiper-class'
import type { SwiperInstance } from '../../../types/swiper-instance'

const updateSize: UpdateSize = function (this: SwiperInterface) {
  const swiper = this
  let width: number
  let height: number
  const { el } = swiper

  const { windowWidth, windowHeight } = getWindowSize(el)

  if (
    typeof swiper.params.width !== 'undefined' &&
    swiper.params.width !== null
  ) {
    // eslint-disable-next-line prefer-destructuring
    width = swiper.params.width
  } else {
    if (isWeb()) {
      width = (el as HTMLElement).clientWidth
    } else {
      if ((el as SwiperInstance)?.rectWidth) {
        width = (el as SwiperInstance).rectWidth
      } else {
        width = windowWidth
      }
    }
  }

  if (
    typeof swiper.params.height !== 'undefined' &&
    swiper.params.height !== null
  ) {
    // eslint-disable-next-line prefer-destructuring
    height = swiper.params.height
  } else {
    if (isWeb()) {
      height = (el as HTMLElement).clientHeight
    } else {
      if ((el as SwiperInstance)?.rectHeight) {
        height = (el as SwiperInstance).rectHeight
      } else {
        height = windowHeight
      }
    }
  }

  if (
    (width === 0 && swiper.isHorizontal()) ||
    (height === 0 && swiper.isVertical())
  ) {
    return
  }

  // Subtract paddings
  if (isWeb()) {
    width =
      width -
      parseInt(elementStyle(el, 'padding-left') || '0', 10) -
      parseInt(elementStyle(el, 'padding-right') || '0', 10)
    height =
      height -
      parseInt(elementStyle(el, 'padding-top') || '0', 10) -
      parseInt(elementStyle(el, 'padding-bottom') || '0', 10)
  }

  width = Number.isNaN(width) ? 0 : width
  height = Number.isNaN(height) ? 0 : height

  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  })
}

export default updateSize
