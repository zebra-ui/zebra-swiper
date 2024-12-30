export interface IsObject {
  (o: any): boolean
}

export interface Extend {
  (target: Record<string, any>, src: Record<string, any>): void
}

export interface NeedsNavigation {
  (params?: Record<string, any>): boolean
}

export interface NeedsPagination {
  (params?: Record<string, any>): boolean
}

export interface NeedsScrollbar {
  (params?: Record<string, any>): boolean
}

export interface UniqueClasses {
  (classNames?: string): string
}

export interface AttrToProp {
  (attrName?: string): string
}

export interface WrapperClass {
  (className?: string): string
}

export interface ConvertStyleValue {
  (
    styleObj: Record<string, any>,
    targetType: 'px' | 'number',
    parentWidth?: number
  ): Record<string, any>
}

export interface ConvertSingleValue {
  (value: any, targetType: 'px' | 'number', parentWidth?: number): any
}

export interface MoveToFirst {
  <T>(arr: T[], indices: number[]): T[]
}

export interface MoveToLast {
  <T>(arr: T[], indices: number[]): T[]
}

export interface CompareArrays {
  (arr1: any[], arr2: any[], keys?: string[]): boolean
}
