# ESLint+Prettier

不管是多人合作还是个人项目，代码规范都是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。

所以，团队关于代码风格必须遵循两个基本原则：
  1. 少数服从多数；
  2. 用工具统一风格。

## ESLint 与 Prettier配合使用

ESLint检测代码风格，Prettier提供代码美化。

ESLint配置文件都在 [.eslintrc.js](https://github.com/qige2016/vue-new-admin/blob/master/.eslintrc.js) 中。

同时使用prettier插件和vue推荐格式
```js
// https://github.com/qige2016/vue-new-admin/blob/master/.eslintrc.js

module.exports = {
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ]
}
```
特别是最后这一个@vue/prettier，非常重要。执行npm run lint,将错误格式自动格式化。

prettier自定义配置文件[.prettierrc](https://github.com/qige2016/vue-new-admin/blob/master/.prettierrc)，设置成vue推荐格式。

```
{
  "singleQuote": true, // 单引号
  "tabWidth": 2,
  "semi": false, // 取消分号
  "endOfLine": "auto",
  "printWidth": 80
}
```
## 命令行修复

```bash
npm run lint
```

## 取消 ESLint 校验

如果你不想使用 ESLint 校验（不推荐取消），只要找到 [vue.config.js](https://github.com/qige2016/vue-new-admin/blob/master/vue.config.js) 文件。
进行如下设置 `lintOnSave: false` 即可。

## vscode 配置 ESLint

这所谓工欲善其事，必先利其器，推荐 eslint+vscode 来写 vue，绝对有种飞一般的感觉。效果如图：
![eslintGif.gif](https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/e94a76df-6dc0-4c15-9785-28b553a163e9.png)

<br/>

每次保存，vscode 就能标红不符合 eslint 规则的地方，同时还会做一些简单的自我修正。安装步骤如下：

首先安装 eslint 插件
![eslint1.png](https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/72f126cb-09eb-4b27-b02e-65e79eb76220.png)

安装并配置完成 ESLint 后，在项目里面有一个[.vscode](https://github.com/qige2016/vue-new-admin/blob/master/.vscode/settings.json)文件夹，提供eslint配置。原则上这个就是项目统一eslint规则，不建议修改。

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "editor.tabSize": 2,
  "eslint.run": "onSave",
  "eslint.autoFixOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

这样每次保存的时候就可以根据根目录下.eslintrc.js 你配置的 eslint 规则来检查和做一些简单的 fix。
