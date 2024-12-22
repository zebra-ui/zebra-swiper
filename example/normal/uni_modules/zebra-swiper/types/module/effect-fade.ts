export interface FadeEffectOptions {
  crossFade?: boolean
}

export interface FadeEffect {
  setTranslate(): void
  setTransition(duration: number): void
}
