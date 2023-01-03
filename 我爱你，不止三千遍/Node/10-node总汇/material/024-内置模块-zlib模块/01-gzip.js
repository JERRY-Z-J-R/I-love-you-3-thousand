/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const http = require("http")
const fs = require("fs")
const zlib = require("zlib")
const gzip = zlib.createGzip();
http.createServer((req,res)=>{
    // res 可写流

    const readStream = fs.createReadStream("./index.js")
    res.writeHead(200,{"Content-Type":"application/x-javascript;charset=utf-8","Content-Encoding":"gzip"})
    readStream.pipe(gzip).pipe(res)
}).listen(3000,()=>{
    console.log('server start')
})