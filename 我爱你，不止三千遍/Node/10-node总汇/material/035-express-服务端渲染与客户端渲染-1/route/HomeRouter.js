/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const express = require("express")

const router = express.Router()
//路由级别
router.get("/",(req,res)=>{
    res.send("home")
})

router.get("/list",(req,res)=>{
    res.send(["111","222","333"])
})


router.get("/swiper",(req,res)=>{
    res.send("home-swiper")
})

router.get("/slide",(req,res)=>{
    res.send("home-slide")
})

module.exports=  router