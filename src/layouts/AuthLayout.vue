<template>
  <v-main>
    <v-container class="fill-height">
      <router-view #="{ Component, route }">
        <v-fade-transition hide-on-leave>
          <component :is="Component" :key="route.path" />
        </v-fade-transition>
      </router-view>
    </v-container>
  </v-main>
</template>
