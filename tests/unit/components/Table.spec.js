import { mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import Table from '@/components/Table'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('Table.vue', () => {
  const wrapper = mount(Table, {
    // https://github.com/vuejs/vue-test-utils/issues/958
    stubs: {
      transition: false
    },
    localVue,
    slots: {
      test: `<el-table-column slot="test" label="测试"><template v-slot="{ row }">{{ row.test }}</template></el-table-column>`
    },
    propsData: {
      data: [
        {
          id: 1,
          name: 'Toy Story',
          release: '1995-11-22',
          director: 'John Lasseter',
          runtime: 80,
          test: 'test'
        },
        {
          id: 2,
          name: "A Bug's Life",
          release: '1998-11-25',
          director: 'John Lasseter',
          runtime: 95,
          test: 'test'
        },
        {
          id: 3,
          name: 'Toy Story 2',
          release: '1999-11-24',
          director: 'John Lasseter',
          runtime: 92,
          test: 'test'
        },
        {
          id: 4,
          name: 'Monsters, Inc.',
          release: '2001-11-2',
          director: 'Peter Docter',
          runtime: 92,
          test: 'test'
        },
        {
          id: 5,
          name: 'Finding Nemo',
          release: '2003-5-30',
          director: 'Andrew Stanton',
          runtime: 100,
          test: 'test'
        }
      ],
      columns: [
        { prop: 'id' },
        { prop: 'name', label: '片名' },
        { prop: 'release', label: '发行日期' },
        { prop: 'director', label: '导演' },
        { prop: 'runtime', label: '时长（分）' }
      ]
    }
  })
  it('table', () => {
    expect(wrapper.findAll('thead th').length).toBe(5)
    expect(wrapper.findAll('.el-table__body-wrapper tbody tr').length).toBe(5)
    expect(wrapper.findAll('td .cell').length).toBe(25)
  })
  it('hidden column', () => {
    wrapper.setProps({
      columns: [
        { prop: 'id' },
        { prop: 'name', label: '片名', hidden: true },
        { prop: 'release', label: '发行日期', hidden: true },
        { prop: 'director', label: '导演', hidden: true },
        { prop: 'runtime', label: '时长（分）', hidden: true }
      ]
    })
    expect(wrapper.findAll('thead th').length).toBe(1)
  })
  it('slot column', () => {
    wrapper.setProps({
      columns: [{ slot: 'test' }]
    })
    expect(
      wrapper
        .find('.el-table__header-wrapper thead tr th:last-child .cell')
        .text()
    ).toBe('测试')
  })
  it('button column', () => {
    wrapper.setProps({
      columns: [
        {
          label: '操作',
          width: '300px',
          buttons: [{ type: 'text', label: '详情' }]
        }
      ]
    })
    expect(
      wrapper
        .find('.el-table__header-wrapper thead tr th:last-child .cell')
        .text()
    ).toBe('操作')
    expect(
      wrapper
        .findAll('.el-table__body-wrapper tbody td:last-child .cell')
        .contains('button')
    ).toBe(true)
  })
  it('pagination', () => {
    wrapper.setProps({
      pagination: {
        currentPage: 1,
        pageSize: 10
      },
      total: 5
    })
    expect(wrapper.contains('.el-pagination')).toBe(true)
  })
  it('currentChange event', () => {
    wrapper.setProps({
      pagination: {
        currentPage: 2
      }
    })
    wrapper.vm.currentChange(val => {
      expect(val).toBe(2)
    })
    const mockFn1 = jest.fn()
    wrapper.vm.$on('pagination-change', mockFn1)
    wrapper.vm.currentChange()
    expect(mockFn1).toBeCalled()
    expect(mockFn1).toHaveBeenCalledTimes(1)
  })
  it('sizeChange event', () => {
    wrapper.setProps({
      pagination: {
        pageSize: 50
      }
    })
    wrapper.vm.sizeChange(val => {
      expect(val).toBe(50)
    })
    const mockFn2 = jest.fn()
    wrapper.vm.$on('pagination-change', mockFn2)
    wrapper.vm.sizeChange()
    expect(mockFn2).toBeCalled()
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })
})
