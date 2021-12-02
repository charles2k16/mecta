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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          deserunt reiciendis dolorum blanditiis suscipit sapiente earum quis,
          quas et omnis amet. Doloremque minima ut inventore sequi, corrupti quo
          reprehenderit fugit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Laboriosam quis ratione modi numquam at. Minima
          nesciunt nemo enim cupiditate odio impedit, voluptate repellat, quos
          aliquam asperiores facere libero sed non. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ducimus, numquam architecto nisi autem
          veritatis consectetur aspernatur esse mollitia modi voluptatibus.
        </p>
      </el-col>

      <el-col :md="12">
        <div>
          <img
            src="../../assets/images/cm/cm_cockpit.png"
            alt="cockpit"
            height="390px"
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
            height="390px"
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          deserunt reiciendis dolorum blanditiis suscipit sapiente earum quis,
          quas et omnis amet. Doloremque minima utr inventore sequi, corrupti
          quo reprehenderit fugit. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Laboriosam quis ratione modi numquam at. Minima
          nesciunt nemo enim cupiditate odio impedit, voluptate repellat, quos
          aliquam asperiores facere libero sed non. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ducimus, numquam architecto nisi autem
          veritatis consectetur aspernatur esse mollitia modi voluptatibus.
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
        <div>
          <img
            src="../../assets/images/cm/cm_particle_sphere.jpg"
            alt="sphere"
            height="300px"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'WhyUs',
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
.lead_text_inf {
  font-size: 1.1rem;
  text-align: justify;
  line-height: 1.7rem;
  color: #c4d0fa;
}
</style>
