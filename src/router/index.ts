import { useUserStore } from '@/stores'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'HomePage',
          component: () => import('@/pages/HomePage.vue')
        },
        {
          path: 'profile',
          name: 'ProfilePage',
          component: () => import('@/pages/ProfilePage.vue')
        },
        {
          path: 'settings',
          name: 'SettingsPage',
          component: () => import('@/pages/SettingsPage.vue')
        }
      ]
    },
    {
      path: '/auth',
      name: 'AuthLayout',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: '',
          name: 'AuthPage',
          component: () => import('@/pages/AuthPage.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to) => {
  const userStore = useUserStore()

  if (!userStore.user && to.name !== 'AuthPage') {
    return { name: 'AuthPage' }
  }
})

export default router
