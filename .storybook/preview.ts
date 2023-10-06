import { Preview, setup } from '@storybook/vue3';
import { createPinia } from 'pinia';
import '@/index.css';

setup((app) => {
  app.use(createPinia());
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export default preview;
