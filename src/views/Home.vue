<template>
  <div class="main_container">
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

    <div class="merch_img_div py-100">
      <div class="wrap">
        <MerchTabs />

        <MerchSkins />
      </div>
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
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>
