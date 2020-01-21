<template>
  <Dialog
    :type="type"
    :outer-visible="outerVisible"
    :title="titleMap[type]"
    width="460px"
    v-on="$listeners"
    @submit="submit"
    @outerOpen="outerOpen"
  >
    <Form
      ref="form"
      :form="currentForm"
      :form-items="formItems"
      :rules="rules"
    />
  </Dialog>
</template>

<script>
import { addOperator, editOperator } from '@/api/operator'
import Dialog from '@/components/Dialog'
import Form from '@/components/Form'
export default {
  name: 'OperatorAddEdit',
  components: { Form, Dialog },
  props: {
    type: {
      type: String,
      required: true
    },
    outerVisible: {
      type: Boolean,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      uuid: '',
      currentForm: {},
      formItems: [
        {
          type: 'input',
          label: 'uuid',
          value: 'operatorUUID',
          clearable: true
        },
        { type: 'input', label: '用户名', value: 'userName', clearable: true },
        {
          type: 'select',
          label: '角色',
          value: 'roleType',
          list: [
            { label: '全部', value: '' },
            { label: '超级管理员', value: 'SUPER' },
            { label: '管理员', value: 'SUPER_MGR' }
          ]
        },
        {
          type: 'datetime',
          label: '申请时间',
          value: 'registerTime',
          clearable: true
        }
      ],
      rules: {},
      titleMap: {
        add: '新增',
        edit: '编辑'
      }
    }
  },
  methods: {
    outerOpen() {
      this.$nextTick(() => {
        this.$refs.form.clearValidate()
      })
      if (this.type === 'add') {
        this.currentForm = {}
      } else if (this.type === 'edit') {
        const data = { ...this.form }
        this.uuid = this.form.operatorUUID
        this.currentForm = data
      }
    },
    refresh() {
      this.$emit('refresh')
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (!valid) {
          return
        }
        if (this.type === 'add') {
          addOperator(this.currentForm)
            .then(() => {
              this.$message({
                type: 'success',
                showClose: true,
                message: '新增成功'
              })
              this.refresh()
            })
            .catch(err => console.log(err))
        } else if (this.type === 'edit') {
          editOperator(this.uuid, this.currentForm)
            .then(() => {
              this.$message({
                type: 'success',
                showClose: true,
                message: '编辑成功'
              })
              this.refresh()
            })
            .catch(err => console.log(err))
        }
      })
    }
  }
}
</script>
