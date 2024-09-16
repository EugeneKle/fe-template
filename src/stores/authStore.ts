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

  async function logout() {
    const res = await fetch('/logout')

    if (res.ok) {
      clearToken()
      userStore.clearUser()
      void router.push({ name: 'AuthPage' })
    }
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
      console.error('Login failed')
      return false
    }

    const data = (await res.json()) as User

    token.value = data.token
    localStorage.setItem('token', data.token)
    userStore.user = data

    return true
  }

  async function relogin() {
    if (!token.value) {
      return false
    }

    const res = await fetch('/relogin', {
      method: 'POST'
    })

    if (res.ok) {
      const data = (await res.json()) as User
      userStore.user = data
      return true
    }

    clearToken()
    return false
  }

  return {
    token,
    clearToken,
    logout,
    login,
    relogin
  }
})
