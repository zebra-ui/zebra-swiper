import type {
  DebugConsole,
  DeleteProps,
  NextTick,
  Now,
  GetComputedStyle,
  ExtractTranslateValue,
  CalculateCurrentPosition,
  GetTranslate,
  IsObject,
  IsNode,
  Extend,
  SetCSSProperty,
  AnimateCSSModeScroll,
  GetSlideTransformEl,
  FindElementsInElements,
  ElementChildren,
  ElementChildrenByTagIndex,
  ElementIsChildOf,
  ShowWarning,
  CreateElement,
  ElementOffset,
  ElementPrevAll,
  ElementNextAll,
  ElementStyle,
  ElementIndex,
  ElementParents,
  ElementTransitionEnd,
  ElementOuterSize,
  MakeElementsArray,
  GetRotateFix,
  IsWeb,
  GetWindowSize,
  GetRect,
  MatchsTouchType,
  SimulateRequestAnimationFrame
} from '../../types/components/shared/utils'
import type { SwiperInstance } from '../../types/swiper-instance'
import classesToTokens from './classes-to-tokens'

const debugConsole: DebugConsole = (name, ...data) => {
  const show: boolean = false
  if (show) {
    console.log(
      `%c调用${name} ==================>`,
      'background: #222; color: #bada55; padding: 5px;',
      ...data
    )
  }
}

const deleteProps: DeleteProps = (obj) => {
  const object = obj
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key]
    } catch (e) {
      // something got wrong
    }
  })
}

const nextTick: NextTick = (callback, delay = 0) => {
  return setTimeout(callback, delay)
}

const now: Now = () => {
  return Date.now()
}

const getComputedStyle: GetComputedStyle = (el) => {
  debugConsole('getComputedStyle', el)
  let style
  if (isWeb()) {
    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null)
    }
    if (!style && (el as any).currentStyle) {
      style = (el as any).currentStyle
    }
    if (!style) {
      // eslint-disable-next-line prefer-destructuring
      style = el.style
    }
  }

  return style
}

const extractTranslateValue: ExtractTranslateValue = (
  translate3dString,
  axis
) => {
  if (!translate3dString) {
    return null
  }
  const match = translate3dString.match(
    /translate3d\(([^,]+),([^,]+),([^,]+)\)/
  )
  if (!match) return null

  const indexMap = {
    x: 1,
    y: 2,
    z: 3
  }
  const index = indexMap[axis.toLowerCase() as keyof typeof indexMap]

  if (index) {
    return parseFloat(match[index].trim())
  }
  return null
}

const calculateCurrentPosition: CalculateCurrentPosition = (
  startX,
  targetX,
  duration,
  elapsedTime
) => {
  if (Math.abs(targetX - startX) > 100 && elapsedTime < 50) {
    return Math.round(targetX)
  }
  if (elapsedTime >= duration) {
    return Math.round(targetX)
  }
  const totalDistance = targetX - startX

  const progress = Math.max(0, Math.min(1, elapsedTime / duration))
  const easedProgress = progress * (2 - progress)

  const position = Math.round(startX + totalDistance * easedProgress)

  if (totalDistance > 0) {
    return Math.min(position, targetX)
  } else {
    return Math.max(position, targetX)
  }
}

const getTranslate: GetTranslate = (el, axis = 'x', swiper) => {
  debugConsole('getTranslate', el, axis)
  let matrix
  let curTransform
  let transformMatrix

  if (isWeb()) {
    const curStyle = getComputedStyle(el)
    if (window.WebKitCSSMatrix) {
      curTransform = curStyle?.transform || curStyle?.webkitTransform
      if (curTransform!.split(',').length > 6) {
        curTransform = curTransform!
          .split(', ')
          .map((a) => a.replace(',', '.'))
          .join(', ')
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new window.WebKitCSSMatrix(
        curTransform === 'none' ? '' : curTransform
      )
    } else {
      transformMatrix =
        // @ts-ignore
        curStyle?.MozTransform ||
        // @ts-ignore
        curStyle?.OTransform ||
        // @ts-ignore
        curStyle?.MsTransform ||
        // @ts-ignore
        curStyle?.msTransform ||
        // @ts-ignore
        curStyle?.transform ||
        // @ts-ignore
        curStyle!
          .getPropertyValue('transform')
          .replace('translate(', 'matrix(1, 0, 0, 1,')
      matrix = transformMatrix.toString().split(',')
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12])
      // Normal Browsers
      else curTransform = parseFloat(matrix[4])
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13])
      // Normal Browsers
      else curTransform = parseFloat(matrix[5])
    }
  } else {
    const calcCurrent = calculateCurrentPosition(
      swiper.touchEventsData.currentTranslate,
      swiper.translate,
      swiper.params.speed,
      Date.now() - swiper.touchEventsData.lastClickTime
    )
    curTransform = calcCurrent
  }
  return curTransform || 0
}

const isObject: IsObject = (o) => {
  return (
    typeof o === 'object' &&
    o !== null &&
    o.constructor &&
    Object.prototype.toString.call(o).slice(8, -1) === 'Object'
  )
}

const isNode: IsNode = (node) => {
  debugConsole('isNode', node)
  if (isWeb()) {
    if (
      typeof window !== 'undefined' &&
      typeof window.HTMLElement !== 'undefined'
    ) {
      return node instanceof HTMLElement
    }
    return node && (node.nodeType === 1 || node.nodeType === 11)
  } else {
    return false
  }
}

const extend: Extend = (...args) => {
  const to = Object(args[0])
  const noExtend = ['__proto__', 'constructor', 'prototype']
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i]
    if (
      nextSource !== undefined &&
      nextSource !== null &&
      !isNode(nextSource)
    ) {
      const keysArray = Object.keys(Object(nextSource)).filter(
        (key) => noExtend.indexOf(key) < 0
      )
      for (
        let nextIndex = 0, len = keysArray.length;
        nextIndex < len;
        nextIndex += 1
      ) {
        const nextKey = keysArray[nextIndex]
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey]
            } else {
              extend(to[nextKey], nextSource[nextKey])
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {}
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey]
            } else {
              extend(to[nextKey], nextSource[nextKey])
            }
          } else {
            to[nextKey] = nextSource[nextKey]
          }
        }
      }
    }
  }
  return to
}

const setCSSProperty: SetCSSProperty = (el, varName, varValue) => {
  debugConsole('setCSSProperty', el, varName, varValue)
  el.style.setProperty(varName, varValue)
}

const animateCSSModeScroll: AnimateCSSModeScroll = ({
  swiper,
  targetPosition,
  side
}) => {
  debugConsole('animateCSSModeScroll', swiper, targetPosition, side)
  if (isWeb()) {
    const startPosition = -swiper.translate
    let startTime: number | null = null
    let time: number
    const duration = swiper.params.speed

    swiper.wrapperEl.style.scrollSnapType = 'none'
    window.cancelAnimationFrame(swiper.cssModeFrameID)

    const dir = targetPosition > startPosition ? 'next' : 'prev'

    const isOutOfBound = (current: number, target: number) => {
      return (
        (dir === 'next' && current >= target) ||
        (dir === 'prev' && current <= target)
      )
    }

    const animate = () => {
      time = new Date().getTime()
      if (startTime === null) {
        startTime = time
      }

      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0)
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2
      let currentPosition =
        startPosition + easeProgress * (targetPosition - startPosition)

      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      })
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = 'hidden'
        swiper.wrapperEl.style.scrollSnapType = ''
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = ''
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          })
        })
        window.cancelAnimationFrame(swiper.cssModeFrameID)
        return
      }
      swiper.cssModeFrameID = window.requestAnimationFrame(animate)
    }
    animate()
  }
}

const getSlideTransformEl: GetSlideTransformEl = (slideEl) => {
  debugConsole('getSlideTransformEl', slideEl)
  if (isWeb()) {
    return (
      slideEl.querySelector('.swiper-slide-transform') ||
      (slideEl.shadowRoot &&
        slideEl.shadowRoot.querySelector('.swiper-slide-transform')) ||
      slideEl
    )
  }
  return slideEl
}

const findElementsInElements: FindElementsInElements = (
  elements = [],
  selector = ''
) => {
  debugConsole('findElementsInElements', elements, selector)
  if (isWeb()) {
    const found: HTMLElement[] = []
    elements.forEach((el) => {
      // @ts-ignore
      found.push(...el.querySelectorAll(selector))
    })
    return found
  }
  return []
}

const elementChildren: ElementChildren = (element, selector = '') => {
  debugConsole('elementChildren', element, selector)
  if (isWeb()) {
    const children = [...element.children]
    if (element instanceof HTMLSlotElement) {
      children.push(...element.assignedElements())
    }

    if (!selector) {
      return children
    }
    return children.filter((el) => el.matches(selector))
  }
  return (element && element.children) || []
}

const elementChildrenByTagIndex: ElementChildrenByTagIndex = (
  element,
  selector
) => {
  debugConsole('elementChildrenByTagIndex', element, selector)
  return (
    (element &&
      element.children.filter(
        (item: SwiperInstance) => item.swiperItemIndex.value == selector
      )) ||
    []
  )
}

const elementIsChildOf: ElementIsChildOf = (el, parent) => {
  debugConsole('elementIsChildOf', el, parent)
  if (isWeb()) {
    const isChild = parent.contains(el)
    if (!isChild && parent instanceof HTMLSlotElement) {
      const children = [...parent.assignedElements()]
      return children.includes(el)
    }
    return isChild
  }
  return true
}

const showWarning: ShowWarning = (text) => {
  try {
    console.warn(text)
    return
  } catch (err) {
    // err
  }
}

const createElement: CreateElement = (tag, classes = []) => {
  debugConsole('createElement', tag, classes)
  if (isWeb()) {
    const el = document.createElement(tag)
    el.classList.add(
      ...(Array.isArray(classes) ? classes : classesToTokens(classes))
    )
    return el
  }
}

const elementOffset: ElementOffset = (el) => {
  debugConsole('elementOffset', el)
  if (isWeb()) {
    const box = el.getBoundingClientRect()
    // eslint-disable-next-line prefer-destructuring
    const body = document.body
    const clientTop = el.clientTop || body.clientTop || 0
    const clientLeft = el.clientLeft || body.clientLeft || 0
    const scrollTop = el === window ? window.scrollY : el.scrollTop
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    }
  }
}

const elementPrevAll: ElementPrevAll = (el, selector, wrapperEl) => {
  debugConsole('elementPrevAll', el, selector)
  if (isWeb()) {
    const prevEls = []
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling // eslint-disable-line
      if (selector) {
        if (prev.matches(selector)) prevEls.push(prev)
      } else prevEls.push(prev)
      el = prev
    }
    return prevEls
  } else {
    return wrapperEl
      ? wrapperEl.children
          .filter(
            (res: any, index: number) => index < wrapperEl.children.indexOf(el)
          )
          .reverse()
      : el.childrenList
          .filter(
            (res: any, index: number) => index < el.childrenList.indexOf(el)
          )
          .reverse()
  }
}

const elementNextAll: ElementNextAll = (el, selector, wrapperEl) => {
  debugConsole('elementNextAll', el, selector)
  if (isWeb()) {
    const nextEls = []
    while (el.nextElementSibling) {
      const next = el.nextElementSibling // eslint-disable-line
      if (selector) {
        if (next.matches(selector)) nextEls.push(next)
      } else nextEls.push(next)
      el = next
    }
    return nextEls
  } else {
    return wrapperEl
      ? wrapperEl.children.filter(
          (res: any, index: number) => index > wrapperEl.children.indexOf(el)
        )
      : el.childrenList.filter(
          (res: any, index: number) => index > el.childrenList.indexOf(el)
        )
  }
}

const elementStyle: ElementStyle = (el, prop) => {
  debugConsole('elementStyle', el, prop)
  if (isWeb()) {
    return window.getComputedStyle(el, null).getPropertyValue(prop)
  } else {
    return el.style.getPropertyValue(prop)
  }
}

const elementIndex: ElementIndex = (el, wrapperEl) => {
  debugConsole('elementIndex', el)
  if (isWeb()) {
    let child = el
    let i
    if (child) {
      i = 0
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1
      }
      return i
    }
  } else {
    if (el) {
      return wrapperEl
        ? wrapperEl.children.indexOf(el)
        : el.childrenList.indexOf(el)
    }
  }

  return undefined
}

const elementParents: ElementParents = (el, selector) => {
  debugConsole('elementParents', el, selector)
  if (isWeb()) {
    const parents = [] // eslint-disable-line
    let parent = el.parentElement // eslint-disable-line
    while (parent) {
      if (selector) {
        if (parent.matches(selector)) parents.push(parent)
      } else {
        parents.push(parent)
      }
      parent = parent.parentElement
    }
    return parents
  }
}

const elementTransitionEnd: ElementTransitionEnd = (el, callback) => {
  debugConsole('elementTransitionEnd', el, callback)
  if (isWeb()) {
    /* eslint-disable */
    function fireCallBack(e: TransitionEvent) {
      if (e.target !== el) return
      callback.call(el, e)
      el.removeEventListener('transitionend', fireCallBack)
    }
    // @ts-ignore
    if (callback) {
      el.addEventListener('transitionend', fireCallBack)
    }
  } else {
    const regex = new RegExp(
      `[${['swiperWrapper', 'swiperItem'].join('')}]`,
      'g'
    )
    function fireCallBack(e: any) {
      if (e.target.id.toString().replace(regex, '') !== `${el.uid}`) return
      callback.call(el, e)
      el.removeEventListener(
        'transitionend',
        // @ts-ignore
        fireCallBack.bind(this),
        'fireCallBack'
      )
    }
    // @ts-ignore
    if (callback) {
      el.addEventListener(
        'transitionend',
        fireCallBack.bind(this),
        'fireCallBack'
      )
    }
  }
}

const elementOuterSize: ElementOuterSize = (el, size, includeMargins) => {
  debugConsole('elementOuterSize', el, size, includeMargins)
  if (isWeb()) {
    if (includeMargins) {
      return (
        el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] +
        parseFloat(
          window
            .getComputedStyle(el, null)
            .getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')
        ) +
        parseFloat(
          window
            .getComputedStyle(el, null)
            .getPropertyValue(
              size === 'width' ? 'margin-left' : 'margin-bottom'
            )
        )
      )
    }
    return el.offsetWidth
  } else {
    return el.style[size]
  }
}

const makeElementsArray: MakeElementsArray = (el) => {
  debugConsole('makeElementsArray', el)
  return (Array.isArray(el) ? el : [el]).filter((e) => !!e)
}

const getRotateFix: GetRotateFix = (swiper) => {
  debugConsole('getRotateFix', swiper)
  return (v) => {
    if (
      Math.abs(v) > 0 &&
      swiper.browser &&
      swiper.browser.need3dFix &&
      Math.abs(v) % 90 === 0
    ) {
      return v + 0.001
    }
    return v
  }
}

const isWeb: IsWeb = () => {
  // #ifdef H5
  return true
  // #endif
  // #ifndef H5
  // eslint-disable-next-line no-unreachable
  return false
  // #endif
}

const getWindowSize: GetWindowSize = (el) => {
  if (!isWeb()) {
    // #ifdef MP-WEIXIN
    // @ts-ignore
    return uni.getWindowInfo()
    // #endif
    // eslint-disable-next-line no-unreachable
    // @ts-ignore
    return uni.getSystemInfoSync()
  } else {
    return {
      windowWidth: el.clientWidth,
      windowHeight: el.clientHeight
    }
  }
}

const getRect: GetRect = (instance, selector) => {
  return new Promise((resolve, reject) => {
    if (!isWeb()) {
      // @ts-ignore
      const query = uni.createSelectorQuery().in(instance.proxy)
      query
        .select(selector)
        .boundingClientRect((data: { width: number }) => {
          if (data && data.width) {
            resolve(data)
          } else {
            console.warn(`[ZebraSwiper] ${selector}:获取swiper节点信息失败`)
          }
        })
        .exec()
    }
  })
}

const matchsTouchType: MatchsTouchType = (name, type) => {
  const map: Record<string, string[]> = {
    touchstart: ['touchstart', 'touchStart', 'onTouchstart'],
    touchmove: ['touchmove', 'touchMove', 'onTouchmove'],
    touchend: ['touchend', 'touchEnd', 'onTouchend'],
    touchcancel: ['touchcancel', 'touchCancel', 'onTouchcancel']
  }
  return map[name].includes(type)
}

// @ts-ignore
const simulateRequestAnimationFrame: SimulateRequestAnimationFrame = (
  callback
) => {
  setTimeout(() => {
    callback()
  }, 16)
}

export {
  animateCSSModeScroll,
  deleteProps,
  nextTick,
  now,
  getTranslate,
  isObject,
  extend,
  getComputedStyle,
  setCSSProperty,
  getSlideTransformEl,
  showWarning,
  // dom
  findElementsInElements,
  createElement,
  elementChildren,
  elementIsChildOf,
  elementOffset,
  elementPrevAll,
  elementNextAll,
  elementStyle,
  elementIndex,
  elementParents,
  elementTransitionEnd,
  elementOuterSize,
  makeElementsArray,
  getRotateFix,
  isWeb,
  getRect,
  getWindowSize,
  matchsTouchType,
  simulateRequestAnimationFrame,
  extractTranslateValue,
  elementChildrenByTagIndex
}
