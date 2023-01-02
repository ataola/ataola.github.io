import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
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
        path: '/door-of-future',
        name: 'Future',
        component: () => import('@views/future/index.vue'),
        meta: {
          title: '玉の涛',
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
        redirect: '/laboratory/liuying',
        component: () => import('@views/laboratory.vue'),
        meta: {
          title: '实验室',
        },
        children: [
          {
            path: '/laboratory/liuying',
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
  {
    path: '/ZJT-LOVE-YUER-FOREVER',
    name: 'Love',
    component: () => import('@views/love/index.vue'),
    meta: {
      title: '郑江涛永远爱玉儿',
    },
  },
  /** lab start */
  {
    path: '/lab/liuying',
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
    path: '/map/map1',
    name: 'Map1',
    component: () => import('@views/map/map1.vue'),
    meta: {
      title: 'Map1',
    },
  },
  {
    path: '/echarts/china',
    name: 'China',
    component: () => import('@/views/echarts/china.vue'),
    meta: {
      title: 'China',
    },
  },
  {
    path: '/echarts/zhejiang',
    name: 'zhejiang',
    component: () => import('@/views/echarts/zhejiang.vue'),
    meta: {
      title: 'zhejiang',
    },
  },
  {
    path: '/echarts/quzhou',
    name: 'quzhou',
    component: () => import('@/views/echarts/quzhou.vue'),
    meta: {
      title: 'quzhou',
    },
  },
  {
    path: '/echarts/yunnan',
    name: 'yunnan',
    component: () => import('@/views/echarts/yunnan.vue'),
    meta: {
      title: 'yunnan',
    },
  },
  {
    path: '/echarts/xishuangbanna',
    name: 'xishuangbanna',
    component: () => import('@/views/echarts/xishuangbanna.vue'),
    meta: {
      title: 'xishuangbanna',
    },
  },
  {
    path: '/echarts/jinghong',
    name: 'jinghong',
    component: () => import('@/views/echarts/jinghong.vue'),
    meta: {
      title: 'jinghong',
    },
  },
  {
    path: '/echarts/kecheng',
    name: 'kecheng',
    component: () => import('@/views/echarts/kecheng.vue'),
    meta: {
      title: 'kecheng',
    },
  },
  {
    path: '/echarts/distance',
    name: 'distance',
    component: () => import('@/views/echarts/distance.vue'),
    meta: {
      title: 'distance',
    },
  },
  {
    path: '/echarts/dynamic',
    name: 'dynamic',
    component: () => import('@/views/echarts/dynamic.vue'),
    meta: {
      title: 'dynamic',
    },
  },
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

const router: Router = createRouter({
  history: createWebHashHistory(), // https://router.vuejs.org/guide/essentials/history-mode.html#hash-mode
  routes,
  scrollBehavior: () => ({
    top: 0,
  }),
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to) {
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
