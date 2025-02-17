<script setup>
import ScheduleOphthalmology from '@/components/ScheduleOphthalmology.vue'
import { reactive, toRefs } from 'vue'
const schedule = reactive({
  title: '門診時間',
  note: '點擊醫生姓名可進行網路預約',
})
const { title, note } = toRefs(schedule)

const ophthalmology = reactive({
  title: '眼科門診',
  note: '視力保健、視力檢查、一般眼疾、近視雷射矯正、老花矯正、白內障超音波乳化治療、視網膜治療、飛蚊症雷射治療、青光眼治療、角膜塑型矯正等眼科手術。',
})
const scheduleWeek = reactive({
  week: '門診時間/星期',
  monCH: '星期一',
  monEN: 'MON',
  tueCH: '星期二',
  tueEN: 'TUE',
  wedCH: '星期三',
  wedEN: 'WED',
  thuCH: '星期四',
  thuEN: 'THU',
  friCH: '星期五',
  friEN: 'FRI',
  satCH: '星期六',
  satEN: 'SAT',
  sunCH: '星期日',
  sunEN: 'SUN',
  morning: '上午',
  morningTime: '09:00-12:00',
  afternoon: '下午',
  afternoonTime: '13:00-16:00',
  evening: '晚上',
  eveningTime: '18:30-21:30',
})
const {
  week,
  monCH,
  monEN,
  tueCH,
  tueEN,
  wedCH,
  wedEN,
  thuCH,
  thuEN,
  friCH,
  friEN,
  satCH,
  satEN,
  sunCH,
  sunEN,
  morning,
  morningTime,
  afternoon,
  afternoonTime,
  evening,
  eveningTime,
} = toRefs(scheduleWeek)
const doctor = reactive({
  wang: '王司宏',
  xu: '徐郁芳',
  huang: '黃瑞冰',
})
const { wang, xu, huang } = toRefs(doctor)
</script>

<template>
  <section class="schedule">
    <div class="schedule-title">
      <h2>{{ title }}</h2>
      <p>{{ note }}</p>
    </div>
    <ScheduleOphthalmology class="schedule-ophthalmology">
      <template #title>
        <div class="scheduleOphthalmology-title">
          <p>{{ ophthalmology.title }}</p>
          <p>
            {{ ophthalmology.note }}
          </p>
        </div>
      </template>
      <template #content>
        <div>
          <table class="scheduleOphthalmology-table">
            <thead>
              <tr>
                <th>
                  <p>{{ week }}</p>
                </th>
                <th>
                  <p>{{ monCH }}</p>
                  <p>{{ monEN }}</p>
                </th>
                <th>
                  <p>{{ tueCH }}</p>
                  <p>{{ tueEN }}</p>
                </th>
                <th>
                  <p>{{ wedCH }}</p>
                  <p>{{ wedEN }}</p>
                </th>
                <th>
                  <p>{{ thuCH }}</p>
                  <p>{{ thuEN }}</p>
                </th>
                <th>
                  <p>{{ friCH }}</p>
                  <p>{{ friEN }}</p>
                </th>
                <th>
                  <p>{{ satCH }}</p>
                  <p>{{ satEN }}</p>
                </th>
                <th>
                  <p>{{ sunCH }}</p>
                  <p>{{ sunEN }}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>{{ morning }}</p>
                  <p>{{ morningTime }}</p>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ xu }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ huang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{{ afternoon }}</p>
                  <p>{{ afternoonTime }}</p>
                </td>
                <td>
                  <a href="/">
                    <p>{{ xu }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ huang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{{ evening }}</p>
                  <p>{{ eveningTime }}</p>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </ScheduleOphthalmology>
    <ScheduleOphthalmology class="schedule-ophthalmology">
      <template #title>
        <div class="scheduleOphthalmology-title">
          <p>{{ ophthalmology.title }}</p>
          <p>
            {{ ophthalmology.note }}
          </p>
        </div>
      </template>
      <template #content>
        <div>
          <table class="scheduleOphthalmology-table">
            <thead>
              <tr>
                <th>
                  <p>{{ week }}</p>
                </th>
                <th>
                  <p>{{ monCH }}</p>
                  <p>{{ monEN }}</p>
                </th>
                <th>
                  <p>{{ tueCH }}</p>
                  <p>{{ tueEN }}</p>
                </th>
                <th>
                  <p>{{ wedCH }}</p>
                  <p>{{ wedEN }}</p>
                </th>
                <th>
                  <p>{{ thuCH }}</p>
                  <p>{{ thuEN }}</p>
                </th>
                <th>
                  <p>{{ friCH }}</p>
                  <p>{{ friEN }}</p>
                </th>
                <th>
                  <p>{{ satCH }}</p>
                  <p>{{ satEN }}</p>
                </th>
                <th>
                  <p>{{ sunCH }}</p>
                  <p>{{ sunEN }}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>{{ morning }}</p>
                  <p>{{ morningTime }}</p>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ xu }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ huang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{{ afternoon }}</p>
                  <p>{{ afternoonTime }}</p>
                </td>
                <td>
                  <a href="/">
                    <p>{{ xu }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ huang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{{ evening }}</p>
                  <p>{{ eveningTime }}</p>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </ScheduleOphthalmology>
    <ScheduleOphthalmology class="schedule-ophthalmology">
      <template #title>
        <div class="scheduleOphthalmology-title">
          <p>{{ ophthalmology.title }}</p>
          <p>
            {{ ophthalmology.note }}
          </p>
        </div>
      </template>
      <template #content>
        <div>
          <table class="scheduleOphthalmology-table">
            <thead>
              <tr>
                <th>
                  <p>{{ week }}</p>
                </th>
                <th>
                  <p>{{ monCH }}</p>
                  <p>{{ monEN }}</p>
                </th>
                <th>
                  <p>{{ tueCH }}</p>
                  <p>{{ tueEN }}</p>
                </th>
                <th>
                  <p>{{ wedCH }}</p>
                  <p>{{ wedEN }}</p>
                </th>
                <th>
                  <p>{{ thuCH }}</p>
                  <p>{{ thuEN }}</p>
                </th>
                <th>
                  <p>{{ friCH }}</p>
                  <p>{{ friEN }}</p>
                </th>
                <th>
                  <p>{{ satCH }}</p>
                  <p>{{ satEN }}</p>
                </th>
                <th>
                  <p>{{ sunCH }}</p>
                  <p>{{ sunEN }}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>{{ morning }}</p>
                  <p>{{ morningTime }}</p>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ xu }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ huang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{{ afternoon }}</p>
                  <p>{{ afternoonTime }}</p>
                </td>
                <td>
                  <a href="/">
                    <p>{{ xu }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ huang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{{ evening }}</p>
                  <p>{{ eveningTime }}</p>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p>{{ wang }}</p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
                <td>
                  <a href="/">
                    <p></p>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </ScheduleOphthalmology>
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

  .schedule-ophthalmology {
    margin-bottom: 3rem;

    .scheduleOphthalmology-title {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2rem;

      p:first-child {
        width: min(100%, 16rem);
        background: $green-1;
        text-align: center;
        font-size: 2.2rem;
        font-weight: 700;
        letter-spacing: 0.11rem;
        color: $white-3;
        padding: 1.5rem 0;
      }

      p:last-child {
        font-size: 1.6rem;
        font-weight: 500;
        color: $black-1;
      }
    }

    .scheduleOphthalmology-table {
      width: 100%;
      border-collapse: collapse;

      th,
      td {
        border: 1px solid #e6e6e6;
        text-align: center;
        vertical-align: middle;

        p:first-child {
          font-size: 1.8rem;
          font-weight: 500;
          color: $black-2;
        }

        p:last-child {
          font-size: 1.4rem;
          font-weight: 400;
          color: $black-7;
        }
      }

      thead {
        background: $white-3;
        color: $black-7;

        tr {
          th:first-child {
            width: 35.5rem;
            height: 5.85rem;

            p:first-child {
              font-size: 1.8rem;
              font-weight: 400;
              color: $black-7;
            }
          }
          th:not(:first-child) {
            width: 20rem;

            p:first-child {
              line-height: 1.4;
            }
          }
        }
      }

      tbody {
        tr {
          td:first-child {
            height: 7rem;
            background: $white-3;

            p:first-child {
              line-height: 1.4;
            }
          }
          td:not(:first-child) {
            a {
              text-decoration: underline;
              text-decoration-color: $green-1;

              p {
                color: $green-1;
                font-size: 2.2rem;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
}
</style>
