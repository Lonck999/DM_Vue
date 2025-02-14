<script setup>
import { reactive } from 'vue'

const ophthalmology = reactive({
  title: '眼科門診',
  note: '視力保健、視力檢查、一般眼疾、近視雷射矯正、老花矯正、白內障超音波乳化治療、視網膜治療、飛蚊症雷射治療、青光眼治療、角膜塑型矯正等眼科手術。',
})
</script>
<template>
  <div class="scheduleOphthalmology">
    <div class="scheduleOphthalmology-title">
      <p>{{ ophthalmology.title }}</p>
      <p>
        {{ ophthalmology.note }}
      </p>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th><p>門診時間/星期</p></th>
            <th>
              <p>星期一</p>
              <p>MON</p>
            </th>
            <th>
              <p>星期二</p>
              <p>TUE</p>
            </th>
            <th>
              <p>星期三</p>
              <p>WED</p>
            </th>
            <th>
              <p>星期四</p>
              <p>THU</p>
            </th>
            <th>
              <p>星期五</p>
              <p>FRI</p>
            </th>
            <th>
              <p>星期六</p>
              <p>SAT</p>
            </th>
            <th>
              <p>星期日</p>
              <p>SUN</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>上午</p>
              <p>09:00-12:00</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>下午</p>
              <p>13:00-16:00</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>晚上</p>
              <p>18:30-21:30</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>1</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scheduleOphthalmology {
  width: min(100%, 180rem);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0.4rem 2rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  margin: 0 auto;
  padding: 3rem 2rem;

  .scheduleOphthalmology-title {
    display: flex;
    align-items: center;

    p:first-child {
      background: $green-1;
      font-size: 2.2rem;
      font-weight: 700;
      letter-spacing: 0.11rem;
      color: $white-3;
      padding: 1.5rem 3.5rem;
    }
  }
}
</style>
