/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const express = require("express")

const router = express.Router()
//路由级别-响应前端的get请求
router.get("/",(req,res)=>{
    // new URL
    console.log(req.query)
    res.send("login-success")
})

////路由级别-响应前端的post请求
router.post("/",(req,res)=>{
    console.log(req.body)//必须配置中间件
    const {username,password} = req.body
    if(username==="kerwin" && password==="123456"){
        res.send({ok:1})
    }else{
        res.send({ok:0})
    }
    
})

////路由级别-响应前端的put ,delete请求


module.exports=  router