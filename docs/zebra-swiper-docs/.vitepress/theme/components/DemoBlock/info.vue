<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String
  },
  value: [String, Number],
  options: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="zebra-conponent-info">
    <div class="info-item">
      <div class="item-text">类型</div>
      <div class="item-value">{{ props.type }}</div>
    </div>
    <div class="info-item">
      <div class="item-text">默认值</div>
      <div class="item-value">{{ props.value }}</div>
    </div>
    <div v-if="props.options.length" class="info-item">
      <div class="item-text">可选项</div>
      <div
        class="item-value"
        v-for="(text, index) in props.options"
        :key="index"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.zebra-conponent-info {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;

  .info-item {
    margin-bottom: 10px;
    margin-right: 30px;
    display: flex;
    align-items: center;

    .item-text {
      font-size: 15px;
    }

    .item-value {
      font-size: 14px;
      margin-left: 10px;
      background-color: var(--vp-custom-block-tip-bg);
      border-radius: 4px;
      padding: 2px 10px;
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
}
</style>
