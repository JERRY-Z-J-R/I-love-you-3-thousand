/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var http = require("http")

//创建服务器

http.createServer((req,res)=>{
    //req 接受浏览器传的参数 
    //res 返回渲染的内容

    // res.write("hello wolrd")
    // res.write("hello wolrd22")
    // res.end([1,2,3]) 

    // res.write("aaaaa")

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write(`
      <html>
          <b>hello wolrd</b>
          <div>大家好</div>
      </html>
    `)
    res.end()
}).listen(3000,()=>{
    console.log("server start")
})