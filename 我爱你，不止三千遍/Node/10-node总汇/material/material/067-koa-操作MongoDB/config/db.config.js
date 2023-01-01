/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
//连接数据库

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/kerwin_koa")
//插入集合和数据,数据库kerwin_project会自动创建