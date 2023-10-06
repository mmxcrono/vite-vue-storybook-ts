<script setup lang="ts"></script>

<template>
  <div class="bg-sky-300 min-h-screen">
    <header>
      <nav class="gap-8 flex justify-around p-8">
        <router-link to="/">Home</router-link>
        <router-link to="/counter">Counter</router-link>
      </nav>
    </header>
    <main>

      <router-view />
    </main>
  </div>
</template>
