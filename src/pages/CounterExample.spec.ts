import { mount } from '@vue/test-utils';
import CounterExample from './CounterExample.vue';
import { createTestingPinia } from '@pinia/testing';
import { useCounterStore } from '../stores/counter';

test('renders CounterExample', () => {
  const msg = 'My Message';

  const wrapper = mount(CounterExample, {
    props: {
      title: msg,
    },
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            counter: {
              count: 0,
            },
          },
        }),
      ],
    },
  });

  const counterStore = useCounterStore();
  expect(wrapper.text()).toContain(msg);
  expect(wrapper.text()).toContain('increase');
  expect(wrapper.text()).toContain('0');
  expect(wrapper.text()).toContain('decrease');
  wrapper.find('.card__button-increase').trigger('click');
  expect(counterStore.increment).toHaveBeenCalledTimes(1);
  wrapper.find('.card__button-decrease').trigger('click');
  expect(counterStore.decrement).toHaveBeenCalledTimes(1);
});
