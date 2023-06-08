<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia';

const { count } = storeToRefs(useCounterStore());
defineProps<{ title?: string }>();
const { increment, decrement } = useCounterStore();
</script>

<template>
  <div class="card">
    <h1 class="title">{{ title ?? 'Counter' }}</h1>
    <button class="card__button-increase" type="button" @click="increment()">increase</button>
    <p class="card__count">{{ count }}</p>
    <button class="card__button-decrease" type="button" @click="decrement()">decrease</button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  /* BEM naming convention */
  &__button {
    border: 2px solid transparent;
  }

  &__count {
    text-align: center;
    font-size: 16pt;
  }
}
</style>
