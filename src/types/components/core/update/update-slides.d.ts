import type { SwiperInterface } from '../../../swiper-class'

export interface GetDirectionPropertyValue {
  (node: CSSStyleDeclaration | any, label: string): number
}

export interface UpdateSlides {
  (this: SwiperInterface): void
}
