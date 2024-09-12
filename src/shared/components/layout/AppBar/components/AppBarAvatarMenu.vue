<script setup lang="ts">
import { useAuthStore } from '@/stores'

defineOptions({
  inheritAttrs: false
})

const authStore = useAuthStore()
</script>
<template>
  <v-menu open-on-hover :close-on-content-click="false" width="280">
    <template #activator="{ props: VMenuProps }">
      <v-avatar v-bind="VMenuProps" class="cursor-pointer" border>JC</v-avatar>
    </template>

    <v-card>
      <v-list>
        <v-list-item title="John Cena" subtitle="john.cena@gmail.com">
          <template #prepend>
            <v-avatar border>JC</v-avatar>
          </template>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" color="primary" @click="authStore.logout">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
