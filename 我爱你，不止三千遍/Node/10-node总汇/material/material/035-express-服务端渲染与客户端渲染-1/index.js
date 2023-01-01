/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const express = require("express")
const app = express()
const HomeRouter = require("./route/HomeRouter")
const LoginRouter = require("./route/LoginRouter")

//配置静态资源
app.use(express.static("public"))
app.use("/static",express.static("static"))
//配置解析post参数的-不用下载第三方 ,内置
app.use(express.urlencoded({extended:false})) //post参数- username=kerwin&password=1234
app.use(express.json()) //post参数- {name:"",age:100}
//应用级别
app.use(function(req,res,next){
    console.log("验证token")
    next()
})
//应用级别
app.use("/home",HomeRouter)
app.use("/login",LoginRouter)


app.use((req,res)=>{
    res.status(404).send("丢了")
})
app.listen(3000,()=>{
    console.log("server start")
})

