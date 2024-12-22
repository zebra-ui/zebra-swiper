<template>
  <view
    :id="`swiperItem${instance.uid}`"
    :class="[classNames]"
    :style="[styles]"
    :data-swiper-slide-index="swiperItemIndex"
    @click="clickItem"
  >
    <slot></slot>
    <view
      v-for="(shadow, index) in shadowList"
      :key="`${instance.uid}${index}`"
      :class="[shadow.classNames]"
      :style="[shadow.styles]"
    >
    </view>
  </view>
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
  getCurrentInstance,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  watch,
  type ComponentInternalInstance,
  type Ref
} from 'vue'
import { uniqueClasses, convertStyleValue } from '../components-shared/utils'
import { getRect, isWeb } from '../shared/utils'
import { useExpose } from '../shared/use-expose'
import { useParent } from '../useRelation/use-parent'
import { useStyle, useClass } from '../adapter'
import type {
  SwiperItemProps,
  ShadowItem
} from '../../types/components/z-swiper/z-swiper-item'
import type { SwiperInterface } from '../../types/swiper-class'
import type { ParentProvide } from '../../types/components/use-relation/use-parent'
import Swiper from '../../types/swiper-class'

const { parent, index } = useParent('z-swiper') as {
  parent: ParentProvide
  index: Ref<number>
}
const instance = getCurrentInstance() as ComponentInternalInstance

defineOptions({
  options: {
    virtualHost: true
  },
  name: 'ZSwiperItem'
})

const emit = defineEmits<{
  (e: 'click', event: Event): void
}>()

const props = withDefaults(defineProps<SwiperItemProps>(), {
  tag: 'div',
  swiperSlideIndex: undefined,
  zoom: undefined,
  lazy: false,
  virtualIndex: undefined,
  customStyle: () => ({})
})

const dataSwiperSlideIndex = ref(index.value)
const slideClasses = ref('swiper-slide')
const swiperElRef = ref(parent)
const swiperRef = computed(
  () => swiperElRef.value?.swiperRef as SwiperInterface
)

// Shadow
const shadowList = ref<ShadowItem[]>([])
const addShadowItem = (shadow: ShadowItem) => {
  shadowList.value.push(shadow)
}
const getShadowList = () => {
  return shadowList.value
}
const getShadowByClass = (className: string) => {
  return shadowList.value.find((item) => item.classList.contains(className))
}
const clearShadow = () => {
  shadowList.value = []
}

const swiperItemClass = computed(() => uniqueClasses(slideClasses.value))
const swiperItemIndex = computed(() => {
  return typeof props.virtualIndex === 'undefined' &&
    swiperRef.value?.params?.loop
    ? props.swiperSlideIndex || dataSwiperSlideIndex.value
    : props.virtualIndex
})

let eventAttached = false

function updateClasses(swiper: Swiper, el: any, classNames: string) {
  if (el === instance) {
    slideClasses.value = classNames
  }
}

const clickItem = (event: Event) => {
  if (!isWeb()) {
    swiperRef.value?.updateClickedSlide(
      instance.proxy as unknown as HTMLElement
    )
    emit('click', event)
  }
}

interface SwiperItemRect {
  width?: number
  height?: number
  top?: number
  left?: number
  right?: number
  bottom?: number
}

const swiperItemRect = ref<SwiperItemRect>({})

onMounted(() => {
  if (!swiperRef.value) return
  swiperRef.value.on('_slideClass', updateClasses)
  eventAttached = true
  getSwiperItemRect()
})

onBeforeUpdate(() => {
  if (eventAttached || !swiperRef.value) return
  swiperRef.value.on('_slideClass', updateClasses)
  eventAttached = true
})

const getSwiperItemRect = () => {
  return new Promise<SwiperItemRect>((resolve) => {
    getRect(instance, `#swiperItem${instance.uid}`).then((res) => {
      swiperItemRect.value = res
      resolve(res)
    })
  })
}

onUpdated(() => {
  if (!instance || !swiperRef.value) return
  if (typeof props.swiperSlideIndex !== 'undefined') {
    ;(instance as any).swiperSlideIndex = props.swiperSlideIndex
  }
  if (swiperRef.value.destroyed) {
    if (slideClasses.value !== 'swiper-slide') {
      slideClasses.value = 'swiper-slide'
    }
  }
  getSwiperItemRect()
})

onBeforeUnmount(() => {
  if (!swiperRef.value) return
  swiperRef.value.off('_slideClass', updateClasses)
})

const propStyle = computed(() =>
  convertStyleValue(props.customStyle || {}, 'px', swiperRef.value?.width)
)

const { style, styles } = useStyle()

watch(
  () => props.customStyle,
  (newValue: Record<string, any> | undefined) => {
    if (newValue) {
      style.setStyles(propStyle.value)
    }
  },
  {
    deep: true,
    immediate: true
  }
)

const { classList, classNames, className } = useClass(swiperItemClass.value)

const getAttribute = (name: string): string | number | null => {
  if (name === 'data-swiper-slide-index') {
    return dataSwiperSlideIndex.value
  }
  return props[name as keyof typeof props] as string | number | null
}
const setAttribute = (name: string, value: string | number) => {
  if (name === 'data-swiper-slide-index') {
    // @ts-ignore
    dataSwiperSlideIndex.value = String(value)
  }
}
const removeAttribute = (name: string) => {
  if (name === 'data-swiper-slide-index') {
    // @ts-ignore
    dataSwiperSlideIndex.value = null
  }
}
useExpose({
  style,
  classList,
  uid: instance.uid,
  childrenList: parent.children,
  className,
  getAttribute,
  setAttribute,
  removeAttribute,
  swiperItemIndex,
  getSwiperItemRect,
  swiperItemRect,
  shadowList,
  addShadowItem,
  getShadowList,
  getShadowByClass,
  clearShadow
})
</script>
