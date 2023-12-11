import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'main' },
    },
    {
      name: 'main',
      path: '/main',
      component: AppLayout
    }
  ]
})

export default router
