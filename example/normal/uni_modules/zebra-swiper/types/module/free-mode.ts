export interface FreeModeOptions {
  enabled?: boolean
  momentum?: boolean
  momentumRatio?: number
  momentumBounce?: boolean
  momentumBounceRatio?: number
  momentumVelocityRatio?: number
  sticky?: boolean
  minimumVelocity?: number
}

export interface FreeMode {
  onTouchStart(): void
  onTouchMove(): void
  onTouchEnd(params: { currentPos: number }): void
}
