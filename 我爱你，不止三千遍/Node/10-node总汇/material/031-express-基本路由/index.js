/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    // res.send(`
    //     <html>
    //         <h1>hello world</h2>
    //     </html>
    // `)

    res.send({
        name:"kerwin",
        age:100
    })
})

app.get("/login",(req,res)=>{
    res.write("login")
    res.end()
})

// app.get("/home",(req,res,next)=>{
//     // 验证用户token过期, cookie过期
   
//     console.log("验证token")
//     const isValid = false
//     if(isValid){
//         next()
//     }else{
//         //返回错误
//         res.send("error")
//     }
// },(req,res)=>{
//      // 查询数据库
//     // 返回内容
//     res.send({list:[1,2,3]})
// })

const func1 = (req,res,next)=>{
    // 验证用户token过期, cookie过期
   
    console.log("验证token")
    const isValid = true
    if(isValid){
        res.kerwin="这是fun1计算的结果"
        next()
    }else{
        //返回错误
        res.send("error")
        
    }
}
const func2 = (req,res)=>{
    // 查询数据库
   // 返回内容
   console.log(res.kerwin)
   res.send({list:[1,2,3]})
}
app.get("/home",[func1,func2])

app.get("/list",[func1],(req,res)=>{
    res.send("list")
})


// app.get("/ab?cd",(req,res)=>{
//     res.send("ok")
// })

// get http://aa.com/detail/2222
// app.get("/ab/:id/:id2",(req,res)=>{
//     res.send("ok")
// })

// 匹配 abcd、abbcd、abbbcd等
// app.get('/ab+cd', function(req, res) {
//     res.send('ab+cd');
//   });

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
// app.get('/ab*cd', function(req, res) {
//     res.send('ab*cd');
//   });

// app.get('/ab(cd)?e', function(req, res) {
//     res.send('ab(cd)?e');
// });

// app.get(/.*fly$/, function(req, res) {
//     res.send('/.*fly$/');
// });

app.listen(3000,()=>{
    console.log("server start")
})