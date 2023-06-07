<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia';

const { count } = storeToRefs(useCounterStore());
defineProps<{ msg: string }>();
const { increment, decrement } = useCounterStore();
</script>

<template>
  <div class="card">
    <h1 class="title">{{ msg }}</h1>
    <button class="card__button-increase" type="button" @click="increment()">increase</button>
    <p class="card__count">{{ count }}</p>
    <button class="card__button-decrease" type="button" @click="decrement()">decrease</button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #242424;

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
