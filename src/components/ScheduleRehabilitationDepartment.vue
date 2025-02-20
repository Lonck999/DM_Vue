<script setup>
import { useTableStore } from '@/stores/table'
import { storeToRefs } from 'pinia'
import { reactive, toRefs } from 'vue'

const tableStore = useTableStore()
const { scheduleWeek } = storeToRefs(tableStore.schedule)
const ophthalmology = reactive({
  ophthalmologyTitle: '復健科門診',
  ophthalmologyNote1:
    '物理治療：冰凍肩(五十肩)、下背痛(腰痛)、坐骨神經痛、膝關節傷害、臏骨軟化症及其他膝蓋疼痛、腳踝扭傷等肌肉骨骼以及神經控制系統各種的不悅感或異常感。',
  ophthalmologyNote2:
    '職能治療：成人治療範圍：腦傷、中風、脊椎損傷、骨折、燒燙傷等... / 兒童治療範圍：自閉症、過動症、腦性麻痺、發展遲緩、感覺統合失調、學習障礙等...。',
})
const { ophthalmologyTitle, ophthalmologyNote1, ophthalmologyNote2 } = toRefs(ophthalmology)

const doctor = reactive({
  wang: '王司宏',
  xu: '徐郁芳',
  huang: '黃瑞冰',
})
const { wang, xu, huang } = toRefs(doctor)
const rehabilitation = reactive({
  name: '復健治療時間',
  morning: '上午',
  morningTime: '08:00-12:00',
  afternoon: '下午',
  afternoonTime: '14:00-21:00',
  last: '復健治療最後收單時間 : ',
  lastTime: '11:30、20:30',
  notice: '星期六至18:00 星期日至12:00',
})
const occupation = reactive({
  name: '職能治療時間',
  child: '兒童',
  childDay: '星期一至五',
  childTime: '13:00 - 21:00',
  aldult: '成人',
  aldultDay: '星期一至六',
  aldultTime: '09:00 - 12:00',
})
</script>
<template>
  <div class="scheduleOphthalmology">
    <div class="scheduleOphthalmology-title">
      <p>{{ ophthalmologyTitle }}</p>
      <div>
        <p>
          {{ ophthalmologyNote1 }}
        </p>
        <p>
          {{ ophthalmologyNote2 }}
        </p>
      </div>
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
    <div>
      <div>
        <p>{{ rehabilitation.name }}</p>
      </div>
      <div>
        <p>{{ occupation.name }}</p>
      </div>
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

    > p:first-child {
      width: min(100%, 16rem);
      background: $green-1;
      text-align: center;
      font-size: 2.2rem;
      font-weight: 700;
      letter-spacing: 0.11rem;
      color: $white-3;
      padding: 1.5rem 0;
    }
    p {
      font-size: 1.6rem;
      font-weight: 500;
      color: $black-1;
    }
    p + p {
      margin-top: 1rem;
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
