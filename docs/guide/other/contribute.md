# 贡献指南

## Pull Request 规范
- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支
- commit 信息以[Commitizen+Commitlint+Changelog](/guide/advanced/commitizen-commitlint-changelog.html)为准
- 先执行npm run lint ，再执行 npm run test:unit ，最后执行 npm run dev。确认无误后提交
- 提交 PR 前请 rebase，确保 commit 记录的整洁
- 确保 PR 是提交到 master 分支
- 如果是修复 bug，请在 PR 中给出描述信息
- 合并代码需要两名维护人员参与：一人进行 review 后 approve，另一人再次 review，通过后即可合并
## Pull Request 方式参考
- [初中级前端为什么🚀要学会pr(github)?](https://juejin.im/post/5d7751056fb9a06b05181760)