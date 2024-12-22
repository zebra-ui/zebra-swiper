import type { SwiperInterface } from '../../swiper-class'

export interface CreateElementIfNotDefined {
  (
    swiper: SwiperInterface,
    originalParams: Record<string, any>,
    params: Record<string, any>,
    checkProps: Record<string, string>
  ): Record<string, any>
}
