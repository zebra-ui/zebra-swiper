import updateSize from './update-size'
import updateSlides from './update-slides'
import updateAutoHeight from './update-auto-height'
import updateSlidesOffset from './update-slides-offset'
import updateSlidesProgress from './update-slides-progress'
import updateProgress from './update-progress'
import updateSlidesClasses from './update-slides-classes'
import updateActiveIndex from './update-active-index'
import updateClickedSlide from './update-clicked-slide'
import type { UpdateModule } from '../../../types/components/core/update'

const update: UpdateModule = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
}

export default update
