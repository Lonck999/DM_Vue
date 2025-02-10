<script setup>
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="container">
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: min(100%, 192rem);
  margin: 0 auto;
}
</style>
