import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import layout from '@/layout/index.vue';

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
          title: '首页'
        }
      }
    ],
  },
  {
    path: '/bootstrap',
    name: 'Bootstrap',
    component: () => import('@/views/bootstrap.vue'),
    meta: {
      title: '启动页'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(), // https://router.vuejs.org/guide/essentials/history-mode.html#hash-mode
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Home' && from.name === 'Bootstrap') {
    localStorage.setItem('isBootstrap', 'true');
  }
  if (localStorage.getItem('isBootstrap')) {
    if (to.path === '/bootstrap') {
      next('/');
    } else {
      next();
    }
  } else if (to.path === '/bootstrap') {
    next();
  } else {
    next({
      path: '/bootstrap'
    });
  }
});

export default router;
