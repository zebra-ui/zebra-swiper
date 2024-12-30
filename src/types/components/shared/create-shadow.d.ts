export interface CreateShadow {
  (
    suffix: string | undefined,
    slideEl: HTMLElement | any,
    side?: string | undefined
  ): HTMLElement | any
}
