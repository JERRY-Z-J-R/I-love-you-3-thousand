/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
//增
const Router = require("koa-router")
const router = new Router()
router.post("/",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"add list success"
    }
})
.get("/",(ctx,next)=>{
    ctx.body=["1111","2222","3333"]
})
.put("/:id",(ctx,next)=>{
   console.log(ctx.params)
   ctx.body={
        ok:1,
        info:"put list success"
    }
})
.del("/:id",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"del list success"
    }
})

module.exports = router