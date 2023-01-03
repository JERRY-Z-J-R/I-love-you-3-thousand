/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var http = require("http")
var https = require("https")
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
            //客户端 去小米优品要数据
            httppost((data)=>{
                res.end(data)
            })
            break;
        default :
            res.end("404")
    }
}).listen(3000)


function httppost(cb){
    var data = ""

    var options = {
        hostname:"m.xiaomiyoupin.com",
        port:"443",
        path:"/mtop/market/search/placeHolder",
        method:"POST",
        headers:{
            "Content-Type":"application/json"

            // "Content-Type":"x-www-form-urlencoded" 
        }
    }
    var req = https.request(options,(res)=>{
        res.on("data",chunk=>{
            data+=chunk
        })
        res.on("end",()=>{
            cb(data)
        })
    })
    // req.write("name=kerwin&age=100")
    req.write(JSON.stringify([{},{"baseParam":{"ypClient":1}}]))
    req.end()
}