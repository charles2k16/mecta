<template>
  <div class="main_container">
    <NavBar />
    <div class="hero">
      <div>
        <div class="wrap">
          <Header />
        </div>
      </div>
    </div>

    <div class="why_merch">
      <why-us />
    </div>

    <div class="merch_img_div">
      <div class="wrap mt-100">
        <el-tabs type="card">
          <el-tab-pane>
            <span slot="label">WEAPON</span>
            <div class="tabs_div flex-justify-between-center mt-20">
              <div>
                <img src="../assets/images/tk_box1.png" alt="" width="75px" />
              </div>

              <div>
                <h3 class="white">
                  1 x <span style="color:red">[3-star]</span> or better
                </h3>
              </div>

              <div>
                <div class="eth_button"><span>0.9 eth</span></div>
              </div>
            </div>

            <div class="tabs_div flex-justify-between-center mt-20">
              <div>
                <img src="../assets/images/tk_box1.png" alt="" width="75px" />
              </div>

              <div>
                <h3 class="white">
                  1 x <span style="color:#5783EB">[1-star]</span> or better
                </h3>
              </div>

              <div>
                <div class="eth_button"><span>0.3 eth</span></div>
              </div>
            </div>

            <div class="tabs_div flex-justify-between-center mt-20">
              <div>
                <img src="../assets/images/tk_box1.png" alt="" width="75px" />
              </div>

              <div>
                <h3 class="white">
                  3 x <span style="color:#5783EB">[1-star]</span> or better
                </h3>
              </div>

              <div>
                <div class="eth_button"><span>0.8 eth</span></div>
              </div>
            </div>

            <div class="tabs_div flex-justify-between-center mt-20">
              <div>
                <img src="../assets/images/tk_box1.png" alt="" width="75px" />
              </div>

              <div>
                <h3 class="white">
                  1 x <span style="color:#5783EB">[2-star]</span> or
                  better(raffle)
                </h3>
              </div>

              <div>
                <div class="eth_button"><span>0.005 eth</span></div>
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
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Header from './sections/Header.vue';
import Footer from './sections/Footer.vue';
import WhyUs from './sections/WhyUs.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    Footer,
    WhyUs,
  },
  data() {
    return {
      tokenSale: 'Over 2,000,000',
      confirmTitle: '',
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.eth_button {
  cursor: pointer;
  padding: 10px;
  color: white;
  background: #9e9e9e;
  width: 110px;
  display: flex;
  justify-content: center;
  clip-path: polygon(
    0 0,
    90% 0%,
    100% 20%,
    100% 80%,
    100% 100%,
    20% 100%,
    0 100%,
    0% 20%
  );
}
.team_div {
  width: 350px;
  height: 200px;
  border: 1px solid rgb(55, 54, 82);
  flex: 0 0 auto;
  margin-right: 30px;
  margin-bottom: 30px;
  background: #2d294b;
}
.tabs_div {
  width: 100%;
  height: 100px;
  background-color: #414141;
  padding: 20px;
}
</style>
