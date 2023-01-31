const joi = require('joi');

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 使用文档：https://www.npmjs.com/package/@escook/express-joi

// 用户名的验证规则
const username = joi.string().alphanum().min(1).max(10).required();
// 密码的验证规则（6-15位非空字符序列）
const password = joi
    .string()
    .pattern(/^[\S]{6,15}$/)
    .required();

// 导出注册和登录表单的验证规则对象
exports.reg_login_schema = {
    // 表示需要对 req.body 中的数据进行验证
    body: {
        username,
        password
    }
};

// 定义 id, nickname, email 的验证规则
const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();

// 导出验证规则对象 - 更新用户基本信息
exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email
    }
};

// 验证规则对象 - 重置密码
exports.update_password_schema = {
    body: {
        // 使用 password 这个规则，验证 req.body.oldPwd 的值
        oldPwd: password,
        // 使用 joi.not(joi.ref('oldPwd')).concat(password) 规则，验证 req.body.newPwd 的值
        // 解读：
        // joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
        // joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
        // .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
};

// dataUri() 指的是如下格式的字符串数据：
// data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=
const avatar = joi.string().dataUri().required();

// 验证规则对象 - 更新头像
exports.update_avatar_schema = {
    body: {
        avatar
    }
};
