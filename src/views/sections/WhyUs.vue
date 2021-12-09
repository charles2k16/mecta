<template>
  <div class="wrap py-100">
    <el-row :gutter="50">
      <el-col :md="12">
        <div class="why_bg_rgb">
          <h2 class="white">IT PAYS TO PLAY</h2>
          <img
            src="../../assets/images/cm/cm_p2e_icon_lab.png"
            alt=""
            class="iptp_img"
          />
        </div>

        <p class="lead_text_inf mt-20">
          After landing on Planet X, gather resources around you to build your
          camp. With the starter units and a bit of creativity, you can rival
          nearby colonies and fight for their land resources. Use your units to
          attack, defend and drill down into the planet's’ core. The longer you
          defend the land, the deeper you can mine - find better minerals and
          artifacts. Upgrade your units with the resources and trade them in for
          higher rarity units.
        </p>
      </el-col>

      <el-col :md="12">
        <div>
          <img
            src="../../assets/images/cm/cm_cockpit.png"
            alt="cockpit"
            height="360px"
          />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="50" class="mt-100">
      <el-col :md="12">
        <div>
          <img
            src="../../assets/images/cm/cm_mechlab.png"
            alt="mechlab"
            height="370px"
          />
        </div>
      </el-col>
      <el-col :md="12">
        <div class="why_bg_rgb flex-justify-around-center">
          <h2 class="white">MIND GAME</h2>
          <img
            src="../../assets/images/cm/cm_text_icon_lab.png"
            alt="lab"
            class="mindg_img"
          />
        </div>

        <p class="lead_text_inf mt-20">
          Witness the newest applications of real science and breakthroughs in
          terraforming robots
          <br /><br />
          Vote on new mechs that will be created, designers will work from the
          most inspirational mechanical / robotics engineering papers.
          <br /><br />
          Learn about our design process and the top notch team behind each
          mech.
        </p>
      </el-col>
    </el-row>

    <el-row :gutter="50" class="mt-100">
      <el-col :md="12">
        <div style="height:300px" class="flex-align-center ">
          <h1 class="white">PARTICIPATE IN OUR VERY FIRST NFT PRESALE NOW</h1>
        </div>
      </el-col>
      <el-col :md="12">
        <!-- <div>
          <img
            src="../../assets/images/cm/cm_particle_sphere.jpg"
            alt="sphere"
            height="300px"
          />
        </div> -->
        <ThreeTest />
        <div>
          <div id="canvas"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ThreeTest from '@/components/ThreeTest';

export default {
  name: 'WhyUs',
  components: {
    ThreeTest,
  },
};
</script>

<style lang="scss" scoped>
.why_bg_rgb {
  background-image: url('../../assets/images/cm/cm_text_deco_s.png');
  background-repeat: no-repeat;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: 30px;
  }
  img {
    width: 50px;
  }
  .iptp_img {
    height: 25px;
  }
}
</style>
