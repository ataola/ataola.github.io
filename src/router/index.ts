import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/navigation',
        name: 'Navigation',
        component: () => import('@/views/navigation/index.vue'),
        meta: {
          title: '导航',
        },
      },
      {
        path: '/subject',
        name: 'Subject',
        component: () => import('@/views/subject.vue'),
        meta: {
          title: '专题',
        },
      },
      {
        path: '/laboratory',
        name: 'Laboratory',
        component: () => import('@/views/laboratory.vue'),
        meta: {
          title: '实验室',
        },
        children: [
          {
            path: '/laboratory/test1',
            name: 'LaboratoryTest',
            component: () => import('@/views/test/test1.vue'),
            meta: {
              title: '测试页',
            },
          },
          {
            path: '/laboratory/bootstrap',
            name: 'LaboratoryBootstrap',
            component: () => import('@/views/bootstrap.vue'),
            meta: {
              title: '启动页',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/bootstrap',
    name: 'Bootstrap',
    component: () => import('@/views/bootstrap.vue'),
    meta: {
      title: '启动页',
    },
  },
  {
    path: '/test/test1',
    name: 'Test1',
    component: () => import('@/views/test/test1.vue'),
    meta: {
      title: '测试页-1',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(), // https://router.vuejs.org/guide/essentials/history-mode.html#hash-mode
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home' && from.name === 'Bootstrap') {
    localStorage.setItem('isBootstrap', 'true')
  }
  if (localStorage.getItem('isBootstrap')) {
    if (to.path === '/bootstrap') {
      next('/')
    } else {
      next()
    }
  } else if (to.path === '/bootstrap') {
    next()
  } else {
    next({
      path: '/bootstrap',
    })
  }
})

export default router
