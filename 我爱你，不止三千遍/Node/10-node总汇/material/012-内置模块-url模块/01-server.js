/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var http = require("http")
var url = require("url")
var moduleRenderHTML = require("./module/renderHTML")
var moduleRenderStatus = require("./module/renderStatus")
//创建服务器

var server = http.createServer()

server.on("request",(req,res)=>{
    //req 接受浏览器传的参数 
    //res 返回渲染的内容

    // res.write("hello wolrd")
    // res.write("hello wolrd22")
    // res.end([1,2,3]) 

    // res.write("aaaaa")
    if(req.url==="/favicon.ico"){
        // todo 读取本地图标
        return
    }
    // console.log(url.parse(req.url).pathname,"2222")
    var urlobj = url.parse(req.url,true)
    console.log(urlobj.query.name,urlobj.query.age)
    var pathname = url.parse(req.url).pathname
    res.writeHead(moduleRenderStatus.renderStatus(pathname),{"Content-Type":"text/html;charset=utf-8"})
    res.write(moduleRenderHTML.renderHTML(pathname))
    res.end()
})

server.listen(3000,()=>{
    console.log("server start")
})


// const url = require('url')
// const urlString = 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
// const parsedStr = url.parse(urlString)
// console.log(parsedStr)


// const urlObject = {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com:443',
//     port: '443',
//     hostname: 'www.baidu.com',
//     hash: '#tag=110',
//     search: '?id=8&name=mouse',
//     query: { id: '8', name: 'mouse' },
//     pathname: '/ad/index.html',
//     path: '/ad/index.html?id=8&name=mouse'
//   }

//   console.log(url.format(urlObject))


var a = url.resolve('/one/two/three/', 'four') 
console.log(a)

var b = url.resolve('http://example.com/aaaa/bbbbb/', '/one')

console.log(b)