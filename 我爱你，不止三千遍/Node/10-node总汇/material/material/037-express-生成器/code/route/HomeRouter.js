/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const express = require("express")

const router = express.Router()
//路由级别
router.get("/",(req,res)=>{
    // res.send("home")

    var list = ["aaa","bbbb","ccc","dddd"]
    var myhtml = "<b>我是加粗<b>" //
    res.render("home",{list:list,myhtml:myhtml})
})

module.exports=  router