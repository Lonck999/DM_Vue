<script setup>
import map from '@/assets/img/map.png'
import { reactive } from 'vue'
const navLists = reactive([
  { name: '叫號進度', link: '' },
  { name: '門診時間', link: '' },
  { name: '醫療團隊', link: '' },
  { name: '診所環境', link: '' },
  { name: '聯絡我們', link: '' },
  { name: '掛號查詢', link: '' },
])
</script>

<template>
  <footer class="footer">
    <ul>
      <li v-for="navList in navLists" :key="navList.name">
        <a :href="navList.link">{{ navList.name }}</a>
      </li>
    </ul>
    <div class="map">
      <a href="/">
        <img :src="map" alt="" />
      </a>
      <div class="map-info">
        <p class="map-info-title">德美診所</p>
        <p class="map-info-address">地址：234新北市永和區中正路455-1號</p>
        <p class="map-info-phone">電話：02-2927-3001</p>
        <p class="map-info-email">Email：dl.dmmm@gmail.com</p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  width: min(100%, 192rem);
  background-color: $black-5;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0;

  ul {
    width: 60%;
    display: flex;
    gap: 5rem;
    margin-left: min(8%, 15rem);
    @media (max-width: 1280px) {
      gap: 2rem;
    }
    @media (max-width: 992px) {
      display: none;
    }

    li {
      a {
        width: 100%;
        display: block;
        color: $white-3;
        font-size: 1.6rem;
        font-weight: 700;
        &:hover {
          color: $green-2;
        }
      }
    }
  }
  .map {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    gap: 4%;
    align-items: center;
    margin-right: min(8%, 15rem);
    @media (max-width: 992px) {
      width: 100%;
      display: block;
      margin-right: 0;
    }

    a {
      width: 40%;
      display: block;
      @media (max-width: 1280px) {
        width: 90%;
        margin: 0 auto;
      }

      img {
        width: 100%;
      }
    }
    .map-info {
      color: $white-3;
      font-size: 1.4rem;
      font-weight: 700;
      @media (max-width: 992px) {
        font-size: 2rem;
        text-align: center;
        margin-top: 2rem;
      }

      &-title {
        font-size: 2rem;
        margin-bottom: 2.5rem;
        @media (max-width: 992px) {
          font-size: 3.2rem;
        }
      }

      &-address,
      &-phone,
      &-email {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
