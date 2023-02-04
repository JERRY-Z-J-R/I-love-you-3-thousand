# Node.js

> 作者：kerwin（千锋）
>
> > 在此基础上，[JERRY-Z-J-R](https://github.com/JERRY-Z-J-R) 进行了大量的文档优化和补充！

# 一、Node.js基础

## 1.1 认识Node.js

> Node.js 是一个 javascript 运行环境。它让 javascript 可以开发后端程序，实现几乎其他后端语言实现的所有功能，可以与 PHP、Java、Python、.NET、Ruby 等后端语言平起平坐。
>
> Node.js 是基于 V8 引擎，V8 是 Google 发布的开源 JavaScript 引擎，本身就是用于 Chrome 浏览器的 js 解释部分，但是 Ryan Dahl 这哥们，鬼才般的把这个 V8 搬到了服务器上，用于做服务器的软件。

### 1.1.1 node.js的特性

- Node.js 语法完全是 js 语法，只要你懂 js 基础就可以学会 Node.js 后端开发
- Node.js 超强的高并发能力，实现高性能服务器
- 开发周期短、开发成本低、学习成本低

### 1.1.2 浏览器环境 vs Node环境

<img src="mark-img/image-20220209152247426.png" alt="image-20220209152247426" style="width:80%;" />

Node.js 不包含浏览器的 API，即不包括 DOM、BOM 等！Node.js 的 API 所针对的是后端开发所用的 API。

Node.js 可以解析 JS 代码（没有浏览器安全级别的限制）提供很多系统级别的 API，如：

- 文件的读写（File System）

  ```js
  const fs = require('fs');
  
  fs.readFile('./ajax.png', 'utf-8', (err, content) => {
      console.log(content);
  });
  ```

- 进程的管理（Process）

  ```js
  function main(argv) {
      console.log(argv);
  }
  
  main(process.argv.slice(2));
  ```
  
- 网络通信（HTTP/HTTPS）

  ```js
  const http = require("http");
  
  http.createServer((req,res) => {
      res.writeHead(200, {
          "content-type": "text/plain"
      });
      res.write("hello node.js");
      res.end();
  }).listen(3000);
  ```


## 1.2 开发环境搭建

中文官网：http://nodejs.cn/download/

建议下载 LTS 长期支持版本！

<img src="mark-img/image-20220210095903409.png" alt="image-20220210095903409" style="width:80%;" />

下载后，双击下一步，默认安装即可。

`node -version` 成功打印版本号，即安装成功！

使用 Node.js 独立运行 js 代码：`node xxx.js`

## 1.3 CommonJS、模块、包

为了提高开发的工程化，让合理性、效率性、可维护性、安全性得到保证，所以 Node.js 项目的开发有：CommonJS、模块、包 的概念。

<img src="mark-img/image-20220210100015768.png" alt="image-20220210100015768" style="width:80%;" />

### 1.3.1 CommonJS规范

CommonJS 规范是为了解决 JavaScript 的作用域问题而定义的模块形式，可以使每个模块在它自身的命名空间中执行。

CommonJS 规范包含许多的内容，其中 模块、包 都属于其中的内容。

<img src="mark-img/image-20220210101652166.png" alt="image-20220210101652166" style="width: 40%;" />

CommonJS 只是一套规范，不包含实现，真正的实现是在 Node.js/Webpack 中来部分实现的。

<img src="mark-img/image-20220210101720533.png" alt="image-20220210101720533" style="width: 40%;" />

### 1.3.2 modules模块化规范写法

我们可以把公共的功能抽离成为一个单独的 js 文件作为一个模块，默认情况下，这个模块里面的方法或者属性，外面是没法访问的。如果要让外部可以访问模块里面的方法或者属性，就必须在模块里面通过 `exports` 或者 `module.exports` 暴露属性或者方法，在使用时通过 `require` 导入。

m1.js：

```js
const name = 'gp19';

const sayName = () => {
  console.log(name);
};

console.log('module 1');

// 接口暴露方法一：
module.exports = {
  say: sayName
};

// 接口暴露方法二：
exports.say = sayName;

// 错误！
exports = {
  say: sayName
};
```

main.js：

```js
// 在哪个文件中使用便在哪里引入
const m1 = require('./m1');
m1.say();

// 运行结果：
module 1	// 导入时会自动运行导入的文件
gp19
```

假如有 a.js b.js c.js 三个文件，b.js 导入了 a.js，c.js 需要使用 b.js 中共享的部分，那么在 c.js 中直接导入 b.js 即可，不用导入 a.js，因为导入 b.js 的时候 b.js 会自动执行，而 b.js 内导入的 a.js 也便会被间接自动执行了。

Node.js 有许多功能各式各样的自带模块和第三方模块，对于自带模块我们直接导入使用即可，对于第三方模块我们下载后导入使用即可，而对于业务代码或者自制模块，我们则需要自己实现模块代码并导出再导入使用。

> Node.js 默认使用的是 CommonJS 模块化规范，但是目前新版本的 Node.js 也支持切换为 ES6 模块化写法！

## 1.4 Npm&Yarn

npm（“Node 包管理器”）是 JavaScript 运行时 Node.js 的默认程序包管理器。

npm 由两个主要部分组成:

- 用于发布和下载程序包的 CLI（命令行界面）工具
- 托管 JavaScript 程序包的 [在线存储库](https://www.npmjs.com/)

安装 node.js 后，npm 便自动安装了。

### 1.4.1 npm的使用

```
npm init	// 初始化项目，创建 package.json（记录了项目信息以及各种依赖包信息）
npm install 包名 [–g] （uninstall、update）	// 安装、卸载、更新包（-g 参数，全局安装、卸载、更新）
npm install 包名 --save-dev (uninstall、update)
简单来说：
使用命令 --save 或者说不写命令 --save，都会把信息记录到 dependencies 中；
dependencies 中记录的都是项目在运行时需要的文件；
使用命令 --save-dev 则会把信息记录到 devDependencies 中；
devDependencies 中记录的是项目在开发过程中需要使用的一些文件，在项目最终运行时是不需要的；
也就是说我们开发完成后，最终的项目中是不需要这些文件的；
————————————————————————————————————————————————————————————————————————————————————————————————
npm list -g 		    // 不加 -g，列举当前目录下的安装包)
npm info 包名			   // 查看包详细信息
npm install md5@2		// 安装指定版本的 md5 包（这里直接指定大版本）
npm outdated			// 检查包是否已经过时

npm install				// 根据 package.json 中记录的包依赖信息，下载还原所有包依赖

// dependencies 注意点：
"dependencies": {    "md5": "^2.1.0"  }  	^ 表示 如果 直接 npm install 将会安装 md5 2.*.* 最新版本
"dependencies": {    "md5": "~2.1.0"  }  	~ 表示 如果 直接 npm install 将会安装 md5 2.1.* 最新版本
"dependencies": {    "md5": "*"  }  	 	* 表示 如果 直接 npm install 将会安装 md5 最新版本
```

### 1.4.2 全局安装nrm 

> NRM（npm registry manager）是 npm 的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换。

`手动切换方法： npm config set registry https://registry.npm.taobao.org`

**安装 nrm**

在命令行执行命令 `npm install -g nrm`，全局安装 nrm。

**使用 nrm**

执行命令 `nrm ls` 查看可选的源。 其中，带 `*` 的是当前使用的源，上面的输出表明当前源是官方源。

**切换 nrm**

如果要切换到 taobao 源，执行命令 `nrm use taobao`。

**测试速度**

你还可以通过 `nrm test` 测试相应源的响应时间。

扩展：

> ![image-20220210114017616](mark-img/image-20220210114017616.png)

 ```bash
 npm install -g cnpm --registry=https://registry.npmmirror.com
 ```

### 1.4.3 yarn使用

> yarn 是 npm 的一个第三方升级版，不过目前的 npm 也比较好用了，哪个用的习惯用哪个即可。

```shell
npm install -g yarn
```

```js
对比 npm：
	速度超快: Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。
    同时利用并行下载以最大化资源利用率，因此安装速度更快。
    超级安全: 在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。

开始新项目
	yarn init 
添加依赖包
	yarn add [package] 
	yarn add [package]@[version]
	yarn add [package] -g
	yarn add [package] --dev 
升级依赖包
	 yarn upgrade [package]@[version] 
移除依赖包
	 yarn remove [package]
	 
安装项目的全部依赖
	 yarn install 
```

## 1.5 ES模块化写法

Node.js 默认是 CommonJS 模块化写法，不过新版的 Node.js 也支持 ES 的模块化写法了，切换方法是在 package.js 中设置 `"type": "module"`，注意：package.json 中默认是没有 "type" 属性的，其 "type" 属性默认为 "commonjs"。

### 1.5.1 内置模块

#### 01 http模块

> 要使用 HTTP 服务器和客户端，则必须 `require('http')`。

```js
const http = require('http');

http.createServer((req, res) => {
    // req 接受浏览器的请求参数
    // res 响应内容
    res.write('hello');
    res.write('world');
    // end 表示这一轮响应结束（必须要有）
    res.end();
    // res.end('这里也可以写东西，在结束前响应的内容');
    // write() end() 内不能直接放 js 的数据类型比如，数组、对象，而应把这些数据类型用字符串格式
}).listen(80, () => {
    console.log('server start');
});
```

```js
const http = require('http');

http.createServer((req, res) => {
    // 可以直接返回 HTML 页面，浏览器拿到后会自动解析
    res.write(`
    <!DOCTYPE html>
    <html>
    	<head>
    		<title>Node.js</title>
    	</head>
    	<body>
    		<h1>Hello Node</h1>
    	</body>
    </html>
    `);
    res.end();
}).listen(80, () => {
    console.log('server start');
});
```

```js
const http = require('http');

http.createServer((req, res) => {
    // 实际上，浏览器收到 html 字符串后，会默认当作 "Content-Type": "text/html"
    // 这里我们在响应头中直接指定类型
    // 往后的响应中，推荐都指定类型，防止意外发生
    // 这里我们也指定了状态码 200 表示成功，404 表示资源不存在，500 表示服务器错误
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
    <!DOCTYPE html>
    <html>
    	<head>
    		<title>Node.js</title>
    	</head>
    	<body>
    		<h1>Hello Node</h1>
    	</body>
    </html>
    `);
    res.end();
}).listen(80, () => {
    console.log('server start');
}); 
```

```js
const http = require('http');

http.createServer((req, res) => {
    // charset=utf-8 可以解决中文乱码
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    res.write(`
    <!DOCTYPE html>
    <html>
    	<head>
    		<title>Node.js</title>
    	</head>
    	<body>
    		<h1>你好 Node！</h1>
    	</body>
    </html>
    `);
    res.end();
}).listen(80, () => {
    console.log('server start');
}); 
```

```js
const http = require('http');

http.createServer((req, res) => {
    console.log(req.url);
    // 解决浏览器默认会请求图标的问题
    if (req.url === '/favicon.ico') {
        return;
    }
    // 当我们请求服务器时，req.url 包含我们所请求的地址，所以我们可以这样做：
    res.writeHead(renderStatus(req.url), { "Content-Type": "text/html; charset=utf-8" });
    res.write(renderHTML(req.url));
    res.end();
}).listen(80, () => {
    console.log('server start');
});

function renderStatus(url) {
    const arr = ['/home', '/list'];
    return arr.includes(url) ? 200 : 404;
}

function renderHTML(url) {
    switch (url) {
        case '/home':
            return `
            <!DOCTYPE html>
    		<html>
    			<head>
    				<title>Home</title>
    			</head>
    			<body>
    				<h1>你好 Home！</h1>
    			</body>
   			</html>
            `;
        case '/list':
            return `
            <!DOCTYPE html>
    		<html>
    			<head>
    				<title>List</title>
    			</head>
    			<body>
    				<h1>你好 List！</h1>
    			</body>
   			</html>
            `;
        default:
            return `
            <!DOCTYPE html>
    		<html>
    			<head>
    				<title>404</title>
    			</head>
    			<body>
    				<h1>404 Not Found</h1>
    			</body>
   			</html>
            `;
    }
}

/*
上面的代码都集中在一个文件中，较为复杂，我们可以模块化拆分
将 renderStatus(url) 和 renderHTML(url) 单独放在文件中，在通过导出和导入使用
*/
```

从上面这个例子，我们就实现了用 Node.js 打造一个 Web 服务器（根据请求路径返回页面），API 接口服务器（根据请求路径返回数据）的目的，虽然比较原始和繁琐，不能接受额外的参数（需要对 req.url 进行处理，url 模块可以方便的处理），还会遇到跨域问题（需要其他模块的支持），但至少五脏俱全，之后我们还会学习相关的 Web 框架，更优雅、更强大的来实现服务器。

```js
// http 模块的另外一种写法
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
  // {"data":"Hello World!"}
});

server.listen(80);
```

```js
// http 模块的另外一种写法
const http = require('http');

const server = http.createServer();

// 监听请求事件
server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
  // {"data":"Hello World!"}
});

server.listen(80);
```

#### 02 url模块

**02.1 parse**

> 新版的 Node.js 已经弃用该方法，新的解决方案请参考文档。

url 模块中的 parse 方法可以用于解析 url 地址：

```js
const url = require('url');
const urlString = 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110';
const parsedStr = url.parse(urlString);
console.log(parsedStr);
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=110',
  search: '?id=8&name=mouse',
  query: 'id=8&name=mouse',
  pathname: '/ad/index.html',
  path: '/ad/index.html?id=8&name=mouse',
  href: 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
}
*/
```

```js
const url = require('url');
const urlString = 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110';
// 加上 true 之后， query 自动转为 js 对象
const parsedStr = url.parse(urlString, true);
console.log(parsedStr);
console.log(parsedStr.query);
console.log(parsedStr.query.id);
console.log(parsedStr.query.name);
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=110',
  search: '?id=8&name=mouse',
  query: [Object: null prototype] { id: '8', name: 'mouse' },
  pathname: '/ad/index.html',
  path: '/ad/index.html?id=8&name=mouse',
  href: 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
}
[Object: null prototype] { id: '8', name: 'mouse' }
8
mouse
*/
```

**02.2 format**

> 新版的 Node.js 已经弃用该方法，新的解决方案请参考文档。

url 模块中的 format 方法可以用于将 Url 对象合成为 url 地址：

```js
const url = require('url');
const urlObject = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=110',
  search: '?id=8&name=mouse',
  query: { id: '8', name: 'mouse' },
  pathname: '/ad/index.html',
  path: '/ad/index.html?id=8&name=mouse'
}
const parsedObj = url.format(urlObject);
console.log(parsedObj);
// https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110
```

**02.3 resolve**

> 新版的 Node.js 已经弃用该方法，新的解决方案请参考文档。

url 模块中的 resolve方法可以用于拼接 url。

```js
const url = require('url');
// 注意最后加/，不加/的区别
var a = url.resolve('/one/two/three', 'four');  
var b = url.resolve('http://example.com/', '/one');
var c = url.resolve('http://example.com/one', '/two');
console.log(a + "，" + b + "，" + c); 
// /one/two/four，http://example.com/one，http://example.com/two
```

> 由于之前的方法已经不推荐使用，下面介绍目前最新的解决方案。

```js
const urlString = 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110';
const myUrl = new URL(urlString, 'https://www.baidu.com:443');
console.log(myUrl);
/*
URL {
  href: 'https://www.baidu.com/ad/index.html?id=8&name=mouse#tag=110',
  origin: 'https://www.baidu.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.baidu.com',
  hostname: 'www.baidu.com',
  port: '',
  pathname: '/ad/index.html',
  search: '?id=8&name=mouse',
  searchParams: URLSearchParams { 'id' => '8', 'name' => 'mouse' },
  hash: '#tag=110'
}
*/
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '8', 'name' => 'mouse' }
console.log(myUrl.searchParams.get('id'));
// 8
console.log(myUrl.searchParams.get('name'));
// mouse
for (let obj of myUrl.searchParams) {
    console.log(obj);
}
/*
[ 'id', '8' ]
[ 'name', 'mouse' ]
*/
for (let [key, value] of myUrl.searchParams) {
    console.log(key, value);
}
/*
id 8
name mouse
*/

// 还有更多的方法请查看文档……
```

#### 03 querystring模块

**03.1 parse**

```js
const querystring = require('querystring');
var qs = 'x=3&y=4';
var parsed = querystring.parse(qs);
console.log(parsed);
// [Object: null prototype] { x: '3', y: '4' }
console.log(parsed.x);
// 3
```

**03.2 stringify**

```js
const querystring = require('querystring');
var qo = {
  x: 3,
  y: 4
};
var parsed = querystring.stringify(qo);
console.log(parsed);
// x=3&y=4
```

**03.3 escape/unescape**

<img src="mark-img/image-20220213211406894.png" alt="image-20220213211406894" style="zoom:67%;" />

<img src="mark-img/image-20220213211423142.png" alt="image-20220213211423142" style="zoom:67%;" />

在 querystring 中也有 escape 这个功能：

```js
const querystring = require('querystring');
var str = 'id=3&city=北京&url=https://www.baidu.com';
var escaped = querystring.escape(str);
console.log(escaped);
// id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com
```

```js
const querystring = require('querystring');
var str = 'id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com';
var unescaped = querystring.unescape(str);
console.log(unescaped);
// id=3&city=北京&url=https://www.baidu.com
```

#### 04 http模块补充

**04.1 接口：jsonp**

利用 JSONP 解决前端跨域问题：

```js
// 前端代码
var oscript = document.createElement('script');
// JSONP 利用 script 标签没有跨域限制的条件
oscript.src = 'http://127.0.0.1:8080/api/user?callback=test'
document.body.appendChild(oscript);
function test(obj) {
    console.log(obj);
}

// 服务器返回函数的调用：test({"name": "jerry"})
// 前端自动执行预留好的函数：test()

// JSONP 只支持 GET 请求而不支持 POST 请求！
// 没有关于 JSONP 调用的错误处理，一但回调函数调用失败，浏览器会以静默失败的方式处理 
```

```js
const http = require('http');
const url = require('url');

const app = http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true);

  switch (urlObj.pathname) {
    case '/api/user':
      res.end(`${urlObj.query.callback}({"name": "jerry"})`);
      break;
    default:
      res.end('404.');
      break;
  }
});

app.listen(8080, () => {
  console.log('localhost:8080');
});
```

**04.2 跨域：CORS**

浏览器会自动进行 CORS 通信，只要后端实现了 CORS，就实现了跨院。

服务端设置 Access-Control-Allow-Origin 就可以开启 CORS，该属性表示哪些域名可以访问资源，如果设置 * 则表示所有的网站都可以访问资源。

```js
var http = require("http");
var url = require("url");

http.createServer((req,res) => {
    var urlobj = url.parse(req.url,true);

    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        // cors 头
        "access-control-allow-origin":"*"
    });

    switch(urlobj.pathname){
        case "/api/aaa":
            res.end(`${JSON.stringify({
                name:"kerwin",
                age:100
            })}`);
            break;
        default:
            res.end("404");
    };
}).listen(3000);
```
**04.3 模拟get**

Node.js 也可以模拟 get 以及 post，使其成为一个客户端向其他服务器请求数据，这样的特性使得 Node.js 也通常用来开发中间层（服务器网关：对接集群中的各台服务器），同时还解决了跨域问题，因为跨域只发生在浏览器与服务器之间，而服务器与服务器之间是没有跨域的。

```js
var http = require("http");
// 由于猫眼的 API 是 https 协议的，所以我们要引入 https 模块
var https = require("https");
var url = require("url");

http.createServer((req,res) => {
    var urlobj = url.parse(req.url, true);

    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "access-control-allow-origin":"*"
    });

    switch(urlobj.pathname){
        case "/api/aaa":
            // 客户端去猫眼要数据
            httpget((data) => {
                res.end(data);
            });
            break;
        default:
            res.end("404");
    }
}).listen(3000);


function httpget(cb){
    var data = "";
    https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4`,(res) => {
        // 由于请求的数据比较多，是一段一段返回的，res.on('data') 表示每当有段数据返回就触发该函数
        res.on("data",(chunk) => {
            data += chunk;
        });

        // res.on('end') 表示全部数据端都接收到后触发该函数
        res.on("end",() => {
            console.log(data);
            // 触发回调函数
            cb(data);
        });
    });
}

// 1. 浏览器请求 http://127.0.0.1:3000/api/aaa
// 2. Node.js 服务器接收到浏览器请求后模拟 get 请求去间接请求猫眼的 API
// 3. 由于 Node.js 服务器与猫眼服务器之间没有跨域限制，所以 Node.js 服务器成功拿到了数据
// 4. Node.js 服务器再将数据响应给浏览器
```

**04.4 模拟post：服务器提交（攻击）**

```js
const https = require('https');
const querystring = require('querystring');

const postData = querystring.stringify({
  province: '上海',
  city: '上海',
  district: '宝山区',
  address: '同济支路199号智慧七立方3号楼2-4层',
  latitude: 43.0,
  longitude: 160.0,
  message: '求购一条小鱼',
  contact: '13666666',
  type: 'sell',
  time: 1571217561
});

const options = {
  protocol: 'https:',
  hostname: 'ik9hkddr.qcloud.la',
  method: 'POST',
  port: 443,
  path: '/index.php/trade/add_item',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

function doPost() {
  let data;

  let req = https.request(options, (res) => {
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(data);
    });
  });

  req.write(postData);
  req.end();
};

// 不间断的密集请求，就会造成服务器攻击
// setInterval(() => {
//   doPost();
// }, 1000);
```

**04.5 爬虫**

我们通过 Node.js 直接获取 HTML 网页，再对 HTML 进行语义分析，便可实现爬虫，批量拿到我们想要的数据。

> 当网站不是前后端分离的架构时，前端页面数据就不是通过 Ajax 这样的方式请求得到的，后端也不会提供 API 接口，这些页面一般是后端直接生成的，所以我们想要批量拿到数据，就只能依靠爬虫。

```js
var http = require("http");
var https = require("https");
var url = require("url");
var cheerio = require("cheerio");

http.createServer((req,res) => {
    var urlobj = url.parse(req.url, true);

    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "access-control-allow-origin":"*"
    });

    switch(urlobj.pathname){
        case "/api/aaa":
            httpget((data) => {
                res.end(spider(data));
            });
            break;
        default:
            res.end("404");
    }
}).listen(3000);

function httpget(cb){
    var data = "";
    https.get(`https://i.maoyan.com/`,(res) => {
        res.on("data",(chunk) => {
            data += chunk;
        });

        res.on("end",() => {
            // data 就是 HTML 页面
            console.log(data);
            cb(data);
        });
    });
}

function spider(data) {
    // 我们可以使用正则表达式解析 HTML 获取我们想要的数据，但是太过于复杂，我们一般借助第三方库进行解析
    // cheerio 模块可以帮助我们将 HTML 页面快速的转为 DOM 节点，方便我们进行页面的解析
    // npm i cheerio 
    let $ = cheerio.load(data);
    
    let $moviewlist = $(".column.content");
    let movies = [];

    $moviewlist.each((index,value)=>{
        movies.push({
            title:$(value).find(".title").text(),
            grade:$(value).find(".grade").text(),
            actor:$(value).find(".actor").text()
        })
    })

    console.log(movies);
    return JSON.stringify(movies);
}

/*
[
[
     {
          "title": "阿凡达：水之道",
          "grade": "9.1",
          "actor": "主演:萨姆·沃辛顿,佐伊·索尔达娜,西格妮·韦弗"
     },
     {
          "title": "绝望主夫",
          "grade": "9.0",
          "actor": "主演:常远,李嘉琦,王成思"
     },
     {
          "title": "想见你",
          "grade": "9.0",
          "actor": "主演:柯佳嬿,许光汉,施柏宇"
     },
     {
          "title": "航海王：红发歌姬",
          "grade": "9.1",
          "actor": "主演:田中真弓,中井和哉,冈村明美"
     },
     {
          "title": "穿靴子的猫2",
          "grade": "9.2",
          "actor": "主演:安东尼奥·班德拉斯,萨尔玛·海耶克,哈维·吉兰"
     },
     {
          "title": "名侦探柯南：万圣节的新娘",
          "grade": "9.1",
          "actor": "主演:高山南,山崎和佳奈,小山力也"
     },
     {
          "title": "西游记之七十二变",
          "grade": "",
          "actor": "主演:刘婧荦,刘琮,图特哈蒙"
     },
     {
          "title": "龙珠超：超级人造人",
          "grade": "",
          "actor": "主演:野泽雅子,古川登志夫,久川绫"
     },
     {
          "title": "女生规则",
          "grade": "",
          "actor": "主演:阿米达普·巴强,塔丝·潘努,基尔蒂·库哈里"
     },
     {
          "title": "放牛班的春天",
          "grade": "9.6",
          "actor": "主演:热拉尔·朱诺,弗朗西斯·贝尔兰德,凯德·麦拉德"
     },
     {
          "title": "扫黑行动",
          "grade": "7.9",
          "actor": "主演:周一围,秦海璐,张智霖"
     },
     {
          "title": "唬胆特工",
          "grade": "8.5",
          "actor": "主演:凯文·哈特,伍迪·哈里森,凯莉·库柯"
     }
]
*/
```

#### 05 event模块

Node.js 提供的一种用来实现 “消息订阅与发布” 的模块。

在一些场景中，比起回调函数来它非常的方便！

```js
const EventEmitter = require('events');

const event = new EventEmitter();

// 订阅消息
event.on('play', (movie) => {
    console.log(movie);
});

// 发布消息
event.emit('play', '我和我的祖国');
event.emit('play', '中国机长');
```

改造我们之前的爬虫案例：

```js
var http = require("http");
var https = require("https");
var url = require("url");
var cheerio = require("cheerio");
const EventEmitter = require("events");

var event = null;
http.createServer((req,res) => {
    var urlobj = url.parse(req.url, true);

    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "access-control-allow-origin":"*"
    });

    switch(urlobj.pathname){
        case "/api/aaa":
            // 一定要在这里 new EventEmitter()，而不是最外层!
            // 因为一但在最外层 new EventEmitter()，那么每次执行到此处，event 身上都会重复订阅新的 cb 消息，一但某处发布了 cb 消息，将会触发多个 cb 消息中的回调函数！
            event = new EventEmitter();
            event.on("cb", (data) => {
                res.end(data);
            });
            httpget();
            break;
        default:
            res.end("404");
    }
}).listen(3000);

function httpget(){
    var data = "";
    https.get(`https://i.maoyan.com/`, (res) => {
        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            // data 就是 HTML 页面
            console.log(data);
            event.emit("cb");
        });
    });
}

function spider(data) {
    // 我们可以使用正则表达式解析 HTML 获取我们想要的数据，但是太过于复杂，我们一般借助第三方库进行解析
    // cheerio 模块可以帮助我们将 HTML 页面快速的转为 DOM 节点，方便我们进行页面的解析
    // npm i cheerio 
    let $ = cheerio.load(data);
    
    let $moviewlist = $(".column.content");
    let movies = [];

    $moviewlist.each((index,value)=>{
        movies.push({
            title:$(value).find(".title").text(),
            grade:$(value).find(".grade").text(),
            actor:$(value).find(".actor").text()
        })
    })

    console.log(movies);
    return JSON.stringify(movies);
}
```

#### 06 fs文件操作模块

```js
const fs = require('fs');

// 创建文件夹
fs.mkdir('./avatar', err => {
    // console.log(err)
    if (err && err.code === 'EEXIST') {
        console.log('目录已经存在');
    }
});

// 文件夹改名
fs.rename('./avatar', './avatar2', err => {
    if (err && err.code === 'ENOENT') {
        console.log('目录不存在');
    }
});

// 删除文件夹
fs.rmdir('./avatar', err => {
    if (err && err.code === 'ENOENT') {
        console.log('目录不存在');
    }
    if (err && err.code === 'ENOTEMPTY') {
        console.log('目录不为空');
    }
});

// 写内容到文件里（没有文件会自动创建文件，有文件会直接覆盖，没有目录会报错）
fs.writeFile('./avatar/a.txt', '你好', err => {
    console.log(err);
});

// 给文件追加内容
fs.appendFile('./avatar/a.txt', '\nhello world', err => {
    console.log(err);
});

// 读取文件内容
fs.readFile('./avatar/a.txt', (err, data) => {
    if (!err) {
        // 默认 data 是一个 buffer 对象
        console.log(data);
        // 将 buffer 对象转为 utf-8 字符串
        console.log(data.toString('utf-8'));
    }
});

// 可以直接指定读取编码
fs.readFile('./avatar/a.txt', 'utf-8', (err, data) => {
    if (!err) {
        console.log(data);
    }
});

// 删除文件
fs.unlink('./avatar/a.txt', err => {
    console.log(err);
});

// 批量写文件
for (var i = 0; i < 10; i++) {
  fs.writeFile(`./logs/log-${i}.txt`, `log-${i}`, (err) => {
    console.log('done.')
  })
}

// 读取目录信息
fs.readdir('./avatar', (err, data) => {
    if (!err) {
        // data 是一个数组，元素是目录中的各文件或目录的名称
        console.log(data);
    }
});

// 读取目标的信息（类型，创建时间，大小……）
fs.stat('./avatar/b.txt', (err, data) => {
    // 是文件吗？
    console.log(data.isFile());
    // 是目录吗？
    console.log(data.isDirectory());
    // 大小是多少？单位：bytes
    console.log(data.size());
});

// 清空目录后删除目录（rmdir 只能删除空目录）
fs.readdir('./avatar', (err, data) => {
    // 清空目录（目录中只有文件的情况，如果目录中还有目录，那要利用递归来解决）
    data.forEach(item => {
        fs.unlink(`./avatar/${item}`, err => {
            console.log(err);
        });
    });

    // 会报错！因为 fs.unlink 是异步进行的！并不会阻塞，在目录还未清空完时，就会执行 fs.rmdir 那么就会报错！
    // 解决方法：方法1：利用 Promise 来封装，方法2：用计数器来记录 unlink 的成功次数……，方法3：将 unlink 改为 unlinkSync（同步模式，会阻塞等待结果返回再执行）
    fs.rmdir('./avatar', err => {
        console.log(err);
    });
});

// 同步读取文件（在原有 API 的基础上加上 Sync，其他 API 同理）
// 会阻塞等待结果返回再向后执行代码
// 错误处理需要用 try catch
try {
    const content = fs.readFileSync('./avatar/c.txt', 'utf-8');
    console.log(content);
    console.log('-----');
} catch(err) {
    console.log(err.message);
}

// 异步读取文件：方法一（回调函数）
fs.readFile('./avatar/c.txt', 'utf-8', (err, content) => {
    console.log(content);
    console.log('-----');
});
console.log('#####');

// 异步读取文件：方法二（Promise）
const fs = require("fs").promises;

fs.readFile('./avatar/c.txt', 'utf-8').then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

// 清空目录后删除目录
fs.readdir('./avatar').then(async data => {
    let arr = [];
    data.forEach(item => {
        arr.push(fs.unlink(`./avatar/${item}`));
    });
    await Promise.all(arr);
    await fs.rmdir('./avatar');
});

// 清空目录后删除目录
fs.readdir('./avatar').then(async data => {
    await Promise.all(data.map(item => fs.unlink(`./avatar/${item}`)));
    await fs.rmdir('./avatar');
});
```

在 `fs` 模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢？

由于 Node 环境执行的 JavaScript 代码是服务器端代码，所以绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步，否则同步代码在执行时期，服务器将停止响应，因为 JavaScript 只有一个执行线程。

服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。

#### 07 stream流模块

`stream` 是 Node.js 提供的又一个仅在服务区端可用的模块，目的是支持 “流” 这种数据结构。

什么是流？流是一种抽象的数据结构。想象水流，当在水管中流动时，就可以从某个地方（例如自来水厂）源源不断地到达另一个地方（比如你家的洗手池）。我们也可以把数据看成是数据流，比如你敲键盘的时候，就可以把每个字符依次连起来，看成字符流。这个流是从键盘输入到应用程序，实际上它还对应着一个名字：标准输入流。

如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字：标准输出流。

流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像 Array 那样随机定位。

有些流用来读取数据，比如从文件读取数据时，可以打开一个文件流，然后从文件流中不断地读取数据。

有些流用来写入数据，比如向文件写入数据时，只需要把数据不断地往文件流中写进去就可以了。

在 Node.js 中，流也是一个对象，我们只需要响应流的事件就可以了：`data` 事件表示流的数据已经可以读取了，`end` 事件表示这个流已经到末尾了，没有数据可以读取了，`error` 事件表示出错了。

> 为什么需要流？
>
> 假如我们用 fs 读写一个特别大的文件，那么读写过程中这个文件的全部内容会直接被加载到 Node.js 的可用内存中，造成内存使用量的急剧升高！所以我们在操作大文件时需要用流的形式来操作！同样的对于 http 模块，如果我们接收请求或响应请求时为一个大文件，那么我们也需要使用流的形式来操作！

```js
var fs = require('fs');

// 打开一个流：
var rs = fs.createReadStream('sample.txt', 'utf-8');

// data 事件：只要有数据流传递就会触发
// data 事件可能会被触发多次！（小文件可能一次就完了，大文件就需要多次）
// chunk 是每次收到的数据流片段
rs.on('data', chunk => {
    console.log('chunk' + chunk);
});

// end 事件：数据流全部传递完成触发
// end 事件只会被触发一次！
rs.on('end', () => {
    console.log('END');
});

// error 事件：发生错误时触发
rs.on('error', err => {
    console.log('ERROR: ' + err);
});
```

要注意，`data` 事件可能会有多次，每次传递的 `chunk` 是流的一部分数据。

要以流的形式写入文件，只需要不断调用 `write()` 方法，最后以 `end()` 结束：

```js
var fs = require('fs');

var ws = fs.createWriteStream('output.txt', 'utf-8');
// 每次 write 都是以一个流片段写入
ws.write('使用Stream写入文本数据...\n');
ws.write('END');
ws.end();
```

`pipe` 就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。

pipe：管道、传送

一个 `Readable` 流和一个 `Writable` 流串起来后，所有的数据自动从 `Readable` 流进入 `Writable` 流，这种操作叫 `pipe`。

我们用 pipe 就可以实现诸如：一边读数据流，一边把数据流写入文件的操作！从而以更高性能的实现大文件的复制！

并且 `pipe()` 方法会自己协调读取与写入的流速差问题，完毕之后还会自动关闭！

在 Node.js 中，`Readable` 流有一个 `pipe()` 方法，就是用来干这件事的。

让我们用 `pipe()` 把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序：

```js
const fs = require('fs');

const readstream = fs.createReadStream('./1.txt');
const writestream = fs.createWriteStream('./2.txt');

// 输出 ————pipe————> 输入
readstream.pipe(writestream);
```

#### 08 zlib模块

浏览器请求服务器的前端静态资源，服务器就会先读取静态资源再响应给浏览器，但是如果资源比较大，那么网络发送的延时就会比较高，我们可以对资源进行压缩发送，浏览器拿到后再进行解压就会比较快！压缩算法比较多，我们认识一个比较出名的 zlib

<img src="mark-img/image-20220407105916114.png" alt="image-20220407105916114" style="zoom:50%;" />

```js
const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readstream = fs.createReadStream('./note.txt');
const writestream = fs.createWriteStream('./note2.txt');

readstream.pipe(gzip).pipe(writestream);
```

静态资源案例
```js
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
http.createServer((req, res) => {
    // 实际上，req 和 res 都是流对象！
    // 读取一个静态文件
    const readStream = fs.createReadStream('./index.js');
    res.writeHead(200, {
        // 指定内存类型和字符集编码
        'Content-Type': 'application/x-javascript;charset=utf-8',
        // 指定内容编码
        'Content-Encoding': 'gzip'
    });
    // 先把流交给 gzip 压缩，随即交给 res
    readStream.pipe(gzip).pipe(res);
}).listen(8080, () => {
    console.log('server start');
});
```

#### 09 crypto模块

crypto 模块的目的是为了提供通用的加密和哈希算法。用纯 JavaScript 代码实现这些功能不是不可能，但速度会非常慢。Node.js 用 C/C++ 实现这些算法后，通过 cypto 这个模块暴露为 JavaScript 接口，这样用起来方便，运行速度也快。

MD5 是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示：

```js
const crypto = require('crypto');

const hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex')); 
```

`update()` 方法默认字符串编码为 `UTF-8`，也可以传入 Buffer。

如果要计算 SHA1，只需要把 `'md5'` 改成 `'sha1'`，就可以得到 SHA1 的结果 `1f32b9c9932c02227819a4151feed43e131aca40`。

Hmac 算法也是一种哈希算法，它可以利用 MD5 或 SHA1 等哈希算法。不同的是，Hmac 还需要一个密钥：

```js
const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex')); // 80f7e22570...
```

只要密钥发生了变化，那么同样的输入数据也会得到不同的签名，因此，可以把 Hmac 理解为用随机数“增强”的哈希算法。

AES 是一种常用的对称加密算法，加解密都用同一个密钥。crypto 模块提供了 AES 支持，但是需要自己封装好函数，便于使用：

```js
const crypto = require("crypto");

function encrypt (key, iv, data) {
    let decipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    // decipher.setAutoPadding(true);
    return decipher.update(data, 'binary', 'hex') + decipher.final('hex');
}

function decrypt (key, iv, crypted) {
     crypted = Buffer.from(crypted, 'hex').toString('binary');
     let decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
     return decipher.update(crypted, 'binary', 'utf8') + decipher.final('utf8');
}
key,iv必须是16个字节

```

可以看出，加密后的字符串通过解密又得到了原始内容。

### 1.5.2 路由

#### 01 基础

```js
var fs = require("fs");
var path = require("path");

function render(res, path) {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
    res.write(fs.readFileSync(path, "utf8"));
    res.end();
}

const route = {
    "/login": (req, res) => {
        render(res, "./static/login.html");
    },

    "/home": (req, res) => {
        render(res, "./static/home.html");
    },
    "/404": (req, res) => {
        res.writeHead(404, { "Content-Type": "text/html;charset=utf8" });
        res.write(fs.readFileSync("./static/404.html", "utf8"));
    }
};
```

#### 02 获取参数

get请求

```js
"/api/login":(req,res)=>{
    const myURL = new URL(req.url, 'http://127.0.0.1:3000');
    console.log(myURL.searchParams.get("username"));
    render(res,`{ok:1}`);
}
```

post请求

```js
"/api/login": (req, res) => {
        var post = '';
        // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        req.on('data', function (chunk) {
            post += chunk;
        });

        // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        req.on('end', function () {
            post = JSON.parse(post);
            render(res, `{ok:1}`);
        });
};
```

#### 03 静态资源处理

```js
function readStaticFile(req, res) {
    const myURL = new URL(req.url, 'http://127.0.0.1:3000');
    var filePathname = path.join(__dirname, "/static", myURL.pathname);

    if (fs.existsSync(filePathname)) {
        // console.log(1111);
        res.writeHead(200, { "Content-Type": `${mime.getType(myURL.pathname.split(".")[1])};charset=utf8` });
        res.write(fs.readFileSync(filePathname, "utf8"));
        res.end();
        return true;
    } else {
        return false;
    }
}
```

# 二、Express

> https://www.expressjs.com.cn/

基于 Node.js 平台，快速、开放、极简的 web 开发框架。

##### 1.特色

<img src="mark-img/image-20220411103139587.png" alt="image-20220411103139587" style="zoom: 50%;float:left;" />

##### 2.安装

```js
$ npm install express --save
```

##### 3.路由

路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。

路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成，它的结构如下： app.METHOD(path, [callback...], callback)， app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法， path 是服务器上的路径， callback 是当路由匹配时要执行的函数。

下面是一个基本的路由示例：

```js
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
```

路由路径和请求方法一起定义了请求的端点，它可以是字符串、字符串模式或者正则表达式。

```js
// 匹配根路径的请求
app.get('/', function (req, res) {
  res.send('root');
});

// 匹配 /about 路径的请求
app.get('/about', function (req, res) {
  res.send('about');
});

// 匹配 /random.text 路径的请求
app.get('/random.text', function (req, res) {
  res.send('random.text');
});
```

使用字符串模式的路由路径示例：

```js
// 匹配 acd 和 abcd
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

// 匹配 /ab/******
app.get('/ab/:id', function(req, res) {
  res.send('aaaaaaa');
});

// 匹配 abcd、abbcd、abbbcd等
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});

// 匹配 /abe 和 /abcde
app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});
```

使用正则表达式的路由路径示例：

```js
// 匹配任何路径中含有 a 的路径：
app.get(/a/, function(req, res) {
  res.send('/a/');
});

// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});
```

可以为请求处理提供多个回调函数，其行为类似 中间件。唯一的区别是这些回调函数有可能调用 next('route') 方法而略过其他路由回调函数。可以利用该机制为路由定义前提条件，如果在现有路径上继续执行没有意义，则可将控制权交给剩下的路径。

```js
app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});
```

使用多个回调函数处理路由（记得指定 next 对象）：

```js
app.get('/example/b', function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});
```

使用回调函数数组处理路由：

```js
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
};

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
};

var cb2 = function (req, res) {
  res.send('Hello from C!');
};

app.get('/example/c', [cb0, cb1, cb2]);
```

混合使用函数和函数数组处理路由：

```js
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
};

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
};

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});
```

##### 4.中间件

Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。

中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

中间件的功能包括：

- 执行任何代码。
- 修改请求和响应对象。
- 终结请求-响应循环。
- 调用堆栈中的下一个中间件。

如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。

Express 应用可使用如下几种中间件：

- 应用级中间件
- 路由级中间件
- 错误处理中间件
- 内置中间件
- 第三方中间件

使用可选则挂载路径，可在应用级别或路由级别装载中间件。另外，你还可以同时装在一系列中间件函数，从而在一个挂载点上创建一个子中间件栈。

###### （1）应用级中间件

应用级中间件绑定到 app 对象 使用 app.use() 和 app.METHOD()， 其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写。例如：

```js
var app = express()

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

```

###### （2）路由级中间件

路由级中间件和应用级中间件一样，只是它绑定的对象为 express.Router()。

```js
var router = express.Router()
```

```js
var app = express()
var router = express.Router()

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息
router.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
router.get('/user/:id', function (req, res, next) {
  // 如果 user id 为 0, 跳到下一个路由
  if (req.params.id == 0) next('route')
  // 负责将控制权交给栈中下一个中间件
  else next() //
}, function (req, res, next) {
  // 渲染常规页面
  res.render('regular')
})

// 处理 /user/:id， 渲染一个特殊页面
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('special')
})

// 将路由挂载至应用
app.use('/', router)
```

###### （3）错误处理中间件

错误处理中间件和其他中间件定义类似，只是要使用 4 个参数，而不是 3 个，其签名如下： (err, req, res, next)。

```js
app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

###### （4）内置的中间件

express.static 是 Express 唯一内置的中间件。它基于 serve-static，负责在 Express 应用中提托管静态资源。每个应用可有多个静态目录。

```js
app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(express.static('files'))
```

###### （5）第三方中间件

安装所需功能的 node 模块，并在应用中加载，可以在应用级加载，也可以在路由级加载。

下面的例子安装并加载了一个解析 cookie 的中间件： cookie-parser

```
$ npm install cookie-parser
```

```js
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

// 加载用于解析 cookie 的中间件
app.use(cookieParser())
```



##### 5. 获取请求参数

get

```js
req.query
```

post

```js
app.use(express.urlencoded({extended:false}))
app.use(express.json())
req.body
```



##### 6.利用 Express 托管静态文件

通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。

将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。例如，假设在 public 目录放置了图片、CSS 和 JavaScript 文件，你就可以：

```js
app.use(express.static('public'))
```

现在，public 目录下面的文件就可以访问了。

```js
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```

> 所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。

如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：

```js
app.use(express.static('public'))
app.use(express.static('files'))
```

访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。

如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：

```
app.use('/static', express.static('public'))
```

现在，你就可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。

```js
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
```

##### 7.服务端渲染（模板引擎）

<img src="mark-img/image-20220411104609389.png" alt="image-20220411104609389" style="zoom:50%;float:left" />

```js
npm i ejs
```

需要在应用中进行如下设置才能让 Express 渲染模板文件：

- views, 放模板文件的目录，比如： app.set('views', './views')
- view engine, 模板引擎，比如： app.set('view engine', 'ejs')

<img src="mark-img/image-20220411104652068.png" alt="image-20220411104652068" style="zoom:50%;float:left" />

# 三、MongoDB

##### 1.关系型与非关系型数据库

<img src="mark-img/image-20220413085332378.png" alt="image-20220413085332378" style="zoom:67%;float:left" />

<img src="mark-img/image-20220413090707891.png" alt="image-20220413090707891" style="zoom: 67%;float:left;" />

![image-20220413090406721](mark-img/image-20220413090406721.png)



![image-20220413090614205](mark-img/image-20220413090614205.png)

##### 2.安装数据库

https://docs.mongodb.com/manual/administration/install-community/

##### 3.启动数据库

###### （1）windows

```s
mongod --dbpath d:/data/db
mongo
```

###### （2）mac

```s
mongod --config /usr/local/etc/mongod.conf
mongo
```

##### 4.在命令行中操作数据库

<img src="mark-img/image-20220413090814836.png" alt="image-20220413090814836" style="zoom:50%;float:left;" />

<img src="mark-img/image-20220413090825381.png" alt="image-20220413090825381" style="zoom:50%;float:left" />

<img src="mark-img/image-20220413090837613.png" alt="image-20220413090837613" style="zoom:50%;float:left" />

<img src="mark-img/image-20220413090858199.png" alt="image-20220413090858199" style="zoom:50%;float:left" />

<img src="mark-img/image-20220413090907539.png" alt="image-20220413090907539" style="zoom:50%;float:left" />

<img src="mark-img/image-20220413090916971.png" alt="image-20220413090916971" style="zoom:50%;float:left" />

##### 5.可视化工具进行增删改查

Robomongo Robo3T adminMongo

![image-20220413091031852](mark-img/image-20220413091031852.png)

##### 6.nodejs连接操作数据库

连接数据库

```js
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/company-system")
```

创建模型

```js
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserType = {
    username:String,
    password:String,
    gender:Number,
    introduction:String,
    avatar:String,
    role:Number
}
const UserModel = mongoose.model("user",new Schema(UserType))
module.exports  = UserModel 
```

增加数据

```js
UserModel.create({
    introduction,username,gender,avatar,password,role
})
```

查询数据

```js
UserModel.find({username:"kerwin"},["username","role","introduction","password"]).sort({createTime:-1}).skip(10).limit(10)
```

更新数据

```js
UserModel.updateOne({
    _id
},{
    introduction,username,gender,avatar
})
```

删除数据

```js
UserModel.deleteOne({_id})
```

# 四、接口规范与业务分层

##### 1.接口规范

<img src="mark-img/image-20220414094020921.png" alt="image-20220414094020921" style="zoom: 67%; float: left;" />

<img src="mark-img/image-20220414094043782.png" alt="image-20220414094043782" style="zoom: 67%;float:left" />

##### 2.业务分层

![image-20220414094653807](mark-img/image-20220414094653807.png)

# 五、登录鉴权

##### 1. Cookie&Session

「HTTP 无状态」**我们知道，HTTP 是无状态的。也就是说，HTTP 请求方和响应方间无法维护状态，都是一次性的，它不知道前后的请求都发生了什么。但有的场景下，我们需要维护状态。最典型的，一个用户登陆微博，发布、关注、评论，都应是在登录后的用户状态下的。**「标记」那解决办法是什么呢？![image-20220414095345868](mark-img/image-20220414095345868.png)



```js
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();


app.use(
  session({
    secret: "this is session", // 服务器生成 session 的签名
    resave: true, 
    saveUninitialized: true, //强制将为初始化的 session 存储
    cookie: {
      maxAge: 1000 * 60 * 10,// 过期时间
      secure: false, // 为 true 时候表示只有 https 协议才能访问cookie
    },
    rolling: true, //为 true 表示 超时前刷新，cookie 会重新计时； 为 false 表示在超时前刷新多少次，都是按照第一次刷新开始计时。
    store: MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1:27017/kerwin_session',
      ttl: 1000 * 60 * 10 // 过期时间
  }),

  })
);

app.use((req,res,next)=>{
  if(req.url==="/login"){
    next()
    return;
  }
  if(req.session.user){
      req.session.garbage = Date();
      next();
  }else{
   	  res.redirect("/login")   
  }
})

```



##### 2. JSON Web Token (JWT) 

###### （1）介绍

![image-20220415082822828](mark-img/image-20220415082822828.png)

我为什么要保存这可恶的session呢， 只让每个客户端去保存该多好？

![image-20220415083015066](mark-img/image-20220415083015066.png)

当然， 如果一个人的token 被别人偷走了， 那我也没办法， 我也会认为小偷就是合法用户， 这其实和一个人的session id 被别人偷走是一样的。

这样一来， 我就不保存session id 了， 我只是生成token , 然后验证token ， 我用我的CPU计算时间获取了我的session 存储空间 ！

解除了session id这个负担， 可以说是无事一身轻， 我的机器集群现在可以轻松地做水平扩展， 用户访问量增大， 直接加机器就行。 这种无状态的感觉实在是太好了！

缺点：

> 1. 占带宽，正常情况下要比 session_id 更大，需要消耗更多流量，挤占更多带宽，假如你的网站每月有 10 万次的浏览器，就意味着要多开销几十兆的流量。听起来并不多，但日积月累也是不小一笔开销。实际上，许多人会在 JWT 中存储的信息会更多；
> 2. 无法在服务端注销，那么久很难解决劫持问题；
> 3. 性能问题，JWT 的卖点之一就是加密签名，由于这个特性，接收方得以验证 JWT 是否有效且被信任。对于有着严格性能要求的 Web 应用，这并不理想，尤其对于单线程环境。

注意：

> CSRF攻击的原因是浏览器会自动带上cookie，而不会带上token；
>
> 以CSRF攻击为例：
>
> cookie：用户点击了链接，cookie未失效，导致发起请求后后端以为是用户正常操作，于是进行扣款操作；
> token：用户点击链接，由于浏览器不会自动带上token，所以即使发了请求，后端的token验证不会通过，所以不会进行扣款操作；

###### （2）实现

```js
//jsonwebtoken 封装
const jsonwebtoken = require("jsonwebtoken")
const secret = "kerwin"
const JWT = {
    generate(value,exprires){
        return jsonwebtoken.sign(value,secret,{expiresIn:exprires})
    },
    verify(token){
        try{
            return jsonwebtoken.verify(token,secret)
        }catch(e){
            return false
        }
    }
}

module.exports = JWT
```



```js
//node中间件校验
app.use((req,res,next)=>{
  // 如果token有效 ,next() 
  // 如果token过期了, 返回401错误
  if(req.url==="/login"){
    next()
    return;
  }

  const token = req.headers["authorization"].split(" ")[1]
  if(token){
    var payload = JWT.verify(token)
    // console.log(payload)
    if(payload){
      const newToken = JWT.generate({
        _id:payload._id,
        username:payload.username
      },"1d")
      res.header("Authorization",newToken)
      next()
    }else{
      res.status(401).send({errCode:"-1",errorInfo:"token过期"})
    }
  }
})

```

```js
 //生成token
const token = JWT.generate({
    _id: result[0]._id,
    username: result[0].username
}, "1d")

res.header("Authorization", token)
```

```js
//前端拦截
/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import axios from 'axios'
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`

    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {

    const {authorization } = response.headers
    authorization && localStorage.setItem("token",authorization)
    return response;
  }, function (error) {

    const {status} = error.response
    if(status===401){
        localStorage.removeItem("token")
        window.location.href="/login"
    }
    return Promise.reject(error);
  });

```

# 六、文件上传管理

Multer 是一个 node.js 中间件，用于处理 `multipart/form-data` 类型的表单数据，它主要用于上传文件。

**注意**: Multer 不会处理任何非 `multipart/form-data` 类型的表单数据。

```
npm install --save multer
```

```js
//前后端分离-前端

const params = new FormData()
params.append('kerwinfile', file.file)
params.append('username', this.username)
const config = {
	headers: {
		"Content-Type":"multipart/form-data"
	}
}
http.post('/api/upload', params, config).then(res => {
	this.imgpath = 'http://localhost:3000' + res.data
})	
```

Multer 会添加一个 `body` 对象 以及 `file` 或 `files` 对象 到 express 的 `request` 对象中。 `body` 对象包含表单的文本域信息，`file` 或 `files` 对象包含对象表单上传的文件信息。

```js

//前后端分离-后端
router.post('/upload', upload.single('kerwinfile'),function(req, res, next) {
	console.log(req.file)
});
```

# 七、Koa2

<img src="mark-img/image-20220417075653414.png" alt="image-20220417075653414" style="zoom:50%;" />

##### 1.简介

koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。

##### 2. 快速开始

###### 2.1 安装koa2

```s
# 初始化package.json
npm init

# 安装koa2 
npm install koa
```

###### 2.2 hello world 代码

```js
const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2' //json数据
})

app.listen(3000)

```

![image-20220417092053231](mark-img/image-20220417092053231.png)

###### 2.3 启动demo

```s
node index.js
```

##### 3. koa vs express

通常都会说 Koa 是洋葱模型，这重点在于中间件的设计。但是按照上面的分析，会发现 Express 也是类似的，不同的是Express 中间件机制使用了 Callback 实现，这样如果出现异步则可能会使你在执行顺序上感到困惑，因此如果我们想做接口耗时统计、错误处理 Koa 的这种中间件模式处理起来更方便些。最后一点响应机制也很重要，Koa 不是立即响应，是整个中间件处理完成在最外层进行了响应，而 Express 则是立即响应。

###### 3.1更轻量

- koa 不提供内置的中间件；
- koa 不提供路由，而是把路由这个库分离出来了（koa/router）

###### 3.2 Context对象

koa增加了一个Context的对象，作为这次请求的上下文对象（在koa2中作为中间件的第一个参数传入）。同时Context上也挂载了Request和Response两个对象。和Express类似，这两个对象都提供了大量的便捷方法辅助开发, 这样的话对于在保存一些公有的参数的话变得更加合情合理

###### 3.3 异步流程控制

​    express采用callback来处理异步，    koa v1采用generator，koa v2 采用async/await。

​	generator和async/await使用同步的写法来处理异步，明显好于callback和promise，

###### 3.4 中间件模型

​	express基于connect中间件，线性模型；

​     koa中间件采用洋葱模型（对于每个中间件，在完成了一些事情后，可以非常优雅的将控制权传递给下一个中间件，并能够等待它完成，当后续的中间件完成处理后，控制权又回到了自己）

<img src="mark-img/image-20220417083817823.png" alt="image-20220417083817823" style="zoom:50%;float:left;" />

   ![image-20220417085913567](mark-img/image-20220417085913567.png)

```js
//同步
var express = require("express")
var app = express()

app.use((req,res,next)=>{
    console.log(1)
    next()
    console.log(4)
    res.send("hello")
})
app.use(()=>{
    console.log(3)
})

app.listen(3000)
//异步
var express = require("express")
var app = express()

app.use(async (req,res,next)=>{
    console.log(1)
    await next()
    console.log(4)
    res.send("hello")
})
app.use(async ()=>{
    console.log(2)
    await delay(1)
    console.log(3)
})

function delay(time){
 return new Promise((resolve,reject)=>{
    setTimeout(resolve,1000)
 })
}
```

```js
//同步
var koa = require("koa")
var app = new koa()

app.use((ctx,next)=>{
    console.log(1)
    next()
    console.log(4)
    ctx.body="hello"
})
app.use(()=>{
    console.log(3)
})

app.listen(3000)

//异步
var koa = require("koa")
var app = new koa()

app.use(async (ctx,next)=>{
    console.log(1)
    await next()
    console.log(4)
    ctx.body="hello"
}) 
app.use(async ()=>{
    console.log(2)
    await delay(1)
    console.log(3)
})

function delay(time){
 return new Promise((resolve,reject)=>{
    setTimeout(resolve,1000)
 })
}

app.listen(3000)
```

 ##### 4. 路由

###### 4.1基本用发

```js
var Koa = require("koa")
var Router = require("koa-router")

var app = new Koa()
var router = new Router()

router.post("/list",(ctx)=>{
    ctx.body=["111","222","333"]
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
```



###### 4.2 router.allowedMethods作用

![image-20220417102845079](mark-img/image-20220417102845079.png)

###### 4.3 请求方式

Koa-router 请求方式： `get` 、 `put` 、 `post` 、 `patch` 、 `delete` 、 `del`  ，而使用方法就是 `router.方式()`  ，比如 `router.get()` 和 `router.post()` 。而 `router.all()` 会匹配所有的请求方法。

```js
var Koa = require("koa")
var Router = require("koa-router")

var app = new Koa()
var router = new Router()

router.get("/user",(ctx)=>{
    ctx.body=["aaa","bbb","ccc"]
})
.put("/user/:id",(ctx)=>{
    ctx.body={ok:1,info:"user update"}
})
.post("/user",(ctx)=>{
    ctx.body={ok:1,info:"user post"}
})
.del("/user/:id",(ctx)=>{
    ctx.body={ok:1,info:"user del"}
})


app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
```

###### 4.4 拆分路由

list.js

```js
var Router = require("koa-router")
var router = new Router()
router.get("/",(ctx)=>{
    ctx.body=["111","222","333"]
})
.put("/:id",(ctx)=>{
    ctx.body={ok:1,info:"list update"}
})
.post("/",(ctx)=>{
    ctx.body={ok:1,info:"list post"}
})
.del("/:id",(ctx)=>{
    ctx.body={ok:1,info:"list del"}
})
module.exports = router
```

index.js

```js
var Router = require("koa-router")
var router = new Router()
var user = require("./user")
var list = require("./list")
router.use('/user', user.routes(), user.allowedMethods())
router.use('/list', list.routes(), list.allowedMethods())

module.exports = router
```

entry入口

```js
var Koa = require("koa")
var router = require("./router/index")

var app = new Koa()
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
```



###### 4.5 路由前缀

```js
router.prefix('/api')
```



###### 4.6 路由重定向

```js
router.get("/home",(ctx)=>{
    ctx.body="home页面"
})
//写法1 
router.redirect('/', '/home');
//写法2
router.get("/",(ctx)=>{
    ctx.redirect("/home")
})
```

##### 5.  静态资源

```js
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

app.use(static(
  path.join( __dirname,  "public")
))


app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})

```



##### 6.  获取请求参数

###### 6.1get参数

在koa中，获取GET请求数据源头是koa中request对象中的query方法或querystring方法，query返回是格式化好的参数对象，querystring返回的是请求字符串，由于ctx对request的API有直接引用的方式，所以获取GET请求数据有两个途径。

- 是从上下文中直接获取 请求对象ctx.query，返回如 { a:1, b:2 } 请求字符串 ctx.querystring，返回如 a=1&b=2
- 是从上下文的request对象中获取 请求对象ctx.request.query，返回如 { a:1, b:2 } 请求字符串 ctx.request.querystring，返回如 a=1&b=2

###### 6.2post参数

对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中

```js
const bodyParser = require('koa-bodyparser')

// 使用ctx.body解析中间件
app.use(bodyParser())

```



##### 7. ejs模板

###### 7.1 安装模块

```js
# 安装koa模板使用中间件
npm install --save koa-views

# 安装ejs模板引擎
npm install --save ejs

```

###### 7.2 使用模板引擎

**文件目录**

```
├── package.json
├── index.js
└── view
    └── index.ejs
```

**./index.js文件**

```js
const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title,
  })
})

app.listen(3000)
```

**./view/index.ejs 模板**

```html
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1><%= title %></h1>
    <p>EJS Welcome to <%= title %></p>
</body>
</html>
```



##### 8. cookie&session

###### 8.1 cookie

koa提供了从上下文直接读取、写入cookie的方法

- ctx.cookies.get(name, [options]) 读取上下文请求中的cookie
- ctx.cookies.set(name, value, [options]) 在上下文中写入cookie

###### 8.2 session

- koa-session-minimal 适用于koa2 的session中间件，提供存储介质的读写接口 。

   ```js
   const session = require('koa-session-minimal')
   app.use(session({
       key: 'SESSION_ID',
       cookie: {
           maxAge:1000*60
       }
   }))
   ```

   

   ```js
   app.use(async (ctx, next) => {
       //排除login相关的路由和接口
       if (ctx.url.includes("login")) {
           await next()
           return
       }
   
       if (ctx.session.user) {
           //重新设置以下sesssion
           ctx.session.mydate = Date.now()
           await next()
       } else {
   
           ctx.redirect("/login")
       }
   })
   ```
##### 9. JWT

   ```js
app.use(async(ctx, next) => {
    //排除login相关的路由和接口
    if (ctx.url.includes("login")) {
        await next()
        return
    }
    const token = ctx.headers["authorization"]?.split(" ")[1]
    // console.log(req.headers["authorization"])
    if(token){
        const payload=  JWT.verify(token)
        if(payload){
            //重新计算token过期时间
            const newToken = JWT.generate({
                _id:payload._id,
                username:payload.username
            },"10s")

            ctx.set("Authorization",newToken)
            await next()
        }else{
            ctx.status = 401
            ctx.body = {errCode:-1,errInfo:"token过期"}
        }
    }else{
        await next()
    }
})
   ```

#####    

##### 10.上传文件

> https://www.npmjs.com/package/@koa/multer

```js
npm install --save @koa/multer multer
```

```js
const multer = require('@koa/multer');
const upload = multer({ dest: 'public/uploads/' })

router.post("/",upload.single('avatar'),
(ctx,next)=>{
    console.log(ctx.request.body,ctx.file)
    ctx.body={
        ok:1,
        info:"add user success"
    }
})

```

##### 11.操作MongoDB

```js
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/kerwin_project")
//插入集合和数据,数据库kerwin_project会自动创建
```



```js
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
```

# 八、MySQL

##### 1.介绍

付费的商用数据库：

- Oracle，典型的高富帅；
- SQL Server，微软自家产品，Windows定制专款；
- DB2，IBM的产品，听起来挺高端；
- Sybase，曾经跟微软是好基友，后来关系破裂，现在家境惨淡。

这些数据库都是不开源而且付费的，最大的好处是花了钱出了问题可以找厂家解决，不过在Web的世界里，常常需要部署成千上万的数据库服务器，当然不能把大把大把的银子扔给厂家，所以，无论是Google、Facebook，还是国内的BAT，无一例外都选择了免费的开源数据库：

- MySQL，大家都在用，一般错不了；
- PostgreSQL，学术气息有点重，其实挺不错，但知名度没有MySQL高；
- sqlite，嵌入式数据库，适合桌面和移动应用。

作为一个JavaScript全栈工程师，选择哪个免费数据库呢？当然是MySQL。因为MySQL普及率最高，出了错，可以很容易找到解决方法。而且，围绕MySQL有一大堆监控和运维的工具，安装和使用很方便。

![image-20220420083146539](mark-img/image-20220420083146539.png)



##### 2.与非关系数据库区别

关系型和非关系型数据库的主要差异是数据存储的方式。关系型数据天然就是表格式的，因此存储在数据表的行和列中。数据表可以彼此关联协作存储，也很容易提取数据。

与其相反，非关系型数据不适合存储在数据表的行和列中，而是大块组合在一起。非关系型数据通常存储在数据集中，就像文档、键值对或者图结构。你的数据及其特性是选择数据存储和提取方式的首要影响因素。

**关系型数据库最典型的数据结构是表，由二维表及其之间的联系所组成的一个数据组织**
优点：
1、易于维护：都是使用表结构，格式一致；
2、使用方便：SQL语言通用，可用于复杂查询；
3、复杂操作：支持SQL，可用于一个表以及多个表之间非常复杂的查询。
缺点：
1、读写性能比较差，尤其是海量数据的高效率读写；
2、固定的表结构，灵活度稍欠；
3、高并发读写需求，传统关系型数据库来说，硬盘I/O是一个很大的瓶颈。

**非关系型数据库严格上不是一种数据库，应该是一种数据结构化存储方法的集合，可以是文档或者键值对等。**

优点：

1、格式灵活：存储数据的格式可以是key,value形式、文档形式、图片形式等等，文档形式、图片形式等等，使用灵活，应用场景广泛，而关系型数据库则只支持基础类型。
2、速度快：nosql可以使用硬盘或者随机存储器作为载体，而关系型数据库只能使用硬盘；
3、高扩展性；
4、成本低：nosql数据库部署简单，基本都是开源软件。

缺点：

1、不提供sql支持；
2、无事务处理；
3、数据结构相对复杂，复杂查询方面稍欠。

##### 3.sql语句

![image-20220420092527846](mark-img/image-20220420092527846.png)

插入：

```sql
INSERT INTO `students`(`id`, `name`, `score`, `gender`) VALUES (null,'kerwin',100,1)
//可以不设置id,create_time
```
更新：
```sql
UPDATE `students` SET `name`='tiechui',`score`=20,`gender`=0 WHERE id=2;
```
删除：
```sql
DELETE FROM `students` WHERE id=2;
```
查询：
```sql
查所有的数据所有的字段
SELECT * FROM `students` WHERE 1;

查所有的数据某个字段
SELECT `id`, `name`, `score`, `gender` FROM `students` WHERE 1;

条件查询
SELECT * FROM `students` WHERE score>=80;
SELECT * FROM `students` where score>=80 AND gender=1

模糊查询
SELECT * FROM `students` where name like '%k%'

排序
SELECT id, name, gender, score FROM students ORDER BY score;
SELECT id, name, gender, score FROM students ORDER BY score DESC;

分页查询
SELECT id, name, gender, score FROM students LIMIT 50 OFFSET 0

记录条数
SELECT COUNT(*) FROM students;
SELECT COUNT(*) kerwinnum FROM students;

多表查询

SELECT * FROM students, classes;（这种多表查询又称笛卡尔查询，使用笛卡尔查询时要非常小心，由于结果集是目标表的行数乘积，对两个各自有100行记录的表进行笛卡尔查询将返回1万条记录，对两个各自有1万行记录的表进行笛卡尔查询将返回1亿条记录）
SELECT
    students.id sid,
    students.name,
    students.gender,
    students.score,
    classes.id cid,
    classes.name cname
FROM students, classes; （要使用表名.列名这样的方式来引用列和设置别名，这样就避免了结果集的列名重复问题。）

SELECT
    s.id sid,
    s.name,
    s.gender,
    s.score,
    c.id cid,
    c.name cname
FROM students s, classes c; （SQL还允许给表设置一个别名）


联表查询
SELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score
FROM students s
INNER JOIN classes c
ON s.class_id = c.id; （连接查询对多个表进行JOIN运算，简单地说，就是先确定一个主表作为结果集，然后，把其他表的行有选择性地“连接”在主表结果集上。）


```

![image-20220420090841742](mark-img/image-20220420090841742.png)

注意：

> 1. InnoDB 支持事务，MyISAM 不支持事务。这是 MySQL 将默认存储引擎从 MyISAM 变成 InnoDB 的重要原因之一；
> 2. InnoDB 支持外键，而 MyISAM 不支持。对一个包含外键的 InnoDB 表转为 MYISAM 会失败；

**外键约束**

CASCADE
在父表上update/delete记录时，同步update/delete掉子表的匹配记录 

SET NULL
在父表上update/delete记录时，将子表上匹配记录的列设为null (要注意子表的外键列不能为not null)  

NO ACTION
如果子表中有匹配的记录,则不允许对父表对应候选键进行update/delete操作 

RESTRICT
同no action, 都是立即检查外键约束

##### 4.nodejs 操作数据库

```js
const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const port = 9000

app.get('/',async (req, res) => {
  const config = getDBConfig()
  const promisePool = mysql2.createPool(config).promise();
  // console.log(promisePool)
      let user = await promisePool.query('select * from students');

      console.log(user)
      if (user[0].length) {
          //存在用户
          res.send(user[0])
      } else {
          //不存在
          res.send( {
              code: -2,
              msg: 'user not exsit',
          })
      }      
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


function getDBConfig() {
  return {
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '',
    database: 'kerwin_test',
    connectionLimit: 1 //创建一个连接池
  }
}
```

```js
查询：
promisePool.query('select * from users');

插入：
promisePool.query('INSERT INTO `users`(`id`,`name`,`age`, `password`) VALUES (?,?,?,?)',[null,"kerwin",100,"123456"]);

更新：
promisePool.query(`UPDATE users SET name = ? ,age=? WHERE id = ?`,["xiaoming2",20,1])

删除：
promisePool.query(`delete from users where id=?`,[1])

```

# 九、Socket编程

##### 1.websocket介绍

<img src="mark-img/image-20220421084242097.png" alt="image-20220421084242097" style="zoom:50%;" />

**应用场景：**

- 弹幕

- 媒体聊天

- 协同编辑

- 基于位置的应用

- 体育实况更新

- 股票基金报价实时更新



WebSocket并不是全新的协议，而是利用了HTTP协议来建立连接。我们来看看WebSocket连接是如何创建的。

首先，WebSocket连接必须由浏览器发起，因为请求协议是一个标准的HTTP请求，格式如下：

```js
GET ws://localhost:3000/ws/chat HTTP/1.1
Host: localhost
Upgrade: websocket
Connection: Upgrade
Origin: http://localhost:3000
Sec-WebSocket-Key: client-random-string
Sec-WebSocket-Version: 13
```

该请求和普通的HTTP请求有几点不同：

1. GET请求的地址不是类似`/path/`，而是以`ws://`开头的地址；
2. 请求头`Upgrade: websocket`和`Connection: Upgrade`表示这个连接将要被转换为WebSocket连接；
3. `Sec-WebSocket-Key`是用于标识这个连接，并非用于加密数据；
4. `Sec-WebSocket-Version`指定了WebSocket的协议版本。

随后，服务器如果接受该请求，就会返回如下响应：

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: server-random-string
```

该响应代码`101`表示本次连接的HTTP协议即将被更改，更改后的协议就是`Upgrade: websocket`指定的WebSocket协议。

版本号和子协议规定了双方能理解的数据格式，以及是否支持压缩等等。如果仅使用WebSocket的API，就不需要关心这些。

现在，一个WebSocket连接就建立成功，浏览器和服务器就可以随时主动发送消息给对方。消息有两种，一种是文本，一种是二进制数据。通常，我们可以发送JSON格式的文本，这样，在浏览器处理起来就十分容易。

为什么WebSocket连接可以实现全双工通信而HTTP连接不行呢？实际上HTTP协议是建立在TCP协议之上的，TCP协议本身就实现了全双工通信，但是HTTP协议的请求－应答机制限制了全双工通信。WebSocket连接建立以后，其实只是简单规定了一下：接下来，咱们通信就不使用HTTP协议了，直接互相发数据吧。

安全的WebSocket连接机制和HTTPS类似。首先，浏览器用`wss://xxx`创建WebSocket连接时，会先通过HTTPS创建安全的连接，然后，该HTTPS连接升级为WebSocket连接，底层通信走的仍然是安全的SSL/TLS协议。

**浏览器支持**

很显然，要支持WebSocket通信，浏览器得支持这个协议，这样才能发出`ws://xxx`的请求。目前，支持WebSocket的主流浏览器如下：

- Chrome
- Firefox
- IE >= 10
- Sarafi >= 6
- Android >= 4.4
- iOS >= 8

**服务器支持**

由于WebSocket是一个协议，服务器具体怎么实现，取决于所用编程语言和框架本身。Node.js本身支持的协议包括TCP协议和HTTP协议，要支持WebSocket协议，需要对Node.js提供的HTTPServer做额外的开发。已经有若干基于Node.js的稳定可靠的WebSocket实现，我们直接用npm安装使用即可。

##### 2.ws模块

服务器：

```js
const  WebSocket = require("ws")
WebSocketServer = WebSocket.WebSocketServer
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });

    });

    ws.send('欢迎加入聊天室');
});
```

客户端：

```js
var ws = new WebSocket("ws://localhost:8080")
ws.onopen = ()=>{
    console.log("open")
}
ws.onmessage = (evt)=>{
    console.log(evt.data)
}
```

授权验证：



```js
//前端
var ws = new WebSocket(`ws://localhost:8080?token=${localStorage.getItem("token")}`)
ws.onopen = () => {
      console.log("open")
      ws.send(JSON.stringify({
        type: WebSocketType.GroupList
      }))
    }
ws.onmessage = (evt) => {
    console.log(evt.data)
}
//后端
const WebSocket = require("ws");
const JWT = require('../util/JWT');
WebSocketServer = WebSocket.WebSocketServer
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws, req) {
  const myURL = new URL(req.url, 'http://127.0.0.1:3000');
  const payload = JWT.verify(myURL.searchParams.get("token"))
  if (payload) {
    ws.user = payload
    ws.send(createMessage(WebSocketType.GroupChat, ws.user, "欢迎来到聊天室"))

    sendBroadList() //发送好友列表
  } else {
    ws.send(createMessage(WebSocketType.Error, null, "token过期"))
  }
  // console.log(3333,url)
  ws.on('message', function message(data, isBinary) {
    const messageObj = JSON.parse(data)
    switch (messageObj.type) {
      case WebSocketType.GroupList:
        ws.send(createMessage(WebSocketType.GroupList, ws.user, JSON.stringify(Array.from(wss.clients).map(item => item.user))))
        break;
      case WebSocketType.GroupChat:
        wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(createMessage(WebSocketType.GroupChat, ws.user, messageObj.data));
          }
        });
        break;
      case WebSocketType.SingleChat:
        wss.clients.forEach(function each(client) {
          if (client.user.username === messageObj.to && client.readyState === WebSocket.OPEN) {
            client.send(createMessage(WebSocketType.SingleChat, ws.user, messageObj.data));
          }
        });
        break;
    }

    ws.on("close",function(){
      //删除当前用户
      wss.clients.delete(ws.user)
      sendBroadList() //发送好用列表
    })
  });

});
const WebSocketType = {
  Error: 0, //错误
  GroupList: 1,//群列表
  GroupChat: 2,//群聊
  SingleChat: 3//私聊
}
function createMessage(type, user, data) {
  return JSON.stringify({
    type: type,
    user: user,
    data: data
  });
}

function sendBroadList(){
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(createMessage(WebSocketType.GroupList, client.user, JSON.stringify(Array.from(wss.clients).map(item => item.user))))
    }
  });
}
```



##### 3.socket.io模块

服务端：

```js
const io = require('socket.io')(server);
io.on('connection', (socket) => {

  const payload = JWT.verify(socket.handshake.query.token)
  if (payload) {
    socket.user = payload
    socket.emit(WebSocketType.GroupChat, createMessage(socket.user, "欢迎来到聊天室"))
    sendBroadList() //发送好友列表
  } else {
    socket.emit(WebSocketType.Error, createMessage(null, "token过期"))
  }


  socket.on(WebSocketType.GroupList, () => {
    socket.emit(WebSocketType.GroupList, createMessage(null, Array.from(io.sockets.sockets).map(item => item[1].user).filter(item=>item)));
  })

  socket.on(WebSocketType.GroupChat, (messageObj) => {
    socket.broadcast.emit(WebSocketType.GroupChat, createMessage(socket.user, messageObj.data));
  })

  socket.on(WebSocketType.SingleChat, (messageObj) => {
    Array.from(io.sockets.sockets).forEach(function (socket) {
      if (socket[1].user.username === messageObj.to) {
        socket[1].emit(WebSocketType.SingleChat, createMessage(socket[1].user, messageObj.data));
      }
    })
  })

  socket.on('disconnect', reason => {
     
     sendBroadList() //发送好用列表
  });

});

function sendBroadList() {
  io.sockets.emit(WebSocketType.GroupList, createMessage(null, Array.from(io.sockets.sockets).map(item => item[1].user).filter(item=>item)))
}
//最后filter，是因为 有可能存在null的值

```

客户端：

```js
const WebSocketType = {
    Error: 0, //错误
    GroupList: 1, //群列表
    GroupChat: 2, //群聊
    SingleChat: 3 //私聊
}


const socket = io(`ws://localhost:3000?token=${localStorage.getItem("token")}`);
socket.on("connect",()=>{
	socket.emit(WebSocketType.GroupList)
})
socket.on(WebSocketType.GroupList, (messageObj) => {
    select.innerHTML = ""
    select.innerHTML = `<option value="all">all</option>` + messageObj.data.map(item => `
    <option value="${item.username}">${item.username}</option>`).join("")
})

socket.on(WebSocketType.GroupChat, (msg) => {
	console.log(msg)
})

socket.on(WebSocketType.SingleChat, (msg) => {
	console.log(msg)
})

socket.on(WebSocketType.Error, (msg) => {
    localStorage.removeItem("token")
    location.href = "/login"
})

send.onclick = () => {
    if (select.value === "all") {
        socket.emit(WebSocketType.GroupChat,{
            data: text.value
        })
    } else {
        socket.emit(WebSocketType.SingleChat,{
            data: text.value,
            to:select.value
        })
    }
}
```

# 十、mocha

单元测试是用来对一个模块、一个函数或者一个类来进行正确性检验的测试工作。

比如对函数abs()，我们可以编写出以下几个测试用例：

输入正数，比如1、1.2、0.99，期待返回值与输入相同；

输入负数，比如-1、-1.2、-0.99，期待返回值与输入相反；

输入0，期待返回0；

输入非数值类型，比如null、[]、{}，期待抛出Error。

把上面的测试用例放到一个测试模块里，就是一个完整的单元测试。

如果单元测试通过，说明我们测试的这个函数能够正常工作。如果单元测试不通过，要么函数有bug，要么测试条件输入不正确，总之，需要修复使单元测试能够通过。

单元测试通过后有什么意义呢？如果我们对abs()函数代码做了修改，只需要再跑一遍单元测试，如果通过，说明我们的修改不会对abs()函数原有的行为造成影响，如果测试不通过，说明我们的修改与原有行为不一致，要么修改代码，要么修改测试。

这种以测试为驱动的开发模式最大的好处就是确保一个程序模块的行为符合我们设计的测试用例。在将来修改的时候，可以极大程度地保证该模块行为仍然是正确的。

mocha是JavaScript的一种单元测试框架，既可以在浏览器环境下运行，也可以在Node.js环境下运行。

使用mocha，我们就只需要专注于编写单元测试本身，然后，让mocha去自动运行所有的测试，并给出测试结果。

mocha的特点主要有：

1. 既可以测试简单的JavaScript函数，又可以测试异步代码，因为异步是JavaScript的特性之一；
2. 可以自动运行所有测试，也可以只运行特定的测试；
3. 可以支持before、after、beforeEach和afterEach来编写初始化代码。

##### 1.编写测试

```js
const assert = require('assert');
const sum = require('../test');
describe('#hello.js', () => {

    describe('#sum()', () => {
        it('sum() should return 0', () => {
            assert.strictEqual(sum(), 0);
        });

        it('sum(1) should return 1', () => {
            assert.strictEqual(sum(1), 1);
        });

        it('sum(1, 2) should return 3', () => {
            assert.strictEqual(sum(1, 2), 3);
        });

        it('sum(1, 2, 3) should return 6', () => {
            assert.strictEqual(sum(1, 2, 3), 6);
        });
    });
});
```



##### 2.chai断言库



![image-20220505113605440](mark-img/image-20220505113605440.png)

```js
var chai = require('chai')
var assert = chai.assert;

describe('assert Demo', function () {
    it('use assert lib', function () {
        var value = "hello";
        assert.typeOf(value, 'string')
        assert.equal(value, 'hello')
        assert.lengthOf(value, 5)
    })
})

```

```js
var chai = require('chai');
chai.should();

describe('should Demo', function(){
    it('use should lib', function () {
        var value = 'hello'
        value.should.exist.and.equal('hello').and.have.length(5).and.be.a('string')
        // value.should.be.a('string')
        // value.should.equal('hello')
        // value.should.not.equal('hello2')
        // value.should.have.length(5);
    })
});

```

```js
var chai = require('chai');
var expect = chai.expect;

describe('expect Demo', function() {
    it('use expect lib', function () {
        var value = 'hello'
        var number = 3

        expect(number).to.be.at.most(5)
        expect(number).to.be.at.least(3)
        expect(number).to.be.within(1, 4)

        expect(value).to.exist
        expect(value).to.be.a('string')
        expect(value).to.equal('hello')
        expect(value).to.not.equal('您好')
        expect(value).to.have.length(5)
    })
});

```



##### 3.异步测试

```js
var fs =require("fs").promises
var chai = require('chai');
var expect = chai.expect;
it('test async function',async function () {
    const data =await fs.readFile('./1.txt',"utf8");
    expect(data).to.equal('hello')
});
```



##### 4.http测试

```js
const request = require('supertest')
const app = require('../app');

describe('#test koa app', () => {
    let server = app.listen(3000);
    describe('#test server', () => {
        it('#test GET /', async () => {
            await request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200, '<h1>hello world</h1>');
        });

        after(function () {
            server.close()
        });
    });
});
```



##### 5.钩子函数

```js
describe('#hello.js', () => {
    describe('#sum()', () => {
        before(function () {
            console.log('before:');
        });

        after(function () {
            console.log('after.');
        });

        beforeEach(function () {
            console.log('  beforeEach:');
        });

        afterEach(function () {
            console.log('  afterEach.');
        });
    });
});
```

