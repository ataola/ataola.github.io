import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index'
import App from '@/App.vue'
import 'normalize.css/normalize.css'
import Particles from 'particles.vue3'

const app = createApp(App)
app.use(router)
app.use(Particles)
app.use(createPinia())
app.mount('#app')
