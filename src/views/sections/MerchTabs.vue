<template>
  <div class="tabs_div">
    <el-tabs type="card" class="el-tab_div">
      <el-tab-pane>
        <span slot="label">WEAPON</span>
        <div style="paddinng: 50px;">
          <div class="mt-20 merch_tab_bg">
            <h5>Genesis Unit</h5>
            <div class="mt-50 flex-justify-evenly-center">
              <div class="merch_nft">
                <img
                  src="../../assets/images/tk_box1.png"
                  alt=""
                  width="170px"
                />
                <div class="center mt--10">
                  <span class="merch_tk_stars">
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-off"></i>
                  </span>
                </div>

                <div class="center mt-20">
                  <span class="d-block">1 x [3-star] or better</span>

                  <button class="merch_tab_btn mt-10">
                    <b> BUY</b> <br />
                    <span>0.3 eth</span>
                  </button>
                </div>
              </div>
              <div class="merch_nft">
                <img
                  src="../../assets/images/tk_box1.png"
                  alt=""
                  width="170px"
                />
                <div class="center mt--10">
                  <span class="merch_tk_stars">
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-off"></i>
                  </span>
                </div>

                <div class="center mt-20">
                  <span class="d-block">1 x [3-star] or better</span>

                  <button class="merch_tab_btn mt-10">
                    <b> BUY</b> <br />
                    <span>0.3 eth</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="mt-100 flex-justify-evenly-center">
              <div class="merch_nft">
                <img
                  src="../../assets/images/tk_box1.png"
                  alt=""
                  width="170px"
                />
                <div class="center mt--10">
                  <span class="merch_tk_stars">
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-off"></i>
                  </span>
                </div>

                <div class="center mt-20">
                  <span class="d-block">1 x [3-star] or better</span>

                  <button class="merch_tab_btn mt-10">
                    <b> BUY</b> <br />
                    <span>0.3 eth</span>
                  </button>
                </div>
              </div>
              <div class="merch_nft">
                <img
                  src="../../assets/images/tk_box1.png"
                  alt=""
                  width="170px"
                />
                <div class="center mt--10">
                  <span class="merch_tk_stars">
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-off"></i>
                  </span>
                </div>

                <div class="center mt-20">
                  <span class="d-block">1 x [3-star] or better</span>

                  <button class="merch_tab_btn mt-10">
                    <b> BUY</b> <br />
                    <span>0.3 eth</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">TOKEN PRE-SALE</span>
        TOKEN PRE-SALE</el-tab-pane
      >
      <el-tab-pane>
        <span slot="label">AUCTIONNS</span>
        AUCTIONNS
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'MerchTabs',
};
</script>

<style lang="scss" scoped>
.tabs_div {
  padding: 1px;
  box-sizing: border-box;
  position: relative;
  background: grey;
  -webkit-clip-path: polygon(
    0 0,
    96% 0,
    100% 5%,
    100% 100%,
    83% 100%,
    4% 100%,
    0 94%,
    0 20%
  );
  clip-path: polygon(
    0 0,
    96% 0,
    100% 5%,
    100% 100%,
    83% 100%,
    4% 100%,
    0 94%,
    0 20%
  );
}
.el-tab_div {
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: #0c0f20;
  -webkit-clip-path: polygon(
    0 0,
    96% 0,
    100% 5%,
    100% 100%,
    83% 100%,
    4% 100%,
    0 94%,
    0 20%
  );
  clip-path: polygon(
    0 0,
    96% 0,
    100% 5%,
    100% 100%,
    83% 100%,
    4% 100%,
    0 94%,
    0 20%
  );
}
.merch_nft {
  cursor: url(https://abs.twimg.com/emoji/v2/72x72/1f525.png) 36 36, auto;

  .merch_tk_stars {
    margin-top: -500px;
    border-radius: 30px;
    padding: 4px 15px;
    background: rgb(70, 171, 234);
    background: linear-gradient(
      90deg,
      rgba(70, 171, 234, 1) 10%,
      rgba(231, 78, 237, 1) 100%
    );

    i {
      color: white;
      font-size: 18px;
      margin-right: 4px;
    }
  }

  .merch_tab_btn {
    width: 200px;
    background: #363644;
    border: 1px solid #363644;
    color: whitesmoke;

    span {
      display: block;
      color: grey;
      margin-top: 4px;
    }
  }
}
</style>
