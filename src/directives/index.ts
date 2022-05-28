import trim from './trim'
import { Directive, App } from 'vue'
import { TObj } from '@/types/global/types'

const directives: TObj<Directive> = {
  trim,
}

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  },
}
