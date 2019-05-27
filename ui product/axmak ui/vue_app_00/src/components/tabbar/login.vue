<template>
    <div>
        <h3>登录组件</h3>
        <form action="#">
            用户名：<input type="text" v-model="name" placeholder="请输入用户名"><br>
            密码：<input type="password" v-model="password" placeholder="请输入密码"><br>
            <input type="button" value="登录" @click="btnLogin">
        </form>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            name:"",     //双向绑定用户名
            password:""  //双向绑定密码
        }
    },
    methods:{
        btnLogin(){
            //功能：获取用户的用户名和密码
            //验证如果通过发送ajax请求给服务器
            //程序并获得返回结果
            // 1.获取用户输入的用户名和密码
            var name=this.name;
            var pwd=this.password;
            // 2.创建正则表达式
            // 用户名字母，数字，下划线，3~8位
            var n_reg=/^\w{3,8}$/;
            // 密码 数字 3~8
            var p_reg=/^[a-z0-9_]{3,8}$/;
            // 3.验证用户名如果失败，提示错误信息
            if(n_reg.test(name)!=true){
                Toast("用户名格式不规范,请检查")  
            }else{
            // 4.验证密码如果失败，提示错误信息
                if(p_reg.test(pwd)!=true){
                    Toast("密码格式不规范")
                }else{
                // 5.发送ajax请求   
                this.axios.get(
                "http://localhost:3000/Login?name="+name+"&pwd="+pwd,
                // 6.获得返回结果
                // {
                //     params:{
                //         name,
                //         pwd,
                //     }
                // }
                    ).then(res=>{
                    // 7.提示 登录成功或者用户名或者密码错误
                        if(res.data.code==1){
                            Toast("登录成功")  
                        }else{
                            Toast("用户名或者密码错误")
                        }
                    })
                }    
            }
        }
    }
}
</script>
