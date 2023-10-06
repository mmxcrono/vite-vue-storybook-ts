<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useCounterStore } from '@/stores/counter';

const { count } = storeToRefs(useCounterStore());
defineProps<{ title?: string }>();
const { increment, decrement } = useCounterStore();
</script>

<template>
  <div class="bg-slate-300 p-4">
    <h1 class="text-3xl">{{ title ?? 'Counter' }}</h1>
    <button class="card__button-increase" type="button" @click="increment()">increase</button>
    <p class="card__count">{{ count }}</p>
    <button class="card__button-decrease" type="button" @click="decrement()">decrease</button>
  </div>
</template>
