<script setup>
import logo from '@/assets/img/dm-logo.png'
import fb from '@/assets/img/facebook-icon.png'
import line from '@/assets/img/line-icon.png'
import menu from '@/assets/img/white-menu.png'
import { RouterLink } from 'vue-router'
import { reactive, ref } from 'vue'
const navLists = reactive([
  { name: '叫號進度', link: '' },
  { name: '門診時間', link: '' },
  { name: '醫療團隊', link: '' },
  { name: '診所環境', link: '' },
  { name: '聯絡我們', link: '' },
  { name: '掛號查詢', link: '' },
  { name: 'facebook', icon: fb, link: 'https://www.facebook.com/dermai.clinic/?locale=zh_TW' },
  { name: 'line', icon: line, link: 'https://lin.ee/AY002Fz' },
])
const windowWidth = ref(window.innerWidth)
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.querySelector('.rwd-nav').style.transform = 'translateX(0.1px)'
  } else {
    document.querySelector('.rwd-nav').style.transform = 'translateX(-100%)'
  }
}

window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth
})
</script>
<template>
  <template v-if="windowWidth > 992">
    <header class="header">
      <RouterLink to="/">
        <img :src="logo" alt="logo" class="logo" />
      </RouterLink>
      <nav class="nav">
        <ul>
          <li v-for="navList in navLists" :key="navList.name">
            <template v-if="navList.icon">
              <a :href="navList.link">
                <img :src="navList.icon" :alt="navList.name" />
              </a>
            </template>
            <template v-else>
              <a :href="navList.link">{{ navList.name }}</a>
            </template>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  <template v-else>
    <header class="rwd-header">
      <a href="/">
        <img :src="logo" alt="logo" class="logo" />
      </a>
      <input type="checkbox" id="menu" />
      <label for="menu" class="menu" @click="toggleMenu">
        <img :src="menu" alt="menu" />
      </label>
    </header>
    <nav class="rwd-nav">
      <ul>
        <li v-for="navList in navLists" :key="navList.name">
          <a :href="navList.link">{{ navList.name }}</a>
        </li>
      </ul>
    </nav>
  </template>
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
      gap: 3.5%;
      @media (max-width: 1280px) {
        gap: 4%;
      }

      li {
        font-size: 2rem;
        font-weight: 700;
        @media (max-width: 1280px) {
          font-size: 1.6rem;
        }

        a {
          color: $black-3;
          width: 100%;
          display: block;
          &:hover {
            color: $green-2;
          }
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

  a {
    width: 55%;
    display: block;
    margin-left: min(6%, 15rem);

    .logo {
      width: 100%;
    }
  }

  #menu {
    display: none;
  }

  .menu {
    width: min(15%, 11rem);
    margin-right: min(4%, 15rem);

    img {
      width: 100%;
    }
  }
}
.rwd-nav {
  width: min(100%, 99.2rem);
  height: 100vh;
  background: $black-3;
  transform: translateX(-100%);
  transition: all 0.3s ease;
  position: fixed;
  top: 11%;
  left: 0;
  z-index: 100;

  ul {
    text-align: right;
    font-size: min(3rem, 3.6rem);
    font-weight: 700;

    li {
      padding: 8% 5% 4% 0;

      a {
        color: $white-1;
      }
    }
  }
}
</style>
