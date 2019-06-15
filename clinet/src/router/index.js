import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const Home = ()=>import("../views/home.vue")
const Search = ()=>import("../views/search/search.vue")
const Login =()=>import("../views/login/index.vue")
const Filter = ()=>import("../views/filter.vue")
const Sort = ()=>import("../views/sort.vue")
const Detail = ()=>import("../views/detail/index.vue")
const Commit = ()=>import("../views/commit/index.vue")
const Examine = ()=>import("../views/examine/examine.vue")
let Routers =  new Router({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/search",
            name:"name",
            meta:{
                title:"搜索"
            },
            component:Search,
        },
        {
            path:"/detail/:type/:id",
            name:"detail",
            props:true,
            meta:{
                title:"详情"
            },
            component:Detail,
        },
        {
            path:"/filter",
            name:"filter",
            meta:{
                title:"批量"
            },
            component:Filter,
        },
        {
            path:"/sort",
            name:"sort",
            meta:{
                title:"排序"
            },
            component:Sort,
        },

        {
            path:"/login",
            name:"login",
            meta:{
                title:"登录"
            },
            component:Login,
        },
        {
            path:"/home",
            name:"home",
            meta:{
                title:"首页列表"
            },
            component:Home,
            
        },
        {
            path:"/commit/:type",
            name:"commit",
            meta:{
                type:"申请表"
            },
            props:true,
            component:Commit,
            
        },
        {
            path:"/examine/:applicationNumber",
            name:"examine",
            meta:{
                type:"审批"
            },
            props:true,
            component:Examine,
            
        }
    ]
})

Routers.beforeEach((to,from,next)=>{
    document.title = to.meta.title;
    next()
})

export default Routers;