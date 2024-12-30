import type { LoopCreate } from './loop-create'
import type { LoopFix } from './loop-fix'
import type { LoopDestroy } from './loop-destroy'

export interface Loop {
  loopCreate: LoopCreate
  loopFix: LoopFix
  loopDestroy: LoopDestroy
}
