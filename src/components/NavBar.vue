<template>
  <div>
    <div class="header_nav">
      <div class="nav flex-justify-between-center">
        <h2>CRYPTO MECH</h2>

        <div class="flex-justify-between-center h_staking">
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
        </div>

        <div>
          <button class="">Read Whitepaper</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    active: '',
    routeName: 'Home',
    showComingSoon: false,
  }),
  created() {
    this.routeName =
      this.$route.name == 'Home'
        ? 'Home'
        : this.$route.name == 'Presale'
        ? 'Presale'
        : 'Foundary';
  },
};
</script>

<style lang="scss" scoped>
.header_nav {
  height: 70px;
  background: #171a2d;

  .nav {
    width: 940px;
    margin-right: auto;
    margin-left: auto;
    height: 70px;

    .h_staking {
      border-radius: 20px;
      padding: 0 0 0 15px;

      h3 {
        font-size: 14px;
        margin-right: 15px;
        color: red;
        font-weight: bold;
      }

      el-button {
        margin-left: 10px;
      }
    }
  }
}
</style>
