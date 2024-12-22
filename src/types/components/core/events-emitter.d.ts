export type EventHandler = (...args: any[]) => void

export interface EventsEmitter {
  eventsListeners: Record<string, EventHandler[]>
  eventsAnyListeners: EventHandler[]
  destroyed?: boolean

  on(events: string, handler: EventHandler, priority?: boolean): EventsEmitter
  once(events: string, handler: EventHandler, priority?: boolean): EventsEmitter
  onAny(handler: EventHandler, priority?: boolean): EventsEmitter
  offAny(handler: EventHandler): EventsEmitter
  off(events: string, handler?: EventHandler): EventsEmitter
  emit(events: string | string[] | EmitEvents, ...args: any[]): EventsEmitter
}

export interface EmitEvents {
  events: string | string[]
  data?: any[]
  context?: any
}
