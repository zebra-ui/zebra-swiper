export interface ModuleParams {
  enabled?: boolean
  auto?: boolean
  el?: string | HTMLElement
  prevEl?: string | HTMLElement
  nextEl?: string | HTMLElement
  [key: string]: any
}

export interface ModuleExtendParams {
  (
    params: Record<string, any>,
    allModulesParams: Record<string, any>
  ): (obj?: Record<string, any>) => void
}
