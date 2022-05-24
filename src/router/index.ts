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
        redirect: '/laboratory/bootstrap',
        component: () => import('@/views/laboratory.vue'),
        meta: {
          title: '实验室',
        },
        children: [
          {
            path: '/laboratory/bootstrap',
            name: 'LaboratoryBootstrap',
            component: () => import('@/views/bootstrap.vue'),
            meta: {
              title: '落雪飘飘',
            },
          },
          {
            path: '/laboratory/LED-light-word',
            name: 'LEDLightWordIntro',
            component: () => import('@/views/introduction/LED-light-word.vue'),
            meta: {
              title: '流萤介绍',
            },
          },
        ],
      },
      {
        path: '/components',
        name: 'Components',
        redirect: '/components/bootstrap',
        component: () => import('@/views/components/index.vue'),
        meta: {
          title: '组件库',
        },
        children: [
          {
            path: '/components/bootstrap',
            name: 'ComponentBootstrap',
            component: () => import('@/views/bootstrap.vue'),
            meta: {
              title: '组件库-落雪',
            },
          },
        ],
      },
      {
        path: '/effect',
        name: 'Effect',
        redirect: '/effect/bootstrap',
        component: () => import('@/views/effect/index.vue'),
        meta: {
          title: '效果',
        },
        children: [
          {
            path: '/effect/bootstrap',
            name: 'EffectBootstrap',
            component: () => import('@/views/bootstrap.vue'),
            meta: {
              title: '效果-落雪',
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
      title: '落雪之门',
    },
  },
  /** test start */
  {
    path: '/test/test1',
    name: 'Test1',
    component: () => import('@/views/test/test1.vue'),
    meta: {
      title: '测试页-1',
    },
  },
  {
    path: '/test/test2',
    name: 'Test2',
    component: () => import('@/views/test/test2.vue'),
    meta: {
      title: '测试页-2',
    },
  },
  /** test end */
  /** lab start */
  {
    path: '/lab/LED-light-word',
    name: 'LEDLightWord',
    component: () => import('@/views/lab/LED-light-word/index.vue'),
    meta: {
      title: '流萤',
    },
  },
  /** lab end */
  /** trash start */
  {
    path: '/trash/marquee',
    name: 'TrashMarquee',
    component: () => import('@/views/trash/LED-light-word/trash-marquee.vue'),
    meta: {
      title: 'trash-marquee',
    },
  },
  {
    path: '/trash/hammer',
    name: 'Hammer',
    component: () => import('@/views/trash/LED-light-word/trash-hammer.vue'),
    meta: {
      title: 'trash-hammer',
    },
  },
  {
    path: '/trash/message-box',
    name: 'MessageBox',
    component: () => import('@/views/trash/message-box/index.vue'),
    meta: {
      title: 'trash-message',
    },
  },
  /** trash end */
]

const router = createRouter({
  history: createWebHashHistory(), // https://router.vuejs.org/guide/essentials/history-mode.html#hash-mode
  routes,
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

export default router
