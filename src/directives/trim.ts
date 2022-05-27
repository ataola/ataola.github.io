declare type TEl = Element & { value: string }
import { trim } from '@utils/str'

const handleTrim = (el: TEl, binding: any) => {
  el.value = binding.value ? trim(binding.value) : binding.value
}

export default {
  mounted(el: TEl, binding: any) {
    handleTrim(el, binding)
  },
  updated(el: TEl, binding: any) {
    handleTrim(el, binding)
  },
  unmounted(el: TEl, binding: any) {
    handleTrim(el, binding)
  },
}
