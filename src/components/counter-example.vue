<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
defineProps<{ msg: string }>();
const counter = useCounterStore();
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button class="card__button" type="button" @click="counter.increment()">increase</button>
    <p>{{ counter.count }}</p>
    <button class="card__button" type="button" @click="counter.decrement()">decrease</button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;

  /* BEM naming convention */
  &__button {
    border: 2px solid transparent;
  }
}
</style>
