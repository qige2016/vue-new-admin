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
    <OperatorDetail :outer-visible.sync="detailVisible" :uuid="operatorUUID" />
    <OperatorAddEdit
      :type="type"
      :outer-visible.sync="addEditVisible"
      :form="addEditForm"
      @refresh="refresh"
    />
  </div>
</template>

<script>
import formatter from '@/utils/format'
import { getOperators, deleteOperator } from '@/api/operator'
import Form from '@/components/Form'
import Table from '@/components/Table'
import OperatorDetail from './components/OperatorDetail'
import OperatorAddEdit from './components/OperatorAddEdit'
export default {
  name: 'Operator',
  components: { Form, Table, OperatorDetail, OperatorAddEdit },
  data() {
    return {
      form: {
        roleType: ''
      },
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
        },
        {
          label: '新增',
          type: 'success',
          icon: 'el-icon-plus',
          click: this.handleAdd
        }
      ],
      tableLoading: false,
      data: [],
      columns: [
        { label: 'uuid', prop: 'operatorUUID' },
        { label: '用户名', prop: 'userName' },
        { label: '角色', prop: 'roleType', formatter },
        { label: '申请时间', prop: 'registerTime', formatter },
        {
          label: '操作',
          width: '200px',
          buttons: [
            {
              type: 'text',
              label: '详情',
              click: this.handleDetail
            },
            {
              type: 'text',
              label: '编辑',
              click: this.handleEdit
            },
            {
              type: 'text',
              label: '删除',
              click: this.handleDelete
            }
          ]
        }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10
      },
      total: 0,
      type: '',
      addEditVisible: false,
      addEditForm: {},
      detailVisible: false,
      operatorUUID: ''
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
      getOperators(params)
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
      this.form = {
        roleType: ''
      }
    },
    handleDetail(row) {
      this.uuid = row.operatorUUID
      this.detailVisible = true
    },
    refresh() {
      this.addEditVisible = false
      this.handleOperator()
    },
    handleAdd() {
      this.addEditVisible = true
      this.type = 'add'
    },
    handleEdit(row) {
      this.addEditVisible = true
      this.type = 'edit'
      this.addEditForm = row
    },
    handleDelete(row) {
      this.$confirm('确定删除吗？', {
        type: 'warning',
        showClose: false,
        closeOnClickModal: false
      })
        .then(() => {
          deleteOperator(row.operatorUUID).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            // 刷新列表
            this.handleOperator()
          })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
