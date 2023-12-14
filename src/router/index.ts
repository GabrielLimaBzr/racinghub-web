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
      name: 'racing',
      path: '/racing',
      component: AppLayout,
      children: [
        {
          name: 'main',
          path: '/main',
          component: () => import('../views/MainView.vue'),
        },
        {
          name: 'event',
          path: '/event/:id',
          component: () => import('../views/EventView.vue'),
        }
      ]
    }
  ]
})

export default router
