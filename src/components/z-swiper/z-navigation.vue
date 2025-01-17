<template>
  <view
    :id="`swiperNavigation${position}${instance.uid}`"
    :class="[classNames, slotClass]"
    @click.prevent.stop="paginationClick"
  >
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  onBeforeMount,
  ref,
  type ComponentInternalInstance
} from 'vue'
import { useClass } from '../adapter/index.js'
import { isWeb } from '../shared/utils.js'
import type { NavigationListenerMethod } from '../../types/components/z-swiper/z-navigation'

defineOptions({
  name: 'ZNavigation',
  options: {
    virtualHost: true
  }
})

const instance = getCurrentInstance() as ComponentInternalInstance

const emit = defineEmits<{
  (e: 'init', uid: number | string): void
}>()

const props = defineProps({
  position: {
    type: String,
    default: ''
  },
  useSlot: {
    type: Boolean,
    default: false
  }
})

const slotClass = computed(() => (props.useSlot ? 'navigation-slot-show' : ''))

const navigationClass = ref(
  props.position == 'left' ? 'swiper-button-prev' : 'swiper-button-next'
)

const { classList, classNames } = useClass(navigationClass.value)

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
</script>
