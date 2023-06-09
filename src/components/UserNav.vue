<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/user';

const { user } = storeToRefs(useUserStore());
if (!user.value) {
  useUserStore().fetchUser();
}
</script>

<template>
  <div>Hello, {{ user?.name.first }} {{ user?.name.last }}</div>
</template>

<style lang="scss" scoped></style>
