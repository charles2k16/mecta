<template>
  <div class="mt-150">
    <el-row :gutter="20">
      <el-col :md="12" :sm="24" :xs="24">
        <img :src="skinItem" class="skinImage" />
        ></el-col
      >

      <el-col :md="12" :sm="24" :xs="24">
        <div class="merch_skin_div">
          <h2>Description:</h2>

          <p class="mt-10">
            Witness the newest applications of real science and breakthroughs in
            terraforming robots
          </p>

          <h2 class="mt-40">Skin rarity:</h2>
        </div>
      </el-col>
    </el-row>

    <div class="mt-70">
      <el-row :gutter="50">
        <el-col :xs="12" :sm="24" :md="24">
          <div class="image-container">
            <div
              v-for="(skin, index) in skins"
              :key="index"
              @click="changeSkin(skin)"
              class="image"
              style="--clip-start: ellipse(0 0 at 0 0); --clip-end: ellipse(150% 150% at 0 0);"
            >
              <img :src="skin" /><img :src="skin" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MerchSkins',
  data() {
    return {
      skinItem:
        'https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o',
      skins: [
        'https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o',
        'https://i.picsum.photos/id/988/200/200.jpg?hmac=-lwK-i6PssD9WlUeVPDIhOxDVxlzJKeM4MgEx_fIqJg',
        'https://i.picsum.photos/id/119/200/200.jpg?hmac=JGrHG7yCKfebsm5jJSWw7F7x2oxeYnm5YE_74PhnRME',
        'https://i.picsum.photos/id/604/200/200.jpg?hmac=qgFjxODI1hMBMfHo68VvLeji-zvG9y-iPYhyW0EkvOs',
        'https://i.picsum.photos/id/253/200/200.jpg?hmac=_dceojr9yz5ZIKoye8I9HOqPCBHfn-jT9aRYdoLx1kQ',
        'https://i.picsum.photos/id/988/200/200.jpg?hmac=-lwK-i6PssD9WlUeVPDIhOxDVxlzJKeM4MgEx_fIqJg',
        'https://i.picsum.photos/id/119/200/200.jpg?hmac=JGrHG7yCKfebsm5jJSWw7F7x2oxeYnm5YE_74PhnRME',
        'https://i.picsum.photos/id/604/200/200.jpg?hmac=qgFjxODI1hMBMfHo68VvLeji-zvG9y-iPYhyW0EkvOs',
        'https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o',
        'https://i.picsum.photos/id/988/200/200.jpg?hmac=-lwK-i6PssD9WlUeVPDIhOxDVxlzJKeM4MgEx_fIqJg',
      ],
    };
  },
  methods: {
    changeSkin(item) {
      const img = document.querySelector('.skinImage');

      img.classList.add('anim');
      this.skinItem = item;
      // img.classList.remove('anim');
    },
  },
};
</script>

<style lang="scss" scoped>
.skinImage {
  width: 320px;
  -webkit-transition-duration: 2s;
  -moz-transition-duration: 2s;
  -o-transition-duration: 2s;
  transition-duration: 2s;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  transition-property: transform;
  outline: 0;
}
.anim {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.merch_skin_div {
  h2 {
    color: whitesmoke;
    font-size: 30px;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: #c4d0fa;
  }
}
// .skins {
//   width: 200px;
//   height: 200px;
//   margin-top: 60px;
//   // background:black;
// }
.image-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 100%;
  grid-gap: 0.8rem;
}
.image-container .image {
  position: relative;
  padding-bottom: 100%;
}
.image-container .image img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  left: 0;
  position: absolute;
  top: 0;
}
.image-container .image img:nth-of-type(1) {
  filter: grayscale(1) brightness(40%);
}
.image-container .image img:nth-of-type(2) {
  -webkit-clip-path: var(--clip-start);
  clip-path: var(--clip-start);
  transition: -webkit-clip-path 0.5s;
  transition: clip-path 0.5s;
  transition: clip-path 0.5s, -webkit-clip-path 0.5s;
}
.image-container .image:hover img:nth-of-type(2) {
  -webkit-clip-path: var(--clip-end);
  clip-path: var(--clip-end);
}
</style>
