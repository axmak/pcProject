import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import List from "./components/List.vue"
// import Login from "./components/tabbar/login.vue"
import GoodList from "./components/home/GoodList.vue"
import Newlist from "./components/tabbar/Newlist.vue"
import ShopCart from "./components/tabbar/ShopCart.vue"
import home from "./components/keep/home.vue"
import discover from "./components/keep/discover.vue"
import training from "./components/keep/training.1.vue"
import tabbar1 from "./components/tabbar1.vue"
import login from "./components/keep/login.vue"
import search from "./components/keep/search.vue"
import profile from "./components/keep/profile.vue"
import tabbar from "./components/tabbar.vue"
Vue.use(Router)

export default new Router({
  "mode":"history",
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/List',component:List},
    //{path:'/Login',component:Login},
    {path:'/GoodList',component:GoodList},
    {path:'/Newlist',component:Newlist},
    {path:'/ShopCart',component:ShopCart},
    {path:'/home',component:home},
    {path:'/discover',component:discover},
    {path:'/training',component:training},
    {path:'/tabbar1',component:tabbar1},
    {path:'/login',component:login},
    {path:'/search',component:search},
    {path:'/profile',component:profile},
    {path:'/tabbar',component:tabbar}
  ]
})
