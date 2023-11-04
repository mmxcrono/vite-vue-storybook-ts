<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRandomUser } from "@/stores/useRandomUser";

const { user } = storeToRefs(useRandomUser());
if (!user.value) {
  useRandomUser().fetchRandomUser();
}
</script>

<template>
  <div v-if="user" class="p-8">
    Hello, {{ user.name.first }} {{ user.name.last }}
  </div>
</template>
