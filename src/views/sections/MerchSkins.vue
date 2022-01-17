<template>
  <div class="mt-150">
    <el-row :gutter="20">
      <el-col :md="12" :sm="24" :xs="24">
        <div>
          <img
            v-show="anim"
            :src="skinItem.image"
            class="skinImage animate__animated animate__fadeInLeft"
          />
        </div>
      </el-col>

      <el-col :md="12" :sm="24" :xs="24">
        <div class="merch_skin_div">
          <h2>Description:</h2>

          <p class="mt-10 animate__animated animate__fadeInRight" v-show="anim">
            {{ skinItem.description }}
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
              <img :src="skin.image" /><img :src="skin.image" />
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
      anim: true,
      skinItem: {
        image:
          'https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o',
        description:
          'lorem description with task lorem description with task lorem description with task',
      },
      skins: [
        {
          image:
            'https://i.picsum.photos/id/21/200/200.jpg?hmac=a2iQ6UhOjpU6jn7QSsCpk1CiiKTxmW1R4UivDsv-n8o',
          description:
            'lorem description with task lorem description with task lorem description with task',
        },
        {
          image:
            'https://i.picsum.photos/id/988/200/200.jpg?hmac=-lwK-i6PssD9WlUeVPDIhOxDVxlzJKeM4MgEx_fIqJg',
          description:
            'lorem description with task lorem description with task lorem description with task',
        },
        {
          image:
            'https://i.picsum.photos/id/119/200/200.jpg?hmac=JGrHG7yCKfebsm5jJSWw7F7x2oxeYnm5YE_74PhnRME',
          description:
            'lorem description with task lorem description with task lorem description with task',
        },
        {
          image:
            'https://i.picsum.photos/id/604/200/200.jpg?hmac=qgFjxODI1hMBMfHo68VvLeji-zvG9y-iPYhyW0EkvOs',
          description:
            'lorem description with task lorem description with task lorem description with task',
        },
        {
          image:
            'https://i.picsum.photos/id/253/200/200.jpg?hmac=_dceojr9yz5ZIKoye8I9HOqPCBHfn-jT9aRYdoLx1kQ',
          description:
            'lorem description with task lorem description with task lorem description with task',
        },
        {
          image:
            'https://i.picsum.photos/id/988/200/200.jpg?hmac=-lwK-i6PssD9WlUeVPDIhOxDVxlzJKeM4MgEx_fIqJg',
          description:
            'lorem description with task lorem description with task lorem description with task',
        },
        {
          image:
            'https://i.picsum.photos/id/119/200/200.jpg?hmac=JGrHG7yCKfebsm5jJSWw7F7x2oxeYnm5YE_74PhnRME',
          description:
            'lorem description with task lorem description with task lorem description with task',
        },
        {
          image:
            'https://i.picsum.photos/id/604/200/200.jpg?hmac=qgFjxODI1hMBMfHo68VvLeji-zvG9y-iPYhyW0EkvOs',
          description:
            'lorem description with task lorem description with task lorem description with task',
        },
        {
          image:
            'https://i.picsum.photos/id/988/200/200.jpg?hmac=-lwK-i6PssD9WlUeVPDIhOxDVxlzJKeM4MgEx_fIqJg',
          description:
            'lorem description with task lorem description with task lorem description with task',
        },
        {
          image:
            'https://i.picsum.photos/id/988/200/200.jpg?hmac=-lwK-i6PssD9WlUeVPDIhOxDVxlzJKeM4MgEx_fIqJg',
          description:
            'lorem description with task lorem description with task lorem description with task',
        },
      ],
    };
  },
  methods: {
    changeSkin(item) {
      // const img = document.querySelector('.skinImage');
      // img.classList.add('animate__bounceOutLeft');
      this.anim = false;

      setTimeout(() => {
        this.skinItem = item;
        this.anim = true;
      }, 100);

      // this.skinItem = item;

      // img.classList.remove('anim');
    },
  },
};
</script>

<style lang="scss" scoped>
.skinImage {
  max-width: 350px;
  width: 100%;
  height: auto;
}

.merch_skin_div {
  h2 {
    color: whitesmoke;
    font-size: 30px;
  }

  p {
    font-size: 1.7rem;
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
