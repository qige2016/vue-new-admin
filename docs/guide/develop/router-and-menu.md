# 路由和菜单

路由和菜单是组织起一个后台应用的关键骨架。`vue-new-admin` 中的路由为了方便管理，使用了中心化的方式，在 [@/router/index.js](https://github.com/qige2016/vue-new-admin/blob/master/src/router/index.js) 统一配置和管理。

<br>

在这一部分，通过结合一些配置文件、基本算法及工具函数，搭建好了路由和菜单的基本框架，主要涉及以下几个模块/功能：

## 路由

这里的路由分为两种，`constantRoutes` 和 `asyncRoutes`。

**constantRoutes：** 代表那些不需要动态判断权限的路由，如登录页、404等通用页面。

**asyncRoutes：** 代表那些需求动态判断权限并通过 `addRoutes` 动态添加的页面。

具体的会在 [权限管理](/guide/advanced/permission.html) 页面介绍。

::: tip
这里所有的路由页面都使用 `路由懒加载` 了 ，具体介绍见[路由懒加载](/guide/advanced/lazy-loading.html)
:::

其它的配置和 [vue-router](https://router.vuejs.org/zh-cn/) 官方文档一样。

::: warning 注意事项
如果这里有一个需要非常注意的地方就是 `404` 页面一定要最后加载，如果放在 constantRoutes 一同声明了 `404` ，后面的所以页面都会被拦截到`404` ，详细的问题见 [addRoutes when you've got a wildcard route for 404s does not work](https://github.com/vuejs/vue-router/issues/1176)
:::

### 配置项
首先我们了解一些配置路由时提供了哪些配置项：

```js
//当设置 true 的时候该路由不会在菜单出现，默认false
hidden: true
//设定路由的名字
name: 'router-name' 
meta: {
  title: 'title', //设置该路由在菜单和面包屑中展示的名字
  icon: 'svg-name', //设置该路由的图标
  roles: ['admin', 'editor'] //设置该路由进入的权限，支持多个权限叠加
}
```
<br/>

## 菜单
菜单主要基于 element-ui 的 el-menu 改造。

菜单是通过读取路由并结合权限判断而动态生成的，而且还需要支持路由无限嵌套，所以这里还使用到了递归组件。

::: tip 代码地址
[@/layout/components/Menu](https://github.com/qige2016/vue-new-admin/tree/master/src/layout/components/Menu)
:::

一般菜单有两种形式即：submenu 和 直接 el-menu-item。 一个是嵌套子菜单，另一个则是直接一个菜单。当你一个路由下面的 `children` 声明的路由大于>1 个时，自动会变成嵌套的模式；如果子路由正好等于一个就会默认将子路由作为根路由显示在菜单中，此时主路由`path`也为`''`。

## 面包屑
面包屑主要基于 element-ui 的 el-breadcrumb 改造。
可以自由设置过滤掉一些不想显示的路径。
