<template>
  <div>
    <div class="wrap py-100">
      <el-row :gutter="70">
        <el-col :md="12" :sm="24" :xs="24">
          <div class="why_bg_rgb">
            <h2 class="white">IT PAYS TO PLAY</h2>
            <img
              src="../../assets/images/cm/cm_p2e_icon_lab.png"
              alt=""
              class="iptp_img"
            />
          </div>

          <p class="lead_text_inf mt-30">
            After landing on Planet X, gather resources around you to build your
            camp. With the starter units and a bit of creativity, you can rival
            nearby colonies and fight for their land resources. Use your units
            to attack, defend and drill down into the planet's’ core. The longer
            you defend the land, the deeper you can mine - find better minerals
            and artifacts. Upgrade your units with the resources and trade them
            in for higher rarity units.
          </p>
        </el-col>

        <el-col :md="12" :sm="24" :xs="24">
          <div>
            <img
              src="../../assets/images/cm/cm_cockpit.png"
              alt="cockpit"
              width="100%"
            />
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="70" class="mt-150">
        <el-col :md="12" :sm="24" :xs="24">
          <div>
            <img
              src="../../assets/images/cm/cm_mechlab.png"
              alt="mechlab"
              width="100%"
            />
          </div>
        </el-col>
        <el-col :md="12" :sm="24" :xs="24">
          <div class="why_bg_rgb flex-justify-around-center">
            <h2 class="white">MECH LAB</h2>
            <img
              src="../../assets/images/cm/cm_text_icon_lab.png"
              alt="lab"
              class="mindg_img"
            />
          </div>

          <p class="lead_text_inf mt-30">
            Witness the newest applications of real science and breakthroughs in
            terraforming robots

            <span>
              Vote on new mechs that will be created, designers will work from
              the most inspirational mechanical / robotics engineering
              papers.</span
            >

            <span>
              Learn about our design process and the top notch team behind each
              mech.</span
            >
          </p>
        </el-col>
      </el-row>

      <el-row :gutter="50" class="mt-120">
        <el-col :md="12" :sm="24" :xs="24">
          <div style="height:300px" class="flex-align-center ">
            <img
              src="../../assets/images/Slash_icon.png"
              alt="slash"
              height="80px"
              style="margin-right:35px;"
            />
            <h1 class="white milkey_h">
              PARTICIPATE IN OUR VERY FIRST NFT PRESALE NOW
            </h1>
          </div>
        </el-col>
        <el-col :md="12" :sm="24" :xs="24">
          <div class="flex-center">
            <Sphere />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Sphere from '@/components/Sphere';

export default {
  name: 'WhyUs',
  components: {
    Sphere,
  },
};
</script>

<style lang="scss" scoped>
.why_bg_rgb {
  background-image: url('../../assets/images/cm/cm_text_deco_s.png');
  background-repeat: no-repeat;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: 50% 70px;
  padding-left: 40px;

  h2 {
    font-size: 30px;
  }
  .iptp_img {
    width: 60px;
    margin-right: 35px;
  }
  .mindg_img {
    width: 60px;
    margin-right: 110px;
  }
}

.lead_text_inf {
  font-size: 22px;
  line-height: 33px;

  span {
    display: block;
    margin-top: 20px;
  }
}
.milkey_h {
  font-size: 29px;
}
</style>
