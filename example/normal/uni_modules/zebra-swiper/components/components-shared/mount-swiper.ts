import { needsNavigation, needsPagination, needsScrollbar } from './utils'
import type { MountSwiper } from '../../types/components/components-shared/mount-swiper'

const mountSwiper: MountSwiper = (
  { el, adapterEl, nextEl, prevEl, paginationEl, scrollbarEl, swiper },
  swiperParams
) => {
  if (needsNavigation(swiperParams) && nextEl && prevEl) {
    if (!swiper.params.navigation) swiper.params.navigation = {}
    if (!swiper.originalParams.navigation) swiper.originalParams.navigation = {}
    swiper.params.navigation.nextEl = nextEl
    swiper.originalParams.navigation.nextEl = nextEl
    swiper.params.navigation.prevEl = prevEl
    swiper.originalParams.navigation.prevEl = prevEl
  }

  if (needsPagination(swiperParams) && paginationEl) {
    if (!swiper.params.pagination) swiper.params.pagination = {}
    if (!swiper.originalParams.pagination) swiper.originalParams.pagination = {}
    swiper.params.pagination.el = paginationEl
    swiper.originalParams.pagination.el = paginationEl
  }

  if (needsScrollbar(swiperParams) && scrollbarEl) {
    if (!swiper.params.scrollbar) swiper.params.scrollbar = {}
    if (!swiper.originalParams.scrollbar) swiper.originalParams.scrollbar = {}
    swiper.params.scrollbar.el = scrollbarEl
    swiper.originalParams.scrollbar.el = scrollbarEl
  }

  swiper.init(el, adapterEl)
}

export { mountSwiper }
