/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserType = {
    username:String,
    password:String,
    age:Number,
    avatar:String
}

const UserModel = mongoose.model("user",new Schema(UserType))
// 模型user 将会对应 users 集合, 
module.exports = UserModel