<script setup>
import { ref } from 'vue'
const title = ref('醫療團隊')
</script>
<template>
  <section class="team">
    <h1>{{ title }}</h1>
  </section>
</template>

<style lang="scss" scoped>
.team {
  width: min(100%, 192rem);
  height: 100%;
  background: $white-5;
  background-size: cover;
  margin-top: 10rem;
}
</style>
