<template>
    <div>
        <div class="mui-card">
			<div class="mui-card-header">
                <div>
                    全选 <input type="checkbox" :checked="allcb" @change="selectAll">
                </div>
            </div>
			    <div class="mui-card-content">
					<ul class="mui-table-view">
                        <li v-for="(item,i) in list" :key="item.id" class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" src="img/menu5.png">
                                <div class="mui-media-body">
                                    <p class='mui-ellipsis'>
                                        <!-- 1.复选框 -->
                                        <input type="checkbox" :checked="item.cb" @change="singleSelect" :data-i="i">
                                        <!-- 2.商品名称 -->
                                        {{item.lname}}
                                        <!-- 3.商品价格 -->
                                        {{item.price}}
                                        <!-- 4.删除按钮 -->
                                        <input type="button" value="删除" @click="removeItem" :data-pid="item.id">
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
			    </div>
			<div class="mui-card-footer">
                <input type="button" value="删除选中的商品" @click="removeSelect">
            </div>
		</div>   
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            isSelect:true,
            allcb:false,
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        loadMore(){
            console.log(1234);
            // 1.创建变量url
            var url="http://127.0.0.1:3000/getCart"
            // 2.发送ajax请求
            this.axios.get(url).then(res=>{
                if(res.data.code<1){
                    this.$toast("请登录");
                    return;
                }
                // 2.1:为数组元素添加一个属性 ischecked：表示复选框状态
                // 2.2：将添加后的结果数组件赋值 list
                var rows =res.data.data;
                // 2.3:创建循环遍历数组并且添加属性
                for(var item of rows){
                    item.cb=false;
                }
                console.log(res.data.data)
                this.list=rows;
            // 3.获取服务器返回数据
                // this.list=res.data.data;
            // 4.保存list
                // console.log(this.list)
            })
        },
        removeItem(e){
            // 0:创建一个确认的消息框
            this.$messagebox.confirm("是否删除指定商品?").then(action=>{
                // 功能：删除指定商品
                // 1.获取商品编号
                var pid=e.target.dataset.pid;
                console.log(pid)
                // 2.创建变量url
                var url="http://127.0.0.1:3000/removeCartItem?id="+pid;
                // 3.发送ajax请求
                this.axios.get(url).then(res=>{
                // 4.获取返回结果
                    console.log(res.data.msg);
                // 5.判断是否删除成功
                if(res.data.code==0){
                    this.$toast("删除失败");
                }else{
                    this.$toast("删除成功");
                }
                // 6.将当前商品对象删除
                this.loadMore();
                })
            }).catch(result=>{
                console.log("取消")
            })
        },
        removeSelect(e){
            console.log("axmak");
            // 1.显示一个确认框"是否删除选中商品"
            this.$messagebox.confirm("是否删除选中商品")
            // 2.如果用户选中 确认
            .then(action=>{
                // 2.1获取用户选中商品
                // 创建变量保存删除商品的id
                var ids="";
                // 创建循环遍历数组
                for(var item of this.list){
                // 如果当前元素cb=true
                    if(item.cb==true){
                // 获取当前元素id拼成字符串
                        ids+=item.id+",";
                    }
                }
                // 如果用户没有选中商品，停止删除操作
                if(ids.length==0){
                    this.$toast("请选中需要删除的商品");
                    return;
                }
                // 如果用户选择多个商品，去除后面
                ids=ids.substring(0,ids.length-1);
                console.log(ids);
                // 2.2创建变量 var ids="11,12"
                //var ids="78";
                // 2.3发送ajax请求服务器 /delM
                var url="http://127.0.0.1:3000/delM?ids="+ids;
                this.axios.get(url).then(res=>{
                // 2.4接受服务器返回结果
                // 2.5提示 删除成功 或者 删除失败
                    // if(res.data.code==1){
                    //     this.$toast("删除成功");
                    // }else{
                    //     this.$toast("删除失败")
                    // }
                    console.log(res);
                    this.$toast(res.data.msg)
                    this.loadMore();
                })
            })
            .catch(result=>{
            // 3.如果用户选中取消
                console.log("取消")
            })
        },
        selectAll(e){
            // 1.获取全选状态
            var cb=e.target.checked;
            console.log(cb);
            // 2.遍历所有商品
            for(var item of this.list){
                // 3.将全选状态赋值商品选中状态
                item.cb=cb
            }
            // 4:修改全选状态
            this.allcb = cb;
        },
        singleSelect(e){
            // 功能：如果用户选中商品，将当前商品对应对象
            // 1.获取当前元素选中状态
            var cb=e.target.checked;
            // 2.获取当前元素所对应的商品对象
            // 2.1:获取当前元素下标
            var i=e.target.dataset.i;
            console.log(cb);
            console.log(i);
            // 2.2:将数组下标对象
            // 3.修改商品对象cb属性
            this.list[i].cb=cb;
            

            // 4.修改全选的状态 true false
            // 4.1如何完成  累加计算
            // 4.2创建变量count 保存累加和
            var count=0;
            // 4.3创建循环遍历所有元素
            for(var item of this.list){
            // 4.4获取cb如果值等于true count++
                if(item.cb==true){
                    count++;
                }
            }
            // 4.5如果count个数与数组长度一致
            if(count==this.list.length){
            // 4.6将全选复选框选中
                this.allcb=true;
            }else{// 4.7否则清空全选复选框
                this.allcb=false;
            }
        }
    }
}
</script>
<style>
    
</style>