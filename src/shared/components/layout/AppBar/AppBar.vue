<script setup lang="ts">
import AppBarAvatarMenu from './components/AppBarAvatarMenu.vue'

defineOptions({
  inheritAttrs: false
})

defineEmits<{ 'click:nav-icon': [] }>()
</script>

<template>
  <v-app-bar title="App Bar Title">
    <template #prepend>
      <v-app-bar-nav-icon @click.exact="$emit('click:nav-icon')" />
      <v-btn icon="mdi-home" @click.exact="$router.push({ name: 'HomePage' })" />
    </template>

    <template #append> <app-bar-avatar-menu /> </template>
  </v-app-bar>
</template>
