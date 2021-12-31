<template>
  <div ref="sphereContainer" class="sphere-container">
    <!-- html here -->
  </div>
</template>
<script>
import { initThree } from './threejs/sphere.js';
export default {
  name: 'three',
  data() {
    return {};
  },
  mounted() {
    initThree({ dom: this.$refs.sphereContainer });
  },
};
</script>
<style scoped>
.sphere-container {
  width: 500px;
  height: 300px;
}
</style>
