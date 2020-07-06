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
    path: '/',
    component: Layout,
    children: [
      {
        path: 'test',
        name: 'test',
        meta: {
          title: '测试页面'
        },
        component: () => import('@/views/test/index.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('@/views/About.vue')
  // }
]

const Domain = ['login', 'test']

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // Start progress bar
  NProgress.start()
  const TOKEN = getToken()
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

  document.title = `${to.meta.title || '' }`
})

export default router
