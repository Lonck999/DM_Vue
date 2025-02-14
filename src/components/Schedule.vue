<script setup>
import { ref } from 'vue'

const schedule = ref({
  title: '門診時間',
  note: '點擊醫生姓名可進行網路預約',
})
</script>
<template>
  <section class="schedule">
    <div class="schedule-title">
      <h2>{{ schedule.title }}</h2>
      <p>{{ schedule.note }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
