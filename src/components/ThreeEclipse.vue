<template>
  <div>
    <div class="layers">
      <div class="webgl-bg"></div>
    </div>
  </div>
</template>
<script>
import { initThree } from './threejs/loklok.js';

export default {
  name: 'three',
  data() {
    return {};
  },
  mounted() {
    initThree('.webgl-bg', '.layers');
  },
};
</script>
<style scoped>
.layers {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2500px;
}
</style>
