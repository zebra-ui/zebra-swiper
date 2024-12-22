export interface NavigationOptions {
  nextEl?: string | HTMLElement | null
  prevEl?: string | HTMLElement | null
  hideOnClick?: boolean
  disabledClass?: string
  hiddenClass?: string
  lockClass?: string
  navigationDisabledClass?: string
  enabled?: boolean
}

export interface NavigationMethods {
  nextEl: HTMLElement | null
  prevEl: HTMLElement | null
  update(): void
  init(): void
  destroy(): void
  enable(): void
  disable(): void
}
