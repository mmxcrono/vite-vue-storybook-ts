import { createRouter, createWebHashHistory } from 'vue-router';
import CounterExampleVue from './pages/CounterExample.vue';
import HomeExampleVue from './pages/HomeExample.vue';

const routes = [
  { path: '/', component: HomeExampleVue },
  {
    name: 'Counter',
    path: '/counter',
    component: CounterExampleVue,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
