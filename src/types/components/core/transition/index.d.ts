import type { SetTransition } from './set-transition'
import type { TransitionStart } from './transition-start'
import type { TransitionEnd } from './transition-end'

export interface TransitionMethods {
  setTransition: SetTransition
  transitionStart: TransitionStart
  transitionEnd: TransitionEnd
}
