<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

interface ZebraAnimatedTextProps {
  text: string
  lastWord?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  tag?: string
  wordDelay?: number
  columnGap?: number
  rowGap?: number
  duration?: number
  once?: boolean
}

defineOptions({
  inheritAttrs: false
})

const {
  text,
  lastWord,
  delay = 0,
  wordDelay = 75,
  direction = 'up',
  tag = 'span',
  columnGap = 0.5,
  rowGap = 0,
  duration = 2000,
  once = true
} = defineProps<ZebraAnimatedTextProps>()

const words = computed(() => text.split(' '))

const wordCount = computed(() => words.value.length)

const isVisible = ref(false)
const isClient = ref(false)

const animatedClass = computed(() =>
  isVisible.value ? `zebra-animate-slide-${direction}-blur` : 'zebra-invisible'
)

const element = ref<HTMLDivElement>()

let observer: IntersectionObserver | null = null

onMounted(() => {
  isClient.value = true

  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting

    if (once && element.value) {
      observer?.unobserve(element.value)
    }
  })

  checkAvailability(
    () => element.value,
    (element) => {
      observer?.observe(element)
    }
  )
})

onBeforeUnmount(() => observer?.disconnect())

function checkAvailability<T>(
  getRef: () => T | null | undefined,
  callback: (component: NonNullable<T>) => void,
  options?: {
    maxAttempts?: number
    interval?: number
    errorMessage?: string
    expectedValue?: T
  }
) {
  const opts = {
    maxAttempts: 20,
    interval: 100,
    ...options
  }

  let attempts = 0

  function check() {
    const ref = getRef()
    if (ref !== null && ref !== undefined) {
      if (opts.expectedValue !== undefined && ref !== opts.expectedValue) {
        if (attempts < opts.maxAttempts) {
          attempts++
          setTimeout(check, opts.interval)
        }
      } else {
        callback(ref as NonNullable<T>)
      }
    } else if (attempts < opts.maxAttempts) {
      attempts++
      setTimeout(check, opts.interval)
    }
  }

  check()
}
</script>

<template>
  <div class="z-animated-text">
    <template v-if="isClient">
      <Component
        :is="tag"
        ref="element"
        v-bind="$attrs"
        class="z-animated-text__root"
        :style="{ columnGap: `${columnGap}rem`, rowGap: `${rowGap}rem` }"
      >
        <span
          v-for="(word, index) in words"
          :key="word + index"
          class="z-animated-text__word"
        >
          <span
            class="z-animated-text__word-inner"
            :class="animatedClass"
            :style="{
              animationDelay: `${delay + index * (wordDelay ?? 150)}ms`,
              animationDuration: `${duration}ms`
            }"
          >
            {{ word }}
          </span>
        </span>

        <span
          v-if="lastWord"
          class="z-animated-text__last-word"
          :class="animatedClass"
          :style="{
            animationDelay: `${delay + wordCount * (wordDelay ?? 150)}ms`,
            animationDuration: `${duration}ms`
          }"
        >
          <span class="z-animated-text__last-word-inner">
            <span class="z-animated-text__last-word-inner-gradient" />
            <span class="z-animated-text__last-word-inner-text">{{
              lastWord
            }}</span>
          </span>
        </span>
      </Component>
    </template>

    <template v-else>
      <component
        :is="tag"
        v-bind="$attrs"
        class="zebra-invisible zebra-inline-flex"
      >
        {{ text }}

        <template v-if="lastWord">
          {{ lastWord }}
        </template>
      </component>
    </template>
  </div>
</template>

<style scoped lang="scss">
.z-animated-text {
  .zebra-invisible {
    visibility: hidden;
  }

  &__root {
    display: inline-flex;
    flex-wrap: wrap;
  }

  &__word {
    display: inline-flex;

    &-inner {
      display: inline-flex;
    }
  }

  &__last-word {
    display: inline-flex;

    &-inner {
      display: inline-flex;
      position: relative;

      &-gradient {
        --zebra-color-secondary: hsl(164deg 76% 46%);
        --zebra-color-info: hsl(188deg 78% 41%);
        --zebra-color-primary: hsl(210deg 100% 56%);
        --zb-gradient-to: var(--zebra-color-secondary);
        --zb-gradient-from: var(--zebra-color-primary);
        --zb-gradient-stops: var(--zb-gradient-from), var(--zebra-color-info),
          var(--zb-gradient-to);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right, var(--zb-gradient-stops));
        opacity: 0.3;
        filter: blur(16px);
      }

      &-text {
        position: relative;
      }
    }
  }
}

@keyframes slide-up-blur {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes slide-down-blur {
  from {
    opacity: 0;
    transform: translateY(-20px);
    filter: blur(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes slide-left-blur {
  from {
    opacity: 0;
    transform: translateX(20px);
    filter: blur(10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
}

@keyframes slide-right-blur {
  from {
    opacity: 0;
    transform: translateX(-20px);
    filter: blur(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

// Animation classes
$animations: (
  'up': slide-up-blur,
  'down': slide-down-blur,
  'left': slide-left-blur,
  'right': slide-right-blur
);

@each $direction, $animation in $animations {
  .zebra-animate-slide-#{$direction}-blur {
    animation: $animation cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }
}
</style>
