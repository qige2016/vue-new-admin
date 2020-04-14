# 单元测试

单元测试用于测试公共组件的表现和工具库输出正误。使用 [jest](https://jestjs.io/) 作为测试框架，vue-cli3直接提供@vue/cli-plugin-unit-jest插件。
jest配置文件：[jest.config.js](https://github.com/qige2016/vue-new-admin/blob/master/jest.config.js)
```js
module.exports = {
  ...
  collectCoverageFrom: [ // 单元测试范围
    'src/utils/CoordinateTransform.js',
    'src/utils/index.js',
    'src/utils/types.js',
    'src/components/**/*.{js,vue}',
    '!src/components/VideoPlayer/index.vue',
    '!src/components/Screenfull/index.vue'
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverage: true, // 覆盖率
  coverageReporters: ['lcov', 'text-summary'],
  ...
}
```
## 公共组件
公共组件的单测用例在此：[单测用例](https://github.com/qige2016/vue-new-admin/tree/master/tests/unit/components)
### 写一个用例
比如，我们可以建一个文件 [test/unit/components/SvgIcon.spec.js](https://github.com/qige2016/vue-new-admin/blob/master/tests/unit/components/SvgIcon.spec.js) 来测试SvgIcon的表现。
```js
import { shallowMount } from '@vue/test-utils'
import SvgIcon from '@/components/SvgIcon'
describe('SvgIcon.vue', () => {
  it('iconClass', () => {
    const wrapper = shallowMount(SvgIcon, {
      propsData: {
        iconClass: 'test'
      }
    })
    expect(wrapper.find('use').attributes().href).toBe('#icon-test')
  })
  it('className', () => {
    const wrapper = shallowMount(SvgIcon, {
      propsData: {
        iconClass: 'test'
      }
    })
    expect(wrapper.classes().length).toBe(1)
    wrapper.setProps({ className: 'test' })
    expect(wrapper.classes().includes('test')).toBe(true)
  })
})
```
这里使用了 [@vue/test-utils](https://vue-test-utils.vuejs.org/zh/) 作为测试库，它提供了大量实用的 API 来帮助我们测试 Vue 组件。
## 工具库
工具库的单测用例在此：[单测用例](https://github.com/qige2016/vue-new-admin/tree/master/tests/unit/utils)  
### 写一个用例
工具库单测用例写法比较简单，注意输入和输出即可。
```js
import { isEmptyObj } from '@/utils'
describe('Utils:index', () => {
  it('isEmptyObj', () => {
    expect(isEmptyObj({})).toBe(true)
    expect(isEmptyObj(Object())).toBe(true)
    expect(isEmptyObj({ a: 1 })).toBe(false)
  })
})
```
## 运行
```bash
npm run test:unit
```
## jest进阶
[Vue Test Utils](https://vue-test-utils.vuejs.org/zh/)  
[vue-test-utils-jest](https://github.com/YalongYan/vue-test-utils-jest)  
[vue-unit-test-with-jest](https://github.com/holylovelqq/vue-unit-test-with-jest/tree/master/01-vue-unit-test-with-jest)  