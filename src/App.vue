<template>
  <div>
    <div id="cursor">
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

      <!-- <div class="dot"></div> -->
    </div>
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
      var cursor = document.getElementById('cursor');
      document.addEventListener('mousemove', getMouse);

      var cursorpos = { x: 0, y: 0 };

      setInterval(followMouse, 50);

      var mouse = { x: 0, y: 0 }; //mouse.x, mouse.y

      function getMouse(e) {
        mouse.x = e.pageX - 20;
        mouse.y = e.pageY - 20;
      }

      function followMouse() {
        //1. find distance X , distance Y
        var distX = mouse.x - cursorpos.x;
        var distY = mouse.y - cursorpos.y;
        //Easing motion
        //Progressive reduction of distance
        cursorpos.x += distX / 5;
        cursorpos.y += distY / 2;

        cursor.style.left = cursorpos.x + 'px';
        cursor.style.top = cursorpos.y + 'px';
      }
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
