// https://pinia.vuejs.org/introduction.html
import { createPinia } from 'pinia'

const store = createPinia()

export function setupStore(app) {
  app.use(store)
}

export { store }
