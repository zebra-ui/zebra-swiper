<script lang="ts" setup>
import { nextTick } from 'vue'

function enter(element: HTMLElement) {
  const width = getComputedStyle(element).width

  element.style.width = width
  element.style.position = 'absolute'
  element.style.visibility = 'hidden'
  element.style.height = 'auto'
  element.style.top = 'bottom'

  const height = getComputedStyle(element).height

  element.style.width = ''
  element.style.position = ''
  element.style.visibility = ''
  element.style.height = '0px'
  getComputedStyle(element).height
  nextTick(() => {
    element.style.height = height
  })
}

function afterEnter(element: HTMLElement) {
  element.style.height = 'auto'
}

function leave(element: HTMLElement) {
  const height = getComputedStyle(element).height
  element.style.height = height
  getComputedStyle(element).height

  nextTick(() => {
    element.style.height = '0px'
  })
}
</script>

<template>
  <TransitionGroup
    class="zebra-transition-expand"
    name="zebra-expand"
    tag="div"
    @enter="(el: Element) => enter(el as HTMLElement)"
    @after-enter="(el: Element) => afterEnter(el as HTMLElement)"
    @leave="(el: Element) => leave(el as HTMLElement)"
  >
    <slot />
  </TransitionGroup>
</template>

<style lang="scss">
.zebra-transition-expand,
.zebra-transition-expand * {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  transition-duration: 300ms;
}

.zebra-expand-enter-active,
.zebra-expand-leave-active {
  transition: all 200ms ease-in-out;
  transition-property: opacity, height;
  overflow: hidden;
}

.zebra-expand-enter-from,
.zebra-expand-leave-to {
  height: 0;
  opacity: 0;
}
</style>
