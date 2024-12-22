import { computed, reactive, ref } from 'vue'
import type {
  ClassList as ClassListInterface,
  StyleAdapter as StyleAdapterInterface,
  StyleEvent,
  UseClassReturn,
  UseStyleReturn
} from '../../types/components/adapter'

class ClassList implements ClassListInterface {
  private _classes: Set<string>

  constructor(initialClasses = '') {
    this._classes = new Set(initialClasses.split(' ').filter(Boolean))
  }

  get value(): string {
    return Array.from(this._classes).join(' ')
  }

  set value(newClasses: string) {
    this._classes = new Set(newClasses.split(' ').filter(Boolean))
  }

  contains(className: string): boolean {
    return this._classes.has(className)
  }

  containsMultiple(classNames: string): boolean {
    const classesArray = classNames.split('.').filter(Boolean)
    return classesArray.every((className) => this.contains(className))
  }

  add(...classNames: string[]): void {
    classNames.forEach((className) => this._classes.add(className))
  }

  remove(...classNames: string[]): void {
    classNames.forEach((className) => this._classes.delete(className))
  }

  toggle(className: string): void {
    if (this.contains(className)) {
      this.remove(className)
    } else {
      this.add(className)
    }
  }
}

class StyleAdapter implements StyleAdapterInterface {
  private _styles: Record<string, string | number>
  private _listeners: Set<(event: StyleEvent) => void>

  constructor() {
    this._styles = {}
    this._listeners = new Set()
    this._initializeProperties()
  }

  private _initializeProperties(): void {
    const styleProperties = [
      'width',
      'height',
      'top',
      'left',
      'right',
      'bottom',
      'margin',
      'padding',
      'position',
      'marginLeft',
      'marginRight',
      'marginTop',
      'marginBottom',
      'display',
      'visibility',
      'opacity',
      'zIndex',
      'overflow',
      'color',
      'backgroundColor',
      'background',
      'border',
      'borderRadius',
      'boxShadow',
      'fontSize',
      'fontFamily',
      'fontWeight',
      'textAlign',
      'transform',
      'transition',
      'animation',
      'transitionDelay',
      'transitionDuration',
      'transformOrigin'
    ]

    styleProperties.forEach((prop) => {
      Object.defineProperty(this, prop, {
        get: () => this.getPropertyValue(prop),
        set: (value) => this.setProperty(prop, value)
      })
    })
  }

  setProperty(prop: string, value: string | number): this {
    const oldValue = this._styles[prop]
    this._styles[prop] = this._processValue(prop, value)
    this._notifyListeners({
      type: 'change',
      property: prop,
      value,
      oldValue
    })
    return this
  }

  getPropertyValue(prop: string): string {
    return String(this._styles[prop] || '')
  }

  removeProperty(prop: string): string | number {
    const value = this._styles[prop]
    delete this._styles[prop]
    this._notifyListeners({
      type: 'remove',
      property: prop,
      oldValue: value
    })
    return value
  }

  private _processValue(prop: string, value: string | number): string | number {
    const needsUnit = [
      'width',
      'height',
      'top',
      'left',
      'right',
      'bottom',
      'margin',
      'padding',
      'fontSize'
    ]

    if (needsUnit.includes(prop)) {
      if (typeof value === 'number') {
        return `${value}px`
      }
      if (
        typeof value === 'string' &&
        /^-?\d*\.?\d+(px|em|rem|%|vh|vw)$/.test(value)
      ) {
        return value
      }
      if (Number(value) === 0 || value === '0') {
        return '0'
      }
    }

    return value
  }

  addListener(callback: (event: StyleEvent) => void): this {
    this._listeners.add(callback)
    return this
  }

  removeListener(callback: (event: StyleEvent) => void): this {
    this._listeners.delete(callback)
    return this
  }

  private _notifyListeners(event: StyleEvent): void {
    this._listeners.forEach((listener) => listener(event))
  }

  setStyles(styles: Record<string, string | number>): this {
    Object.entries(styles).forEach(([prop, value]) => {
      this.setProperty(prop, value)
    })
    return this
  }

  getAllStyles(): Record<string, string | number> {
    return { ...this._styles }
  }

  toCssText(): string {
    return Object.entries(this._styles)
      .map(([prop, value]) => {
        const cssProperty = prop.replace(/([A-Z])/g, '-$1').toLowerCase()
        return `${cssProperty}: ${value}`
      })
      .join('; ')
  }

  fromCssText(cssText: string): this {
    cssText
      .split(';')
      .filter((style) => style.trim())
      .forEach((style) => {
        const [prop, value] = style.split(':').map((s) => s.trim())
        const camelProp = prop.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
        this.setProperty(camelProp, value)
      })
    return this
  }

  reset(): this {
    this._styles = {}
    this._notifyListeners({
      type: 'reset',
      oldStyles: this._styles
    })
    return this
  }
}

export function useClass(initialClasses = ''): UseClassReturn {
  const classList = reactive(new ClassList(initialClasses))
  const classNames = computed(() => classList.value)
  const className = classList.value

  return {
    classList,
    classNames,
    className
  }
}

export function useStyle(
  initialStyles: Record<string, string | number> = {}
): UseStyleReturn {
  const style = new StyleAdapter()
  const styles = ref(style.getAllStyles())

  style.setStyles(initialStyles)

  style.addListener(() => {
    styles.value = style.getAllStyles()
  })

  return {
    style,
    styles
  }
}

export { ClassList, StyleAdapter }
