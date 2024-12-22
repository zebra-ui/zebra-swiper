import type {
  EventsEmitter,
  EmitEvents,
  EventHandler
} from '../../types/components/core/events-emitter'

const eventsEmitter: EventsEmitter = {
  eventsListeners: {},
  eventsAnyListeners: [],

  on(events: string, handler: EventHandler, priority?: boolean) {
    const self = this
    if (!self.eventsListeners || self.destroyed) return self
    if (typeof handler !== 'function') return self

    const method = priority ? 'unshift' : 'push'
    events.split(' ').forEach((event) => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = []
      self.eventsListeners[event][method](handler)
    })
    return self
  },

  once(events: string, handler: EventHandler, priority?: boolean) {
    const self = this
    if (!self.eventsListeners || self.destroyed) return self
    if (typeof handler !== 'function') return self

    function onceHandler(...args: any[]) {
      self.off(events, onceHandler)
      if ((onceHandler as any).__emitterProxy) {
        delete (onceHandler as any).__emitterProxy
      }
      handler.apply(self, args)
    }
    ;(onceHandler as any).__emitterProxy = handler
    return self.on(events, onceHandler, priority)
  },

  onAny(handler: EventHandler, priority?: boolean) {
    const self = this
    if (!self.eventsListeners || self.destroyed) return self
    if (typeof handler !== 'function') return self

    const method = priority ? 'unshift' : 'push'
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler)
    }
    return self
  },

  offAny(handler: EventHandler) {
    const self = this
    if (!self.eventsListeners || self.destroyed) return self
    if (!self.eventsAnyListeners) return self

    const index = self.eventsAnyListeners.indexOf(handler)
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1)
    }
    return self
  },

  off(events: string, handler?: EventHandler) {
    const self = this
    if (!self.eventsListeners || self.destroyed) return self
    if (!self.eventsListeners) return self

    events.split(' ').forEach((event) => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = []
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (
            eventHandler === handler ||
            ((eventHandler as any).__emitterProxy &&
              (eventHandler as any).__emitterProxy === handler)
          ) {
            self.eventsListeners[event].splice(index, 1)
          }
        })
      }
    })
    return self
  },

  emit(...args: any[]) {
    const self = this
    if (!self.eventsListeners || self.destroyed) return self
    if (!self.eventsListeners) return self

    let events: string | string[] | EmitEvents
    let data: any[]
    let context: any

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0]
      data = args.slice(1, args.length)
      context = self
    } else {
      // eslint-disable-next-line prefer-destructuring
      events = args[0].events
      data = args[0].data || []
      context = args[0].context || self
    }

    data.unshift(context)

    const eventsArray = Array.isArray(events)
      ? events
      : (events as string).split(' ')

    eventsArray.forEach((event) => {
      if (self.eventsAnyListeners?.length) {
        self.eventsAnyListeners.forEach((eventHandler) => {
          eventHandler.apply(context, [event, ...data])
        })
      }
      if (self.eventsListeners?.[event]) {
        self.eventsListeners[event].forEach((eventHandler) => {
          eventHandler.apply(context, data)
        })
      }
    })
    return self
  }
}

export default eventsEmitter
