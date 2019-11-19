<template>
  <div class="menu-wrapper">
    <!-- 菜单部分 -->
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :unique-opened="true"
      :router="true"
      background-color="#001529"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <menu-item
        v-for="item in routes.filter(item => !item.hidden)"
        :key="item.name"
        :item="item"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuItem from './MenuItem'
import ResizeMixin from '@/mixins/ResizeHandler'
export default {
  name: 'Menu',
  components: { MenuItem },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters(['isCollapse', 'routes'])
  }
}
</script>
