<script setup>
import { reactive, toRefs } from 'vue'
const schedule = reactive({
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
} = toRefs(schedule)
const ophthalmology = reactive({
  title: '復健科門診',
  note1:
    '物理治療：冰凍肩(五十肩)、下背痛(腰痛)、坐骨神經痛、膝關節傷害、臏骨軟化症及其他膝蓋疼痛、腳踝扭傷等肌肉骨骼以及神經控制系統各種的不悅感或異常感。',
  note2:
    '職能治療：成人治療範圍：腦傷、中風、脊椎損傷、骨折、燒燙傷等... / 兒童治療範圍：自閉症、過動症、腦性麻痺、發展遲緩、感覺統合失調、學習障礙等...。',
})
const doctor = reactive({
  wang: '王司宏',
  xu: '徐郁芳',
  huang: '黃瑞冰',
})
const { wang, xu, huang } = toRefs(doctor)
const rehabilitation = reactive({
  morning: '上午',
  morningTime: '08:00-12:00',
  afternoon: '下午',
  afternoonTime: '14:00-21:00',
  last: '復健治療最後收單時間 : ',
  lastTime: '11:30、20:30',
  notice: '星期六至18:00 星期日至12:00',
})
const occupation = reactive({
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
      <p>{{ ophthalmology.title }}</p>
      <div>
        <p>
          {{ ophthalmology.note1 }}
        </p>
        <p>
          {{ ophthalmology.note2 }}
        </p>
      </div>
    </div>
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
    <div>
      <p>123</p>
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
