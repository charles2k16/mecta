<template>
  <div class="three">
    <canvas id="demo-three" @click="getE"></canvas>
  </div>
</template>
<script>
import { initThree } from './threejs/3demo.js';

export default {
  name: 'three',
  data() {
    return {};
  },
  mounted() {
    initThree('#demo-three');
  },
  beforeDestroy() {},
  methods: {},
};
</script>
<style scoped>
#demo-three {
  width: 100%;
  height: 700px;
  /* left: 130px; */
  top: 0;
}
</style>
