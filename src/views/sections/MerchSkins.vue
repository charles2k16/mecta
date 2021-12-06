<template>
  <div class="mt-100 py-100">
    <el-row :gutter="20">
      <el-col :md="12">
        <div
          style="width:400px;height:300px; border:1px solid black; background: black"
        ></div
      ></el-col>

      <el-col :md="12">
        <div class="merch_skin_div">
          <h2>Description:</h2>

          <p class="mt-10">
            Witness the newest applications of real science and breakthroughs in
            terraforming robots
          </p>

          <h2 class="mt-40">Skin rarity:</h2>
        </div>
      </el-col>
    </el-row>

    <div class="mt-70">
      <el-row :gutter="50">
        <el-col v-for="skin in 8" :key="skin" :xs="12" :sm="12" :md="6">
          <div
            style="width:200px; border:1px solid red; height:200px;margin-top:60px;background:black;"
          >
            <h2>Skin</h2>
          </div>

          <!-- <div
            style="height:200px;width:200px;background:black;border:1px solid
          red;"
          ></div> -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MerchSkins',
  data() {
    return {
      skis: ['CM_gallery_Avatar.png'],
    };
  },
};
</script>

<style lang="scss" scoped>
.merch_skin_div {
  h2 {
    color: whitesmoke;
    font-size: 30px;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: #c4d0fa;
  }
}
</style>
