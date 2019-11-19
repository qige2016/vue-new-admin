import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import Dialog from '@/components/Dialog'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('Dialog.vue', () => {
  const wrapper = mount(Dialog, {
    // https://github.com/vuejs/vue-test-utils/issues/958
    stubs: {
      transition: false
    },
    localVue,
    slots: {
      outerTitle: `<div slot="outerTitle" class="outerTitle">outerTitle</div>`,
      default: `<div class="outerBody">outerBody</div>`,
      outerFooter: `<div slot="outerFooter" class="outerFooter">outerFooter</div>`,
      innerTitle: `<div slot="innerTitle" class="innerTitle">innerTitle</div>`,
      innerBody: `<div class="innerBody">innerBody</div>`,
      innerFooter: `<div slot="innerFooter" class="innerFooter">innerFooter</div>`
    },
    propsData: {
      outerVisible: false
    }
  })
  it('dialog', () => {
    // elementUI的dialog用display控制显隐，dom在mount就渲染完成，此时display: none;消失
    expect(wrapper.contains('.el-dialog')).toBe(true)
    expect(wrapper.find('.el-dialog__wrapper').isVisible()).toBe(false)
    wrapper.setProps({ outerVisible: true })
    expect(wrapper.find('.el-dialog__wrapper').isVisible()).toBe(true)
  })
  it('outer slot', () => {
    expect(wrapper.find('.outerTitle').text()).toBe('outerTitle')
    expect(wrapper.find('.outerBody').text()).toBe('outerBody')
    expect(wrapper.find('.outerFooter').text()).toBe('outerFooter')
  })
  it('type add', () => {
    wrapper.setProps({ type: 'add' })
    expect(wrapper.findAll('.el-button').length).toBe(2)
  })
  it('type edit', () => {
    wrapper.setProps({ type: 'edit' })
    expect(wrapper.findAll('.el-button').length).toBe(2)
  })
  it('outerClose event', () => {
    const mockFn1 = jest.fn()
    wrapper.vm.$on('update:outerVisible', mockFn1)
    wrapper.vm.outerClose()
    expect(mockFn1).toBeCalled()
    expect(mockFn1).toHaveBeenCalledTimes(1)
    expect(mockFn1).toHaveBeenCalledWith(false)
  })
  it('outerOpen event', () => {
    const mockFn2 = jest.fn()
    wrapper.vm.$on('outerOpen', mockFn2)
    wrapper.vm.outerOpen()
    expect(mockFn2).toBeCalled()
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })
  it('inner dialog', () => {
    wrapper.setProps({ showInner: true, innerVisible: false })
    expect(wrapper.findAll('.el-dialog').length).toBe(2)
    expect(
      wrapper
        .findAll('.el-dialog__wrapper')
        .at(1)
        .isVisible()
    ).toBe(false)
    wrapper.setProps({ showInner: true, innerVisible: true })
    expect(
      wrapper
        .findAll('.el-dialog__wrapper')
        .at(1)
        .isVisible()
    ).toBe(true)
  })
  it('innerClose event', () => {
    const mockFn3 = jest.fn()
    wrapper.vm.$on('update:innerVisible', mockFn3)
    wrapper.vm.innerClose()
    expect(mockFn3).toBeCalled()
    expect(mockFn3).toHaveBeenCalledTimes(1)
    expect(mockFn3).toHaveBeenCalledWith(false)
  })
  it('inner slot', () => {
    expect(wrapper.find('.innerTitle').text()).toBe('innerTitle')
    expect(wrapper.find('.innerBody').text()).toBe('innerBody')
    expect(wrapper.find('.innerFooter').text()).toBe('innerFooter')
  })
  it('submit event', () => {
    const mockFn4 = jest.fn()
    wrapper.vm.$on('submit', mockFn4)
    wrapper.vm.submit()
    expect(mockFn4).toBeCalled()
    expect(mockFn4).toHaveBeenCalledTimes(1)
  })
  it('cancel event', () => {
    const mockFn5 = jest.fn()
    wrapper.vm.$on('cancel', mockFn5)
    wrapper.vm.cancel()
    expect(mockFn5).toBeCalled()
    expect(mockFn5).toHaveBeenCalledTimes(1)
  })
})
