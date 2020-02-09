<template>
  <el-menu class="navbar" mode="horizontal">
    <Hamburger
      class="hamburger-container"
      :toggleClick="collapseMenu"
      :isActive="!isCollapse"
    ></Hamburger>
    <Breadcrumb />
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <el-avatar class="role-avatar" icon="el-icon-user-solid" />
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <el-dropdown-item>
          <span @click="logout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
export default {
  name: 'Header',
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(['isCollapse'])
  },
  methods: {
    collapseMenu() {
      this.$store.commit('TOGGLE_MENU', !this.isCollapse)
    },
    logout() {
      this.$confirm('确认要退出登录吗?', {
        type: 'warning',
        showClose: false
      })
        .then(() => {
          this.$store.dispatch('manager/handleLogOut').then(() => {
            this.$router.push('/login')
          })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 56px;
  line-height: 56px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 56px;
    float: left;
    padding: 0 10px;
  }
  .avatar-container {
    height: 56px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
    }
  }
}
</style>
