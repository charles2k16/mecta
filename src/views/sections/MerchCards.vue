<template>
  <div class="merch_card_div">
    <el-carousel type="card" trigger="click" :interval="1200000" arrow="never">
      <el-carousel-item v-for="(pic, index) in gallery" :key="index">
        <figure class="snip1295">
          <img :src="getImgUrl(pic)" v-bind:alt="pic" />
          <div class="border one">
            <div></div>
          </div>
          <div class="border two">
            <div></div>
          </div>
        </figure>
      </el-carousel-item>
    </el-carousel>

    <div class="mt-70 flex-center button_grp">
      <button class="btn_flex_round rgb pulse mr-mb">
        <a href="https://www.google.com" target="_blank">Metaverse</a>
      </button>
      <button class="btn_flex_round slide dark">
        <a href="https://www.google.com" target="_blank"> Discord Chat</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MerchCards',
  data() {
    return {
      gallery: [
        'CM_gallery_Avatar.png',
        'CM_gallery_MiningMech_backview.png',
        'CM_gallery_Pilot.png',
        'CM_Gallery_RedMech_backview.png',
        'CM_gallery_corridor.png',
        'CM_gallery_DataRoom.png',
        'CM_gallery_CyberWall.png',
        'CM_gallery_Pilot_walkingout.png',
        'CM_gallery_RedMech_beautyshot.png',
        'CM_gallery_RedMech_cockpit.png',
        'CM_Gallery_RedMech_control_03.jpg',
        'CM_gallery_RedMech_Neeling.png',
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      return require('../../assets/images/gallery/' + pic);
    },
  },
};
</script>

<style lang="scss" scoped>
.pulse:hover {
  animation: pulse 1s;
  transform: translateY(-0.25em);
  box-shadow: 0 0 0 2em rgba(#fff, 0);
}
.slide:hover {
  box-shadow: inset 12.9em 0 0 0 var(--hover);
  transform: translateY(-0.25em);
}
.pulse:active {
  transform: translateX(-0.25em);
  box-shadow: 0 0 0 6em rgba(rgb(173, 54, 54), 0);
}
.slide:active {
  animation: pulse 1s;
  transform: translateX(-0.25em);
  box-shadow: 0 0 0 6em rgba(rgb(173, 54, 54), 0);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}

$colors: (
  pulse: #9774cc,
  slide: #000000,
);

@each $button, $color in $colors {
  .#{$button} {
    --color: #{$color};
    --hover: #{adjust-hue($color, 45deg)};
  }
}

button {
  transition: 0.25s;
  &:hover,
  &:focus {
    border-color: var(--hover);
    color: #fff;
  }
}
.button_grp {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.mr-mb {
  margin-right: 180px;
}
.merch_card_div {
  width: 95%;
  margin: 0 auto 0 60px;
}
.snip1295 {
  position: relative;
  overflow: hidden;
  padding: 4px;
  box-shadow: none !important;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
}
.snip1295 img {
  width: 94%;
  height: 90%;
  vertical-align: top;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.snip1295 .border {
  position: absolute;
}

.snip1295 .border:after,
.snip1295 .border div:after,
.snip1295 .border div:before,
.snip1295 .border:before {
  position: absolute;
  content: '';
  display: block;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  // border: none !important;
}

.snip1295 .border:before,
.snip1295 .border:after {
  width: 0px;
  height: 0px;
}
.snip1295 .border div:before,
.snip1295 .border div:after {
  width: 0px;
  height: 0px;
}
.snip1295 .border.one {
  left: -2px;
  top: -2px;
  right: 90px;
  bottom: 80px;
}
.snip1295 .border.one:before,
.snip1295 .border.one div:before {
  left: 0;
  top: 0;
  border-top: 6px solid;
  border-left: 6px solid;
  border-width: 7px;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #b48efa, #6e3dcf);
}
.snip1295 .border.one:after,
.snip1295 .border.one div:after {
  bottom: 10px;
  right: 0;
}
.snip1295 .border.two {
  left: 60px;
  top: 40px;
  right: 35px;
  bottom: 41px;
}
.snip1295 .border.two:before,
.snip1295 .border.two div:before {
  right: 15px;
  top: 10px;
  border-right: 5px solid;
  border-width: 5px;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #b48efa, #6e3dcf);
}
.snip1295 .border.two:after,
.snip1295 .border.two div:after {
  bottom: -5px;
  left: -15px;
  border-bottom: 5px solid;
  border-width: 5px;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #b48efa, #6e3dcf);
}

.snip1295:hover .border:before,
.snip1295:hover .border:after {
  width: 100%;
}
.snip1295:hover .border div:before,
.snip1295:hover .border div:after {
  height: 100%;
}

.el-carousel__item--card.is-active .snip1295 .border:before,
.el-carousel__item--card.is-active .snip1295 .border:after {
  width: 100%;
}
.el-carousel__item--card.is-active .snip1295 .border div:before,
.el-carousel__item--card.is-active .snip1295 .border div:after {
  height: 100%;
}
</style>
