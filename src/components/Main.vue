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
<style>
.title {
  width: 100%;
  height: 100%;
}
</style>
