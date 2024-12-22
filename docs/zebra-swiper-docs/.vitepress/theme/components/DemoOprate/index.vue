<template>
  <button
    :class="[
      'demo-button',
      `demo-button--${type}`,
      `demo-button--${size}`,
      { 'is-disabled': disabled, 'is-loading': loading }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="demo-button__loading">
      <span class="demo-button__loading-indicator"></span>
    </span>
    <span v-if="icon && !loading" class="demo-button__icon">
      <slot name="icon"></slot>
    </span>
    <span class="demo-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  size?: 'large' | 'default' | 'small'
  disabled?: boolean
  loading?: boolean
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'default',
  disabled: false,
  loading: false,
  icon: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', event)
}
</script>

<style lang="scss" scoped>
.demo-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;

  // 类型样式
  &--default {
    background-color: #fff;
    border-color: #dcdfe6;
    color: #606266;

    &:active {
      background-color: #f2f3f5;
      border-color: #c6c8cc;
    }
  }

  &--primary {
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;

    &:active {
      background-color: #3a8ee6;
      border-color: #3a8ee6;
    }
  }

  &--success {
    background-color: #67c23a;
    border-color: #67c23a;
    color: #fff;

    &:active {
      background-color: #5daf34;
      border-color: #5daf34;
    }
  }

  &--warning {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;

    &:active {
      background-color: #cf9236;
      border-color: #cf9236;
    }
  }

  &--danger {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;

    &:active {
      background-color: #dd6161;
      border-color: #dd6161;
    }
  }

  &--info {
    background-color: #909399;
    border-color: #909399;
    color: #fff;

    &:active {
      background-color: #82848a;
      border-color: #82848a;
    }
  }

  // 尺寸样式
  &--large {
    padding: 12px 20px;
    font-size: 16px;
  }

  &--small {
    padding: 6px 12px;
    font-size: 12px;
  }

  // 状态样式
  &.is-disabled,
  &.is-loading {
    &:active {
      background-color: inherit;
      border-color: inherit;
    }
  }

  // 子元素样式
  &__loading {
    margin-right: 8px;

    &-indicator {
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 2px solid currentColor;
      border-radius: 50%;
      border-right-color: transparent;
      animation: button-loading 1s infinite linear;
    }
  }

  &__icon {
    margin-right: 4px;
  }
}

@keyframes button-loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
