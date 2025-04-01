<script setup>
import { useTableStore } from '@/stores/table'
import { storeToRefs } from 'pinia'
import ophthalmologyApi from '@/api/ophthalmology'
import { ref, onMounted } from 'vue'
const tableStore = useTableStore()
const { schedule } = storeToRefs(tableStore)
const { sunCH, sunEN, morning, afternoon, evening } = schedule.value
const apiData = ref([])
function getHtmlString(str) {
  if (!str) return ''
  const lines = str.split(/\r?\n/)
  return lines
    .map((line, index) => {
      if (index === 1) {
        return `
        <p
        style="color: #676765;
        font-size: 1.6rem;
        text-decoration: none;
        font-weight: 400;
        margin-top: 0.4rem;"
        >${line}</p>`
      }
      return `<p style="text-decoration: underline;">${line}</p>`
    })
    .join('')
}
onMounted(async () => {
  const ophthalmologyList = await ophthalmologyApi.getOphthalmologyList()
  apiData.value = ophthalmologyList
  console.log(apiData.value)
})
</script>
<template>
  <div class="scheduleOphthalmology">
    <div class="scheduleOphthalmology-title">
      <p>{{ apiData.門診科別 }}</p>
      <p v-if="apiData && apiData.依附科別清單 && apiData.依附科別清單.length > 0">
        {{ apiData.依附科別清單[0].診療項目 }}
      </p>
      <p v-else></p>
    </div>
    <div>
      <table class="scheduleOphthalmology-table">
        <thead>
          <tr>
            <th>
              <p>{{ apiData.表頭 }}</p>
            </th>
            <th v-for="data in apiData.班表內容" :key="data.順序">
              <p>{{ data.星期 }}</p>
              <p>{{ data.星期_英 }}</p>
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
              <p>{{ apiData.早 }}</p>
            </td>
            <td v-for="morning in apiData.班表內容" :key="morning.順序">
              <p v-if="morning.早 === '–'"></p>
              <a href="/" v-else>
                <p>{{ morning.早 }}</p>
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
              <p>{{ apiData.午 }}</p>
            </td>
            <td v-for="afternoon in apiData.班表內容" :key="afternoon.順序">
              <p v-if="afternoon.午 === '–'"></p>
              <a href="/" v-else>
                <p v-html="getHtmlString(afternoon.午)"></p>
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
              <p>{{ apiData.晚 }}</p>
            </td>
            <td v-for="evening in apiData.班表內容" :key="evening.順序">
              <p v-if="evening.晚 === '–'"></p>
              <a href="/" v-else>
                <p v-html="getHtmlString(evening.晚)"></p>
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
            text-decoration: none;
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

.time {
  color: $black-6;
  font-size: 1.6rem;
  font-weight: 400;
}
</style>
