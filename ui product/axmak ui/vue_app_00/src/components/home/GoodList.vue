<template>
    <div class="app-goodlist">
       <!-- 商品列表 -->
       <!-- 添加按钮 mint ui Button -->
       <div v-for="item of list" class="good-item" :key="item.i">
           <!-- 1.1图片 -->
           <img src="http://127.0.0.1:3000/3.jpg" alt="">
           <!-- 1.2商品名称 -->
           <h4 v-text="item.lname"></h4>
           <!-- 1.3商品价格 -->
           <h4 class="now" v-text="item.price"></h4>
       </div>
        <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pno:"",
            pageSize:"",
            list:[], /* 接受服务器返回的商品数组 */
            pno:1,
            hasMore:true,
        }
    },
    created(){
        // 创建变量保存请求地址 url
        var url="http://127.0.0.1:3000/getGoodlist"
        // 发送ajax 无参数
        this.axios.get(url).then(result=>{
        // 接受返回的商品数组
        // 保存到list
        this.list=result.data.data;
        console.log(this.list)
        });
        var id=this.$route.query.id;
        console.log(id);
    },
    methods:{
        loadMore(){ 
            if(this.hasMore==false){
                // 当前组件临时引入
                // 1:import {Toast} from "mint-ui"
                // 2:Toast("...")
                this.$toast("没有更多内容....");  //完整引入的方式
                return;
            }
            //加载下一页
            this.pno++;
            //加载下一页数据
            // 1.创建url请求地址
            // 2.添加参数pno=2
            var url=`http://127.0.0.1:3000/getGoodlist?pno=${this.pno}`;
            // 3.发送ajax请求
            // 4.获取服务器数据
            this.axios.get(url).then(result=>{
            // 5.将返回值保存 list  
            //创建新数组，将新数组赋值给this.list
                this.list=this.list.concat(result.data.data);
                if(this.pno>=result.data.pageCount){
                    this.hasMore=false;
                }
            })
        }
    }
}
</script>
<style>
    /*外层的父元素*/
    .app-goodlist{
        display: flex; /*弹性布局*/
        flex-wrap: wrap; /*子元素换行*/
        justify-content: space-between; /*两端对齐*/
        padding:4px;
    }
    /*商品的信息*/
    .app-goodlist .good-item{
        width:49%;
        border: 1px solid #ccc;
        margin:2px 0;   /*外补丁*/
        padding:2px;    /*内补丁*/
        display:flex;
        flex-direction: column;
        min-height:245px;
    }
    /*商品的图片*/
    .app-goodlist .good-item img{
        width:100%;
    }
</style>
