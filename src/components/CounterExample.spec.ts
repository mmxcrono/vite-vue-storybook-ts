import { mount } from '@vue/test-utils'
import CounterExample from './CounterExample.vue'
import { createTestingPinia } from '@pinia/testing'
import { useCounterStore } from '../stores/counter'


test('renders CounterExample', () => {
  const wrapper = mount(CounterExample, {
    props: {
      msg: 'My Message'
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
  expect(wrapper.text()).toContain('My Message');
  expect(wrapper.text()).toContain('increase');
  expect(wrapper.text()).toContain('0');
  expect(wrapper.text()).toContain('decrease');
  wrapper.find('.card__button-increase').trigger('click');
  expect(counterStore.increment).toHaveBeenCalledTimes(1)
})
