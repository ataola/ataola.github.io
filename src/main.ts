import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Swal from 'sweetalert2'
import Particles from 'particles.vue3'
import router from '@/router/index'
import App from '@/App.vue'
import 'normalize.css/normalize.css'
import 'sweetalert2/src/sweetalert2.scss' // https://sweetalert.js.org/docs/#theming
// emmm, 我其实想把sweetalert拿掉的，副作用有一点啊
import '@/styles/sweetalert-fix.scss'
import CPMessage from '@/views/trash/message-box/components/message'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faPlusCircle,
  faFileDownload,
  faFileUpload,
  faTimesCircle,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons'
import { faWeixin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VConsole from 'vconsole'
import { initPlugin } from 'vue-vconsole-devtools'

// https://cn.vitejs.dev/guide/env-and-mode.html
const isDev = import.meta.env.DEV
isDev && initPlugin(new VConsole())

library.add(faSearch)
library.add(faWeixin)
library.add(faPlusCircle)
library.add(faFileDownload)
library.add(faTimesCircle)
library.add(faAngleDoubleRight)
library.add(faFileUpload)

const app = createApp(App)
app.use(router)
app.use(Particles)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.globalProperties.$Swal = Swal
app.config.globalProperties._$message = CPMessage
app.mount('#app')

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $Swal: typeof Swal
    _$message: typeof CPMessage
  }
}
