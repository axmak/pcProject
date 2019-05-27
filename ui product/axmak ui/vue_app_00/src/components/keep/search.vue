<template>
    <div class="search">
        <div class="mui-content">
            <div class="search-img">
                <div>
                    <a href="javascript:;" @click="backHome">返回</a>
                    <img class="windows" src="../../img/微信图片_20190514092943.png" alt="">
                    <input v-model="axmak" type="text" placeholder="大家都在搜“腹肌”">
                    <a href="javascript:;" @click="search">搜索</a>
                </div>
            </div>
            <div class="heat">
                <div v-if="show">热门搜索</div>
                <div class="heat-search" v-if="show">
                    <a class="s-item" href="javascript:;" @click="clickSearch">腹肌</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">拉伸</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">瘦腿</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">减脂</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">跑步</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">马甲线</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">平板支撑</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">燃脂</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">瑜伽</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">跑步</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">带爸妈去旅行</a>
                    <a class="s-item" href="javascript:;" @click="clickSearch">骑行前后对比</a>
                </div>
                <div v-if="!show">
                    <div v-if="list.length>0">
                        <div v-for="item of list" :key="item.i" class="search-detail animated slideInUp">
                            <img class="detail-img" :src="`http://127.0.0.1:3300/img/${item.img}`" alt="">
                            <div>
                                <div>{{item.sname}}</div>
                                <div>{{item.sdetail}}</div>
                                <div>{{item.scount}}</div>
                            </div>
                        </div>
                    </div>
                    <div v-else>没用搜索到相关的课程 : ( </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            axmak:'',
            list:[],
            show:true,
        }
    },
    methods: {
        search(){
            if(this.axmak==""){
                return;
            }
            console.log(this.axmak);
            var key=this.axmak;
            var url="http://127.0.0.1:3300/search?key="+key;
            this.axios.get(url).then(result=>{
                console.log(result.data);
                this.list=result.data;
                console.log(this.list)
            })
            this.show=false;
        },
        clickSearch(e){
            console.log(e.target.innerText);
            this.axmak=e.target.innerText;
        },
        backHome(){
            this.$router.push("/home");
        }
    },
    watch: {
        axmak(){
            if(this.axmak==""){
                this.show=true;
            }else{
                this.search()
            }
        }
    },
}
</script>
<style>
    .search .mui-content{
        height:667px;
    }
    .search-img>div:nth-child(1){
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .search-img{
        margin:0rem 1rem 0rem 1rem;
        padding-top:0.8rem;
        position: relative;
    }
    .windows{
        width:1.5rem;
        height:1.5rem;
        position: absolute;
        margin-top:-0.4rem;
        margin-left: -6.3rem;
    }
    .search-img input{
        background: rgb(239,239,239) !important;
        border:0 !important;
        width:70% !important;
        padding-left:35px !important;
        font-size: 14px;
    }
    .search-img>div>a{
        color: rgb(36,199,137);
        font-size:15px;
        margin-top: -1rem;
    }
    .heat{
        padding:0 1rem;
    }
    .heat>div:nth-child(1){
        font-size: 16px;
        color: rgb(51,51,51);
        padding-bottom: 1rem;
    }
    .heat-search{
        display: flex;
        padding-bottom: 0.8rem;
        flex-wrap: wrap;
    }
    .s-item{
        background: rgb(239,239,239);
        padding:5px 15px;
        font-size: 12px;
        border-radius: 30px;
        color:rgb(88,79,96);
        margin-bottom:8px;
        margin-right: 10px;
    }
    .search-detail{
        display: flex;
        padding-bottom:0.5rem;
    }
    .detail-img{
        width:133px;
        height:99px;
    }
    .search-detail>div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 0.6rem;
    }
    .search-detail>div>div:nth-child(1){
        font-size: 1.1rem;
        color: rgb(51,51,51);
        font-weight: bold;
    }
    .search-detail>div>div:nth-child(2){
        color:rgb(153,153,153);
        font-size: 14px;
    }
    .search-detail>div>div:nth-child(3){
        font-size:12px;
        color: rgb(102,102,102);
    }
</style>