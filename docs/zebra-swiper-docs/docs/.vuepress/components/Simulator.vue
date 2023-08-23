<template>
  <div
    :class="['zebra-doc-simulator', { 'zebra-doc-simulator-fixed': isFixed }]"
  >
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: "zebra-doc-simulator",

  props: {
    src: String,
  },

  computed: {
    isFixed() {
      return true;
    },

    simulatorStyle() {
      const height = 812;
      return {
        height: height + "px",
      };
    },
  },
};
</script>
