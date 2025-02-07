<script setup>
import logo from '@/assets/img/dm-logo.png'
import fb from '@/assets/img/facebook-icon.png'
import line from '@/assets/img/line-icon.png'
import menu from '@/assets/img/white-menu.png'
import { RouterLink } from 'vue-router'
import { reactive, ref } from 'vue'

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

const windowWidth = ref(null)

window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth
})
</script>
<template>
  <header class="header" v-if="windowWidth > 992">
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
  <header class="rwd-header" v-else>
    <a href="/">
      <img :src="logo" alt="logo" class="logo" />
    </a>
    <input type="checkbox" id="menu" />
    <label for="menu" class="menu">
      <img :src="menu" alt="menu" />
    </label>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: min(100%, 192rem);
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    width: min(19%, 22.5rem);
    display: block;
    margin-left: min(8%, 15rem);
  }

  .logo {
    width: 100%;
  }

  .nav {
    width: 70%;
    margin-right: min(8%, 15rem);

    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 7%;
      @media (max-width: 1280px) {
        gap: 4%;
      }

      li {
        font-size: 1.6rem;
        font-weight: 700;
        @media (max-width: 1280px) {
          font-size: 1.2rem;
        }

        a {
          color: $black-3;
          width: 100%;
          display: block;
        }
      }
    }
  }
}

.rwd-header {
  width: min(100%, 99.2rem);
  background: $black-3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: min(2.5%, 1.5rem) 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  a {
    width: 45%;
    display: block;
    margin-left: min(6%, 15rem);

    .logo {
      width: 100%;
    }
  }

  .menu {
    width: min(12%, 11rem);
    margin-right: min(4%, 15rem);

    img {
      width: 100%;
    }
  }
}
</style>
