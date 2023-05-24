<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia'
const { count } = storeToRefs(useCounterStore());
defineProps<{ msg: string }>();
const { increment, decrement } = useCounterStore();
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button class="card__button-increase" type="button" @click="increment()">increase</button>
    <p>{{ count }}</p>
    <button class="card__button-decrease" type="button" @click="decrement()">decrease</button>
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
