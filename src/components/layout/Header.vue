<script setup>
import logo from '@/assets/img/dm-logo.png'
</script>
<template>
  <header class="header">
    <img :src="logo" alt="logo" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  background-color: pink;
}
</style>
