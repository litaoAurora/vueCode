
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default  new Vuex.Store({
    strict:true,
    state:{
        //根据token请求的数据
        data:[],
        //用户设置封面时选择的数据
        options:{},
        //token字符串
        token:'',
        //动态路由的hash值数值
        temp:['name','description','updated_at','owner','info'],
        //是否登录失败
        fail:false
    },
    mutations:{
        saveData(state,data){
            state.data = data;
        },
        saveOptions(state,[item,val]){
            state.options[item] = val;
        },
        saveToken(state,token){
            localStorage.setItem('token',token);
            state.token = token;
        },
        setFail(state,isFail){
            state.fail = isFail;
        }
    }
})