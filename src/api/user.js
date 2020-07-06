import request from '@/utils/request'

const baseUrl = '/api/v1'

// 登录
export function login(data) {
  return request({
    url: `${baseUrl}/login`,
    method: 'post',
    data
  })
}

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }
