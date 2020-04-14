# 错误处理

## 页面

**404**

页面级的错误处理由 `vue-router` 统一处理，所有匹配不到正确路由的页面都会进 `404`页面。

```js
{ path: '*', redirect: '/404' }
```

::: warning
**注意事项** 这里有一个需要非常注意的地方就是 `404` 页面一定要最后加载，如果放在 constantRoutes 一同声明了 `404` ，后面的所有页面都会被拦截到`404` ，详细的问题见 [addRoutes when you've got a wildcard route for 404s does not work](https://github.com/vuejs/vue-router/issues/1176)
:::

<br/>

## 请求

项目里所有的请求都会走`@/utils/request.js`里面创建的的 axios 实例，它统一做了错误处理，[完整代码](https://github.com/qige2016/vue-new-admin/blob/master/src/utils/request.js)。

你可以在`service.interceptors.response` response 拦截器之中根据自己的实际业务统一针对不同的状态码或者根据自定义 code 来做错误处理。如：

```js
/**
  * 异常处理
  * 自定义错误消息体 {
    "errorCode": "string",
    "errorMsg": "string"
  }
  * 自行修改errorCode和errorMsg
*/
const errorHandler = error => {
  const { response } = error
  if (response && response.status) {
    const { status, data } = response
    // 在tipText中有定义
    if (tipText[status]) {
      if (status === 400) {
        // 未在tipText[400]中定义，使用默认tip
        const msg = tipText[status][data.errorCode]
        msg ? showMessage(msg) : showMessage(data.errorMsg)
        // token失效时跳转
        ;(data.errorCode === '89002' || data.errorCode === '89013') &&
          store.dispatch('manager/fedLogOut').then(() => router.push('/login'))
      } else {
        // 404、500、502
        showMessage(tipText[status])
      }
    } else {
      // 未在tipText中定义，使用默认tip
      showMessage(data.errorMsg)
    }
  }
}

// response interceptor
service.interceptors.response.use(
  response => {
    removeQueue(response.config)
    //根据code码即token超时的code码设置相应的hasLogoutStatus = true or false
    return response.data
  },
  error => {
    /**
     * 通过 xmlhttprequest 来状态码标识error
     */
    //hasLogoutStatus = false
    // 异常处理
    errorHandler(error)
    return Promise.reject(error)
  }
)
```

因为所有请求返回的是`promise`，所以你也可以对每一个请求通过`catch` 错误，从而进行单独的处理。

```js
getInfo()
  .then(res => {})
  .catch(err => {
    xxxx
  })
```

## 代码

本项目也做了代码层面的错误处理，如果你开启了`eslint`在编写代码的时候就会提示错误。如：
![](https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/b037f47c-1f7b-487f-bb05-32e7300767d2.png)

当然还有很多不能被`eslint`检查出来的错误，vue 也提供了全局错误处理钩子[errorHandler](https://vuejs.org/v2/api/#errorHandler)。
