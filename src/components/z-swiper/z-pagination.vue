<template>
  <view
    :id="`swiperPagination${instance.uid}`"
    :class="[classNameShow]"
    :style="[style]"
  >
    <template v-if="paginationData.bullets.length">
      <view
        v-for="(pagination, index) in paginationData.bullets"
        :class="[pagination.classList.value]"
        :style="[bulletStyle, pagination.style]"
        :key="`swiperPaginationItem${instance.uid + index}`"
        @click.prevent.stop="paginationClick($event, index)"
      >
      </view>
    </template>
    <template v-if="paginationData.fractions">
      <text :class="[paginationData.fractions.current.classList.value]">{{
        paginationData.fractions.current.content
      }}</text>
      /
      <text :class="[paginationData.fractions.total.classList.value]">
        {{ paginationData.fractions.total.content }}
      </text>
    </template>
    <template v-if="paginationData.progressbar">
      <view
        :class="[paginationData.progressbar.classList.value]"
        :style="[paginationData.progressbar.style]"
      >
      </view>
    </template>
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import {
  getCurrentInstance,
  reactive,
  computed,
  ref,
  onBeforeMount,
  type ComponentInternalInstance,
  type PropType
} from 'vue'
import { ClassList } from '../adapter/index.js'
import { isWeb } from '../shared/utils.js'
import { convertSingleValue } from '../components-shared/utils.js'
import type {
  PaginationData,
  PaginationListenerMethod
} from '../../types/components/z-swiper/z-pagination'
import type { PaginationOptions } from '../../types/modules/pagination'
defineOptions({
  name: 'ZSwiperPagination',
  options: {
    virtualHost: true
  }
})

const props = defineProps({
  swiperRef: {
    type: Object as PropType<any | null>,
    default: () => null
  }
})

const paginationClass = ref('swiper-pagination')
const instance = getCurrentInstance() as ComponentInternalInstance
const emit = defineEmits<{
  (e: 'init', uid: number | string): void
}>()

const paginationData = reactive<PaginationData>({
  bullets: [],
  fractions: null,
  progressbar: null
})

const classList = reactive(new ClassList(paginationClass.value))
const classNameShow = computed(() => classList.value)

const paginationListenenerMethod = ref<PaginationListenerMethod[]>([])
const paginationAddEventListener = (
  name: string,
  callback: (e: Event) => void,
  funcName: string
) => {
  paginationListenenerMethod.value.push({
    funcName,
    callback
  })
}

const paginationRemoveEventListener = (
  name: string,
  callback: (e: Event) => void,
  funcName: string
) => {
  paginationListenenerMethod.value = paginationListenenerMethod.value.filter(
    (func) => {
      return func.funcName !== funcName
    }
  )
}

const paginationClick = (e: Event, paginationIndex: number) => {
  if (!isWeb()) {
    const clickMethod = paginationListenenerMethod.value.find((func) => {
      return func.funcName == 'onClick'
    })
    if (clickMethod) {
      clickMethod.callback(e, paginationIndex)
    }
  }
}
const bulletStyle = computed(() => {
  if (!(props.swiperRef?.params.pagination as PaginationOptions).bulletSize)
    return {}
  return {
    width: convertSingleValue(
      (props.swiperRef?.params.pagination as PaginationOptions).bulletSize,
      'px'
    ),
    height: convertSingleValue(
      (props.swiperRef?.params.pagination as PaginationOptions).bulletSize,
      'px'
    )
  }
})
const style = reactive({})

onBeforeMount(() => {
  emit('init', instance.uid)
})

defineExpose({
  classList,
  paginationData,
  addEventListener: paginationAddEventListener,
  removeEventListener: paginationRemoveEventListener,
  style
})
</script>
