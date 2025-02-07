<script setup>
import logo from '@/assets/img/dm-logo.png'
import fb from '@/assets/img/facebook-icon.png'
import line from '@/assets/img/line-icon.png'
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'

const navList = reactive([
  { name: '叫號進度', link: '' },
  { name: '門診時間', link: '' },
  { name: '醫療團隊', link: '' },
  { name: '診所環境', link: '' },
  { name: '聯絡我們', link: '' },
  { name: '掛號查詢', link: '' },
  { name: 'facebook', icon: fb, link: 'https://www.facebook.com/dermai.clinic/?locale=zh_TW' },
  { name: 'line', icon: line, link: 'https://lin.ee/AY002Fz' },
])
</script>
<template>
  <header class="header">
    <RouterLink to="/">
      <img :src="logo" alt="logo" class="logo" />
    </RouterLink>
    <nav class="nav">
      <ul>
        <li v-for="item in navList" :key="item.name">
          <template v-if="item.icon">
            <a :href="item.link">
              <img :src="item.icon" :alt="item.name" />
            </a>
          </template>
          <template v-else>
            <a :href="item.link">{{ item.name }}</a>
          </template>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: pink;

  a {
    width: min(19%, 22.5rem);
    display: block;
    margin-left: min(8%, 15rem);
  }

  .logo {
    width: 100%;
  }

  .nav {
    width: 60%;
    margin-right: min(8%, 15rem);

    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 7%;
      background: orange;
      li {
        font-size: 1.6rem;
        font-weight: 700;
        a {
          width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
