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
        component: () => import('@/views/train/query.vue')
      }, {
        path: '/confirmation',
        name: 'train-confirmation',
        meta: {
          title: '订单确认'
        },
        component: () => import('@/views/train/confirmation.vue')
      }, {
        path: '/book',
        name: 'train-book',
        meta: {
          title: '下订单'
        },
        component: () => import('@/views/train/book.vue')
      }, {
        path: '/add-child',
        name: 'add-child',
        meta: {
          title: '添加儿童信息'
        },
        component: () => import('@/views/train/add-child.vue')
      }, {
        path: '/add-adult',
        name: 'add-adult',
        meta: {
          title: '添加成人信息'
        },
        component: () => import('@/views/train/add-adult.vue')
      }, {
        path: '/hotel-address',
        name: 'hotel-address',
        meta: {
          title: '选择旅馆地址'
        },
        component: () => import('@/views/train/hotel-address.vue')
      }, {
        path: '/personal-address',
        name: 'personal-address',
        meta: {
          title: '选择旅馆地址'
        },
        component: () => import('@/views/train/personal-address.vue')
      }, {
        path: '/help',
        name: 'help',
        meta: {
          title: '帮助页面'
        },
        component: Layout,
        children: [
          {
            path: '/',
            name: 'help-list',
            meta: {
              title: '帮助页面'
            },
            component: () => import('@/views/train/help/index.vue')
          }
        ]
      }, {
        path: '/train-pay',
        name: 'train-pay',
        meta: {
          title: '订单支付'
        },
        component: () => import('@/views/train/personal-address.vue')
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
