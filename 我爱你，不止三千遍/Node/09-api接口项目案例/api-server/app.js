const express = require('express');
const cors = require('cors');
const userRouter = require('./router/user');
const userinfoRouter = require('./router/userinfo');
const artCateRouter = require('./router/artcate');
const articleRouter = require('./router/article');
const joi = require('joi');
const expressJWT = require('express-jwt');
const config = require('./config');

const app = express();

// 托管静态资源文件
app.use('/uploads', express.static('./uploads'));

// 快速响应状态中间件
// 该中间件一定要注册到最前面，否则会导致错误处理中间件识别不到 res.fastSend 函数
app.use((req, res, next) => {
    // 为 res 对象挂载 res.fastSend 函数
    // status = 'ok' 成功状态
    // status = 'no' 失败状态（默认）
    res.fastSend = (info, status = 'no') => {
        res.send({
            status,
            message: info instanceof Error ? info.message : info
        });
    };
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 解析 Token 中间件
// /api（无需身份认证），/my（需身份认证，Authorization 携带 Token 字符串）
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }));

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    preflightContinue: false,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

app.use('/api', userRouter);
app.use('/my', userinfoRouter);
app.use('/my/artcate', artCateRouter);
app.use('/my/article', articleRouter);

// 错误处理中间件
app.use(function (err, req, res, next) {
    // 数据格式验证失败
    if (err instanceof joi.ValidationError) {
        return res.fastSend(err);
    }
    // 身份认证失败
    if (err.name === 'UnauthorizedError') {
        return res.fastSend('身份认证失败！');
    }
    // 未知错误
    res.fastSend(err);
});

app.listen(8080, () => {
    console.log('API Server running at http://127.0.0.1:8080');
});
