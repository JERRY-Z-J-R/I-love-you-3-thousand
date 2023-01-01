/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const Koa = require("koa")
const app = new Koa()

app.use((ctx,next)=>{
    if(ctx.url==="/favicon.ico") return
    console.log("111111")
    next()
    console.log("333333")
    ctx.body = "hello world"
})

app.use((ctx,next)=>{
    console.log("222222")
})

app.listen(3000)