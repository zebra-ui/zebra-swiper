<script lang="ts" setup>
import TemplateAnimate from './animate.vue'
import ContentIndex from './content/index.vue'
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  platforms: {
    type: Array as () => string[],
    default: () => []
  },
  price: {
    type: [Number, String],
    default: 'Free'
  },
  link: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: 'Stack'
  }
})

interface PriceFormat {
  integer: string
  decimal: string
}

const formattedPrice = computed<'Free' | PriceFormat>(() => {
  if (props.price === 'Free') return 'Free'
  const num = Number(props.price)
  const [integer, decimal] = String(num).split('.')
  return {
    integer,
    decimal: decimal || '00'
  }
})
</script>

<template>
  <TemplateAnimate>
    <div class="zebra-template-card">
      <div class="card-image">
        <ContentIndex :name="name" :icon="icon"></ContentIndex>
      </div>
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ description }}</p>
        <div class="card-platforms">
          <span
            v-for="platform in platforms"
            :key="platform"
            class="platform-tag"
          >
            {{ platform }}
          </span>
        </div>
      </div>
      <div class="price-tag" :class="{ 'is-free': price === 'Free' }">
        <template v-if="price === 'Free'"> Free </template>
        <template v-else>
          <span class="integer"
            >￥{{ (formattedPrice as PriceFormat).integer }}</span
          >
          <span class="dot">.</span>
          <span class="decimal">{{
            (formattedPrice as PriceFormat).decimal
          }}</span>
        </template>
      </div>
    </div>
  </TemplateAnimate>
</template>

<style lang="scss" scoped>
.zebra-template-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg);
  border: 0px solid var(--vp-c-divider);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.5s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-2px);
  }

  .card-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .card-content {
    padding: 16px;
  }

  .card-title {
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-description {
    margin: 0 0 12px;
    font-size: 14px;
    color: var(--vp-c-text-2);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5;
    height: 21px;
  }

  .card-platforms {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    .platform-tag {
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;

      &:nth-child(1) {
        background: var(--vp-c-indigo-soft);
        color: var(--vp-c-indigo);
      }

      &:nth-child(2) {
        background: var(--vp-c-green-soft);
        color: var(--vp-c-green);
      }

      &:nth-child(3) {
        background: var(--vp-c-red-soft);
        color: var(--vp-c-red);
      }
    }
  }

  .price-tag {
    position: absolute;
    right: 0;
    top: 0;
    background: var(--vp-c-brand-2);
    color: white;
    padding: 4px 12px;
    border-bottom-left-radius: 12px;
    font-weight: 600;
    font-size: 16px;
    z-index: 1;

    &.is-free {
      background: var(--vp-c-green-3);
    }

    .integer {
      font-size: 16px;
    }

    .dot {
      font-size: 16px;
      margin: 0 1px;
    }

    .decimal {
      font-size: 12px;
    }
  }
}
</style>
