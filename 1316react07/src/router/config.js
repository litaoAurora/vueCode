
import Home from '../component/Home'
import News from '../component/News'
import Product from '../component/Product'

export const routes = [
    {
        path:'/home',
        component:Home,
        content:'首页'
    },{
        path:'/news',
        component:News,
        content:'新闻'
    },{
        path:'/product',
        component:Product,
        content:'产品'
    }
]