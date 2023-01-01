/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const express = require("express")
const app = express()

app.use((req,res,next)=>{
    if(req.url==="/favicon.ico") return
    console.log("111111")
    next()
    console.log("333333")
    res.send("hello world")
})

app.use((req,res,next)=>{
    console.log("222222")
})

app.listen(3000)