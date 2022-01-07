<template>
  <div>
    <img
      src="../../assets/images/corner_piece.png"
      alt="corner"
      class="corner"
    />
    <div class="short_rule"></div>
    <el-tabs type="card" v-model="activeTab">
      <el-tab-pane name="mech">
        <span slot="label"
          >MECH
          <!-- <div class="tab_line"></div> -->
        </span>
        <div class="hr_line"></div>
        <div class="merch_tab_bg">
          <h3 class="ml-20 gen">
            Genesis Unit
          </h3>
          <section class="mt-20 demo-3 flex-justify-evenly-center">
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
                  src="../../assets/images/cm/F17.png"
                  alt=""
                  class="nft_im"
                  id="nft_im"
                />
                <img
                  src="../../assets/images/cm/BlindBox_Black2.gif"
                  alt="gif"
                  class="video_p"
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
                    <b> BUY</b>
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
                  src="../../assets/images/cm/F17.png"
                  alt=""
                  class="nft_im"
                  id="nft_im"
                />
                <img
                  src="../../assets/images/cm/BlindBox_Black2.gif"
                  alt="gif"
                  class="video_p"
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
                    <b> BUY</b>
                    <span>0.3 eth</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section class=" demo-3 flex-justify-evenly-center">
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
                  src="../../assets/images/cm/F17.png"
                  alt=""
                  class="nft_im"
                  id="nft_im"
                />
                <img
                  src="../../assets/images/cm/BlindBox_Black2.gif"
                  alt="gif"
                  class="video_p"
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
                    <b> BUY</b>
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
                  src="../../assets/images/cm/F17.png"
                  alt=""
                  class="nft_im"
                  id="nft_im"
                />
                <img
                  src="../../assets/images/cm/BlindBox_Black2.gif"
                  alt="gif"
                  class="video_p"
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
                    <b> BUY</b>
                    <span>0.3 eth</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </el-tab-pane>
      <el-tab-pane name="token" disabled>
        <div slot="label">
          <span class="soon">Coming soon</span>
          <span class="tab_label"> TOKEN PRE-SALE</span>
        </div>
      </el-tab-pane>
      <el-tab-pane name="auctions" disabled>
        <div slot="label">
          <span class="soon">Coming soon</span>
          <span class="tab_label"> AUCTIONS</span>
        </div>
        <div class="hr_line"></div>
      </el-tab-pane>
    </el-tabs>
    <img
      src="../../assets/images/corner_piece.png"
      alt="corner2"
      class="corner2"
    />
  </div>
</template>

<script>
export default {
  name: 'MerchTabs',
  data() {
    return {
      activeTab: 'mech',
    };
  },
  methods: {
    chageTabs(tab) {
      console.log(tab.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.soon {
  background: #434343ff;
  margin-left: -25px;
  border-radius: 20px;
  text-align: center;
  font-size: 13px;
  padding: 1px 9px;
  color: #999999;
}
.tab_label {
  margin-top: -33px;
  display: block;
  color: rgb(146, 143, 143);
  font-size: 15px;
}
.corner {
  width: 48px;
  float: right;
  margin-top: 46px;
  margin-left: -50px;
}
.corner2 {
  width: 51px;
  float: left;
  transform: rotate(186deg);
  margin-top: -53px;
  margin-left: -2px;
}
.hr_line {
  height: 1px;
  background: #494949;
  width: 305px;
  float: right;
  margin-top: -50px;
  margin-right: -14px;
}
.gen {
  color: grey;
  padding-bottom: 30px;
  padding-top: 20px;
  font-size: 16px;
}
.merch_nft {
  .innfo_nft {
    text-align: center;
    margin-top: 50px;

    .nft_im {
      max-width: 220px;
      width: 90%;
      height: 230px;
      border-radius: 10px;
    }
    .video_p {
      // position: relative;
      // z-index: -1;
      border-radius: 10px;
      max-width: 220px;
      width: 90%;
      height: 230px;
      margin: 0 auto;
      display: none;
    }
  }
  .merch_tk_stars {
    // margin-top: -500px;
    width: 130px;
    margin: 0 auto;
    // z-index: 999;
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
    height: 50px;
    letter-spacing: 0.1em;
    font-size: 15px;
    word-spacing: normal;
    background: #363644db;
    padding: 1px 15px;
    border: 1px solid #363644;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    color: whitesmoke;

    span {
      display: block;
      color: grey;
      margin-top: 2px;
    }
  }
}
</style>
