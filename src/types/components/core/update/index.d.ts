import type { UpdateSize } from './update-size'
import type { UpdateSlides } from './update-slides'
import type { UpdateAutoHeight } from './update-auto-height'
import type { UpdateSlidesOffset } from './update-slides-offset'
import type { UpdateSlidesProgress } from './update-slides-progress'
import type { UpdateProgress } from './update-progress'
import type { UpdateSlidesClasses } from './update-slides-classes'
import type { UpdateActiveIndex } from './update-active-index'
import type { UpdateClickedSlide } from './update-clicked-slide'

export interface UpdateModule {
  updateSize: UpdateSize
  updateSlides: UpdateSlides
  updateAutoHeight: UpdateAutoHeight
  updateSlidesOffset: UpdateSlidesOffset
  updateSlidesProgress: UpdateSlidesProgress
  updateProgress: UpdateProgress
  updateSlidesClasses: UpdateSlidesClasses
  updateActiveIndex: UpdateActiveIndex
  updateClickedSlide: UpdateClickedSlide
}
