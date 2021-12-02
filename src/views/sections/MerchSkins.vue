<template>
  <div>
    <el-row :gutter="50">
      <el-col :md="12"> </el-col>

      <el-col :md="12">
        <h2>Description</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
          cumque cupiditate voluptatem explicabo vitae quas laboriosam. Debitis,
          ex labore. Quas doloremque placeat nostrum, illum dicta tempore saepe
          omnis eligendi nam?
        </p>
      </el-col>
    </el-row>

    <!-- <div class="mt-70">
      <div class="merch_skins">
        <div v-for="(pic, index) in gallery" :key="index" class="merch_card">
          <img :src="getImgUrl(pic)" v-bind:alt="pic" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'MerchSkins',
};
</script>
