# Express

> 原创内容，转载请注明出处！

# 一、初始Express

## 1.1 Express简介

**（1）什么是 Express？**

官方给出的概念：Express 是基于 Node.js 平台，快速、开放、极简的 Web 开发框架。

通俗的理解：Express 的作用和 Node.js 内置的 http 模块类似，是专门用来创建 Web 服务器的。

Express 的本质：就是一个 npm 上的第三方的包，提供了快速创建 Web 服务器的便捷方法。

Express 的中文官网：http://www.expressjs.com.cn/

<img src="mark-img/image-20221213144211088.png" alt="image-20221213144211088" style="zoom:25%;" />

**（2）进一步理解 Express**

思考：不使用 Express 能否创建 Web 服务器？

答案：能，使用 Node.js 提供的原生 http 模块即可。

---

思考：既生瑜何生亮（有了 http 内置模块，为什么还有用 Express）？

答案：http 内置模块用起来很复杂，开发效率低；Express 是基于内置的 http 模块进一步封装出来的，能够极大的提高开发效率。

---

思考：http 内置模块与 Express 是什么关系？

答案：类似于浏览器中 Web API 和 jQuery 的关系。后者是基于前者进一步封装出来的。

**（3）Express 能做什么？**

对于前端程序员来说，最常见的两种服务器，分别是：

- Web 网站服务器：专门对外提供 Web 网页资源的服务器。
- API 接口服务器：专门对外提供 API 接口的服务器。

使用 Express，我们可以方便、快速的创建 Web 网站的服务器或 API 接口的服务器。

## 1.2 Express 的基本使用

### 1.2.1 安装

在项目所处的目录中，运行如下命令，即可将 express 安装到项目中使用：

```shell
npm i express@4.17.1
# 这里统一使用 4.17.1 版本来做演示
```

### 1.2.2 创建基本的 Web 服务器

```javascript
// 导入 express
const express = require('express');

// 创建 web 服务器
const app = express();

// 启动 web 服务器
// app.listen(端口号, 启动成功后的回调函数)
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});
```

### 1.2.3 监听 GET 请求

通过 `app.get()` 方法，可以监听客户端的 GET 请求，具体的语法格式如下：

```javascript
// 参数1：客户端请求的 URL 地址
// 参数2：请求对应的处理函数
// 		req：请求对象（包含了与请求相关的属性与方法）
//		res：响应对象（包含了与响应相关的属性与方法）
app.get('请求URL', funciton(req, res) {
   // 处理     
});
```

### 1.2.4 监听 POST 请求

通过 `app.post()` 方法，可以监听客户端的 POST 请求，具体的语法格式如下：

```javascript
// 参数1：客户端请求的 URL 地址
// 参数2：请求对应的处理函数
// 		req：请求对象（包含了与请求相关的属性与方法）
//		res：响应对象（包含了与响应相关的属性与方法）
app.post('请求URL', funciton(req, res) {
   // 处理     
});
```

### 1.2.5 把内容响应给客户端

通过 `res.send()` 方法，可以把处理好的内容，发送给客户端：

```javascript
app.get('/user', (req, res) => {
    // 向客户端发送 JSON 对象
    res.send({ name: 'zjr', age: '18', gender: '男' });
});

app.post('/user', (req, res) => {
    // 向客户端发送文本内容
    res.send('请求成功');
});
```

---

测试：

```javascript
// 导入 express
const express = require('express');

// 创建 web 服务器
const app = express();

// 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
    // 向客户端发送 JSON 对象
    res.send({ name: 'zjr', age: '18', gender: '男' });
});

app.post('/user', (req, res) => {
    // 向客户端发送文本内容
    res.send('请求成功');
});

// 启动 web 服务器
// app.listen(端口号, 启动成功后的回调函数)
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});
```

运行：

<img src="mark-img/image-20221213154814267.png" alt="image-20221213154814267" style="zoom:50%;" />

Apifox 测试：

<img src="mark-img/image-20221213151456261.png" alt="image-20221213151456261" style="zoom:50%;" />

<img src="mark-img/image-20221213151517593.png" alt="image-20221213151517593" style="zoom:50%;" />

### 1.2.6 获取 URL 中携带的查询参数

通过 `req.query` 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数。

```javascript
app.get('/', (req, res) => {
    // req.query 默认是一个空对象
    // 客户端使用 ?name=zjr&age=20 这种查询字符串的形式，发送到服务器的参数
    // 可以通过 req.query 对象访问到，例如：
	// req.query.name	req.query.age
    console.log(req.query);
});
```

### 1.2.7 获取 URL 中的动态参数

通过 `req.params` 对象，可以访问到 URL 中，通过 `:` 匹配到的动态参数。

```javascript
// URL 地址中，可以通过 :参数名 的形式，匹配动态参数值
app.get('/user/:id', (req, res) => {
    // req.params 默认是一个空对象
    // 里面存放着通过 : 动态匹配到的参数值
    // 例如：http://127.0.0.1/user/1010929843210，则服务器收到的 1010929843210 就被赋给了 id 参数
    console.log(req.params);
});
```

---

测试：

```javascript
// 导入 express
const express = require('express');

// 创建 web 服务器
const app = express();

// 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
    // 向客户端发送 JSON 对象
    res.send({ name: 'zjr', age: '18', gender: '男' });
});

app.post('/user', (req, res) => {
    // 向客户端发送文本内容
    res.send('请求成功');
});

app.get('/', (req, res) => {
    // req.query 默认是一个空对象
    // 客户端使用 ?name=zjr&age=20 这种查询字符串的形式，发送到服务器的参数
    // 可以通过 req.query 对象访问到，例如：
    // req.query.name	req.query.age
    res.send(req.query);
    res.send(req.query.name);
    res.send(req.query.age);
});

// URL 地址中，可以通过 :参数名 的形式，匹配动态参数值
app.get('/user/:id', (req, res) => {
    // req.params 默认是一个空对象
    // 里面存放着通过 : 动态匹配到的参数值
    res.send(req.params);
});

// 启动 web 服务器
// app.listen(端口号, 启动成功后的回调函数)
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});
```

Apifox 测试：

<img src="mark-img/image-20221213155149127.png" alt="image-20221213155149127" style="zoom:50%;" />

<img src="mark-img/image-20221213155141877.png" alt="image-20221213155141877" style="zoom:50%;" />

<img src="mark-img/image-20221213160212006.png" alt="image-20221213160212006" style="zoom:50%;" />

## 1.3 托管静态资源

### 1.3.1 express.static()

express 提供了一个非常好用的函数，叫做 `express.static()`，通过它，我们可以非常方便地创建一个静态资源服务器，例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：

```javascript
app.use(express.static('public'))
```

现在，你就可以访问 public 目录中的所有文件了：

`http://localhost/images/bg.jpg`

`http://localhost/css/style.css`

`http://localhost/js/login.js`

**注意：**Express 在指定的静态目录中查找文件，并对外提供资源的访问路径，因此，存放静态文件的目录名（public）不会出现在 URL 中。

```javascript
const express = require('express');
const app = express();

app.use(express.static('./public'));

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})
```

<img src="mark-img/image-20221213163159099.png" alt="image-20221213163159099" style="zoom:50%;" />

<img src="mark-img/image-20221213163117265.png" alt="image-20221213163117265" style="zoom:50%;" />

### 1.3.2 托管多个静态资源目录

如果要托管多个静态资源目录，请多次调用 `express.static()` 函数：

```javascript
app.use(express.static('public'));
app.use(express.static('files'));
```

访问静态资源文件时，`express.static()` 函数会根据目录的添加顺序查找所需的文件。

### 1.3.3 挂载路径前缀

如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式：

```javascript
app.use('/public', express.static('public'))
```

现在，你就可以通过带有 /public 前缀地址来访问 public 目录中的文件了：

`http://localhost/public/images/kitten.jpg`

`http://localhost/public/css/style.css`

`http://localhost/public/js/app.js`

## 1.4 nodemon

**（1）为什么要使用 nodemon**

在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐。现在，我们可以使用 nodemon（https://www.npmjs.com/package/nodemon） 这个工具，它能够监听项目文件的变动，当代码被修改后，nodemon 会自动帮我们重启项目，极大方便了开发和调试。

**（2）安装 nodemon**

在终端中，运行如下命令，即可将 nodemon 安装为全局可用的工具：

```shell
npm install -g nodemon
```

**（3）使用 nodemon**

当基于 Node.js 编写了一个网站应用的时候，传统的方式，是运行 node app.js 命令，来启动项目。这样做的坏处是：代码被修改之后，需要手动重启项目。

现在，我们可以将 node 命令替换为 nodemon 命令，使用 nodemon app.js 来启动项目。这样做的好处是：代码被修改之后，会被 nodemon 监听到，从而实现自动重启项目的效果。

```shell
nodemon app.js
```

即：每一次修改代码并保存时，nodemon 会自动重启一次项目。

# 二、Express 路由

## 2.1 路由的概念

### 2.1.1 什么是路由

广义上来讲，路由就是映射关系。

### 2.1.2 现实生活中的路由

在这里，路由是按键与服务之间的映射关系。

<img src="mark-img/image-20221213185136745.png" alt="image-20221213185136745" style="zoom: 50%;" />

### 2.1.3 Express中的路由

在 Express 中，路由指的是**客户端的请求**与**服务端处理函数**之间的映射关系。

Express 中的路由分 3 部分组成，分别是：**请求的类型**、**请求的 URL 地址**、**处理函数**，格式如下：

```javascript
app.METHOD(PATH, HANDLER)
```

### 2.1.4 Express中的路由的例子

```javascript
// 匹配 GET 请求，且请求 URL 为 /
app.get('/', funciton(req, res) {
   res.send('Got a GET request');     
});

// 匹配 POST 请求，且请求为 URL 为 /
app.post('/', funciton(req, res) {
   res.send('Got a POST request');      
});
```

### 2.1.5 路由的匹配过程

每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。

在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的 URL 同时匹配成功，则 Express 会将这次请求，转交给对应的 function 函数进行处理。

<img src="mark-img/image-20221213190428015.png" alt="image-20221213190428015" style="zoom: 67%;" />

路由匹配的注意点：

- 按照定义的先后顺序进行匹配
- 请求类型和请求的 URL 同时匹配成功，才会调用对应的处理函数

## 2.2 路由的使用

### 2.2.1 最简单的用法

在 Express 中使用路由最简单的方式，就是把路由挂载到 app 上，示例代码如下：

```javascript
const express = require('express');

// 创建 Web 服务器，命名为 app
const app = express();

// 挂载路由
app.get('/', (req, res) => {
    res.send('Get Request.');
});

// 挂载路由
app.post('/', (req, res) => {
    res.send('Post Request.');
});

app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
});
```

### 2.2.2 模块化路由

为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。

将路由抽离为单独模块的步骤如下：

1. 创建路由模块对应的 .js 文件
2. 调用 `express.Router()` 函数创建路由对象
3. 向路由对象上挂载具体的路由
4. 使用 `module.exports` 向外共享路由对象
5. 使用 `app.use()` 函数注册路由模块

**（1）创建路由模块 router/user.js**

```javascript
// 导入 express
var express = require('express');
// 创建路由对象
var router = express.Router();		

// 挂载获取用户列表
router.get('/user/list', function (req, res) {
    res.send('Get user list.');
});

// 挂载添加用户的路由
router.post('/user/add', function (req, res) {
    res.send('Add new user.');
});

// 向外导出路由对象
module.exports = router;
```

**（2）注册路由模块**

```javascript
// 导入路由模块
const userRouter = require('./router/user.js');

// 使用 app.use() 注册路由模块
app.use(userRouter);
```

---

实例代码：

```javascript
// router/user.js

// 导入 express
var express = require('express');
// 创建路由对象
var router = express.Router();

// 挂载获取用户列表
router.get('/user/list', function (req, res) {
    res.send('Get user list.');
});

// 挂载添加用户的路由
router.post('/user/add', function (req, res) {
    res.send('Add new user.');
});

// 向外导出路由对象
module.exports = router;
```

```javascript
// webtest.js

// 导入 express
const express = require('express');
// 创建 web 服务器
const app = express();

// 导入路由模块
const userRouter = require('./router/user.js');

// 使用 app.use() 注册路由模块
app.use(userRouter);

app.listen(80, () => {
    console.log('http://127.0.0.1');
});
```

<img src="mark-img/image-20221213211450640.png" alt="image-20221213211450640" style="zoom:50%;" />

Apifox 测试：

<img src="mark-img/image-20221213211745447.png" alt="image-20221213211745447" style="zoom:50%;" />

<img src="mark-img/image-20221213211806480.png" alt="image-20221213211806480" style="zoom:50%;" />

> 在注册路由模块时，我们使用到了 app.use() 函数，而在之前托管静态资源 app.use(express.static('public')) 时，也使用到了 app.use() 函数。
>
> 那 app.use() 函数到底是干什么的呢？
>
> 其实，app.use() 函数的作用，就是用来注册全局中间件！（中间件相关概念后面讲）

## 2.3 为路由模块添加前缀

类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单：

```javascript
// 导入路由模块
const userRouter = require('./router/user.js');

// 使用 app.use() 注册路由模块，并统一添加访问前缀 /api
app.use('/api', userRouter);
```

例如：

```javascript
// 导入路由模块
const userRouter = require('./router/user.js');

// 使用 app.use() 注册路由模块
app.use('/api', userRouter);
```

`http://127.0.0.1/api/user/add`

`http://127.0.0.1/api/user/list`

