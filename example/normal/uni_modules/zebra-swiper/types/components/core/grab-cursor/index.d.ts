import type { SetGrabCursor } from './set-grab-cursor'
import type { UnsetGrabCursor } from './unset-grab-cursor'

export interface GrabCursor {
  setGrabCursor: SetGrabCursor
  unsetGrabCursor: UnsetGrabCursor
}
