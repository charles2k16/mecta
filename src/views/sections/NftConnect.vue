<template>
  <div class="conn_bg">
    <div>
      <div class="connect_div">
        <el-dropdown trigger="click">
          <span
            ><div class="conn_btn">
              <span>CONNECT TO WALLET</span>
            </div></span
          >

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><div class="legendary_nft">
                <span>Legendary NFT 1</span>
              </div></el-dropdown-item
            >
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NftConnect',
};
</script>

<style lang="scss" scoped>
.conn_bg {
  background-image: url('../../assets/images/cm_metaverse_portal.png');
  background-size: cover;
  height: 800px;
}
.conn_btn {
  background: rgb(234, 0, 217);
  background: linear-gradient(
    90deg,
    rgba(234, 0, 217, 1) 0%,
    rgba(10, 189, 198, 1) 100%
  );
  height: 50px;
  width: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 0,
    94% 53%,
    89% 100%,
    11% 100%,
    3% 29%,
    0 0
  );

  span {
    color: whitesmoke;
  }
}
.legendary_nft {
  background: rgb(12, 12, 12);
  color: whitesmoke;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 215px;
  margin: 20px auto;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    94% 1%,
    100% 23%,
    100% 100%,
    0 100%,
    0 35%,
    0 0
  );
}
.connect_div {
  // background: #ffffff36;
  width: 280px;
  height: 350px;
  margin: 0 auto;
  font-family: TitilliumBold;
}
</style>
