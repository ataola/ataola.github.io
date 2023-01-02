import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from 'particles.vue3'
import router from '@router/index'
import directives from '@directives/index'
import '@mock'
import App from '@/App.vue'
import 'normalize.css/normalize.css'
import Message from '@components/message/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faWeixin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { globalComponents } from '@components/index'
import 'vue-fullpage.js/dist/style.css'
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

library.add(faSearch)
library.add(faWeixin)
library.add(faAngleDoubleRight)

const app = createApp(App)
app.use(router)
app.use(Particles)
app.use(VueFullPage)
app.use(createPinia())
app.use(directives)

app.component('font-awesome-icon', FontAwesomeIcon)
globalComponents.forEach((component) => app.component(component.name, component))

app.config.globalProperties.$message = Message
app.mount('#app')

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof Message
  }
}
