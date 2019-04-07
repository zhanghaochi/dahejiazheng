import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/element'
import './plugin/vant'
import 'amfe-flexible'
// import './utils/rem'
import './permission'
import '@/style/index.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
