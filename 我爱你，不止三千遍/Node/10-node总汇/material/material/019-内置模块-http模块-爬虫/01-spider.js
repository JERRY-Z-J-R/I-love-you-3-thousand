/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var http = require("http")
var https = require("https")
var url = require("url")

var cheerio = require("cheerio")

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
            //客户端 去猫眼要数据
            httpget((data)=>{
                res.end(spider(data))
            })
            break;
        default :
            res.end("404")
    }
}).listen(3000)


function httpget(cb){
    var data = ""
    https.get(`https://i.maoyan.com/`,(res)=>{
        res.on("data",(chunk)=>{
            data+= chunk
        })

        res.on("end",()=>{
            console.log(data)
            cb(data)
            // response.end(data)
        })

    })
}

function spider(data){
    // npm i cheerio 
    let $ = cheerio.load(data)
    
    let $moviewlist = $(".column.content")
    // console.log($moviewlist)
    let movies = []

    $moviewlist.each((index,value)=>{
        movies.push({
            title:$(value).find(".title").text(),
            grade:$(value).find(".grade").text(),
            actor:$(value).find(".actor").text()
        })
    })

    console.log(movies)
    return JSON.stringify(movies)
}