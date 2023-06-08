import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';
import '../src/style.scss';

setup((app) => {
  app.use(createPinia());
});
