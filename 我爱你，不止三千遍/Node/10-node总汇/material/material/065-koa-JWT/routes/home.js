/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const Router = require("koa-router")
const router = new Router()
router.get("/",async (ctx,next)=>{

   //获取cookie
   // console.log(ctx.cookies.get("age"))

   //设置cookie
   // ctx.cookies.set("location","dalian")
   await ctx.render("home",{username:"kerwin"}) //自动找views/home.ejs
})

router.get("/list",async(ctx)=>{

   ctx.body=[{
      _id:1,
      username:"kerwin",
      age:10
   },
   {
      _id:2,
      username:"tiechui",
      age:20
   },
   {
      _id:3,
      username:"shanzhen",
      age:30
   }]
})

module.exports = router