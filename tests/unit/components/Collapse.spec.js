import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import Collapse from '@/components/Collapse'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('Collapse.vue', () => {
  const wrapper = mount(Collapse, {
    // https://github.com/vuejs/vue-test-utils/issues/958
    stubs: {
      transition: false
    },
    localVue,
    propsData: {
      collapseItems: [
        {
          label: '企业信息',
          name: 'orgDetail',
          formItems: [
            { label: '企业名称', value: 'name' },
            { label: '企业法人', value: 'legalRepresentative' },
            { label: '企业地址', value: 'address' }
          ]
        },
        {
          label: '联系人信息',
          name: 'contactDetail',
          formItems: [
            { label: '企业联系人', value: 'organizationContact' },
            { label: '联系人手机', value: 'contactNumber' },
            { label: '联系人邮箱', value: 'contactEmail' }
          ]
        }
      ],
      form: {
        name: '地球有限公司',
        legalRepresentative: '老王',
        address: '地球',
        organizationContact: '120',
        contactNumber: '110',
        contactEmail: '123@qq.com'
      }
    }
  })
  it('collapse', () => {
    expect(wrapper.contains('.el-collapse')).toBe(true)
    expect(wrapper.findAll('.el-collapse-item').length).toBe(2)
  })
})
