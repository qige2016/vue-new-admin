export default {
  state: {
    // 菜单折叠
    isCollapse: false
  },
  mutations: {
    TOGGLE_MENU: (state, value) => {
      state.isCollapse = value
    }
  }
}
