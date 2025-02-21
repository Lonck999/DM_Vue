<script setup>
import { useTableStore } from '@/stores/table'
import { storeToRefs } from 'pinia'
import { reactive, toRefs } from 'vue'

const tableStore = useTableStore()
const { schedule, ophthalmology } = storeToRefs(tableStore)
const {
  scheduleWeek,
  scheduleMonCH,
  scheduleMonEN,
  scheduleTueCH,
  scheduleTueEN,
  scheduleWedCH,
  scheduleWedEN,
  scheduleThuCH,
  scheduleThuEN,
  scheduleFriCH,
  scheduleFriEN,
  scheduleSatCH,
  scheduleSatEN,
  scheduleSunCH,
  scheduleSunEN,
  scheduleMorning,
  scheduleMorningTime,
  scheduleAfternoon,
  scheduleAfternoonTime,
  scheduleEvening,
  scheduleEveningTime,
} = schedule.value
const { ophthalmologyTitle, ophthalmologyNote } = ophthalmology.value
const doctor = reactive({
  wang: '王司宏',
  xu: '徐郁芳',
  huang: '黃瑞冰',
})
const { wang, xu, huang } = toRefs(doctor)
</script>
<template>
  <div class="scheduleOphthalmology">
    <div class="scheduleOphthalmology-title">
      <p>{{ ophthalmologyTitle }}</p>
      <p>
        {{ ophthalmologyNote }}
      </p>
    </div>
    <div>
      <table class="scheduleOphthalmology-table">
        <thead>
          <tr>
            <th>
              <p>{{ scheduleWeek }}</p>
            </th>
            <th>
              <p>{{ scheduleMonCH }}</p>
              <p>{{ scheduleMonEN }}</p>
            </th>
            <th>
              <p>{{ scheduleTueCH }}</p>
              <p>{{ scheduleTueEN }}</p>
            </th>
            <th>
              <p>{{ scheduleWedCH }}</p>
              <p>{{ scheduleWedEN }}</p>
            </th>
            <th>
              <p>{{ scheduleThuCH }}</p>
              <p>{{ scheduleThuEN }}</p>
            </th>
            <th>
              <p>{{ scheduleFriCH }}</p>
              <p>{{ scheduleFriEN }}</p>
            </th>
            <th>
              <p>{{ scheduleSatCH }}</p>
              <p>{{ scheduleSatEN }}</p>
            </th>
            <th>
              <p>{{ scheduleSunCH }}</p>
              <p>{{ scheduleSunEN }}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>{{ scheduleMorning }}</p>
              <p>{{ scheduleMorningTime }}</p>
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
              <p>{{ scheduleAfternoon }}</p>
              <p>{{ scheduleAfternoonTime }}</p>
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
              <p>{{ scheduleEvening }}</p>
              <p>{{ scheduleEveningTime }}</p>
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
  </div>
</template>

<style lang="scss" scoped>
.scheduleOphthalmology {
  width: min(calc(100% - 4rem), 180rem);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0.4rem 2rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  margin: 0 auto;
  padding: 3rem 2rem;

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
</style>
