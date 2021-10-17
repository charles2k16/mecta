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

    <div class="hero2">
      <div class="wrap" style="margin-bottom:100px;">
        <el-row :gutter="10">
          <el-col :md="12">
            <h2 class="white">THE FIRST</h2>
            <p class="lead_text_inf mt-20">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis deserunt reiciendis dolorum blanditiis suscipit
              sapiente earum quis, quas et omnis amet. Doloremque minima ut
              inventore sequi, corrupti quo reprehenderit fugit. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Laboriosam quis
              ratione modi numquam at. Minima nesciunt nemo enim cupiditate odio
              impedit, voluptate repellat, quos aliquam asperiores facere libero
              sed non.
            </p>
          </el-col>

          <el-col :md="12">
            <div style="height: 280px; border:1px solid grey"></div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="sec_div">
      <div
        class="wrap_blog"
        style="z-index: 2; position:relative; margin-top:-250px;"
      >
        <div class="blog_div mt-120">
          <div class="team_div" id="blog1"></div>

          <div class="team_div"></div>

          <div class="team_div"></div>

          <div class="team_div"></div>
        </div>
      </div>

      <div class="mt-50" style="display:flex; justify-content:center;">
        <button class="mr-10">
          METAVERSE
        </button>
        <button>
          DISCORD CHAT
        </button>
      </div>

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

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    Footer,
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
</style>
