import type { UpdateOnVirtualData } from '../../types/components/components-shared/update-on-virtual-data'

export const updateOnVirtualData: UpdateOnVirtualData = (swiper) => {
  if (
    !swiper ||
    swiper.destroyed ||
    !swiper.params.virtual ||
    (swiper.params.virtual && !swiper.params.virtual.enabled)
  )
    return

  swiper.updateSlides()
  swiper.updateProgress()
  swiper.updateSlidesClasses()

  if (
    swiper.parallax &&
    swiper.params.parallax &&
    swiper.params.parallax.enabled
  ) {
    swiper.parallax.setTranslate()
  }
}
