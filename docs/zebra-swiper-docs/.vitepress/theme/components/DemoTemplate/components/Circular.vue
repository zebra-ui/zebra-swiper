<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import EffectPanorama from '../../ExampleMethods/effect-panorama/effect-panorama'
const modules = [EffectPanorama]
const props = defineProps({
  isMini: Boolean
})

const list = ref(
  Array.from({
    length: 10
  }).map((item, index) => {
    return {
      url: `/images/template/resource/swipe${index + 1}.jpg`,
      id: index + 1
    }
  })
)
const height = ref('0px')
const width = ref(0)
const element = document.getElementById('VPContent')
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    width.value = entry.contentRect.width
    height.value = entry.contentRect.height + 'px'
  }
})

resizeObserver.observe(element as HTMLElement)

const isH5 = computed(() => width.value <= 768)

const miniStyle = computed(() => {
  if (!props.isMini) return
  return {
    padding: 0,
    height: '100%',
    width: '100%'
  }
})

const panoramaEffect = ref({
  depth: 200,
  rotate: -50,
  stretch: 1
})
</script>

<template>
  <div
    class="zebra-template-component-circular"
    :style="{ height: height, ...miniStyle }"
  >
    <z-swiper
      :enabled="!isMini"
      grabCursor
      loop
      slidesPerView="auto"
      centeredSlides
      effect="panorama"
      :customEffect="panoramaEffect"
      :modules="modules"
    >
      <z-swiper-item
        v-for="item in list"
        :key="item.id"
        :style="{ width: isMini ? '100px' : isH5 ? '80%' : '70%' }"
      >
        <img
          :src="item.url"
          :style="{ borderRadius: isMini ? '4px' : '20px' }"
        />
      </z-swiper-item>
    </z-swiper>
  </div>
</template>

<style lang="scss" scoped>
@use '../../ExampleMethods/effect-panorama/effect-panorama.scss';

.zebra-template-component-circular {
  height: 100%;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .swiper {
    height: 70%;
    width: 100%;
  }

  @media (max-width: 768px) {
    .swiper {
      height: 40%;
      width: 100%;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
}

@media (max-width: 768px) {
  .zebra-template-component-circular {
    padding: 10px;
  }
}
</style>
