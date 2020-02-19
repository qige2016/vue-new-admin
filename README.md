# vue-new-admin

# 项目结构
```
│  .prettierrc.js // prettier配置
│  babel.config.js // babel配置（element-ui按需引入组件主题）
│  Dockerfile // docker打包流程
│  element-variables.scss // element-ui自定义主题
│  jest.config.js // jest测试配置
│  nginx.conf // nginx配置及优化
│  package.json
│  plopfile.js // plop自定义逻辑
│  postcss.config.js
│  README.md
│  vue.config.js
│  yarn.lock
│  
├─.vscode
│      settings.json // vscode手动保存自动格式化代码配置
│      
├─plop-templates // plop快速构建组件模板
│  │  utils.js
│  │  
│  ├─addedit
│  │      index.hbs
│  │      prompt.js
│  │      
│  ├─detail
│  │      index.hbs
│  │      prompt.js
│  │      
│  └─view
│          index.hbs
│          prompt.js
│          
├─public
│      favicon.ico
│      index.html
│      
├─src
│  │  App.vue
│  │  main.js
│  │  permission.js // 权限校验
│  │  
│  ├─api // api管理
│  │      operator.js
│  │      
│  ├─assets // 静态资源
│  │  └─images
│  │          404.png
│  │          404_cloud.png
│  │          
│  ├─components // 公共组件库
│  │  ├─Breadcrumb // 面包屑
│  │  │      
│  │  ├─Collapse // 折叠
│  │  │      
│  │  ├─Dialog // 弹窗
│  │  │      
│  │  ├─Export // 导出
│  │  │      
│  │  ├─Form // 表单
│  │  │      
│  │  ├─Hamburger // 汉堡菜单
│  │  │      
│  │  ├─Notification // 消息盒子
│  │  │      
│  │  ├─Screenfull // 全屏  
│  │  │      
│  │  ├─SvgIcon // icon
│  │  │      
│  │  ├─Tab // 标签页
│  │  │      
│  │  ├─Table // 表格
│  │  │      
│  │  └─Upload // 上传
│  │          
│  ├─directive // 自定义指令
│  │  └─permission
│  │          index.js
│  │          permission.js // v-permission
│  │          
│  ├─icons // icon配置
│  │  │  index.js
│  │  │  svgo.yml // svg压缩
│  │  │  
│  │  └─svg // svg存放地址
│  │          .gitkeep
│  │          
│  ├─layout // 布局
│  │  │  index.vue
│  │  │  
│  │  └─components
│  │      │  AppMain.vue
│  │      │  
│  │      ├─Header // 头部
│  │      │      index.vue
│  │      │      
│  │      └─Menu // 侧边栏
│  │              index.vue
│  │              MenuItem.vue
│  │              
│  ├─mixins // 自定义mixin
│  │      ResizeHandler.js // 响应式侧边栏
│  │      
│  ├─plugins // 插件
│  │      element.js // element-ui引入
│  │      
│  ├─router // 路由
│  │      index.js
│  │      
│  ├─store // vuex
│  │  │  getters.js
│  │  │  index.js
│  │  │  
│  │  └─modules
│  │          global.js
│  │          manager.js
│  │          permission.js
│  │          
│  ├─styles // 样式
│  │      common.scss
│  │      element.scss
│  │      index.scss
│  │      mixin.scss
│  │      reset.scss
│  │      transition.scss
│  │      variables.scss
│  │      
│  ├─utils // 工具库
│  │      CoordinateTransform.js // 坐标系转换
│  │      format.js // 表单、表格格式化
│  │      index.js
│  │      permission.js // 权限函数
│  │      request.js // 请求函数
│  │      sign.js // 签名
│  │      types.js // 类型判断
│  │      validate.js // 表单校验（自定义红*显示）
│  │      
│  └─views // 页面
│      ├─errorPage
│      │      404.vue
│      │      
│      ├─home
│      │      index.vue
│      │      
│      ├─login
│      │      index.vue
│      │      
│      ├─operator
│      │  │  index.vue
│      │  │  
│      │  └─components
│      │          OperatorAddEdit.vue
│      │          OperatorDetail.vue
│      │          
│      └─permission
│              admin.vue
│              all.vue
│              super.vue
│              
└─tests // 自测
    └─unit
        │  .eslintrc.js
        │  
        ├─components // 公共组件库自测
        │      Breadcrumb.spec.js
        │      Collapse.spec.js
        │      Dialog.spec.js
        │      Export.spec.js
        │      Form.spec.js
        │      Notification.spec.js
        │      SvgIcon.spec.js
        │      Tab.spec.js
        │      Table.spec.js
        │      Upload.spec.js
        │      
        └─utils // 工具库自测
                CoordinateTransform.spec.js
                index.spec.js
                types.spec.js
