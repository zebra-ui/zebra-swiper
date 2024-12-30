import type { SwiperInterface } from '../../swiper-class'

export interface EffectInitParams {
  effect: string
  swiper: SwiperInterface
  on: (event: string, handler: (...args: any[]) => void) => void
  setTranslate: () => void
  setTransition: (duration: number) => void
  overwriteParams?: () => Record<string, any>
  perspective?: () => boolean
  recreateShadows?: () => void
  getEffectParams?: () => { slideShadows?: boolean }
}

export interface EffectInit {
  (params: EffectInitParams): void
}
