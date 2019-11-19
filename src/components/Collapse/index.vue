<template>
  <el-collapse v-bind="$attrs">
    <el-row :gutter="20">
      <el-col
        v-for="item in collapseItems"
        :key="item.value"
        :md="item.span || 12"
        :xs="24"
      >
        <el-collapse-item :name="item.name">
          <template slot="title">
            <div>{{ item.label }}</div>
          </template>
          <Form :form="form" :form-items="item.formItems" :two-columns="true" />
          <slot />
        </el-collapse-item>
      </el-col>
    </el-row>
  </el-collapse>
</template>

<script>
import Form from '@/components/Form'
export default {
  name: 'Collapse',
  components: { Form },
  inheritAttrs: false,
  props: {
    collapseItems: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  }
}
</script>
