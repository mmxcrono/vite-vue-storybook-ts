import { Meta, StoryObj } from '@storybook/vue3';
import CounterExampleVue from './CounterExample.vue';

const meta = {
  title: 'Example/Counter',
  component: CounterExampleVue,
  tags: ['autodocs'],
  args: {
    msg: 'Counter',
  },
} satisfies Meta<typeof CounterExampleVue>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    msg: 'Counter Example',
  },
};
