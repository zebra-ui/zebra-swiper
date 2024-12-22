import type { GetChildren } from '../../types/components/z-swiper/get-children'

export const getChildren: GetChildren = (children, slidesRef, oldSlidesRef) => {
  oldSlidesRef.value = [...slidesRef.value]
  slidesRef.value = children

  return {
    slides: children
  }
}
