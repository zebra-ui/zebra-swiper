export interface DebugConsole {
  (name: string, ...data: any[]): void
}

export interface DeleteProps {
  (obj: Record<string, any>): void
}

export interface NextTick {
  (callback: () => void, delay?: number): number
}

export interface Now {
  (): number
}

export interface GetComputedStyle {
  (el: HTMLElement): CSSStyleDeclaration | null
}

export interface ExtractTranslateValue {
  (translate3dString: string | null, axis: string): number | null
}

export interface CalculateCurrentPosition {
  (
    startX: number,
    targetX: number,
    duration: number,
    elapsedTime: number
  ): number
}

export interface GetTranslate {
  (el: HTMLElement | any, axis?: string, swiper?: any): number
}

export interface IsObject {
  (o: any): boolean
}

export interface IsNode {
  (node: any): boolean
}

export interface Extend {
  <T extends Record<string, any>>(...args: T[]): T
}

export interface SetCSSProperty {
  (el: HTMLElement | any, varName: string, varValue: string): void
}

export interface AnimateCSSModeScroll {
  (params: { swiper: any; targetPosition: number; side: string }): void
}

export interface GetSlideTransformEl {
  (slideEl: HTMLElement | any): HTMLElement | any
}

export interface FindElementsInElements {
  (elements?: HTMLElement[], selector?: string): HTMLElement[]
}

export interface ElementChildren {
  (element: HTMLElement | any, selector?: string): HTMLElement[] | any[]
}

export interface ElementChildrenByTagIndex {
  (element: any, selector: number): any[]
}

export interface ElementIsChildOf {
  (el: HTMLElement | any, parent: HTMLElement | any): boolean
}

export interface ShowWarning {
  (text: string): void
}

export interface CreateElement {
  (tag: string, classes?: string[] | string): HTMLElement | undefined
}

export interface ElementOffset {
  (el: HTMLElement | any): { top: number; left: number } | undefined
}

export interface ElementPrevAll {
  (
    el: HTMLElement | any,
    selector?: string,
    wrapperEl?: HTMLElement | any
  ): HTMLElement[] | any[]
}

export interface ElementNextAll {
  (
    el: HTMLElement | any,
    selector?: string,
    wrapperEl?: HTMLElement | any
  ): HTMLElement[] | any[]
}

export interface ElementStyle {
  (el: HTMLElement | any, prop: string): string
}

export interface ElementIndex {
  (el: HTMLElement | any, wrapperEl?: HTMLElement | any): number | undefined
}

export interface ElementParents {
  (el: HTMLElement | any, selector?: string): HTMLElement[] | undefined
}

export interface ElementTransitionEnd {
  (el: HTMLElement | any, callback: (e: TransitionEvent | any) => void): void
}

export interface ElementOuterSize {
  (
    el: HTMLElement | any,
    size: 'width' | 'height',
    includeMargins?: boolean
  ): number
}

export interface MakeElementsArray {
  <T>(el: T | T[]): T[]
}

export interface GetRotateFix {
  (swiper: any): (v: number) => number
}

export interface IsWeb {
  (): boolean
}

export interface GetWindowSize {
  (el: HTMLElement | any): { windowWidth: number; windowHeight: number }
}

export interface GetRect {
  (instance: any, selector: string): Promise<any>
}

export interface MatchsTouchType {
  (name: string, type: string): boolean
}

export interface SimulateRequestAnimationFrame {
  (callback: () => void): number
}
