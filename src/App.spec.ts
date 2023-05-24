import { mount } from '@vue/test-utils'
import App from './App.vue'

test('renders a todo', () => {
  const wrapper = mount(App)

  const todo = wrapper.get('[data-test="todo"]')

  expect(todo.text()).toBe('Learn Vue.js 3')
})
