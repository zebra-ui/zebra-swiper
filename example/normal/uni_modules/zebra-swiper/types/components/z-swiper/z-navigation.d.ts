export interface NavigationListenerMethod {
  funcName: string
  callback: (e: Event) => void
}

export interface NavigationProps {
  position: string
  useSlot: boolean
}

export interface NavigationExpose {
  classList: any
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
}
