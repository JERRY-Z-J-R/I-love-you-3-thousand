/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const Koa = require("koa")
const app = new Koa()
const static = require("koa-static")
const path = require("path")
const bodyParser=  require("koa-bodyparser")
const views = require("koa-views")
//ctx===context上下文
const router = require("./routes")
//应用级
app.use(bodyParser()) //获取post参数
app.use(static(path.join(__dirname,"public"))) //静态资源

//配置 模板引擎
app.use(views(path.join(__dirname,"views"),{extension:"ejs"}))
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)