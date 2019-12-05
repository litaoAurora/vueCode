import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/', redirect: '/login' }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next)=>{
	console.log( to )
	if(to.path !== '/login'){
		if(sessionStorage.getItem('token')){
			next();
		}else {
			next('/login');
		}
		
	}else {
		next();
	}
})

export default router
