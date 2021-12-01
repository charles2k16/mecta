<template>
  <div>
    <div class="merch_card_div">
      <div class="merch_card"></div>
      <div class="merch_card"></div>
      <div class="merch_card"></div>
      <div class="merch_card"></div>
      <div class="merch_card"></div>
      <div class="merch_card"></div>
    </div>

    <div class="mt-40 flex-center">
      <button class="mr-10 btn_flex_btn round rgb">
        Metaverse
      </button>
      <button class="btn_flex_btn round dark">
        Discord Chat
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MerchCards',
};
</script>

<style lang="scss" scoped>
.merch_card_div {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  margin-bottom: 20px;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }

  .merch_card {
    width: 408px;
    height: 250px;
    background: black;
    border-radius: 5px;
    border: 1px solid black;
    flex: 0 0 auto;
    margin-right: 40px;
    margin-bottom: 30px;
  }
}
</style>
