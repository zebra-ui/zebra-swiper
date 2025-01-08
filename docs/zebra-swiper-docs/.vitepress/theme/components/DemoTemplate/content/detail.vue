<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted, reactive, ref } from 'vue'
const components = {
  Stack: defineAsyncComponent(() => import('../components/Stack.vue')),
  Panorama: defineAsyncComponent(() => import('../components/Panorama.vue')),
  Circular: defineAsyncComponent(() => import('../components/Circular.vue')),
  Fanshaped: defineAsyncComponent(() => import('../components/Fanshaped.vue')),
  Poster: defineAsyncComponent(() => import('../components/Poster.vue'))
}

const params = new URLSearchParams(
  typeof window !== 'undefined' ? window.location.search : ''
)

const name = computed(() => params.get('name') || 'Stack')

const currentComponent = computed(() => components[name.value])
</script>

<template>
  <div class="zebra-content-detail">
    <ClientOnly>
      <component :is="currentComponent"></component>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.zebra-content-detail {
}
</style>
