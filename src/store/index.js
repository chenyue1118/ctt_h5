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
    queryInfo: MyStorage.getItem('queryInfo') || { time: '' },
    hotCity: [{'py':'beijingbei','pyC':'Beijingbei','name':'北京北','code':'VAP'}, {'py':'shanghainan','pyC':'Shanghainan','name':'上海南','code':'SNH'}],
    hisCity: [{"py":"beijing","pyC":"Beijing","name":"北京","code":"BJP"}]
  },
  getters: {
    token: state => {
      return state.token
    },
    userInfo: state => {
      return state.userInfo
    },
    queryInfo: state => {
      return state.queryInfo
    },
    hotCity: state => {
      return state.hotCity
    },
    hisCity: state => {
      return state.hisCity
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
    SET_QUSRYINFO: (state, queryInfo) => {
      MyStorage.setItem('queryInfo', queryInfo)
      state.queryInfo = queryInfo
    },
    SET_HISCITY: (state, hisCity) => {
      MyStorage.setItem('hisCity', hisCity)
      state.hisCity = hisCity
    },
    LOG_OUT: (state) => {
      MyStorage.clear()
      state.userInfo = ''
    }
  },
  actions: {
  }
})
