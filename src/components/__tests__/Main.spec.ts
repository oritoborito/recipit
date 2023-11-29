import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Main from "../MainLandmark.vue";

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Main)
    expect(wrapper.element.tagName.toLowerCase()).toContain('main')
  })
})
