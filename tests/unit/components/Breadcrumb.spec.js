import { mount, createLocalVue } from '@vue/test-utils'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import Breadcrumb from '@/components/Breadcrumb'

const localVue = createLocalVue()
localVue.use(Router)
localVue.use(ElementUI)

const routes = [
  {
    path: '',
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '主页'
        }
      }
    ]
  },
  {
    path: '',
    redirect: '/oneRoute',
    children: [
      {
        path: '/oneRoute',
        name: 'oneRoute',
        meta: {
          title: '一级路由'
        }
      }
    ]
  },
  {
    path: '/menu',
    meta: {
      title: '菜单'
    },
    children: [
      {
        path: '/menu/menu1',
        meta: { title: '菜单1' },
        children: [
          {
            path: '/menu/menu1/menu1-1',
            meta: { title: '菜单1-1' }
          },
          {
            path: '/menu/menu1/menu1-2',
            meta: { title: '菜单1-2' },
            children: [
              {
                path: '/menu/menu1/menu1-2/menu1-2-1',
                meta: { title: '菜单1-2-1' }
              },
              {
                path: '/menu/menu1/menu1-2/menu1-2-2'
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = new Router({
  routes
})

describe('Breadcrumb.vue', () => {
  const wrapper = mount(Breadcrumb, {
    localVue,
    router
  })
  it('index', () => {
    router.push('/index')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(1)
  })
  it('one route', () => {
    router.push('/oneRoute')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(1)
  })
  it('normal route', () => {
    router.push('/menu/menu1')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(2)
  })
  it('nested route', () => {
    router.push('/menu/menu1/menu1-2/menu1-2-1')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(4)
  })
  it('no meta.title', () => {
    router.push('/menu/menu1/menu1-2/menu1-2-2')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(3)
  })
})
