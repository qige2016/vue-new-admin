# Commitizen+Commitlint+Changelog

如何写好Git commit？
当然要借助工具，才能够写得即规范，又格式化，还能够支持后续分析。

目前比较建议的是，使用终端工具 commitizen/cz-cli + commitizen/cz-conventional-changelog  + conventional-changelog/standard-version 一步解决提交信息和版本发布。
甚至，如果想更狠一点，在持续集成里面加入 marionebl/commitlint 检查 commit 信息是否符合规范，也不是不可以。

## Commit Message 格式

目前规范使用较多的是 [Angular 团队的规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) , 继而衍生了 [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) 。很多工具也是基于此规范, 它的 message 格式如下:
```bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
我们通过 git commit 命令带出的 vim 界面填写的最终结果应该类似如上这个结构, 大致分为三个部分(使用空行分割):

- 标题行: 必填, 描述主要修改类型和内容
- 主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
- 页脚注释: 放 Breaking Changes 或 Closed Issues

分别由如下部分构成:

- type: commit 的类型
- feat: 新特性
- fix: 修改问题
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改
- test: 测试用例修改
- chore: 其他修改, 比如构建流程, 依赖管理
- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述, 建议符合 [50/72 formatting](https://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting)
- body: commit 具体修改内容, 可以分为多行, 建议符合 [50/72 formatting](https://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting)
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接

这样一个符合规范的 commit message, 就好像是一份邮件。

## Commitizen: 替代你的 git commit

[commitizen/cz-cli](https://github.com/commitizen/cz-cli), 我们需要借助它提供的 `git cz` 命令替代我们的 `git commit` 命令, 帮助我们生成符合规范的 commit message。
除此之外, 我们还需要为 commitizen 指定一个 Adapter 比如: [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) (一个符合 Angular团队规范的 preset). 使得 commitizen 按照我们指定的规范帮助我们生成 commit message。

### 安装
```bash
npm install -D commitizen cz-conventional-changelog
```
package.json中配置:

```json
"script": {
    ...,
    "commit": "git-cz",
},
 "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```
## Commitlint: 校验你的 message

[commitlint](https://commitlint.js.org/#/): 可以帮助我们 lint commit messages, 如果我们提交的不符合指向的规范, 直接拒绝提交, 比较狠。

同样的, 它也需要一份校验的配置, 这里推荐 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint#readme) (符合 Angular团队规范)。

### 安装
```bash
npm i -D @commitlint/config-conventional @commitlint/cli
```

同时需要在项目目录下创建配置文件 .commitlint.config.js, 写入:

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```
## Conventional-changelog: 自动生成 CHANGELOG

通过以上工具的帮助, 我们的工程 commit message 应该是符合 Angular 团队那套规范, 这样也便于我们自动生成 CHANGELOG.md

package.json 配置:

```json
"script": {
    ...,
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
}
```
