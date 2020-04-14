# Mock 和联调

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发更加独立自主，不会被服务端的开发所阻塞。

## Swagger

在项目中通常使用 [swagger](https://swagger.io/)， 由后端来模拟业务数据。
**swagger** 是一个 REST APIs 文档生成工具，它从代码注释中自动生成文档，可以跨平台，开源，支持大部分语言，社区好，总之非常不错，强烈推荐。
[线上 demo](http://petstore.swagger.io/?_ga=2.222649619.983598878.1509960455-2044209180.1509960455#/pet/addPet)

## YApi

[vue-new-admin](https://github.com/qige2016/vue-new-admin) 使用的是 [yapi](http://yapi.demo.qunar.com/) 来模拟数据。
它是一个纯前端可视化，并且能快速生成模拟数据的持久化服务。非常的简单易用还能结合 `swagger`，天然支持跨域 ，不管团队还是个人项目都值得一试。

::: warning
因为`yapi`提供的线上免费服务很不稳定，如果有需要的可以自己按照它的[内网部署](https://hellosean1025.github.io/yapi/devops/index.html)，搭建自己的服务。
:::

## 多个 server

目前项目只启动了一个`mock-server`，当然你也可以有自己其它的`mock-server`或者真实接口。可以一部分接口走这个服务，另一些接口走另一个服务。

只需要将它们分别设置不同的的`baseURL`即可[@/utils/request.js](https://github.com/qige2016/vue-new-admin/blob/master/src/utils/request.js)。之后根据设置的 url 规则在 [vue.config.js](https://github.com/qige2016/vue-new-admin/blob/master/vue.config.js) 中配置多个 `proxy`。
[相关文档](https://webpack.docschina.org/configuration/dev-server/#devserver-proxy)

或者可以直接在[@/api](https://github.com/qige2016/vue-new-admin/tree/master/src/api)的某个`mock-server`请求url前面直接加`yapi`，此时[vue.config.js](https://github.com/qige2016/vue-new-admin/blob/master/vue.config.js)中配置的 url 前面也应该加`yapi`。

::: tip
`mock-server`一般写在第一个`proxy`，要注意`proxy url`如果有包含关系时的proxy顺序。
:::
