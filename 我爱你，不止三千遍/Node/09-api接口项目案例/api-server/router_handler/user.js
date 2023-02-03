const db = require('../db/connect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

// 注册处理函数
exports.regUser = (req, res) => {
    // 获取请求体数据
    const userinfo = req.body;

    // 判断用户名是否重复
    const sql = 'SELECT * FROM ev_users WHERE username=?';
    db.query(sql, userinfo.username, (err, results) => {
        if (err) {
            return res.fastSend(err);
        }

        if (results.length === 1) {
            return res.fastSend('用户名被占用，请更换其他用户名！');
        } else if (results.length !== 0) {
            return res.fastSend('注册异常，请稍后再试！');
        }

        // 对用户密码，进行 bcrypt 加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 6);

        // 插入用户
        const sql = 'INSERT INTO ev_users SET ?';
        db.query(sql, userinfo, (err, results) => {
            if (err) {
                return res.fastSend(err);
            }
            if (results.affectedRows !== 1) {
                return res.fastSend('注册异常，请稍后再试！');
            }
            res.fastSend('注册成功！', 'ok');
        });
    });
};

// 登录处理函数
exports.login = (req, res) => {
    // 获取请求体数据
    const userinfo = req.body;

    // 查询用户信息
    const sql = 'SELECT * FROM ev_users WHERE username=?';
    db.query(sql, userinfo.username, function (err, results) {
        if (err) {
            return res.fastSend(err);
        }

        if (results.length === 0) {
            return res.fastSend('用户名不存在！');
        } else if (results.length !== 1) {
            return res.fastSend('登录异常，请稍后再试！');
        }

        // 密码校验
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password);
        if (!compareResult) {
            return res.fastSend('密码错误！');
        }

        // 生成 JWT Token 字符串
        // 剔除 密码、头像
        const user = { ...results[0], password: '', user_pic: '' };
        // 生成 Token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '10h'
        });

        res.send({
            status: 'ok',
            message: '登录成功！',
            token: 'Bearer ' + tokenStr
        });
    });
};
