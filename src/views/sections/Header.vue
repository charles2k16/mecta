<template>
  <div>
    <el-row>
      <el-col :md="24" :xs="24" :sm="24">
        <div>
          <div class="hero_btn_group">
            <button class="btn_flex_btn purple">
              Register
            </button>
            <button class="btn_flex_btn2 trans" @click="showVideo = true">
              <img
                src="../../assets/images/white_play_02.png"
                alt="play"
                width="16px"
                style="margin-right:10px;"
              />
              Trailer
            </button>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="showVideo" fullscreen destroy-on-close>
      <Trailer v-if="showVideo" />
    </el-dialog>
  </div>
</template>

<script>
import Trailer from '../../components/Trailer.vue';

export default {
  name: 'Header',
  components: {
    Trailer,
  },
  data() {
    return {
      showVideo: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero_btn_group {
  margin-top: 260px;
  display: flex;
  justify-content: center;
  margin-left: 30px;

  .btn_flex_btn {
    flex-shrink: 0;
  }
}
.btn_flex_btn.purple {
  margin-right: 90px;
  border-top: 1px solid;
  border-left: 1px solid;
  border-width: 2px;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    rgba(144, 106, 196, 1) 27%,
    rgba(74, 135, 242, 1) 79%
  );
  background: rgb(144, 106, 196);
  background: linear-gradient(
    90deg,
    rgba(144, 106, 196, 1) 27%,
    rgba(74, 135, 242, 1) 79%
  );
}
</style>
