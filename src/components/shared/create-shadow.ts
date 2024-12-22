import { createElement, getSlideTransformEl, isWeb } from './utils'
import { useClass, useStyle } from '../adapter'
import type { CreateShadow } from '../../types/components/shared/create-shadow'

const createShadow: CreateShadow = (suffix, slideEl, side) => {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${
    suffix ? ` swiper-slide-shadow-${suffix}` : ''
  }`
  const shadowContainer = getSlideTransformEl(slideEl)
  let shadowEl

  if (isWeb()) {
    shadowEl = shadowContainer.querySelector(
      `.${shadowClass.split(' ').join('.')}`
    )

    if (!shadowEl) {
      shadowEl = createElement('div', shadowClass.split(' '))
      shadowContainer.append(shadowEl)
    }
  } else {
    shadowEl = shadowContainer
      .getShadowList()
      .find((item: any) =>
        item.classList.containsMultiple(`.${shadowClass.split(' ').join('.')}`)
      )
    if (!shadowEl) {
      const shadowItem = {
        ...useClass(shadowClass),
        ...useStyle()
      }
      shadowEl = shadowItem
      shadowContainer.addShadowItem(shadowEl)
    }
  }

  return shadowEl
}

export default createShadow
