const express = require('express');
// npm i connect-history-api-fallback
// 引入 connect-history-api-fallback，一个解决单页应用路由 history 模式 404 问题的库
const history = require('connect-history-api-fallback');

const app = express();
// 使用 history
app.use(history());
app.use(express.static(__dirname + '/static'));

app.listen(5050, err => {
    if (!err) console.log('服务器启动成功：http://127.0.0.1:5050');
});

// 原理：
// connect-history-api-fallback 中间件很好的解决了这个问题。
// 具体来说，每当出现符合以下条件的请求时，它将把请求定位到你指定的索引文件(默认为/index.html)
// - 请求是 Get 请求
// - 请求的 Content-Type 类型是 text/html 类型
// - 不是直接的文件请求，即所请求的路径不包含 '.文件拓展名' 字符
// - 不匹配 option 参数中提供的模式（history() 可以传递 option 参数）
// 详解文档：https://www.npmjs.com/package/connect-history-api-fallback
