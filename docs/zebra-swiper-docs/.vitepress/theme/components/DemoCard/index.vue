<script lang="ts" setup></script>

<template>
  <div class="zebra-card">
    <div class="card-operate">
      <slot name="operate" />
    </div>
    <div class="card-content">
      <slot name="content" />
    </div>
    <div v-if="$slots.footer" class="zebra-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.zebra-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg);
  border-width: 1px;
  border-style: solid;
  border-color: var(--vp-c-gutter);
  border-radius: 8px;
  overflow: hidden;

  &__footer {
    border-radius: 0 0 8px 8px;
    border-top: 1px solid var(--vp-c-gray-3);
  }
}
</style>
