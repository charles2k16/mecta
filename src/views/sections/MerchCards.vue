<template>
  <div class="merch_card_div">
    <el-carousel type="card" trigger="click" :interval="1200000">
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

    <div class="mt-70 flex-center">
      <button class="mr-10 btn_flex_btn round rgb">
        Metaverse
      </button>
      <button class="btn_flex_btn round dark">
        Discord Chat
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
.merch_card_div {
  width: 80%;
  margin: 0 auto;
}

.merch_card {
  width: 610px;
  // :hover {
  //   cursor: pointer;
  // }

  .merch_card_img {
    width: 610px;
    border-radius: 2px;
    // transition: transform 0.2s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-box-sizing: padding-box;
    box-sizing: padding-box;
  }
  .merch_card_img:hover {
    transform: scale(1.3);
    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
}
.snip1295 {
  position: relative;
  overflow: hidden;
  max-width: 615px;
  width: 100%;
  height: 100%;
  padding: 4px;
  box-shadow: none !important;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
}
.snip1295 img {
  width: 600px;
  vertical-align: top;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.snip1295 .border {
  position: absolute;
  opacity: 0.45;
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
  left: 0;
  top: 0;
  right: 12px;
  bottom: 12px;
}
.snip1295 .border.one:before,
.snip1295 .border.one div:before {
  // left: 0;
  // top: 0;
  border: 2px solid #7047f5;
  // border-top-color: #7047f5;
  // border-left-color: #7047f5;
  // border-style: solid;
  // border-top-width: 4px;
  // border-left-width: 4px;
  // border-bottom-width: 0px;
  // border-right-width: 0px;
}
.snip1295 .border.one:after,
.snip1295 .border.one div:after {
  bottom: 0;
  right: 0;
  border: 2px solid #7047f5;
  // border-right: none;
}
.snip1295 .border.two {
  left: 12px;
  top: 12px;
  right: 0;
  bottom: 0;
}
.snip1295 .border.two:before,
.snip1295 .border.two div:before {
  right: 0;
  top: 0;
  border: 1px solid white;
}
.snip1295 .border.two:after,
.snip1295 .border.two div:after {
  bottom: 0;
  left: 0;
  border: 1px solid white;
  // border-left: none;
}

.snip1295:hover .border:before,
.snip1295.hover .border:before,
.snip1295:hover .border:after,
.snip1295.hover .border:after {
  width: 100%;
}
.snip1295:hover .border div:before,
.snip1295.hover .border div:before,
.snip1295:hover .border div:after,
.snip1295.hover .border div:after {
  height: 100%;
}
</style>
