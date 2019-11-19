import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import Export from '@/components/Export'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('Export.vue', () => {
  const wrapper = mount(Export, {
    // https://github.com/vuejs/vue-test-utils/issues/958
    stubs: {
      transition: false
    },
    localVue,
    propsData: {
      outerVisible: false
    }
  })
  it('export', () => {
    expect(wrapper.contains('.export-wrapper')).toBe(true)
    expect(wrapper.findAll('p').length).toBe(2)
    expect(
      wrapper
        .findAll('p')
        .at(0)
        .text()
    ).toBe('最多支持一次性导出50页数据，当前单页10条，如有更多要求请分批导出')
    expect(
      wrapper
        .findAll('p')
        .at(1)
        .text()
    ).toBe('提示：开始页小于等于结束页')
    expect(wrapper.findAll('.el-input-number').length).toBe(2)
    expect(
      wrapper
        .findAll('.el-input-number input')
        .at(0)
        .attributes().min
    ).toBe('1')
    expect(
      wrapper
        .findAll('.el-input-number input')
        .at(0)
        .attributes().max
    ).toBe('1')
    expect(
      wrapper
        .findAll('.el-input-number input')
        .at(0)
        .attributes('aria-valuenow')
    ).toBe('1')
    expect(
      wrapper
        .findAll('.el-input-number input')
        .at(1)
        .attributes().min
    ).toBe('1')
    expect(
      wrapper
        .findAll('.el-input-number input')
        .at(1)
        .attributes().max
    ).toBe('50')
    expect(
      wrapper
        .findAll('.el-input-number input')
        .at(1)
        .attributes('aria-valuenow')
    ).toBe('1')
  })
  it('handleStartPageBlur event', () => {
    const input1 = wrapper.findAll('.el-input-number input').at(0)
    input1.element.value = ''
    input1.trigger('blur')
    expect(wrapper.vm.pageParams.startPage).toBe(1)
    wrapper.setProps({ pageParams: { startPage: 2, endPage: 2 } })
    input1.trigger('blur')
    expect(wrapper.vm.pageParams.startPage).toBe(2)
  })
  it('handleEndPageBlur event', () => {
    const input2 = wrapper.findAll('.el-input-number input').at(1)
    input2.element.value = ''
    input2.trigger('blur')
    // 失焦回填为上次数据
    expect(wrapper.vm.pageParams.endPage).toBe(2)
    wrapper.setProps({ pageParams: { startPage: 2, endPage: 3 } })
    input2.trigger('blur')
    expect(wrapper.vm.pageParams.endPage).toBe(3)
  })
})
