import type {
  ProcessLazyPreloader,
  Unlazy,
  Preload
} from '../../types/components/shared/process-lazy-preloader'

export const processLazyPreloader: ProcessLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return
  const slideSelector = () =>
    swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`
  const slideEl = imageEl.closest(slideSelector())
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`)
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(
          `.${swiper.params.lazyPreloaderClass}`
        )
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(
              `.${swiper.params.lazyPreloaderClass}`
            )
            if (lazyEl) lazyEl.remove()
          }
        })
      }
    }
    if (lazyEl) lazyEl.remove()
  }
}

const unlazy: Unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return
  const imageEl = (swiper.slides[index] as HTMLElement).querySelector(
    '[loading="lazy"]'
  )
  if (imageEl) imageEl.removeAttribute('loading')
}

export const preload: Preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params) return
  let amount = swiper.params.lazyPreloadPrevNext
  const len = swiper.slides.length
  if (!len || !amount || amount < 0) return
  amount = Math.min(amount, len)
  const slidesPerView =
    swiper.params.slidesPerView === 'auto'
      ? swiper.slidesPerViewDynamic()
      : Math.ceil(swiper.params.slidesPerView || 1)
  const { activeIndex } = swiper
  if (swiper.params.grid && swiper.params.grid.rows! > 1) {
    const activeColumn = activeIndex
    const preloadColumns = [activeColumn - amount]
    preloadColumns.push(
      ...Array.from({ length: amount }).map((_, i) => {
        return activeColumn + slidesPerView + i
      })
    )
    swiper.slides.forEach((slideEl: any, i: number) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i)
    })
    return
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1
  if (swiper.params.rewind || swiper.params.loop) {
    for (
      let i = activeIndex - amount;
      i <= slideIndexLastInView + amount;
      i += 1
    ) {
      const realIndex = ((i % len) + len) % len
      if (realIndex < activeIndex || realIndex > slideIndexLastInView)
        unlazy(swiper, realIndex)
    }
  } else {
    for (
      let i = Math.max(activeIndex - amount, 0);
      i <= Math.min(slideIndexLastInView + amount, len - 1);
      i += 1
    ) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i)
      }
    }
  }
}
