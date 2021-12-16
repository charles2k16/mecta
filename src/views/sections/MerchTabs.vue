<template>
  <div class="tabs_div">
    <!-- <canvas id="scene"></canvas> -->
    <el-tabs type="card" class="el-tab_div">
      <el-tab-pane>
        <span slot="label">WEAPON</span>

        <div class="merch_tab_bg">
          <br />
          <h3 class="ml-20" style="color:grey;">Genesis Unit</h3>
          <section class="demo-3 flex-justify-evenly-center">
            <div class="box merch_nft">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <line class="top" x1="0" y1="0" x2="900" y2="0" />
                <line class="left" x1="0" y1="460" x2="0" y2="-920" />
                <line class="bottom" x1="300" y1="460" x2="-600" y2="460" />
                <line class="right" x1="300" y1="0" x2="300" y2="1380" />
              </svg>
              <div class="innfo_nft">
                <img
                  src="../../assets/images/tk_box1.png"
                  alt=""
                  class="nft_im"
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
                  <span class="d-block star_txt">1 x [3-star] or better</span>

                  <button class="merch_tab_btn mt-10">
                    <b> BUY</b> <br />
                    <span>0.3 eth</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="box merch_nft">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <line class="top" x1="0" y1="0" x2="900" y2="0" />
                <line class="left" x1="0" y1="460" x2="0" y2="-920" />
                <line class="bottom" x1="300" y1="460" x2="-600" y2="460" />
                <line class="right" x1="300" y1="0" x2="300" y2="1380" />
              </svg>
              <div class="innfo_nft">
                <img
                  src="../../assets/images/tk_box1.png"
                  alt=""
                  class="nft_im"
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
                  <span class="d-block star_txt">1 x [3-star] or better</span>

                  <button class="merch_tab_btn mt-10">
                    <b> BUY</b> <br />
                    <span>0.3 eth</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- /grid -->
          </section>

          <section class="  demo-3 flex-justify-evenly-center">
            <div class="box merch_nft">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <line class="top" x1="0" y1="0" x2="900" y2="0" />
                <line class="left" x1="0" y1="460" x2="0" y2="-920" />
                <line class="bottom" x1="300" y1="460" x2="-600" y2="460" />
                <line class="right" x1="300" y1="0" x2="300" y2="1380" />
              </svg>
              <div class="innfo_nft">
                <img
                  src="../../assets/images/tk_box1.png"
                  alt=""
                  class="nft_im"
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
                  <span class="d-block star_txt">1 x [3-star] or better</span>

                  <button class="merch_tab_btn mt-10">
                    <b> BUY</b> <br />
                    <span>0.3 eth</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="box merch_nft">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <line class="top" x1="0" y1="0" x2="900" y2="0" />
                <line class="left" x1="0" y1="460" x2="0" y2="-920" />
                <line class="bottom" x1="300" y1="460" x2="-600" y2="460" />
                <line class="right" x1="300" y1="0" x2="300" y2="1380" />
              </svg>
              <div class="innfo_nft">
                <img
                  src="../../assets/images/tk_box1.png"
                  alt=""
                  class="nft_im"
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
                  <span class="d-block star_txt">1 x [3-star] or better</span>

                  <button class="merch_tab_btn mt-10">
                    <b> BUY</b> <br />
                    <span>0.3 eth</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- /grid -->
          </section>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">TOKEN PRE-SALE</span>
        TOKEN PRE-SALE</el-tab-pane
      >
      <el-tab-pane>
        <span slot="label">AUCTIONNS</span>
        AUCTIONS
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: 38% 38%;
  background-image: url('../../assets/images/cm/cm_cockpit.png');
}
.merch_nft {
  cursor: url(https://abs.twimg.com/emoji/v2/72x72/1f525.png) 36 36, auto;

  .innfo_nft {
    text-align: center;
    margin-top: 70px;

    .nft_im {
      width: 180px;
    }
  }
  .merch_tk_stars {
    // margin-top: -500px;
    width: 130px;
    margin: 0 auto;
    z-index: 999;
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

  .star_txt {
    color: #d9d9d9;
  }

  .merch_tab_btn {
    width: 170px;
    background: #363644db;
    border: 1px solid #363644;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    color: whitesmoke;

    span {
      display: block;
      color: grey;
      margin-top: 4px;
    }
  }
}
</style>
