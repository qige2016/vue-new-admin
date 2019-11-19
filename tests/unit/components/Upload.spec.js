import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import Upload from '@/components/Upload'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('Upload.vue', () => {
  const wrapper = mount(Upload, {
    // https://github.com/vuejs/vue-test-utils/issues/958
    stubs: {
      transition: false
    },
    localVue
  })
  it('upload', () => {
    expect(wrapper.contains('.el-upload')).toBe(true)
  })
  it('download event', () => {
    const mockFn = jest.fn()
    wrapper.vm.$on('download', mockFn)
    wrapper.vm.download()
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
  it('downloadError event', () => {
    window.open = jest.fn()
    wrapper.setProps({
      asyntaskDeatil: {
        failedCount: 0,
        successCount: 0,
        url: 'www.baidu.com'
      }
    })
    wrapper.vm.downloadError()
    expect(window.open).toBeCalled()
    expect(window.open).toHaveBeenCalledTimes(1)
  })
})
