/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const Koa =require("koa")
const app = new Koa()

app.use((ctx)=>{
    ctx.body ="<h1>hello</h1>"
})

// app.listen(3000)

module.exports = app