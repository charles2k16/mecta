<template>
  <div class="wrap py-100 bg_roadmap">
    <div class="roadmap_div">
      <div class="step_one d-flex">
        <div class="vl"></div>
        <h2>ROAD MAP</h2>
      </div>
      <div class="d-flex mt-20">
        <div class="tube"></div>
        <h3 class="step_h3">.01 DIGITAL COLLECTIBLES STAGE</h3>
      </div>
      <div class="d-flex mt-10">
        <div class="vl_steps"></div>

        <p class="lead_text_inf tt_col mt-20">
          During this stage NFTs of LAND, Mech, Mech Drivers, and Components
          will be issued according to a set plan defining the supply of various
          rarity levels of NFTs ranging from more common to super rare NFTs.
        </p>
      </div>
      <div class="d-flex mt-20">
        <div class="tube"></div>
        <h3 class="step_h3">.02 COLLABORATIVE CONTENT DEVELOPMEN</h3>
      </div>
      <div class="step_2 d-flex mt-10">
        <div class="vl_steps2"></div>

        <div>
          <p class="lead_text_inf tt_col2 mt-20">
            Token holders will vote on:
          </p>
          <ul class="a">
            <li>the best mech designs to be 3D modeled and minted into NFTs</li>
            <li style="margin-bottom: 10px;">
              the most inspirational mechanical/robotics engineering papers for
              designers works to be based on.
            </li>
          </ul>

          <p class="lead_text_inf tt_col mt-40">
            Eventual outcome with the most valuable NFTs - ERC 1155 which
            contain multiple unique tokens. For example, an ERC 1155 token that
            contains a mech design inspired by 2 mechanical/robotics engineering
            papers and 2 creators signature.
          </p>
        </div>
      </div>

      <div class="d-flex mt-20">
        <div class="tube"></div>
        <h3 class="step_h3">.03 GAME DEVELOPMENT STAGE</h3>
      </div>
      <div class="d-flex mt-10">
        <div>
          <div class="vl_steps"></div>
        </div>

        <p class="lead_text_inf tt_col mt-20">
          Play-to-earn games will be developed. Stats will be added to Mech and
          Components (different parts or equipments) for players to assemble and
          improve Mechs base performance for mech-themed games.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadMap',
  methods: {
    connectToWallet() {
      console.log('toggleDiv');
    },
  },
};
</script>

<style lang="scss" scoped>
.bg_roadmap {
  background-image: url('../../assets/images/cm/cm_leg_geometry_02_color.png');
  background-repeat: no-repeat;
  background-position: right;
  background-size: 38% 70%;
}
.roadmap_div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 0;
  max-width: 600px;
  width: 100%;
}
.step_one {
  .vl {
    border-left: 7px solid rgb(103, 23, 168);
    height: 60px;
    margin-right: 70px;
    margin-left: 12px;
  }
  h2 {
    color: #bda3ff;
    font-weight: bold;
    font-size: 28px;
  }
}
.tube {
  background: #b7b7b7ff;
  height: 30px;
  width: 30px;
  margin-right: 60px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
.step_h3 {
  color: #efefef;
  font-weight: bold;
}
.tt_col {
  color: #b7b7b7;
  margin-top: -10px;
}
.vl_steps {
  border-left: 2px solid #b7b7b7ff;
  height: 120px;
  margin-right: 75px;
  margin-left: 14px;
  margin-top: 13px;
}
.step_2 {
  .vl_steps2 {
    border-left: 2px solid #b7b7b7ff;
    height: 230px;
    margin-right: 75px;
    margin-left: 14px;
    margin-top: 13px;
  }

  .tt_col2 {
    color: #b7b7b7;
    margin-top: -3px;
  }

  ul {
    margin-left: 30px;
  }
  ul.a {
    list-style-type: circle;
    color: #b7b7b7ff;
  }
}
</style>
