<template>
  <div>
    <vs-row>
      <vs-col :w="12" :xs="12" :sm="12">
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
      </vs-col>
    </vs-row>

    <el-dialog :visible.sync="showVideo" fullscreen>
      <div>
        <iframe
          width="100%"
          style="height: 100vh;"
          src="https://www.youtube.com/embed/IrEqexa0yOA?autoplay=1&vq=1440&loop=1&playlist=IrEqexa0yOA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
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
  margin-top: 350px;
  display: flex;
  justify-content: center;
  margin-left: 30px;

  .btn_flex_btn {
    flex-shrink: 0;
  }
}
.btn_flex_btn.purple {
  margin-right: 50px;
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
