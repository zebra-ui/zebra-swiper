<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 类型定义
interface AtroposParams {
  alwaysActive?: boolean
  activeOffset?: number
  shadowOffset?: number
  shadowScale?: number
  duration?: number
  rotate?: boolean
  rotateTouch?: boolean | string
  rotateXMax?: number
  rotateYMax?: number
  rotateXInvert?: boolean
  rotateYInvert?: boolean
  stretchX?: number
  stretchY?: number
  stretchZ?: number
  commonOrigin?: boolean
  shadow?: boolean
  highlight?: boolean
  onEnter?: () => void
  onLeave?: () => void
  onRotate?: (x: number, y: number) => void
}

// Props
const props = withDefaults(
  defineProps<{
    options?: AtroposParams
  }>(),
  {
    options: () => ({
      alwaysActive: false,
      activeOffset: 20,
      shadowOffset: 50,
      shadowScale: 1,
      duration: 300,
      rotate: true,
      rotateTouch: 'scroll-y',
      rotateXMax: 15,
      rotateYMax: 15,
      rotateXInvert: false,
      rotateYInvert: false,
      stretchX: 0,
      stretchY: 0,
      stretchZ: 0,
      commonOrigin: true,
      shadow: true,
      highlight: true
    })
  }
)

// Refs
const root = ref<HTMLElement | null>(null)
const rotateEl = ref<HTMLElement | null>(null)
const scaleEl = ref<HTMLElement | null>(null)
const innerEl = ref<HTMLElement | null>(null)
const shadowEl = ref<HTMLElement | null>(null)
const highlightEl = ref<HTMLElement | null>(null)

// State
const isActive = ref(false)
const isScrolling = ref<boolean | undefined>(undefined)
const clientXStart = ref(0)
const clientYStart = ref(0)
let elBoundingClientRect: DOMRect | undefined
let queueFrameId: number

// Queue system
const queue: Array<
  Function | { element: HTMLElement; prop: string; value: string }
> = []

const purgeQueue = () => {
  queueFrameId = requestAnimationFrame(() => {
    queue.forEach((data) => {
      if (typeof data === 'function') {
        data()
      } else {
        const { element, prop, value } = data
        element.style[prop] = value
      }
    })
    queue.splice(0, queue.length)
    purgeQueue()
  })
}

// Style setters
const setDuration = (element: HTMLElement, value: string) => {
  queue.push({ element, prop: 'transitionDuration', value })
}

const setEasing = (element: HTMLElement, value: string) => {
  queue.push({ element, prop: 'transitionTimingFunction', value })
}

const setTransform = (element: HTMLElement, value: string) => {
  queue.push({ element, prop: 'transform', value })
}

const setOpacity = (element: HTMLElement, value: number | string) => {
  queue.push({ element, prop: 'opacity', value: String(value) })
}

const setOrigin = (element: HTMLElement, value: string) => {
  queue.push({ element, prop: 'transformOrigin', value })
}

// Element creation
const createShadow = () => {
  if (!rotateEl.value) return

  let created = false
  if (!shadowEl.value) {
    const el = document.createElement('span')
    el.classList.add('atropos-shadow')
    shadowEl.value = el
    created = true
  }

  if (shadowEl.value) {
    setTransform(
      shadowEl.value,
      `translate3d(0,0,-${props.options.shadowOffset}px) scale(${props.options.shadowScale})`
    )
    if (created && rotateEl.value) {
      rotateEl.value.appendChild(shadowEl.value)
    }
  }
}

const createHighlight = () => {
  if (!innerEl.value) return

  let created = false
  if (!highlightEl.value) {
    const el = document.createElement('span')
    el.classList.add('atropos-highlight')
    highlightEl.value = el
    created = true
  }

  if (highlightEl.value) {
    setTransform(highlightEl.value, 'translate3d(0,0,0)')
    if (created && innerEl.value) {
      innerEl.value.appendChild(highlightEl.value)
    }
  }
}

// Children offset handling
const setChildrenOffset = ({
  rotateXPercentage = 0,
  rotateYPercentage = 0,
  duration,
  opacityOnly,
  easeOut
}: {
  rotateXPercentage?: number
  rotateYPercentage?: number
  duration?: string
  opacityOnly?: boolean
  easeOut?: boolean
}) => {
  if (!innerEl.value) return

  const getOpacity = (element: HTMLElement) => {
    if (
      element.dataset.atroposOpacity &&
      typeof element.dataset.atroposOpacity === 'string'
    ) {
      return element.dataset.atroposOpacity.split(';').map((v) => parseFloat(v))
    }
    return undefined
  }

  innerEl.value
    .querySelectorAll('[data-atropos-offset], [data-atropos-opacity]')
    .forEach((childEl) => {
      if (!(childEl instanceof HTMLElement)) return

      setDuration(childEl, duration || '0')
      setEasing(childEl, easeOut ? 'ease-out' : '')
      const elementOpacity = getOpacity(childEl)

      if (rotateXPercentage === 0 && rotateYPercentage === 0) {
        if (!opacityOnly) setTransform(childEl, 'translate3d(0, 0, 0)')
        if (elementOpacity) setOpacity(childEl, elementOpacity[0])
      } else {
        const childElOffset =
          parseFloat(childEl.dataset.atroposOffset || '0') / 100
        if (!Number.isNaN(childElOffset) && !opacityOnly) {
          setTransform(
            childEl,
            `translate3d(${-rotateYPercentage * -childElOffset}%, ${
              rotateXPercentage * -childElOffset
            }%, 0)`
          )
        }
        if (elementOpacity) {
          const [min, max] = elementOpacity
          const rotatePercentage = Math.max(
            Math.abs(rotateXPercentage),
            Math.abs(rotateYPercentage)
          )
          setOpacity(childEl, min + ((max - min) * rotatePercentage) / 100)
        }
      }
    })
}

// Element position calculation
const setElements = (clientX?: number, clientY?: number) => {
  if (!root.value || !rotateEl.value) return

  if (typeof clientX === 'undefined' && typeof clientY === 'undefined') {
    const rect = root.value.getBoundingClientRect()
    clientX = rect.left + rect.width / 2
    clientY = rect.top + rect.height / 2
  }

  elBoundingClientRect = root.value.getBoundingClientRect()
  const { top, left, width, height } = elBoundingClientRect

  let rotateX = 0
  let rotateY = 0
  const centerX = width / 2
  const centerY = height / 2

  const coordX = clientX! - left
  const coordY = clientY! - top

  rotateY =
    ((props.options.rotateYMax! * (coordX - centerX)) / (width / 2)) * -1
  rotateX = (props.options.rotateXMax! * (coordY - centerY)) / (height / 2)

  rotateX = Math.min(
    Math.max(-rotateX, -props.options.rotateXMax!),
    props.options.rotateXMax!
  )
  if (props.options.rotateXInvert) rotateX = -rotateX
  rotateY = Math.min(
    Math.max(-rotateY, -props.options.rotateYMax!),
    props.options.rotateYMax!
  )
  if (props.options.rotateYInvert) rotateY = -rotateY

  const rotateXPercentage = (rotateX / props.options.rotateXMax!) * 100
  const rotateYPercentage = (rotateY / props.options.rotateYMax!) * 100

  const stretchX =
    (rotateYPercentage / 100) *
    props.options.stretchX! *
    (props.options.rotateYInvert ? -1 : 1)
  const stretchY =
    (rotateXPercentage / 100) *
    props.options.stretchY! *
    (props.options.rotateXInvert ? -1 : 1)
  const stretchZ =
    (Math.max(Math.abs(rotateXPercentage), Math.abs(rotateYPercentage)) / 100) *
    props.options.stretchZ!

  setTransform(
    rotateEl.value,
    `translate3d(${stretchX}%, ${-stretchY}%, ${-stretchZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  )

  if (highlightEl.value) {
    setDuration(highlightEl.value, `${props.options.duration}ms`)
    setEasing(highlightEl.value, 'ease-out')
    setTransform(
      highlightEl.value,
      `translate3d(${-rotateYPercentage * 0.25}%, ${rotateXPercentage * 0.25}%, 0)`
    )
    setOpacity(
      highlightEl.value,
      Math.max(Math.abs(rotateXPercentage), Math.abs(rotateYPercentage)) / 100
    )
  }

  setChildrenOffset({
    rotateXPercentage,
    rotateYPercentage,
    duration: `${props.options.duration}ms`,
    easeOut: true
  })

  if (typeof props.options.onRotate === 'function') {
    props.options.onRotate(rotateX, rotateY)
  }
}

// Activation handling
const activate = () => {
  if (!root.value || !rotateEl.value || !scaleEl.value) return

  queue.push(() => root.value?.classList.add('atropos-active'))
  setDuration(rotateEl.value, `${props.options.duration}ms`)
  setEasing(rotateEl.value, 'ease-out')
  setTransform(
    scaleEl.value,
    `translate3d(0,0, ${props.options.activeOffset}px)`
  )
  setDuration(scaleEl.value, `${props.options.duration}ms`)
  setEasing(scaleEl.value, 'ease-out')

  if (shadowEl.value) {
    setDuration(shadowEl.value, `${props.options.duration}ms`)
    setEasing(shadowEl.value, 'ease-out')
  }

  isActive.value = true
}

// Event handlers
const onPointerEnter = (e: PointerEvent) => {
  isScrolling.value = undefined
  if (e.type === 'pointerdown' && e.pointerType === 'mouse') return
  if (e.type === 'pointerenter' && e.pointerType !== 'mouse') return
  if (e.type === 'pointerdown') {
    e.preventDefault()
  }
  clientXStart.value = e.clientX
  clientYStart.value = e.clientY

  if (props.options.alwaysActive) {
    elBoundingClientRect = undefined
    return
  }
  activate()
  if (typeof props.options.onEnter === 'function') {
    props.options.onEnter()
  }
}

const onTouchMove = (e: TouchEvent) => {
  if (isScrolling.value === false && e.cancelable) {
    e.preventDefault()
  }
}

const onPointerMove = (e: PointerEvent) => {
  if (!props.options.rotate || !isActive.value) return
  if (e.pointerType !== 'mouse') {
    if (!props.options.rotateTouch) return
    e.preventDefault()
  }

  const { clientX, clientY } = e
  const diffX = clientX - clientXStart.value
  const diffY = clientY - clientYStart.value

  if (
    typeof props.options.rotateTouch === 'string' &&
    (diffX !== 0 || diffY !== 0) &&
    typeof isScrolling.value === 'undefined'
  ) {
    if (diffX * diffX + diffY * diffY >= 25) {
      const touchAngle =
        (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI
      isScrolling.value =
        props.options.rotateTouch === 'scroll-y'
          ? touchAngle > 45
          : 90 - touchAngle > 45
    }
    if (isScrolling.value === false) {
      root.value?.classList.add('atropos-rotate-touch')
      if (e.cancelable) {
        e.preventDefault()
      }
    }
  }
  if (e.pointerType !== 'mouse' && isScrolling.value) {
    return
  }
  setElements(clientX, clientY)
}

const onPointerLeave = (e?: PointerEvent) => {
  elBoundingClientRect = undefined
  if (!isActive.value) return
  if (e && e.type === 'pointerup' && e.pointerType === 'mouse') return
  if (e && e.type === 'pointerleave' && e.pointerType !== 'mouse') return
  if (typeof props.options.rotateTouch === 'string' && isScrolling.value) {
    root.value?.classList.remove('atropos-rotate-touch')
  }

  if (props.options.alwaysActive) {
    setElements()
    if (typeof props.options.onRotate === 'function') {
      props.options.onRotate(0, 0)
    }
    if (typeof props.options.onLeave === 'function') {
      props.options.onLeave()
    }
    return
  }

  if (!root.value || !scaleEl.value || !rotateEl.value) return

  queue.push(() => root.value?.classList.remove('atropos-active'))
  setDuration(scaleEl.value, `${props.options.duration}ms`)
  setEasing(scaleEl.value, '')
  setTransform(scaleEl.value, 'translate3d(0,0, 0)')

  if (shadowEl.value) {
    setDuration(shadowEl.value, `${props.options.duration}ms`)
    setEasing(shadowEl.value, '')
  }
  if (highlightEl.value) {
    setDuration(highlightEl.value, `${props.options.duration}ms`)
    setEasing(highlightEl.value, '')
    setTransform(highlightEl.value, 'translate3d(0, 0, 0)')
    setOpacity(highlightEl.value, 0)
  }

  setDuration(rotateEl.value, `${props.options.duration}ms`)
  setEasing(rotateEl.value, '')
  setTransform(rotateEl.value, 'translate3d(0,0,0) rotateX(0deg) rotateY(0deg)')

  setChildrenOffset({ duration: `${props.options.duration}ms` })

  isActive.value = false
  if (typeof props.options.onRotate === 'function') {
    props.options.onRotate(0, 0)
  }
  if (typeof props.options.onLeave === 'function') {
    props.options.onLeave()
  }
}

const onDocumentClick = (e: MouseEvent) => {
  const clickTarget = e.target as Node
  if (
    root.value &&
    !root.value.contains(clickTarget) &&
    clickTarget !== root.value &&
    isActive.value
  ) {
    onPointerLeave()
  }
}

// Lifecycle hooks
onMounted(() => {
  if (props.options.shadow) {
    createShadow()
  }
  if (props.options.highlight) {
    createHighlight()
  }
  if (props.options.rotateTouch) {
    if (typeof props.options.rotateTouch === 'string') {
      root.value?.classList.add(
        `atropos-rotate-touch-${props.options.rotateTouch}`
      )
    } else {
      root.value?.classList.add('atropos-rotate-touch')
    }
  }

  if (root.value?.querySelector('[data-atropos-opacity]')) {
    setChildrenOffset({ opacityOnly: true })
  }

  document.addEventListener('click', onDocumentClick)
  root.value?.addEventListener('pointerdown', onPointerEnter)
  root.value?.addEventListener('pointerenter', onPointerEnter)
  root.value?.addEventListener('pointermove', onPointerMove)
  root.value?.addEventListener('touchmove', onTouchMove)
  root.value?.addEventListener('pointerleave', onPointerLeave)
  root.value?.addEventListener('pointerup', onPointerLeave)
  root.value?.addEventListener('lostpointercapture', onPointerLeave)

  purgeQueue()

  if (props.options.alwaysActive) {
    activate()
    setElements()
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(queueFrameId)
  document.removeEventListener('click', onDocumentClick)
  root.value?.removeEventListener('pointerdown', onPointerEnter)
  root.value?.removeEventListener('pointerenter', onPointerEnter)
  root.value?.removeEventListener('pointermove', onPointerMove)
  root.value?.removeEventListener('touchmove', onTouchMove)
  root.value?.removeEventListener('pointerleave', onPointerLeave)
  root.value?.removeEventListener('pointerup', onPointerLeave)
  root.value?.removeEventListener('lostpointercapture', onPointerLeave)
})
</script>

<template>
  <div ref="root" class="atropos">
    <div ref="scaleEl" class="atropos-scale">
      <div ref="rotateEl" class="atropos-rotate">
        <div ref="innerEl" class="atropos-inner">
          <slot></slot>
        </div>
        <span ref="shadowEl" class="atropos-shadow"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.atropos {
  position: relative;
  display: block;
  perspective: 1200px;
  transform: translate3d(0, 0, 0);
  &-rotate-touch,
  &-rotate-scroll-x,
  &-rotate-scroll-y {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    user-select: none;
  }

  &-rotate-touch-scroll-y {
    touch-action: pan-y;
  }
  &-rotate-touch-scroll-x {
    touch-action: pan-x;
  }
  &-rotate-touch {
    touch-action: none;
  }
}
.atropos-scale,
.atropos-rotate {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition-property: transform;
  display: block;
}
.atropos-shadow,
.atropos-highlight {
  position: absolute;
  pointer-events: none;
  transition-property: transform, opacity;
  display: block;
  opacity: 0.8;
}
.atropos-shadow {
  z-index: -1;
  background: var(--vp-c-gray-1);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: blur(30px);
}
.atropos-highlight {
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-image: radial-gradient(
    circle at 50%,
    rgba(255, 255, 255, 0.25),
    transparent 50%
  );
  z-index: 0;
}
.atropos-rotate {
  position: relative;
}
.atropos-inner {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);
  display: block;
}
.atropos-active {
  z-index: 1;
  .atropos-shadow {
    opacity: 1 !important;
  }
}
[data-atropos-offset] {
  transition-property: transform;
}
[data-atropos-opacity] {
  transition-property: opacity;
}
[data-atropos-offset][data-atropos-opacity] {
  transition-property: transform, opacity;
}
</style>
