<script lang="ts" setup>
import MainForm from "@/components/MainForm.vue";
</script>

<template>
  <MainForm form-name="Sign Up">
    <input
      id="name"
      type="text"
      placeholder="name"
      class="rounded-md p-4 text-gray-900"
    />
    <input
      id="email"
      type="email"
      placeholder="email"
      class="rounded-md p-4 text-gray-900"
    />
  </MainForm>
</template>
