import type { SwiperModule } from '../../../../shared'

export interface ObserverModule extends SwiperModule {
  observers: MutationObserver[]
  attach(target: Node, options?: MutationObserverInit): void
  init(): void
  destroy(): void
}

export interface ObserverMethods {
  observer: ObserverModule
}
