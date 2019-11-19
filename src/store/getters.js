const getters = {
  isCollapse: state => state.global.isCollapse,
  operator: state => state.manager.operator,
  routes: state => state.permission.routes
}
export default getters
