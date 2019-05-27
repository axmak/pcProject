<template>
	<div>
			<ul class="mui-table-view app-newslist">
				<li v-for="item of list" class="mui-table-view-cell mui-media" :key="item.i">
					<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" :src="'http://127.0.0.1:3000/img/'+item.img_url">
						<div class="mui-media-body">
								{{item.title}}
							<p class='mui-ellipsis'>
								<span>{{item.ctime | datetimeFilter}}</span>
								<span>点击 {{item.point}} 次</span>
								</p>
						</div>
					</a>
				</li>
			</ul>
			<mt-button @click="loadmore">加载更多</mt-button>
	</div>
</template>
<script>
export default {
    data(){
			return{
				list:[],  	//保存服务器的数据
				pno:0,			//pno页码
				pageSize:0,	//pageSize页大小
				hasmore:true
			}
		},
		methods:{
			loadmore(){ //加载下一页的数据
			if(this.hasmore==false){
				this.$toast("no more");
			}
			if(this.hasmore==true){
				console.log("axmak");
				// 0:pno自增
				this.pno++;
				// 1.创建变量保存url地址
				var url="http://127.0.0.1:3000/newslist?pno="+this.pno;
				// 2.发送ajax请求
				this.axios.get(url).then(result=>{
				// 3.获取服务器端数据
				// 4.保存list
					if(result.data.data.length==0){
						this.hasmore=false;
						return;
					}
					this.list=this.list.concat(result.data.data);
				})
			}
			}
		},
		created(){
			this.loadmore();
		}
}
</script>
<style>
	/* 子元素两端对齐 */
  .app-newslist .mui-ellipsis{
		display: flex;   /*修改布局 弹性*/
		font-size: 12px;
		color:#226aff;
		justify-content: space-between;  /*两端对齐*/
	}
</style>