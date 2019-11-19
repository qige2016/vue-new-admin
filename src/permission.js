import router from './router'
import store from '@/store'
import { isEmptyObj } from '@/utils'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  // determine whether the user has logged in
  const hasToken = localStorage.getItem('LG_TK')

  if (hasToken) {
    if (to.name === 'login') {
      // if is logged in, redirect to the home page
      next({ name: 'index' })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = !isEmptyObj(store.getters.operator)
      if (hasRoles) {
        next()
      } else {
        store
          .dispatch('manager/getUserInfo')
          .then(response => {
            store
              .dispatch('permission/generateRoutes', response.operator.roleType)
              .then(accessedRoutes => {
                router.addRoutes(accessedRoutes) // 根据用户权限，动态添加权限路由
                next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
              })
          })
          .catch(err => {
            store.dispatch('manager/fedLogOut').then(() => {
              console.log(err)
              next({ name: 'login' })
            })
          })
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ name: 'login' })
    }
  }
})
