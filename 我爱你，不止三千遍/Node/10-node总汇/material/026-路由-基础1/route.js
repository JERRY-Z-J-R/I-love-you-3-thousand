/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs = require('fs');
const route = {
    '/login': res => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
        res.write(fs.readFileSync('./static/login.html'), 'utf-8');
    },
    '/home': res => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
        res.write(fs.readFileSync('./static/home.html'), 'utf-8');
    },
    '/404': res => {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' });
        res.write(fs.readFileSync('./static/404.html'), 'utf-8');
    }
};

module.exports = route;
