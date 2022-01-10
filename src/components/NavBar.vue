<template>
  <div>
    <div class="nav_header" id="navbar">
      <div class="nav flex-justify-between-center">
        <img
          src="../assets/images/mecta_logo_white.png"
          alt="logo"
          style="margin-top:-5px;"
          class="logo"
        />

        <div class="flex-justify-between-center h_staking hidden-sm-and-down">
          <h3>Staking</h3>
          <span class="soon">Coming soon</span>
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-medium-m"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-discord"></i>
              </a>
            </li>
            <li style="margin-right: -11px">
              <a href="#">
                <i class="fab fa-telegram-plane"></i>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button class="whitepaper_btn">
            <a href="/mECH_Token_whitepaper_V.1_ER.pdf" target="_blank"
              >Read Whitepaper</a
            >
          </button>
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
  methods: {
    openPdf() {},
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 24px;
}
.nav_header {
  background: #110e23ff;
  // position: -webkit-sticky;
  // position: sticky;
  top: 0;
  z-index: 1000;
  // width: 100%;
  height: 90px;

  .nav {
    max-width: 940px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    height: 90px;

    h2 {
      color: white;
    }

    .h_staking {
      border: 2px solid #434343;
      background: #161616ff;
      border-radius: 50px;
      padding: 2px 1px 1px 20px;
      display: flex;
      width: 280px;
      margin-right: -70px;

      .soon {
        background: #434343ff;
        margin-top: -50px;
        margin-left: -190px;
        border-radius: 20px;
        text-align: center;
        font-size: 13px;
        padding: 2px 10px;
        color: #999999;
      }

      h3 {
        font-size: 15px;
        margin-right: 60px;
        color: #a895ff;
        font-weight: bold;

        &:hover {
          font-size: 16px;
          color: whitesmoke;
          cursor: pointer;
        }
      }
    }
  }
}

.whitepaper_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: TitilliumBold;
  font-weight: 800;
  height: 43px;
  background: rgb(66, 66, 66);
  background: linear-gradient(
    180deg,
    rgba(66, 66, 66, 1) 27%,
    rgba(1, 1, 1, 1) 79%
  );
  text-shadow: rgba(0, 0, 0, 0.3) 0px 2px 3px;
  color: #d9d9d9;
  font-size: 15px;
  padding: 1px 20px;
  position: relative;
  border-top: 1px solid;
  border-left: 1px solid;
  border-width: 2px;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    180deg,
    rgba(66, 66, 66, 1) 27%,
    rgba(1, 1, 1, 1) 79%
  );
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  top: 30px;
  transform: translate(-5%, -1%);
}
ul li {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 25px;
}

ul li a {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 43px;
  background: #434343;
  border-radius: 50%;
  font-size: 20px;
  color: #0f121eff;
  transition: 0.5s;
}
ul li a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #85a3ff;
  transition: 0.5s;
  transform: scale(0.9);
  z-index: -1;
}
ul li a:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #85a3ff;
}
ul li a:hover {
  color: #85a3ff;
  box-shadow: 0 0 5px #85a3ff;
  text-shadow: 0 0 5px #85a3ff;
}
</style>
