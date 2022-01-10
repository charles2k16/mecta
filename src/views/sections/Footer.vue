<template>
  <div>
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
                Be the first to know about Mecta news.

                <br />
                Don't miss the opportunity to join the community!
              </p>
            </div>
          </el-col>

          <el-col :md="12" :xs="24" :sm="24">
            <div class="flex-justify-around-center mt-20">
              <div class="flex-row-center comm_icons">
                <el-avatar :size="60" class="medium_avatar">
                  <a
                    href="https://medium.com/@Mecta/say-hi-to-the-world-of-mecta-7a7f4b118dd5"
                    target="_blank"
                  >
                    <img
                      src="../../assets/images/medium_icon.png"
                      alt="medium"
                      style="width:26px !important"
                    />
                  </a>
                </el-avatar>

                <p class="mt-30 center p_link">
                  <a
                    href="https://medium.com/@Mecta/say-hi-to-the-world-of-mecta-7a7f4b118dd5"
                    target="_blank"
                  >
                    Read more on <br />
                    Medium
                  </a>
                </p>
              </div>

              <div class="flex-row-center comm_icons">
                <a href="https://t.me/soliddefi" target="_blank">
                  <el-avatar :size="60" class="tele_avatar">
                    <img
                      src="../../assets/images/telegram2.png"
                      alt="telegram"
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
                  <el-avatar :size="60" class="twit_avatar">
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
    </div>
    <div class="footer">
      <div class="wrap">
        <div class="d-flex-center footer_div">
          <p>
            Copyright © 2022 Mecta Token. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lead_head_text1 {
  color: whitesmoke;
  font-size: 41px;
  line-height: 3.5rem;
  font-weight: bold;
}
.lead_text {
  font-size: 1rem;
  text-align: justify;
  line-height: 1.9rem;
  color: rgb(214, 213, 213);
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.p_link {
  color: rgb(175, 174, 174);
  font-size: 1rem;
  line-height: 1.9rem;
}
.footer_container {
  background: rgb(48, 49, 73);
  background: linear-gradient(
    153deg,
    rgba(48, 49, 73, 1) 25%,
    rgba(23, 27, 31, 1) 68%
  );
  padding-top: 30px;
  padding-bottom: 80px;
}
.tele_avatar {
  background: #7d33fc !important;
  box-shadow: 10px 10px 15px #080f14, -10px -10px 15px #424961;
  border: 3px solid rgb(48, 49, 73);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 27px;
    height: 30px;
  }
}
.twit_avatar {
  background: #55acee !important;
  padding: 3px;
  box-shadow: 10px 10px 15px #080f14, -10px -10px 15px #424961;
  border: 3px solid rgb(48, 49, 73);
}
.medium_avatar {
  background: #091116 !important;
  box-shadow: 10px 10px 15px #080f14, -10px -10px 15px #424961;
  border: 3px solid rgb(48, 49, 73);
}
.footer {
  background: #110e23ff;
}
.footer_div {
  height: 60px;

  p {
    color: whitesmoke;
  }
}
</style>
