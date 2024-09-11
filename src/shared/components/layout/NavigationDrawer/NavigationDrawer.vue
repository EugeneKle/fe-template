<script setup lang="ts">
import LightLogo from '@/assets/images/vuetify-logo-light.png'
import useNavigationItems from './composables/useNavigationItems'

defineOptions({
  inheritAttrs: false
})

const modelValue = defineModel<boolean>()

const { navigationItems } = useNavigationItems()
</script>
<template>
  <v-navigation-drawer v-model="modelValue">
    <v-list nav>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.to"
        :prepend-icon="item.icon"
      >
        {{ item.title }}
      </v-list-item>
    </v-list>

    <template #append>
      <v-img class="mx-auto pa-3" :src="LightLogo" alt="logo" width="150" />
    </template>
  </v-navigation-drawer>
</template>
