import { SwiperOptions } from '../../swiper-options'

export interface GetParamsResult {
  params: SwiperOptions
  passedParams: Record<string, any>
  rest: Record<string, any>
  events: Record<string, any>
}

export interface GetParams {
  (obj?: Record<string, any>, splitEvents?: boolean): GetParamsResult
}
