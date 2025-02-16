import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/',
      component: Home,
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: () => import('../views/Reserve.vue'),
    },
  ],
})

export default router
