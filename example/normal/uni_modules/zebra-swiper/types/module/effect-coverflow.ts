export interface CoverflowEffectOptions {
  rotate?: number
  stretch?: number | string
  depth?: number
  scale?: number
  modifier?: number | ((value: number) => number)
  slideShadows?: boolean
}

export interface CoverflowEffect {
  setTranslate(): void
  setTransition(duration: number): void
}
