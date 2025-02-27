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
  width: 100%;
  height: 100%;
}
</style>
