<template>
  <div>
    <vs-row>
      <vs-col :w="12" :xs="12" :sm="12">
        <div>
          <div class="mt-150 hero_btn_group">
            <button class="mr-10 btn_flex_btn purple">
              Register
            </button>
            <button class="btn_flex_btn trans" @click="showVideo == true">
              Trailer
            </button>
          </div>
        </div>
      </vs-col>
    </vs-row>

    <el-dialog title="" :visible.sync="showVideo" fullscreen center>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showVideo: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero_btn_group {
  display: flex;
  justify-content: center;

  .btn_flex_btn {
    flex-shrink: 0;
  }
}
.btn_flex_btn.purple {
  border-top: 1px solid;
  border-left: 1px solid;
  border-width: 2px;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    76.91deg,
    rgb(76, 232, 190) -125.56%,
    rgb(133, 67, 194) 116.11%
  );
  background: linear-gradient(
    76.91deg,
    rgb(76, 232, 190) -125.56%,
    rgb(133, 67, 194) 116.11%
  );
}
.btn_flex_btn.trans {
  background: transparent;
  border: 2px solid white;
}
</style>
