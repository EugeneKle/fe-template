import { defineStore } from 'pinia'
import { useUserStore } from './userStore'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore()

  const token = ref<string | null>(localStorage.getItem('token'))

  function clearToken() {
    localStorage.removeItem('token')
    token.value = null
  }

  function logout() {
    clearToken()
    userStore.clearUser()
  }

  function login() {}

  return {
    token,
    clearToken,
    logout,
    login
  }
})
