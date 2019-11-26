import Home from "../components/Home";
import News from "../components/News";
import Product from "../components/Product";

const routes = [
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

export default routes