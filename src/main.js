import Vue from 'vue'

import Vant from 'vant'
import 'vant/lib/index.css'
import { Locale } from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'
import moment from 'moment'

import '@/style/index.less'
import '@/style/transition.less'
import 'normalize.css'
import 'lib-flexible/flexible.js'

import App from './App.vue'
import router from './router'
import store from './store'

Locale.use('en-US', enUS)

Vue.use(Vant)

Vue.config.productionTip = false

moment.locale('zh-cn')
window.moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
