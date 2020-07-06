import Vue from 'vue'
import Vuex from 'vuex'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import { getToken, setToken } from '@/utils/auth'
import MyStorage from '@/utils/cache.js'

Vue.use(Vuex)

/*
 *     用户信息根据存储的token解析
 * 1，当前搜索数据存储，起点、终点、日期
 * 2，选择车次信息
*/

export default new Vuex.Store({
  state: {
    token: getToken(),
    userInfo: MyStorage.getItem('userInfo') || '',
  },
  getters: {
    token: state => {
      return state.token
    },
    userInfo: state => {
      return state.userInfo
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      MyStorage.setItem('userInfo', userInfo)
      state.userInfo = userInfo
    },
    LOG_OUT: (state) => {
      MyStorage.clear()
      state.userInfo = ''
    }
  },
  actions: {
  }
})
