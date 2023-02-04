/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const http = require('http');
const Router = {};

function use(obj) {
    Object.assign(Router, obj);
}

function start() {
    http.createServer((req, res) => {
        const myURL = new URL(req.url, 'http://127.0.0.1');
        try {
            Router[myURL.pathname](res);
        } catch (error) {
            Router['/404'](res);
        }
    }).listen(3000, () => {
        console.log('server start');
    });
}

exports.start = start;
exports.use = use;
