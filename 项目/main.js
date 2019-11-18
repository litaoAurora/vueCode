import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './https'
import './libs/rem'
import './css/style.css'

Vue.use(ElementUI)

Vue.prototype.axios = axios;

new Vue({
    el:'#app',
    render:h=>h(App),
    components:{App},
    store,
    router
})
