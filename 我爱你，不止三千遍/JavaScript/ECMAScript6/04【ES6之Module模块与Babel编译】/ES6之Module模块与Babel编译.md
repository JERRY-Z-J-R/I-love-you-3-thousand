# 【ES6之Module模块与Babel编译】

> 原创内容，转载请注明出处！

# 一、Module模块

## 1.1 初识Module

（1）什么是模块

模块：一个一个的局部作用域的代码块。

（2）什么是模块系统

模块系统：系统的解决了模块化一系列问题

1. 模块化的写法（之前我们用立即执行函数模拟模块化，ES6 则实现了针对模块化的语法）
2. 消除全局变量（模块中的变量都是局部的，不同模块之间不会相互干扰）
3. 管理加载顺序（之前我们将一个总的 JavaScript 程序分几个文件写，但在最终合并调用时，js 的引入需要满足前后依赖关系。比如：被引用的 js 文件就一定要在引用它的 js 文件之前加载）

## 1.2 Module的基本用法

> 注意：Module 要生效，必须在服务器环境下才能执行。
>
> 普通的 HTML、JS 是本地文件环境，以 file 地址开头，服务器则以 http 开头。
>
> 方法：VSCode 中使用 Live Server 拓展，WebStorm 默认就是服务器环境。

- 一个 JS 文件就是一个模块
- 用 import 关键字导入模块
- 用 export 关键字导出模块需要暴露的部分
- 在使用 script 标签加载的时候，需要加上 type="module" 

## 1.3 Module的导入导出

### 1.3.1 export default 导出和对应的 import 导入

（1）没有导出，是否可以导入？

```html
// 一个模块没有导出，也可以将其导入
// 被导入的代码都会执行一遍，并且同一个导入只执行一遍！
// index.html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Module</title>
</head>
<body>
<!-- script 标签需要加上 type="module" -->
<script type="module">
    import "./test.js";		// 浏览器控制台打印：test
    import "./test.js";		// 不执行
    import "./test.js";		// 不执行
    import "./test02.js";	// 不执行
    import "./test.js";		// 浏览器控制台打印：test02
    import "./test02.js";	// 不执行
</script>
</body>
</html>

// test.js
/*
console.log("test");
*/

// test02.js
/*
console.log("test02");
*/
```

（2）export default 导出和对应的 import 导入

一个模块中只能有一个 export default。

【module.js】

```javascript
const age = 18;
const sex = "male";

export default age;		// 通过 export default 导出（暴露）一个值
/*
export default sex;		// 报错！因为 export default 只能在一个文件中导出一次！！！
export default 24;				// 可以导出值
export default {};				// 可以导出对象
export default function(){};	 // 可以导出函数
export default class{};			 // 可以导出class
*/
```

【index.html】

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Module</title>
</head>
<body>
<!-- script 标签需要加上 type="module" -->
<script type="module">
    // import 之后跟一个模块的别名，推荐别名与导出时的名字相同，比如这里就用 age
    import age from "./module.js";
    console.log(age);	// 18
</script>
</body>
</html>
```

### 1.3.2 export 导出和对应的 import 导入

**（1）基本用法**

【module.js】

```javascript
/*
const age = 18;
export age;		// 报错
*/

// export 后面只能跟声明或语句！
export const age = 18;
```

【index.html】

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Module</title>
</head>
<body>
<!-- script 标签需要加上 type="module" -->
<script type="module">
    // import aaa from "./module.js";	// 报错！ 
    // export 导出的模块，在导入时不能随意取别名，名称必须与模块导出时相同！并且要使用解构赋值的形式！
    
    import {age} from "./module.js";	// 注意：名称不能随意取，一定要与模块相同
    console.log(age);	// 18;
</script>
</body>
</html>
```

注意：在用 export 导出时，也可以用解构赋值的形式！

【module.js】

```javascript
const age = 18;

export {age};
```

**（2）多个导入**

【module.js】

```javascript
// 1、采用声明或语句的形式
/*
export funciton fn() {};
export class className {};
export const age = 18;
*/

// 2、采用解构赋值的形式
function fn() {};
class className {};
const age = 18;

/* 方式 1：
export {fn};
export {className};
export {age};
*/

// 方式 2：
export {fn, className, age};
```

【index.html】

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Module</title>
</head>
<body>
<!-- script 标签需要加上 type="module" -->
<script type="module">
    /* 方式 1：
    import {fn} from "./module.js";
    import {className} from "./module.js";
    import {age} from "./module.js";
    */
    // 方式 2：
    import {fn, className, age} from "./module.js";
    console.log(fn);			// ƒ fn() {}
    console.log(className);		// class className {}
    console.log(age);	    	// 18
</script>
</body>
</html>
```

**（3）导出导入时起别名**

```javascript
export {fn as func, className as cN, age};
```

```javascript
import {func, cN, age as nl} from "./module.js";
console.log(func);			// ƒ fn() {}
console.log(cN);			// class className {}
console.log(nl);	    	// 18
```

**（4）整体导入**

```javascript
// 之前的导入方式，如果导入的模块不多那么还好，但是一但模块数量多了起来，那么就特别费劲
// import {fn, className, age} from "./module.js";

// 整体导入
// 将同一文件里的所有模块导入到一个对象中
// 不仅对 export 有效，同时对 export default 也同样有效
import * as imObj from "./module.js";
console.log(imObj);					// 见图片
console.log(imObj.fn);				// ƒ fn() {}
console.log(imObj.className);		// class className {}
console.log(imObj.age);				// 18
// export default 也同样有效：imObj.default
```

<img src="mark-img/image-20220602154710981.png" alt="image-20220602154710981" style="zoom:50%;" />

**（5）同时导入**

当我们需要分别导入 export default 和 export 时，可以使用同时导入的方式。

```javascript
// 我们可以分开实现
import {fn, className, age} from "./module.js";
import sex from "./module.js";
```

```javascript
// 更推荐使用同时导入的方式
import sex, {fn, className, age} from "./module.js";
// 注意：export default 必须在 export 之前
```

## 1.4 Module的注意事项

### 1.4.1 Module的注意事项

**（1）模块顶层的 this 指向**

顶层：不在 if、for、while、函数等局部作用域之外的部分。

在模块中顶层的 this 指向 undefined！（千万不要误以为指向 window）

> 模块中顶层的 this 指向 undefined，所以我们可以利用这个特性，检测模块有没有被正确的导入。比如：当 script 标签中没有 type="moudel" 时，模块就没有被成功引入，那么 this 就指向的是 window。

> 当我们需要指定必须以模块的方式导入时，我们可以这样做：
>
> 【module.js】
>
> ```javascript
> if (typeof this !== "undefined") {
>     throw new Error("请使用模块的方式加载！");
> }
> ```

**（2）import 关键字和 import() 函数**

- import 命令具有提升效果，会提升到代码的头部，率先执行！

- import 执行的时候，代码还没有执行，所以我们不能将 import 嵌入到代码逻辑中！

  ```javascript
  // 以下做法时错误的！
  if (...) {
      import "./pc.js";
  } else {
      import "./mobile.js";
  }
  // 所以 import 和 export 命令只能在模块的顶层，不能在代码块中执行！ 
  ```

- import() 可以按条件导入，并且返回一个 promise 对象

  ```javascript
  if (...) {
      import("pc.js").then().catch();
  } else {
      import("mobile.js").then().catch();
  }
  ```

**（3）导入导出的复合写法**

复合写法：在一条语句中同时完成导入和导出。

```javascript
// 导入导出的复合写法
export {age} from "./module.js";

// 等价于
import {age} from "./module.js";
export {age} from "./module.js";
// 先导入用，用完后再导出，相当于 “中转站”
```

# 二、Babel与webpack