export interface CubeEffectOptions {
  slideShadows?: boolean
  shadow?: boolean
  shadowOffset?: number
  shadowScale?: number
}

export interface CubeEffect {
  setTranslate(): void
  setTransition(duration: number): void
}
