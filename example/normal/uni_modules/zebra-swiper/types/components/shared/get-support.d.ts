/**
 * Interface for browser support features
 */
export interface Support {
  smoothScroll: boolean
  touch: boolean
}

export interface GetSupport {
  (): Support
}

export interface CalcSupport {
  (): Support
}
