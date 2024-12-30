export interface EffectTarget {
  (
    effectParams: Record<string, any>,
    slideEl: HTMLElement | any
  ): HTMLElement | any
}
