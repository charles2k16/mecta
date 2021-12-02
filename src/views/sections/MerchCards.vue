<template>
  <div>
    <div class="merch_card_div">
      <div v-for="(pic, index) in gallery" :key="index" class="merch_card">
        <img :src="getImgUrl(pic)" v-bind:alt="pic" />
      </div>
    </div>

    <div class="mt-40 flex-center">
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
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  margin-bottom: 20px;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }

  .merch_card {
    flex: 0 0 auto;
    margin-right: 40px;
    margin-bottom: 30px;

    img {
      width: 406px;
      border-radius: 5px;
    }
  }
}
</style>
