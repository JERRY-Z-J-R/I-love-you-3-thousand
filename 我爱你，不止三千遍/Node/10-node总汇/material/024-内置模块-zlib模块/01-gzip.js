/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
http.createServer((req, res) => {
    // 实际上，req 和 res 都是流对象！
    // 读取一个静态文件
    const readStream = fs.createReadStream('./index.js');
    res.writeHead(200, {
        // 指定内存类型和字符集编码
        'Content-Type': 'application/x-javascript;charset=utf-8',
        // 指定内容编码
        'Content-Encoding': 'gzip'
    });
    // 先把流交给 gzip 压缩，随即交给 res
    readStream.pipe(gzip).pipe(res);
}).listen(8080, () => {
    console.log('server start');
});
