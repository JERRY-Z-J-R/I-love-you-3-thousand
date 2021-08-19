---
title: 【DOM】JS小抄(7)
date: 2021-08-10 09:53:37
categories:
- [前端]
- [HTML]
- [CSS]
- [JavaScript]
tags:
- HTML
- CSS
- JavaScript
cover: https://img-blog.csdnimg.cn/dbc285a737be419698ba78d6ec41768f.png 
---

# 【DOM】JS小抄(7)

> 原创内容，转载请注明出处！

# 一、DOM基本概念

DOM（Document Object Model，文档对象模型）是 JavaScript 操作 HTML 文档的接口，使文档操作变得非常优雅、简便。

DOM 最大的特点就是将 HTML 文档表示为“节点树”。

# 二、DOM节点树

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>DOM</title>
</head>

<body>
    <h1>IMOOC</h1>
    <div>
        <h2>Coder Dream</h2>
        <img src="logo.png">
        <div class="box">
            慕课专栏
        </div>
    </div>
</body>

</html>
```

【DOM】

![](https://img-blog.csdnimg.cn/5782ab2ac7a34aaca8b1380ee9f21089.png)

# 三、nodeType

节点的 nodeType 属性可以显示这个节点具体的类型。

| nodeType值 | 节点类型                        |
| ---------- | ------------------------------- |
| 1          | 元素节点，例如 `<p>` 和 `<div>` |
| 3          | 文字节点                        |
| 8          | 注释节点                        |
| 9          | document节点                    |
| 10         | DTD节点（文档类型声明）         |

# 四、document

## 4.1 访问元素节点

所谓“访问”元素节点，就是指“得到”、“获取”页面上的元素节点。

对节点进行操作，第一步就是要得到它。

访问元素节点主要依靠 document 对象。

## 4.2 认识 document 对象

document 对象是 DOM 中最重要的东西，几乎所有 DOM 的功能都封装在了 document 对象中。

document 对象也表示整个 HTML 文档，它是 DOM 节点树的根。

document 对象的 nodeType 属性值是 9。

```javascript
typeof document;	// object
document.nodeType;	// 9
```

## 4.3 访问元素节点的常用方法

| 方法                                | 功能                   | 兼容性                       |
| ----------------------------------- | ---------------------- | ---------------------------- |
| `document.getElementById()`         | 通过 id 得到元素       | IE 6                         |
| `document.getElementsByTagName()`   | 通过标签名得到元素数组 | IE 6                         |
| `document.getElementsByClassName()` | 通过类名得到元素数组   | IE 9                         |
| `document.querySelector()`          | 通过选择器得到元素     | IE 8 部分兼容、IE 9 完全兼容 |
| `document.querySelectorAll()`       | 通过选择器得到元素数组 | IE 8 部分兼容、IE 9 完全兼容 |

> Element：元素。

## 4.4 getElementById()

`document.getElementById()` 功能是通过 id 得到元素节点。

- HTML

```html
<div id="box">我是一个盒子</div>
<p id="para">我是一个段落</p>
```

- JS

```javascript
var box = document.getElementById('box');
var para = document.getElementById('para');
```

【注意事项】

如果页面上有相同 id 的元素，则只能得到第一个。

## 4.5 延迟运行

在测试 DOM 代码时，通常 JS 代码一定要写到 HTML 节点的后面，否则 JS 无法找到相应的 HTML 节点。

当然，可以使用 `window.onload = function(){}` 事件，使页面加载完毕后，再执行指定的代码。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">我是一个盒子</div>
    <p id="para">我是一个段落</p>
    <script>
        var box = document.getElementById('box');
        var para = document.getElementById('para');
        console.log(box);	// <div id="box">我是一个盒子</div>
        console.log(para);	// <p id="para">我是一个段落</p>
    </script>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var box = document.getElementById('box');
        var para = document.getElementById('para');
        console.log(box);	// null
        console.log(para);	// null
    </script>
</head>

<body>
    <div id="box">我是一个盒子</div>
    <p id="para">我是一个段落</p>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.onload = function () {
            var box = document.getElementById('box');
            var para = document.getElementById('para');
            console.log(box);	// <div id="box">我是一个盒子</div>
            console.log(para);	// <p id="para">我是一个段落</p>
        }
    </script>
</head>

<body>
    <div id="box">我是一个盒子</div>
    <p id="para">我是一个段落</p>
</body>

</html>
```

## 4.6 getElementsByTagName()

`getElementsByTagName()` 方法的功能是通过标签名得到节点数组。

> 注意：得到的是一个数组！

```html
<p>我是段落</p>
<p>我是段落</p>
<p>我是段落</p>
<p>我是段落</p>
```

```javascript
var ps = document.getElementsByTagName('p');
```

【注意事项】

数组方便遍历，从而可以批量操控元素节点。

即使页面上只有一个指定标签名的节点，也将得到长度为 1 的数组。

任何一个节点元素也可以调用 getElementsByTagName() 方法，从而得到其内部的某种标签名的元素节点。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.onload = function () {
            var ps = document.getElementsByTagName('p');
            console.log(ps);	// HTMLCollection(6) [p, p, p, p, p, p]
        }
    </script>
</head>

<body>
    <div id="box1">
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
    </div>
    <div id="box2">
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
    </div>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.onload = function () {
            // 先得到 box1
            var box1 = document.getElementById('box1');
            // 得到 box1 中的 p 标签的数组
            var ps_inbox1 = box1.getElementsByTagName('p');
            console.log(ps_inbox1);	// HTMLCollection(3) [p, p, p]
        }
    </script>
</head>

<body>
    <div id="box1">
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
    </div>
    <div id="box2">
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
    </div>
</body>

</html>
```

## 4.7 getElementsByClassName()

`getElementsByClassName()` 方法的功能是通过类名得到节点数组。

- HTML

```html
<div class="spec">我是盒子</div>
<div>我是盒子</div>
<div class="spec">我是盒子</div>
<div class="spec">我是盒子</div>
```

- JS

```javascript
var spec_divs = document.getElementsByClassName('spec');
```

【注意事项】

`getElementsByClassName()` 方法从 IE9 开始兼容。

某个节点元素也可以调用 getElementsByClassName() 方法，从而得到其内部的某类名的元素节点。

## 4.8 querySelector()

`querySelector()` 方法的功能是通过选择器得到元素。

- HTML

```html
<div id="box1">
	<p>我是段落</p>
    <p class="spec">我是段落</p>
    <p>我是段落</p>
</div>
```

- JS

```javascript
var the_p = document.querySelector('#box1 .spec');
```

【注意事项】

querySelector() 方法只能得到页面上一个元素，如果有多个元素符合条件，则只能得到第一个元素。

querySelector() 方法从 IE8 开始兼容，但从 IE9 开始支持 CSS3 的选择器，如：`nth-child()`、`:[src^='dog']` 等 CSS3 选择器形式都支持良好。

> 注意：不能选择伪类！

## 4.9 querySelectorAll()

`querySelectorAll()` 方法的功能是通过选择器得到元素数组。

即使页面上只有一个符合选择器的节点，也将得到长度为 1 的数组。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul id="list1">
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <ul id="list2">
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <script>
        var lis_inlist1 = document.querySelectorAll('#list1 li');

        console.log(lis_inlist1);	// NodeList(5) [li, li, li, li, li]
    </script>
</body>

</html>
```

# 五、节点的关系

![](https://img-blog.csdnimg.cn/3c085acf7fcb4bb98af133369c922241.png)

| 关系           | 考虑所有结点      |
| -------------- | ----------------- |
| 子节点         | `childNodes`      |
| 父节点         | `parentNode`      |
| 第一个子节点   | `firstChild`      |
| 最后一个子节点 | `lastChild`       |
| 前一个兄弟节点 | `previousSibling` |
| 后一个兄弟节点 | `nextSibling`     |

【注意：文本节点也属于节点】

DOM 中，文本节点也属于节点，在使用节点的关系时一定要注意。

在标准的 W3C 规范中，空白文本节点也应该算作节点，但是在 IE8 及以前的浏览器中会有一定的兼容问题，它们不把空白文本节点当作节点。

【排除文本节点的干扰】

从 IE9 开始支持一些“只考虑元素节点”的属性。

> 如果考虑兼容性，可以通过后面的函数封装来实现。

| 关系           | 考虑所有结点      | 只考虑元素节点           |
| -------------- | ----------------- | ------------------------ |
| 子节点         | `childNodes`      | `children`               |
| 父节点         | `parentNode`      | 同                       |
| 第一个子节点   | `firstChild`      | `firstElementChild`      |
| 最后一个子节点 | `lastChild`       | `lastElementChild`       |
| 前一个兄弟节点 | `previousSibling` | `previousElementSibling` |
| 后一个兄弟节点 | `nextSibling`     | `nextElementSibling`     |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">
        <p>我是段落A</p>
        <p id="para">我是段落B</p>
        <p>我是段落C</p>
    </div>

    <script>
        var box = document.getElementById('box');
        var para = document.getElementById('para');

        // 所有子节点
        console.log(box.childNodes);
        // 所有的元素子节点（IE9开始兼容）
        console.log(box.children);
        console.log(box.children.para);

        // 第一个子节点
        console.log(box.firstChild);
        console.log(box.firstChild.nodeType);
        // 第一个元素子节点（IE9开始兼容）
        console.log(box.firstElementChild);

        // 最后一个子节点
        console.log(box.lastChild);
        console.log(box.lastChild.nodeType);
        // 最后一个元素子节点（IE9开始兼容）
        console.log(box.lastElementChild);

        // 父节点
        console.log(para.parentNode);

        // 前一个兄弟节点
        console.log(para.previousSibling);
        // 前一个元素兄弟节点（IE9开始兼容）
        console.log(para.previousElementSibling);

        // 后一个兄弟节点
        console.log(para.nextSibling);
        // 后一个元素兄弟节点（IE9开始兼容）
        console.log(para.nextElementSibling);
    </script>
</body>

</html>
```

- 结果

<img src="https://img-blog.csdnimg.cn/59691c6f0d424e538657b10a99e55a1e.png" style="zoom:80%;" />

注意：文本也算作节点（如图选中部分）

![](https://img-blog.csdnimg.cn/5236374c628640628b2be7c232cd99b7.png)

# 六、书写常见的节点关系函数

书写 IE6 也能兼容的“寻找所有元素子节点”函数。

书写 IE6 也能兼容的“寻找前一个元素兄弟节点”函数。

如何编写函数，获得某元素的所有的兄弟节点。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p id="fpara">我是段落fpara</p>
        我是文本
        <!-- 我是注释 -->
        <p id="para">
            我是段落para
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </p>
        <p>我是段落</p>
        <p>我是段落</p>
        <p>我是段落</p>
    </div>

    <script>
        var box = document.getElementById('box');
        var para = document.getElementById('para');
        var fpara = document.getElementById('fpara');

        // 封装一个函数，这个函数可以返回元素的所有子元素节点（兼容到 IE6），类似 children 的功能
        function getChildren(node) {
            // 结果数组
            var children = [];
            // 遍历 node 这个节点的所有子节点，判断每一个子节点的 nodeType 属性是不是 1
            // 如果是 1，就推入结果数组
            for (var i = 0; i < node.childNodes.length; i++) {
                if (node.childNodes[i].nodeType == 1) {
                    children.push(node.childNodes[i]);
                }
            }
            return children;
        }

        console.log(getChildren(box));
        console.log(getChildren(para));

        // 封装一个函数，这个函数可以返回元素的前一个元素兄弟节点（兼容到 IE6），类似 previousElementSibling 的功能
        function getElementPrevSibling(node) {
            var o = node;
            // 使用 while 语句
            while (o.previousSibling != null) {
                if (o.previousSibling.nodeType == 1) {
                    // 结束循环，找到了
                    return o.previousSibling;
                }
                // 让 o 成为它的前一个节点
                o = o.previousSibling;
            }
            return null;
        }

        console.log(getElementPrevSibling(para));
        console.log(getElementPrevSibling(fpara));

        // 封装第三个函数，这个函数可以返回元素的所有元素兄弟节点
        function getAllElementSibling(node) {
            // 前面的元素兄弟节点
            var prevs = [];
            // 后面的元素兄弟节点
            var nexts = [];

            var o = node;
            // 遍历 node 的前面的节点
            while (o.previousSibling != null) {
                if (o.previousSibling.nodeType == 1) {
                    prevs.unshift(o.previousSibling);
                }
                o = o.previousSibling;
            }

            o = node;

            // 遍历 node 的后面的节点
            while (o.nextSibling != null) {
                if (o.nextSibling.nodeType == 1) {
                    nexts.push(o.nextSibling);
                }
                o = o.nextSibling;
            }

            // 将两个数组进行合并，然后返回
            return prevs.concat(nexts);
        }

        console.log(getAllElementSibling(para));
    </script>
</body>

</html>
```

# 七、节点操作

## 7.1 如何改变元素节点中的内容

改变元素节点中的内容可以使用两个相关属性。

- `innerHTML`
- `innerText`

`innerHTML` 属性能以 HTML 语法设置节点中的内容。

`innerText` 属性只能以纯文本的形式设置节点中的内容。

- innerHTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>
    <script>
        var oBox = document.getElementById('box');
        oBox.innerHTML = '周吉瑞';
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/5a0f6903a8dc4f35977d19e63360f167.png" style="zoom: 67%;" />

- innerHTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>
    <script>
        var oBox = document.getElementById('box');
        // 注意：此处的 HTML 字符串不允许换行！
        oBox.innerHTML = '<ul><li>牛奶</li><li>咖啡</li></ul>';
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/93d396b4ae784751b781fb2e9402c53c.png" style="zoom:67%;" />

- innerText

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>
    <script>
        var oBox = document.getElementById('box');
        oBox.innerText = '周吉瑞';
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/3492cc06309c4c08a156e35cd06eab45.png" style="zoom:67%;" />

- innerText

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>
    <script>
        var oBox = document.getElementById('box');
        oBox.innerText = '<ul><li>牛奶</li><li>咖啡</li></ul>';
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/c8210b44616242fc9b3465ac93d23c23.png" style="zoom: 50%;" />

## 7.2 如何改变元素节点的CSS样式

改变元素节点的 CSS 样式需要使用这样的语句：

- `oBox.style.backgroundColor = 'red';`
- `oBox.style.backgroundImage = 'url(images/1.jpg)';`
- `oBox.style.fontSize = '32px';`

【注意事项】

- CSS 属性要写成“驼峰”形式
- CSS 属性值要设置成完整形式
- 注意写单位

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <div class="box" id="box">
        你好
    </div>

    <script>
        var oBox = document.getElementById('box');
        oBox.style.backgroundColor = 'rgb(100, 200, 123)';
        oBox.style.backgroundColor = '#f80';
        oBox.style.backgroundImage = 'url(https://www.imooc.com/static/img/index/logo-recommended.png)';
        oBox.style.backgroundSize = 'contain';
        oBox.style.fontSize = '50px';
    </script>
</body>

</html>
```

> JS 修改的 CSS 样式，属于行内式，优先级最高！所以可以覆盖原有的样式。

## 7.3 如何改变元素节点的HTML属性

标准 W3C 属性，如 `src`、`href`、`title`、`alt` 等等，只需要直接打点进行更改即可。

`oImg.src = 'images/2.jpg';`

【案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <img src="images/1.jpg" id="pic">
    <a href="http://www.baidu.com" id="link">
        去百度
    </a>

    <script>
        var oPic = document.getElementById('pic');
        var oLink = document.getElementById('link');
        oPic.src = 'images/2.jpg';
        oLink.href = 'http://www.imooc.com';
        oLink.innerText = '去慕课网';
    </script>
</body>

</html>
```

不符合 W3C 标准的属性，要使用 `setAttribute()` 和 `getAttribute()` 来设置、读取。

```javascript
oBox.setAttribute('data-n', 10);
var n = oBox.getAttribute('data-n');
alert(n);
```

> HTML 的自定义属性，主要用途就是与 JS 配合方便实现一些效果。

【案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box"></div>

    <script>
        var box = document.getElementById('box');
        box.setAttribute('data-n', 10);
        var n = box.getAttribute('data-n');
        alert(n);
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/2fba8d550d464f37ae300e2b54eed0ce.png" style="zoom:50%;" />

# 八、节点的创建、移动、删除和克隆

## 8.1 节点的创建

`document.createElement()` 方法用于创建一个指定 tag name 的 HTML 元素。

```javascript
var oDiv = document.createElement('div');
```

## 8.2 "孤儿节点"

新创建出的节点是“孤儿节点”，这意味着它并没有被挂载到 DOM 树上，我们无法看见它。

必须继续使用 `appendChild()` 或 `insertBefore()` 方法将孤儿节点插入到 DOM 树上。

### 8.2.1 appendChild()

任何已经在 DOM 树上的节点，都可以调用 appendChild() 方法，它可以将孤儿节点挂载到它的内部，成为它的最后一个子节点。

```javascript
父节点.appendChild(孤儿节点);
```

【小案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">
        <p>我是原本的段落0</p>
        <p>我是原本的段落1</p>
        <p>我是原本的段落2</p>
    </div>
    <script>
        var oBox = document.getElementById('box');
        // 创建孤儿节点
        var oP = document.createElement('p');
        // 设置内部文字
        oP.innerText = '我是新来的';
        // 上树
        oBox.appendChild(oP);
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/e2ffcdd3c509446280c97bc1450c49f3.png" style="zoom:50%;" />

### 8.2.2 insertBefore()

任何已经在 DOM 树上的节点，都可以调用 insertBefore() 方法，它可以将孤儿节点挂载到它的内部，成为它的“标杆子节点”之前的节点。

```javascript
父节点.insertBefore(孤儿节点, 标杆节点);
```

【小案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">
        <p>我是原本的段落0</p>
        <p>我是原本的段落1</p>
        <p>我是原本的段落2</p>
    </div>
    <script>
        var oBox = document.getElementById('box');
        var oPs = oBox.getElementsByTagName('p');
        // 创建孤儿节点
        var oP = document.createElement('p');
        // 设置内部文字
        oP.innerText = '我是新来的';
        // 上树
        oBox.insertBefore(oP, oPs[1]);
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/de9796a998234c4b9bfaa3bddf70687d.png" style="zoom:50%;" />

## 8.3 节点创建小案例

【动态创建一个20行12列的表格】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td {
            width: 20px;
            height: 20px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <table id="mytable"></table>

    <script>
        // 请动态创建出一个 20 行 12 列的表格
        var mytable = document.getElementById('mytable');

        for (var i = 0; i < 20; i++) {
            // 创建了新的 tr 标签
            var tr = document.createElement('tr');
            for (var j = 0; j < 12; j++) {
                // 创建了新的 td 标签
                var td = document.createElement('td');
                // 让 tr 追加 td 标签
                tr.appendChild(td);
            }
            // 让 mytable 追加 tr 标签
            mytable.appendChild(tr);
        }
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/260e2e4ae2b54cdcb2e60c6e29a0d9ca.png" style="zoom:50%;" />

【九九乘法表】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td {
            width: 80px;
            height: 30px;
            padding-left: 10px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <table id="mytable"></table>

    <script>
        // 请创建九九乘法表
        var mytable = document.getElementById('mytable');

        for (var i = 1; i <= 9; i++) {
            // 创建了新的 tr 标签
            var tr = document.createElement('tr');
            for (var j = 1; j <= i; j++) {
                // 创建了新的 td 标签
                var td = document.createElement('td');
                // 设置 td 内部的文字
                td.innerText = i + '×' + j + '=' + (i * j);
                // 让tr追加 td 标签
                tr.appendChild(td);
            }
            // 让 mytable 追加 tr 标签
            mytable.appendChild(tr);
        }
    </script>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/86dcaf404820444abe361c3a5ea4a670.png)

## 8.4 移动节点

如果将已经挂载到 DOM 树上的节点成为 `appendChild()` 或者 `insertBefore()` 的参数，这个节点将会被移动。

```javascript
新父节点.appendChild(已经有父亲的节点);
```

```javascript
新父节点.insertBefore(已经有父亲的节点, 标杆子节点);
```

这意味着一个节点不能同时位于 DOM 树的两个位置。

【小案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box1">
        <p id="para">我是段落</p>
    </div>

    <div id="box2">
        <p>我是box2的原有p标签</p>
        <p>我是box2的原有p标签</p>
        <p>我是box2的原有p标签</p>
        <p>我是box2的原有p标签</p>
    </div>

    <script>
        var box2 = document.getElementById('box2');
        var para = document.getElementById('para');
        var ps_inbox2 = box2.getElementsByTagName('p');

        box2.insertBefore(para, ps_inbox2[2]);
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/7cd9c894d8e04e0cbb64ce710df9aab6.png" style="zoom:50%;" />

## 8.5 删除节点

`removeChild()` 方法从 DOM 中删除一个子节点。

```javascript
父节点.removeChild(要删除子节点);
```

节点不能主动删除自己，必须由父节点删除它。

【小案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="box">
        <p>我是p节点0</p>
        <p>我是p节点1</p>
        <p>我是p节点2</p>
    </div>

    <script>
        var box = document.getElementById('box');
        var the_first_p = box.getElementsByTagName('p')[0];

        box.removeChild(the_first_p);
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/8ba0e61b217a42a28e3e3ecec215ff58.png" style="zoom:50%;" />

## 8.6 克隆节点

`cloneNode()` 方法可以克隆节点，克隆出的节点是“孤儿节点”。

```javascript
var 孤儿节点 = 老节点.cloneNode();
var 孤儿节点 = 老节点.cloneNode(true);
```

参数是一个布尔值，表示是否采用深度克隆：如果为 true，则该节点的所有后代节点也会被克隆，如果为 false，则只克隆该节点本身。

【小案例】

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="box1">
        <ul>
            <li>牛奶</li>
            <li>咖啡</li>
            <li>可乐</li>
        </ul>
    </div>

    <div id="box2"></div>

    <script>
        var box1 = document.getElementById('box1');
        var box2 = document.getElementById('box2');
        var theul = box1.getElementsByTagName('ul')[0];

        // 克隆节点
        var new_ul = theul.cloneNode(true);
        box2.appendChild(new_ul);
    </script>
</body>
</html>
```

<img src="https://img-blog.csdnimg.cn/fe25a44f19804275a1ff3d8e7a750759.png" style="zoom:50%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="box1">
        <ul>
            <li>牛奶</li>
            <li>咖啡</li>
            <li>可乐</li>
        </ul>
    </div>

    <div id="box2"></div>

    <script>
        var box1 = document.getElementById('box1');
        var box2 = document.getElementById('box2');
        var theul = box1.getElementsByTagName('ul')[0];

        // 克隆节点
        var new_ul = theul.cloneNode(false);
        box2.appendChild(new_ul);
    </script>
</body>
</html>
```

<img src="https://img-blog.csdnimg.cn/41d2b250d63e4fd3bf14752815602cfe.png" style="zoom:50%;" />

# 九、事件监听

DOM 允许我们书写 JavaScript 代码以让 HTML 元素作出反应。

什么是“事件”：用户与网页的交互动作。

## 9.1 什么是事件监听

“监听”顾名思义，就是让计算机随时能够发现这个事件发生了，从而执行程序员预先编写好的一些程序。

设置事件监听的方法主要有 `onxxx` 和 `addEventListener()` 两种，二者的区别将在“事件传播”一课中介绍。

## 9.2 最简单的设置事件监听的方法

最简单的给元素设置事件监听的方法就是设置它们的 `onxxx` 属性，像这样：

```javascript
oBox.onclick = function() {
    // 点击盒子时，将执行这里的语句
}
```

【小案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: #ccc;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <script>
        var oBox = document.getElementById('box');

        // 给box这个盒子添加点击事件监听
        oBox.onclick = function () {
            alert('你好，我是点击事件函数');
        };
    </script>
</body>

</html>
```

## 9.3 常见的鼠标事件监听

| 事件名         | 事件描述                                     |
| -------------- | -------------------------------------------- |
| `onclick`      | 当鼠标单击某个对象                           |
| `ondblclick`   | 当鼠标双击某个对象                           |
| `onmousedown`  | 当某个鼠标按键在某个对象上被按下             |
| `onmouseup`    | 当某个鼠标按键在某个对象上被松开             |
| `onmousemove`  | 当某个鼠标按键在某个对象上被移动             |
| `onmouseenter` | 当鼠标进入某个对象（相似事件 `onmouseover`） |
| `onmouseleave` | 当鼠标离开某个对象（相似事件 `onmouseout`）  |

## 9.4 常见的键盘事件监听

| 事件名       | 事件描述                                                     |
| ------------ | ------------------------------------------------------------ |
| `onkeypress` | 当某个键盘的键被按下（系统按钮如箭头键和功能键无法得到识别） |
| `onkeydown`  | 当某个键盘的键被按下（系统按钮可以识别，并且会先于 `onkeypress` 发生） |
| `onkeyup`    | 当某个键盘的键被松开                                         |

## 9.5 常见的表单事件监听

| 事件名     | 事件描述                                  |
| ---------- | ----------------------------------------- |
| `onchange` | 当用户改变完成域的内容                    |
| `onfocus`  | 当某元素获得焦点（比如 tab 键或鼠标点击） |
| `onblur`   | 当某元素失去焦点                          |
| `onsubmit` | 当表单被提交                              |
| `onreset`  | 当表单被重置                              |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form id="myform">
        <p>
            姓名：
            <input type="text" name="nameField">
        </p>
        <p>
            年龄：
            <input type="text" name="ageField">
        </p>
        <p>
            <input type="submit">
        </p>
    </form>

    <script>
        var myform = document.getElementById('myform');
        // 表单对象可以通过“打点”name 属性，得到里面的子元素。
        var nameField = myform.nameField;
        var ageField = myform.ageField;

        nameField.onchange = function () {
            console.log('你已经修改完了姓名');
        };

        nameField.oninput = function () {
            console.log('你正在修改姓名');
        };

        nameField.onfocus = function () {
            console.log('姓名框已经得到了焦点');
        }

        nameField.onblur = function () {
            console.log('姓名框已经失去了焦点');
        }

        myform.onsubmit = function () {
            alert('你正在尝试提交表单');
        }
    </script>
</body>

</html>
```

> 表单对象可以通过“打点”name 属性，得到里面的子元素。

## 9.6 常见的页面事件监听

| 事件名     | 事件描述               |
| ---------- | ---------------------- |
| `onload`   | 当页面或图像被完成加载 |
| `onunload` | 当用户退出页面         |

更多有关窗口或页面的事件在 BOM 课程中介绍。

# 十、事件传播

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            width: 202px;
            height: 202px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box2 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box3 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>
    <script>
        var oBox1 = document.getElementById('box1');
        var oBox2 = document.getElementById('box2');
        var oBox3 = document.getElementById('box3');

        oBox2.onclick = function () {
            console.log('我是 box2 的 onclick');
        };

        oBox3.onclick = function () {
            console.log('我是 box3 的 onclick');
        };

        oBox1.onclick = function () {
            console.log('我是 box1 的 onclick');
        };
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/7732a11fa88f4524985552ac4080e6ae.png" style="zoom:50%;" />

![](https://img-blog.csdnimg.cn/949aed65331840478a6749dac642a196.png)

![](https://img-blog.csdnimg.cn/87664139d4af41c9b2040f3eca05171e.png)

## 10.1 捕获阶段和冒泡阶段

![](https://img-blog.csdnimg.cn/28a5ea37ffba43a5bf367b9f7033efb8.png)

## 10.2 onxxx写法只能监听冒泡阶段

![](https://img-blog.csdnimg.cn/518daf0ad2e94eb09e7545e0eeea489e.png)

## 10.3 addEventListener()方法

```javascript
oBox.addEventListener('click', function(){}, true);
```

![](https://img-blog.csdnimg.cn/8d112b4208944d75bdd3e655b4b8a7b4.png)

【小案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            width: 202px;
            height: 202px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box2 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box3 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>
    <script>
        var oBox1 = document.getElementById('box1');
        var oBox2 = document.getElementById('box2');
        var oBox3 = document.getElementById('box3');

        oBox1.onclick = function () {
            console.log('我是box1的onclick');
        };

        oBox2.onclick = function () {
            console.log('我是box2的onclick');
        };

        oBox3.onclick = function () {
            console.log('我是box3的onclick');
        };

        oBox3.addEventListener('click', function () {
            console.log('我是box3的捕获阶段');
        }, true);

        oBox2.addEventListener('click', function () {
            console.log('我是box2的捕获阶段');
        }, true);

        oBox1.addEventListener('click', function () {
            console.log('我是box1的捕获阶段');
        }, true);


        oBox1.addEventListener('click', function () {
            console.log('我是box1的冒泡阶段');
        }, false);

        oBox2.addEventListener('click', function () {
            console.log('我是box2的冒泡阶段');
        }, false);

        oBox3.addEventListener('click', function () {
            console.log('我是box3的冒泡阶段');
        }, false);
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/b1d04ae4a389469cb9612cf9399bd838.png" style="zoom:50%;" />

【注意事项】

- 最内部元素不再区分捕获和冒泡阶段，会先执行写在前面的监听，然后执行后写的监听

> 原因：先捕获进入了最内层，然后从最内层开始冒泡，此时对于最内层元素来说，捕获和冒泡都是同一时间段，所以谁写在前就先执行谁。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            width: 202px;
            height: 202px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box2 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box3 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>
    <script>
        var oBox1 = document.getElementById('box1');
        var oBox2 = document.getElementById('box2');
        var oBox3 = document.getElementById('box3');

        oBox3.onclick = function () {
            console.log('我是box3的onclick');
        };

        oBox3.addEventListener('click', function () {
            console.log('我是box3的冒泡阶段');
        }, false);

        oBox3.addEventListener('click', function () {
            console.log('我是box3的捕获阶段');
        }, true);
    </script>
</body>

</html>
```

```text
我是box3的onclick
我是box3的冒泡阶段
我是box3的捕获阶段
```

> 在新版的 Chrome 中貌似都默认先执行最内层元素的捕获再执行冒泡。

- 如果给元素设置相同的两个或多个同名事件，则 DOM O级写法后面写的会覆盖先写的；而 DOM 2级会按顺序执行

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            width: 202px;
            height: 202px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box2 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            padding: 50px;
        }

        #box3 {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
        }
    </style>
</head>

<body>
    <div id="box1">
        <div id="box2">
            <div id="box3"></div>
        </div>
    </div>
    <script>
        var oBox1 = document.getElementById('box1');
        var oBox2 = document.getElementById('box2');
        var oBox3 = document.getElementById('box3');

        oBox2.onclick = function () {
            alert('A');
        };

        oBox2.onclick = function () {
            alert('B');
        };

        oBox2.addEventListener('click', function () {
            alert('C');
        }, false);

        oBox2.addEventListener('click', function () {
            alert('D');
        }, false);
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/22f213b615f64aef95c28b60c3fdd260.png" style="zoom:50%;" />

# 十一、事件对象

## 11.1 什么是事件对象

事件处理函数提供一个形式参数，它是一个对象，封装了本次事件的细节。

这个参数通常用单词 `event` 或字母 `e` 来表示。

```javascript
oBox.onmousemove = function(e) {
    // 对象 e 就是这次事件的“事件对象”
}
```

> 这个对象 e 接受的值由浏览器或操作系统传递。

## 11.2 鼠标位置

| 属性      | 属性描述                           |
| --------- | ---------------------------------- |
| `clientX` | 鼠标指针相对于浏览器的水平坐标     |
| `clientY` | 鼠标指针相对于浏览器的垂直坐标     |
| `pageX`   | 鼠标指针相对于整张网页的水平坐标   |
| `pageY`   | 鼠标指针相对于整张网页的垂直坐标   |
| `offsetX` | 鼠标指针相对于事件源元素的水平坐标 |
| `offsetY` | 鼠标指针相对于事件源元素的垂直坐标 |

- 浏览器

<img src="https://img-blog.csdnimg.cn/cfd65b2855084028ac209f18da9ab32f.png" style="zoom:33%;" />

- 整张网页

<img src="https://img-blog.csdnimg.cn/b8e255e4f8f54dd4aefd2139a518ceb1.png" style="zoom:33%;" />

- 事件源

<img src="https://img-blog.csdnimg.cn/96059664dd5e4ceb8535973c9b17dbb5.png" style="zoom: 33%;" />

【小案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #box {
            width: 200px;
            height: 200px;
            background-color: #333;
            margin: 100px;
            margin-top: 150px;
        }

        body {
            height: 2000px;
        }

        #info {
            font-size: 30px;
            margin: 60px;
        }
    </style>
</head>

<body>
    <div id="box">

    </div>
    <div id="info"></div>

    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');

        oBox.onmousemove = function (e) {
            oInfo.innerHTML = 'offsetX/Y：' + e.offsetX + ',' + e.offsetY + '<br>'
                + 'clientX/Y：' + e.clientX + ',' + e.clientY + '<br>'
                + 'pageX/Y：' + e.pageX + ',' + e.pageY;
        };
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/709b6caf822e40e1af8d3b262244d786.gif" style="zoom: 33%;" />

【注意事项】

对于 offsetX 和 offsetY 而言，总是以最内层元素为事件源。

> 所以应避免事件源盒子内部有小盒子的存在。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        #box {
            overflow: hidden;
            width: 200px;
            height: 200px;
            background-color: #333;
            margin: 100px;
            margin-top: 150px;
        }

        body {
            height: 2000px;
        }

        #info {
            font-size: 30px;
            margin: 60px;
        }

        p {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin: 50px;
        }
    </style>
</head>

<body>
    <div id="box">
        <p></p>
    </div>
    <div id="info"></div>

    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');

        oBox.onmousemove = function (e) {
            oInfo.innerHTML = 'offsetX/Y：' + e.offsetX + ',' + e.offsetY + '<br>';
        };
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/b64bdf28426a44b79b412db5fb20ccb6.gif" style="zoom:33%;" />

## 11.3 e.charCode和e.keyCode属性

`e.charCode` 属性通常用于 `onkeypress` 事件中，表示用户输入的字符的“字符码”。

`e.keyCode` 属性通常用于 `onkeydown` 事件和 `onkeyup` 中，表示用户按下的按键的“键码”。

### 11.3.1 charCode字符码

| 字符    | 字符码   |
| ------- | -------- |
| `0 ~ 9` | 48 ~ 57  |
| `A ~ Z` | 65 ~ 90  |
| `a ~ z` | 97 ~ 122 |

### 11.3.2 keyCode键码

| 按键               | 键码                                |
| ------------------ | ----------------------------------- |
| `0 ~ 9`            | 48 ~ 57（同 charCode 键码完全相同） |
| `A ~ Z` `a ~ z`    | 65 ~ 90（字母不分大小写）           |
| 方向键 `← ↑ → ↓`   | 37、38、39、40                      |
| 退格键 `Backspace` | 8                                   |
| `Tab`              | 9                                   |
| 回车键 `enter`     | 13                                  |
| `Shift`            | 16                                  |
| `Ctrl`             | 17                                  |
| `Alt`              | 18                                  |
| 大小键 `CapsLK`    | 20                                  |
| `Esc`              | 27                                  |
| 空格键 `space`     | 32                                  |
| 删除键 `Delete`    | 46                                  |
| 开始键 `Start`     | 91                                  |
| `F1 ~ F12`         | 112 ~ 123                           |

> 以上只是部分！

### 11.3.3 案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="text" id="field1">
    <h1 id="info1"></h1>
    <input type="text" id="field2">
    <h1 id="info2"></h1>

    <script>
        var oField1 = document.getElementById('field1');
        var oInfo1 = document.getElementById('info1');
        var oField2 = document.getElementById('field2');
        var oInfo2 = document.getElementById('info2');

        oField1.onkeypress = function (e) {
            oInfo1.innerText = '你输入的字符的字符码是' + e.charCode;
        };

        oField2.onkeydown = function (e) {
            oInfo2.innerText = '你按下的按键的键码是' + e.keyCode;
        };
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/99770e9c9af8412ca9db1aa8552d6d83.gif" style="zoom:50%;" />

【小案例 - 盒子移动】

制作一个特效：按方向键可以控制页面上的盒子移动。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            position: absolute;
            top: 200px;
            left: 200px;
            width: 100px;
            height: 100px;
            background-color: orange;
        }

        #info {
            position: fixed;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <h1 id="info"></h1>

    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');

        // 全局变量 t、l，分别表示盒子的 top 属性值和 left 属性值
        var t = 200;
        var l = 200;

        // 监听 document 对象的键盘按下事件监听，表示当用户在整个网页上按下按键的时候
        document.onkeydown = function (e) {
            oInfo.innerText = '你按下的按键的键码是' + e.keyCode;

            switch (e.keyCode) {
                case 37:
                    l -= 3;
                    break;
                case 38:
                    t -= 3;
                    break;
                case 39:
                    l += 3;
                    break;
                case 40:
                    t += 3;
                    break;
            }

            // 更改样式
            oBox.style.left = l + 'px';
            oBox.style.top = t + 'px';
        };
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/f8a977b365214fbea637f829c704a014.gif" style="zoom:50%;" />

## 11.4 e.preventDefault()方法

`e.preventDefault()` 方法用来阻止事件产生的“默认动作”。

一些特殊的业务需求，需要阻止事件的“默认动作”。

【小案例1】

制作一个文本框，只能让用户在其中输入小写字母和数字，其他字符输入没有效果。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p>
        只能输入小写字母和数字：
        <input type="text" id="field">
    </p>
    <script>
        var oField = document.getElementById('field');

        oField.onkeypress = function (e) {
            console.log(e.charCode);

            // 根据用户输入的字符的字符码（e.charCode)
            // 数字 0~9，字符码 48~57
            // 小写字母 a~z，字符码 97~122
            if (!(e.charCode >= 48 && e.charCode <= 57 || e.charCode >= 97 && e.charCode <= 122)) {
                // 阻止浏览器的默认行为
                e.preventDefault();
            }
        };
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/27548b611bfe406b957870b4256f655f.gif" style="zoom: 33%;" />

【小案例2】

制作鼠标滚轮事件：当鼠标在盒子中向下滚动时，数字加 1；反之，数字减 1。

鼠标滚轮事件是 `onmousewheel`，它的事件对象 e 提供 `deltaY` 属性表示鼠标滚动方向，向下滚动是返回正值，向上滚动时返回负值。

- 没有阻止事件的“默认动作”时

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 200px;
            height: 200px;
            background-color: #333;
        }

        body {
            height: 2000px;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <h1 id="info">0</h1>

    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');

        // 全局变量就是 info 中显示的数字
        var a = 0;

        // 给 box 盒子添加鼠标滚轮事件监听
        oBox.onmousewheel = function (e) {
            if (e.deltaY > 0) {
                a++;
            } else {
                a--;
            }
            oInfo.innerText = a;
        }
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/973fb9858bf542b6815b3b1f2f77249c.gif" style="zoom: 33%;" />

- 阻止事件的“默认动作”后

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 200px;
            height: 200px;
            background-color: #333;
        }

        body {
            height: 2000px;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <h1 id="info">0</h1>

    <script>
        var oBox = document.getElementById('box');
        var oInfo = document.getElementById('info');

        // 全局变量就是 info 中显示的数字
        var a = 0;

        // 给 box 盒子添加鼠标滚轮事件监听
        oBox.onmousewheel = function (e) {
            // 阻止默认事件：就是说当用户在盒子里面滚动鼠标滚轮的时候，此时不会引发页面的滚动条的滚动
            e.preventDefault();

            if (e.deltaY > 0) {
                a++;
            } else {
                a--;
            }
            oInfo.innerText = a;
        }
    </script>
</body>

</html>
```

<img src="https://img-blog.csdnimg.cn/5c65bcd5518f4175bd6227fdd767b962.gif" style="zoom:33%;" />

【小案例3】

制作鼠标右键点击事件：当鼠标右键被点击时，改变背景颜色。

`oncontextmenu`：在用户点击鼠标右键打开上下文菜单时触发。

- 没有阻止事件的“默认动作”时

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        var oBody = document.getElementsByTagName('body')[0];
        // 给 document 添加鼠标右键事件监听
        var flag = 0;
        document.oncontextmenu = function (e) {
            if (flag == 0) {
                oBody.style.backgroundColor = 'black';
                flag = 1;;
            } else {
                oBody.style.backgroundColor = 'white';
                flag = 0;
            }
        }
    </script>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/bdde5ade8da44af8aadf8e536e9e5b15.gif)

- 阻止事件的“默认动作”后

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        var oBody = document.getElementsByTagName('body')[0];
        // 给 document 添加鼠标右键事件监听
        var flag = 0;
        document.oncontextmenu = function (e) {
            // 阻止默认事件：就是说当用户右键的时候，此时不会弹出页面的右键菜单
            e.preventDefault();

            if (flag == 0) {
                oBody.style.backgroundColor = 'black';
                flag = 1;;
            } else {
                oBody.style.backgroundColor = 'white';
                flag = 0;
            }
        }
    </script>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/11cf64b786754582bd21671a5b9f92ea.gif)

## 11.5 e.stopPropagation()方法

`e.stopPropagation()` 方法用来阻止事件继续传播。

在一些场合，非常有必要切断事件继续传播，否则会造成页面特效显示出 bug。

