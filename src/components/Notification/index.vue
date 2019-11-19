<template>
  <el-dropdown
    class="notification-wrapper"
    trigger="click"
    @command="handleCommand"
  >
    <el-badge :value="notificationList.length">
      <svg-icon icon-class="notification" />
    </el-badge>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item in notificationList"
        :key="item.uuid"
        :command="item.type"
      >
        {{ item.content }}
      </el-dropdown-item>
      <el-dropdown-item v-show="!notificationList.length">
        暂无消息
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: 'Notification',
  data() {
    return {
      command: ''
    }
  },
  props: {
    notificationList: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleCommand(command) {
      this.command = command
    }
  }
}
</script>
