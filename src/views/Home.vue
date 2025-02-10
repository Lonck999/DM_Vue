<script setup>
import Header from '../components/layout/Header.vue'
import Main from '../components/Main.vue'
</script>

<template>
  <div class="home">
    <Header />
    <Main />
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: url('../assets/img/background-1.png') no-repeat center center;
}
</style>
