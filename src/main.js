import Vue from 'vue'

import Vant from 'vant'
import 'vant/lib/index.css'

import '@/style/index.less'
import '@/style/transition.less'
import 'normalize.css'
import 'lib-flexible/flexible.js'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
