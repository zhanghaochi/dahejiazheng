import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugin/element'
import './plugin/vant'
import 'amfe-flexible'
// import './utils/rem'
import './permission'
import '@/styles/index.scss'
import './mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
