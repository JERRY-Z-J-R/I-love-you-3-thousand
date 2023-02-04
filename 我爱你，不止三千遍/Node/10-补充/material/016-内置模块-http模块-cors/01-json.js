/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var http = require("http")
var url = require("url")

http.createServer((req,res)=>{
    var urlobj = url.parse(req.url,true)
    // console.log(urlobj.query.callback)

    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        //cors头，
        "access-control-allow-origin":"*"
    })

    switch(urlobj.pathname){
        case "/api/aaa":
            res.end(`${JSON.stringify({
                name:"kerwin",
                age:100
            })}`)
            break;
        default :
            res.end("404")
    }
}).listen(3000)