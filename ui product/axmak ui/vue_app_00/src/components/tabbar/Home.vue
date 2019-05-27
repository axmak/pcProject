<template>
    <div class="app-home">
        <!-- 1.顶部header -->
        <mt-header fixed title="学子商城"></mt-header>
        <!-- 2.轮播图 -->
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="img of imgs" :key="img.id">
                <img :src="img.img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 3.九宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="img/menu1.png" alt="">
		        <div class="mui-media-body">新闻资讯</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/GoodList">
		        <img src="img/menu2.png" alt="">
		        <div class="mui-media-body">商品列表</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	            <img src="img/menu3.png" alt="">
	             <div class="mui-media-body">聊天室</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="img/menu4.png" alt="">
	            <div class="mui-media-body">支付</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="img/menu5.png" alt="">
	            <div class="mui-media-body">搜索</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="img/menu6.png" alt="">
	            <div class="mui-media-body">菜单</div></a></li>
	    </ul> 
        <!-- 4.tabbar -->       
        <div>
            <nav class="mui-bar mui-bar-tab">
                <a class="mui-tab-item mui-active" href="#tabbar">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-chat">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">会员</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-contact">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                    <span class="mui-tab-label font-11">购物车</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-map">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">搜索</span>
                </a>
		    </nav>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgs:[]
        }
    },
     created(){
         //vue组件创建成功后调用
        this.loadImglist();
    },
    methods:{
        loadImglist(){
            // 功能发送一个ajax请求获取轮播图列表
            // 1.创建url变量
            var url="http://127.0.0.1:3000/imglist";
            // 2.发送ajax请求
            this.axios.get(url).then(result=>{
            // 3.获取服务器返回数据
                this.imgs=result.data.data
            // 4.保存data中
            console.log(this.imgs)
            })
        },
        jump1(){
            this.$router.push("/GoodList")
        }
    }
}
</script>
<style>
    .app-home{
        padding-top:40px;
        overflow-x: hidden;
        padding-bottom:40px;
    }
    /* 修改轮播图高度 */
    .app-home .mint-swipe{
        height:150px;
    }
    .app-home .mint-swipe img{
        width:100%;
        height:150px;
    }
    /* 九宫格图片宽和高 */
    .app-home .mui-grid-9 img{
        width:60px;
        height:60px;
    }
    .app-home ul.mui-grid-9{
        background-color: #fff;
        border: 0
    }
</style>