<script setup>
import { reactive } from 'vue'
const title = reactive({
  titleH1: '立即加入!',
  titleH2: '德美診所官方LINE帳號',
  titleP1: '查詢',
  titleSpan1: '門診時間',
  titleSpan2: '看診進度',
  titleSpan3: '預約掛號',
  titleSpan4: '居家照護視訊診療',
})
</script>

<template>
  <main>
    <div class="title">
      <div class="title-H">
        <h1>{{ title.titleH1 }}</h1>
        <h2>{{ title.titleH2 }}</h2>
      </div>
      <div class="title-P">
        <p>
          {{ title.titleP1 }}
          <span>{{ title.titleSpan1 }}</span>
          、
          <span>{{ title.titleSpan2 }}</span>
          、
          <span>{{ title.titleSpan3 }}</span>
          、
          <span>{{ title.titleSpan4 }}</span>
          。
        </p>
      </div>
    </div>
    <div class="qrcode"></div>
  </main>
</template>
<style lang="scss" scoped>
main {
  width: min(100%, 192rem);
  .title {
    display: flex;
    justify-content: center;
    padding: 18rem 0;

    .title-H {
      color: $black-3;
      font-size: 5rem;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: 0.27rem;
    }
    .title-P {
      width: 26rem;
      color: $black-3;
      font-size: 1.8rem;
      font-weight: 600;
      margin-left: -30rem;
      span {
        color: $green-1;
        line-height: 1.4;
      }
    }
  }
}
</style>
