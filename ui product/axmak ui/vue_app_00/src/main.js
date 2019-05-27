import Vue from 'vue'
import App from './App.vue'
import router from './router'
import animate from 'animate.css'

import'mint-ui/lib/style.css'

Vue.use(animate)



Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;


// 引入Vuex组件
import Vuex from "vuex"
// 注册Vuex组件
Vue.use(Vuex)
// 创建store对象
var store=new Vuex.Store({
  // 共用数据容器
  state:{
    num:1,
    ava:"",
    uname:"",
    uid:0,
    islogin:false
  },
  // 操作共用数据方法
  mutations:{

  },
  // 获取共用数据方法
  getters:{}
})
// 将store绑定Vue实例 


// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'



//按需加载mint-ui组件库的一个组件Header
//1.按需引入Header,Button,Swipe,SwipeItem
import {Header,Button,Swipe,SwipeItem,Lazyload} from 'mint-ui'

import MintUI from "mint-ui";
Vue.use(MintUI);

//2.全局注册Header
//希望Header组件可以像标签一样调用
//标签:Header.name="mt-header"
//在项目中任意组件模板都可以直接使用
// Vue.component(Header.name,Header);

// Vue.component(Button.name,Button);

// Vue.component(Swipe.name,Swipe);

// Vue.component(SwipeItem.name,SwipeItem);

// Vue.component(Lazyload);


//引入axios库，main.js
// 1.引入axios库
import axios from 'axios'
// 2.配置跨域选项,保存session中的数据
axios.defaults.withCredentials=true;
// 3.将axios配置到Vue实例中
Vue.prototype.axios = axios;

//引入脚


// 4：创建日期格式的过滤器
  // 4.1：创建过滤器
  Vue.filter("datetimeFilter",function(val){
    // (1)创建新日期对象保存原有日期
    var now=new Date(val)
    // (2)创建三个变量保存年月日
    var y=now.getFullYear();
    var m=now.getMonth()+1;
    var d=now.getDate();
    // (3)创建三个变量保存时分秒
    var h=now.getHours();
    var mi=now.getMinutes();
    var s=now.getSeconds();
    // (4)调整月份日期格式
    m<10&&(m="0"+m);
    d<10&&(d="0"+d);
    // (5)返回拼接字符串
    return `${y}-${m}-${d} ${h}:${mi}:${s}`
  })
  // 4.2： 在组件中使用

new Vue({
  router,
  render: h => h(App),
  store             //将store绑定Vue实例
}).$mount('#app')
