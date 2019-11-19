import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import Form from '@/components/Form'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('Form.vue', () => {
  const wrapper = mount(Form, {
    // https://github.com/vuejs/vue-test-utils/issues/958
    stubs: {
      transition: false
    },
    localVue,
    propsData: {
      form: {
        id: 1,
        username: '',
        password: '',
        number: '',
        role: '',
        date: '',
        datetime: '',
        datetimerange: [],
        cascader: [],
        link: '',
        image: ''
      },
      formItems: [
        {
          label: '序号',
          value: 'id',
          clearable: true
        },
        {
          type: 'input',
          label: '用户名',
          value: 'username',
          clearable: true
        },
        {
          type: 'password',
          label: '密码',
          value: 'password',
          clearable: true
        },
        {
          type: 'inputNumber',
          label: '数字',
          value: 'number',
          disabled: true
        },
        {
          type: 'select',
          label: '角色',
          value: 'role',
          clearable: true,
          list: [
            { label: '全部', value: '' },
            { label: '超级管理员', value: 'SUPER' },
            { label: '管理员', value: 'SUPER_MGR' }
          ]
        },
        {
          type: 'datetime',
          label: '日期时间',
          value: 'datetime',
          clearable: true
        },
        {
          type: 'datetimerange',
          label: '日期时间范围',
          value: 'datetimerange',
          clearable: true
        },
        {
          type: 'cascader',
          label: '级联',
          value: 'cascader',
          clearable: true
        },
        {
          type: 'link',
          label: '链接',
          value: 'link',
          clearable: true
        },
        {
          type: 'image',
          label: '图片',
          value: 'image',
          clearable: true
        }
      ]
    }
  })
  it('form', () => {
    const len = wrapper.findAll('.el-form-item').length
    expect(len).toBe(10)
  })
  it('twoColumns', () => {
    // inline为false时twoColumns生效
    wrapper.setProps({ twoColumns: true })
    expect(wrapper.contains('.el-col-12')).toBe(true)
  })
  it('form inline', () => {
    // 此版本elementUI在inline为true时，label-width不能为auto
    wrapper.setProps({ labelWidth: '100px', inline: true })
    expect(wrapper.contains('.el-form--inline')).toBe(true)
  })
  it('buttons', () => {
    wrapper.setProps({
      buttons: [{ label: '查询', type: 'primary' }]
    })
    expect(wrapper.contains('button')).toBe(true)
  })
  it('validate', () => {
    wrapper.setProps({
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
      }
    })
    const form = wrapper.vm.$refs.form
    const usernameField = form.fields.filter(
      field => field.prop === 'username'
    )[0]
    wrapper.vm.validate(valid => {
      expect(valid).toBe(false)
      expect(usernameField.validateMessage).toBe('请输入用户名')
      wrapper.setProps({ form: { username: 'superAdmin' } })
      wrapper.find('input').trigger('blur')
      expect(usernameField.validateMessage).toBe('')
    })
  })
  it('clear validate', () => {
    const form = wrapper.vm.$refs.form
    const usernameField = form.fields.filter(
      field => field.prop === 'username'
    )[0]
    wrapper.setProps({ form: { username: '' } })
    wrapper.vm.validate(valid => {
      expect(valid).toBe(false)
      expect(usernameField.validateMessage).toBe('请输入用户名')
      wrapper.vm.clearValidate()
      expect(usernameField.validateMessage).toBe('')
    })
  })
  it('reset field', () => {
    const form = wrapper.vm.$refs.form
    const usernameField = form.fields.filter(
      field => field.prop === 'username'
    )[0]
    wrapper.setProps({ form: { username: '' } })
    wrapper.vm.validate(valid => {
      expect(valid).toBe(false)
      expect(usernameField.validateMessage).toBe('请输入用户名')
      wrapper.vm.resetFields()
      expect(usernameField.validateMessage).toBe('')
    })
  })
})
