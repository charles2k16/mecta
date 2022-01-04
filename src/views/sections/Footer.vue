<template>
  <div class="footer_container">
    <div class="wrap">
      <el-row class="mt-50">
        <el-col :md="12" :xs="24" :sm="24">
          <div>
            <h2 class="lead_head_text1">
              Join our <br />
              Community
            </h2>
            <p class="lead_text mt-15">
              Be the first to know about SOLID token news.

              <br />
              Don't miss the opportunity to join the community!
            </p>
          </div>
        </el-col>

        <el-col :md="12" :xs="24" :sm="24">
          <div class="flex-justify-around-center mt-20">
            <div class="flex-row-center comm_icons">
              <el-avatar size="60" class="medium_avatar">
                <a href="https://soliddefi.medium.com/" target="_blank">
                  <img
                    src="../../assets/images/medium_icon.png"
                    alt="medium"
                    style="width:25px !important"
                  />
                </a>
              </el-avatar>

              <p class="mt-30 center p_link">
                <a href="https://soliddefi.medium.com/" target="_blank">
                  Read more on <br />
                  Medium
                </a>
              </p>
            </div>

            <div class="flex-row-center comm_icons">
              <a href="https://t.me/soliddefi" target="_blank">
                <el-avatar class="tele_avatar" size="60">
                  <img
                    src="../../assets/images/telegram2.png"
                    alt="telegram"
                    style="width:28px !important"
                  />
                </el-avatar>
              </a>
              <p class="mt-30 center p_link">
                <a href="https://t.me/soliddefi" target="_blank">
                  Join us on <br />
                  Telegram</a
                >
              </p>
            </div>

            <div class="flex-row-center comm_icons">
              <a href="https://twitter.com/soliddefi" target="_blank">
                <el-avatar size="60" class="twit_avatar">
                  <img src="../../assets/images/twitter.png" alt="twitter" />
                </el-avatar>
              </a>
              <p class="mt-30 center p_link">
                <a href="https://twitter.com/soliddefi" target="_blank">
                  Follow us on <br />
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="">
      <div class="wrap">
        <div class="d-flex-center footer_div">
          <p>
            Copyright © 2021 Crypto Mech Token. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer_container {
  background: #110e23ff;
}
.footer_div {
  height: 60px;

  p {
    color: whitesmoke;
  }
}
</style>
