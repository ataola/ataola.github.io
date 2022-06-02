import Message from './Message.vue'
import { mount } from '@vue/test-utils'

describe('消息测试', () => {
  it('消息能够显示文本', () => {
    const content = '你叉叉，唱日出'
    const wrapper = mount(Message, {
      props: {
        text: content,
      },
    })

    expect(wrapper.text()).toBe(content)
  })
})
