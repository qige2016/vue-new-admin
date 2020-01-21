<template>
  <div class="page-wrapper">
    <Form
      class="search-form"
      :form="form"
      :form-items="formItems"
      :inline="true"
      :buttons="buttons"
    />
    <Table
      :loading="tableLoading"
      :data="data"
      :total="total"
      :columns="columns"
      :pagination="pagination"
      @pagination-change="handlePageChange"
    />
  </div>
</template>

<script>
import formatter from '@/utils/format'
import { getOperator } from '@/api/operator'
import Form from '@/components/Form'
import Table from '@/components/Table'
export default {
  name: 'Operator',
  components: { Form, Table },
  data() {
    return {
      form: {},
      formItems: [
        {
          type: 'input',
          label: '用户名',
          value: 'userName',
          clearable: true
        },
        {
          type: 'select',
          label: '角色',
          value: 'roleType',
          list: [
            { label: '全部', value: '' },
            { label: '超级管理员', value: 'SUPER' },
            { label: '管理员', value: 'SUPER_MGR' }
          ]
        }
      ],
      buttons: [
        {
          label: '查询',
          type: 'primary',
          icon: 'el-icon-search',
          click: this.searchSubmit
        },
        {
          label: '重置',
          type: 'info',
          icon: 'el-icon-refresh-right',
          click: this.reset
        }
      ],
      tableLoading: false,
      data: [],
      pagination: {
        currentPage: 1,
        pageSize: 10
      },
      total: 0,
      columns: [
        { label: 'uuid', prop: 'operatorUUID' },
        { label: '用户名', prop: 'userName' },
        { label: '角色', prop: 'roleType', formatter },
        { label: '申请时间', prop: 'registerTime', formatter }
      ]
    }
  },
  created() {
    this.handleOperator()
  },
  methods: {
    handlePageChange({ type, val }) {
      this.pagination[type] = val
      type === 'pageSize' && (this.pagination.currentPage = 1)
      this.handleOperator()
    },
    handleOperator() {
      this.tableLoading = true
      const params = { ...this.form, ...this.pagination }
      getOperator(params)
        .then(res => {
          this.tableLoading = false
          this.data = res.operatorList || []
          this.total = res.totalCount || 0
        })
        .catch(() => {
          this.tableLoading = false
        })
    },
    searchSubmit() {
      this.pagination.currentPage = 1
      this.handleOperator()
    },
    reset() {
      this.form = {}
    }
  }
}
</script>
