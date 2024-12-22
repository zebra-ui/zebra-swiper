import { extend } from '../shared/utils'
import type {
  ModuleExtendParams,
  ModuleParams
} from '../../types/components/core/module-extend-params'

const moduleExtendParams: ModuleExtendParams = (params, allModulesParams) => {
  return function extendParams(obj: Record<string, any> = {}) {
    const moduleParamName = Object.keys(obj)[0]
    const moduleParams = obj[moduleParamName] as ModuleParams

    if (typeof moduleParams !== 'object' || moduleParams === null) {
      extend(allModulesParams, obj)
      return
    }

    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      }
    }

    if (
      moduleParamName === 'navigation' &&
      params[moduleParamName] &&
      params[moduleParamName].enabled &&
      !params[moduleParamName].prevEl &&
      !params[moduleParamName].nextEl
    ) {
      params[moduleParamName].auto = true
    }

    if (
      ['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 &&
      params[moduleParamName] &&
      params[moduleParamName].enabled &&
      !params[moduleParamName].el
    ) {
      params[moduleParamName].auto = true
    }

    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      extend(allModulesParams, obj)
      return
    }

    if (
      typeof params[moduleParamName] === 'object' &&
      !('enabled' in params[moduleParamName])
    ) {
      params[moduleParamName].enabled = true
    }

    if (!params[moduleParamName]) {
      params[moduleParamName] = {
        enabled: false
      }
    }

    extend(allModulesParams, obj)
  }
}

export default moduleExtendParams
