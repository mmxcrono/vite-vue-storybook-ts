import { Meta, StoryObj } from '@storybook/vue3';
import CounterExample from './CounterExample.vue';

const meta: Meta<typeof CounterExample> = {
  component: CounterExample,
  tags: ['autodocs'],
  argTypes: {
    title: {
      options: ['title1', 'title2'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof CounterExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Counter Example',
  },
};

// Another way to write the story
// export const Secondary: Story = {
//   render: () => ({
//     components: { CounterExample: CounterExample },
//     template: '<CounterExample msg="test"/>',
//   }),
// };
