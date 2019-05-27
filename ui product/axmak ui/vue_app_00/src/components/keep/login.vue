<template>
  <div class="login">
    <div class="mui-content">
      <div class="notpassword">
          <a class="backhome" href="javascript:;" @click="toHome">返回首页</a>
          <a href="javascript:;">免密码登陆</a>
      </div>
      <div class="loginForm">
          <h1>
              密码登陆
          </h1>
          <div>
            <select name="" id="">
              <option value="">+86</option>
              <option value="">+10086</option>
              <option value="">+00852</option>
            </select>
            <input v-model="uphone" placeholder="请输入手机号" type="text">
          </div>
          <div class="password">
            <div>密码：</div>
            <input v-model="upassword" type="password" placeholder="至少六位">
          </div>
          <div class="denglu">
            <button @click="login">登录</button>
          </div>
          <div class="forget">
            <a href="">忘记密码</a>
          </div>
          <div class="moredetail">
            <div class="i-bor">
              <img class="icon" src="../../img/ic_login_weixin_off.png" alt="">
            </div>
             <div class="i-bor">
              <img class="icon" src="../../img/ic_login_qq_off.png" alt="">
            </div>
             <div class="i-bor">
              <img class="icon" src="../../img/ic_login_weibo_off.png" alt="">
            </div>
             <div class="i-bor">
              <img class="icon" src="../../img/kt_ic_more.png" alt="">
            </div>
          </div>
          <div class="end">
            登录即代表同意Keep<a href="">用户协议</a>和<a href="">隐私政策</a>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data() {
      return {
        uphone:'',
        upassword:'',
        uid:0
      }
    },
    methods: {
      login(){
        var uphone=this.uphone;
        var upassword=this.upassword;
        var h_reg=/1[3-8]\d{9}/;
        var p_reg=/\d{3,9}/;
        if(h_reg.test(uphone)!=true){
          Toast("用户名格式有误");
          return;
        }
        if(p_reg.test(upassword)!=true){
          Toast("密码格式有误");
          return;
        }
        var url="http://127.0.0.1:3300/user?uphone="+uphone+"&upassword="+upassword;
        this.axios.get(url).then(result=>{
          // console.log(result.data.code==1)
          if(result.data.code==1){
            Toast("登陆成功");
            // console.log(result.data.data[0].uid);
            var ses=window.sessionStorage;
            var uid=result.data.data[0].uid;
            var ava=result.data.data[0].ava;
            // console.log(ava)
            ses.setItem("data",uid);
            var nuid=window.sessionStorage.data;
            // console.log(nuid);
            this.uid=result.data.data[0].uid;
            this.$router.push("/home");
            this.$store.state.uid=nuid;
            this.$store.state.ava=ava;
            this.$store.state.islogin=true;
            console.log(this.$store.state.islogin);
          }else{
            Toast("登录失败")
          }
        })
      },
      toHome(){
        this.$router.push("/home");
      }
    },
}
</script>
<style>
  .login .mui-content{
    background:rgb(88,79,96) !important;
    height:100%;
  }
  .backhome{
    position: relative;
    left:-11.4rem;
  }
  .login .notpassword{
    color:#fff;
    text-align: right;
    padding:2rem 1.2rem 2rem 0rem;;
  }
  .login .notpassword a{
    color:#fff;
    font-size:16px;
  }
  .login .loginForm{
     margin:0 2rem 1rem 2rem;
  }
  .loginForm>h1{
      font-size:1.75rem;
      font-weight: normal;
      color: #fff;
      padding-bottom: 2rem;
  }
  .login .loginForm>div:nth-child(2){
    display: flex;
    border-bottom: #fff;
  }
  .login .loginForm>div:nth-child(2)>select{
    color: #fff;
    background: rgb(88,79,96) !important;
    font-size:16px;
    width:20%;
    padding-left: 0px;
    padding-right:0px;
  }
  .login .loginForm>div:nth-child(2)>input{
    border:0;
    border-bottom: #ccc;
    background: rgb(88,79,96);
    color: #ffffff;
    width:80%;
    padding:1rem 0;
  }
  .login .password{
    color: #fff;
    padding-bottom: 10px;
  }
  .login .password{
    border-bottom: #fff;
  }
  .login .password div{
    font-size:16px;
    width:17%;
    padding:10px 0;
  }
  .login .password>input{
    border-top:0;
    border-left:0;
    border-right:0;
    background: rgb(88,79,96);
    color: #ffffff;
    padding:0;
    font-size:17px;
    letter-spacing: 0.1rem;
    margin-bottom: 10px;
    padding-left: 5px;
  }
  .login .denglu{
    text-align: center;
    width:100%;
  }
  .login .denglu>button{
    color:#fff !important;
    width:90%;
    padding:1rem 0;
    background: rgb(62,139,117);
    border:0;
    border-radius: 30px;
    margin-bottom:1.5rem;
  }
  .login .forget{
    text-align: center;
    padding-bottom: 4.5rem;
    text-decoration: underline;
    letter-spacing: 0.1rem;
    font-size: 16px;
  }
  .login .forget>a{
    color: #fff;
    font-size: 15px;
  }
  .login .moredetail{
    display: flex;
    justify-content: space-around;
    padding:2rem;
  }
  .login .icon{
    width:1.2rem;
    height:1.2rem;
  }
  .login .i-bor{
    width:33px;
    height:33px;
    border:1px solid rgb(121,114,128);
    border-radius: 50%;
    padding:5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login .end{
    padding-bottom: 3rem;
    color:#fff;
    font-size: 12px;
    display: flex;
    justify-content: center;
    letter-spacing: 0.1rem;
  }
  .login .end>a{
    color: #fff;
    text-decoration: underline;
  }
</style>