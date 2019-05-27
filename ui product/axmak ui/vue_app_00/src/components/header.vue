<template>
    <div class="cheader">
        <header id="header" class="mui-bar mui-bar-nav">
			<h1 class="mui-title">运动</h1>
            <img class="gift" src="img/tc_icon_gift.png" alt="">
            <img class="plus" src="img/ysf_ic_menu_more_dark.png" alt="">
            <img class="glass" src="img/tc_icon_home_search.png" alt="" @click="toSearch">
		</header>
        <div class="kong"></div>
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        计划
                    </a>
                    <a class="mui-control-item mui-active" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        首页
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        跑步
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        行走
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        健身
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        KIT
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        瑜伽
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        骑行
                    </a>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    mounted() {
        var scroll=mui(".mui-scroll");
        var as=mui(".mui-scroll>a")
        scroll.on("tap","a",function(){
            for(var i=0;i<as.length;i++){
            
            }
        })
    },
    methods: {
        toSearch(){
            this.$router.push('/search')
        }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({ deceleration: 0.0005});
    }
}
</script>
<style>
    .kong{
        height:2.8rem;
    }
    .mui-control-item .mui-active{
        color:#ccc!important;
    }
    .mui-slider-indicator.mui-segmented-control{
        height:38px !important;
    }
</style>