<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <div>
      <HelloWorld />
    </div>
  </header>
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: var(--font-family,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol");
  min-height: 100%;
  margin: 0;
  padding: 0;
  color: var(--text-color);
  background-color: var(--surface-ground);
  transition: color 0.5s;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header{
  height: 100vh;
  width: 100vw;
  display:flex;
  align-items:center;
  justify-content:center;
}

nav {
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>