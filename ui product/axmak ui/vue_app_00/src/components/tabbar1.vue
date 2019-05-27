<template>
    <div class="foot">
        <nav class="mui-bar mui-bar-tab">
            <a v-for="(item,i) of icons"  class="mui-tab-item mui-active" :key="i" :data-i="i" :href="item.href">
                <span class="mui-icon"><img class="tar-down" :src=item.noselect alt=""></span>
                <span class="mui-tab-label" v-text="item.name"></span>
            </a>
        </nav>
        <div class="mui-content">
			<div id="home" class="mui-control-content mui-active">
				<home></home>
			</div>
			<div id="discover"  class="mui-control-content">
				<discover></discover>
			</div>
			<div id="training" class="mui-control-content">
				<training></training>
			</div>
			<div id="profile" class="mui-control-content">
				<profile></profile>
			</div>
		</div>
    </div>
</template>
<script>
import home from "./keep/home.vue";
import discover from "./keep/discover.vue";
import training from "./keep/training.1.vue";
import profile from "./keep/profile";
export default {
    components:{
        home,
        discover,
        training,
        profile
    },
    data(){
        return{
            icons:[
                {
                    id:0,
                    name:"运动",
                    href:"#home",
                    select:"../img/icon_sports_filled_focus.png",
                    noselect:"../img/icon_sports_filled_dark_gray.png"
                },
                 {
                    id:2,
                    name:"发现",
                    href:"#discover",
                    select:"../img/icon_follow_filled_focus.png",
                    noselect:"../img/icon_follow_filled_normal.png"
                },
                 {
                    id:3,
                    name:"社区",
                    href:"#training",
                    select:"../img/icon_community_filled_focus.png",
                    noselect:"../img/icon_community_filled_dark_gray.png"
                },
                 {
                    id:4,
                    name:"我", 
                    href:"#profile",
                    select:"../img/icon_user_filled_focus.png",
                    noselect:"../img/icon_user_filled_normal.png"
                },
            ], 
        }
    },
    methods: {
        toNextPath(e){
           var ni=e.target.dataset.i;
        //    console.log(ni)
        var newhref=this.icons[ni].href
           this.$router.push(newhref)
        }
    },
    mounted(){
        var $ = this;
        var bar = mui(".mui-bar");
        var imgs=mui("a .tar-down");
        imgs[0].src="../img/icon_sports_filled_focus.png";
        bar.on("tap","a",function(){
            for(var i=0;i<imgs.length;i++){
                // console.log(imgs)
                imgs[i].src=$.icons[i].noselect;
            }
            var i=this.dataset.i;
            var select=$.icons[i].select;
            this.querySelector(".tar-down").src = select;
        })
    }
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