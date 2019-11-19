<template>
  <!-- 有子路由，且父路由的path不为空-->
  <el-submenu
    v-if="
      item.path &&
        item.children &&
        item.children.filter(child => !child.hidden).length
    "
    :index="item.path"
  >
    <template slot="title">
      <i :class="item.meta.icon" />
      <span v-if="item.meta && item.meta.title" slot="title">{{
        item.meta.title
      }}</span>
    </template>
    <!-- 当有子集时再次调用该组件(递归) -->
    <menu-item
      v-for="child in item.children.filter(child => !child.hidden)"
      :key="child.name"
      :item="child"
    />
  </el-submenu>
  <!-- 无子路由 -->
  <el-menu-item
    v-else
    :key="item.name || item.children[0].name"
    :index="item.path || item.children[0].path"
  >
    <i :class="item.meta.icon" />
    <span v-if="item.meta && item.meta.title" slot="title">{{
      item.meta.title
    }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
