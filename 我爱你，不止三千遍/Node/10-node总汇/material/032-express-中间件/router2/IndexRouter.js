/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const express = require("express")

const router = express.Router()
//路由级别
router.get("/home",(req,res)=>{
    res.send("home")
})

router.get("/login",(req,res)=>{
    res.send("login")
})

module.exports=  router