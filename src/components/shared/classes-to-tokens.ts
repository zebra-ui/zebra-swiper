import type { ClassesToTokens } from '../../types/components/shared/classes-to-tokens'

const classesToTokens: ClassesToTokens = (classes = '') => {
  return classes
    .trim()
    .split(' ')
    .filter((c) => !!c.trim())
}

export default classesToTokens
