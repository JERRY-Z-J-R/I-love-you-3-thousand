# 【MySQL模块】

> 原创内容，转载请注明出处！

# 一、在Node.js中操作MySQL

## 1.1 在项目中操作MySQL的步骤

- 安装操作 MySQL 数据库的第三方模块（mysql）
- 通过 mysql 模块连接到 MySQL 数据库
- 通过 mysql 模块执行 SQL 语句

<img src="mark-img/image-20221215145012349.png" alt="image-20221215145012349" style="width:80%;" />

## 1.2 安装与配置mysql模块

### 1.2.1 安装mysql模块

mysql 模块是托管于 npm 上的第三方模块。它提供了在 Node.js 项目中连接和操作 MySQL 数据库的能力。

想要在项目中使用它，需要先运行如下命令，将 mysql 安装为项目的依赖包：

```shell
npm install mysql
```

### 1.2.2 配置mysql模块

在使用 mysql 模块操作 MySQL 数据库之前，必须先对 mysql 模块进行必要的配置，主要的配置步骤如下：

```javascript
// 导入 mysql 模块
const mysql = require('mysql');
// 建立与 mysql 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',		// MySQL IP 地址（Default: localhost）
    port: '3306',           // MySQL 端口号（Default: 3306）
    user: 'root',			// MySQL 账号
    password: '123456',		// 登录数据库的密码
    database: 'my_db_01'	// 目标数据库
});
```

### 1.2.3 测试mysql模块能否正常工作

调用 `db.query()` 函数，指定要执行的 SQL 语句，通过回调函数拿到执行的结果：

```javascript
// 检测 mysql 模块能否正常工作
db.query('SELECT 1', (err, results) => {
    // 判断 err 是否为 null
    if (err) {
        return console.log(err.message);
    }
    // 只要能打印出 [ RowDataPacket { '1':1 } ] 的结果，就证明数据库连接正常
    console.log(results);
});
```

## 1.3 使用mysql模块操作MySQL数据库

### 1.3.1 查询数据

查询 users 表中所有的数据：

```javascript
// 查询 users 表中的所有的用户数据
db.query('SELECT * FROM users', (err, results) => {
    // 查询失败
    if (err) {
        return console.log(err.message);
    }
    // SELECT 查询得到的 results 是一个数组
    // 查询成功
    console.log(results);
});
```

<img src="mark-img/image-20221215172223576.png" alt="image-20221215172223576" style="width:80%;" />

### 1.3.2 插入数据

向 users 表中新增数据， 其中 username 为 Spider-Man，password 为 pcc321。示例代码如下：

```javascript
// 要插入到 users 表中的数据对象
const user = {
    username: 'Spider-Man',
    password: 'pcc321'
};

// 待执行的 SQL 语句，其中英文的 ? 表示占位符
const sqlStr = 'INSERT INTO users (username, password) VALUES (?, ?)';

// 使用数组的形式，依次为 ? 占位符指定具体的值
db.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    // 注意：如果执行的是 INSERT INTO 插入语句，则 results 是一个对象
    // 受到影响的行数 === 1
    if (results.affectedRows === 1) {
        console.log('插入数据成功');
    }
});
```

<img src="mark-img/image-20221215180517971.png" alt="image-20221215180517971" style="width:80%;" />

### 1.3.3 插入数据的便捷方式

向表中新增数据时，如果数据对象的每个属性和数据表的**字段一一对应**，则可以通过如下方式快速插入数据：

```javascript
// 要插入到 users 表中的数据对象
const user = {
    username: 'Super-Man', 
    password: 'pcc123'
};

// 待执行的 SQL 语句，其中英文的 ? 表示占位符
const sqlStr = 'INSERT INTO users SET ?';

// 直接将数据对象当作占位符的值
db.query(sqlStr, user, (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('插入数据成功');
    }
});
```

### 1.3.4 更新数据

可以通过如下方式，更新表中的数据：

```javascript
// 要更新的数据对象
const user = {
    id: 7,
    username:'aaa',
    password:'000'
};

// 要执行的 SQL 语句
const sqlStr = 'UPDATE users SET username=?, password=? WHERE id=?';

// 调用 db.query() 执行 SQL 语句的同时，使用数据依次为占位符指定具体的值
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    // results 是一个对象
    if (results.affectedRows === 1) {
        console.log('更新数据成功');
    }
});
```

<img src="mark-img/image-20221215182505224.png" alt="image-20221215182505224" style="width:80%;" />

### 1.3.5 更新数据的便捷方式

```javascript
// 要更新的数据对象
const user = {
    id: 8,
    username: 'aaaa', 
    password: '0000'
};

// 要执行的 SQL 语句
const sqlStr = 'UPDATE users SET ? WHERE id=?';

// 调用 db.query() 执行 SQL 语句的同时，使用数据依次为占位符指定具体的值
db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('更新数据成功');
    }
});
```

### 1.3.6 删除数据

在删除数据时，推荐根据 id 这样的唯一标识，来删除对应的数据。实例如下：

```javascript
// 要执行的 SQL 语句
const sqlStr = 'DELETE FROM users WHERE id=?';

// 调用 db.query() 执行 SQL 语句的同时，为占位符指定具体的值
// 注意：如果 SQL 语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//      如果 SQL 语句汇总只有一个占位符，则可以省略数组，直接写值
db.query(sqlStr, 8, (err, results) => {
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('删除数据成功');
    }
});
```

<img src="mark-img/image-20221215183134524.png" alt="image-20221215183134524" style="width:80%;" />

### 1.3.7 标记删除

使用 DELETE 语句，会把真正的把数据从表中删除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。

所谓的标记删除，就是在表中设置类似于 status 这样的状态字段，来标记当前这条数据是否被删除。

当用户执行了删除的动作时，我们并没有执行 DELETE 语句把数据删除掉，而是执行了 UPDATE 语句，将这条数据对应的 status 字段标记为删除即可。

```javascript
// 标记删除：使用 UPDATE 语句代替 DELETE 语句；只更新数据的状态，并没有真正删除
db.query('UPDATE USERS SET status=1 WHERE id=?', 8, (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log('删除数据成功');
    }
});
```

<img src="mark-img/image-20221215183404453.png" alt="image-20221215183404453" style="width:80%;" />

## 1.4 其他补充

### 1.4.1 关于连接

实际上我们之前使用的 `mysql.createPool` 是创建连接池的方式，如果我们不需要连接池，那么应该这样：

首先，使用以下语句导入 mysql 模块：

```js
const mysql = require('mysql');
```

其次，通过调用 createConnection() 方法并提供 MySQL 服务器上的详细信息（如主机，用户，密码和数据库），建立与 MySQL 数据库的连接，如下所示：

```js
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});
```

然后，在连接对象上调用 connect() 方法连接到 MySQL 数据库服务器：

connect() 方法接受一个具有 err 参数的回调函数，如果发生任何错误，它将提供详细的错误。

```js
connection.connect(err => {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});
```

完整的程序代码如下所示：

```js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'todoapp'
});

connection.connect(err => {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});
```

我们来运行并测试一下：

```
F:\worksp\mysql\nodejs\nodejs-connect>node connect.js
openssl config failed: error:02001003:system library:fopen:No such process
Connected to the MySQL server.
```

如果看到如上所示的 “connected to the MySQL server” 的消息，那么恭喜，您已经从 Node.js 应用程序成功连接到 MySQL 数据库服务器。

假设使用 MySQL 用户账号的密码有错，并尝试连接到数据，您将收到一条错误消息：

```
F:\worksp\mysql\nodejs\nodejs-connect>node connect.js
openssl config failed: error:02001003:system library:fopen:No such process
error: ER_ACCESS_DENIED_ERROR: Access denied for user 'root'@'localhost' (using password: YES)
```

请注意，今后你在 connection 对象上调用的每个方法都按顺序排队和执行。

关闭 Node.js 与 MySQL 数据库连接

要正常关闭数据库连接，请在 connection 对象上调用 end() 方法。

end() 方法确保在数据库连接关闭之前始终执行所有剩余的查询。

```js
connection.end(err => {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});
```

要立即强制连接，可以使用 destroy() 方法。 destroy() 方法保证不会再为连接触发回调或事件。

```js
connection.destroy();
```

请注意，destroy() 方法不会像 end() 方法那样采取任何回调参数。

使用举例：

```js
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();
```

Node.js 模块的 MySQL 驱动程序提供了内置的连接池功能，假设您要创建一个具有 10 个连接的连接池：

```js
const pool = mysql.createPool({
    connectionLimit: 10,	// 如果没有配置 connectionLimit 那么它默认就是 10
    host: 'localhost',
    user: 'root',
    password: '123456', 
    database: 'test'
});

pool.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
```

直接 pool.query() 的方式是 pool.getConnection() -> connection.query() -> connection.release() 代码流的快捷方式。

要从池中获取连接，可以使用 getConnection() 方法：

```js
pool.getConnection((err, connection) => {
  // 执行查询
  // ...
});
```

要在完成连接后将其释放到池中，可以调用 connection.release()。 之后，连接将在池中可用，并可以由其他业务再次使用。

```js
pool.getConnection((err, connection) => {
  // 执行查询
  // ...
  connection.release();
});
```

要关闭连接并将其从池中删除，请使用 connection.destroy() 方法。 如果下次需要，将在池中创建一个新的连接。

```js
pool.getConnection((err, connection) => {
  // 执行查询
  // ...
  connection.destroy();
});
```

请注意，连接由池惰性创建。如果将池配置为允许最多 100 个连接，但同时只使用 5 个，则只会建立 5 个连接。

连接也是循环使用的，连接从池的顶部取出，然后返回到池的底部。

当从池中检索到以前的连接时，会向服务器发送一个 ping 包，以检查连接是否仍然正常。

当你完成使用池，你必须结束所有的连接，否则 Node.js 事件循环将保持活动，直到连接被 MySQL 服务器关闭。

如果在脚本中使用该池，或者需要优雅地关闭服务器时，通常会在结束前这样做。

要关闭池中的所有连接，请使用 pool 对象的 end() 方法，如下所示：

```js
pool.end(err => {
  if (err) {
    return console.log(err.message);
  }
  // 关闭所有连接
});
```

注意：一旦执行了 pool.end()，那么 pool.getConnection 和其它操作将无法继续执行，如果已经在执行的任务那么会等待它执行完毕，新的任务则不再执行。

使用 pool.getConnection() 可以为后续查询共享连接状态。而使用 pool.query() 的话，不同的两次调用可能使用的是两个不同的连接并行运行。

```js
var mysql = require('mysql');
var pool  = mysql.createPool(...);

pool.getConnection((err, connection) => {
  if (err) throw err;

  // 使用连接
  connection.query('SELECT something FROM sometable', (error, results) => {
    // 完成连接后就释放它
    connection.release();

    // 在释放后处理错误
    if (error) throw error;

    // 不要在这里使用连接，它已经返回到池中
  });
});
```

### 1.4.2 SQL注入

sql 语句中使用 `?` 作为查询参数占位符，值以数组的形式传入，那么这种方式默认就是防止 SQL 注入的！

如果 sql 是直接拼接的字符串值，那么为了防止 SQL 注入，必须对参数值事先调用 `mysql.escape()` 来过滤：

```js
status = mysql.escape(status);
id = mysql.escape(id);
connection.query(`update tbl_module set module_status = ${status} where id = ${id}`);
```

实际上，`?` 占位符在背后就是自动调用了 `mysql.escape()`。

### 1.4.3 查询细节

还是看文档吧：[[mysql - npm (npmjs.com)](https://www.npmjs.com/package/mysql)](https://github.com/mysqljs/mysql#readme)

中文文档：[mysql - mysql中文文档翻译 - Breword 文档集合](https://www.breword.com/mysqljs-mysql)

### 1.4.4 更优推荐

- mysql2：[mysql2 - npm (npmjs.com)](https://www.npmjs.com/package/mysql2)，与 mysql 相同的 API，更快的性能，更多的功能，提供 Promise 封装！
- sequelize：[sequelize - npm (npmjs.com)](https://www.npmjs.com/package/sequelize)，Node.js 的 ORM 工具，可以将关系型数据库表映射为 JS 对象，同时提供非常强大的功能！
