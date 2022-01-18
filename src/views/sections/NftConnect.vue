<template>
  <div class="conn_bg">
    <div class="wrap">
      <!-- <div>
        <el-button @click="connectToWallet">we move</el-button>
      </div> -->
      <div class="flex-row-center">
        <div class="connect_div">
          <div class="conn_btn" @click="connectToWallet">
            <span>CONNECT TO WALLET</span>
          </div>
          <div class="toggle_dropdown animate__animated flex-row-center">
            <!-- <div class="legendary_nft active">
              <span>Legendary NFT 1</span>
            </div>

            <div class="legendary_nft unhover">
              <span>Legendary NFT 2</span>
            </div>

            <div class="legendary_nft unhover">
              <span>Legendary NFT 3</span>
            </div> -->
            <br /><br />
            <LoadingAnim style="margin-left: 15px;" />
            <br /><br />
            <p class="white">
              Loading your NFT <br />
              into your Garage
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingAnim from '../../components/LoadingAnim.vue';

export default {
  name: 'NftConnect',
  components: {
    LoadingAnim,
  },
  data() {
    return {
      conLoding: false,
    };
  },
  methods: {
    connectToWallet() {
      const toggleDiv = document.querySelector('.toggle_dropdown');
      const connect_div = document.querySelector('.connect_div');
      const connect_btn = document.querySelector('.conn_btn');

      connect_btn.classList.add('active');
      connect_div.classList.add('bg');
      toggleDiv.classList.add('animate__fadeInDown');
      toggleDiv.style.display = 'block';
    },
  },
};
</script>

<style lang="scss" scoped>
.conn_bg {
  background-image: url('../../assets/images/cm_metaverse_portal.png');
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 800px;
  font-family: TitilliumBold;
}
.conn_btn {
  background: #525252;

  height: 50px;
  width: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 0,
    94% 53%,
    89% 100%,
    11% 100%,
    3% 29%,
    0 0
  );

  &:hover {
    background: rgb(234, 0, 217);
    background: linear-gradient(
      90deg,
      rgba(234, 0, 217, 1) 0%,
      rgba(10, 189, 198, 1) 100%
    );
  }

  &.active {
    background: rgb(234, 0, 217);
    background: linear-gradient(
      90deg,
      rgba(234, 0, 217, 1) 0%,
      rgba(10, 189, 198, 1) 100%
    );
  }

  span {
    color: whitesmoke;
  }
}
.legendary_nft {
  color: whitesmoke;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    94% 1%,
    100% 23%,
    100% 100%,
    0 100%,
    0 35%,
    0 0
  );

  &.active {
    background: rgb(12, 12, 12);
    height: 50px;
    width: 165px;
  }

  &.unhover {
    background: grey;
    width: 145px;
  }

  &:hover {
    background: rgb(12, 12, 12);
    height: 50px;
    width: 165px;
  }
}
.toggle_dropdown {
  display: none;
}
.connect_div {
  width: 215px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.bg {
    background: #ffffff36;
  }
}
</style>
