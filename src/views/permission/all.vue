<template>
  <div>
    <div>所有权限都能访问</div>
    <div style="margin-top:30px;">
      <div v-permission="['SUPER']" class="permission-alert">
        <div class="permission-tag" size="small">
          超级管理员能看到
        </div>
      </div>
      <div v-permission="['SUPER_MGR']" class="permission-alert">
        <div class="permission-tag" size="small">
          管理员能看到
        </div>
      </div>
      <div v-permission="['SUPER', 'SUPER_MGR']" class="permission-alert">
        <div class="permission-tag" size="small">
          超级管理员和管理员能看到
        </div>
      </div>
    </div>
    <el-tabs type="border-card" style="width:500px;margin-top:30px;">
      <el-tab-pane v-if="checkPermission(['SUPER'])" label="SUPER_MGR">
        超级管理员能看到
      </el-tab-pane>
      <el-tab-pane v-if="checkPermission(['SUPER_MGR'])" label="Editor">
        管理员能看到
      </el-tab-pane>
      <el-tab-pane
        v-if="checkPermission(['SUPER', 'SUPER_MGR'])"
        label="SUPER_MGR-OR-Editor"
      >
        所有权限能看到
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数

export default {
  name: 'All',
  directives: { permission },
  methods: {
    checkPermission
  }
}
</script>
<style lang="scss" scoped></style>
