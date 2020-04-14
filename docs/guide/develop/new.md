# 新增页面

如果熟悉 `vue-router` 的配置就很简单了。

首先在 `@/router/index.js` 中增加你需要添加的路由。

**如：新增一个 demo 页面**

```js
{
  path: '',
  component: Layout,
  redirect: '/demo/demo-1',
  name: 'demo',
  meta: {
    title: 'demo',
    icon: 'demo'
  }
}
```

::: tip
仅仅这样不会有任何效果的，它只是创建了一个基于`layout`的一级路由，你还需要在它下面的 `children` 中添加子路由。
注意：本项目用`path`是否为`''`区别`menu-item`和`submenu`。
:::

```js
{
  path: '',
  component: Layout,
  redirect: '/demo/demo-1',
  name: 'demo',
  meta: {
    title: 'demo',
    icon: 'demo'
  },
  children: [
    {
      path: '/demo/demo-1',
      component: ()=>import('demo/demo-1'),
      name: 'demo1',
      meta: { title: 'demo1' }
    }
  ]
}
```

**这样菜单就会出现的 `menu-item` 了**

::: tip
由于 `children` 下面只声明了一个路由所以不会有展开箭头，如果`children`下面的路由个数大于 1 就会有展开箭头。详情见[路由和菜单](router-and-menu.md)
:::

```js
{
  path: '/demo',
  component: Layout,
  redirect: '/demo/demo-1',
  name: 'demo',
  meta: {
    title: 'demo',
    icon: 'demo'
  },
  children: [
    { path: '/demo/demo-1', component: ()=>import('demo/demo-1'), name: 'demo1', meta: { title: 'demo1' }},
    { path: '/demo/demo-2', component: ()=>import('demo/demo-2'), name: 'demo2', meta: { title: 'demo2' }}
  ]
}
```

**菜单就会出现 `submenu` 了**

## 新增 view

新增完路由之后不要忘记在 `@/views` 文件下 创建对应的文件夹，一般性一个路由对应一个文件，该模块下的功能组件或者方法就建议在本文件夹下创建一个`components`文件夹，各个功能模块维护自己的`components`组件。如：
```bash
├── demo
│   ├── components
│   │   └── DemoDetail.vue
│   ├── index.vue
```

<br/>

## 新增 api

最后在 [@/api](https://github.com/qige2016/vue-new-admin/tree/master/src/api) 文件夹下创建本模块对应的 api 服务。

## 新增组件

在全局的 `@/components` 创建一些全局的组件，如富文本，各种搜索组件，封装的日期组件等能被公用的组件。每个页面或者模块特定的业务组件则会写在当前 `views` 下面。如：`@/views/demo/components/xxx.vue`。这样拆分大大减轻了维护成本。

**请记住拆分组件最大的好处不是公用而是可维护性！**

## 新增样式

页面的样式和组件是一个道理，全局的 `@/style` 放置一下全局公用的样式，每一个页面的样式就写在当前 `views`下面，请记住加上`scoped` 或者命名空间，避免造成全局的样式污染。

```css
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
.xxx-container{
  /* name scoped */
  xxx
}
</style>
```
