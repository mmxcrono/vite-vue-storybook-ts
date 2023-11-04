<script setup lang="ts">
import { ref } from "vue";

const showMobileMenu = ref(false);

const toggleMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const closeMobileMenu = () => {
  showMobileMenu.value = false;
};
</script>

<template>
  <header class="flex justify-between p-8">
    <h1 class="text-xl sm:text-3xl">My Vue Project</h1>

    <nav>
      <!-- Hamburger Menu Icon for small screens -->
      <div class="text-end sm:hidden">
        <button @click="toggleMenu">
          <svg
            class="h-6 w-6 cursor-pointer text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div class="relative">
        <!-- Desktop Nav Links -->
        <div class="hidden items-center justify-around gap-8 sm:flex">
          <router-link to="/">Home</router-link>
          <router-link to="/forms">Forms</router-link>
        </div>

        <div
          v-if="showMobileMenu"
          class="absolute right-0 top-0 flex flex-col gap-4 sm:hidden"
        >
          <router-link @click="closeMobileMenu" to="/">Home</router-link>
          <router-link @click="closeMobileMenu" to="/forms">Forms</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
