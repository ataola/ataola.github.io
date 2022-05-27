import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from 'particles.vue3'
import router from '@router/index'
import directives from '@directives/index'
import App from '@/App.vue'
import 'normalize.css/normalize.css'
import CPMessage from '@views/trash/message-box/components/message'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faWeixin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
library.add(faWeixin)
library.add(faAngleDoubleRight)

const app = createApp(App)
app.use(router)
app.use(Particles)
app.use(createPinia())
app.use(directives)

app.component('font-awesome-icon', FontAwesomeIcon)
const modulesFiles: any = import.meta.globEager('./components/*/*.vue')
const publicComponent = Object.keys(modulesFiles).filter((item: any) => true)
publicComponent.forEach((item: any) => {
  const componentConfig = modulesFiles[item]
  const moduleName = componentConfig.default.name
  app.component(moduleName, componentConfig.default || componentConfig)
})

app.config.globalProperties._$message = CPMessage
app.mount('#app')

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    _$message: typeof CPMessage
  }
}
