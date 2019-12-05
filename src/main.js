import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import '@/assets/css/global.css'
import axios from 'axios'

// 配置根路劲
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
