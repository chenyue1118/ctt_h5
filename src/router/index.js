import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from '@/layout/index.vue';
import { getToken } from '@/utils/auth.js'


NProgress.configure({ showSpinner: false })

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }, {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue')
  }, {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/test',
        name: 'test',
        meta: {
          title: '测试页面'
        },
        component: () => import('@/views/test/index.vue')
      }, {
        path: '/home',
        name: 'tran-home',
        meta: {
          title: ''
        },
        component: () => import('@/views/train/index.vue')
      }, {
        path: '/address',
        name: 'train-address',
        meta: {
          title: '车站输入'
        },
        component: () => import('@/views/train/address.vue')
      }, {
        path: '/query',
        name: 'train-query',
        meta: {
          title: '车票查询'
        },
        component: () => import('@/views/train/index.vue')
      }
    ]
  }
]

const Domain = ['login', '404', 'test']

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // Start progress bar
  NProgress.start()
  const TOKEN = getToken() || '12121212'
  if (!TOKEN && !Domain.includes(to.name)) {
    next({
      name: 'login'
    })
  } else {
    next()
  }
})

router.afterEach((to) => {
  // Finish progress bar
  NProgress.done()

  document.title = `Train tickets - ${to.meta.title || '' }`
})

export default router
