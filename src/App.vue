<template>
  <div>
    <div class="cursor">
      <svg
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        class="outline"
        style="left: 635px; top: 510px;"
      >
        <path
          d="M33 1h13a3 3 0 013 3v13h0m0 16v6.653a3 3 0 01-1.007 2.242L40 49h0-8m-15 0H4a3 3 0 01-3-3V33h0m0-15v-7.757a3 3 0 01.879-2.122L9 1h8"
          stroke="#FFF"
          stroke-width="1.5"
          fill="none"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
    <div class="cursor2"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.onMouseMove();
  },
  unmounted() {
    document.removeEventListener('mousemove', this.onMouseMove);
  },
  methods: {
    onMouseMove() {
      var cursor = document.querySelector('.cursor');
      var cursorinner = document.querySelector('.cursor2');

      document.addEventListener('mousemove', function(e) {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      });

      document.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
      });

      document.addEventListener('mousedown', function() {
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover');
      });

      document.addEventListener('mouseup', function() {
        cursor.classList.remove('click');
        cursorinner.classList.remove('cursorinnerhover');
      });
    },
  },
};
</script>
<style>
/* .cursor .outline {
  position: fixed;
  pointer-events: none;
  z-index: 10;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: opacity 0.3s;
}
.cursor .dot_wrapper {
  position: fixed;
  z-index: 10;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
} */
</style>
