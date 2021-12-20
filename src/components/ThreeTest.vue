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
  height: 900px;

  /* background: black; */
  /* position: absolute;
  left: 0;
  top: 0;
  z-index: -1; */

  /* left: 130px; */
  top: 0;
  left: 0;
}
</style>
