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
        <div>
          <p>
            科別 - <span>{{ number.department }}</span>
          </p>
          <p>看診號碼</p>
          <p>{{ number.number }}</p>
        </div>
        <div>
          <p>
            醫師 - <span>{{ number.doctor }}</span>
          </p>
          <p>候診人數</p>
          <p>{{ number.waiting }}</p>
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

    &-item {
      width: 100%;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      &-title {
        font-size: 3.5rem;
        font-weight: 700;
        color: $white-3;
      }
    }
  }
}
</style>
