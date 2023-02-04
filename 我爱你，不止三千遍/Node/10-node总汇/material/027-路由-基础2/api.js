/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

function render(res, data, type = '') {
    res.writeHead(200, { 'Content-Type': `${type ? type : 'application/json'};charset=utf8` });
    res.write(data);
    res.end();
}
const apiRouter = {
    '/api/login': res => {
        render(res, `{ok:1}`);
    }
};

module.exports = apiRouter;
