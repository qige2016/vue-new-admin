import { operatorLogin, operatorLogout, getOperatorSelf } from '@/api/operator'
import { resetRouter } from '@/router'

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('LG_TK'),
    operator: {}
  },
  mutations: {
    SET_OPERATOR: (state, operator) => {
      state.operator = operator
    }
  },
  actions: {
    // 登录
    handleLogin(context, data) {
      return new Promise((resolve, reject) => {
        operatorLogin(data)
          .then((response = {}) => {
            localStorage.setItem('LG_TK', response.token)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 登出
    handleLogOut({ commit }) {
      return new Promise((resolve, reject) => {
        operatorLogout()
          .then(() => {
            localStorage.removeItem('LG_TK')
            commit('SET_OPERATOR', {})
            resetRouter()
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 前端 登出
    fedLogOut({ commit }) {
      return new Promise(resolve => {
        localStorage.removeItem('LG_TK')
        commit('SET_OPERATOR', {})
        resolve()
      })
    },
    // 查询用户信息
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getOperatorSelf()
          .then((response = {}) => {
            commit('SET_OPERATOR', response.operator)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
