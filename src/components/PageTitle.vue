<script setup lang="ts">
const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="my-4 px-4 text-3xl">{{ title }}</h1>
</template>
