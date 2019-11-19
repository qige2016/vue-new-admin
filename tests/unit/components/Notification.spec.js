import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import Notification from '@/components/Notification'
import SvgIcon from '@/components/SvgIcon'

const localVue = createLocalVue()
localVue.use(ElementUI)
localVue.component('svg-icon', SvgIcon)

describe('Notification.vue', () => {
  const wrapper = mount(Notification, {
    localVue,
    propsData: {
      notificationList: [
        { uuid: '123', type: 'IHU', content: '消息通知消息通知IHU' },
        { uuid: '234', type: 'TBOX', content: '消息通知消息通知TBOX' },
        { uuid: '345', type: 'OBD', content: '消息通知消息通知OBD' },
        { uuid: '456', type: 'HIU', content: '消息通知消息通知HIU' },
        { uuid: '567', type: 'OBD', content: '消息通知消息通知OBD' }
      ]
    }
  })
  it('display', () => {
    const menuItem = wrapper.findAll('.el-dropdown-menu__item')
    expect(menuItem.at(2).text()).toBe('消息通知消息通知OBD')
  })
  it('click', () => {
    const menuItem = wrapper.findAll('.el-dropdown-menu__item')
    menuItem.at(2).trigger('click')
    expect(wrapper.vm.$data.command).toBe('OBD')
  })
})
