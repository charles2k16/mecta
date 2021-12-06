<template>
  <div>
    <div class="header_nav">
      <div class="nav flex-justify-between-center">
        <h2>CRYPTOMECH</h2>

        <div class="flex-justify-between-center h_staking">
          <h3>Staking</h3>
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
            <li>
              <a href="#">
                <i class="fab fa-telegram-plane"></i>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button class="btn_flex_btn whitepaper_btn">Read Whitepaper</button>
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
  background: #171a2d;

  .nav {
    width: 900px;
    margin-right: auto;
    margin-left: auto;
    height: 70px;

    h2 {
      color: white;
    }

    .h_staking {
      border: 1px solid grey;
      border-radius: 20px;
      padding: 1px 0 1px 15px;
      display: flex;

      h3 {
        font-size: 14px;
        margin-right: 15px;
        color: #8e83bb;
        font-weight: bold;
      }
    }
  }
}

.whitepaper_btn {
  background: rgb(20, 19, 19);
  color: whitesmoke;
  font-size: 14px;
  padding: 1px 20px;
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
  margin-left: 20px;
}

ul li a {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 43px;
  background: #333;
  border-radius: 50%;
  font-size: 20px;
  color: #666;
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
  background: #ffee10;
  transition: 0.5s;
  transform: scale(0.9);
  z-index: -1;
}
ul li a:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #ffee10;
}
ul li a:hover {
  color: #ffee10;
  box-shadow: 0 0 5px #ffee10;
  text-shadow: 0 0 5px #ffee10;
}
</style>
