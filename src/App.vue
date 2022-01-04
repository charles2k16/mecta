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
    window.onscroll = function() {
      scrollFix();
    };
    var header = document.getElementById('navbar');
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function scrollFix() {
      console.log('scrolled');
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
    this.onMouseMove();
  },
  unmounted() {
    document.removeEventListener('mousemove', this.onMouseMove());
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
