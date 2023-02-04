/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const Koa = require("koa")
const app = new Koa()

app.use(async (ctx,next)=>{
    if(ctx.url==="/favicon.ico") return
    console.log("111111")
    var mytoken = await next()
    console.log("4444444",mytoken)
    ctx.body = "hello world"
})

app.use(async (ctx,next)=>{
    console.log("222222")

    //异步
    await delay(1000)
    ctx.token = "adw4349849839483984"
    console.log("3333333")
    return "adw4349849839483984"
})

function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time)
    })
}


app.listen(3000)