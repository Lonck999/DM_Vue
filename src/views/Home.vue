<script setup>
import Main from '@/components/Main.vue'
import Number from '@/components/Number.vue'
import Schedule from '@/components/Schedule.vue'
import Team from '@/components/Team.vue'
</script>

<template>
  <div class="home">
    <Main />
    <Number />
    <Schedule />
    <Team />
  </div>
</template>

<style scoped>
.home {
  width: min(100%, 192rem);
  height: 100%;
  background: url('@/assets/img/background-1.png') no-repeat center center;
  background-size: cover;
}
</style>
