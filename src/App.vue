<script setup lang="ts">
import VueLogo from './assets/vue.svg';
</script>

<template>
  <img :src="VueLogo" />
  <nav class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/counter">Counter</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss" scoped>
.navigation {
  gap: 16px;
  display: flex;
  justify-content: space-around;
  padding: 16px;
}
</style>
