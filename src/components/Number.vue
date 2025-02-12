<script setup>
import { ref } from 'vue'

const now = ref('叫號進度')
</script>

<template>
  <div class="number">
    <h1>{{ now }}</h1>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.number {
  width: min(100%, 192rem);
}
</style>
