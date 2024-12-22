export interface PaginationMethods {
  el: HTMLElement | null
  bullets: HTMLElement[]
  render(): void
  update(): void
  init(): void
  destroy(): void
}

export interface PaginationOptions {
  el: string | HTMLElement | null
  bulletElement?: string
  bulletSize?: number
  clickable?: boolean
  hideOnClick?: boolean
  renderBullet?: (index: number, className: string) => string
  renderProgressbar?: (className: string) => string
  renderFraction?: (currentClass: string, totalClass: string) => string
  renderCustom?: (swiper: any, current: number, total: number) => string
  progressbarOpposite?: boolean
  type?: 'bullets' | 'fraction' | 'progressbar' | 'custom'
  dynamicBullets?: boolean
  dynamicMainBullets?: number
  formatFractionCurrent?: (number: number) => number | string
  formatFractionTotal?: (number: number) => number | string
  bulletClass?: string
  bulletActiveClass?: string
  modifierClass?: string
  currentClass?: string
  totalClass?: string
  hiddenClass?: string
  progressbarFillClass?: string
  progressbarOppositeClass?: string
  clickableClass?: string
  lockClass?: string
  horizontalClass?: string
  verticalClass?: string
  paginationDisabledClass?: string
  enabled?: boolean
}

export interface PaginationEvents {
  paginationRender: (el: HTMLElement) => void
  paginationUpdate: (el: HTMLElement) => void
  paginationShow: () => void
  paginationHide: () => void
}
