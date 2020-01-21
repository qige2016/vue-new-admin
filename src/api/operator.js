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
export function getOperators(params) {
  return request({
    url: '/v0/operators',
    params
  })
}
// 管理员详情
export function getOperator(uuid) {
  return request({
    url: `/v0/operators/${uuid}`
  })
}
// 删除管理员
export function deleteOperator(uuid, data) {
  return request({
    url: `/v0/operators/${uuid}/delete`,
    method: 'post',
    data
  })
}
// 增加管理员
export function addOperator(data) {
  return request({
    url: '/v0/operators',
    method: 'post',
    data
  })
}
// 修改管理员
export function editOperator(uuid, data) {
  return request({
    url: `/v0/operators/${uuid}`,
    method: 'post',
    data
  })
}
