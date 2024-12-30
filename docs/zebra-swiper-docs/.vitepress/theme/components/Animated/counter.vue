<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

function isClient() {
  return typeof document !== 'undefined'
}

const props = withDefaults(
  defineProps<{
    count: number
    duration?: number
    prefix?: string
    suffix?: string
    delay?: number
    once?: boolean
  }>(),
  {
    duration: 1000,
    prefix: undefined,
    suffix: undefined,
    delay: 100,
    once: true
  }
)

const currentCount = ref(0)

const elementRef = ref<HTMLElement | null>(null)

function getRequestAnimationFrame() {
  if (!isClient() || !window.requestAnimationFrame) {
    return (callback: FrameRequestCallback): number => {
      setTimeout(callback, 1000 / 60)
      return 0
    }
  }

  return window.requestAnimationFrame.bind(window)
}

function animate(start: number, end: number, duration: number, delay: number) {
  const requestAnim = getRequestAnimationFrame()

  if (!isClient()) {
    currentCount.value = end
    return
  }

  currentCount.value = start
  setTimeout(() => {
    const startTime = performance.now()

    const updateCount = (currentTime: number = performance.now()) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuad = (t: number) => t * (2 - t)

      currentCount.value = Math.round(
        start + (end - start) * easeOutQuad(progress)
      )

      if (progress < 1) {
        requestAnim(updateCount)
      }
    }

    requestAnim(updateCount)
  }, delay)
}

function startAnimation(start: number, end: number) {
  animate(start, end, props.duration, props.delay)
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (props.once) return

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      startAnimation(0, props.count)

      if (props.once) {
        observer?.unobserve(entry.target)
      }
    }
  })

  if (elementRef.value) {
    observer.observe(elementRef.value)
  }
})

onBeforeUnmount(() => observer?.disconnect())

watch(
  () => props.count,
  (newCount, oldCount) => {
    if (newCount === oldCount) {
      return
    }

    const startValue = oldCount ?? 0
    startAnimation(startValue, newCount)
  },
  { immediate: true }
)
</script>

<template>
  <span ref="elementRef" class="z-animated-counter">
    <slot name="prefix">{{ prefix }}</slot
    >{{ currentCount }}<slot name="suffix">{{ suffix }}</slot>
  </span>
</template>

<style lang="scss" scoped>
.z-animated-counter {
  white-space: nowrap;
  --numeric-spacing: tabular-nums;
  font-variant-numeric: var(--numeric-spacing);
}
</style>
