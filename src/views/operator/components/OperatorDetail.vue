<template>
  <Dialog
    :outer-visible="outerVisible"
    title="详情"
    width="650px"
    v-on="$listeners"
    @outerOpen="outerOpen"
  >
    <Form
      v-loading="loading"
      :form="form"
      :form-items="formItems"
      :two-columns="true"
    />
  </Dialog>
</template>

<script>
import formatter from '@/utils/format'
import { getOperator } from '@/api/operator'
import Dialog from '@/components/Dialog'
import Form from '@/components/Form'
export default {
  name: 'OperatorDetail',
  components: { Dialog, Form },
  props: {
    outerVisible: {
      type: Boolean,
      required: true
    },
    uuid: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      form: {},
      formItems: [
        { label: 'uuid', value: 'operatorUUID' },
        { label: '用户名', value: 'userName' },
        { label: '角色', value: 'roleType', formatter },
        { label: '申请时间', value: 'registerTime', formatter }
      ]
    }
  },
  methods: {
    outerOpen() {
      this.handleOperatorDetail()
    },
    handleOperatorDetail() {
      this.loading = true
      const uuid = this.uuid
      getOperator(uuid)
        .then(res => {
          this.loading = false
          this.form = res.operator
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>
