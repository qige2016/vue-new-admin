<template>
  <el-select v-model="value" :disabled="disabled" @change="handleChange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
<script>
import formatter from '@/utils/format'
import { getTerminalTypes } from '@/api/terminal'
import { getOrganizations } from '@/api/organization'
import { getFlowproviders } from '@/api/flowpackage'
import { getRoles } from '@/api/manager'
export default {
  name: 'SelectRemote',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'org'
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: this.checked,
      options: [],
      organizations: []
    }
  },
  watch: {
    checked(newValue) {
      this.value = newValue
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    handleChange(value) {
      if (this.type === 'org') {
        const organization =
          this.organizations.find(
            organization => organization.orgUUID === value
          ) || {}
        const type = organization.type
        this.$emit('change', value, type)
      } else {
        this.$emit('change', value)
      }
    },
    getInfo() {
      let temp = []
      if (!this.isEdit) {
        temp = [{ label: '全部', value: '' }]
      }
      // 获取企业列表
      if (this.type === 'org') {
        getOrganizations()
          .then((res = {}) => {
            this.organizations = res.organizations || []
            this.organizations.forEach(item => {
              temp.push({ label: item.name, value: item.orgUUID })
            })
            this.options = temp
          })
          .catch(err => console.log(err))
      }
      // 获取终端类型
      if (this.type === 'deviceType') {
        getTerminalTypes()
          .then(res => {
            const terminalTypes = res.terminalTypes || []
            terminalTypes.forEach(item => {
              temp.push({ label: item.deviceType, value: item.deviceType })
            })
            this.options = temp
          })
          .catch(err => console.log(err))
      }
      // 获取供应商列表
      if (this.type === 'flowProviders') {
        const params = {
          currentPage: 1,
          pageSize: 100
        }
        getFlowproviders(params)
          .then(res => {
            const flowProviderBeans = res.flowProviderBeans || []
            flowProviderBeans.forEach(item => {
              temp.push({ label: item.name, value: item.uuid })
            })
            this.options = temp
          })
          .catch(err => console.log(err))
      }
      // 获取权限列表
      if (this.type === 'roleType') {
        getRoles()
          .then(res => {
            const roleTypes = res.roleTypes || []
            roleTypes.forEach(item => {
              temp.push({ label: formatter('roleType', item), value: item })
            })
            this.options = temp
          })
          .catch(err => console.log(err))
      }
    }
  }
}
</script>
