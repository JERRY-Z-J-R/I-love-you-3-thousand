/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const jwt = require("jsonwebtoken")
const secret = "kerwin-anydata"
const JWT = {
    generate(value,expires){
        return jwt.sign(value,secret,{expiresIn:expires})
    },

    verify(token){
        try {
            return jwt.verify(token,secret)
        } catch (error) {
            return false
        }
    }
}

module.exports = JWT