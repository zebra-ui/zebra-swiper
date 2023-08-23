<template>
  <demo-home :list="list" />
</template>

<script>
import config from "../../common/js/config.js";
import DemoHome from "../../components/DemoHome/DemoHome.vue";
export default {
  components: {
    DemoHome,
  },
  data() {
    return {
      list: config,
    };
  },
};
</script>

<style scoped lang="scss"></style>
