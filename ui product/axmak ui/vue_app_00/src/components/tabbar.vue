<template>
    <div class="foot">
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" @click="toHome">
                <span class="mui-icon"><img class="tar-down" :src="change==1?'../img/icon_sports_filled_focus.png':'../img/icon_sports_filled_dark_gray.png'" alt=""></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item mui-active" @click="toDicover">
                <span class="mui-icon"><img class="tar-down" :src="change==2?'../img/icon_follow_filled_focus.png':'../img/icon_follow_filled_normal.png'" alt=""></span>
                <span class="mui-tab-label">发现</span>
            </a>
            <a class="mui-tab-item mui-active" @click="toTraining">
                <span class="mui-icon"><img class="tar-down" :src="change==3?'../img/icon_community_filled_focus.png':'../img/icon_community_filled_dark_gray.png'" alt=""></span>
                <span class="mui-tab-label">运动</span>
            </a>
            <a class="mui-tab-item mui-active" @click="toProfile">
                <span class="mui-icon"><img class="tar-down" :src="change==4?'../img/icon_user_filled_focus.png':'../img/icon_user_filled_normal.png'" alt=""></span>
                <span class="mui-tab-label">我</span>
            </a>
        </nav>
    </div>
</template>
<script>
export default {
    components:{
    },
    data(){
        return{
            icons:[
                {
                    id:1,
                    name:"首页",
                    href:"/home",
                    select:"../img/icon_sports_filled_focus.png",
                    noselect:"../img/icon_sports_filled_dark_gray.png"
                },
                 {
                    id:2,
                    name:"发现",
                    href:"/discover",
                    select:"../img/icon_follow_filled_focus.png",
                    noselect:"../img/icon_follow_filled_normal.png"
                },
                 {
                    id:3,
                    name:"运动",
                    href:"/training",
                    select:"../img/icon_community_filled_focus.png",
                    noselect:"../img/icon_community_filled_dark_gray.png"
                },
                 {
                    id:4,
                    name:"我", 
                    href:"/profile",
                    select:"../img/icon_user_filled_focus.png",
                    noselect:"../img/icon_user_filled_normal.png"
                },
            ], 
            change:""
        }
    },
    methods: {
            toHome(){
                this.$router.push("/home");
            },
            toDicover(){
                this.$router.push("/discover");
            },
            toTraining(){
                this.$router.push("/training");
            },
            toProfile(){
                if(!window.sessionStorage.data){
                    this.$router.push("/login");
                }else{
                    this.$router.push("/profile");
                }
            }
        },
        created(){
            // var nuid=window.sessionStorage.data;
            this.change=this.$store.state.num;
            console.log(this.change)
        }

        
    // }
    // mounted(){
    //     var $ = this;
    //     var bar = mui(".mui-bar");
    //     var imgs=mui("a .tar-down");
    //     imgs[0].src="../img/icon_sports_filled_focus.png";
    //     bar.on("tap","a",function(){
    //         for(var i=0;i<imgs.length;i++){
    //             // console.log(imgs)
    //             imgs[i].src=$.icons[i].noselect;
    //         }
    //         var i=this.dataset.i;
    //         console.log(this.dataset)
    //         var select=$.icons[i].select;
    //         this.querySelector(".tar-down").src = select;
    //     })


        // var btn = document.getElementById("submit");
        // //监听点击事件
        // btn.addEventListener("tap",function () {
        // console.log("tap event trigger");
        // });

        
    // }

    
}
</script>
<style>
    .foot .mui-bar{
        background: #fff !important;
    }
    .foot .mui-bar-nav{
        -webkit-box-shadow: 0 0px 0px #fff !important;
        box-shadow: 0 0px 0px #fff !important;
    }
    .foot .mui-bar{
        -webkit-box-shadow: 0 0 0px #fff !important;
        box-shadow: 0 0 0px #fff !important;
    }
    .foot .mui-bar-tab .mui-tab-item{
        padding:0.5rem 0rem 0rem 0rem;
    }
    .foot .mui-bar-tab .mui-active{
        color:#333 !important;
    }
    .mui-icon img {
        width: 2rem !important;
        height: 2rem !important;
        margin-left: -0.25rem;
    }
</style>