<template>
  <div>
    <canvas class="canvas" id="particles">
      This is a canvas. Sorry your browser does not support this tag
    </canvas>
  </div>
</template>
<script>
import { default as Particles } from './threejs/third.js';

export default {
  name: 'three',
  data() {
    return {};
  },
  mounted() {
    new Particles('particles');
  },
};
</script>
<style scoped>
#particles {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2500px;
}
</style>
