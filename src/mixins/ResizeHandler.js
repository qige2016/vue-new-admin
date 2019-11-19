import store from '@/store'

const { body } = document
const WIDTH = 1400 // refer to Bootstrap's responsive design

export default {
  created() {
    store.commit('TOGGLE_MENU', this.$_isCollapse())
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isCollapse() {
      const rect = body.getBoundingClientRect()
      return rect.width < WIDTH
    },
    $_resizeHandler() {
      if (!document.hidden) {
        store.commit('TOGGLE_MENU', this.$_isCollapse())
      }
    }
  }
}
