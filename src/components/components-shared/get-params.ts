import { isObject, extend } from './utils'
import { paramsList } from './params-list'
import defaults from '../core/defaults'
import type { GetParams } from '../../types/components/components-shared/get-params'

const getParams: GetParams = (obj = {}, splitEvents = true) => {
  const params = {
    on: {},
    _emitClasses: true,
    init: false
  }
  const events: Record<string, any> = {}
  const passedParams: Record<string, any> = {}

  extend(params, defaults)
  params._emitClasses = true
  params.init = false

  const rest: Record<string, any> = {}
  const allowedParams = paramsList.map((key) => key.replace(/_/, ''))
  const plainObj = Object.assign({}, obj)

  Object.keys(plainObj).forEach((key) => {
    if (typeof obj[key] === 'undefined') return
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        // @ts-ignore
        params[key] = {}
        // @ts-ignore
        passedParams[key] = {}
        // @ts-ignore
        extend(params[key], obj[key])
        // @ts-ignore
        extend(passedParams[key], obj[key])
      } else {
        // @ts-ignore
        params[key] = obj[key]
        // @ts-ignore
        passedParams[key] = obj[key]
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === 'function') {
      if (splitEvents) {
        // @ts-ignore
        events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key]
      } else {
        // @ts-ignore
        params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key]
      }
    } else {
      rest[key] = obj[key]
    }
  })
  ;['navigation', 'pagination', 'scrollbar'].forEach((key) => {
    // @ts-ignore
    if (params[key] === true) params[key] = {}
    // @ts-ignore
    if (params[key] === false) delete params[key]
  })

  return {
    params,
    passedParams,
    rest,
    events
  }
}

export { getParams }
