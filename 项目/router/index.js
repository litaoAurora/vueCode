

import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/components/login'
import index from '@/components/index'
import options from '@/components/options/options'
import createIndex from '@/components/createIndex'

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/index',
            component:index,
            name:'index',
            meta:{
                requireLogin:true
            }
        },{
            path:'/login',
            component:login,
            name:'login'
        },{
            path:'/createIndex',
            component:createIndex,
            name:'createIndex',
            meta:{
                requireLogin:true
            }
        },{
            path:'/:hash',
            component:options,
            name:'options',
            meta:{
                requireLogin:true
            }
        },{
            path:'/',
            redirect:'/index'
        }
    ]
})

//全局路由进入前拦截。
router.beforeEach((to,from,next)=>{
    
    //如果当前路由需要登录，则判断是否需要跳转到登录页。如果不需要，直接跳转
    if(to.meta.requireLogin === true){
        //本地存储的token
        let token = localStorage.getItem('token');
        //本地存储登录页面.
        let isCreated = localStorage.getItem('userData');

        //如果本地存储有token,证明登录成功过,如果没有登录，跳转到登录页。
        if(token){
            //如果跳转的是首页，判断是否创建过首页，没创建过，跳转到创建页。
            if(to.path == '/index'){
                if(isCreated){
                    next()
                }else{
                    next({name:'createIndex'})
                }
            }else{
                next()
            }

        }else{
            next({name:'login'})
        }
    }else{
        next()
    }
})

export default router