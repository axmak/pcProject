const express=require("express");
const mysql=require("mysql");
const pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    port:3306,
    database:"keep_ui",
    password:""
})
const cors=require("cors");
const session=require("express-session");
var server=express();
server.listen(3300);
server.use(express.static("./public"));
server.use(cors({
	origin:'http://127.0.0.1:8080',
	credentials:true
}));
server.use(session({
	secret:"128位字符串",   //配置密钥
  	resave:false,          //每次请求是否更新数据 
  	saveUninitialized:true //保存初始化数据
}))

server.get('/class',(req,res)=>{
    var pno=req.query.pno;
    var pagesize=req.query.pagesize;
    if(!pno){
        pno=1;
    }
    if(!pagesize){
        pagesize=2;
    }
    var offset=(pno-1)*pagesize;
    var sql="select * from keep_class limit ?,?"
    pool.query(sql,[offset,pagesize],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

server.get('/search',(req,res)=>{
    var key=req.query.key;
    var sql="select * from keep_search where sname like concat('%',?,'%')";
    pool.query(sql,[key],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

server.get('/user',(req,res)=>{
    var uphone=req.query.uphone;
    var upassword=req.query.upassword;
    var sql="select * from keep_user where uphone=? and upassword=?";
    pool.query(sql,[uphone,upassword],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名或者密码有误"});
        }else{
            var uid = result[0].uid;
			// 保存session对象中
			req.session.uid = uid;
            res.send({code:1,msg:"登录成功",data:result})
            console.log(req.session.uid)
            console.log(result)
        }
    })
})

server.get("/getUserDetail",(req,res)=>{
    var uid=req.session.uid;
    console.log(uid);
    if(!uid){
        res.send({code:-1,msg:"请登录",data:[]});
		return; 
    }
    var sql="select ava,uname,step from keep_user where uid=?"
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,result});
    })
})