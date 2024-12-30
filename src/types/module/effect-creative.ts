export interface CreativeEffectTransform {
  translate: [number | string, number | string, number | string]
  rotate: [number, number, number]
  opacity: number
  scale: number
  origin?: string
  shadow?: boolean
}

export interface CreativeEffectOptions {
  limitProgress?: number
  shadowPerProgress?: boolean
  progressMultiplier?: number
  perspective?: boolean
  prev: CreativeEffectTransform
  next: CreativeEffectTransform
}

export interface CreativeEffect {
  setTranslate(): void
  setTransition(duration: number): void
}
