import type { User } from '@/shared/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  function clearUser() {
    user.value = null
  }
  return {
    user,
    clearUser
  }
})
