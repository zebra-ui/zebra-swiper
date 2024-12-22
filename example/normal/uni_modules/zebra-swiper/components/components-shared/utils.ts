import type {
  IsObject,
  Extend,
  NeedsNavigation,
  NeedsPagination,
  NeedsScrollbar,
  UniqueClasses,
  AttrToProp,
  WrapperClass,
  ConvertStyleValue,
  ConvertSingleValue,
  MoveToFirst,
  MoveToLast
} from '../../types/components/components-shared/utils'

const isObject: IsObject = (o) => {
  return (
    typeof o === 'object' &&
    o !== null &&
    o.constructor &&
    Object.prototype.toString.call(o).slice(8, -1) === 'Object' &&
    !o.__swiper__
  )
}

const extend: Extend = (target, src) => {
  const noExtend = ['__proto__', 'constructor', 'prototype']
  Object.keys(src)
    .filter((key) => noExtend.indexOf(key) < 0)
    .forEach((key) => {
      if (typeof target[key] === 'undefined') target[key] = src[key]
      else if (
        isObject(src[key]) &&
        isObject(target[key]) &&
        Object.keys(src[key]).length > 0
      ) {
        if (src[key].__swiper__) target[key] = src[key]
        else extend(target[key], src[key])
      } else {
        target[key] = src[key]
      }
    })
}

const needsNavigation: NeedsNavigation = (params = {}) => {
  return (
    params.navigation &&
    typeof params.navigation.nextEl === 'undefined' &&
    typeof params.navigation.prevEl === 'undefined'
  )
}

const needsPagination: NeedsPagination = (params = {}) => {
  return params.pagination && typeof params.pagination.el === 'undefined'
}

const needsScrollbar: NeedsScrollbar = (params = {}) => {
  return params.scrollbar && typeof params.scrollbar.el === 'undefined'
}

const uniqueClasses: UniqueClasses = (classNames = '') => {
  const classes = classNames
    .split(' ')
    .map((c) => c.trim())
    .filter((c) => !!c)
  const unique: string[] = []
  classes.forEach((c) => {
    if (unique.indexOf(c) < 0) unique.push(c)
  })
  return unique.join(' ')
}

const attrToProp: AttrToProp = (attrName = '') => {
  return attrName.replace(/-[a-z]/g, (l) => l.toUpperCase().replace('-', ''))
}

const wrapperClass: WrapperClass = (className = '') => {
  if (!className) return 'swiper-wrapper'
  if (!className.includes('swiper-wrapper'))
    return `swiper-wrapper ${className}`
  return className
}

/**
 * 转换样式对象中的值到指定格式
 * @param styleObj 样式对象
 * @param targetType 目标类型
 * @param parentWidth 父元素宽度，处理百分比时需要
 */
const convertStyleValue: ConvertStyleValue = (
  styleObj,
  targetType,
  parentWidth
) => {
  if (!styleObj || typeof styleObj !== 'object') {
    return styleObj
  }

  const result: Record<string, any> = {}

  for (const key in styleObj) {
    result[key] = convertSingleValue(styleObj[key], targetType, parentWidth)
  }

  return result
}

/**
 * 处理单个值的转换
 */
const convertSingleValue: ConvertSingleValue = (
  value,
  targetType,
  parentWidth
) => {
  if (typeof value === 'number') {
    return targetType === 'px' ? `${value}px` : value
  }

  if (typeof value !== 'string') {
    return value
  }

  if (!isNaN(Number(value))) {
    return targetType === 'px' ? `${value}px` : Number(value)
  }

  const rpxReg = /^-?\d+\.?\d*rpx$/
  const pxReg = /^-?\d+\.?\d*px$/
  const percentReg = /^-?\d+\.?\d*%$/

  const numValue = parseFloat(value)

  if (rpxReg.test(value)) {
    // @ts-ignore
    const pxValue = uni.upx2px(numValue)
    return targetType === 'px' ? `${pxValue}px` : pxValue
  }

  if (pxReg.test(value)) {
    return targetType === 'px' ? value : numValue
  }

  if (percentReg.test(value)) {
    if (!parentWidth) {
      console.warn('处理百分比值时需要提供父元素宽度')
      return value
    }
    const finalValue = (numValue / 100) * parentWidth
    return targetType === 'px' ? `${finalValue}px` : finalValue
  }

  return value
}

const moveToFirst: MoveToFirst = (arr, index) => {
  if (index < 0 || index >= arr.length) {
    console.error('Index out of bounds')
    return arr
  }
  const [item] = arr.splice(index, 1)
  arr.unshift(item)
  return arr
}

const moveToLast: MoveToLast = (arr, index) => {
  if (index < 0 || index >= arr.length) {
    console.error('Index out of bounds')
    return arr
  }

  const [item] = arr.splice(index, 1)
  arr.push(item)
  return arr
}

export {
  isObject,
  extend,
  needsNavigation,
  needsPagination,
  needsScrollbar,
  uniqueClasses,
  attrToProp,
  wrapperClass,
  convertStyleValue,
  convertSingleValue,
  moveToFirst,
  moveToLast
}
