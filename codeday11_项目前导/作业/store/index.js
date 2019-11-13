
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict:true,
    state:{
        msg:'',
        data:{}
    },
    mutations:{
        setData(state,val){
            state.msg = val
        },
        saveData(state,data){
            state.data = data
        }
    },
    actions:{
        sendData(store,val){
            store.commit('setData',val)
        },
        saveData(store,data){
            store.commit('saveData',data)
        }
    }
})

export default store