import request from '@/utils/request'
// 管理员登录
export function operatorLogin(data) {
  return request({
    url: '/v0/operators/login',
    method: 'post',
    data
  })
}
// 管理员登出
export function operatorLogout(data) {
  return request({
    url: '/v0/operators/logout',
    method: 'post',
    data
  })
}
// 获取当前管理员的信息
export function getOperatorSelf() {
  return request({
    url: '/v0/operators/self'
  })
}
// 查询管理员
export function getOperator(params) {
  return request({
    url: '/v0/operators',
    params
  })
}
