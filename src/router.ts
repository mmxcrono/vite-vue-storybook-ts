import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import FormsPage from './pages/FormsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/forms', component: FormsPage },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
