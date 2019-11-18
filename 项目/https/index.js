
import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL = 'https://api.github.com'

//添加请求拦截器
axios.interceptors.request.use(function (config) {
    //本地存储有token,则请求时将其带入请求头.
    let token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = 'token ' + token;
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 如果token填写不对或者格式不对,再跳回登录页,并且做出提示。   
    if(error.response.status == 401){
        store.commit('setFail',true)
    }
    return Promise.reject(error);
});