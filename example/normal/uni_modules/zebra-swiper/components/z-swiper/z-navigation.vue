<template>
  <view
    :id="`swiperNavigation${position}${instance.uid}`"
    :class="[classNameShow]"
    @click.prevent.stop="paginationClick"
  >
  </view>
</template>

<script setup lang="ts">
import {
  getCurrentInstance,
  onBeforeMount,
  reactive,
  computed,
  ref,
  type ComponentInternalInstance
} from 'vue'
import { ClassList } from '../adapter/index.js'
import { isWeb } from '../shared/utils.js'
import type {
  NavigationListenerMethod,
  NavigationProps
} from '../../types/components/z-swiper/z-navigation'

const instance = getCurrentInstance() as ComponentInternalInstance
const emit = defineEmits<{
  (e: 'init', uid: number | string): void
}>()

const props = withDefaults(defineProps<NavigationProps>(), {
  position: ''
})

const navigationClass = ref(
  props.position == 'left' ? 'swiper-button-prev' : 'swiper-button-next'
)
const classList = reactive(new ClassList(navigationClass.value))
const classNameShow = computed(() => classList.value)

const navigationListenenerMethod = ref<NavigationListenerMethod[]>([])
const navigationAddEventListener = (
  name: string,
  callback: (e: Event) => void,
  funcName: string
) => {
  navigationListenenerMethod.value.push({
    funcName,
    callback
  })
}

const navigationRemoveEventListener = (
  name: string,
  callback: (e: Event) => void,
  funcName: string
) => {
  navigationListenenerMethod.value = navigationListenenerMethod.value.filter(
    (func) => {
      return func.funcName !== funcName
    }
  )
}

const paginationClick = (e: Event) => {
  if (!isWeb()) {
    const clickMethod = navigationListenenerMethod.value.find((func) => {
      return func.funcName == 'onClick'
    })
    if (clickMethod) {
      clickMethod.callback(e)
    }
  }
}
onBeforeMount(() => {
  emit('init', instance.uid)
})
// 兼容方法
// const classList = reactive(new ClassList(swiperClass.value));

defineExpose({
  classList,
  addEventListener: navigationAddEventListener,
  removeEventListener: navigationRemoveEventListener
})

// 添加默认导出
defineOptions({
  name: 'ZNavigation'
})
</script>
