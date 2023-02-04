/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const Router = require("koa-router")
const router = new Router()
router.get("/",(ctx,next)=>{
    ctx.body=`
    <html>
        <h1>home页面</h1>
    </html>
    `
})


module.exports = router