const store = new Vuex.Store({
	strict:true,
	state:{msg:1000},
	mutations:{
		setData(state,val){
			state.msg = val
		}
	}
})