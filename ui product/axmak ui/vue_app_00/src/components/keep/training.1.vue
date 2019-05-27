<template>
    <div class="training">
        <comheader></comheader>
        <div class="mui-content">
            <div class="pic">
                "开始第一次健身吧"
            </div>
            <div>
                <img class="pic-img" src="../../img/微信图片_20190424191142.png" alt="">
            </div>
            <div>
                <div class="add-class">
                    <div>我的健身训练</div>
                    <button>+添加课程</button>
                </div>  
                <div>
                    <ul class="mui-table-view">
                        <div v-for="item of list" class="sp-w" :key="item.i">
                            <div class="sp-class">
                                <div class="sp-t">{{item.cname}}
                                    <img src="../../img/fc3601995e432f4b76c41710655cef6.png" alt="">
                                </div>
                                <div class="sp-m">{{item.ctime}}</div>
                            </div>
                            <div class="sp-now">{{item.cdetail}}</div>
                        </div>
                        <!-- <div class="sp-w">
                            <div class="sp-class">
                                <div class="sp-t">下肢综合热身
                                    <img src="../../img/fc3601995e432f4b76c41710655cef6.png" alt="">
                                </div>
                                <div class="sp-m">12分钟·1Km</div>
                            </div>
                            <div class="sp-now">还没进行过训练 7人正在进行</div>
                        </div> -->
                        <div v-if="showMore" class="seemore" @click="loadmore">
                            <img src="../../img/icon_down_arrow.png" alt="">
                            <div>展开全部</div> 
                        </div>
                    </ul>
                </div>
                <div class="item">
                    <div>
                        <div class="item-t">适合你的健身小目标</div>
                        <div class="it-pic">
                            <img src="../../img/微信图片_20190425191314.png" alt="">
                            <div class="it-t">
                                <div class="it-t1">体验1次太极</div>
                                <div class="it-t2">张弛之间 体验运动快乐</div>
                            </div>
                        </div>
                        <div class="it-pic">
                            <img src="../../img/微信图片_20190423190330.png" alt="">
                            <div class="it-t">
                                <div class="it-t1">体验1次太极</div>
                                <div class="it-t2">张弛之间 体验运动快乐</div>
                            </div>
                        </div>
                        <div class="it-pic">
                            <img src="../../img/qdwqwd0422205554.png" alt="">
                            <div class="it-t">
                                <div class="it-t1">体验1次太极</div>
                                <div class="it-t2">张弛之间 体验运动快乐</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-w">
                        <div class="item-t">为你推荐的课程</div>
                        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					    <div class="mui-scroll">
						    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							    <img src="../../img/微信图片_20190425193633.png" alt="">
                                <div>
                                    <div class="sale-c1">最适合男生的课程</div>
                                    <div class="sale-c2">能让你变帅的课程都在这</div>
                                </div>
						    </a>
                            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							<img src="../../img/微信图片_20190425201106.png" alt="">
                            <div>
                                <div class="sale-c1">最适合男生的课程</div>
                                <div class="sale-c2">能让你变帅的课程都在这</div>
                            </div>
						    </a>
                            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                                <img src="../../img/微信图片_20190425201037.png" alt="">
                                <div>
                                    <div class="sale-c1">新手入门</div>
                                    <div class="sale-c2">快速进入状态</div>
                                </div>
                            </a>
                            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                                <img src="../../img/微信图片_20190425201106.png" alt="">
                                <div>
                                    <div class="sale-c1">最适合男生的课程</div>
                                    <div class="sale-c2">能让你变帅的课程都在这</div>
                                </div>
                            </a>
                            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                                <img src="../../img/微信图片_20190425201128.png" alt="">
                                <div>
                                    <div class="sale-c1">新手入门</div>
                                    <div class="sale-c2">快速进入状态</div>
                                </div>
                            </a>
					    </div>
				    </div> 
			    </div>
                <div class="bg-body">
                    <div class="bg-w">
                        <div class="item-t">动作库</div>
                        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					    <div class="mui-scroll">
						    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							    <img src="../../img/微信图片_20190426191857.png" alt="">
						    </a>
                            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							<img src="../../img/微信图片_20190426191838.png" alt="">
						    </a>
                            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							    <img src="../../img/微信图片_20190426191857.png" alt="">
						    </a>
                            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							<img src="../../img/微信图片_20190426191838.png" alt="">
						    </a><a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							    <img src="../../img/微信图片_20190426191857.png" alt="">
						    </a>
                            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							<img src="../../img/微信图片_20190426191838.png" alt="">
						    </a>
					    </div>
				    </div> 
                    <div class="loadMore"><a href="">查看更多</a></div>
			    </div>
                <div class="item">
                    <div>
                        <div class="item-t">适合你的健身小目标</div>
                        <div class="it-pic">
                            <img src="../../img/微信图片_20190425191314.png" alt="">
                            <div class="it-t">
                                <div class="it-t1">体验1次太极</div>
                                <div class="it-t2">张弛之间 体验运动快乐</div>
                            </div>
                        </div>
                        <div class="it-pic">
                            <img src="../../img/微信图片_20190423190330.png" alt="">
                            <div class="it-t">
                                <div class="it-t1">体验1次太极</div>
                                <div class="it-t2">张弛之间 体验运动快乐</div>
                            </div>
                        </div>
                        <div class="it-pic">
                            <img src="../../img/qdwqwd0422205554.png" alt="">
                            <div class="it-t">
                                <div class="it-t1">体验1次太极</div>
                                <div class="it-t2">张弛之间 体验运动快乐</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="end">没有更多内容了,keep一下吧！</div>
        </div>
        <tabbar></tabbar>  
    </div>
</template>
<script>
import tabbar from "../tabbar"
import comheader from "../header.vue"
export default {
    components:{
        comheader,
        tabbar
    },
    data() {
        return {
            list:[],
            pno:1,
            showMore:true,
            change:0
        }
    },
    created() {
        this.$store.state.num=3;
        // console.log(this.$store.state.num);
        this.loadmore();
        this.change=this.$store.state.num;
        // console.log(this.change)
    },
    methods: {
        loadmore(){
            var url="http://127.0.0.1:3300/class?pno="+this.pno;
            this.pno++;
            this.axios.get(url).then(result=>{
                if(result.data.length>0){
                    var row=this.list.concat(result.data);
                    this.list=row;
                    console.log(result.data.length);
                }
                if(this.pno==5){
                    this.showMore=false;
                }
            })
        }
    },
}
</script>
<style>
    .training .mui-content{
        background: rgb(250,250,250) !important;
    }
    .training .pic{
        text-align: center;
    }
    .training .pic{
        padding-top:0.2rem;
        color:rgb(153,153,153);
        font-size:0.7rem;
        letter-spacing: 0.08rem;
        background: #fff;
    }
    .training .pic-img{
        width:100%;
        height:10rem;
    }
    .training .add-class{
        padding:1rem 0.8rem 0.5rem 0.8rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:0.5rem;
    }
    .training .add-class div{
        font-size: 0.9rem;
    }
    .training .add-class button{
        background: rgb(36,199,137);
        color:#fff;
        border: none;
        border-radius: 30px;
        font-size: 0.7rem;
        width:6rem;
        letter-spacing: 0.1rem;
        
    }
    .training .sp-class{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:1.5rem 0.8rem 0.3rem 0.8rem;
        border-top:1px solid  rgba(66,66,66,0.07);
        background: #fff;
    }
    .training .sp-class div>img{
        width:2.6rem;
        height:1.1rem;
        margin-left: 0.2rem;
    }
    .training .sp-t{
        display: flex;
        align-items: center;
        font-size: 1rem;
        color:rgb(51,51,51);
        font-weight: bold;
    }
    .training .sp-m{
        font-size:0.8rem;
        color:rgb(88,79,96);
    }
    .training .sp-w{
        background: #fff;
    }
    .training .sp-now{
        color:rgb(153,153,153);
        padding-left: 0.8rem;
        font-size: 0.7rem;
        padding-bottom: 1rem;
    }
    .training .seemore{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top:0.5rem;
        background: #fff;
        font-size: 0.9rem;
        color:rgb(88,79,96);
        padding-bottom: 1rem;
    }
    .training .seemore img{
        width:1.5rem;
        height:1rem;
        margin-right: 0.5rem;
    }
    .training .item{
        margin:0.8rem 0rem 0.5rem 0rem;
        background: #fff;
    }
    .training .item-t{
        padding:1rem 0 1rem 1rem;;
        font-size: 0.95rem;
    }
    .training .it-pic{
        padding:0.8rem 0 0.8rem 1rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(66,66,66,0.07);
    }
    .training .it-pic img{
        width:5rem;
        height:5rem;
    }
    .training .it-t{
        margin-left:1rem;
    }
    .training .it-t1{
        font-size: 1rem;
        font-weight: bold;
        position: relative;
        top:-0.2rem;
    }
    .training .it-t2{
        font-size: 0.8rem;
        color: rgb(153,153,153);
        position: relative;
        top:0.1rem;
    }
    .training .bg-w{
        background: #fff;
        padding-right: 1rem;
    }
    .training .mui-control-item img{
        width:18rem;
    }
    .bg-w .mui-segmented-control.mui-segmented-control-inverted{
        height:200px !important;
    }
    .training .bg-w a.mui-control-item{
        padding-right: 0 !important;
        padding-left: 0.7rem !important;
    }
     .training .bg-w .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
        border-bottom: 0 !important;
    }
    .training .sale-c1{
        position: relative;
        top:-0.7rem;
        color:#000;
        font-size: 1rem;
    }
    .training .sale-c2{
        position: relative;
        top:-1.7rem;
        font-size: 0.8rem;
        letter-spacing: 0.05rem;
        color:rgb(185,185,185)
    }
    a.mui-navigate-right{
        padding:0 !important;
    }
    .mui-table-view:before{
        height:0px !important;
    }
    .bg-body{
        margin-top: 1rem;
    }
    .bg-body .bg-w .mui-segmented-control.mui-segmented-control-inverted{
        height:120px !important;
    }
    .bg-body .bg-w .mui-control-item img{
        width:6rem;
        height:6rem;
    }
    .loadMore{
        text-align: center;
        font-size: 1rem;
        padding-bottom:1rem;
    }
    .loadMore a{
        color: rgb(88,79,96);
    }
    .training .end{
       text-align: center;
       font-size: 0.9rem;
       height:4.5rem;
       line-height: 3.25rem;
       color:#ccc;
    }
</style>