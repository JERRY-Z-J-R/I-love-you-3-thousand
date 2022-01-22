# 【移动Web开发之流式布局】前端小抄(16)

> 本学习笔记是个人对 Pink 老师课程的总结归纳，转载请注明出处！ 

# 一、移动端基础

## 1.1 浏览器现状

由于移动端浏览器的发展比较晚，所以主流移动端浏览器的内核都是基于 `Webkit` 内核打造的。

我们在进行移动端的页面开发时，兼容性主要考虑 `Webkit` 内核。

## 1.2 手机屏幕现状

目前无论是 安卓 还是 IOS，移动端设备的屏幕尺寸非常多，碎片化非常严重。

但是，前端页面开发者无需关注这些分辨率，因为我们常用的尺寸单位是 `px`。

## 1.3 常见移动端屏幕尺寸

目前移动端的屏幕尺寸非常多，并且随着发展还会越来越多。

但是，对于移动端的 Web 开发来说，我们不用考虑太多。

对于专门的 安卓 和 IOS 开发，才需要特别关注 `dp`、`dpi`、`pt`、`ppi` 等单位。

## 1.4 移动端调试方法

- Chrome DevTools（谷歌浏览器）的模拟手机调试
- 搭建本地 Web 服务器，手机和服务器一个局域网内，通过手机访问服务器
- 使用外网服务器，直接 IP 或 域名 访问

## 1.5 总结

- 移动端浏览器我们主要对 Webkit 内核进行兼容
- 我们现在开发的移动端主要针对手机端开发
- 现在移动端碎片化比较严重，分辨率和屏幕尺寸大小不一
- 学会用谷歌浏览器模拟手机界面以及调试

# 二、视口

视口：浏览器显示页面内容的屏幕区域。

视口的分类：布局视口、视觉视口、理想视口。

## 2.1 布局视口

- 为了解决早期 PC 端网页在手机上显示的问题，移动端浏览器都默认设置了一个布局视口。
- IOS、Android 基本都将布局视口分辨率设置为 980px，所以 PC 上的网页大多也能在手机上呈现，但是网页元素看上去会非常小，一般可以通过手动缩放网页。

## 2.2 视觉视口

- 字面意思，它是用户正在看到的网站的区域。注意：是网站的区域。
- 我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。

## 2.3 理想视口

> 发明者：史蒂夫·乔布斯

- 为了使网站在移动端有最理想的浏览和阅读宽度而设定
- 理想视口，对设备来讲，是最理想的视口尺寸
- 需要手动添写 `meta` 视口标签通知浏览器操作
- `meta` 视口标签的主要目的：布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就有多宽。

## 2.4 总结

- 视口就是浏览器显示页面内容的屏幕区域
- 视口分为布局视口、视觉视口和理想视口
- 我们移动端布局想要的是理想视口就是手机屏幕有多宽，我们的布局视口就有多宽
- 想要理想视口，我们需要给我们的移动端页面添加 `meta` 视口标签

## 2.5 meta视口标签

```html
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

viewport：视口

| 属性            | 解释说明                                                     |
| --------------- | ------------------------------------------------------------ |
| `width`         | 宽度设置的是 viewport 宽度，可以设置 `device-width` “设备宽度” 特殊值 |
| `initial-scale` | 初始缩放比，大于 0 的数字，一般来说是设置为 1:1 即：`1.0`    |
| `maximum-scale` | 最大缩放比，大于 0 的数字                                    |
| `minimum-scale` | 最小缩放比，大于 0 的数字                                    |
| `user-scalable` | 用户是否可以缩放，yes 或 no（1或0），一般来说是 no           |

# 三、二倍图

## 3.1 物理像素&物理像素比

- 物理像素点指的是屏幕显示的最小颗粒，是物理真实存在的
- 在 PC 端页面，1px 等于 1 个物理像素，但是移动端就不尽相同
- 1px 能实际显示的物理像素点的个数就称为物理像素比或屏幕像素比

`物理像素比 = 物理像素（分辨率） / 独立像素（CSS像素）`

例如：iPhone X 的物理像素比为 3

| 屏幕尺寸 | 独立像素（CSS像素） | 物理像素（分辨率） | ppi/dpi（像素密度） | dpr（倍图） |
| -------- | ------------------- | ------------------ | ------------------- | ----------- |
| 5.8英寸  | 812×375             | 2436×1125          | 458                 | 3           |

物理像素比提出的原因：

- 在早期，PC及移动端都是：1CSS像素 = 1物理像素
- 随着 Retina（视网膜屏幕）显示技术的普及，可以将更多的物理像素点压缩至一块屏幕里，从而达到更高的分辨率，并提高屏幕显示的细腻程度。

![](mark-img/20210717222122438.png)

## 3.2 多倍图

- 对于一张 `50px*50px` 的图片，在手机 Retina 屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊
- 在标准的 viewport 设置中，使用倍图来提高图片质量，解决在高清设备中的模糊问题
- 通常使用二倍体，是因为 iPhone 6\7\8 的影响，但是现在还存在 3倍图 4倍图 的情况，这个要看实际开发需求
- 背景图片要注意缩放问题
- 字体不用考虑缩放问题，因为字体是矢量的，不会失真

```css
  /* 在 iphone8 下面 */
  img {
      /* 原始图片100*100px */
      width: 50px;
      height: 50px;
  }

  .box {
      /* 原始图片100*100px */
      background-size: 50px 50px;
  }
```

案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-二倍图做法</title>
    <style>
        /* 我们需要一个50*50像素（css像素）的图片，直接放到我们的iphone8里面会放大2倍100*100就会模糊 */
        /* 我们采取的是放一个100*100图片，然后手动的把这个图片缩小为50*50（css像素）*/
        /* 我们准备的图片比我们实际需要的大小大2倍，这就方式就是2倍图 */
        img:nth-child(2) {
            width: 50px;
            height: 50px;
        }
    </style>
</head>

<body>
    <!-- 模糊的 -->
    <img src="images/apple50.jpg" alt="">
    <!-- 我们采取2倍图 -->
    <img src="images/apple100.jpg" alt="">
</body>

</html>
```

手机模拟效果：

<img src="mark-img/20210717225458818.jpg" style="zoom: 25%;" />

【附：二倍精灵图做法】

- 在 PS 中将精灵图等比例缩放为原来的一半
- 之后根据大小测量坐标
- 注意代码里面 background-size 也要写：精灵图原来宽度的一半

## 3.3 背景缩放

`background-size` 属性规定背景图像的尺寸

```css
background-size: 背景图片宽度 背景图片高度;
```

- 单位：长度 | 百分比 | cover | contain
- cover 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域
- contain 把图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域

注意：

1. 以长度为单位时，只写其中一个参数，另一个参数会自动适配
2. 以百分比为单位时，其参照对象为父盒子，只写其中一个参数，另一个参数会自动适配

【cover & contain 案例】

![](mark-img/20210717230434452.png)

cover 案例：

```css
background-size: cover;
```

![](mark-img/20210717230641170.png)

contain 案例：

```css
background-size: contain;
```

![](mark-img/20210717230744247.png)

当图片是竖直放置时：

![](mark-img/20210717231105402.png)

【背景缩放案例】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>05-背景图片2倍图</title>

    <style>
        /* 1. 我们有一个50*50的盒子需要一个背景图片，但是根据分析这个图片还是要准备2倍，100*100 */
        /* 2. 我们需要把这个图片缩放一半，也就是 50*50 background-size*/
        div {
            width: 50px;
            height: 50px;
            border: 1px solid red;
            background: url(images/apple100.jpg) no-repeat;
            background-size: 50px 50px;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

## 3.4 多倍图切工具 cutterman

![](mark-img/2021071723515666.png)

一次性导出多种倍数的图片

# 四、移动端开发选择

## 4.1 移动端主流方案

（1）单独制作移动端页面【主流】

- 京东 https://m.jd.com/
- 淘宝 https://m.taobao.com/
- 苏宁 https://m.suning.com/
- ……

（2）响应式页面兼容移动端【其次】

- https://www.samsungeshop.com.cn/
- ……

## 4.2 单独移动端页面（主流）

通常情况下，网址域名前面加 `m(mobile)` 可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。

## 4.3 响应式兼容PC移动端（其次）

通过判断浏览器窗口宽度来改变样式，以适应不同终端。

缺点：制作麻烦，需要花很大精力去调兼容性问题。

## 4.4 总结

现在市场常见的移动端开发有单独制作移动端页面和相应式页面两种方案。

现在市场主流的选择还是单独制作移动端页面。

# 五、移动端技术解决方案

## 5.1 移动端浏览器

- 移动端浏览器基本以`webkit`内核为主，因此我们就考虑 `webkit` 兼容性问题
- 我们可以放心使用 H5标签 和 CSS3样式
- 同时我们浏览器的私有前缀我们只要考虑添加 `webkit` 即可

## 5.2 CSS初始化 normalize.css

移动端 CSS 初始化推荐使用 `normalize.css/`

- Normalize.css：保护了有价值的默认值
- Normalize.css：修复了浏览器的bug
- Normalize.css：是模块化的
- Normalize.css：拥有详细的文档

官网地址：http://necolas.github.io/normalize.css/

## 	5.3 CSS3盒子模型 box-sizing

- 传统模式宽度计算：盒子的宽度 = CSS中设置的 width + border + padding
- CSS3盒子模型：盒子的宽度 = CSS中设置的宽度 width，里面包含了 border 和 padding

也就是说，我们的 CSS3 中的盒子模型，padding 和 border 不会撑大盒子了

```css
/* CSS3盒子模型 */
box-sizing: border-box;
/* 传统盒子模型 */
box-sizing: content-box;
```

传统 or CSS3盒子模型？

- 移动端可以全部使用 CSS3 盒子模型
- PC 端如果完全需要兼容，我们就用传统模式，如果不考虑兼容性，我们就选择 CSS3 盒子模型

案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>06-CSS3盒子模型</title>
    <style>
        div:nth-child(1) {
            /* 传统盒子模型= width + border + padding */
            width: 200px;
            height: 200px;
            background-color: pink;
            padding: 10px;
            border: 10px solid red;
            box-sizing: content-box;
        }

        div:nth-child(2) {
            /* 有了这句话就让盒子变成CSS3盒子模型 */
            /* padding 和 border 不会再撑大盒子了 */
            box-sizing: border-box;
            width: 200px;
            height: 200px;
            background-color: purple;
            padding: 10px;
            border: 10px solid blue;
        }
    </style>
</head>

<body>
    <div></div>
    <div></div>
</body>

</html>
```

![](mark-img/20210718112530377.png)

![](mark-img/20210718112624778.png)

## 5.4 特殊样式

```css
/* CSS3盒子模型 */
box-sizing: border-box;
-webkit-box-sizing: border-box;
/* 点击高亮，我们一般需要清除，设置 transparent 完成透明 */
/* 说明：比如a链接在移动端默认点击时会有一个背景颜色高亮 */
-webkit-tap-highlight-color: transparent;
/* 比如可以这样： */
* {
    -webkit-tap-highlight-color: transparent;
}
/* 在移动端浏览器默认的外观在iOS上加上这个属性才能给按钮和输入框自定义样式 */
-webkit-appearance: none;
/* 比如可以这样： */
input  {
    -webkit-appearance: none;
}
/* 禁用长按页面时的弹出菜单 */
-webkit-touch-callout: none;
/* 此处以img及a为例子 */
img, a { -webkit-touch-callout: none; }
```

# 六、移动端常见布局

【移动端技术选型】

移动端布局和以前我们学习的PC端有所区别：

（1）单独制作移动端页面【主流】

- 流式布局（百分比布局）
- flex 弹性布局（强烈推荐）
- less + rem + 媒体查询布局
- 混合布局

（2）响应式页面兼容移动端【其次】

- 媒体查询
- bootstrap

## 6.1 流式布局（百分比布局）

- 流式布局，就是百分比布局，也称非固定像素布局
- 通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限时，内容向两侧填充
- 流式布局方式是移动Web开发使用的比较常见的布局方式
- `max-width` 最大宽度（`max-height` 最大高度）
- `min-width` 最小宽度（`min-height` 最小高度）

案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>08-流式布局</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        section {
            width: 100%;
            max-width: 980px;
            min-width: 320px;
            margin: 0 auto;
        }

        section div {
            float: left;
            width: 50%;
            height: 400px;
        }

        section div:nth-child(1) {
            background-color: pink;
        }

        section div:nth-child(2) {
            background-color: rgb(0, 0, 0);
        }
    </style>
</head>

<body>
    <section>
        <div></div>
        <div></div>
    </section>
</body>

</html>
```

![](mark-img/20210718144002640.gif)

## 【案例：京东移动端首页】

【项目结构】

![](mark-img/20210719141508481.png)

【HTML】

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no,maximum-scale=1.0,minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- 引入我们的css初始化文件 -->
    <link rel="stylesheet" href="css/normalize.css">
    <!-- 引入我们首页的css -->
    <link rel="stylesheet" href="css/index.css">
    <title>Document</title>
</head>

<body>
    <!-- 顶部 -->
    <header class="app">
        <ul>
            <li>
                <img src="images/close.png" alt="">
            </li>
            <li>
                <img src="images/logo.png" alt="">
            </li>
            <li>打开京东App，购物更轻松</li>
            <li>立即打开</li>
        </ul>
    </header>
    <!-- 搜索 -->
    <div class="search-wrap">
        <div class="search-btn"></div>
        <div class="search">
            <div class="jd-icon"></div>
            <div class="sou"></div>
        </div>
        <div class="search-login">登陆</div>
    </div>
    <!-- 主体内容部分 -->
    <div class="main-content">
        <!-- 滑动图 -->
        <div class="slider">
            <img src="upload/banner.dpg" alt="">
        </div>

        <!-- 小家电品牌日 -->
        <div class="brand">
            <div>
                <a href="#">
                    <img src="upload/pic11.dpg" alt="">
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="upload/pic22.dpg" alt="">
                </a>

            </div>
            <div>
                <a href="#">
                    <img src="upload/pic33.dpg" alt="">
                </a>

            </div>
        </div>
        <!-- nav部分 -->
        <nav class="clearfix">
            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav2.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav3.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

            <a href="">
                <img src="upload/nav1.webp" alt="">
                <span>京东超市</span>
            </a>

        </nav>
        <!-- 新闻模块 -->
        <div class="news">
            <a href="#">
                <img src="upload/new1.dpg" alt="">
            </a>
            <a href="#">
                <img src="upload/new2.dpg" alt="">

            </a>
            <a href="#">
                <img src="upload/new3.dpg" alt="">

            </a>
        </div>
    </div>
</body>

</html>
```

【CSS】

```css
body {
  width: 100%;
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  color: #666;
  line-height: 1.5;
}

/*点击高亮我们需要清除清除  设置为transparent 完成透明*/

* {
  -webkit-tap-highlight-color: transparent;
}

/*在移动端浏览器默认的外观在iOS上加上这个属性才能给按钮和输入框自定义样式*/

input {
  -webkit-appearance: none;
}

/*禁用长按页面时的弹出菜单*/

img,
a {
  -webkit-touch-callout: none;
}

a {
  color: #666;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  vertical-align: middle;
}

div {
  /* css3 盒子模型 */
  box-sizing: border-box;
}

.clearfix:after {
  content: "";
  display: block;
  line-height: 0;
  visibility: hidden;
  height: 0;
  clear: both;
}

.app {
  height: 45px;
}

.app ul li {
  float: left;
  height: 45px;
  line-height: 45px;
  background-color: #333333;
  text-align: center;
  color: #fff;
}

.app ul li:nth-child(1) {
  width: 8%;
}

.app ul li:nth-child(1) img {
  width: 10px;
}

.app ul li:nth-child(2) {
  width: 10%;
}

.app ul li:nth-child(2) img {
  width: 30px;
  /* 图片默认和文字的底线对齐，此处设置图片与文字居中对齐 */
  /* 这样的话，通过对文字设置行高的方式，就也可以实现图片的垂直居中对齐 */
  vertical-align: middle;
}

.app ul li:nth-child(3) {
  width: 57%;
}

.app ul li:nth-child(4) {
  width: 25%;
  background-color: #f63515;
}

/* 搜索 */

.search-wrap {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 44px;
  min-width: 320px;
  max-width: 640px;
}

.search-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 44px;
}

.search-btn::before {
  content: "";
  display: block;
  width: 20px;
  height: 18px;
  background: url(../images/s-btn.png) no-repeat;
  background-size: 20px 18px;
  margin: 14px 0 0 15px;
}

.search-login {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 44px;
  color: #fff;
  line-height: 44px;
}

.search {
  position: relative;
  height: 30px;
  background-color: #fff;
  margin: 0 50px;
  border-radius: 15px;
  margin-top: 7px;
}

.jd-icon {
  width: 20px;
  height: 15px;
  position: absolute;
  top: 8px;
  left: 13px;
  background: url(../images/jd.png) no-repeat;
  background-size: 20px 15px;
}

.jd-icon::after {
  content: "";
  position: absolute;
  right: -8px;
  top: 0;
  display: block;
  width: 1px;
  height: 15px;
  background-color: #ccc;
}

.sou {
  position: absolute;
  top: 8px;
  left: 50px;
  width: 18px;
  height: 15px;
  background: url(../images/jd-sprites.png) no-repeat -81px 0;
  background-size: 200px auto;
}

.slider img {
  width: 100%;
}

/* 品牌日 */

.brand {
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}

.brand div {
  float: left;
  width: 33.33%;
}

.brand div img {
  width: 100%;
}

/* nav */

nav {
  padding-top: 5px;
}

nav a {
  float: left;
  width: 20%;
  text-align: center;
}

nav a img {
  width: 40px;
  margin: 10px 0;
}

nav a span {
  display: block;
}

/* news */

.news {
  margin-top: 20px;
}

.news img {
  width: 100%;
}

.news a {
  float: left;
  box-sizing: border-box;
}

.news a:nth-child(1) {
  width: 50%;
}

/* .news a:nth-child(2),
.news a:nth-child(3),
{
    width: 25%;
} */

/* n+2 就是从从2个往后面选 */

.news a:nth-child(n + 2) {
  width: 25%;
  border-left: 1px solid #ccc;
}

/* .news a:nth-child(3) {
    width: 25%;
} */
```

【效果图】

<img src="mark-img/20210719141842628.png" style="zoom: 50%;" />
