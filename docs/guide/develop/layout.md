# 布局

页面整体布局是一个产品最外层的框架结构，往往会包含导航、侧边栏、面包屑以及内容等。想要了解一个后台项目，先要了解它的基础布局。

## Layout
在 `vue-new-admin` 中，我们抽离了使用过程中的通用布局，都放在 `layout` 目录中。

```
/foo
+------------------+
| layout           |
| +--------------+ |
| | AppMain.vue  | |
| |              | |
| +--------------+ |
+------------------+
```

::: tip 对应代码
[@/layout](https://github.com/qige2016/vue-new-admin/tree/master/src/layout)
:::

<br>

`vue-new-admin` 中大部分页面都是基于这个 `layout` 的，除了个别页面如：`login` , `404`等页面没有使用该`layout`。如果你想在一个项目中有多种不同的`layout`也是很方便的，只要在一级路由那里选择不同的`layout`组件就行。

```js
import Layout from '@/layout'

// No layout
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login'),
  hidden: true
}

// Has layout
{
  path: '',
  component: Layout, // 指定以下页面的布局
  redirect: '/index',
  meta: {
    title: '主页',
    icon: 'el-icon-s-home'
  },
  children: [
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/home')
    }
  ]
}
```

<br>

## app-main

::: tip 对应代码
[@/layout/components/AppMain](https://github.com/qige2016/vue-new-admin/blob/master/src/layout/components/AppMain.vue)
:::

其中`transition` 定义了页面之间切换动画，相关[文档](https://cn.vuejs.org/v2/guide/transitions.html)。默认提供了`fade`，具体 css 实现见[transition.scss](https://github.com/qige2016/vue-new-admin/blob/master/src/styles/transition.scss)。