<template>
  <el-tabs v-bind="$attrs" v-on="$listeners">
    <el-tab-pane
      v-for="tab in tabs.filter(
        tab =>
          !tab.ifRender ||
          (typeof tab.ifRender === 'function' ? tab.ifRender() : tab.ifRender)
      )"
      :key="tab.name"
      :label="tab.label"
      :name="tab.name"
    >
      <slot />
      <component
        :is="$attrs.value === tab.name ? tab.component : false"
        :name="$attrs.value"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Tab',
  inheritAttrs: false,
  props: {
    tabs: {
      type: Array,
      required: true
    }
  }
}
</script>
