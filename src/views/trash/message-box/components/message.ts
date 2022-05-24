import { createVNode, render } from 'vue'
import CPMessage from './Message.vue'

const div = document.createElement('div')
div.setAttribute('class', 'cp-message-container')
document.body.appendChild(div)

export default ({ text, type, duration = 1000 }) => {
  let timer: ReturnType<typeof setTimeout> | undefined = void 0

  const vnode = createVNode(CPMessage, { text, type })
  render(vnode, div)

  clearTimeout(timer)

  timer = setTimeout(() => {
    render(null, div)
  }, duration)
}
