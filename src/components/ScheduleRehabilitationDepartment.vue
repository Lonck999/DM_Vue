<script setup>
import { useTableStore } from '@/stores/table'
import { storeToRefs } from 'pinia'
import redNotice from '@/assets/img/red-notice.png'
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
  occupationChild,
  occupationChildDay,
  occupationChildTime,
  occupationAldult,
  occupationAldultDay,
  occupationAldultTime,
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
        <p class="details-rehabilitation-title">
          {{ rehabilitationTimeTitle }}
        </p>
        <p class="details-rehabilitation-time">
          {{ rehabilitationMorning }}
          <span>{{ rehabilitationMorningTime }}</span>
        </p>
        <p class="details-rehabilitation-time">
          {{ rehabilitationAfternoon }}
          <span>{{ rehabilitationAfternoonTime }}</span>
        </p>
        <div class="details-rehabilitation-last">
          <p>
            {{ rehabilitationLast }}
            <span>
              {{ rehabilitationLastTime }}
            </span>
          </p>
          <p>
            <img :src="redNotice" alt="red-notice" />
            {{ rehabilitationNotice }}
          </p>
        </div>
      </div>
      <div class="details-occupation">
        <p class="details-occupation-title">
          {{ occupationTimeTitle }}
        </p>
        <p class="details-occupation-identity">
          {{ occupationChild }}
        </p>
        <p>
          {{ occupationChildDay }}
          <span>{{ occupationChildTime }}</span>
        </p>
        <p class="details-occupation-identity">
          {{ occupationAldult }}
        </p>
        <p>
          {{ occupationAldultDay }}
          <span>{{ occupationAldultTime }}</span>
        </p>
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
      border-left: 0.5rem solid $green-1;
      padding: 1.5rem 1rem 1.5rem 0.5rem;
    }

    &-time {
      background: $white-3;
      padding: 1.6rem 1rem;
      font-size: 1.8rem;
      font-weight: 500;
      color: $black-2;

      &:nth-child(3) {
        border-left: 0.1rem solid $white-4;
      }

      span {
        color: $green-1;
      }
    }

    &-last {
      padding: 1.6rem 1rem;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.4;
      color: $black-2;

      p:last-child {
        color: $red-1;

        img {
          width: min(6%, 1.4rem);
        }
      }
    }
  }
  .details-occupation {
    display: flex;
    align-items: center;

    &-title {
      font-size: 2rem;
      font-weight: 700;
      color: $green-1;
      border-left: 0.5rem solid $green-1;
      padding: 1.5rem 1rem 1.5rem 0.5rem;
    }

    &-identity {
      background: $white-1;
      font-size: 2rem;
      font-weight: 500;
      color: $green-1;
      padding: 1.5rem 2.2rem;
    }
  }
}
</style>
