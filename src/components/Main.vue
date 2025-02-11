<script setup>
import talk from '@/assets/img/talk-1.png'
import qrcode from '@/assets/img/qr-code.png'
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
      <img :src="talk" alt="talk" class="talk" />
    </div>
    <div class="qrcode">
      <img :src="qrcode" alt="qrcode" />
      <div>
        <div class="qrcode-text">
          <p>掃描條碼或點我加入！</p>
        </div>
        <div class="qrcode-reserve">
          <p>APP預約掛號</p>
        </div>
        <div class="qrcode-reserve">
          <p>網路預約掛號</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
@keyframes shake {
  10%,
  90% {
    transform-origin: 0% 100%;
    transform: rotateZ(-2deg);
  }

  20%,
  80% {
    transform-origin: 0% 100%;
    transform: rotateZ(2deg);
  }

  30%,
  70% {
    transform-origin: 0% 100%;
    transform: rotateZ(-4deg);
  }

  40%,
  60% {
    transform-origin: 0% 100%;
    transform: rotateZ(4deg);
  }

  50% {
    transform-origin: 0% 100%;
    transform: rotateZ(-4deg);
  }
}
main {
  width: min(100%, 192rem);
  .title {
    display: flex;
    justify-content: center;
    padding-top: 18rem;
    position: relative;
    @media (max-width: 992px) {
      padding-top: 12rem;
    }

    .title-H {
      color: $black-3;
      font-size: 5rem;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: 0.27rem;
      @media (max-width: 992px) {
        font-size: 4rem;
      }
      @media (max-width: 576px) {
        font-size: 3.2rem;
      }
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
      @media (max-width: 992px) {
        display: none;
      }
    }
    .talk {
      width: 21rem;
      object-fit: contain;
      margin-top: -12rem;
      animation: shake 2s infinite;
      @media (max-width: 992px) {
        width: 15rem;
        margin-top: 0;
        position: absolute;
        top: 28%;
        left: 48%;
      }
    }
  }
  .qrcode {
    width: min(100%, 66.5rem);
    background: rgba(217, 217, 217, 0.4);
    border-radius: 1rem;
    padding: 1.2rem 2.2rem;
    margin: 2rem auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    color: $white-3;
    font-size: 1.8rem;
    font-weight: 700;
    text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.25);
    @media (max-width: 992px) {
      padding: 1.2rem 0;
    }

    img {
      width: min(12%, 7.5rem);
      object-fit: contain;
      @media (max-width: 992px) {
        width: 10rem;
      }
    }
    div {
      display: flex;
      gap: 1.2rem;
      @media (max-width: 992px) {
        display: block;
      }
    }

    .qrcode-text,
    .qrcode-reserve {
      background: linear-gradient(180deg, #4fd9d5 51.03%, #2bc0bc 51.04%);
      border-radius: 0.5rem;
      padding: 1.5rem 2.5rem;
    }
    @media (max-width: 992px) {
      .qrcode-reserve {
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
