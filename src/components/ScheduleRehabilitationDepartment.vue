<script setup>
import { useTableStore } from '@/stores/table'
import { storeToRefs } from 'pinia'
const tableStore = useTableStore()
const { schedule, rehabilitation } = storeToRefs(tableStore)
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
} = schedule.value
const {
  title,
  note1,
  note2,
  doctor,
  rehabilitationTimeTitle,
  rehabilitationMorning,
  rehabilitationMorningTime,
  rehabilitationAfternoon,
  rehabilitationAfternoonTime,
  rehabilitationLast,
  rehabilitationLastTime,
  rehabilitationNotice,
  occupationTimeTitle,
} = rehabilitation.value
</script>
<template>
  <div class="scheduleOphthalmology">
    <div class="scheduleOphthalmology-title">
      <p>{{ title }}</p>
      <div>
        <p>
          {{ note1 }}
        </p>
        <p>
          {{ note2 }}
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
                <p>{{ doctor }}</p>
              </a>
            </td>
            <td>
              <a href="/">
                <p>{{ doctor }}</p>
              </a>
            </td>
            <td>
              <a href="/">
                <p>{{ doctor }}</p>
              </a>
            </td>
            <td>
              <a href="/">
                <p>{{ doctor }}</p>
              </a>
            </td>
            <td>
              <a href="/">
                <p>{{ doctor }}</p>
              </a>
            </td>
            <td>
              <a href="/">
                <p>{{ doctor }}</p>
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
                <p>{{ doctor }}</p>
              </a>
            </td>
            <td>
              <a href="/">
                <p>{{ doctor }}</p>
              </a>
            </td>
            <td>
              <a href="/">
                <p>{{ doctor }}</p>
              </a>
            </td>
            <td>
              <a href="/">
                <p></p>
              </a>
            </td>
            <td>
              <a href="/">
                <p>{{ doctor }}</p>
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
                <p>{{ doctor }}</p>
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
    <div class="details">
      <div class="details-rehabilitation">
        <p class="details-rehabilitation-title">{{ rehabilitationTimeTitle }}</p>
        <p>
          {{ rehabilitationMorning }}<span>{{ rehabilitationMorningTime }}</span>
        </p>
        <p>
          {{ rehabilitationAfternoon }}<span>{{ rehabilitationAfternoonTime }}</span>
        </p>
        <div>
          <p>
            {{ rehabilitationLast }}<span>{{ rehabilitationLastTime }}</span>
          </p>
          <p>{{ rehabilitationNotice }}</p>
        </div>
      </div>
      <div class="details-occupation">
        <p>{{ occupationTimeTitle }}</p>
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
.details {
  margin-top: 1rem;

  .details-rehabilitation {
    display: flex;
    align-items: center;

    &-title {
      font-size: 2rem;
      font-weight: 700;
      color: $green-1;
    }
  }
}
</style>
