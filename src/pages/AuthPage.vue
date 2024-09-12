<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { VForm } from 'vuetify/components'
import { useAuthStore } from '@/stores'

const email = ref('')
const password = ref('')

const router = useRouter()
const authStore = useAuthStore()

const formRef = ref<InstanceType<typeof VForm> | null>(null)

async function handleLogin() {
  const { valid } = await formRef.value!.validate()

  if (!valid) {
    return
  }

  const logedIn = await authStore.login(email.value, password.value)

  if (logedIn) {
    router.push({ name: 'HomePage' })
  } else {
    alert('Incorrect password or email')
  }
}
</script>

<template>
  <v-row justify="center" align="center">
    <v-col cols="auto">
      <v-card class="pa-4" width="350">
        <v-card-title class="text-center mb-3">Login</v-card-title>
        <v-card-text>
          <v-form ref="formRef" @submit.prevent="handleLogin">
            <v-row dense>
              <v-col cols="12">
                <v-text-field v-model="email" label="Email *" type="email" required />
              </v-col>

              <v-col cols="12">
                <v-text-field v-model="password" label="Password *" type="password" required />
              </v-col>
              <v-col>
                <v-btn block type="submit" color="primary">Login</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
