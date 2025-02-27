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
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: $green-1;
    text-align: center;
    padding-top: 8rem;
  }
}
</style>
