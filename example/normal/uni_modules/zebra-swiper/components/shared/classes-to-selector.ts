import type { ClassesToSelector } from '../../types/components/shared/classes-to-selector'

const classesToSelector: ClassesToSelector = (classes = '') => {
  return `.${classes
    .trim()
    .replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.')}`
}

export default classesToSelector
