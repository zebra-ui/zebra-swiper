export interface CardsEffectOptions {
  slideShadows?: boolean
  rotate?: boolean
  perSlideRotate?: number
  perSlideOffset?: number
}

export interface CardsEffect {
  setTranslate(): void
  setTransition(duration: number): void
}
