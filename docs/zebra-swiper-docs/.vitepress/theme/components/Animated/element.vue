<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

interface ZebraAnimatedElementProps {
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  once?: boolean
}

const {
  direction = 'up',
  delay = 0,
  duration = 2000,
  once = true
} = defineProps<ZebraAnimatedElementProps>()

const animatedClass = computed(() => `animate-slide-${direction}-blur`)

const element = ref<HTMLDivElement>()

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('--invisible')
      entry.target.classList.add(animatedClass.value)
      if (once === true) {
        observer?.unobserve(entry.target)
      }
    } else if (once === false) {
      entry.target.classList.add('--invisible')
      entry.target.classList.remove(animatedClass.value)
    }
  })

  if (element.value) {
    observer.observe(element.value)
  }
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div
    ref="element"
    class="z-animated-element --invisible"
    :style="{
      animationDuration: `${duration}ms`,
      animationDelay: `${delay}ms`
    }"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
// Base element class
.z-animated-element {
  //   &.--invisible {
  //     @apply zebra-invisible;
  //   }
}

// Animation keyframes
$directions: (
  'up': translateY(20px),
  'down': translateY(-20px),
  'left': translateX(20px),
  'right': translateX(-20px)
);

@each $name, $transform in $directions {
  @keyframes slide-#{$name}-blur {
    from {
      opacity: 0;
      transform: $transform;
      filter: blur(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }

  .animate-slide-#{$name}-blur {
    animation: slide-#{$name}-blur cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }
}
</style>
