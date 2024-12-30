import setTransition from './set-transition'
import transitionStart from './transition-start'
import transitionEnd from './transition-end'
import type { TransitionMethods } from '../../../types/components/core/transition'

const transition: TransitionMethods = {
  setTransition,
  transitionStart,
  transitionEnd
}

export default transition
