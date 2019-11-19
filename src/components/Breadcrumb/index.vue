<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in matched" :key="item.path">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    matched() {
      return this.$route.matched.filter(item => item.meta && item.meta.title)
    }
  }
}
</script>
