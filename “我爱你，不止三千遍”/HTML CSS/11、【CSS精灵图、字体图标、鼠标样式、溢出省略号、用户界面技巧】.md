# 【CSS精灵图、字体图标、三角、鼠标样式、用户界面样式、溢出省略号】前端小抄(11)

> 本学习笔记是个人对 Pink 老师课程的总结归纳，转载请注明出处！ 

# 一、精灵图

## 1.1 为什么需要精灵图？

一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送
请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。

因此，为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了 CSS 精灵技术（也称
CSS Sprites、CSS 雪碧）。

核心原理：将网页中的一些小背景图像整合到一张大图中 ，这样服务器只需要一次请求就可以了。

精灵技术目的：为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度。

## 1.2 精灵图（sprites）的使用

使用精灵图核心：

1. 精灵技术主要针对于背景图片使用。就是把多个小背景图片整合到一张大图片中
2. 这个大图片也称为 sprites 精灵图 或者 雪碧图
3. 移动背景图片位置以控制显示区域， 此时可以使用 `background-position`
4. 移动的距离就是这个目标图片的 `x` 和 `y` 坐标。注意网页中的坐标有所不同
5. 因为一般情况下都是将精灵图往上往左移动，所以两个坐标数值基本是负值
6. 使用精灵图的时候需要精确测量，每个小背景图片的大小和位置

使用精灵图核心总结：

1. 精灵图主要针对于小的背景图片使用
2. 主要借助于背景位置来实现 `background-position`
3. 一般情况下精灵图都是负值（千万注意网页中的坐标： x轴右边走是正值，左边走是负值， y轴同理） 

【王者荣耀案例】

![](https://img-blog.csdnimg.cn/20210420081150387.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>精灵图使用</title>
    <style>
        .box1 {
            width: 60px;
            height: 60px;
            margin: 100px auto;
            background: url(images/sprites.png) no-repeat -182px 0;

        }

        .box2 {
            width: 27px;
            height: 25px;
            /* background-color: pink; */
            margin: 200px;
            background: url(images/sprites.png) no-repeat -155px -106px;

        }
    </style>
</head>

<body>
    <div class="box1"></div>
    <div class="box2"></div>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/202104200817544.png)

## 1.3 案例：拼单词

<img src="https://img-blog.csdnimg.cn/20210420081150457.jpg" style="zoom:67%;" />

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>利用精灵图拼出自己名字</title>
    <style>
        span {
            display: inline-block;
            background: url(images/abcd.jpg) no-repeat;
        }

        .p {
            width: 100px;
            height: 112px;
            /* background-color: pink; */
            background-position: -493px -276px;
        }

        .i {
            width: 60px;
            height: 108px;
            /* background-color: pink; */
            background-position: -327px -142px;
        }

        .n {
            width: 115px;
            height: 112px;
            /* background-color: pink; */
            background-position: -255px -275px;
        }

        .k {
            width: 105px;
            height: 114px;
            /* background-color: pink; */
            background-position: -495px -142px;
        }
    </style>
</head>

<body>
    <span class="p">p</span>
    <span class="i">i</span>
    <span class="n">n</span>
    <span class="k">k</span>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/20210420083302981.png)

【PS 切片工具的使用】

<img src="https://img-blog.csdnimg.cn/20210424224831926.png" style="zoom: 50%;" />

![](https://img-blog.csdnimg.cn/8141d1fc65ba4b31acfc903b948a09a8.png)

![](https://img-blog.csdnimg.cn/b9b0bf21c37a40a6a37a09f759218c16.png)

![](https://img-blog.csdnimg.cn/d8fea6eba89048dfb6cf0421f620d04e.png)

# 二、字体图标

## 2.1 字体图标的产生

字体图标使用场景：主要用于显示网页中通用、常用的一些小图标。

精灵图是有诸多优点的，但是缺点很明显。

1. 图片文件还是比较大的
2. 图片本身放大和缩小会失真
3. 一旦图片制作完毕想要更换非常复杂

此时，有一种技术的出现很好的解决了以上问题，就是字体图标 iconfont。

字体图标可以为前端工程师提供一种方便高效的图标使用方式，展示的是图标，但本质却属于字体。

## 2.2 字体图标的优点

- 轻量级：一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求
- 灵活性：本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等
- 兼容性：几乎支持所有的浏览器，请放心使用

注意： 字体图标不能替代精灵技术，只是对工作中图标部分技术的提升和优化。

总结：

1. 如果遇到一些结构和样式比较简单的小图标，就用字体图标
2. 如果遇到一些结构和样式复杂一点的小图片，就用精灵图

字体图标是一些网页常见的小图标，我们直接网上下载即可。 因此使用可以分为：

1. 字体图标的下载
2. 字体图标的引入（引入到我们 html 页面中）
3. 字体图标的追加（在原有的基础上添加新的小图标）

## 2.3 字体图标的下载

推荐下载网站：

- icomoon 字库 [https://icomoon.io/](https://icomoon.io/)

IcoMoon 成立于 2011 年，推出了第一个自定义图标字体生成器，它允许用户选择所需要的图标，使它们成一字型。该字库内容种类繁多，非常全面，唯一的遗憾是国外服务器，打开网速较慢。

- 阿里 iconfont 字库 [https://www.iconfont.cn/](https://www.iconfont.cn/)

这个是阿里妈妈 M2UX 的一个 iconfont 字体图标字库，包含了淘宝图标库和阿里妈妈图标库。可以使用 AI 制作图标上传生成。 重点是，免费！

> 以下内容以 icomoon 字库 为例。

## 2.4 字体图标的引入

下载完毕之后，注意原先的文件不要删，后面会用！

1. **把下载包里面的 fonts 文件夹放入页面根目录下**

不同浏览器所支持的字体格式是不一样的，字体图标之所以兼容，就是因为包含了主流浏览器支持的字体文件。

- TureType (.ttf) 格式 .ttf 字体是 Windows 和 Mac 的最常见的字体，支持这种字体的浏览器有 IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile、Safari4.2+；
- Web Open Font Format (.woff) 格式 woff 字体，支持这种字体的浏览器有 IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+；
- Embedded Open Type (.eot) 格式 .eot 字体是 IE 专用字体，支持这种字体的浏览器有 IE4+；
- SVG (.svg) 格式 .svg 字体是基于 SVG 字体渲染的一种格式，支持这种字体的浏览器有 Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+；

2. **在 CSS 样式中全局声明字体：简单理解把这些字体文件通过 css 引入到我们页面中**

一定注意字体文件路径的问题。

```css
@font-face {
	font-family: 'icomoon';
	src: url('fonts/icomoon.eot?7kkyc2');
	src: url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
	url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
	url('fonts/icomoon.woff?7kkyc2') format('woff'),
	url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
	font-weight: normal;
	font-style: normal;
}
```

3. **html 标签内添加小图标**

复制小图标对应的字符（一个小方框）到 html 中，一般建议放在 `<span></span>` 标签里。 

4. **给标签定义字体**

```css
span {
	font-family: "icomoon";
}
```

注意：务必保证这个字体和上面 @font-face 里面的字体保持一致（默认为：icomoon）。

## 2.5 字体图标的追加

如果工作中，原来的字体图标不够用了，我们便需要添加新的字体图标到原来的字体文件中。

选择 Import Icons 按钮，把原压缩包里面的 selection.json 重新上传，然后选中自己想要新的图标，从新下载压缩包，并替换原来的文件即可。

## 2.6 字体图标加载的原理

服务器只需接受一次浏览器请求便可以将 fonts 文件一次性返回，如此而来网页中所有用到 fonts 字体图标的部分便一次性加载好了，大大减轻了服务器压力。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>字体图标的使用</title>
  <style>
    /* 字体声明 */
    @font-face {
    	font-family: 'icomoon';
      	src: url('fonts/icomoon.eot?p4ssmb');
      	src: url('fonts/icomoon.eot?p4ssmb#iefix') format('embedded-opentype'),
        url('fonts/icomoon.ttf?p4ssmb') format('truetype'),
        url('fonts/icomoon.woff?p4ssmb') format('woff'),
        url('fonts/icomoon.svg?p4ssmb#icomoon') format('svg');
      	font-weight: normal;
      	font-style: normal;
      	font-display: block;
    }

    span {
      font-family: 'icomoon';
      font-size: 100px;
      color: salmon;
    }
  </style>
</head>

<body>
  <span></span>
  <span></span>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/20210420093539188.png)

# 三、CSS三角

网页中常见一些三角形，使用 CSS 直接画出来就可以，不必做成图片或者字体图标。

![](https://img-blog.csdnimg.cn/20210420102851826.png)

CSS 三角是怎么来的？原理如下：

对一个没有大小的盒子设置边框，那么只要边框足够粗，就可以呈现三角效果。

如果只需要一个三角，那么对其他三个边框设置透明色即可。

通常 CSS 三角要配合定位来布局。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS 三角制作</title>
    <style>
        .box1 {
            width: 0;
            height: 0;
            /* border: 10px solid pink; */
            border-top: 30px solid hotpink;
            border-right: 30px solid black;
            border-bottom: 30px solid skyblue;
            border-left: 30px solid gray;
        }

        .box2 {
            width: 0;
            height: 0;
            border: 50px solid transparent;
            border-left-color: black;
            margin: 50px;
        }

        .jd {
            /* 子绝父相 */
            position: relative;
            width: 120px;
            height: 249px;
            background-color: black;
        }

        .jd span {
            /* 子绝父相 */
            position: absolute;
            right: 15px;
            top: -20px;
            width: 0;
            height: 0;
            /* 下面两行为了照顾兼容性 */
            line-height: 0;
            font-size: 0;
            border: 10px solid transparent;
            border-bottom-color: black;
        }
    </style>
</head>

<body>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="jd">
        <span></span>
    </div>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/20210420104336278.png)

# 四、CSS用户界面样式

## 4.1 什么是界面样式

所谓的界面样式，就是更改一些用户操作样式，以提高更好的用户体验。

- 更改用户的鼠标样式
- 表单轮廓
- 防止表单域拖拽

## 4.2 鼠标样式 cursor

```css
li { cursor: pointer; }
```

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

| 属性值        | 描述     |
| ------------- | -------- |
| `default`     | 默认箭头 |
| `pointer`     | 小手     |
| `move`        | 十字移动 |
| `text`        | 文本竖杠 |
| `not-allowed` | 禁止     |

注意：除了以上类型，还有其他很多类型。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>用户界面样式-鼠标样式</title>
</head>

<body>
    <ul>
        <li style="cursor: default;">我是默认的小白鼠标样式</li>
        <li style="cursor: pointer;">我是鼠标小手样式</li>
        <li style="cursor: move;">我是鼠标移动样式</li>
        <li style="cursor: text;">我是鼠标文本样式</li>
        <li style="cursor: not-allowed;">我是鼠标禁止样式</li>
    </ul>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/2021042011003289.gif)

## 4.3 轮廓线 outline

给表单添加 `outline: 0;` 或者 `outline: none;` 样式之后，就可以去掉默认的边框。

```css
input { outline: none; }
```

默认样式：

![](https://img-blog.csdnimg.cn/20210420111135354.gif)

修改后样式：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>轮廓线 outline</title>
    <style>
        input {
            /* 取消表单轮廓 */
            outline: none;
        }
    </style>
</head>

<body>
    <!-- 取消表单轮廓 -->
    <input type="text">
</body>

</html>
```

![](https://img-blog.csdnimg.cn/20210420111315285.gif)

## 4.4 防止拖拽文本域 resize

实际开发中，我们文本域右下角是不允许拖拽的。（会破坏布局！）

```css
textarea { resize: none; }
```

默认样式：

![](https://img-blog.csdnimg.cn/2021042011203862.gif)

修改后样式：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>防止拖拽文本域 resize</title>
    <style>
        textarea {
            /* 取消表单轮廓 */
            outline: none;
            /* 防止拖拽文本域 */
            resize: none;
        }
    </style>
</head>

<body>
    <!-- 防止拖拽文本域 -->
    <!-- <textarea></textarea>起始标签建议放在一行，因为这样不会导致文本域里文字前有空白，
    后期可以专门通过 padding 来设置文本周围的留白 -->
    <textarea name="" id="" cols="30" rows="10"></textarea>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/202104201120370.gif)

# 五、vertical-align 属性应用

CSS 的 vertical-align 属性使用场景：经常用于设置图片或者表单（行内块元素）和文字垂直对齐。

官方解释：用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或者行内块元素有效。

语法：

```css
vertical-align: baseline | top | middle | bottom
```

| 值         | 描述                                   |
| ---------- | -------------------------------------- |
| `baseline` | 默认。元素放置在父元素的基线上         |
| `top`      | 把元素的顶端与行中最高元素的顶端对齐   |
| `middle`   | 把此元素放置在父元素的中部             |
| `bottom`   | 把元素的顶端与行中最低的元素的顶端对齐 |

![](https://img-blog.csdnimg.cn/20210420124542850.png)

## 5.1 图片、表单和文字对齐

图片、表单都属于行内块元素，默认的 vertical-align 是基线对齐。

此时可以给图片、表单这些行内块元素的 vertical-align 属性设置为 middle 就可以让文字和图片垂直居中对齐了。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>利用vertical-align实现图片文字垂直居中对齐</title>
    <style>
        img {
            /* vertical-align: bottom; */
            /* 让图片和文字垂直居中 */
            vertical-align: middle;
            /* vertical-align: top; */
        }

        textarea {
            vertical-align: middle;
        }
    </style>
</head>

<body>
    <img src="images/ldh.jpg" alt=""> pink老师是刘德华

    <br>
    <textarea name="" id="" cols="30" rows="10"></textarea> 请您留言
</body>

</html>
```

![](https://img-blog.csdnimg.cn/20210420124932560.png)

## 5.2  解决图片底部默认空白缝隙问题

图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。

![](https://img-blog.csdnimg.cn/20210420125635475.png)

主要解决方法有两种：

1. 给图片添加 `vertical-align: middle | top | bottom` 等（推荐）
2. 把图片转换为块级元素 `display: block;`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>图片底侧空白缝隙解决方案</title>
    <style>
        div {
            border: 2px solid black;
        }

        img {
            vertical-align: middle;
            /* display: block; */
        }
    </style>
</head>

<body>
    <div>
        <img src="images/ldh.jpg" alt="">
    </div>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/20210420125750954.png)

# 六、溢出的文字省略号显示

## 6.1 单行文本溢出省略号显示

三个必要条件：

```css
/* 1. 先强制一行内显示文本 */ 
white-space: nowrap; 	/*（ 默认 normal 自动换行）*/ 
/* 2. 超出的部分隐藏 */ 
overflow: hidden; 
/* 3. 文字用省略号替代超出的部分 */ 
text-overflow: ellipsis;
```

案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>单行文本溢出显示省略号</title>
    <style>
        div {
            width: 150px;
            height: 80px;
            background-color: pink;
            margin: 100px auto;
            /* 这个单词的意思是如果文字显示不开自动换行 */
            /* white-space: normal; */
            /* 1.这个单词的意思是如果文字显示不开也必须强制一行内显示 */
            white-space: nowrap;
            /* 2.溢出的部分隐藏起来 */
            overflow: hidden;
            /* 3.文字溢出的时候用省略号来显示 */
            text-overflow: ellipsis;
        }
    </style>
</head>

<body>
    <div>
        啥也不说，此处省略一万字
    </div>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/20210420132753998.png)

## 6.2 多行文本溢出省略号显示

多行文本溢出显示省略号，有较大兼容性问题， 适合于 webkit 浏览器或移动端（移动端大部分是 webkit 内核）。

```css
overflow: hidden;
text-overflow: ellipsis;
/* 弹性伸缩盒子模型显示 */
display: -webkit-box;
/* 限制在一个块元素显示的文本的行数 */
-webkit-line-clamp: 2;
/* 设置或检索伸缩盒对象的子元素的排列方式 */
-webkit-box-orient: vertical;
```

更推荐让后台人员来做这个效果，因为后台人员可以设置显示多少个字，操作更简单。

案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>单行文本溢出显示省略号</title>
    <style>
        div {
            width: 150px;
            height: 65px;
            background-color: pink;
            margin: 100px auto;
            overflow: hidden;
            text-overflow: ellipsis;
            /* 弹性伸缩盒子模型显示 */
            display: -webkit-box;
            /* 限制在一个块元素显示的文本的行数 */
            -webkit-line-clamp: 3;
            /* 设置或检索伸缩盒对象的子元素的排列方式 */
            -webkit-box-orient: vertical;
        }
    </style>
</head>

<body>
    <div>
        啥也不说，此处省略一万字,啥也不说，此处省略一万字此处省略一万字
    </div>
</body>

</html>
```

Chrome 浏览器效果：

![](https://img-blog.csdnimg.cn/20210420132822674.png)

IE 浏览器效果：

![](C:\Users\JERRY\AppData\Roaming\Typora\typora-user-images\image-20210420133559237.png)