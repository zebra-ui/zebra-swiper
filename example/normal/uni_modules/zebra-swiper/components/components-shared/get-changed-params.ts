import { paramsList } from './params-list'
import { isObject } from './utils'
import type {
  GetChangedParams,
  AreArraysEqual
} from '../../types/components/components-shared/get-changed-params'

const areArraysEqual: AreArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  const sortedArr1 = [...arr1].sort()
  const sortedArr2 = [...arr2].sort()
  return sortedArr1.every((value, index) => value === sortedArr2[index])
}

const getChangedParams: GetChangedParams = (
  swiperParams,
  oldParams,
  children,
  oldChildren,
  getKey
) => {
  const keys: string[] = []
  if (!oldParams) return keys

  const addKey = (key: string) => {
    if (keys.indexOf(key) < 0) keys.push(key)
  }

  if (children && oldChildren) {
    const oldChildrenKeys = oldChildren.map(getKey)
    const childrenKeys = children.map(getKey)
    if (!areArraysEqual(oldChildrenKeys, childrenKeys)) addKey('children')
    if (oldChildren.length !== children.length) addKey('children')
  }

  const watchParams = paramsList
    .filter((key) => key[0] === '_')
    .map((key) => key.replace(/_/, ''))

  watchParams.forEach((key) => {
    if (key in swiperParams && key in oldParams) {
      if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
        const newKeys = Object.keys(swiperParams[key])
        const oldKeys = Object.keys(oldParams[key])
        if (newKeys.length !== oldKeys.length) {
          addKey(key)
        } else {
          newKeys.forEach((newKey) => {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key)
            }
          })
          oldKeys.forEach((oldKey) => {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey])
              addKey(key)
          })
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key)
      }
    }
  })

  return keys
}

export { getChangedParams }
