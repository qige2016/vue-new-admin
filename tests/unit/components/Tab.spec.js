import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import Tab from '@/components/Tab'

const localVue = createLocalVue()
localVue.use(ElementUI)

const handleClick = tab => {
  return tab
}

describe('Tab.vue', () => {
  const wrapper = mount(Tab, {
    // https://github.com/vuejs/vue-test-utils/issues/958
    stubs: {
      transition: false
    },
    localVue,
    slots: {
      default: '<div class="test-slot">slot</div>'
    },
    listeners: {
      'tab-click': handleClick
    },
    attrs: {
      value: 'Geofence'
    },
    propsData: {
      tabs: [
        {
          label: '围栏告警',
          name: 'Geofence',
          component: localVue.component('Geofence', {
            render: createElement => createElement('div', '围栏告警')
          })
        },
        {
          label: '设备异常',
          name: 'EqupmentException',
          component: localVue.component('EqupmentException', {
            render: createElement => createElement('div', '设备异常')
          })
        },
        {
          label: '振动异常',
          name: 'ShockException',
          component: localVue.component('ShockException', {
            render: createElement => createElement('div', '振动异常')
          })
        },
        {
          label: '停车卫士',
          name: 'StopGuard',
          component: localVue.component('StopGuard', {
            render: createElement => createElement('div', '停车卫士')
          })
        }
      ]
    }
  })
  it('tab length', () => {
    const len = wrapper.findAll('.el-tabs__item').length
    expect(len).toBe(4)
  })
  it('display first', () => {
    const tabPanes = wrapper.findAll('.el-tab-pane')
    expect(tabPanes.at(0).isVisible()).toBe(true)
    expect(tabPanes.at(1).isVisible()).toBe(false)
  })
  it('click event', () => {
    const tabs = wrapper.findAll('.el-tabs__item')
    tabs.at(1).trigger('click')
    const tabPanes = wrapper.findAll('.el-tab-pane')
    expect(tabPanes.at(0).isVisible()).toBe(false)
    expect(tabPanes.at(1).isVisible()).toBe(true)
  })
  it('slot', () => {
    const slot = wrapper.find('.test-slot')
    expect(slot.exists()).toBe(true)
  })
})
