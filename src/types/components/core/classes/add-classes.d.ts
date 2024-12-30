import type { SwiperInterface } from '../../../swiper-class'

export interface PrepareClasses {
  (
    entries: (string | Record<string, boolean> | undefined)[],
    prefix: string
  ): string[]
}

export interface AddClasses {
  (this: SwiperInterface): void
}
