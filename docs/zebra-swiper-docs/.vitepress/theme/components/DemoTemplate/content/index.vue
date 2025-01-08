<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import BackgroundContent from './background-content.vue'
import IconContent from './icon-content.vue'
import WindowContent from './window-content.vue'

const props = defineProps({
  name: String,
  icon: String
})
const components = {
  Stack: defineAsyncComponent(() => import('../components/Stack.vue')),
  Panorama: defineAsyncComponent(() => import('../components/Panorama.vue')),
  Circular: defineAsyncComponent(() => import('../components/Circular.vue')),
  Fanshaped: defineAsyncComponent(() => import('../components/Fanshaped.vue')),
  Poster: defineAsyncComponent(() => import('../components/Poster.vue'))
}
const currentComponent = computed(() => components[props.name || 'Stack'])
</script>

<template>
  <div class="zebra-content-template">
    <BackgroundContent></BackgroundContent>
    <IconContent
      :name="icon"
      class="template-icon"
      data-atropos-offset="8"
    ></IconContent>
    <WindowContent :name="name" data-atropos-offset="4">
      <ClientOnly>
        <component :is="currentComponent" isMini></component>
      </ClientOnly>
    </WindowContent>
  </div>
</template>

<style lang="scss" scoped>
.zebra-content-template {
  position: relative;
  height: 100%;
  width: 100%;

  .content-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .template-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>
