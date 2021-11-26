<template>
  <div>
    <vs-row>
      <vs-col :w="12" :xs="12" :sm="12">
        <div style="height:150px;">
          <div class="mt-150 hero_btn_group">
            <button class="mr-10 btn_flex_btn purple">
              Register
            </button>
            <button class="btn_flex_btn">
              Trailer
            </button>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
  background: linear-gradient(
    76.91deg,
    rgb(76, 232, 190) -125.56%,
    rgb(133, 67, 194) 116.11%
  );
}
</style>
