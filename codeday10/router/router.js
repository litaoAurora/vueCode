const router = new VueRouter({
	routes:[
		{
			path:'/home',
			component:home,
			name:'home'
		},{
			path:'/huodong',
			component:huodong
		},{
			path:'/news',
			component:news
		},{
			path:'/',
			redirect:'/home'
		}
	]
})