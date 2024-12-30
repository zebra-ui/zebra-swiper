import loopCreate from './loop-create'
import loopFix from './loop-fix'
import loopDestroy from './loop-destroy'
import type { Loop } from '../../../types/components/core/loop'

const loop: Loop = {
  loopCreate,
  loopFix,
  loopDestroy
}

export default loop
