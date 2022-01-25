import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index'
import App from '@/App.vue'
import 'normalize.css/normalize.css'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
