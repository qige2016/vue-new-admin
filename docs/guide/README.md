# 开始使用

[vue-new-admin](https://github.com/qige2016/vue-new-admin) 是一个后台前端解决方案，它基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)实现。它可以帮助你快速搭建企业级中后台产品原型。

<br/>

## 功能

```
- 登录/登出

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 全局功能
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏
  - 

- 错误页面
  - 404

- 组件
  - 表格
  - 表单
  - 标签页
  - 菜单
  - 面包屑
  - 弹窗
  - 导出
  - 上传
  - 地图
  - 图表
  - 消息盒子
  - 全屏
  - svgIcon
  - 播放器
  - 抽屉

- 服务
  -axios请求
  -router动态渲染
  -vuex最佳用法
  -表格、表单格式化和校验写法
  -浏览器兼容方案

- 工具链
  -mock服务器
  -plop

- 综合实例
  - 列表展示
  - 新增编辑
  - 详情查询
```

<br/>

## 目录结构

本项目已经为你生成了一个完整的开发框架，下面是整个项目的目录结构。

```bash
├── CHANGELOG.md               # changelog
├── Dockerfile                 # docker配置
├── README.md                  # readme
├── babel.config.js            # babel配置
├── commitlint.config.js       # commitlint配置
├── deploy.sh                  # 自动更新文档脚本
├── docs                       # 文档
├── element-variables.scss     # 自定义主题
├── jest.config.js             # jest配置
├── nginx.conf                 # nginx配置
├── package.json               # package.json
├── plop-templates             # 基本模板
├── plopfile.js                # plop配置
├── postcss.config.js          # postcss配置
├── public                     # 公共文件
├── src                        # 源码
├── tests                      # 测试
├── vue.config.js              # vue配置
└── yarn.lock                  # yarn依赖信息

```

## 如何开始

```bash
# 克隆项目
git clone https://github.com/qige2016/vue-new-admin.git

# 进入项目目录
cd vue-new-admin

# 安装依赖
npm install

# 启动项目
npm run serve
```

<br/>

::: tip
推荐使用 [yarn](https://github.com/yarnpkg/yarn) 替代 `npm`。

Windows 用户若安装不成功，很大概率是`node-sass`安装失败，自行解决。

:::

<br/>