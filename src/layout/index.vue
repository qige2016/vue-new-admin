<template>
  <div class="app-wrapper" :class="{ 'is-collapse': isCollapse }">
    <Menu />
    <div class="main">
      <Header />
      <AppMain class="app-main" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from './components/Header'
import Menu from './components/Menu'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: { Header, Menu, AppMain },
  computed: {
    ...mapGetters(['isCollapse'])
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
