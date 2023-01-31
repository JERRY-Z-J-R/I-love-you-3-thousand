// 导入 mysql 模块
const mysql = require('mysql');

// 创建数据库连接对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '245424',
    database: 'my_db_01',
});

// 向外共享 db 数据库连接对象
module.exports = db;