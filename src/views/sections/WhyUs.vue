<template>
  <div class="wrap py-100">
    <el-row :gutter="50">
      <el-col :md="12">
        <div class="why_bg_rgb">
          <h2 class="white">IT PAYS TO PLAY</h2>
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
        <div class="why_bg_rgb">
          <h2 class="white">MIND GAME</h2>
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
        <div>
          <h2 class="white">PARTICIPATE IN OUR VERY FIRAT NFT PRESALE NOW</h2>
        </div>
        <el-col :md="12">
          <!-- <div style="height: 380px; border:1px solid grey"></div> -->
        </el-col>
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
  // background-image: url('../../assets/images/cm/cm_text_deco.png');
  // width: 100%;

  h2 {
    font-size: 30px;
  }
}
.lead_text_inf {
  font-size: 1.1rem;
  text-align: justify;
  line-height: 1.7rem;
  color: #c4d0fa;
}
</style>
