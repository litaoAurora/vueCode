
import Vue from 'vue'
import VueRouter from 'vue-router'
import box from '@/components/box'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/:path',
            component:box
        },{
            path:'/',
            redirect:'/home'
        }
    ]
})

export default router