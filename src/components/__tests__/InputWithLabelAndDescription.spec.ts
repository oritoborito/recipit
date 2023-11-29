import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import InputWithLabelAndDescription from "../InputWithLabelAndDescription.vue";

describe('InputWithLabelAndDescription', () => {
  it('renders requried props', () => {
    const wrapper = mount(InputWithLabelAndDescription, {
      props: {
        label: 'label',
        description: 'description',
        value: 'value',
      }
    })
    expect(wrapper.find('label').text()).toBe('label')
    expect(wrapper.find('input').element.value).toBe('value')
    expect(wrapper.find('span').text()).toBe('description')
  })
})
