<script setup>
import immediate1 from '@/assets/img/immediate-1.png'
import immediate2 from '@/assets/img/immediate-2.png'
import { ref, reactive } from 'vue'

const now = ref('叫號進度')
const numbers = reactive([
  {
    title: '一<br>診',
    department: '家醫科',
    number: '10',
    doctor: '張三三',
    waiting: '10',
    immediate: true,
  },
  {
    title: '二<br>診',
    department: '家醫科',
    number: '10',
    doctor: '張三三',
    waiting: '10',
    immediate: false,
  },
  {
    title: '三<br>診',
    department: '家醫科',
    number: '10',
    doctor: '張三三',
    waiting: '10',
    immediate: true,
  },
])
</script>

<template>
  <div class="number">
    <h1>{{ now }}</h1>
    <div class="number-box">
      <div
        v-for="number in numbers"
        :key="number.title"
        :style="{
          backgroundImage: `url(${number.immediate ? immediate1 : immediate2})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
        class="number-box-item"
      >
        <p v-html="number.title" class="number-box-item-title"></p>
        <div class="number-box-item-content">
          <p class="number-box-item-content-department">
            科別 - <span>{{ number.department }}</span>
          </p>
          <p>看診號碼</p>
          <p class="number-box-item-content-number">{{ number.number }}</p>
        </div>
        <div class="number-box-item-content">
          <p class="number-box-item-content-doctor">
            醫師 - <span>{{ number.doctor }}</span>
          </p>
          <p>候診人數</p>
          <p class="number-box-item-content-waiting">{{ number.waiting }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.number {
  width: min(100%, 192rem);
  margin-top: 13rem;

  h1 {
    background: $black-5;
    font-size: 3.5rem;
    font-weight: 700;
    color: $white-3;
    text-align: center;
    padding: 2.8rem 0;
  }

  .number-box {
    width: min(100%, 192rem);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    @media screen and (max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
    }

    &-item {
      width: 100%;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4.5rem;
      text-align: center;

      @media screen and (max-width: 1280px) {
        gap: 2rem;
      }

      @media screen and (max-width: 992px) {
        gap: 4.5rem;
      }

      @media screen and (max-width: 768px) {
        gap: 2rem;
      }

      &-title {
        background: $green-2;
        border-radius: 0.5rem;
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 1.2;
        color: $white-3;
        padding: 6rem 2rem;
        margin: 4.5rem 0;

        @media screen and (max-width: 1280px) {
          padding: 5rem 1.5rem;
        }

        @media screen and (max-width: 992px) {
          padding: 6rem 2rem;
        }

        @media screen and (max-width: 768px) {
          padding: 5rem 1.5rem;
        }
      }

      &-content {
        color: $white-3;
        font-size: 2rem;

        @media screen and (max-width: 1280px) {
          font-size: 1.8rem;
        }

        @media screen and (max-width: 992px) {
          font-size: 2.5rem;
        }

        @media screen and (max-width: 768px) {
          font-size: 2rem;
        }

        &-department,
        &-doctor {
          margin-bottom: 5rem;
        }

        span {
          color: $green-3;
        }

        &-number,
        &-waiting {
          margin-top: 1.5rem;
          color: $green-3;
          font-size: 5.5rem;
          font-weight: 700;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        &-waiting {
          color: $white-3;
        }
      }
    }
  }
}
</style>
