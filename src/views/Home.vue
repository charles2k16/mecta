<template>
  <div class="main_container" style="background:#212121ff;">
    <div class="gZTHOA">
      <div class="audio-player-container" style="right:0">
        <div class="audio-player bMHZUr" v-show="showAudio">
          <div class="audio_controls jSeanL">
            <button type="button" class="next" aria-label="Next">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10L7.08333 5L0 0V10ZM8.33333 0V10H10V0H8.33333Z"
                  fill="white"
                  fill-opacity="0.7"
                ></path>
              </svg>
            </button>
            <!-- <button type="button" class="pause none circle"
              aria-label="Pause"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="19.5"
                  fill="url(#paint0_linear)"
                  stroke="#2F2040"
                ></circle>
                <path
                  d="M15 26H18.3333V14H15V26ZM21.6667 14V26H25V14H21.6667Z"
                  fill="white"
                  fill-opacity="0.7"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#261836"></stop>
                    <stop offset="1" stop-color="#30234B"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </button> -->

            <div class="toggle-play play"></div>
            <button type="button" class="prev" aria-label="Previous">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 -9.53674e-07L2.91667 5L10 10L10 -9.53674e-07ZM1.66667 10L1.66667 -2.25151e-07L7.94465e-08 -7.94466e-08L9.53674e-07 10L1.66667 10Z"
                  fill="white"
                  fill-opacity="0.7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="ghMPrE" @click="showAudio = !showAudio">
          <div class="ivBMyS">
            <svg
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.7"
                d="M-6.17205e-07 1.88L4.94467 8L-8.21774e-08 14.12L1.52227 16L8 8L1.52227 -6.65404e-08L-6.17205e-07 1.88Z"
                fill="#261836"
                fill-opacity="0.7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <NavBar />
    <div style="background:#212121ff;">
      <div class="hero">
        <div>
          <div class="wrap">
            <Header />
          </div>
        </div>
      </div>

      <div class="why_merch">
        <WhyUs />

        <MerchCards />
      </div>
    </div>
    <!-- 2400 -->
    <div class="merch_img_div">
      <ThreeEclipse />
      <div
        class="wrap"
        style="z-index: 2; position:relative; margin-top:-2400px;"
      >
        <MerchTabs />

        <MerchSkins />
      </div>
    </div>
    <div class="nft_connectbg py-50" id="nftconn">
      <NftConnect />
    </div>
    <div class="roadmap_bg">
      <RoadMap />
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Header from './sections/Header.vue';
import Footer from './sections/Footer.vue';
import WhyUs from './sections/WhyUs.vue';
import MerchCards from './sections/MerchCards.vue';
import MerchTabs from './sections/MerchTabs.vue';
import RoadMap from './sections/RoadMap.vue';
import MerchSkins from './sections/MerchSkins.vue';
import ThreeEclipse from '@/components/ThreeEclipse';
import NftConnect from './sections/NftConnect.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    Footer,
    WhyUs,
    MerchCards,
    MerchTabs,
    RoadMap,
    MerchSkins,
    ThreeEclipse,
    NftConnect,
  },
  data() {
    return {
      active: 0,
      showAudio: true,
    };
  },
  mounted() {
    this.getAudioElement();
  },
  methods: {
    getAudioElement() {
      const audioFiles = [
        'https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/FaceBangSonic.mp3',
        'https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3',
      ];

      const audio = new Audio(audioFiles[0]);

      audio.volume = 0.2;

      const playBtn = document.querySelector('.toggle-play');
      const nextBtn = document.querySelector('.next');
      const prevBtn = document.querySelector('.prev');

      playBtn.addEventListener(
        'click',
        () => {
          if (audio.paused) {
            playBtn.classList.remove('play');
            playBtn.classList.add('pause');
            audio.play();
          } else {
            playBtn.classList.remove('pause');
            playBtn.classList.add('play');
            audio.pause();
          }
        },
        false
      );

      nextBtn.addEventListener(
        'click',
        () => {
          audio.pause();
          audio.src = audioFiles[1];
          audio.load();
          audio.play();
        },
        false
      );

      prevBtn.addEventListener(
        'click',
        () => {
          audio.pause();
          audio.src = audioFiles[0];
          audio.load();
          audio.play();
        },
        false
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle-play {
  &.play {
    cursor: pointer;
    position: relative;
    height: 0;
    width: 0;
    border: 7px solid #0000;
    border-left: 13px solid white;
    left: 15px;
  }
  &.pause {
    height: 15px;
    width: 20px;
    cursor: pointer;
    position: relative;
    left: 15px;
    &:before {
      position: absolute;
      top: 0;

      background: white;
      content: '';
      height: 15px;
      width: 3px;
    }
    &:after {
      position: absolute;
      top: 0;
      right: 8px;
      background: white;
      content: '';
      height: 15px;
      width: 3px;
    }
  }
}
</style>
