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
        info:"add user success"
    }
})
.get("/",(ctx,next)=>{
    ctx.body=["aaa","bbbb","ccc"]
})
.put("/:id",(ctx,next)=>{
   console.log(ctx.params)
   ctx.body={
        ok:1,
        info:"put user success"
    }
})
.del("/:id",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"del user success"
    }
})

module.exports = router