<template>
  <div class="merch_card_div">
    <el-carousel type="card" trigger="click" :interval="1200000" arrow="never">
      <el-carousel-item v-for="(pic, index) in gallery" :key="index">
        <img :src="getImgUrl(pic)" v-bind:alt="pic" class="caro_img" />
      </el-carousel-item>
    </el-carousel>

    <div class="mt-70 flex-center button_grp">
      <button class="btn_flex_round rgb pulse mr-mb">
        <a href="https://www.google.com" target="_blank">Metaverse</a>
      </button>
      <button class="btn_flex_round dark pulse">
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
.pulse:active {
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
  margin: 0 auto 0 40px;
}

.caro_img {
  width: 100%;
}
.el-carousel__item--card.is-in-stage .caro_img:hover {
  border: 3px solid black;
  padding: 2px 2px;
  min-height: 4px;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 8s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ea00d9' /%3E%3Cstop offset='25%25' stop-color='%230abdc6' /%3E%3Cstop offset='50%25' stop-color='%230abdc6' /%3E%3Cstop offset='100%25' stop-color='%234a87f2' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E")
    1;
}
.el-carousel__item--card.is-active .caro_img {
  border: 3px solid black;
  padding: 2px 2px;
  min-height: 4px;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 8s linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ea00d9' /%3E%3Cstop offset='25%25' stop-color='%230abdc6' /%3E%3Cstop offset='50%25' stop-color='%230abdc6' /%3E%3Cstop offset='100%25' stop-color='%234a87f2' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E")
    1;
}
</style>
