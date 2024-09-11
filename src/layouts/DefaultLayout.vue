<script setup lang="ts">
import { AppBar, NavigationDrawer } from '@/shared/components/layout'
import { ref } from 'vue'

defineOptions({
  inheritAttrs: false
})

const drawer = ref(false)

function toogleDrawer() {
  drawer.value = !drawer.value
}
</script>

<template>
  <app-bar @click:nav-icon="toogleDrawer" />
  <navigation-drawer v-model="drawer" />

  <v-main>
    <v-container>
      <router-view #="{ Component, route }">
        <v-fade-transition hide-on-leave>
          <component :is="Component" :key="route.path" />
        </v-fade-transition>
      </router-view>
    </v-container>
  </v-main>
</template>
