import type { SwiperInterface } from '../../swiper-class'

export interface PaginationBullet {
  classList: {
    value: string
  }
  style?: Record<string, any>
}

export interface PaginationFraction {
  current: {
    classList: {
      value: string
    }
    content: string | number
  }
  total: {
    classList: {
      value: string
    }
    content: string | number
  }
}

export interface PaginationProgressbar {
  classList: {
    value: string
  }
  style: Record<string, any>
}

export interface PaginationData {
  bullets: PaginationBullet[]
  fractions: PaginationFraction | null
  progressbar: PaginationProgressbar | null
}

export interface PaginationProps {
  swiperRef: Ref<SwiperInterface | null>
}

export interface PaginationListenerMethod {
  funcName: string
  callback: (e: Event, index?: number) => void
}

export interface PaginationExpose {
  classList: any
  paginationData: PaginationData
  style: Record<string, any>
  addEventListener: (
    name: string,
    callback: (e: Event, index?: number) => void,
    funcName: string
  ) => void
  removeEventListener: (
    name: string,
    callback: (e: Event, index?: number) => void,
    funcName: string
  ) => void
}
