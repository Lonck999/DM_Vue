<script setup>
import { ref, reactive } from 'vue'

const now = ref('叫號進度')
const number = reactive({
  title: '一<br>診',
})
</script>

<template>
  <div class="number">
    <h1>{{ now }}</h1>
    <div class="number-box">
      <div><p v-html="number.title"></p></div>
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
}
</style>
