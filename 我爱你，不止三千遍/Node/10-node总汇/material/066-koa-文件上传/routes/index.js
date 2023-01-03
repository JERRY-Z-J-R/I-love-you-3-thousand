/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const Router = require("koa-router")
const userRouter= require('./user.js')
const listRouter=  require('./list.js')
const homeRouter=  require('./home.js')
const loginRouter=  require('./login.js')
const uploadRouter=  require('./upload.js')
const router = new Router()

//统一加前缀
// router.prefix("/api")
//先注册路由级中间件
router.use("/user",userRouter.routes(),userRouter.allowedMethods())
router.use("/list",listRouter.routes(),listRouter.allowedMethods())


router.use("/home",homeRouter.routes(),homeRouter.allowedMethods())
router.use("/login",loginRouter.routes(),loginRouter.allowedMethods())
router.use("/upload",uploadRouter.routes(),uploadRouter.allowedMethods())
router.redirect("/","/home") //重定向

module.exports = router