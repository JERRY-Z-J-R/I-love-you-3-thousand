/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const express = require("express")
const app = express()

app.use(async (req,res,next)=>{
    if(req.url==="/favicon.ico") return
    console.log("111111")
    await next()
    
})

app.use(async (req,res,next)=>{
    console.log("222222")

    //异步
    await delay(1000)
    res.token = "adw4349849839483984"
    console.log("3333333")
    console.log("4444444",res.token)
    res.send("hello world")
})

function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time)
    })
}


app.listen(3000)