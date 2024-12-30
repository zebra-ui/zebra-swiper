import type {
  PrepareClasses,
  AddClasses
} from '../../../types/components/core/classes/add-classes'
import type { SwiperInterface } from '../../../types/swiper-class'

const prepareClasses: PrepareClasses = (entries, prefix) => {
  const resultClasses: string[] = []
  entries.forEach((item) => {
    if (typeof item === 'object') {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames)
        }
      })
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item)
    }
  })
  return resultClasses
}

const addClasses: AddClasses = function (this: SwiperInterface) {
  const swiper = this
  const { classNames, params, rtl, el, device } = swiper

  // prettier-ignore
  const suffixes = prepareClasses([
    'initialized',
    params.direction,
    {
      'free-mode': !!(swiper.params.freeMode && typeof params.freeMode === 'object' && params.freeMode.enabled)
    },
    {
      'autoheight': !!params.autoHeight
    },
    {
      'rtl': !!rtl
    },
    {
      'grid': !!(params.grid && params.grid.rows && params.grid.rows > 1)
    },
    {
      'grid-column': !!(params.grid && params.grid.rows && params.grid.rows > 1 && params.grid.fill === 'column')
    },
    {
      'android': !!device.isAndroid
    },
    {
      'ios': !!device.isIOS
    },
    {
      'css-mode': !!params.cssMode
    },
    {
      'centered': !!(params.cssMode && params.centeredSlides)
    },
    {
      'watch-progress': !!params.watchSlidesProgress
    },
  ], params.containerModifierClass || '')

  classNames.push(...suffixes)
  el.classList.add(...classNames)
  swiper.emitContainerClasses()
}

export default addClasses
