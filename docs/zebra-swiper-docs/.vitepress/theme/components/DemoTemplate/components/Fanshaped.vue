<script lang="ts" setup>
import { computed, ref } from 'vue'
import { EffectCreative } from '@zebra-ui/swiper/modules'
const modules = [EffectCreative]
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

const creativeEffect = computed(() => {
  return {
    limitProgress: 3,
    prev: {
      translate: ['-90%', '10%', -50],
      rotate: [0, 0, -20],
      origin: 'bottom'
    },
    next: {
      translate: ['90%', '10%', -50],
      rotate: [0, 0, 20],
      origin: 'bottom'
    }
  }
})
</script>

<template>
  <div
    class="zebra-template-component-fanshaped"
    :style="{ height: height, ...miniStyle }"
  >
    <z-swiper
      :enabled="!isMini"
      grabCursor
      loop
      :slidesPerView="3"
      centeredSlides
      centeredSlidesBounds
      effect="creative"
      :creativeEffect="creativeEffect"
      :modules="modules"
    >
      <z-swiper-item v-for="item in list" :key="item.id">
        <img
          :src="item.url"
          :style="{ borderRadius: isMini ? '4px' : '20px' }"
        />
      </z-swiper-item>
    </z-swiper>
  </div>
</template>

<style lang="scss" scoped>
.zebra-template-component-fanshaped {
  height: 100%;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .swiper {
    height: 80%;
    width: 100%;
  }

  @media (max-width: 768px) {
    .swiper {
      height: 40%;
      width: 100%;
    }
  }

  img {
    height: 80%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
}

@media (max-width: 768px) {
  .zebra-template-component-fanshaped {
    padding: 10px;
  }
}
</style>

<style lang="scss">
@use '@zebra-ui/swiper/modules/effect-creative/effect-creative.scss';
</style>
