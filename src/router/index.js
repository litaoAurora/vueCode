import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import Welcome from "@/components/homecomponents/welcome"
import User from "@/components/user/Users"
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
      path: '/home',
      component: Home,
      children: [
        {path: '/welcome', component: Welcome},
        {path: '/users', component:  User}
      ] ,
      redirect: '/welcome',
  },
  { path: '/', redirect: '/login' }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next)=>{
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
