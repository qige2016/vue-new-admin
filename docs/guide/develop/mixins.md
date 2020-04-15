# Mixins

`Mixins` 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

但是 `mixins` 会导致以下问题：
- `mixins` 带来了隐式依赖
- `mixins` 与 `mixins` 之间，`mixins` 与组件之间容易导致命名冲突
- 由于 `mixins` 是侵入式的，它改变了原组件，所以修改 `mixins` 等于修改原组件，随着需求的增长 mixins 将变得复杂，导致滚雪球的复杂性

具体可以查看[这篇文章](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)

本项目只使用 `mixins` 做了[菜单响应式](https://github.com/qige2016/vue-new-admin/blob/master/src/mixins/ResizeHandler.js)