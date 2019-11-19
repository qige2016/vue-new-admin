import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '../theme/index.css'
import './styles/index.scss' // global css
import App from './App.vue'
import router from './router'
import store from './store'
import './icons' // icon
import './permission' // permission control
import './plugins/element'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
