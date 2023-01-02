declare type TEl = Element & { value: string }
import { trim } from '@utils/str'
import { debounce } from 'lodash-es'

const handleTrim = (el: TEl, binding: any) => {
  el.value = binding.value ? trim(binding.value) : binding.value
}

export default {
  mounted(el: TEl, binding: any) {
    debounce(() => handleTrim(el, binding), 3000)
  },
  updated(el: TEl, binding: any) {
    debounce(() => handleTrim(el, binding), 3000)
  },
  unmounted(el: TEl, binding: any) {
    debounce(() => handleTrim(el, binding), 3000)
  },
}
