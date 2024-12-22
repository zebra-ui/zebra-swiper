<template>
  <view
    :id="`swiper${instance.uid}`"
    :class="[classNames]"
    :style="[swiperStyle]"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
    @click="onClick"
  >
    <slot name="container-start"></slot>
    <view
      :id="`swiperWrapper${instance.uid}`"
      :class="[swiperWrapperClass]"
      :style="[styles]"
      @transitionend="wrapperTransitionEnd"
    >
      <slot name="wrapper-start"></slot>
      <slot></slot>
      <Shadow
        v-if="swiperShadowShow"
        ref="swiperShadowRef"
        :swiper-ref="swiperRef"
      ></Shadow>
      <slot name="wrapper-end"></slot>
    </view>
    <template v-if="needsNavigation(props)">
      <Navigation
        ref="prevElRef"
        position="left"
        @init="initNavigationLeft"
      ></Navigation>
      <Navigation
        ref="nextElRef"
        position="right"
        @init="initNavigationRight"
      ></Navigation>
    </template>
    <template v-if="needsScrollbar(props)">
      <Scrollbar
        ref="scrollbarElRef"
        :swiper-ref="swiperRef"
        @init="initScrollbar"
      ></Scrollbar>
    </template>
    <template v-if="needsPagination(props)">
      <Pagination
        ref="paginationElRef"
        :swiper-ref="swiperRef"
        @init="initPagination"
      ></Pagination>
    </template>
    <slot name="container-end"></slot>
  </view>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  getCurrentInstance,
  onUpdated,
  onMounted,
  onBeforeUnmount,
  reactive,
  watch,
  nextTick,
  markRaw,
  type ComponentInternalInstance
} from 'vue'
import {
  needsScrollbar,
  needsNavigation,
  needsPagination,
  uniqueClasses,
  extend,
  wrapperClass,
  moveToFirst,
  moveToLast
} from '../components-shared/utils'
import { isWeb, getRect } from '../shared/utils'
import { useChildren } from '../useRelation/use-children'
import { getChildren } from './get-children'
import emitData from './emits'
import { getParams } from '../components-shared/get-params'
import { getChangedParams } from '../components-shared/get-changed-params'
import { updateSwiper } from '../components-shared/update-swiper'
import { mountSwiper } from '../components-shared/mount-swiper'
import { renderVirtual } from './virtual'
import { updateOnVirtualData } from '../components-shared/update-on-virtual-data'
import { useClass, useStyle } from '../adapter'
import { useExpose } from '../shared/use-expose'
import SwiperCore from '../swiper'
import Navigation from './z-navigation.vue'
import Pagination from './z-pagination.vue'
import Scrollbar from './z-scrollbar.vue'
import Shadow from '../z-swiper-shadow/z-shadow.vue'
import type {
  WrapperTransitionEndMethod,
  WrapperEl,
  SwiperProps,
  VirtualData
} from '../../types/components/z-swiper/z-swiper'
import type { SwiperInterface } from '../../types/swiper-class'
import { VirtualOptions } from '../../types/modules/virtual'
import defaults from '../core/defaults'

defineOptions({
  options: {
    virtualHost: true
  },
  name: 'ZSwiper'
})

const instance = getCurrentInstance() as ComponentInternalInstance
const componentName = 'z-swiper'
const emit = defineEmits([...emitData])
const props = withDefaults(defineProps<SwiperProps>(), { ...defaults })

const { children, linkChildren } = useChildren(componentName)
const containerClasses = ref('swiper')
const virtualData = ref<VirtualData | null>(null)
const breakpointChanged = ref(false)
const initializedRef = ref(false)
const swiperElRef = ref(instance.proxy)
const swiperRef = ref<SwiperInterface | null>(null)
const oldPassedParamsRef = ref<Record<string, any> | null>(null)
const slidesRef = {
  value: []
}
const oldSlidesRef = {
  value: []
}
const swiperShadowRef = ref<any>(null)
const swiperShadowShow = computed(() => {
  return !isWeb() && swiperRef.value?.params.cubeEffect?.shadow
})

const nextElRef = ref<any>(null)
const prevElRef = ref<any>(null)
const paginationElRef = ref<any>(null)
const scrollbarElRef = ref<any>(null)
const paginationId = ref('')
const navigationLeftId = ref('')
const navigationRightId = ref('')
const scrollbarId = ref('')
const initPagination = (id: string | number) => {
  paginationId.value = id.toString()
}
const initNavigationLeft = (id: string | number) => {
  navigationLeftId.value = id.toString()
}
const initNavigationRight = (id: string | number) => {
  navigationRightId.value = id.toString()
}
const initScrollbar = (id: string | number) => {
  scrollbarId.value = id.toString()
}
const { styles, style } = useStyle()
const swiperClass = computed(() => uniqueClasses(containerClasses.value))
const swiperWrapperClass = computed(() =>
  wrapperClass(swiperParams.wrapperClass)
)
const { params: swiperParams, passedParams } = getParams(props, false)
getChildren(children, slidesRef, oldSlidesRef)

oldPassedParamsRef.value = passedParams
oldSlidesRef.value = [...slidesRef.value]
const onBeforeBreakpoint = () => {
  getChildren(children, slidesRef, oldSlidesRef)
  breakpointChanged.value = true
}

// @ts-ignore
swiperParams.onAny = (event: string, ...args: any[]) => {
  // @ts-ignore
  emit(event, ...args)
}
Object.assign(swiperParams.on as object, {
  _beforeBreakpoint: onBeforeBreakpoint,
  _containerClasses(swiper: SwiperInterface, classes: string) {
    containerClasses.value = classes
  }
})

// init Swiper
const passParams = {
  ...swiperParams
}
delete passParams.wrapperClass

// @ts-ignore
swiperRef.value = new SwiperCore(passParams)

if (
  swiperRef.value?.virtual &&
  (swiperRef.value?.params.virtual as VirtualOptions)?.enabled
) {
  // @ts-ignore
  const virtualList = markRaw(props.virtualList)
  // @ts-ignore
  swiperRef.value.virtual.slides = virtualList
  // @ts-ignore
  swiperRef.value.virtual.data = virtualList
  const extendWith = {
    cache: false,
    data: virtualList,
    slides: virtualList,
    renderExternal: (data: VirtualData) => {
      virtualData.value = data
      // emit("update:list", data.data)
    },
    renderExternalUpdate: false
  }
  // @ts-ignore
  extend(swiperRef.value.params.virtual, extendWith)
  // @ts-ignore
  extend(swiperRef.value.originalParams.virtual, extendWith)
}

const swiperStyle = computed(() => ({
  ...props.customStyle
}))

onUpdated(() => {
  // set initialized flag
  if (!initializedRef.value && swiperRef.value) {
    swiperRef.value.emitSlidesClasses()
    initializedRef.value = true
  }
  // watch for params change
  const { passedParams: newPassedParams } = getParams(props, false)
  const changedParams = getChangedParams(
    newPassedParams,
    oldPassedParamsRef.value,
    slidesRef.value,
    oldSlidesRef.value,
    (c: any) => c.uid
  )
  oldPassedParamsRef.value = newPassedParams
  if (
    (changedParams.length || breakpointChanged.value) &&
    swiperRef.value &&
    !swiperRef.value.destroyed
  ) {
    if (isWeb()) {
      updateSwiper({
        swiper: swiperRef.value as unknown as SwiperInterface,
        slides: slidesRef.value,
        passedParams: newPassedParams,
        changedParams,
        nextEl: document.querySelector(
          `#swiperNavigationright${navigationRightId.value}`
        ) as HTMLElement,
        prevEl: document.querySelector(
          `#swiperNavigationleft${navigationLeftId.value}`
        ) as HTMLElement,
        scrollbarEl: document.querySelector(
          `#swiperScrollbar${scrollbarId.value}`
        ) as HTMLElement,
        paginationEl: document.querySelector(
          `#swiperPagination${paginationId.value}`
        ) as HTMLElement
      })
    } else {
      updateSwiper({
        swiper: swiperRef.value as unknown as SwiperInterface,
        slides: slidesRef.value,
        passedParams: newPassedParams,
        changedParams,
        nextEl: nextElRef.value,
        prevEl: prevElRef.value,
        scrollbarEl: scrollbarElRef.value,
        paginationEl: paginationElRef.value
      })
    }
    getChildren(children, slidesRef, oldSlidesRef)
  }
  breakpointChanged.value = false
})

watch(virtualData, () => {
  const virtualList = markRaw(props.virtualList || [])
  const virtualOverList = renderVirtual(
    // @ts-ignore
    swiperRef,
    virtualList,
    virtualData.value
  )

  emit('update:list', virtualOverList)

  nextTick(() => {
    updateOnVirtualData(swiperRef.value as unknown as SwiperInterface)
  })
})

watch(
  () => props.virtualList,
  () => {
    const virtualList = markRaw(props.virtualList || [])
    if (!swiperRef.value?.virtual) return

    // @ts-ignore
    swiperRef.value.virtual.data = virtualList
    swiperRef.value.virtual.slides = virtualList
    swiperRef.value.virtual.update(true)
    swiperRef.value.update()
  },
  {
    deep: true
  }
)

onMounted(() => {
  if (!swiperElRef.value) return
  if (isWeb()) {
    mountSwiper(
      {
        el: document.querySelector(`#swiper${instance.uid}`) as HTMLElement,
        adapterEl: swiperElRef.value,
        nextEl: document.querySelector(
          `#swiperNavigationright${navigationRightId.value}`
        ) as HTMLElement,
        prevEl: document.querySelector(
          `#swiperNavigationleft${navigationLeftId.value}`
        ) as HTMLElement,
        paginationEl: document.querySelector(
          `#swiperPagination${paginationId.value}`
        ) as HTMLElement,
        scrollbarEl: document.querySelector(
          `#swiperScrollbar${scrollbarId.value}`
        ) as HTMLElement,
        swiper: swiperRef.value as unknown as SwiperInterface
      },
      swiperParams
    )
    emit('swiper', swiperRef.value)
  } else {
    if (!swiperParams.width && !swiperParams.height) {
      getRect(instance, `#swiper${instance.uid}`)
        .then((res) => {
          if (swiperElRef.value) {
            // @ts-ignore
            swiperElRef.value.rectWidth = res.width
            // @ts-ignore
            swiperElRef.value.rectHeight = res.height
          }
          mountSwiper(
            {
              el: swiperElRef.value as unknown as HTMLElement,
              adapterEl: swiperElRef.value,
              nextEl: nextElRef.value,
              prevEl: prevElRef.value,
              paginationEl: paginationElRef.value,
              scrollbarEl: scrollbarElRef.value,
              swiper: swiperRef.value as unknown as SwiperInterface
            },
            swiperParams
          )
          emit('swiper', swiperRef.value)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
})

// function renderSlides(slides) {
// 	if (swiperParams.virtual) {
// 		return renderVirtual(swiperRef, slides, virtualData.value);
// 	}
// }

onBeforeUnmount(() => {
  if (swiperRef.value && !swiperRef.value.destroyed) {
    swiperRef.value.destroy(true, false)
  }
})

const onTouchStart = (event: TouchEvent) => {
  if (!isWeb() && swiperRef.value) {
    swiperRef.value.onTouchStart(event)
  }
}

const onTouchMove = (event: TouchEvent) => {
  if (!isWeb() && swiperRef.value) {
    swiperRef.value.onTouchMove(event)
  }
}

const onTouchEnd = (event: TouchEvent) => {
  if (!isWeb() && swiperRef.value) {
    swiperRef.value.onTouchEnd(event)
  }
}

const onClick = (event: MouseEvent) => {
  if (!isWeb() && swiperRef.value) {
    swiperRef.value.onClick(event)
    swiperRef.value.emit('tap', event)
    swiperRef.value.emit('click', event)
  }
}

const { classList, classNames, className } = useClass(swiperClass.value)

const wrapperTransitionEndMethod = ref<WrapperTransitionEndMethod[]>([])

const wrapperAddEventListener = (
  name: string,
  callback: (e: Event) => void,
  funcName: string
) => {
  wrapperTransitionEndMethod.value.push({
    funcName,
    callback
  })
}

const wrapperRemoveEventListener = (
  name: string,
  callback: (e: Event) => void,
  funcName: string
) => {
  wrapperTransitionEndMethod.value = wrapperTransitionEndMethod.value.filter(
    (func) => func.funcName !== funcName
  )
}

const wrapperTransitionEnd = (e: Event) => {
  if (!isWeb()) {
    wrapperTransitionEndMethod.value.forEach((func) => func.callback(e))
  }
}

const wrapperDispatchEvent = (e: Event) => {
  wrapperTransitionEnd(e)
}

const prependSlides = (slide: any, index: number) => {
  wrapperEl.children = moveToFirst(wrapperEl.children, index)
  const loopList = moveToFirst(props.list || [], index)
  emit('update:list', loopList)
}

const appendSlides = (slide: any, index: number) => {
  wrapperEl.children = moveToLast(wrapperEl.children, index)
  const loopList = moveToLast(props.list || [], index)
  emit('update:list', loopList)
}

const wrapperEl = reactive<WrapperEl>({
  uid: instance.uid,
  children,
  style,
  addEventListener: wrapperAddEventListener,
  removeEventListener: wrapperRemoveEventListener,
  dispatchEvent: wrapperDispatchEvent,
  prepend: prependSlides,
  append: appendSlides,
  swiperShadowRef
})

linkChildren({
  swiperRef,
  params: swiperParams
})

useExpose({
  uid: instance.uid,
  children,
  classList,
  wrapperEl,
  className
})
</script>
