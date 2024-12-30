import { createElement, elementChildren, isWeb } from './utils'
import type { CreateElementIfNotDefined } from '../../types/components/shared/create-element-if-not-defined'

const createElementIfNotDefined: CreateElementIfNotDefined = (
  swiper,
  originalParams,
  params,
  checkProps
) => {
  if (isWeb()) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0]
          if (!element) {
            element = createElement('div', checkProps[key])
            element.className = checkProps[key]
            ;(swiper.el as HTMLElement).append(element)
          }
          params[key] = element
          originalParams[key] = element
        }
      })
    }
  }
  return params
}

export default createElementIfNotDefined
