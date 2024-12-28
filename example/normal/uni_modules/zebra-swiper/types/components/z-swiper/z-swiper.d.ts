import type { Ref } from 'vue'
import type { SwiperProps } from './props'

// 包装器过渡结束方法
export interface WrapperTransitionEndMethod {
  funcName: string
  callback: (e: Event) => void
}

// 包装器元素接口
export interface WrapperEl {
  uid: number | string
  children: any[]
  style: Record<string, any>
  addEventListener: (
    name: string,
    callback: (e: Event) => void,
    funcName: string
  ) => void
  removeEventListener: (
    name: string,
    callback: (e: Event) => void,
    funcName: string
  ) => void
  dispatchEvent: (e: Event) => void
  prepend: (slide: any, index: number) => void
  append: (slide: any, index: number) => void
  swiperShadowRef: Ref<any>
  resetLoopList: () => void
}

// 组件暴露的接口
export interface SwiperExpose {
  uid: number | string
  children: any[]
  classList: any
  wrapperEl: WrapperEl
  className: string
}

// Props 接口
export interface SwiperProps extends SwiperProps {
  list?: any[]
  virtualList?: any[]
  customStyle?: Record<string, any>
}

// 虚拟数据接口
export interface VirtualData {
  from: number
  to: number
  offset: number
  slides: any[]
}
