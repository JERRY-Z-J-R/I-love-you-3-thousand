/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const Koa = require("koa")
const Router = require("koa-router")
const app = new Koa()
const router = new Router()
//ctx===context上下文

//增
router.post("/list",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"add list success"
    }
})
.get("/list",(ctx,next)=>{
    ctx.body=["1111","2222","3333"]
})
.put("/list/:id",(ctx,next)=>{
   console.log(ctx.params)
   ctx.body={
        ok:1,
        info:"put list success"
    }
})
.del("/list/:id",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"del list success"
    }
})

//增
router.post("/user",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"add user success"
    }
})
.get("/user",(ctx,next)=>{
    ctx.body=["aaa","bbbb","ccc"]
})
.put("/user/:id",(ctx,next)=>{
   console.log(ctx.params)
   ctx.body={
        ok:1,
        info:"put user success"
    }
})
.del("/user/:id",(ctx,next)=>{
    ctx.body={
        ok:1,
        info:"del user success"
    }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)