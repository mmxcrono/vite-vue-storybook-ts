<template>
  <div
    class="min-h-screen bg-sky-100 text-gray-900 dark:bg-sky-900 dark:text-gray-100"
  >
    <header class="flex justify-between">
      <h1 class="p-8 text-2xl sm:text-4xl">Vue 3 + Tailwind</h1>
      <nav class="flex items-center justify-around gap-8 p-8">
        <router-link to="/">Home</router-link>
        <router-link to="/forms">Forms</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
