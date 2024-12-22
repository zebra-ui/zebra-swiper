export interface GetChangedParams {
  (
    swiperParams: Record<string, any>,
    oldParams: Record<string, any> | null,
    children: any[],
    oldChildren: any[],
    getKey: (child: any) => string
  ): string[]
}

export interface AreArraysEqual {
  <T>(arr1: T[], arr2: T[]): boolean
}
