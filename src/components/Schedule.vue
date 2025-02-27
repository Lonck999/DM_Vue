<script setup>
import ScheduleOphthalmology from '@/components/ScheduleOphthalmology.vue'
import ScheduleFamilyMedicine from '@/components/ScheduleFamilyMedicine.vue'
import ScheduleRehabilitationDepartment from '@/components/ScheduleRehabilitationDepartment.vue'
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
    <ScheduleFamilyMedicine class="mt" />
    <ScheduleRehabilitationDepartment class="mt" />
  </section>
</template>

<style lang="scss" scoped>
.schedule {
  width: min(100%, 192rem);
  background: url('@/assets/img/background-2.png') no-repeat top center;
  background-size: cover;
  padding: 8rem 0;

  .schedule-title {
    text-align: center;
    margin-bottom: 5.5rem;

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
  .mt {
    margin-top: 3rem;
  }
}
</style>
