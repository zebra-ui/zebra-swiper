export interface FlipEffectOptions {
  slideShadows?: boolean
  limitRotation?: boolean
}

export interface FlipEffect {
  setTranslate(): void
  setTransition(duration: number): void
  recreateShadows(): void
}
