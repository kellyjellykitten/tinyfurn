<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue'

</script>

<template>
  <div>
    <MenuBar />
  </div>
  <RouterView />
</template>

<style scoped>
</style>


<!-- <Menubar :model="items">
  <template #item="{item}">
    <router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}">
      <a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}">{{route.fullPath}}</a>
    </router-link>
  </template>
</Menubar> -->