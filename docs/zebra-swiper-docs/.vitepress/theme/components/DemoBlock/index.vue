<script lang="ts" setup>
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    expanded?: boolean
  }>(),
  {
    title: undefined,
    expanded: true
  }
)

const showCode = ref(props.expanded)
</script>

<template>
  <DemoCard :elevation="false" bordered block no-padding footer-align="left">
    <template #operate>
      <div :class="{ 'block-operate': $slots.operate }">
        <slot name="operate" />
      </div>
    </template>

    <template #content>
      <div class="content">
        <slot />
      </div>
    </template>

    <template v-if="$slots.code" #footer>
      <button
        class="block-button"
        :class="{ 'block-button-show': showCode }"
        @click="showCode = !showCode"
      >
        <span class="button-left">
          <svg
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.25 6.75L22.5 12L17.25 17.25M6.75 17.25L1.5 12L6.75 6.75M14.25 3.75L9.75 20.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          View Code
        </span>
        <svg
          :class="{ 'button-icon-rotate': !showCode }"
          class="button-icon"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 15.75L12 8.25L19.5 15.75"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <DemoCardExpand>
        <div v-show="showCode">
          <div class="expand-code-content">
            <slot name="code" />
          </div>
        </div>
      </DemoCardExpand>
    </template>
  </DemoCard>
</template>

<style lang="scss">
.block-operate {
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.block-button {
  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .button-left {
    color: #1f8fff;
    font-size: 14px;
    gap: 10px;
    display: flex;
    align-items: center;
  }

  .button-icon {
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .button-icon-rotate {
    transform: rotate(-180deg);
  }
}

.block-button:hover {
  background-color: var(--vp-c-gray-3);
  border-radius: 0 0 8px 8px;
}

.block-button-show:hover {
  background-color: var(--vp-c-gray-3);
  border-radius: 0;
}

.expand-code-content {
  div[class*='language'] {
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 0 0 8px 8px;
  }

  code {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
