<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import TopHeader from "@/components/TopHeader.vue";
</script>

<template>
  <MainLayout>
    <TopHeader />
    <main>
      <router-view />
    </main>
  </MainLayout>
</template>
