<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/useUserStore";

const { user } = storeToRefs(useUserStore());
if (!user.value) {
  useUserStore().fetchUser();
}
</script>

<template>
  <div v-if="user" class="p-8">
    Hello, {{ user.name.first }} {{ user.name.last }}
  </div>
</template>
