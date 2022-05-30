import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/layout/index.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@views/home.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/navigation',
        name: 'Navigation',
        component: () => import('@views/navigation/index.vue'),
        meta: {
          title: '导航',
        },
      },
      {
        path: '/subject',
        name: 'Subject',
        component: () => import('@views/subject.vue'),
        meta: {
          title: '专题',
        },
      },
      {
        path: '/laboratory',
        name: 'Laboratory',
        redirect: '/laboratory/bootstrap',
        component: () => import('@views/laboratory.vue'),
        meta: {
          title: '实验室',
        },
        children: [
          {
            path: '/laboratory/bootstrap',
            name: 'LaboratoryBootstrap',
            component: () => import('@views/bootstrap.vue'),
            meta: {
              title: '落雪飘飘',
            },
          },
          {
            path: '/laboratory/LED-light-word',
            name: 'LEDLightWordIntro',
            component: () => import('@views/introduction/LED-light-word.vue'),
            meta: {
              title: '流萤介绍',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/bootstrap',
    name: 'Bootstrap',
    component: () => import('@views/bootstrap.vue'),
    meta: {
      title: '程序员的成长自留地',
    },
  },
  /** lab start */
  {
    path: '/lab/LED-light-word',
    name: 'LEDLightWord',
    component: () => import('@views/lab/LED-light-word/index.vue'),
    meta: {
      title: '流萤',
    },
  },
  /** lab end */
  /** trash start */
  {
    path: '/trash/message-box',
    name: 'MessageBox',
    component: () => import('@views/trash/message-box/index.vue'),
    meta: {
      title: 'trash-message',
    },
  },
  /** trash end */
  {
    path: '/404',
    name: '404',
    component: () => import('@views/404.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@views/404.vue'),
    meta: {
      title: '404',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(), // https://router.vuejs.org/guide/essentials/history-mode.html#hash-mode
  routes,
  scrollBehavior: () => ({
    top: 0,
  }),
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to) {
    const { meta } = to
    document.title = to.meta.title ? `江涛网-${to.meta.title}` : '江涛网-程序员的成长自留地'
  }
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

router.afterEach(() => {
  NProgress.done()
})

router
  .isReady()
  .then(() =>
    console.log("%cWelcome to ZhengJiangTao's website, have fun!", 'color: #43bb88;font-size: 24px;font-weight: bold;')
  )

router.onError((err) => {
  console.error(err)
})

export default router
