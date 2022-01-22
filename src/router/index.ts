import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: '首页'
    }
  }
]

const router = createRouter({
  history: createWebHistory(), // https://next.router.vuejs.org/api/#createwebhistory
  routes
})

export default router