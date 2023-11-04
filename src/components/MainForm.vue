<script setup lang="ts">
defineProps({
  formName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex-grow p-4 sm:max-w-md">
    <form
      class="flex flex-col gap-4 rounded-xl border-4 border-solid border-gray-400 bg-slate-100 p-8 text-gray-900 dark:bg-sky-900 dark:text-gray-100"
    >
      <h2 class="py-4 text-2xl sm:text-4xl">{{ formName }}</h2>
      <slot></slot>
    </form>
  </div>
</template>
