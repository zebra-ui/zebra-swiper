import { SwiperInterface } from '../swiper-class.d.ts'

export interface ThumbsMethods {
  init(): boolean
  update(initial?: boolean): void
  swiper: SwiperInterface
}

export interface ThumbsEvents {}

export interface ThumbsOptions {
  /**
   * Swiper instance of swiper used as thumbs or object with Swiper parameters to initialize thumbs swiper
   *
   * @default null
   */
  swiper?: SwiperInterface | string | null
  /**
   * Additional class that will be added to activated thumbs swiper slide
   *
   * @default 'swiper-slide-thumb-active'
   */
  slideThumbActiveClass?: string
  /**
   * Additional class that will be added to thumbs swiper
   *
   * @default 'swiper-thumbs'
   */
  thumbsContainerClass?: string
  /**
   * When enabled multiple thumbnail slides may get activated
   *
   * @default true
   */
  multipleActiveThumbs?: boolean
  /**
   * Allows to set on which thumbs active slide from edge it should automatically move scroll thumbs. For example, if set to 1 and last visible thumb will be activated (1 from edge) it will auto scroll thumbs

   *
   * @default 0
   */
  autoScrollOffset?: number
  enabled?: boolean
}
