import { defineStore } from 'pinia'
import { useUserStore } from './userStore'
import { ref } from 'vue'
import type { User } from '@/shared/types'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore()
  const router = useRouter()

  const token = ref<string | null>(localStorage.getItem('token'))

  function clearToken() {
    localStorage.removeItem('token')
    token.value = null
  }

  function logout() {
    clearToken()
    userStore.clearUser()
    router.push({ name: 'AuthPage' })
  }

  async function login(email: string, password: string) {
    const res = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    })

    if (!res.ok) {
      return false
    }

    const data = (await res.json()) as User

    token.value = data.email
    localStorage.setItem('token', data.email)
    userStore.user = data

    return true
  }

  return {
    token,
    clearToken,
    logout,
    login
  }
})
