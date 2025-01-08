<script lang="ts" setup>
import { useRouter } from 'vitepress'

const router = useRouter()
import TemplateCard from './card.vue'

const templates = [
  {
    icon: 'stack',
    title: 'Stack',
    description: '堆叠轮播',
    platforms: ['H5', '小程序', 'App'],
    price: 'Free',
    name: 'Stack',
    link: '/template/detail'
  },
  {
    icon: 'panorama',
    title: 'Panorama',
    description: '全景轮播',
    platforms: ['H5', '小程序', 'App'],
    price: 'Free',
    name: 'Panorama',
    link: '/template/detail'
  },
  {
    icon: 'circular',
    title: 'Circular',
    description: '环形轮播（反向全景）',
    platforms: ['H5', '小程序', 'App'],
    price: 'Free',
    name: 'Circular',
    link: '/template/detail'
  },
  {
    icon: 'fanshaped',
    title: 'Fanshaped',
    description: '扇形轮播，基于creative创意性',
    platforms: ['H5', '小程序', 'App'],
    price: 'Free',
    name: 'Fanshaped',
    link: '/template/detail'
  },
  {
    icon: 'poster',
    title: 'Poster',
    description: '海报卡片堆叠，基于creative创意性',
    platforms: ['H5', '小程序', 'App'],
    price: 'Free',
    name: 'Poster',
    link: '/template/detail'
  }
]

const onclick = (template) => {
  router.go(`${template.link}?name=${template.name}`)
}
</script>

<template>
  <div class="zebra-template">
    <div class="template-container">
      <TemplateCard
        v-for="(template, index) in templates"
        :key="index"
        v-bind="template"
        class="template-card"
        @click="onclick(template)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.zebra-template {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  .template-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
    gap: 24px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: center;

    .template-card {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .zebra-template {
    padding: 12px;

    .template-container {
      gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }
}

@media (max-width: 360px) {
  .zebra-template {
    padding: 8px;

    .template-container {
      grid-template-columns: 1fr;
    }
  }
}

@media (min-width: 1440px) {
  .zebra-template {
    .template-container {
      gap: 32px;
      max-width: 1440px;
    }
  }
}
</style>
