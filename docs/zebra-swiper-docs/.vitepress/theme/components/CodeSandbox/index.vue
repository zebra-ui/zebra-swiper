<template>
  <iframe
    :src="frameUrl"
    style="
      width: 100%;
      height: calc(100vh - var(--vp-nav-height));
      border: 0;
      border-radius: 4px;
      overflow: hidden;
    "
    allowFullScreen
    :title="`zebra-swiper-${page}`"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
</template>

<script setup>
import { ref } from 'vue'
import { createCodeSandbox } from './createBox'

const props = defineProps({
  page: String
})
const frameUrl = ref('')

createCodeSandbox(props.page).then((res) => {
  frameUrl.value = res
})
</script>

<style lang="scss">
.playground-custom-class {
  .VPNavBar.has-sidebar .title {
    padding: 0 32px;
  }
  .VPNavBar.has-sidebar .content {
    background-color: var(--vp-nav-bg-color);
  }
  .VPSidebar {
    padding-left: 32px !important;
    width: var(--vp-sidebar-width);
  }
  .VPContent {
    padding-right: 0 !important;
    padding-left: var(--vp-sidebar-width) !important;
  }
  .VPDoc {
    padding: 0;

    .content {
      padding: 0;
    }
  }
}
</style>
