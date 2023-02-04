/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const http = require('http');
const route = require('./route');
http.createServer((req, res) => {
    const myURL = new URL(req.url, 'http://127.0.0.1');
    route[myURL.pathname](res);
    res.end();
}).listen(3000, () => {
    console.log('server start');
});
