<template>
  <view
    :id="`swiperScrollbar${instance.uid}`"
    :class="[classNameShow]"
    :style="[style]"
    @click.stop="onClickScrollbar"
    @touchstart.stop="onTouchStartScrollbar"
    @touchmove.stop.prevent="onTouchMoveScrollbar"
    @touchend.stop="onTouchEndScrollbar"
    @touchcancel.stop="onTouchEndScrollbar"
  >
    <view :class="[dragElRef.classList.value]" :style="[dragElRef.style]">
    </view>
  </view>
</template>

<script setup lang="ts">
import {
  getCurrentInstance,
  onBeforeMount,
  reactive,
  computed,
  ref,
  onMounted,
  type ComponentInternalInstance,
  type PropType
} from 'vue'
import { ClassList } from '../adapter'
import { getRect, isWeb } from '../shared/utils'
import type {
  ScrollbarListenerMethod,
  ScrollbarDragEl,
  ScrollbarRect
} from '../../types/components/z-swiper/z-scrollbar'
import type { ScrollbarOptions } from '../../types/modules/scrollbar'

defineOptions({
  name: 'ZScrollbar',
  options: {
    virtualHost: true
  }
})

const instance = getCurrentInstance() as ComponentInternalInstance
const props = defineProps({
  swiperRef: {
    type: Object as PropType<any | null>,
    default: () => null
  }
})

const emit = defineEmits<{
  (e: 'init', uid: number | string): void
}>()

const scrollbarClass = ref('swiper-scrollbar')
const classList = reactive(new ClassList(scrollbarClass.value))
const classNameShow = computed(() => classList.value)

const scrollbarListenenerMethod = ref<ScrollbarListenerMethod[]>([])

const scrollbarAddEventListener = (
  name: string,
  callback: (e: Event) => void,
  funcName: string
) => {
  scrollbarListenenerMethod.value.push({
    funcName,
    callback
  })
}

const scrollbarRemoveEventListener = (
  name: string,
  callback: (e: Event) => void,
  funcName: string
) => {
  scrollbarListenenerMethod.value = scrollbarListenenerMethod.value.filter(
    (func) => func.funcName !== funcName
  )
}

onBeforeMount(() => {
  emit('init', instance.uid)
})

const style = reactive<Record<string, any>>({})

const dragElRef = reactive<ScrollbarDragEl>({
  classList: reactive(
    new ClassList(
      (props.swiperRef?.params.scrollbar as ScrollbarOptions).dragClass || ''
    )
  ),
  style: reactive({})
})

const scrollbarRect = ref<ScrollbarRect>({} as ScrollbarRect)

const onClickScrollbar = (event: Event) => {
  if (!isWeb()) {
    const clickMethod = scrollbarListenenerMethod.value.find(
      (item) => item.funcName === 'click'
    )
    clickMethod?.callback(event)
  }
}

const onTouchStartScrollbar = (event: Event) => {
  if (!isWeb()) {
    const callMethod = scrollbarListenenerMethod.value.find(
      (item) => item.funcName === 'touchstart'
    )
    callMethod?.callback(event)
  }
}

const onTouchMoveScrollbar = (event: Event) => {
  if (!isWeb()) {
    const callMethod = scrollbarListenenerMethod.value.find(
      (item) => item.funcName === 'touchmove'
    )
    callMethod?.callback(event)
  }
}

const onTouchEndScrollbar = (event: Event) => {
  if (!isWeb()) {
    const callMethod = scrollbarListenenerMethod.value.find(
      (item) => item.funcName === 'touchend'
    )
    callMethod?.callback(event)
  }
}

onMounted(() => {
  getRect(instance, `#swiperScrollbar${instance.uid}`).then((res) => {
    scrollbarRect.value = res
  })
})

defineExpose({
  classList,
  addEventListener: scrollbarAddEventListener,
  removeEventListener: scrollbarRemoveEventListener,
  style,
  dragElRef,
  scrollbarRect
})
</script>
