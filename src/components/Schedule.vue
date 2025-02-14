<script setup>
import ScheduleOphthalmology from './ScheduleOphthalmology.vue'
import { reactive, toRefs } from 'vue'
const schedule = reactive({
  title: '門診時間',
  note: '點擊醫生姓名可進行網路預約',
})
const { title, note } = toRefs(schedule)
</script>

<template>
  <section class="schedule">
    <div class="schedule-title">
      <h2>{{ title }}</h2>
      <p>{{ note }}</p>
    </div>
    <ScheduleOphthalmology />
  </section>
</template>

<style lang="scss" scoped>
.schedule {
  width: min(100%, 192rem);
  background: url('@/assets/img/background-2.png') no-repeat top center;
  background-size: cover;
  padding-top: 8rem;

  .schedule-title {
    text-align: center;

    h2 {
      margin-bottom: 1.5rem;
      font-size: 3.5rem;
      font-weight: 700;
      color: $green-1;
    }

    p {
      font-size: 2rem;
      font-weight: 500;
      color: $black-2;
    }
  }
}
</style>
