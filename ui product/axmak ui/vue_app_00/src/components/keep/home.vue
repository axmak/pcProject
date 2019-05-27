<template>
    <div class="app-home">
        <comheader></comheader>
        <div class="mui-content">
            <div class="search">
                <img :src="`http://127.0.0.1:3300/img/${ava}`" alt="">
                <div class="square">
                    <div class="detail">
                        定个目标，开始你的健身之路!
                    </div> 
                    <img src="img/111.png" alt="">
                </div>
            </div>
            <div class="sport-details">
                <div class="sport-details1">
                    <img src="img/ic_data_auto_record.png" alt="">
                    有自动生成的记录 >
                </div>
                <div class="sport-details2">
                    <div class="sport-details2-l">
                        <h1>0</h1>
                        <p>分钟</p>
                    </div>
                    <div class="sport-details2-r">
                        今日运动
                        <p>-</p>
                        分钟
                    </div>
                </div>
            </div>
            <div class="lesson">
                <div class="lesson-1">
                    <div>我参加的课程</div>
                    <div>
                        <a href="#">发现课程</a>
                    </div>
                </div>
                <div class="lesson-2">
                    <div class="lesson-d">
                        <div class="lesson-d-l">小腿按摩
                            <img class="onsale" src="img/fc3601995e432f4b76c41710655cef6.png" alt="">
                        </div>
                        <div class="lesson-d-r">15分钟 · K1</div>
                    </div>
                    <div class="lesson-d-d">
                        还未进行过训练 21人正在训练
                        <div class="under-line"></div>
                    </div>
                </div><div class="lesson-2">
                    <div class="lesson-d">
                        <div class="lesson-d-l">下肢综合热身
                            <img class="onsale" src="img/fc3601995e432f4b76c41710655cef6.png" alt="">
                        </div>
                        <div class="lesson-d-r">15分钟 · K1</div>
                    </div>
                    <div class="lesson-d-d">
                        还未进行过训练 21人正在训练
                        <div class="under-line"></div>
                    </div>
                </div><div class="lesson-2">
                    <div class="lesson-d">
                        <div class="lesson-d-l">跑前热身
                            <img class="onsale" src="img/fc3601995e432f4b76c41710655cef6.png" alt="">
                        </div>
                        <div class="lesson-d-r">15分钟 · K1</div>
                    </div>
                    <div class="lesson-d-d">
                        还未进行过训练 21人正在训练
                        <div class="under-line"></div>
                    </div>
                </div><div class="lesson-2">
                    <div class="lesson-d">
                        <div class="lesson-d-l">瘦腿训练
                            <img class="onsale" src="img/fc3601995e432f4b76c41710655cef6.png" alt="">
                        </div>
                        <div class="lesson-d-r">15分钟 · K1</div>
                    </div>
                    <div class="lesson-d-d">
                        还未进行过训练 21人正在训练
                    </div>
                    <div class="seemore">
                        <a href="#">查看全部</a>
                    </div>
                </div>
            </div>
            <div class="car">
                <div class="car-l">精选训练营</div>
                <div class="car-r"><a href=""><img src="img/icon_right_lined_gray.png" alt=""></a></div>
            </div>
            <div class="car-window">
                <div class="mui-slider">
                    <div class="mui-slider-group mui-slider-loop">
                        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一个图文表格) -->
                        <div class="mui-slider-item mui-slider-item-duplicate">
                            <ul class="mui-table-view mui-grid-view">
                                <li class="mui-table-view-cell li1 mui-media mui-col-xs-6"><a href="#"><img class="mui-media-object car-1" src="img/微信图片_20190421145210.png"></a></li>
                            </ul>
                            <div class="car-text">跟着练 跟着瘦</div>
                        </div>
                        <div class="mui-slider-item mui-slider-item-duplicate">
                            <ul class="mui-table-view mui-grid-view">
                                <li class="mui-table-view-cell li1 mui-media mui-col-xs-6"><a href="#"><img class="mui-media-object car-1" src="img/asd_20190421150100.png"></a></li>
                            </ul>
                            <div class="car-text">简单运动 快乐生活</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="car">
                <div class="car-l">更多推荐</div>
            </div>
            <div class="car-window">
                <a href="#"><img class="mui-media-object car-1" src="img/sdfwf_20190421152641.png"></a>
                <div class="car-text"><a href="">瘦不下来腿? 看这套就够了</a></div>
            </div>
            <div class="car">
                <div class="car-l">智能训练计划</div>
            </div>
            <div class="car-window-last">
                <img class="end-img" src="img/fewfwe_20190421154018.png" alt="">
                <div class="end-t-1">
                    <div>为你定制的智能计划</div>
                    <img src="img/dwqdwd_20190421155208.png" alt="">
                </div>
                <div class="end-t-2">想要让你的身材更好吗? keep智能计划已经改变了2000多万人的身材，希望也能改变你的</div>
                <div class="end-a">
                    <a href="">获取智能训练计划</a>
                </div>
            </div>
		</div>
        <tabbar></tabbar>
    </div>
</template>
<script>
import tabbar from '../tabbar'
import comheader from "../header"
export default {
    data() {
        return {
            change:0,
            ava:""
        }
    },
    components:{
        comheader,
        tabbar
    },
    created() {
        var nuid=window.sessionStorage.data;
        console.log("nuid="+nuid)
        console.log("vuex="+this.$store.state.uid)
        this.$store.state.num=1;
        // console.log(this.$store.state.num);
        this.change=this.$store.state.num;
        // console.log(this.change)
        var uid=this.$store.state.uid;
        // console.log(uid);
        if(nuid){
            var url="http://127.0.0.1:3300/getUserDetail";
            this.axios.get(url).then(result=>{
                // console.log(result.data.result[0]);
                this.ava=result.data.result[0].ava;
            })
        }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({ deceleration: 0.0005});
    }
}
</script>
<style>
    .mui-scroll-wrapper{
        margin-top: 3rrm !important;
    }
    .app-home .mui-slider-indicator.mui-segmented-control{
        top:-0.2rem;
    }
    .mui-bar-nav{
        -webkit-box-shadow: 0 1px 6px #fff !important;
        box-shadow: 0 1px 6px #fff !important;
        background: #fff !important;
    }
    .app-home .mui-title{
        z-index: -2 !important;
    }
    .gift{
        float: left;
        width:1.8rem;
        height:1.8rem;
        margin-top:0.5rem;
    }
    .glass{
        width:2rem;
        height:2rem;
        margin-right: 0.5rem;
        float: right;
        margin-top:0.2rem;
        z-index: 5;
    }
    .plus{
        width:1.5rem;
        height:1.5rem;
        margin-top:0.5rem;
        float: right;
    }
    
    .mui-scroll{
        color:#333;
        background: #fff !important;
    }
    .mui-scroll .mui-active{
        color:#ccc!important;
    }
    .app-home .search{
        display: flex;
        padding-top: 1rem;
        align-items: center;
    }
    .app-home .search img{
        width:3rem;
        height:3rem;
        border-radius: 50%;
        margin-left: 1rem;
    }
    .app-home .search div.square{
        border: 0.15rem dashed #ccc !important;
        border-radius: 30px !important;
        margin:0rem 1rem 0rem 1rem !important;
        background: transparent !important;
        font-size:1rem;
        color:#ccc;
        width:100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .app-home .search div .detail{
        margin: 0px;
        text-align: center;
        width:85%;
        font-size: 14px;
    }
    .app-home .mui-content {
        background-color: rgb(249,249,249) !important;
        position: relative;
        top:-0.1rem;
    }
    
    .app-home div.square img{
        margin: 0;
    }
    .app-home .sport-details{
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 0.5rem;
        font-size: 0.8rem;
        margin:1.5rem 1rem 0rem 1rem;
        padding-top:1rem;
        color:#333;
    }
    .app-home .sport-details1{
        padding-left:1rem;
        color:rgb(94,94,94);
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        }
    .app-home .sport-details1 img{
        width:1.4rem;
        height:1.2rem;
        padding-right:0.2rem;
    }
    .app-home .sport-details2{
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        margin-top:0.6rem;
        padding:0rem 1rem 0.8rem 1rem;
        align-items: flex-end;
    }
    .app-home .sport-details2-l{
        color:rgb(79,79,79);
        display: flex;
        align-items: flex-end;
        font-weight: bolder;
    }
    .app-home .sport-details2-l h1{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: lighter;
        font-size: 3rem;
    }
    .app-home .sport-details2-l p{
        color:rgb(79,79,79);
        font-size: 1rem;
        margin-left: 0.3rem;
        letter-spacing: 1px;
    }
    .app-home .sport-details2-r{
        margin-bottom: 0.5rem;
        color:gray;
        opacity: 0.8;
        display: flex;
        align-items: flex-end;
        font-size:1rem;
        font-family: 方正黑体;
        letter-spacing: 1px;
    }
    .app-home .sport-details2-r p{
        margin-bottom: 0rem;
        color:rgb(78,161,133);
        margin:0 0.2rem 0 0.2rem;
    }
    .app-home .lesson{
        margin:0.8rem 1rem 0rem 1rem;
        background: #fff;
    }
    .app-home .lesson-1{
        display: flex;
        justify-content: space-between;
        padding-left: 0.5rem;
        height:3rem;
        align-items: center;
        padding-top:0.8rem;
    }
    .app-home .lesson-1 div{
        font-size:0.9rem;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        letter-spacing: 0.7px;
    }
    .app-home .lesson-1 a{
        color:#fff;
        background: rgb(37,197,137);
        font-size: 0.9rem;
        padding:0.5rem 1rem 0.5rem 1rem;
        border-radius: 30px;
    }
    .app-home .lesson-2{
        font-size: 0.9rem;
        margin-top: 2rem;
    }
    .app-home .lesson-d{
        display: flex;
        padding-left:1rem;
        padding-right:1rem;
        justify-content: space-between;
    }
    .app-home .lesson-d-l{
        font-size:1.1rem;
        font-weight: bold;
        display: flex;
        align-content: center;
    }
    .app-home .lesson-d-r{
        color:rgb(107,106,112);
    }
    .app-home .lesson-d-d{
        color:rgb(157,157,157);
        margin-top: 0.5rem;
        font-size: 0.6rem;
        padding:0rem 1rem 0rem 1rem;
    }
    .app-home .under-line{
        width:100%;
        height:1rem;
        border-bottom: 1px solid rgba(66,66,66,0.07);
    }
    .app-home .mui-scroll{
        background: #fff;
    }
    .app-home .onsale{
        width:2.4rem !important;
        height:1.2rem !important;
        padding-left: 0.2rem;
    }
    .app-home .seemore{
        padding-top:2.3rem;
        margin-bottom:1rem;
        text-align: center;
        padding-bottom: 1rem;
    }
    .app-home .seemore a{
        color:#565656;
    }
    .app-home ul.mui-table-view{
        padding:0rem 0rem 0rem 0rem !important;
    }
    .app-home .car{
        display: flex;
        justify-content: space-between;
        background: #fff;
        margin:0rem 0.8rem 0rem 0.8rem;
        align-content: center;
    }
    .app-home .car .car-l{
        padding:1rem 0rem 1rem 1rem;
        font-size:0.8rem;
    }
    .app-home .car .car-r{
         padding:1rem 1rem 1rem 0rem;
    }
    .app-home .car .car-r img{
        width:1.5rem !important;
        height:1.5rem !important;
    }
    .app-home .car-window{
        margin:0rem 0.8rem 1rem 0.8rem !important;
        padding-bottom:1rem;
        background: #fff;
    }
    .app-home .mui-grid-view .li1{
        width:100%;
        height:15rem;
    }
    .app-home .mui-grid-view .li2{
        width:100%;
    }
    .app-home .mui-grid-view li>a{
        padding:0 0 0 0 !important;
    }
    .app-home .car-1{
        width:100% !important;
        height:100% !important;
        padding:0 1rem 0 1rem;
    }
    .app-home .car-text{
        padding:1rem 0rem 0rem 1rem;
        font-size: 0.8rem;
        color:rgb(144,144,144);
        letter-spacing: 0.1rem;
    }
    .app-home .car-text a{
        color:rgb(144,144,144);
    }
    .app-home .car-window-last{
        margin:0rem 0.8rem 1rem 0.8rem !important;
        padding-bottom:3rem;
        background: #fff;
    }
    .app-home .end-img{
        width:100% !important;
        height:165px !important;
        padding: 0rem 0.8rem 1rem 0.8rem;
    }
    .app-home .end-t-1{
        padding:0rem 0.8rem 0.5rem 0.8rem;
        font-size:1rem;
        display: flex;
        align-items: center;
    }
    .app-home .end-t-1>img{
        width:3.5rem !important;
        height:1.1rem !important;
        padding-left:0.3rem;
    }
    .app-home .end-t-2{
        padding:0rem 0.8rem 0.5rem 0.8rem;
        font-size:0.8rem;
        color:rgb(192,192,192);
    }
    .app-home .end-a{
        display: flex;
        justify-content: center;
    }
    .app-home .end-a a{
        background: rgb(36,199,137) !important;
        font-size:1rem;
        letter-spacing:0.1rem;
        color: #fff;
        display: block;
        width:16rem;
        height:3rem;
        line-height: 3rem;
        text-align: center;
        border-radius: 30px;
    }
</style>