<script setup lang="ts">
import { onBeforeMount } from 'vue'

onBeforeMount(async () => {
  const response = await fetch('https://example.com/user')
  const user = await response.json()
  console.log(user)
})
</script>
<template>
  <h1>Auth page</h1>
</template>
