const db = require('../db/connect');
const bcrypt = require('bcryptjs');

// 获取用户基本信息处理函数
exports.getUserInfo = (req, res) => {
    // 查询用户基本信息
    const sql = 'SELECT id, username, nickname, email, user_pic FROM ev_users WHERE id=?';
    db.query(sql, req.user.id, (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.length !== 1) {
            return res.fastSend('获取用户信息失败，请稍后再试！');
        }

        res.send({
            status: 'ok',
            message: '获取用户基本信息成功！',
            data: results[0]
        });
    });
};

// 更新用户基本信息处理函数
exports.updateUserInfo = (req, res) => {
    // 更新用户基本信息
    const sql = 'UPDATE ev_users SET ? WHERE id=?';
    db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.affectedRows !== 1) {
            return res.fastSend('修改用户基本信息异常，请稍后再试！');
        }

        res.fastSend('修改用户基本信息成功！', 'ok');
    });
};

// 重置密码处理函数
exports.updatePassword = (req, res) => {
    // 查询用户数据
    const sql = 'SELECT * FROM ev_users WHERE id=?';
    db.query(sql, req.user.id, (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.length !== 1) {
            return res.fastSend('用户状态异常！');
        }

        // 判断提交的旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password);
        if (!compareResult) {
            return res.fastSend('原密码错误！');
        }

        // 更新用户密码
        const sql2 = 'UPDATE ev_users SET password=? WHERE id=?';

        // 对新密码进行 bcrypt 加密处理
        const newPwd = bcrypt.hashSync(req.body.newPwd, 6);

        db.query(sql2, [newPwd, req.user.id], (err, results) => {
            if (err) {
                return res.fastSend(err);
            }
            if (results.affectedRows !== 1) {
                return res.fastSend('更新密码异常，请稍后再试！');
            }

            res.fastSend('更新密码成功！', 'ok');
        });
    });
};

// 更新头像处理函数
exports.updateAvatar = (req, res) => {
    // 更新用户头像信息
    const sql = 'UPDATE ev_users SET user_pic=? WHERE id=?';
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.affectedRows !== 1) {
            return res.fastSend('更新头像异常，请稍后再试！');
        }

        res.fastSend('更新头像成功！', 'ok');
    });
};
