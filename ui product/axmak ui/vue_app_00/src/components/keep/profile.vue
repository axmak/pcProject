<template>
    <div class="profile">
        <div class="bg-p">
            <div class="head">
                <img class="h-img" src="../../img/icon_setting_filled.png" alt="">
                <div>
                    <img class="h-img" src="../../img/icon_scan_lined.png" alt="">
                    <img class="h-img" src="../../img/su_ic_video_comment.png" alt="">
                </div>
            </div>
            <div>
                <div class="self-d">
                    <img  class="ava" :src="`http://127.0.0.1:3300/img/${ava}`" alt="">
                    <div>
                        <p>阳光的{{uname}}</p>
                        <div>我的徽章</div>
                    </div>
                    <div>
                        <img class="jiantou" src="../../img/fd_icon_arrow_white.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-content">
            <div class="golden">
                <div>
                    <div class="g-detail">
                        <div>
                            <img src="../../img/fd_mine_vip.png" alt="">
                            <div>每月立减10元</div>
                        </div>
                        <a href="">开通会员</a>
                    </div>
                </div>
            </div>
            <div class="kg">
                <div class="kg1">
                    KG.0
                </div>
                <div>
                    <div>什么是KG等级?</div>
                    <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
            </div>
            <div class="link" v-if="showLink">
                <div class="link1">
                    <a href="javascript:;" @click="close">&times;</a>
                    <div>为确保账号安全,请绑定手机号</div>
                </div>
                <a href="">绑定</a>
            </div>
            <div class="my-data">
                <div>
                    <div class="m-d1">我的数据</div>
                    <div class="m-d2">总运动(分钟)</div>
                    <h1>{{step}}</h1>
                </div>
                <div>
                    <div class="data2">
                        <img class="jiantou2" src="../../img/ic_data_auto_record.png" alt="">
                        <div>有自动生成的记录</div>
                        <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                    </div>
                    <div class="grade">
                        <div>本周排名</div>
                        <div class="g1">第---名</div>
                    </div>
                    <img class="s-ava" :src="`http://127.0.0.1:3300/img/${ava}`" alt="">
                </div>
            </div>
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <div class="b-dt">
                        <div>今日运动</div>
                        <div class="sp-d">
                            <span>0</span>
                            <span>分钟</span>
                        </div>
                    </div>
                    <div class="b-dt">
                        <div>本周运动</div>
                        <div class="sp-d">
                            <span>0</span>
                            <span>分钟</span>
                        </div>
                    </div>
                    <div class="b-dt">
                        <div>连续运动</div>
                        <div class="sp-d">
                            <span>0</span>
                            <span>分钟</span>
                        </div>
                    </div>
                    <div class="b-dt">
                        <div>今日步数</div>
                        <div class="sp-d">
                            <span>16663</span>
                        </div>
                    </div>
                    <div class="b-dt">
                        <div>运动榜排名</div>
                        <div class="sp-d">
                            <span>1</span>
                            <span>名</span>
                        </div>
                    </div>
                </div>
			</div>
            <div class="moreSet">
                <div class="mpre-d">
                   <div>组队赢大礼</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
                <div class="mpre-d">
                   <div>我的课程</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
                <div class="mpre-d">
                   <div>我的活动</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
                <div class="mpre-d">
                   <div>我的卡路里币</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
                <div class="mpre-d">
                   <div>我的Keepland</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
            </div>
            <div class="moreSet top-1">
                <div class="mpre-d">
                   <div>我的组队</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
                <div class="mpre-d">
                   <div>我的运动录像</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
                <div class="mpre-d">
                   <div>我的智能设备</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
            </div>
            <div class="moreSet top-1">
                <div class="mpre-d">
                   <div>我的钱包</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
                <div class="mpre-d">
                   <div>我的订单</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
                <div class="mpre-d" @click="logout">
                   <div>退出登录</div>
                   <img class="jiantou2" src="../../img/icon_right_lined_gray.png" alt="">
                </div>
            </div>
        </div>
        <div class="end"></div>
        <tabbar></tabbar>
    </div>
</template>
<script>
import tabbar from '../tabbar'
export default {
    data() {
        return {
            change:0,
            ava:"",
            uname:"",
            step:0,
            showLink:true
        }
    },
    components:{
        tabbar
    },
    created() {
        this.$store.state.num=4;
        // console.log(this.$store.state.num);
        this.change=this.$store.state.num;
        // console.log(this.change)
        var url="http://127.0.0.1:3300/getUserDetail";
        this.axios.get(url).then(result=>{
            console.log(result.data.result[0]);
            this.ava=result.data.result[0].ava;
            this.uname=result.data.result[0].uname;
            this.step=result.data.result[0].step;
        })
    },
    methods: {
        close(){
            this.showLink=false;
        },
        logout(){
            // this.$store.state.uid="";
            // this.$store.state.ava="";
            // this.$store.state.islogin=false;
            // console.log(this.$store.state.islogin);
            // this.$router.push("/login");
            sessionStorage.removeItem("data");
            console.log(window.sessionStorage.data);
            this.$router.push("/login");
        }
    },
}
</script>
<style>
    .mui-content{
        background: rgb(248,248,248) !important;
    }
    .bg-p{
        width:100%;
        height:210px;
        background: rgba(87,77,95,1);
    }
    .head{
        display: flex;
        justify-content: space-between;
        padding:0.8rem 1.3rem 0rem 1.3rem;
    }
    .h-img{
        width:1.7rem;
        height:1.7rem;
    }
    .head>div>img:nth-child(1){
        margin-right: 0.5rem;
    }
    div.self-d{
        padding:2rem 1.3rem 0rem 1.3rem;
        display: flex;
        align-items: center;
    }
    .self-d>.ava{
        width:4.8rem;
        height:4.8rem;
        border-radius: 50%;
        border: 5px solid #fff;
    }
    .self-d>div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding:0.4rem 0 0.4rem 0;
    }
    .self-d>div>p{
        color:#fff;
        font-size: 1.2rem;
        margin-bottom: 0rem;
        width:200px;
    }
    .self-d>div>div{
        width:100px;
        height:30px;
        background-image: url("../../img/fd_icon_grade.9.png");
        background-size: cover;
        color:#fff;
        font-size: 10px;
        padding-left: 36px;
        padding-top:8px;
        letter-spacing: 0.05rem;
        margin-top: 10px;
    }
    .jiantou{
        width:20px;
        height:20px;
        margin-left:45px;
    }
    .jiantou2{
        width:15px;
        height:15px;
        margin-top:3px;
    }
    .golden{
        width:100%;
        height:4rem;
        background: #fff;
    }
    .golden>div{
        width: 95%;
        height:4rem;
        background-image: url(../../img/fd_mine_vip_bg.png);
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        margin-top: -1rem;
        margin-left:2.5%
    }
    .g-detail{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top:7px;
    }
    .g-detail a{
        padding-right: 10px;
        font-size: 13px;
        padding: 5px 18px 5px 18px;
        background: rgb(51,51,51);
        color: rgb(238,202,137);
        border-radius: 30px;
        margin-right: 10px;
        margin-top:5px;
    }
    .golden{
        position: relative;
    }
    .g-detail>div{
        display: flex;
        padding-top:10px;
    }
    .golden>div img{
        width:30px;
        height:30px;
        margin: -4px 0 0 15px;
    }
    .g-detail>div>div{
        font-size: 15px;
        letter-spacing: 0.1rem;
        margin-left: 5px;
        color:rgb(51,51,51)
    }
    .kg{
        display: flex;
        justify-content: space-between;
        margin:0rem 0rem 0rem 0rem;
        background: #fff;
        padding:0rem 1rem 1rem 1rem;
    }
    .kg div:nth-child(2){
        display: flex;
    }
    .kg>.kg1{
        color:rgb(88,76,96);
        font-size: 1.5rem;
        font-weight: bolder;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }
    .kg div:nth-child(2)>div{
        color:rgb(102,102,102);
        font-size: 15px;
        letter-spacing: 0.1rem;
    }
    .mui-content{
        background: #fff;
    }
    .link{
        background: #fff;
        padding:1rem 1rem 1rem 1rem;
        border-top:1px solid rgb(239,239,239);
        border-bottom:1px solid rgb(239,239,239);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .link1{
        display: flex;
    }
    .link1>a{
       color:rgb(102,102,102); 
    }
    .link1>div{
        font-size: 13px;
        margin-left:10px;
        letter-spacing: 0.05rem;
        color:rgb(88,79,96);
    }
    .link>a{
        color:rgb(36,199,137);
        font-size: 13px;
        padding:4px 1.8rem;
        border: 1px solid rgb(36,199,137);
        border-radius: 30px;
    }
    .my-data{
        background: #fff;
        padding:0.5rem 1rem;
        display: flex;
        justify-content: space-between;
    }
    .data2{
        display: flex;
    }
    .data2>div{
        margin:0 10px;
        font-size: 13px;
        color: rgb(102,102,102);;
    }
    .my-data h1{
        color: rgb(88,79,96);
        font-family:fantasy;
        font-size: 2.8rem;
        font-weight: lighter;
    }
    .m-d1{
        color: rgb(51,51,51);
        margin-bottom: 0.8rem;
    }
    .m-d2{
        color:rgb(102,102,102);
        margin-bottom: 0.8rem;
        font-size: 13px;
    }
    .grade{
        display: flex;
        margin-top: 1rem;
        color:rgb(102,102,102);
        font-size: 13px;
    }
    .g1{
        margin-left: 20px;
        color: rgb(181,181,181);
    }
    .s-ava{
        margin-top:1rem;
        width:2.5rem;
        height:2.5rem;
        border-radius: 50%;
        border: 3px solid rgb(36,199,137);
    }
    .profile .mui-slider-indicator{
        height:120px !important;
        background: #fff;
    }
    .profile .mui-scroll{
        padding:0.5rem 0rem 0.5rem 1rem;
        display: flex;
        height:0rem !important;
        width:375px !important;
    }
    .sp-d{
        display: flex;
        margin-top:30px;
    }
    .profile .b-dt{ 
        height:100px;
        padding:1rem 2.5rem 1rem 1rem;
        margin-right:0.5rem;
        border-radius: 10px;
        background: #fff;
    }
    .profile .mui-slider-indicator{
        background: linear-gradient(to bottom, #fff,  #fff, rgb(249,249,249)) !important;
    }
    .b-dt>div:nth-child(1){
        font-size: 14px;
        color:rgb(56,56,56);
        font-weight: bold;
    }
    .sp-d>span:nth-child(1){
        font-size: 2rem;
        font-weight: lighter;
        font-family: fantasy;
        color: rgb(88,79,96);
    }
    .sp-d>span:nth-child(2){
        color: rgb(107,107,107);
        font-size: 14px;
        margin:5px 0 0 5px;
    }
    .moreSet{
        background: #fff;
    }
    .moreSet div{
        color:rgb(51,51,51);
        padding:0.5rem 1rem 0.5rem 0.5rem;
        font-size: 15px;
    }
    .mpre-d{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0;
    }
    .top-1{
        margin-top:0.8rem;
    }
    .end{
       text-align: center;
       font-size: 0.9rem;
       height:4.5rem;
    }
</style>