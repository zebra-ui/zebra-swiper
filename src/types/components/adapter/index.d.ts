import type { ComputedRef, Ref } from 'vue'

export interface ClassList {
  value: string
  contains(className: string): boolean
  containsMultiple(classNames: string): boolean
  add(...classNames: string[]): void
  remove(...classNames: string[]): void
  toggle(className: string): void
}

export interface StyleEvent {
  type: 'change' | 'remove' | 'reset'
  property?: string
  value?: string | number
  oldValue?: string | number
  oldStyles?: Record<string, string | number>
}

export interface StyleAdapter {
  setProperty(prop: string, value: string | number): this
  getPropertyValue(prop: string): string
  removeProperty(prop: string): string | number
  addListener(callback: (event: StyleEvent) => void): this
  removeListener(callback: (event: StyleEvent) => void): this
  setStyles(styles: Record<string, string | number>): this
  getAllStyles(): Record<string, string | number>
  toCssText(): string
  fromCssText(cssText: string): this
  reset(): this
}

export interface UseClassReturn {
  classList: ClassList
  classNames: ComputedRef<string>
  className: string
}

export interface UseStyleReturn {
  style: StyleAdapter
  styles: Ref<Record<string, string | number>>
}
