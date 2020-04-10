module.exports = {
  title: 'vue-new-admin',
  description: 'A vue admin',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  base: '/vue-new-admin/',
  themeConfig: {
    nav: [{
        text: '指南',
        link: '/guide/'
      },
      {
        text: '组件',
        link: '/component/'
      },
      {
        text: '服务',
        link: '/service/'
      },
      {
        text: '工具链',
        link: '/toolchain/'
      },
      {
        text: 'Github',
        link: 'https://github.com/qige2016/vue-new-admin'
      }
    ],
    sidebar: {
      '/guide/': [{
          title: '入门',
          collapsable: false,
          children: [
            '/guide/'
          ]
        },
        {
          title: '构建和部署',
          collapsable: false,
          children: [
            '/guide/buildDeploy/build.md',
            '/guide/buildDeploy/deploy.md'
          ]
        },
        {
          title: '开发',
          collapsable: false,
          children: [
            '/guide/develop/layout.md'
          ]
        },
        {
          title: '进阶',
          collapsable: false,
          children: [

          ]
        },
        {
          title: '其它',
          collapsable: false,
          children: [

          ]
        }
      ]
    }
  }
}
