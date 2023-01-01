/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const Koa = require("koa")

const app = new Koa()
//ctx===context上下文
app.use((ctx,next)=>{
    // ctx.response
    console.log(ctx.path)
    // ctx.response.body="<b>hello world</b>"
    // ctx.response.body={name:"kerwin"}
    ctx.body = "hello world"
})
app.listen(3000)