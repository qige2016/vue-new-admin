<template>
  <div class="export-wrapper">
    <p>
      最多支持一次性导出50页数据，当前单页{{
        pageSize
      }}条，如有更多要求请分批导出
    </p>
    <p class="el-upload__tip">
      提示：开始页小于等于结束页
    </p>
    <el-input-number
      v-model="pageParams.startPage"
      :min="1"
      :step="1"
      :max="pageParams.endPage"
      step-strictly
      @blur="handleStartPageBlur"
    />
    (页)
    <span class="separator">
      至
    </span>
    <el-input-number
      v-model="pageParams.endPage"
      :min="pageParams.startPage"
      :step="1"
      :max="pageParams.startPage + 49"
      step-strictly
      @blur="handleEndPageBlur"
    />
    (页)
  </div>
</template>

<script>
export default {
  name: 'Export',
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    pageParams: {
      type: Object,
      default: () => ({
        startPage: 1,
        endPage: 1
      })
    }
  },
  methods: {
    handleStartPageBlur(event) {
      if (event.target.value === '') {
        this.pageParams.startPage = 1
      }
    },
    handleEndPageBlur(event) {
      if (event.target.value === '') {
        this.pageParams.endPage = 1
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.export-wrapper {
  text-align: center;
  .separator {
    padding: 0 10px;
  }
}
</style>
