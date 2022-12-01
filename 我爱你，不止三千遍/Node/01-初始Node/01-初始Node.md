# 初始 Node.js

> 原创内容，转载请注明出处！

# 一、思考

思考：为什么 JavaScript 可以在浏览器中被执行？

答：依靠 JavaScript 解析引擎

- Chrome：V8

- Firefox：OdinMonkey（奥丁猴）
- Safari：JSCore
- IE：Chakra（IE 已经淘汰，微软最新的 Edge 浏览器使用 V8）

> Chrome 浏览器的 V8 解析引擎是目前世界上性能最好的 JS 解析引擎！

---

思考：为什么 JavaScript 可以操作 DOM 和 BOM？

答：每个浏览器都内置了 DOM、BOM 相关的 API 接口函数，因此，浏览器中的 JavaScript 才能调用它们。

---

思考：浏览器中的 JavaScript 的运行环境是什么？

> 运行环境：代码正常运行所需的必要条件。

<img src="mark-img/image-20221130202600841.png" alt="image-20221130202600841" style="zoom:50%;" />

- V8 引擎负责解析和执行 JavaScript 代码
- 内置 API 是由运行环境提供的特殊接口，只能在所属的运行环境中被调用

---

思考：JavaScript 是否能做后端开发？

答：JavaScript 代码可以依靠 Node.js 运行环境进行后端开发。

# 二、Node.js简介

## 2.1 什么是Node.js？

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

> 注意：虽然 Chrome 浏览器以及 Node.js 都是基于 V8 引擎的，但是在浏览器中的 V8 是面向前端解析环境，而在 Node.js 中的 V8 是面向后端解析环境。

Node.js 的官网地址：https://nodejs.org/zh-cn/

## 2.2 Node.js中的JavaScript运行环境

<img src="mark-img/image-20221130203554992.png" alt="image-20221130203554992" style="zoom:50%;" />

- 浏览器是 JavaScript 的前端运行环境
- Node.js 是 JavaScript 的后端运行环境
- Node.js 中无法调用 DOM、BOM 等浏览器内置的 API

## 2.3 Node.js可以做什么？

Node.js 作为一个独立于浏览器的 JS 运行环境，仅仅提供了基础的功能和 API。然而，基于 Node.js 提供的这些基础，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了 Node.js，可以让前端程序员具备全栈开发能力：

- 基于 Express/Koa 框架，可以快速构建 Web 应用
- 基于 Electron 框架，可以构建跨平台的桌面应用
- 基于 restify 框架，可以快速构建 API 接口项目
- 读写和操作数据库、创建实用的命令行工具辅助前端开发……

## 2.4 Node.js怎么学

浏览器中的 JavaScript 学习路径：

JavaScript 基础语法 + 浏览器内置 API（DOM + BOM）+ 第三方库（jQuery、art-template 等）

Node.js 的学习路径：

JavaScript 基础语法 + Node.js 内置 API 模块（fs、path、http 等）+ 第三方 API 模块（express、mysql 等）

# 三、Node.js环境的安装

Node.js 官网：https://nodejs.org/zh-cn/

点击绿色按钮进行下载，下载后打开安装包，默认下一步安装。

<img src="mark-img/image-20221130205640710.png" alt="image-20221130205640710" style="zoom: 33%;" />

> 区分 LTS 版本和 Current 版本的不同
>
> - LTS 为长期稳定版，对于追求稳定性的企业级项目来说，推荐安装 LTS 版本的 Node.js
> - Current 为新特性尝鲜版，对于热衷于尝试新特性的用户来说，推荐安装 Current 版本的 Node.js。但是，Current 版本中可能存在隐藏的 Bug 或安全性漏洞，因此不推荐在企业级项目中使用 Current 版本的 Node.js

查看已安装的 Node.js 的版本号：终端中输入 `node -v`，如果命令能够成功识别就证明 Node.js 已经安装成功。

如果无法识别 `node` 命令，那么请在环境变量 **Path** 中添加 Node.js 安装包的根路径后再次尝试。

利用 Node.js 执行 JavaScript 脚本：

```javascript
// hello.js
console.log('Hello Node.js');
```

在 hello.js 文件所在路径下打开终端执行命令：`node hello.js`，控制台成功输出 **Hello Node.js** 即为成功。

> 如果`.js`文件不在终端所处的当前路径下，那么执行命令中需要带上文件路径：`node ..\code\hello.js`。

> 终端使用技巧：
>
> - 使用 `↑` 键，可以快速定位到上一次执行的命令
> - 使用 `tab` 键，能够快速补全路径
> - 使用 `esc` 键，能够快速清空当前已输入的命令（Linux、MacOS 中为：`ctrl + u`）
> - 输入 `cls` 命令，可以清空终端（Linux、MacOS 中为：`clear`）

Node.js 详细内容请查阅文档：

[Docs | Node.js (nodejs.org)](https://nodejs.org/zh-cn/docs/)

[Node.js 中文文档 | Node.js 中文网 (nodeapp.cn)](https://www.nodeapp.cn/)

