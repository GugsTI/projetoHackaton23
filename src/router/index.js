/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'
import PisosItem from '../views/PisosItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pisos',
      component: PisosItem
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
