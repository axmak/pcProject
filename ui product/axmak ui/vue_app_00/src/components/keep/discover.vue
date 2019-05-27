<template>
    <div class="all-color">
        <div class="mui-content">
            <div class="search">
                <div class="fixed-s">
                    <input type="text" placeholder="大家都在搜索 [做饭小技巧]">
                </div>
            </div>
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                    精选
                </a>
                <a class="mui-control-item mui-active" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                    商城
                </a>
                <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                    饮食
                </a>
                <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                    Keepland
                </a>
            </div>
            <div class="car-windows">
                <mt-swipe :auto="4000" >
                    <mt-swipe-item>
                        <img class="car-img" src="img/微信图片_20190421195055.png">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img class="car-img" src="img/微信图片_20190421195242.png">
                    </mt-swipe-item>            
                </mt-swipe>
                <div class="circle-d">
                    <a class="circle-img">
                           <img src="img/tc_icon_food_library.png" alt="">
                           <p>全部课程</p>
                    </a>
                    <a class="circle-img">
                        <img src="img/tc_icon_food_guide.png" alt="">
                        <p>活动挑战</p>
                    </a>
                    <a class="circle-img">
                        <img src="img/tc_icon_food_classify.png" alt="">
                        <p>keepclass</p>
                    </a>
                </div>
  
            </div>
        </div>
        <div class="activity">
            <div class="title-h">
                <div class="bg-hot">
                    本周<br>
                    热门
                </div>
                <div class="week-hs">
                    一周热门
                </div>
            </div>
            <img class="a-img" src="img/ewf0190422200519.png" alt="">
            <div class="act-t">
                <div class="act-t-1">减掉20斤，对外貌有哪些改变?</div>
                <div class="act-t-2">瘦身的关键在于坚持</div>
            </div>
            <div class="news">
                <img src="img/微信图片_20190422203248.png" alt="">
                <div class="new-t">
                    <div class="nt-1">减脂哪有那么难? 看这里 >></div>
                    <div class="nt-2">减脂哪有那么难?</div>
                    <img src="img/asdsadasd90422204326.png" alt="">
                </div>
            </div>
            <div class="news-2">
                <img src="img/微信图片_20190423181504.png" alt="">
                <div class="new-t">
                    <div class="nt-1">低碳水饮食最常见的5个错...</div>
                    <div class="nt-2">如果,低碳水饮食，生酮饮食你试过.....</div>
                    <img src="img/asdasd0190423184651.png" alt="">
                </div>
            </div>
        </div>
        <div class="activity">
            <div class="title-h">
                <div class="bg-hot">
                    编辑<br>
                    精选
                </div>
                <div class="week-hs">
                    编辑推荐
                </div>
            </div>
            <img class="a-img" src="img/微信图片_20190423185957.png" alt="">
            <div class="act-t">
                <div class="act-t-1">要减肥，这4点你不得不知道 >></div>
                <div class="act-t-2">要减肥想必在日常生活中会避免糖分的摄入,很...</div>
            </div>
            <div class="news">
                <img src="img/微信图片_20190423190257.png" alt="">
                <div class="new-t">
                    <div class="nt-1">1个建议，拯救想瘦却总是想..>></div>
                    <div class="nt-2">我已经吃不下了,但是我还想吃，怎么办?</div>
                    <img src="img/asdsadasd90422204326.png" alt="">
                </div>
            </div>
            <div class="news">
                <img src="img/微信图片_20190423190330.png" alt="">
                <div class="new-t">
                    <div class="nt-1">低碳水饮食最常见的5个错...</div>
                    <div class="nt-2">如果,低碳水饮食，生酮饮食你试过.....</div>
                    <img src="img/asdasd0190423184651.png" alt="">
                </div>
            </div>
            <div class="news-2">
                <img src="img/微信图片_20190423190355.png" alt="">
                <div class="new-t">
                    <div class="nt-1">低碳水饮食最常见的5个错...</div>
                    <div class="nt-2">如果,低碳水饮食，生酮饮食你试过.....</div>
                    <img src="img/asdasd0190423184651.png" alt="">
                </div>
            </div>
        </div>
        <div class="end"></div>
        <tabbar></tabbar>  
    </div>
</template>
<script>
import tabbar from "../tabbar.vue"
export default {
    data() {
        return {
            change:0
        }
    },
    components:{
        tabbar
    },
    created() {
        this.$store.state.num=2;
        // console.log(this.$store.state.num);
        this.change=this.$store.state.num;
        // console.log(this.change)
    },
}
</script>
<style>
    .app-container .mint-swipe{
        height:150px;
    }
    .all-color .all-color{
        background: rgb(249,249,249) !important;
    }
    .all-color .mui-content{
        background: #fff !important;
    }
    .all-color .fixed-s{
        position: fixed;
        height: 56px;
        background: #fff;
        z-index:5;
        width:100%;
        padding:0 0.8rem 0 0.8rem;
    }
    .all-color .car-img{
        width:100%;
    }
    .all-color .fixed-s input{
        width:100% !important;
    }
    .all-color .search{
        margin-top: 0rem !important;
        height:56px;
    }
    .all-color .mui-content input{
        background: rgb(239,239,239) !important;
        border-radius: 5px !important;
        border: none !important;
        margin-bottom: 0rem !important;
        font-size: 0.8rem;
        margin-top:0.4rem;
        padding:0.8rem;
    }
    .all-color .mui-content{
        padding-top:0 !important;
    }
    input::-webkit-input-placeholder{
        color:#bbb;
    }
    .all-color .mui-scroll-wrapper a{
        font-size:1rem !important;
        color:#bbb !important;
    }
    .all-color .mui-scroll-wrapper a.mui-active{
        color:#333 !important;
        border-bottom:0px solid #fff !important;
        font-weight: bolder;
        font-size: 1rem;

    }
    .all-color .mui-scroll-wrapper{
        display: flex !important;
        justify-content: space-around !important;
    }
    .all-color .car-windows{
        margin:0.5rem 0.8rem 1rem 0.8rem;
    }
    .all-color .circle-d{
        display: flex;
        justify-content: space-around;
        margin-top:1rem;
    }
    .all-color .circle-img{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .all-color .circle-img img{
        width:3rem;
        height:3rem;
        margin-bottom: 0.2rem;
    }
    .all-color .activity{
        margin:0rem 0.8rem 1rem 0.8rem;
        background: #fff;
    }
    .all-color .bg-hot{
        background-image: url(../../img/icon_post_recommend.png);
        width:3.5rem;
        height:3.5rem;
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: 1.2rem;
        color:#fff;
        font-size: 0.8rem;
        padding-left:0.5rem;
        padding-top:0.2rem;
    }
    .all-color .week-hs{
        font-size:0.95rem;
        letter-spacing: 0.03rem;
        font-family: 黑体;
        font-weight: bold;
    }
    .all-color .title-h{
        display: flex;
        align-items: center;
    }
    .all-color .a-img{
        width:100%;
        padding:1rem 0.8rem 1rem 0.8rem;
    }
    .all-color .act-t{
        padding:0rem 0.8rem 0rem 0.8rem; 
    }
    .all-color .act-t-1{
        font-size: 1rem;
        color:rgb(51,51,51);
        letter-spacing: 0.08rem;
        font-family: 微软雅黑;
        font-weight: bold;
    }
    .all-color .act-t-2{
        font-size: 0.8rem;
        padding-top:0.3rem;
        color:rgb(102,102,102);
        letter-spacing: 0.1rem;
        padding-bottom:1rem;
    }
    .all-color .news{
        display: flex;
        border-top:1px solid rgba(66,66,66,0.07);
        padding:1rem 1rem 1rem 0.8rem;

    }
    .all-color .news img{
        width:5rem;
        height:5rem;
    }
    .all-color .new-t{
        margin-left:0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .all-color .new-t img{
        width:3rem;
        height:1.3rem;
    }
    .all-color .nt-1{
        font-size: 1rem;
    }
    .all-color .nt-2{
        font-size: 0.7rem;
        color:rgb(102,102,102);
    }
    .all-color .news-2{
        display: flex;
        border-top:1px solid rgba(66,66,66,0.07);
        padding:1rem 1rem 1rem 0.8rem;
    }
    .all-color .news-2 img{
        width:5rem;
        height:5rem;
    }
    .all-color .news-2 .new-t img{
        width:3rem;
        height:1.3rem;
    }
    .end{
        height:1rem;
    }
</style>