import { isObject } from './utils'
import type { UpdateSwiper } from '../../types/components/components-shared/update-swiper'

const updateSwiper: UpdateSwiper = ({
  swiper,
  slides,
  passedParams,
  changedParams,
  nextEl,
  prevEl,
  scrollbarEl,
  paginationEl,
  tag
}) => {
  const updateParams = changedParams.filter(
    (key) => key !== 'children' && key !== 'direction' && key !== 'wrapperClass'
  )

  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper

  let needThumbsInit = false
  let needControllerInit = false
  let needPaginationInit = false
  let needScrollbarInit = false
  let needNavigationInit = false
  let loopNeedDestroy = false
  let loopNeedEnable = false
  let loopNeedReloop = false

  if (
    changedParams.includes('thumbs') &&
    passedParams.thumbs &&
    passedParams.thumbs.swiper &&
    !passedParams.thumbs.swiper.destroyed &&
    currentParams.thumbs &&
    // @ts-ignore
    (!currentParams.thumbs.swiper || currentParams.thumbs.swiper.destroyed)
  ) {
    needThumbsInit = true
  }

  if (
    changedParams.includes('controller') &&
    passedParams.controller &&
    passedParams.controller.control &&
    currentParams.controller &&
    !currentParams.controller.control
  ) {
    needControllerInit = true
  }

  if (
    changedParams.includes('pagination') &&
    passedParams.pagination &&
    (passedParams.pagination.el || paginationEl) &&
    (currentParams.pagination || currentParams.pagination === false) &&
    pagination &&
    !pagination.el
  ) {
    needPaginationInit = true
  }

  if (
    changedParams.includes('scrollbar') &&
    passedParams.scrollbar &&
    (passedParams.scrollbar.el || scrollbarEl) &&
    (currentParams.scrollbar || currentParams.scrollbar === false) &&
    scrollbar &&
    !scrollbar.el
  ) {
    needScrollbarInit = true
  }

  if (
    changedParams.includes('navigation') &&
    passedParams.navigation &&
    (passedParams.navigation.prevEl || prevEl) &&
    (passedParams.navigation.nextEl || nextEl) &&
    (currentParams.navigation || currentParams.navigation === false) &&
    navigation &&
    !navigation.prevEl &&
    !navigation.nextEl
  ) {
    needNavigationInit = true
  }

  const destroyModule = (mod: string) => {
    // @ts-ignore
    if (!swiper[mod]) return
    // @ts-ignore
    swiper[mod].destroy()
    if (mod === 'navigation') {
      if (swiper.isElement) {
        ;(swiper[mod].prevEl as HTMLElement)?.remove()
        ;(swiper[mod].nextEl as HTMLElement)?.remove()
      }
      // @ts-ignore
      currentParams[mod].prevEl = undefined
      // @ts-ignore
      currentParams[mod].nextEl = undefined
      // @ts-ignore
      swiper[mod].prevEl = undefined
      // @ts-ignore
      swiper[mod].nextEl = undefined
    } else {
      if (swiper.isElement) {
        // @ts-ignore
        swiper[mod].el?.remove()
      }
      // @ts-ignore
      currentParams[mod].el = undefined
      // @ts-ignore
      swiper[mod].el = undefined
    }
  }

  if (changedParams.includes('loop') && swiper.isElement) {
    if (currentParams.loop && !passedParams.loop) {
      loopNeedDestroy = true
    } else if (!currentParams.loop && passedParams.loop) {
      loopNeedEnable = true
    } else {
      loopNeedReloop = true
    }
  }

  updateParams.forEach((key) => {
    // @ts-ignore
    if (isObject(currentParams[key]) && isObject(passedParams[key])) {
      // @ts-ignore
      Object.assign(currentParams[key], passedParams[key])
      if (
        (key === 'navigation' || key === 'pagination' || key === 'scrollbar') &&
        'enabled' in passedParams[key] &&
        !passedParams[key].enabled
      ) {
        destroyModule(key)
      }
    } else {
      const newValue = passedParams[key]
      if (
        (newValue === true || newValue === false) &&
        (key === 'navigation' || key === 'pagination' || key === 'scrollbar')
      ) {
        if (newValue === false) {
          destroyModule(key)
        }
      } else {
        // @ts-ignore
        currentParams[key] = passedParams[key]
      }
    }
  })

  if (
    updateParams.includes('controller') &&
    !needControllerInit &&
    swiper.controller &&
    swiper.controller.control &&
    currentParams.controller &&
    currentParams.controller.control
  ) {
    swiper.controller.control = currentParams.controller.control
  }

  if (
    changedParams.includes('children') &&
    slides &&
    virtual &&
    typeof currentParams.virtual === 'object' &&
    currentParams.virtual.enabled
  ) {
    if (tag === 'native') virtual.slides = slides
    virtual.update(true)
  } else if (
    changedParams.includes('virtual') &&
    virtual &&
    typeof currentParams.virtual === 'object' &&
    currentParams.virtual.enabled
  ) {
    if (slides && tag === 'native') virtual.slides = slides
    virtual.update(true)
  }
  if (changedParams.includes('children') && slides && currentParams.loop) {
    loopNeedReloop = true
  }

  if (needThumbsInit) {
    const initialized = thumbs.init()
    if (initialized) thumbs.update(true)
  }

  if (needControllerInit) {
    swiper.controller.control = currentParams.controller?.control
  }

  if (needPaginationInit) {
    if (
      swiper.isElement &&
      (!paginationEl || typeof paginationEl === 'string')
    ) {
      const el = document.createElement('div')
      el.classList.add('swiper-pagination')
      // @ts-ignore
      el.part.add('pagination')
      ;(swiper.el as HTMLElement).appendChild(el)
      paginationEl = el
    }
    if (
      paginationEl &&
      currentParams.pagination &&
      typeof currentParams.pagination === 'object'
    )
      currentParams.pagination.el = paginationEl
    pagination.init()
    pagination.render()
    pagination.update()
  }

  if (needScrollbarInit) {
    if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === 'string')) {
      const el = document.createElement('div')
      el.classList.add('swiper-scrollbar')
      // @ts-ignore
      el.part.add('scrollbar')
      ;(swiper.el as HTMLElement).appendChild(el)
      scrollbarEl = el
    }
    if (
      scrollbarEl &&
      currentParams.scrollbar &&
      typeof currentParams.scrollbar === 'object'
    )
      currentParams.scrollbar.el = scrollbarEl
    scrollbar.init()
    scrollbar.updateSize()
    scrollbar.setTranslate()
  }

  if (needNavigationInit) {
    if (swiper.isElement) {
      if (!nextEl || typeof nextEl === 'string') {
        const el = document.createElement('div')
        el.classList.add('swiper-button-next')
        // @ts-ignore
        el.innerHTML = swiper.hostEl.constructor.nextButtonSvg
        // @ts-ignore
        el.part.add('button-next')
        ;(swiper.el as HTMLElement).appendChild(el)
        nextEl = el
      }
      if (!prevEl || typeof prevEl === 'string') {
        const el = document.createElement('div')
        el.classList.add('swiper-button-prev')
        // @ts-ignore
        el.innerHTML = swiper.hostEl.constructor.prevButtonSvg
        // @ts-ignore
        el.part.add('button-prev')
        ;(swiper.el as HTMLElement).appendChild(el)
        prevEl = el
      }
    }
    if (
      nextEl &&
      currentParams.navigation &&
      typeof currentParams.navigation === 'object'
    )
      currentParams.navigation.nextEl = nextEl
    if (
      prevEl &&
      currentParams.navigation &&
      typeof currentParams.navigation === 'object'
    )
      currentParams.navigation.prevEl = prevEl
    navigation.init()
    navigation.update()
  }

  if (changedParams.includes('allowSlideNext')) {
    swiper.allowSlideNext = passedParams.allowSlideNext
  }
  if (changedParams.includes('allowSlidePrev')) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev
  }
  if (changedParams.includes('direction')) {
    swiper.changeDirection(passedParams.direction, false)
  }
  if (loopNeedDestroy || loopNeedReloop) {
    swiper.loopDestroy()
  }
  if (loopNeedEnable || loopNeedReloop) {
    swiper.loopCreate()
  }
  swiper.update()
}

export { updateSwiper }
