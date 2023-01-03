/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const Router = require("koa-router")
const router = new Router()
router.get("/",async (ctx,next)=>{
   await ctx.render("home",{username:"kerwin"}) //自动找views/home.ejs
})


module.exports = router