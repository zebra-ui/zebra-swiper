import type { SwiperModule } from '../../../../shared'

export interface ResizeModule extends SwiperModule {
  observer: ResizeObserver | null
  createObserver(): void
  removeObserver(): void
  orientationChangeHandler(): void
  resizeHandler(): void
}

export interface ResizeMethods {
  resize: ResizeModule
}
