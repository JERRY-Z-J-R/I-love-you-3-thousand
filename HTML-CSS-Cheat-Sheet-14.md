---
title: 【PC端品优购项目】前端小抄(14)
date: 2021-02-17 17:06:39
categories:
- [前端]
- [HTML]
- [CSS]
tags:
- HTML
- CSS
- Pink
cover: https://img-blog.csdnimg.cn/20210316084735288.jpg
---

# 【PC端品优购项目】前端小抄(14)

> 本学习笔记是个人对 Pink 老师课程的总结归纳，转载请注明出处！ 

## 电商—主页

![](https://img-blog.csdnimg.cn/20210423230039123.png)

## 电商—分类列表页

![](https://img-blog.csdnimg.cn/20210423230312162.png)

## 电商—注册页

![](https://img-blog.csdnimg.cn/20210423230344469.png)



# 一、品优购项目规划

## 1.1 网站制作流程

![](https://img-blog.csdnimg.cn/20210423231159334.png)

原型图：

![](https://img-blog.csdnimg.cn/20210424002615861.jpg)

## 1.2 品优购项目整体介绍

- 项目名称：品优购
- 项目描述：品优购是一个电商网站，我们要完成 PC 端首页、列表页、注册页面的制作

![](https://img-blog.csdnimg.cn/20210423231252598.png)

![](https://img-blog.csdnimg.cn/20210423231304381.png)

![](https://img-blog.csdnimg.cn/20210423231312363.png)

## 1.3 品优购项目的学习目的

- 电商类网站比较综合，里面需要大量的布局技术，包括布局方式、常见效果以及周边技术
- 品优购项目能复习、总结、提高基础班所学布局技术
- 写完品优购项目，能对实际开发中制作 PC 端页面流程有一个整体的感知
- 为后期学习移动端项目做铺垫

## 1.4 开发工具以及技术栈

- 开发工具
  - `VSCode` 、`Photoshop`（`Fw`）、主流浏览器（以 `Chrome` 浏览器为主）
- 技术栈
  - 利用 `HTML5` + `CSS3` 手动布局，可以大量使用 `H5` 新增标签和样式
  - 采取结构与样式相分离，模块化开发
  - 良好的代码规范有利于团队更好的开发协作，提高代码质量，因此品优购项目里面，请同学们遵循以下代码规范
- 总结
  - 品优购项目整体介绍 （制作首页、列表页、注册页三个页面）
  - 品优购项目学习目的 （里面包含技术较多，能极大锻炼我们布局技术）
  - 开发工具以及技术栈 （切图用 `ps`， 代码用 `VSCode`，测试用 `Chrome`， 大量使用 `HTML5` + `CSS3`）

## 1.5 品优购项目搭建工作

需要创建如下文件夹及文件：
- 项目文件夹 —— `shoping`
  - 样式类图片文件夹 —— `images`
  - 产品图片文件夹 —— `upload`
  - 字体类文件夹 —— `fonts`
  - 脚本文件夹 —— `js`
  - 样式文件夹 —— `css`
    - CSS 初始化样式文件 —— `base.css`
    - CSS 公共样式文件 —— `common.css`
    - CSS 首页样式文件 —— `index.css`
    - CSS 列表页样式文件 —— `list.css`
    - CSS 登录页样式文件 —— `register.css`
  - 首页 —— `index.html`
  - 列表页 —— `list.html`
  - 登录页 —— `register.html`
  - 网站图标 —— `facicon.ico`

注意：

有些网站初始化不太提倡  `* { margin: 0; padding: 0; }` 的写法。

原因：`*` 会渲染所有的元素，效率会比较低。

比如新浪：

```css
html, 
body, 
ul, 
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img {
	margin: 0; 
    padding: 0 
}
```

- 文件夹及文件图示：

![](https://img-blog.csdnimg.cn/20210423232004160.png)

![](https://img-blog.csdnimg.cn/20210423232040879.png)

![](https://img-blog.csdnimg.cn/20210423232108704.png)

![](https://img-blog.csdnimg.cn/20210423232141138.png)

![](https://img-blog.csdnimg.cn/20210423232204432.png)

- 模块化开发
  - 所谓的模块化：将一个项目按照功能划分，一个功能一个模块，互不影响
  
  - 模块化开发具有重复使用、更换方便等优点

![](https://img-blog.csdnimg.cn/20210423232408168.png)

- 代码模块化开发
  - 有些样式和结构在很多页面都会出现，比如页面头部和底部，大部分页面都有。此时，可以把这些结构和样式单独作为一个模块，然后重复使用
  - 这里最典型的应用就是 `common.css` 公共样式，写好一个样式，其余的页面用到这些相同的样式
  - 模块化开发具有重复使用、修改方便等优点

![](https://img-blog.csdnimg.cn/20210423232458517.png)

`common.css` 公共样式里面包含 `版心宽度`、`清除浮动`、`页面文字颜色` 等公共样式。

## 1.6 网站favicon图标

- `favicon.ico` 一般用于作为缩略的网站标志，它显示在浏览器的地址栏或者标签上
- 目前主要的浏览器都支持 `favicon.ico` 图标

![](https://img-blog.csdnimg.cn/20210423232739165.png)

- 制作 `favicon` 图标
  
  - 把品优购图标切成 `png` 图片
  - 把 `png` 图片转换为 `ico` 图标，这需要借助于第三方转换网站，例如比特虫：[http://www.bitbug.net/](http://www.bitbug.net/)
- `favicon` 图标放到网站根目录 `shoping` 下
- `HTML` 页面引入 `favicon` 图标
  
  - 在 `html` 页面里面的 `<head></head>` 元素之间引入代码：
  
    `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>`

## 1.7 网站TDK三大标签SEO优化

- `SEO（Search Engine Optimization）` 汉译为 `搜索引擎优化`，是一种利用搜索引擎的规则提高网站在有关搜索引擎内 `自然排名` 的方式
- `SEO` 的目的是对网站进行深度的优化，从而帮助网站获取免费的流量，进而在搜索引擎上提升网站的排名，提高网站的知名度
- 页面必须有三个标签用来符合 SEO 优化

![](https://img-blog.csdnimg.cn/20210423234017129.png)

- `title` 网站标题

`title` 具有不可替代性，是我们内页的第一个重要标签，是搜索引擎了解网页的入口和对网页主题归属的最佳判断点。

**建议：**

网站名（产品名）-  网站的介绍 （尽量不要超过30个汉字）。

**例如：**

`京东(JD.COM) - 综合网购首选 - 正品低价、品质保障、配送及时、轻松购物！`

`小米商城 - 小米5s、红米Note 4、小米MIX、小米笔记本官方网站`

- `description` 网站说明

**简要说明我们网站主要是做什么的。**

我们提倡，`description` 作为网站的总体业务和主题概括，多采用 `“我们是…”`、`“我们提供…”`、`“×××网作为…”`、`“电话：010…”` 之类语句。

**例如：**

```html
<meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!" />
```

- `keywords` 关键字

**keywords 是页面关键词，是搜索引擎的关注点之一。**

`keywords` 最好限制为 `6～8` 个 `关键词`，关键词之间用英文逗号隔开，采用 `关键词1, 关键词2` 的形式。

**例如：**

```html
<meta name= " keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东" />
```

对于我们前端人员来说，我们只需要准备好这三个标签，具体里面的内容，有专门的 SEO 人员准备。

# 二、品优购首页制作

- 网站的首页一般都是使用 `index` 命名，比如 `index.html` 或者 `index.php`
- 我们开始制作首页的头部和底部的时候，根据模块化开发，样式要写到 `common.css` 里面

CSS 初始化 `base.css`：

```css
/* 把我们所有标签的内外边距清零 */
* {
    margin: 0;
    padding: 0;
    /* css3盒子模型 */
    box-sizing: border-box;
}

/* em 和 i 斜体的文字不倾斜 */
em,
i {
    font-style: normal
}

/* 去掉 li 的小圆点 */
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过 button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    /* 默认有灰色边框我们需要手动去掉 */
    border: 0;
    outline: none;
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}

/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
```

## 2.1 常用模块类名命名

- 以下是我们约定的命名模块，同学们可以直接使用以下类名即可

![](https://img-blog.csdnimg.cn/20210423234052206.png)

## 2.2 快捷导航shortcut制作

![](https://img-blog.csdnimg.cn/20210423234129383.png)

- 通栏的盒子命名为 `shortcut`，是快捷导航的意思。 注意这里的行高，可以继承给里面的子盒子
- 里面包含版心的盒子
- 版心盒子里面包含 1 号左侧盒子左浮动
- 版心盒子里面包含 2 号右侧盒子右浮动
- 需要用到字体图标

```html
<!-- 快捷导航模块 start -->
<section class="shortcut">
    <div class="w">
        <div class="fl">
            <ul>
                <li>品优购欢迎您！&nbsp;</li>
                <li>
                    <a href="#">请登录</a> &nbsp; <a href="#" class="style_red">免费注册</a>
                </li>
            </ul>
        </div>
        <div class="fr">
            <ul>
                <li>我的订单</li>
                <!--在实际的开发中 '|' 一般使用一个盒子来制作-->
                <li></li>
                <!--利用伪元素法 + 字体图标制作下三角箭头-->
                <li class="arrow-icon">我的品优购</li>
                <li></li>
                <li>品优购会员</li>
                <li></li>
                <li>企业采购</li>
                <li></li>
                <li class="arrow-icon">关注品优购</li>
                <li></li>
                <li class="arrow-icon">客户服务</li>
                <li></li>
                <li class="arrow-icon">网站导航</li>
            </ul>
        </div>
    </div>
</section>
<!-- 快捷导航模块 end -->
```

```css
/* 声明字体图标 这里一定要注意路径的变化 */
@font-face {
    font-family: 'icomoon';
    src: url('../fonts/icomoon.eot?tomleg');
    src: url('../fonts/icomoon.eot?tomleg#iefix') format('embedded-opentype'),
    url('../fonts/icomoon.ttf?tomleg') format('truetype'),
    url('../fonts/icomoon.woff?tomleg') format('woff'),
    url('../fonts/icomoon.svg?tomleg#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

/* 版心 */
.w {
    width: 1200px;
    margin: 0 auto;
}

/* 左浮动 */
.fl {
    float: left;
}

/* 右浮动 */
.fr {
    float: right;
}

/* 基础颜色 */
.style_red {
    color: #c81623;
}

/* 快捷导航模块 */
.shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;
}

.shortcut ul li {
    float: left;
}

/* 选择所有的偶数的小 li */
.shortcut .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0;
}

/* after伪元素 */
.arrow-icon::after {
    content: '\e91e';
    font-family: 'icomoon';
    margin-left: 6px;
}
```

## 2.3 header制作

![](https://img-blog.csdnimg.cn/20210423234220363.png)

- `header` 盒子必须要有高度
- 1 号盒子是 `logo` 标志定位
- 2 号盒子是 `search` 搜索模块定位
- 3 号盒子是 `hotwords` 热词模块定位
- 4 号盒子是 `shopcar` 购物车模块
  - `count` 统计部分用绝对定位做
  
  - `count` 统计部分不要给宽度，因为可能买的件数比较多，让件数撑开就好了，给一个高度
  
  - 一定注意左下角不是圆角，其余三个是圆角写法： `border-radius: 7px 7px 7px 0;`
  

**logo SEO 优化**

  - `logo` 里面首先放一个 `h1` 标签，目的是为了提权，告诉搜索引擎，这个地方很重要
  - `h1` 里面再放一个链接，可以返回首页的，把 `logo` 的背景图片给链接即可
  - 为了搜索引擎收录我们，我们链接里面要放文字（网站名称），但是文字不要显示出来
    - 方法1：`text-indent` 移到盒子外面（`text-indent: -9999px`) ，然后 `overflow:hidden` ，淘宝的做法
    - 方法2：直接给 `font-size: 0`; 就看不到文字了，京东的做法
  - 最后给链接一个 `title` 属性，这样鼠标放到 `logo` 上就可以看到提示文字了

  **search 模块制作**

1. 给定一个大盒子，并设置其边框
2. 在大盒子里放两个小盒子，不用设置边框

![](https://img-blog.csdnimg.cn/20210423234457613.png)

![](https://img-blog.csdnimg.cn/20210424080337251.png)

```html
<!-- header头部模块制作 start -->
<header class="header w">
    <!-- logo模块 -->
    <!-- 严格遵循logo制作标准，以提高SEO -->
    <div class="logo">
        <h1>
            <a href="index.html" title="品优购商城">品优购商城</a>
        </h1>
    </div>
    <!-- search搜索模块 -->
    <div class="search">
        <input type="search" name="" id="" placeholder="语言开发">
        <button>搜索</button>
    </div>
    <!-- hotwords模块制作 -->
    <div class="hotwords">
        <a href="#" class="style_red">优惠购首发</a>
        <a href="#">亿元优惠</a>
        <a href="#">9.9元团购</a>
        <a href="#">美满99减30</a>
        <a href="#">办公用品</a>
        <a href="#">电脑</a>
        <a href="#">通信</a>
    </div>
    <!-- 购物车模块 -->
    <div class="shopcar">
        我的购物车
        <i class="count">8</i>
    </div>
</header>
<!-- header头部模块制作 end -->
```

```css
/* header 头部制作 */
.header {
    position: relative;
    height: 105px;

}

.logo {
    position: absolute;
    top: 25px;
    width: 171px;
    height: 61px;

}

.logo a {
    display: block;
    width: 171px;
    height: 61px;
    background: url(../images/logo.png) no-repeat;
    /* font-size: 0;京东的做法*/
    /* 淘宝的做法让文字隐藏（先让文字溢出，然后在设置溢出隐藏 */
    text-indent: -9999px;
    overflow: hidden;
}

.search {
    position: absolute;
    left: 346px;
    top: 25px;
    width: 538px;
    height: 36px;
    border: 2px solid #b1191a;
}

.search input {
    float: left;
    width: 454px;
    height: 32px;
    padding-left: 10px;
}

.search button {
    float: left;
    width: 80px;
    height: 32px;
    background-color: #b1191a;
    font-size: 16px;
    color: #fff;
}

.hotwords {
    position: absolute;
    top: 66px;
    left: 346px;
}

.hotwords a {
    margin: 0 10px;
}

.shopcar {
    position: absolute;
    right: 60px;
    top: 25px;
    width: 140px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #dfdfdf;
    background-color: #f7f7f7;
}

.shopcar::before {
    content: '\e93a';
    font-family: 'icomoon';
    margin-right: 5px;
    color: #b1191a;
}

.shopcar::after {
    content: '\e920';
    font-family: 'icomoon';
    margin-left: 10px;
}

.count {
    position: absolute;
    top: -5px;
    /* 此处使用左对齐的原因是，当购物车商品数量很大时，统计模块左边固定，右边延伸 */
    left: 105px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    background-color: #e60012;
    padding: 0 5px;
    border-radius: 7px 7px 7px 0;
}
```

## 2.4 nav导航制作

![](https://img-blog.csdnimg.cn/20210424085144838.png)

![](https://img-blog.csdnimg.cn/20210423234524845.png)

- `nav` 盒子通栏有高度，而且有个下边框
- 1 号盒子左侧浮动，`dropdown`
- 2 号盒子左侧浮动，`navitems` 导航栏组
- 1 号盒子有讲究，根据相关性，里面包含 `.dt` 和 `.dd` 两个盒子

说明：在布局网页的时候要合理的考虑模块之间的相关性，做到联系紧密的模块之间“不分家”！

之所以叫 dropdown 是因为，它本质上属于下拉菜单。

![](https://img-blog.csdnimg.cn/2021042408532739.png)

![](https://img-blog.csdnimg.cn/20210423234613824.png)

```html
<!-- nav模块制作 start -->
<nav class="nav">
    <div class="w">
        <div class="dropdown">
            <div class="dt">全部商品分类</div>
            <div class="dd">
                <ul>
                    <li><a href="#">家用电器</a></li>
                    <li><a href="#">手机</a>、 <a href="#">数码</a>、<a href="#">通信</a></li>
                    <li><a href="#">电脑、办公</a></li>
                    <li><a href="#">家居、家具、家装、厨具</a></li>
                    <li><a href="#">男装、女装、童装、内衣</a></li>
                    <li><a href="#">个户化妆、清洁用品、宠物</a></li>
                    <li><a href="#">鞋靴、箱包、珠宝、奢侈品</a></li>
                    <li><a href="#">运动户外、钟表</a></li>
                    <li><a href="#">汽车、汽车用品</a></li>
                    <li><a href="#">母婴、玩具乐器</a></li>
                    <li><a href="#">食品、酒类、生鲜、特产</a></li>
                    <li><a href="#">医药保健</a></li>
                    <li><a href="#">图书、音像、电子书</a></li>
                    <li><a href="#">彩票、旅行、充值、票务</a></li>
                    <li><a href="#">理财、众筹、白条、保险</a></li>

                </ul>
            </div>
        </div>
        <div class="navitems">
            <ul>
                <li><a href="#">服装城</a></li>
                <li><a href="#">美妆馆</a></li>
                <li><a href="#">传智超市</a></li>
                <li><a href="#">全球购</a></li>
                <li><a href="#">闪购</a></li>
                <li><a href="#">团购</a></li>
                <li><a href="#">拍卖</a></li>
                <li><a href="#">有趣</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- nav模块制作 end -->
```

```css
/* nav模块制作 */
.nav {
    height: 47px;
    border-bottom: 2px solid #b1191a;
}

.nav .dropdown {
    float: left;
    width: 210px;
    height: 45px;
    background-color: #b1191a;
}

.nav .navitems {
    float: left;
}

.dropdown .dt {
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
}

.dropdown .dd {
    display: none;
    width: 210px;
    height: 465px;
    background-color: #c81623;
    margin-top: 2px;
}

.dropdown .dd ul li {
    position: relative;
    height: 31px;
    line-height: 31px;
    margin-left: 2px;
    padding-left: 10px;
}

.dropdown .dd ul li:hover {
    background-color: #fff;
}

.dropdown .dd ul li::after {
    position: absolute;
    top: 1px;
    right: 10px;
    color: #fff;
    font-family: 'icomoon';
    content: '\e920';
    font-size: 14px;
}

.dropdown .dd ul li a {
    font-size: 14px;
    color: #fff;
}

.dropdown .dd ul li:hover a {
    color: #c81623;
}

.navitems ul li {
    float: left;
}

.navitems ul li a {
    display: block;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    padding: 0 25px;
}
```

## 2.5 footer底部制作

![](https://img-blog.csdnimg.cn/20210423234640337.png)

- `footer` 页面底部盒子通栏给一个高度和灰色的背景
- `footer` 里面有一个大的版心
- 版心里面包含 1 号盒子，`mod_service` 是服务模块，`mod` 是模块的意思
- 版心里面包含 2 号盒子，`mod_help` 是帮助模块
- 版心里面包含 3 号盒子，`mod_copyright` 是版权模块

```html
<!-- 底部模块的制作 start -->
<footer class="footer">
    <div class="w">
        <div class="mod_service">
            <ul>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mod_help">
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>帮助中心</dt>
                <dd>
                    <img src="images/wx_cz.jpg" alt="">
                    品优购客户端
                </dd>
            </dl>
        </div>
        <div class="mod_copyright">
            <div class="links">
                <a href="#">关于我们</a> | <a href="#">联系我们</a> | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 | 品优购公益 |
                English Site | Contact U
            </div>
            <div class="copyright">
                地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br>
                京ICP备08001421号京公网安备110108007702
            </div>
        </div>
    </div>
</footer>
<!-- 底部模块的制作 end -->
```

```css
/* 底部模块制作 */
.footer {
    height: 415px;
    background-color: #f5f5f5;
    padding-top: 30px;
}

.mod_service {
    height: 80px;
    border-bottom: 1px solid #ccc;
}

.mod_service ul li {
    float: left;
    width: 300px;
    height: 50px;
    padding-left: 35px;
}

.mod_service ul li h5 {
    float: left;
    width: 50px;
    height: 50px;
    background: url(../images/icons.png) no-repeat -252px -2px;
    margin-right: 8px;
}

.service_txt h4 {
    font-size: 14px;
}

.service_txt p {
    font-size: 12px;
}

.mod_help {
    height: 185px;
    border-bottom: 1px solid #ccc;
    padding-top: 20px;
    padding-left: 50px;
}

.mod_help dl {
    float: left;
    width: 200px;
}

.mod_help dl:last-child {
    width: 90px;
    text-align: center;
}

.mod_help dl dt {
    font-size: 16px;
    margin-bottom: 10px;
}

.mod_copyright {
    text-align: center;
    padding-top: 20px;
}

.links {
    margin-bottom: 15px;
}

.links a {
    margin: 0 3px;
}

.copyright {
    line-height: 20px;
}
```

## 2.6 main主体模块制作

以上书写的是模块化中的公共部分，下面进入 main 主题部分。

`main` 主体模块是 `index` 里面专有的，注意需要新的样式文件 `index.css`

- `main` 盒子宽度为 `980` 像素，位置距离左边 `220px(margin-left)`，给高度就不用清除浮动
- `main` 里面包含左侧盒子，左浮动，`focus` 焦点图模块
- `main` 里面包含右侧盒子，右浮动，`newsflash` 新闻快报模块

![](https://img-blog.csdnimg.cn/2021042408532739.png)

![](https://img-blog.csdnimg.cn/20210423234706535.png)

- newsflash 新闻快报模块
  - 1 号盒子为 `news` 新闻模块 高度为 `165px`
  - 2 号盒子为 `lifeservice` 生活服务模块 高度为 `209px`
  - 3 号盒子为 `bargain` 特价商品

<img src="https://img-blog.csdnimg.cn/20210423234732373.png" style="zoom:50%;" />

- news 新闻模块
  - 注意：这里我们分为上下两个模块，但是两个模块都用 `div`
  - 1 号盒子 `news-hd` 新闻头部模块，给一个高度和下边框
  - 2 号盒子 `news-bd` 新闻主题部分，里面包含 `ul` 和 `li` 还有链接

<img src="https://img-blog.csdnimg.cn/20210423234804630.png" style="zoom:50%;" />

- lifeservice 生活服务模块
  - `lifeservice` 盒子宽度为 `250` ，但是装不开里面的 4 个小 `li`
  - 可以让 `lifeservice` 里面的 `ul` 宽度为 `252`，就可以装的下 4 个 小 `li`
  - `lifeservice` 盒子 `overflow` 隐藏多余的部分就可以了

<img src="https://img-blog.csdnimg.cn/20210423234829349.png" style="zoom:50%;" />

```html
<!-- 首页专有的模块 main  start -->
<div class="w">
    <div class="main">
        <div class="focus">
            <!-- 轮播图要用 ul li 放置 -->
            <ul>
                <li>
                    <img src="upload/focus1.png" alt="">
                </li>
            </ul>
        </div>
        <div class="newsflash">
            <div class="news">
                <div class="news-hd">
                    <h5>品优购快报</h5>
                    <a href="#" class="more">更多</a>
                </div>
                <div class="news-bd">
                    <ul>
                        <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了, 它是谁？</a></li>
                        <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了</a></li>
                        <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了</a></li>
                        <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了</a></li>
                        <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了, 它是谁？</a></li>
                    </ul>
                </div>
            </div>
            <div class="lifeservice">
                <ul>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                </ul>
            </div>
            <div class="bargain">
                <img src="upload/bargain.png" alt="">
            </div>
        </div>
    </div>
</div>
<!-- 首页专有的模块 main  end -->
```

```css
.main {
    width: 980px;
    height: 455px;
    margin-left: 220px;
    margin-top: 10px;
}

.focus {
    float: left;
    width: 721px;
    height: 455px;
    background-color: purple;
}

.newsflash {
    float: right;
    width: 250px;
    height: 455px;
}

.news {
    height: 165px;
    border: 1px solid #e4e4e4;
}

.news-hd {
    height: 33px;
    line-height: 33px;
    border-bottom: 1px dotted #e4e4e4;
    padding: 0 15px;
}

.news-hd h5 {
    float: left;
    font-size: 14px;
}

.news-hd .more {
    float: right;
}

.news-hd .more::after {
    font-family: 'icomoon';
    content: '\e920';
}

.news-bd {
    padding: 5px 15px 0;
}

.news-bd ul li {
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.lifeservice {
    overflow: hidden;
    height: 209px;
    /* background-color: purple; */
    border: 1px solid #e4e4e4;
    border-top: 0;
}

.lifeservice ul {
    width: 252px;
}

.lifeservice ul li {
    float: left;
    width: 63px;
    height: 71px;
    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    text-align: center;
}

.lifeservice ul li i {
    display: inline-block;
    width: 24px;
    height: 28px;
    background-color: pink;
    margin-top: 12px;
    background: url(../images/icons.png) no-repeat -19px -15px;
}

.bargain {
    margin-top: 5px;
}
```

## 2.7 推荐模块制作

![](https://img-blog.csdnimg.cn/20210423234858546.png)

- 大盒子 `recom` 推荐模块 `recommend`
- 里面包含 2 个盒子， 浮动即可
- 1 号盒子 `recom_hd`
- 2 号盒子 `recom_bd `，注意里面的小竖线

```html
<!-- 推荐模块 start-->
<div class="w recom">
    <div class="recom_hd">
        <img src="images/recom.png" alt="">
    </div>
    <div class="recom_bd">
        <ul>
            <li><img src="upload/recom_03.jpg" alt=""></li>
            <li><img src="upload/recom_03.jpg" alt=""></li>
            <li><img src="upload/recom_03.jpg" alt=""></li>
            <li><img src="upload/recom_03.jpg" alt=""></li>
        </ul>
    </div>
</div>
<!-- 推荐模块 end-->
```

```css
/* 推荐模块 */
.recom {
    height: 163px;
    background-color: #ebebeb;
    margin-top: 12px;
}

.recom_hd {
    float: left;
    height: 163px;
    width: 205px;
    background-color: #5c5251;
    text-align: center;
    padding-top: 30px;
}

.recom_bd {
    float: left;
}

.recom_bd ul li {
    position: relative;
    float: left;
}

.recom_bd ul li img {
    width: 248px;
    height: 163px;
}

.recom_bd ul li:nth-child(-n+3)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 10px;
    width: 1px;
    height: 145px;
    background-color: #ddd;
}
```

## 2.8 楼层区floor制作

之所以称为：楼层区，是因为该部分分为好几个层，将这几个层统一放入一个楼层中使得结构更加合理，并且后期的侧边导航栏快速定位等功能，也更好实现。

![](https://img-blog.csdnimg.cn/20210424101619846.png)

注意这个 floor ，不要给高度，内容有多少，算多少。

第一楼是家用电器模块：里面包含两个盒子。

- 1 号盒子 `box_hd`，给一个高度，有个下边框，里面分为左右 2 个盒子
- 2 号盒子 `box_bd`，不要给高度

![](https://img-blog.csdnimg.cn/20210423234924192.png)

- box_hd 模块
  - 有高度可以不用清除浮动
  - 左边 `h3`，盒子左浮动
  - 右边 `tab_list`，右浮动，因为用到 `tab` 切换效果，所以里面要用 `ul` 和 `li` 来做

![](https://img-blog.csdnimg.cn/20210423234950367.png)

- Tab 栏原理-布局需求
  - 要求选项卡个数要内容个数一致

例子：

![](https://img-blog.csdnimg.cn/20210424102822294.gif)

这个效果后期通过 js 实现，但是其对 html 的布局有严格的要求。

选择对应的 tab_list 便显示对应的 tab_content 隐藏其他的 tab_content。

<img src="https://img-blog.csdnimg.cn/20210423235016456.png" style="zoom:60%;" />

- box_bd 模块
  - 根据 `tab` 切换的原理，`tab_content` 里面包含内容部分。这个内容可以通过 `ul` 布局
  - 分为 5 个大列，列的宽度不一致

![](https://img-blog.csdnimg.cn/20210423235044100.png)

```html
<!-- 楼层区域制作start -->
<div class="floor">
    <!-- 1楼家用电器楼层 -->
    <div class="w jiadian">
        <div class="box_hd">
            <h3>家用电器</h3>
            <div class="tab_list">
                <ul>
                    <li><a href="#" class="style_red">热门</a>|</li>
                    <li><a href="#">大家电</a>|</li>
                    <li><a href="#">生活电器</a>|</li>
                    <li><a href="#">厨房电器</a>|</li>
                    <li><a href="#">生活电器</a>|</li>
                    <li><a href="#">个护健康</a>|</li>
                    <li><a href="#">应季电器</a>|</li>
                    <li><a href="#">空气/净水</a>|</li>
                    <li><a href="#">新奇特</a>|</li>
                    <li><a href="#"> 高端电器</a></li>
                </ul>
            </div>
        </div>
        <div class="box_bd">
            <div class="tab_content">
                <div class="tab_list_item">
                    <div class="col_210">
                        <ul>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                        </ul>
                        <a href="#">
                            <img src="upload/floor-1-1.png" alt="">
                        </a>
                    </div>
                    <div class="col_329">
                        <a href="#">
                            <img src="upload/floor-1-b01.png" alt="">
                        </a>
                    </div>
                    <div class="col_221">
                        <a href="#" class="bb"> <img src="upload/floor-1-2.png" alt=""></a>
                        <a href="#"> <img src="upload/floor-1-3.png" alt=""></a>
                    </div>
                    <div class="col_221">
                        <a href="#"> <img src="upload/floor-1-4.png" alt=""></a>

                    </div>
                    <div class="col_219">
                        <a href="#" class="bb"> <img src="upload/floor-1-5.png" alt=""></a>
                        <a href="#"> <img src="upload/floor-1-6.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 2楼手机楼层 -->
    <div class="w shouji">
        <div class="box_hd">
            <h3>手机通讯</h3>
            <div class="tab_list">
                <ul>
                    <li><a href="#" class="style_red">热门</a>|</li>
                    <li><a href="#">大家电</a>|</li>
                    <li><a href="#">生活电器</a>|</li>
                    <li><a href="#">厨房电器</a>|</li>
                    <li><a href="#">生活电器</a>|</li>
                    <li><a href="#">个护健康</a>|</li>
                    <li><a href="#">应季电器</a>|</li>
                    <li><a href="#">空气/净水</a>|</li>
                    <li><a href="#">新奇特</a>|</li>
                    <li><a href="#"> 高端电器</a></li>
                </ul>
            </div>
        </div>
        <div class="box_bd">
            <div class="tab_content">
                <div class="tab_list_item">
                    <div class="col_210">
                        <ul>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                        </ul>
                        <a href="#">
                            <img src="upload/floor-1-1.png" alt="">
                        </a>
                    </div>
                    <div class="col_329">
                        <a href="#">
                            <img src="upload/floor-1-b01.png" alt="">
                        </a>
                    </div>
                    <div class="col_221">
                        <a href="#" class="bb"> <img src="upload/floor-1-2.png" alt=""></a>
                        <a href="#"> <img src="upload/floor-1-3.png" alt=""></a>
                    </div>
                    <div class="col_221">
                        <a href="#"> <img src="upload/floor-1-4.png" alt=""></a>

                    </div>
                    <div class="col_219">
                        <a href="#" class="bb"> <img src="upload/floor-1-5.png" alt=""></a>
                        <a href="#"> <img src="upload/floor-1-6.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 楼层区域制作end -->
```

```css
/* 家用电梯模块 */
.box_hd {
    height: 30px;
    border-bottom: 2px solid #c81623;
}

.box_hd h3 {
    float: left;
    font-size: 18px;
    color: #c81623;
    font-weight: 400;
}

.tab_list {
    float: right;
    line-height: 30px;
}

.tab_list ul li {
    float: left;
}

.tab_list ul li a {
    margin: 0 15px;
}

.floor .w {
    margin-top: 30px;
}

.box_bd {
    height: 361px;

}

.tab_list_item > div {
    float: left;
    height: 361px;
}

.col_210 {
    width: 210px;
    background-color: #f9f9f9;
    text-align: center;
}

.col_210 ul li {
    float: left;
    width: 85px;
    height: 34px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    line-height: 33px;
    margin-right: 10px;
}

.col_210 ul {
    padding-left: 12px;
}

.col_329 {
    width: 329px;
}

.col_221 {
    width: 221px;
    border-right: 1px solid #ccc;
}

.col_219 {
    width: 219px;
}

.bb {
    /* 一般情况下，a如果包含有宽度的盒子，a需要转为块级元素 */
    display: block;
    border-bottom: 1px solid #ccc;
}
```

# 三、品优购列表页制作

## 3.1 品优购列表页制作准备工作

- 列表页面是新的页面，我们需要新建页面文件 `list.html`
- 因为列表页的头部和底部基本一致，所以我们需要把首页中的头部和底部的结构复制过来
- 头部和底部的样式也需要，因此 `list.html` 中还需要引入 `common.css`
- 需要新的 `list.css` 样式文件，这是列表页专门的样式文件

## 3.2 列表页header和nav修改

![](https://img-blog.csdnimg.cn/20210423235200231.png)

- 秒杀盒子 `sk(second kill)` 定位即可
- 1 号盒子左侧浮动 `sk_list` 里面包含 `ul` 和 `li`
- 2 号盒子左侧浮动 `sk_con` 里面包含 `ul` 和 `li`

```html
<!-- header头部模块制作 start -->
<header class="header w">
    <!-- logo模块 -->
    <div class="logo">
        <h1>
            <a href="index.html" title="品优购商城">品优购商城</a>
        </h1>
    </div>
    <!-- 列表页的秒杀模块 -->
    <div class="sk">
        <img src="images/sk.png" alt="">
    </div>
    <!-- search搜索模块 -->
    <div class="search">
        <input type="search" name="" id="" placeholder="语言开发">
        <button>搜索</button>
    </div>
    <!-- hotwords模块制作 -->
    <div class="hotwords">
        <a href="#" class="style_red">优惠购首发</a>
        <a href="#">亿元优惠</a>
        <a href="#">9.9元团购</a>
        <a href="#">美满99减30</a>
        <a href="#">办公用品</a>
        <a href="#">电脑</a>
        <a href="#">通信</a>
    </div>
    <!-- 购物车模块 -->
    <div class="shopcar">
        我的购物车
        <i class="count">8</i>
    </div>
</header>
<!-- header头部模块制作 end -->

<!-- nav模块制作 start -->
<nav class="nav">
    <div class="w">
        <div class="sk_list">
            <ul>
                <li><a href="#">品优秒杀</a></li>
                <li><a href="#">品优秒杀</a></li>
                <li><a href="#">品优秒杀</a></li>
            </ul>
        </div>
        <div class="sk_con">
            <ul>
                <li><a href="#">女装</a></li>
                <li><a href="#" class="style_red">女鞋</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">更多分类</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- nav模块制作 end -->
```

```css
/* 列表页专有的 css */
.nav {
    overflow: hidden;
}

.sk {
    position: absolute;
    left: 190px;
    top: 40px;
    border-left: 1px solid #c81523;
    padding: 3px 0 0 14px;
}

.sk_list {
    float: left;
}

.sk_list ul li {
    float: left;
}

.sk_list ul li a {
    display: block;
    line-height: 47px;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
}

.sk_con {
    float: left;
}

.sk_con ul li {
    float: left;
}

.sk_con ul li a {
    display: block;
    line-height: 49px;
    padding: 0 20px;
    font-size: 14px;

}

.sk_con ul li:last-child a::after {
    content: '\e91e';
    font-family: 'icomoon';
}
```

一个小注意事项：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .one {
            width: 980px;
            margin: 0 auto;
        }

        .two {
            height: 50px;
            background-color: salmon;
        }

        .two p {
            float: left;
            padding: 0 63px;
            font-size: 16px;
            line-height: 60px;
        }
    </style>
</head>

<body>
    <div class="one">
        <div class="two">
            <p>jerry</p>
            <p>jerry</p>
            <p>jerry</p>
            <p>jerry</p>
            <p>jerry</p>
        </div>
        <h1>h1 左浮动</h1>
    </div>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/2021042411080074.png)

为什么 h1 会跑到右边呢？

原因：jerry 模块的高度超过了 div 高度，同时 jerry 与 h1 都是浮动元素，浮动元素相互紧挨对齐直到遇到盒子边界或另一个浮动元素的边界。

![](https://img-blog.csdnimg.cn/20210424111317313.gif)

解决方案：1.减小高度；2.父盒子溢出隐藏（推荐）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .one {
            width: 980px;
            margin: 0 auto;
        }

        .two {
            overflow: hidden;
            height: 50px;
            background-color: salmon;
        }

        .two p {
            float: left;
            padding: 0 63px;
            font-size: 16px;
            line-height: 60px;
        }
    </style>
</head>

<body>
    <div class="one">
        <div class="two">
            <p>jerry</p>
            <p>jerry</p>
            <p>jerry</p>
            <p>jerry</p>
            <p>jerry</p>
        </div>
        <h1>h1 左浮动</h1>
    </div>
</body>

</html>
```

![](https://img-blog.csdnimg.cn/20210424111503385.png)

## 3.3 列表页主体sk _container

![](https://img-blog.csdnimg.cn/20210423235248455.png)

- 1 号盒子 `sk _container` 给宽度 `1200`，不要给高度
- 2 号盒子 `sk_hd`，插入图片即可
- 3 号盒子 `sk_bd`，里面包含很多的 `ul` 和 `li`

产品模块鼠标放上去显示边框效果最佳解决方案应该是：一开始变给产品模块添加一个透明的边框，当鼠标放上去后将边框的颜色显示出来（这样才不会影响原有的布局）。

```html
<!-- 列表页主体部分 -->
<div class="w sk_container">
    <div class="sk_hd">
        <img src="upload/bg_03.png" alt="">
    </div>
    <div class="sk_bd">

        <ul class="clearfix">
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
        </ul>
    </div>
</div>
<!-- 列表页主体部分 end -->
```

```css
.sk_bd ul li {
    overflow: hidden;
    float: left;
    margin-right: 13px;
    width: 290px;
    height: 460px;
    border: 1px solid transparent;
}

.sk_bd ul li:nth-child(4n) {
    margin-right: 0;
}

.sk_bd ul li:hover {
    border: 1px solid #c81523;
}
```

# 四、品优购注册页制作

## 4.1 注册页类名命名

注册页面：`register.html`。

注意：注册页面比较隐私，为了保护用户信息，我们不需要对当前页面做 SEO 优化。

![](https://img-blog.csdnimg.cn/20210423235315294.png)

## 4.2 注册页布局

![](https://img-blog.csdnimg.cn/20210423235338460.png)

## 4.3 registerarea布局

label（手机号、短信验证码……）可以发现是右对齐。

实现方法：

- 将 label 转换为块元素
- 对 label 设置宽度
- 对 label 设置 text-align: right;

安全程度、同意协议、完成注册也统一使用 ul 的 li 来实现。

![](https://img-blog.csdnimg.cn/20210423235407652.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>个人注册</title>
    <!-- 引入favicon图标 -->
    <link rel="shortcut icon" href="favicon.ico"/>
    <!-- 引入我们初始化的css -->
    <link rel="stylesheet" href="css/base.css">
    <!-- 引入我们自己的注册页面的css -->
    <link rel="stylesheet" href="css/register.css">
</head>

<body>
<div class="w">
    <header>
        <div class="logo">
            <a href="index.html"> <img src="images/logo.png" alt=""></a>
        </div>
    </header>
    <div class="registerarea">
        <h3>注册新用户
            <div class="login">我有账号，去<a href="#">登陆</a></div>
        </h3>
        <div class="reg_form">
            <form action="">
                <ul>
                    <li><label for="">手机号：</label> <input type="text" class="inp">
                        <span class="error"> <i class="error_icon"></i> 手机号码格式不正确，请从新输入 </span></li>
                    <li><label for="">短信验证码：</label> <input type="text" class="inp">
                        <span class="success"> <i class="success_icon"></i> 短信验证码输入正确 </span></li>
                    <li><label for="">登录密码：</label> <label>

                        <input type="password" class="inp">
                    </label>
                        <span class="error"> <i class="error_icon"></i> 手机号码格式不正确，请从新输入 </span></li>
                    <li class="safe">安全程度 <em class="ruo">弱</em> <em class="zhong">中</em> <em class="qiang">强</em></li>
                    <li><label for="">确认密码：</label> <input type="password" class="inp">
                        <span class="error"> <i class="error_icon"></i> 手机号码格式不正确，请从新输入 </span></li>
                    <li class="agree"><input type="checkbox" name="" id="">
                        同意协议并注册 <a href="#">《知晓用户协议》</a>
                    </li>
                    <li>
                        <input type="submit" value="完成注册" class="btn">
                    </li>
                </ul>
            </form>
        </div>
    </div>
    <footer>
        <div class="mod_copyright">
            <div class="links">
                <a href="#">关于我们</a> | <a href="#">联系我们</a> | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 |
                品优购公益 | English Site | Contact U
            </div>
            <div class="copyright">
                地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br>
                京ICP备08001421号京公网安备110108007702
            </div>
        </div>
    </footer>
</div>
</body>

</html>
```

```css
.w {
    width: 1200px;
    margin: 0 auto;
}

header {
    height: 84px;
    border-bottom: 2px solid #c81523;
}

.logo {
    padding-top: 18px;
}

.registerarea {
    height: 522px;
    border: 1px solid #ccc;
    margin-top: 20px;
}

.registerarea h3 {
    height: 42px;
    border-bottom: 1px solid #ccc;
    background-color: #ececec;
    line-height: 42px;
    padding: 0 10px;
    font-size: 18px;
    font-weight: 400;
}

.login {
    float: right;
    font-size: 14px;
}

.login a {
    color: #c81523;
}

.reg_form {
    width: 600px;

    margin: 50px auto 0;
}

.reg_form ul li {
    margin-bottom: 20px;
}

.reg_form ul li label {
    display: inline-block;
    width: 88px;
    text-align: right;
}

.reg_form ul li .inp {
    width: 242px;
    height: 37px;
    border: 1px solid #ccc;
}

.error {
    color: #c81523;
}

.error_icon,
.success_icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background: url(../images/error.png) no-repeat;
    margin-top: -2px;
}

.success {
    color: green;
}

.success_icon {
    background: url(../images/success.png) no-repeat;
}

.safe {
    padding-left: 170px;
}

.safe em {
    padding: 0 12px;
    color: #fff;
}

.ruo {
    background-color: #de1111;
}

.zhong {
    background-color: #40b83f;
}

.qiang {
    background-color: #f79100;
}

.agree {
    padding-left: 95px;
}

.agree input {
    vertical-align: middle;
}

.agree a {
    color: #1ba1e6;
}

.btn {
    width: 200px;
    height: 34px;
    background-color: #c81623;
    font-size: 14px;
    color: #fff;
    margin: 30px 0 0 70px;
}

.mod_copyright {
    text-align: center;
    padding-top: 20px;
}

.links {
    margin-bottom: 15px;
}

.links a {
    margin: 0 3px;
}

.copyright {
    line-height: 20px;
}
```

# 五、Web服务器

## 5.1 什么是Web服务器

我们写的品优购网站，目前是放到自己电脑上的，只能自己访问浏览。

如果想要很多人访问我们的网站，可以把品优购放到服务器上，这样就可以多人访问我们的品优购网站了。

`服务器`（我们也会称之为主机）是提供计算服务的设备，它也是一台计算机，在网络环境下，根据服务器提供的服务类型不同，服务器又分为 `文件服务器`、`数据库服务器`、`应用程序服务器`、`Web 服务器` 等。

`Web 服务器` 一般指 `网站服务器`，是指驻留于因特网上某种类型计算机的程序，可以向浏览器等 Web 客户端提供文档，也可以放置网站文件，让全世界浏览；可以放置数据文件，让全世界下载。

以下服务器我们主要指的是 `Web 服务器`。

根据服务器在网络中所在的 `位置` 不同，又可分为 `本地服务器` 和 `远程服务器`。

## 5.2 本地服务器

我们可以把自己的电脑设置为本地服务器， 这样同一个局域网内的同学就可以访问你的品优购网站了， 后面学 `Ajax` 的时候，再进行讲解。

## 5.3 远程服务器

本地服务器主要在局域网中访问，如果想要在互联网中访问，可以把品优购网站上传到远程服务器。

`远程服务器` 是通常是别的公司为我们提供的一台电脑（主机），我们只要把网站项目上传到这台电脑上，任何人都可以利用 `域名` 访问我们的网站了。

比如域名： [www.mi.com](www.mi.com) 可以访问小米网站。

**总结：**

- 1、服务器就是一台电脑，因为我们主要是做网站，所以我们主要使用 `Web 服务器`
- 2、服务器可以分为 `本地服务器` 和 `远程服务器`
- 3、`远程服务器` 是别的公司为我们提供了一台计算机
- 4、我们可以把网站上传到远程服务器里面， 别人就可以通过域名访问我们的网站了

## 5.4 将自己的网站上传到远程服务器

**注意：**一般稳定安全的服务器都是需要收费的， 比如：阿里云、腾讯云。

这里给大家推荐一个免费的微型远程服务器（免费空间）[http://free.3v.do/](http://free.3v.do/) 

- 1、去免费空间网站注册账号
- 2、记录下主机名、用户名、密码、域名
- 3、利用 `cutftp` 软件上传网站到远程服务器
- 4、在浏览器中输入域名，即可访问我们的品优购网站了

# 六、项目代码

## base.css

```css
/* 把我们所有标签的内外边距清零 */
* {
    margin: 0;
    padding: 0;
    /* css3盒子模型 */
    box-sizing: border-box;
}

/* em 和 i 斜体的文字不倾斜 */
em,
i {
    font-style: normal
}

/* 去掉li 的小圆点 */
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    /* 默认有灰色边框我们需要手动去掉 */
    border: 0;
    outline: none;
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}

/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
```

## common.css

```css
/* 声明字体图标 这里一定要注意路径的变化 */
@font-face {
    font-family: 'icomoon';
    src: url('../fonts/icomoon.eot?tomleg');
    src: url('../fonts/icomoon.eot?tomleg#iefix') format('embedded-opentype'),
    url('../fonts/icomoon.ttf?tomleg') format('truetype'),
    url('../fonts/icomoon.woff?tomleg') format('woff'),
    url('../fonts/icomoon.svg?tomleg#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

/* 版心 */
.w {
    width: 1200px;
    margin: 0 auto;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.style_red {
    color: #c81623;
}

/* 快捷导航模块 */
.shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;
}

.shortcut ul li {
    float: left;
}

/* 选择所有的偶数的小li */
.shortcut .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0;
}

.arrow-icon::after {
    content: '\e91e';
    font-family: 'icomoon';
    margin-left: 6px;
}

/* header 头部制作 */
.header {
    position: relative;
    height: 105px;

}

.logo {
    position: absolute;
    top: 25px;
    width: 171px;
    height: 61px;

}

.logo a {
    display: block;
    width: 171px;
    height: 61px;
    background: url(../images/logo.png) no-repeat;
    /* font-size: 0;京东的做法*/
    /* 淘宝的做法让文字隐藏 */
    text-indent: -9999px;
    overflow: hidden;
}

.search {
    position: absolute;
    left: 346px;
    top: 25px;
    width: 538px;
    height: 36px;
    border: 2px solid #b1191a;
}

.search input {
    float: left;
    width: 454px;
    height: 32px;
    padding-left: 10px;
}

.search button {
    float: left;
    width: 80px;
    height: 32px;
    background-color: #b1191a;
    font-size: 16px;
    color: #fff;
}

.hotwords {
    position: absolute;
    top: 66px;
    left: 346px;
}

.hotwords a {
    margin: 0 10px;
}

.shopcar {
    position: absolute;
    right: 60px;
    top: 25px;
    width: 140px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #dfdfdf;
    background-color: #f7f7f7;
}

.shopcar::before {
    content: '\e93a';
    font-family: 'icomoon';
    margin-right: 5px;
    color: #b1191a;
}

.shopcar::after {
    content: '\e920';
    font-family: 'icomoon';
    margin-left: 10px;
}

.count {
    position: absolute;
    top: -5px;
    left: 105px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    background-color: #e60012;
    padding: 0 5px;
    border-radius: 7px 7px 7px 0;
}

/* nav模块制作 */
.nav {
    height: 47px;
    border-bottom: 2px solid #b1191a;
}

.nav .dropdown {
    float: left;
    width: 210px;
    height: 45px;
    background-color: #b1191a;
}

.nav .navitems {
    float: left;
}

.dropdown .dt {
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
}

.dropdown .dd {
    /* display: none; */
    width: 210px;
    height: 465px;
    background-color: #c81623;
    margin-top: 2px;
}

.dropdown .dd ul li {
    position: relative;
    height: 31px;
    line-height: 31px;
    margin-left: 2px;
    padding-left: 10px;
}

.dropdown .dd ul li:hover {
    background-color: #fff;
}

.dropdown .dd ul li::after {
    position: absolute;
    top: 1px;
    right: 10px;
    color: #fff;
    font-family: 'icomoon';
    content: '\e920';
    font-size: 14px;
}

.dropdown .dd ul li a {
    font-size: 14px;
    color: #fff;
}

.dropdown .dd ul li:hover a {
    color: #c81623;
}

.navitems ul li {
    float: left;
}

.navitems ul li a {
    display: block;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    padding: 0 25px;
}

/* 底部模块制作 */
.footer {
    height: 415px;
    background-color: #f5f5f5;
    padding-top: 30px;
}

.mod_service {
    height: 80px;
    border-bottom: 1px solid #ccc;
}

.mod_service ul li {
    float: left;
    width: 300px;
    height: 50px;
    padding-left: 35px;
}

.mod_service ul li h5 {
    float: left;
    width: 50px;
    height: 50px;
    background: url(../images/icons.png) no-repeat -252px -2px;
    margin-right: 8px;
}

.service_txt h4 {
    font-size: 14px;
}

.service_txt p {
    font-size: 12px;
}

.mod_help {
    height: 185px;
    border-bottom: 1px solid #ccc;
    padding-top: 20px;
    padding-left: 50px;
}

.mod_help dl {
    float: left;
    width: 200px;
}

.mod_help dl:last-child {
    width: 90px;
    text-align: center;
}

.mod_help dl dt {
    font-size: 16px;
    margin-bottom: 10px;
}

.mod_copyright {
    text-align: center;
    padding-top: 20px;
}

.links {
    margin-bottom: 15px;
}

.links a {
    margin: 0 3px;
}

.copyright {
    line-height: 20px;
}
```

## index.html

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>品优购商城-综合网购首选-正品低价、品质保障、配送及时、轻松购物！
    </title>
    <!-- 网站说明 -->
    <meta name="description"
          content="品优购商城-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!"/>
    <!-- 关键字 -->
    <meta name="keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东"/>

    <!-- 引入favicon图标 -->
    <link rel="shortcut icon" href="favicon.ico"/>
    <!-- 引入我们初始化样式文件 -->
    <link rel="stylesheet" href="css/base.css">
    <!-- 引入我们公共的样式文件 -->
    <link rel="stylesheet" href="css/common.css">
    <!-- 引入我们index.css文件  -->
    <link rel="stylesheet" href="css/index.css">
</head>

<body>
<!-- 快捷导航模块 start -->
<section class="shortcut">
    <div class="w">
        <div class="fl">
            <ul>
                <li>品优购欢迎您！&nbsp;</li>
                <li>
                    <a href="#">请登录</a> &nbsp; <a href="register.html" class="style_red">免费注册</a>
                </li>
            </ul>
        </div>
        <div class="fr">
            <ul>
                <li>我的订单</li>
                <li></li>
                <li class="arrow-icon">我的品优购</li>
                <li></li>
                <li>品优购会员</li>
                <li></li>
                <li>企业采购</li>
                <li></li>
                <li class="arrow-icon">关注品优购</li>
                <li></li>
                <li class="arrow-icon">客户服务</li>
                <li></li>
                <li class="arrow-icon">网站导航</li>
            </ul>
        </div>
    </div>
</section>
<!-- 快捷导航模块 end -->
<!-- header头部模块制作 start -->
<header class="header w">
    <!-- logo模块 -->
    <div class="logo">
        <h1>
            <a href="index.html" title="品优购商城">品优购商城</a>
        </h1>
    </div>
    <!-- search搜索模块 -->
    <div class="search">
        <input type="search" name="" id="" placeholder="语言开发">
        <button>搜索</button>
    </div>
    <!-- hotwords模块制作 -->
    <div class="hotwords">
        <a href="#" class="style_red">优惠购首发</a>
        <a href="#">亿元优惠</a>
        <a href="#">9.9元团购</a>
        <a href="#">美满99减30</a>
        <a href="#">办公用品</a>
        <a href="#">电脑</a>
        <a href="#">通信</a>
    </div>
    <!-- 购物车模块 -->
    <div class="shopcar">
        我的购物车
        <i class="count">8</i>
    </div>
</header>
<!-- header头部模块制作 end -->
<!-- nav模块制作 start -->
<nav class="nav">
    <div class="w">
        <div class="dropdown">
            <div class="dt">全部商品分类</div>
            <div class="dd">
                <ul>
                    <li><a href="#">家用电器</a></li>
                    <li><a href="list.html">手机</a>、 <a href="#">数码</a>、<a href="#">通信</a></li>
                    <li><a href="#">电脑、办公</a></li>
                    <li><a href="#">家居、家具、家装、厨具</a></li>
                    <li><a href="#">男装、女装、童装、内衣</a></li>
                    <li><a href="#">个户化妆、清洁用品、宠物</a></li>
                    <li><a href="#">鞋靴、箱包、珠宝、奢侈品</a></li>
                    <li><a href="#">运动户外、钟表</a></li>
                    <li><a href="#">汽车、汽车用品</a></li>
                    <li><a href="#">母婴、玩具乐器</a></li>
                    <li><a href="#">食品、酒类、生鲜、特产</a></li>
                    <li><a href="#">医药保健</a></li>
                    <li><a href="#">图书、音像、电子书</a></li>
                    <li><a href="#">彩票、旅行、充值、票务</a></li>
                    <li><a href="#">理财、众筹、白条、保险</a></li>

                </ul>
            </div>
        </div>
        <div class="navitems">
            <ul>
                <li><a href="#">服装城</a></li>
                <li><a href="#">服装城</a></li>
                <li><a href="#">服装城</a></li>
                <li><a href="#">服装城</a></li>
                <li><a href="#">服装城</a></li>
                <li><a href="#">服装城</a></li>
                <li><a href="#">服装城</a></li>
                <li><a href="#">服装城</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- nav模块制作 end -->
<!-- 首页专有的模块 main  start -->
<div class="w">
    <div class="main">
        <div class="focus">
            <!-- 轮播图要用 ul li 放置 -->
            <ul>
                <li>
                    <img src="upload/focus1.png" alt="">
                </li>
            </ul>
        </div>
        <div class="newsflash">
            <div class="news">
                <div class="news-hd">
                    <h5>品优购快报</h5>
                    <a href="#" class="more">更多</a>
                </div>
                <div class="news-bd">
                    <ul>
                        <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了, 它是谁？</a></li>
                        <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了</a></li>
                        <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了</a></li>
                        <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了</a></li>
                        <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了, 它是谁？</a></li>
                    </ul>
                </div>
            </div>
            <div class="lifeservice">
                <ul>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                    <li>
                        <i></i>
                        <p>话费</p>
                    </li>
                </ul>
            </div>
            <div class="bargain">
                <img src="upload/bargain.png" alt="">
            </div>
        </div>
    </div>
</div>
<!-- 首页专有的模块 main  end -->
<!-- 推荐模块 start-->
<div class="w recom">
    <div class="recom_hd">
        <img src="images/recom.png" alt="">
    </div>
    <div class="recom_bd">
        <ul>
            <li><img src="upload/recom_03.jpg" alt=""></li>
            <li><img src="upload/recom_03.jpg" alt=""></li>
            <li><img src="upload/recom_03.jpg" alt=""></li>
            <li><img src="upload/recom_03.jpg" alt=""></li>
        </ul>
    </div>
</div>
<!-- 推荐模块 end-->
<!-- 楼层区域制作start -->
<div class="floor">
    <!-- 1楼家用电器楼层 -->
    <div class="w jiadian">
        <div class="box_hd">
            <h3>家用电器</h3>
            <div class="tab_list">
                <ul>
                    <li><a href="#" class="style_red">热门</a>|</li>
                    <li><a href="#">大家电</a>|</li>
                    <li><a href="#">生活电器</a>|</li>
                    <li><a href="#">厨房电器</a>|</li>
                    <li><a href="#">生活电器</a>|</li>
                    <li><a href="#">个护健康</a>|</li>
                    <li><a href="#">应季电器</a>|</li>
                    <li><a href="#">空气/净水</a>|</li>
                    <li><a href="#">新奇特</a>|</li>
                    <li><a href="#"> 高端电器</a></li>
                </ul>
            </div>
        </div>
        <div class="box_bd">
            <div class="tab_content">
                <div class="tab_list_item">
                    <div class="col_210">
                        <ul>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                        </ul>
                        <a href="#">
                            <img src="upload/floor-1-1.png" alt="">
                        </a>
                    </div>
                    <div class="col_329">
                        <a href="#">
                            <img src="upload/floor-1-b01.png" alt="">
                        </a>
                    </div>
                    <div class="col_221">
                        <a href="#" class="bb"> <img src="upload/floor-1-2.png" alt=""></a>
                        <a href="#"> <img src="upload/floor-1-3.png" alt=""></a>
                    </div>
                    <div class="col_221">
                        <a href="#"> <img src="upload/floor-1-4.png" alt=""></a>

                    </div>
                    <div class="col_219">
                        <a href="#" class="bb"> <img src="upload/floor-1-5.png" alt=""></a>
                        <a href="#"> <img src="upload/floor-1-6.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 2楼手机楼层 -->
    <div class="w shouji">
        <div class="box_hd">
            <h3>手机通讯</h3>
            <div class="tab_list">
                <ul>
                    <li><a href="#" class="style_red">热门</a>|</li>
                    <li><a href="#">大家电</a>|</li>
                    <li><a href="#">生活电器</a>|</li>
                    <li><a href="#">厨房电器</a>|</li>
                    <li><a href="#">生活电器</a>|</li>
                    <li><a href="#">个护健康</a>|</li>
                    <li><a href="#">应季电器</a>|</li>
                    <li><a href="#">空气/净水</a>|</li>
                    <li><a href="#">新奇特</a>|</li>
                    <li><a href="#"> 高端电器</a></li>
                </ul>
            </div>
        </div>
        <div class="box_bd">
            <div class="tab_content">
                <div class="tab_list_item">
                    <div class="col_210">
                        <ul>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                            <li><a href="#">节能补贴</a></li>
                        </ul>
                        <a href="#">
                            <img src="upload/floor-1-1.png" alt="">
                        </a>
                    </div>
                    <div class="col_329">
                        <a href="#">
                            <img src="upload/floor-1-b01.png" alt="">
                        </a>
                    </div>
                    <div class="col_221">
                        <a href="#" class="bb"> <img src="upload/floor-1-2.png" alt=""></a>
                        <a href="#"> <img src="upload/floor-1-3.png" alt=""></a>
                    </div>
                    <div class="col_221">
                        <a href="#"> <img src="upload/floor-1-4.png" alt=""></a>

                    </div>
                    <div class="col_219">
                        <a href="#" class="bb"> <img src="upload/floor-1-5.png" alt=""></a>
                        <a href="#"> <img src="upload/floor-1-6.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 楼层区域制作end -->
<!-- 底部模块的制作 start -->
<footer class="footer">
    <div class="w">
        <div class="mod_service">
            <ul>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mod_help">
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>帮助中心</dt>
                <dd>
                    <img src="images/wx_cz.jpg" alt="">
                    品优购客户端
                </dd>
            </dl>
        </div>
        <div class="mod_copyright">
            <div class="links">
                <a href="#">关于我们</a> | <a href="#">联系我们</a> | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 |
                品优购公益 | English Site | Contact U
            </div>
            <div class="copyright">
                地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br>
                京ICP备08001421号京公网安备110108007702
            </div>
        </div>
    </div>
</footer>
<!-- 底部模块的制作 end -->
</body>

</html>
```

## index.css

```css
/* 声明字体图标 这里一定要注意路径的变化 */
@font-face {
    font-family: 'icomoon';
    src: url('../fonts/icomoon.eot?tomleg');
    src: url('../fonts/icomoon.eot?tomleg#iefix') format('embedded-opentype'),
    url('../fonts/icomoon.ttf?tomleg') format('truetype'),
    url('../fonts/icomoon.woff?tomleg') format('woff'),
    url('../fonts/icomoon.svg?tomleg#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

/* 版心 */
.w {
    width: 1200px;
    margin: 0 auto;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.style_red {
    color: #c81623;
}

/* 快捷导航模块 */
.shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;
}

.shortcut ul li {
    float: left;
}

/* 选择所有的偶数的小li */
.shortcut .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0;
}

.arrow-icon::after {
    content: '\e91e';
    font-family: 'icomoon';
    margin-left: 6px;
}

/* header 头部制作 */
.header {
    position: relative;
    height: 105px;

}

.logo {
    position: absolute;
    top: 25px;
    width: 171px;
    height: 61px;

}

.logo a {
    display: block;
    width: 171px;
    height: 61px;
    background: url(../images/logo.png) no-repeat;
    /* font-size: 0;京东的做法*/
    /* 淘宝的做法让文字隐藏 */
    text-indent: -9999px;
    overflow: hidden;
}

.search {
    position: absolute;
    left: 346px;
    top: 25px;
    width: 538px;
    height: 36px;
    border: 2px solid #b1191a;
}

.search input {
    float: left;
    width: 454px;
    height: 32px;
    padding-left: 10px;
}

.search button {
    float: left;
    width: 80px;
    height: 32px;
    background-color: #b1191a;
    font-size: 16px;
    color: #fff;
}

.hotwords {
    position: absolute;
    top: 66px;
    left: 346px;
}

.hotwords a {
    margin: 0 10px;
}

.shopcar {
    position: absolute;
    right: 60px;
    top: 25px;
    width: 140px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #dfdfdf;
    background-color: #f7f7f7;
}

.shopcar::before {
    content: '\e93a';
    font-family: 'icomoon';
    margin-right: 5px;
    color: #b1191a;
}

.shopcar::after {
    content: '\e920';
    font-family: 'icomoon';
    margin-left: 10px;
}

.count {
    position: absolute;
    top: -5px;
    left: 105px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    background-color: #e60012;
    padding: 0 5px;
    border-radius: 7px 7px 7px 0;
}

/* nav模块制作 */
.nav {
    height: 47px;
    border-bottom: 2px solid #b1191a;
}

.nav .dropdown {
    float: left;
    width: 210px;
    height: 45px;
    background-color: #b1191a;
}

.nav .navitems {
    float: left;
}

.dropdown .dt {
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
}

.dropdown .dd {
    /* display: none; */
    width: 210px;
    height: 465px;
    background-color: #c81623;
    margin-top: 2px;
}

.dropdown .dd ul li {
    position: relative;
    height: 31px;
    line-height: 31px;
    margin-left: 2px;
    padding-left: 10px;
}

.dropdown .dd ul li:hover {
    background-color: #fff;
}

.dropdown .dd ul li::after {
    position: absolute;
    top: 1px;
    right: 10px;
    color: #fff;
    font-family: 'icomoon';
    content: '\e920';
    font-size: 14px;
}

.dropdown .dd ul li a {
    font-size: 14px;
    color: #fff;
}

.dropdown .dd ul li:hover a {
    color: #c81623;
}

.navitems ul li {
    float: left;
}

.navitems ul li a {
    display: block;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    padding: 0 25px;
}

/* 底部模块制作 */
.footer {
    height: 415px;
    background-color: #f5f5f5;
    padding-top: 30px;
}

.mod_service {
    height: 80px;
    border-bottom: 1px solid #ccc;
}

.mod_service ul li {
    float: left;
    width: 300px;
    height: 50px;
    padding-left: 35px;
}

.mod_service ul li h5 {
    float: left;
    width: 50px;
    height: 50px;
    background: url(../images/icons.png) no-repeat -252px -2px;
    margin-right: 8px;
}

.service_txt h4 {
    font-size: 14px;
}

.service_txt p {
    font-size: 12px;
}

.mod_help {
    height: 185px;
    border-bottom: 1px solid #ccc;
    padding-top: 20px;
    padding-left: 50px;
}

.mod_help dl {
    float: left;
    width: 200px;
}

.mod_help dl:last-child {
    width: 90px;
    text-align: center;
}

.mod_help dl dt {
    font-size: 16px;
    margin-bottom: 10px;
}

.mod_copyright {
    text-align: center;
    padding-top: 20px;
}

.links {
    margin-bottom: 15px;
}

.links a {
    margin: 0 3px;
}

.copyright {
    line-height: 20px;
}
```

## list.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>列表页-综合网购首选-正品低价、品质保障、配送及时、轻松购物！
    </title>
    <!-- 网站说明 -->
    <meta name="description"
          content="品优购商城-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!"/>
    <!-- 关键字 -->
    <meta name="keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东"/>
    <!-- 引入favicon图标 -->
    <link rel="shortcut icon" href="favicon.ico"/>
    <!-- 引入我们初始化样式文件 -->
    <link rel="stylesheet" href="css/base.css">
    <!-- 引入我们公共的样式文件 -->
    <link rel="stylesheet" href="css/common.css">
    <!-- 引入我们列表页的css文件 -->
    <link rel="stylesheet" href="css/list.css">
</head>

<body>
<!-- 快捷导航模块 start -->
<section class="shortcut">
    <div class="w">
        <div class="fl">
            <ul>
                <li>品优购欢迎您！&nbsp;</li>
                <li>
                    <a href="#">请登录</a> &nbsp; <a href="#" class="style_red">免费注册</a>
                </li>
            </ul>
        </div>
        <div class="fr">
            <ul>
                <li>我的订单</li>
                <li></li>
                <li class="arrow-icon">我的品优购</li>
                <li></li>
                <li>品优购会员</li>
                <li></li>
                <li>企业采购</li>
                <li></li>
                <li class="arrow-icon">关注品优购</li>
                <li></li>
                <li class="arrow-icon">客户服务</li>
                <li></li>
                <li class="arrow-icon">网站导航</li>
            </ul>
        </div>
    </div>
</section>
<!-- 快捷导航模块 end -->
<!-- header头部模块制作 start -->
<header class="header w">
    <!-- logo模块 -->
    <div class="logo">
        <h1>
            <a href="index.html" title="品优购商城">品优购商城</a>
        </h1>
    </div>
    <!-- 列表页的秒杀模块 -->
    <div class="sk">
        <img src="images/sk.png" alt="">
    </div>
    <!-- search搜索模块 -->
    <div class="search">
        <input type="search" name="" id="" placeholder="语言开发">
        <button>搜索</button>
    </div>
    <!-- hotwords模块制作 -->
    <div class="hotwords">
        <a href="#" class="style_red">优惠购首发</a>
        <a href="#">亿元优惠</a>
        <a href="#">9.9元团购</a>
        <a href="#">美满99减30</a>
        <a href="#">办公用品</a>
        <a href="#">电脑</a>
        <a href="#">通信</a>
    </div>
    <!-- 购物车模块 -->
    <div class="shopcar">
        我的购物车
        <i class="count">8</i>
    </div>
</header>
<!-- header头部模块制作 end -->
<!-- nav模块制作 start -->
<nav class="nav">
    <div class="w">
        <div class="sk_list">
            <ul>
                <li><a href="#">品优秒杀</a></li>
                <li><a href="#">品优秒杀</a></li>
                <li><a href="#">品优秒杀</a></li>
            </ul>
        </div>
        <div class="sk_con">
            <ul>
                <li><a href="#">女装</a></li>
                <li><a href="#" class="style_red">女鞋</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">更多分类</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- nav模块制作 end -->
<!-- 列表页主体部分 -->
<div class="w sk_container">
    <div class="sk_hd">
        <img src="upload/bg_03.png" alt="">
    </div>
    <div class="sk_bd">

        <ul class="clearfix">
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
            <li>
                <img src="upload/list.jpg" alt="">
            </li>
        </ul>
    </div>
</div>
<!-- 列表页主体部分 end -->
<!-- 底部模块的制作 start -->
<footer class="footer">
    <div class="w">
        <div class="mod_service">
            <ul>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
                <li>
                    <h5></h5>
                    <div class="service_txt">
                        <h4>正品保障</h4>
                        <p>正品保障,提供发票</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mod_help">
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>服务指南</dt>
                <dd><a href="#">购物流程</a></dd>
                <dd><a href="#">会员介绍</a></dd>
                <dd><a href="#">生活旅行/团购</a></dd>
                <dd><a href="#">常见问题</a></dd>
                <dd><a href="#">大家电</a></dd>
                <dd><a href="#">联系客服</a></dd>
            </dl>
            <dl>
                <dt>帮助中心</dt>
                <dd>
                    <img src="images/wx_cz.jpg" alt="">
                    品优购客户端
                </dd>
            </dl>
        </div>
        <div class="mod_copyright">
            <div class="links">
                <a href="#">关于我们</a> | <a href="#">联系我们</a> | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 |
                品优购公益 | English Site | Contact U
            </div>
            <div class="copyright">
                地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br>
                京ICP备08001421号京公网安备110108007702
            </div>
        </div>
    </div>
</footer>
<!-- 底部模块的制作 end -->
</body>

</html>
```

## list.css

```css
/* 列表页专有的 css */
.nav {
    overflow: hidden;
}

.sk {
    position: absolute;
    left: 190px;
    top: 40px;
    border-left: 1px solid #c81523;
    padding: 3px 0 0 14px;
}

.sk_list {
    float: left;
}

.sk_list ul li {
    float: left;
}

.sk_list ul li a {
    display: block;
    line-height: 47px;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
}

.sk_con {
    float: left;
}

.sk_con ul li {
    float: left;
}

.sk_con ul li a {
    display: block;
    line-height: 49px;
    padding: 0 20px;
    font-size: 14px;

}

.sk_con ul li:last-child a::after {
    content: '\e91e';
    font-family: 'icomoon';
}

.sk_bd ul li {
    overflow: hidden;
    float: left;
    margin-right: 13px;
    width: 290px;
    height: 460px;
    border: 1px solid transparent;
}

.sk_bd ul li:nth-child(4n) {
    margin-right: 0;
}

.sk_bd ul li:hover {
    border: 1px solid #c81523;
}
```

## register.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>个人注册</title>
    <!-- 引入favicon图标 -->
    <link rel="shortcut icon" href="favicon.ico"/>
    <!-- 引入我们初始化的css -->
    <link rel="stylesheet" href="css/base.css">
    <!-- 引入我们自己的注册页面的css -->
    <link rel="stylesheet" href="css/register.css">
</head>

<body>
<div class="w">
    <header>
        <div class="logo">
            <a href="index.html"> <img src="images/logo.png" alt=""></a>
        </div>
    </header>
    <div class="registerarea">
        <h3>注册新用户
            <div class="login">我有账号，去<a href="#">登陆</a></div>
        </h3>
        <div class="reg_form">
            <form action="">
                <ul>
                    <li><label for="">手机号：</label> <input type="text" class="inp">
                        <span class="error"> <i class="error_icon"></i> 手机号码格式不正确，请从新输入 </span></li>
                    <li><label for="">短信验证码：</label> <input type="text" class="inp">
                        <span class="success"> <i class="success_icon"></i> 短信验证码输入正确 </span></li>
                    <li><label for="">登录密码：</label> <label>

                        <input type="password" class="inp">
                    </label>
                        <span class="error"> <i class="error_icon"></i> 手机号码格式不正确，请从新输入 </span></li>
                    <li class="safe">安全程度 <em class="ruo">弱</em> <em class="zhong">中</em> <em class="qiang">强</em></li>
                    <li><label for="">确认密码：</label> <input type="password" class="inp">
                        <span class="error"> <i class="error_icon"></i> 手机号码格式不正确，请从新输入 </span></li>
                    <li class="agree"><input type="checkbox" name="" id="">
                        同意协议并注册 <a href="#">《知晓用户协议》</a>
                    </li>
                    <li>
                        <input type="submit" value="完成注册" class="btn">
                    </li>
                </ul>
            </form>
        </div>
    </div>
    <footer>
        <div class="mod_copyright">
            <div class="links">
                <a href="#">关于我们</a> | <a href="#">联系我们</a> | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 |
                品优购公益 | English Site | Contact U
            </div>
            <div class="copyright">
                地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br>
                京ICP备08001421号京公网安备110108007702
            </div>
        </div>
    </footer>
</div>
</body>

</html>
```

## register.css

```css
.w {
    width: 1200px;
    margin: 0 auto;
}

header {
    height: 84px;
    border-bottom: 2px solid #c81523;
}

.logo {
    padding-top: 18px;
}

.registerarea {
    height: 522px;
    border: 1px solid #ccc;
    margin-top: 20px;
}

.registerarea h3 {
    height: 42px;
    border-bottom: 1px solid #ccc;
    background-color: #ececec;
    line-height: 42px;
    padding: 0 10px;
    font-size: 18px;
    font-weight: 400;
}

.login {
    float: right;
    font-size: 14px;
}

.login a {
    color: #c81523;
}

.reg_form {
    width: 600px;

    margin: 50px auto 0;
}

.reg_form ul li {
    margin-bottom: 20px;
}

.reg_form ul li label {
    display: inline-block;
    width: 88px;
    text-align: right;
}

.reg_form ul li .inp {
    width: 242px;
    height: 37px;
    border: 1px solid #ccc;
}

.error {
    color: #c81523;
}

.error_icon,
.success_icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background: url(../images/error.png) no-repeat;
    margin-top: -2px;
}

.success {
    color: green;
}

.success_icon {
    background: url(../images/success.png) no-repeat;
}

.safe {
    padding-left: 170px;
}

.safe em {
    padding: 0 12px;
    color: #fff;
}

.ruo {
    background-color: #de1111;
}

.zhong {
    background-color: #40b83f;
}

.qiang {
    background-color: #f79100;
}

.agree {
    padding-left: 95px;
}

.agree input {
    vertical-align: middle;
}

.agree a {
    color: #1ba1e6;
}

.btn {
    width: 200px;
    height: 34px;
    background-color: #c81623;
    font-size: 14px;
    color: #fff;
    margin: 30px 0 0 70px;
}

.mod_copyright {
    text-align: center;
    padding-top: 20px;
}

.links {
    margin-bottom: 15px;
}

.links a {
    margin: 0 3px;
}

.copyright {
    line-height: 20px;
}
```

# 七、课程总结

> 感谢 Pink 老师！

![](https://img-blog.csdnimg.cn/20210423235541479.png)

![](https://img-blog.csdnimg.cn/2021042323560868.png)

# 八、品优购项目代码规范

## 1. 概述

欢迎使用品优购代码规范， 这个是我借鉴京东前端代码规范，组织的品优购内部规范。旨在增强团队开发协作、提高代码质量和打造开发基石的编码规范。

以下规范是团队基本约定的内容，必须严格遵循。

### HTML规范

基于 [W3C](http://www.w3.org/)、[苹果开发者](https://developer.apple.com/) 等官方文档，并结合团队业务和开发过程中总结的规范约定，让页面 HTML 代码更具语义性。

### 图片规范

了解各种图片格式特性，根据特性制定图片规范，包括但不限于图片的质量约定、图片引入方式、图片合并处理等，旨在从图片层面优化页面性能。

### CSS规范

统一规范团队 CSS 代码书写风格和使用 CSS 预编译语言语法风格，提供常用媒体查询语句和浏览器私有属性引用，并从业务层面统一规范常用模块的引用。

### 命名规范

从 `目录`、`图片`、`HTML/CSS文件`、`ClassName` 的命名等层面约定规范团队的命名习惯，增强团队代码的可读性。

##  2. HTML 规范

###  DOCTYPE 声明

HTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：

~~~html
<!DOCTYPE html>
~~~

**HTML5 标准模版**

```html
<!DOCTYPE html>
  <html lang="zh-CN">
  <head>
  <meta charset="UTF-8">
  <title>HTML5标准模版</title>
  </head>
  <body>

  </body>
</html>
```

### 页面语言lang

推荐使用属性值 `cmn-Hans-CN`（简体, 中国大陆），但是考虑浏览器和操作系统的兼容性，目前仍然使用 `zh-CN` 属性值。

```
<html lang="zh-CN">
```

更多地区语言参考：

```
zh-SG 中文 (简体, 新加坡)   对应 cmn-Hans-SG 普通话 (简体, 新加坡)
zh-HK 中文 (繁体, 香港)     对应 cmn-Hant-HK 普通话 (繁体, 香港)
zh-MO 中文 (繁体, 澳门)     对应 cmn-Hant-MO 普通话 (繁体, 澳门)
zh-TW 中文 (繁体, 台湾)     对应 cmn-Hant-TW 普通话 (繁体, 台湾)
```

### charset字符集合

一般情况下统一使用 “UTF-8” 编码。

```
<meta charset="UTF-8">
```

由于历史原因，有些业务可能会使用 “GBK” 编码。

```
<meta charset="GBK">
```

请尽量统一写成标准的 “UTF-8”，不要写成 “utf-8” 或 “utf8” 或 “UTF8”。根据 [IETF对UTF-8的定义](http://www.ietf.org/rfc/rfc3629)，其编码标准的写法是 “UTF-8”；而 UTF8 或 utf8 的写法只是出现在某些编程系统中，如 .NET framework 的类 System.Text.Encoding 中的一个属性名就叫 UTF8。

### 书写风格

HTML 代码大小写。

HTML 标签名、类名、标签属性和大部分属性值统一用小写。

*推荐：*

```
<div class="demo"></div>
```

*不推荐：*

```
<div class="DEMO"></div>
	
<DIV CLASS="DEMO"></DIV>
```

### 类型属性

不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含。

*推荐：*

```
<link rel="stylesheet" href="" >
<script src=""></script>
```

*不推荐：*

```
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>
```

### 元素属性

- 元素属性值使用双引号语法
- 元素属性值可以写上的都写上

*推荐：*

```
<input type="text">
<input type="radio" name="name" checked="checked" >
```

*不推荐：*

```
<input type=text>	
<input type='text'>
<input type="radio" name="name" checked >
```

### 特殊字符引用

文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。

在 HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体。

*推荐：*

```
<a href="#">more&gt;&gt;</a>
```

*不推荐：*

```
<a href="#">more>></a>
```

### 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）。

```
<div class="jdc">
    <a href="#"></a>
</div>
```

### 代码嵌套

元素嵌套规范，每个块状元素独立一行，内联元素可选。

*推荐：*

```
<div>
    <h1></h1>
    <p></p>
</div>	
<p><span></span><span></span></p>
```

*不推荐：*

```
<div>
    <h1></h1><p></p>
</div>	
<p> 
    <span></span>
    <span></span>
</p>
```

段落元素与标题元素只能嵌套内联元素。

*推荐：*

```
<h1><span></span></h1>
<p><span></span><span></span></p>
```

*不推荐：*

```
<h1><div></div></h1>
<p><div></div><div></div></p>
```

## 3. 图片规范

### 内容图

内容图多以商品图等照片类图片形式存在，颜色较为丰富，文件体积较大。

- 优先考虑 JPEG 格式，条件允许的话优先考虑 WebP 格式
- 尽量不使用 PNG 格式，PNG8 色位太低，PNG24 压缩率低，文件体积大
- PC平台单张的图片的大小不应大于 200KB

### 背景图

背景图多为图标等颜色比较简单、文件体积不大、起修饰作用的图片

- PNG 与 GIF 格式，优先考虑使用 PNG 格式，PNG 格式允许更多的颜色并提供更好的压缩率
- 图像颜色比较简单的，如纯色块线条图标，优先考虑使用 PNG8 格式，避免不使用 JPEG 格式
- 图像颜色丰富而且图片文件不太大的（40KB 以下）或有半透明效果的优先考虑 PNG24 格式
- 图像颜色丰富而且文件比较大的（40KB - 200KB）优先考虑 JPEG 格式
- 条件允许的，优先考虑 WebP 代替 PNG 和 JPEG 格式

## 4. CSS规范

### 代码格式化

样式书写一般有两种：一种是紧凑格式（Compact）

```
.jdc{ display: block;width: 50px;}
```

一种是展开格式（Expanded）

```
.jdc {
    display: block;
    width: 50px;
}
```

**团队约定**

统一使用展开格式书写样式。

### 代码大小写

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。

```
/* 推荐 */
.jdc{
	display:block;
}
	
/* 不推荐 */
.JDC{
	DISPLAY:BLOCK;
}
```

### 选择器

- 尽量少用通用选择器 `*`
- 不使用 ID 选择器
- 不使用无具体语义定义的标签选择器

```css
/* 推荐 */
.jdc {}
.jdc li {}
.jdc li p{}

/* 不推荐 */
*{}
#jdc {}
.jdc div{}
```

### 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）。

```
.jdc {
    width: 100%;
    height: 100%;
}
```

### 分号

每个属性声明末尾都要加分号；

```
.jdc {
    width: 100%;
    height: 100%;
}
```

### 代码易读性

左括号与类名之间一个空格，冒号与属性值之间一个空格。

*推荐：*

```
.jdc { 
    width: 100%; 
}
```

*不推荐：*

```
.jdc{ 
    width:100%;
}
```

逗号分隔的取值，逗号之后一个空格。

*推荐：*

```
.jdc {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

*不推荐：*

```
.jdc {
    box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```

为单个 css 选择器或新申明开启新行。

*推荐：*

```css
.jdc, 
.jdc_logo, 
.jdc_hd {
    color: #ff0;
}
.nav{
    color: #fff;
}
```

*不推荐：*

```css
.jdc,jdc_logo,.jdc_hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

颜色值 `rgb()` `rgba()` `hsl()` `hsla()` `rect()` 中不需有空格，且取值不要带有不必要的 0。

*推荐：*

```
.jdc {
    color: rgba(255,255,255,.5);
}
```

*不推荐：*

```
.jdc {
    color: rgba( 255, 255, 255, 0.5 );
}
```

属性值十六进制数值能用简写的尽量用简写。

*推荐：*

```
.jdc {
    color: #fff;
}
```

*不推荐：*

```css
.jdc {
    color: #ffffff;
}
```

不要为 `0` 指明单位。

*推荐：*

```css
.jdc {
    margin: 0 10px;
}
```

*不推荐：*

```css
.jdc {
    margin: 0px 10px;
}
```

### 属性值引号

css属性值需要用到引号时，统一使用单引号。

```css
/* 推荐 */
.jdc { 
	font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.jdc { 
	font-family: "Hiragino Sans GB";
}
```

### 属性书写顺序

建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear / visibility / overflow（建议 display 第一个写，毕竟关系到模式）
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```css
.jdc {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

[mozilla官方属性顺序推荐](https://www.mozilla.org/css/base/content.css)

## 5. 命名规范

由历史原因及个人习惯引起的 DOM 结构、命名不统一，导致不同成员在维护同一页面时，效率低下，迭代、维护成本极高。

### 目录命名

* 项目文件夹：shoping
* 样式文件夹：css
* 脚本文件夹：js
* 样式类图片文件夹：img
* 产品类图片文件夹： upload
* 字体类文件夹： fonts

### ClassName命名

ClassName 的命名应该尽量精短、明确，必须以**字母开头命名**，且**全部字母为小写**，单词之间**统一使用下划线** “_” 连接。

.nav_top

### 常用命名推荐

**注意**：ad、banner、gg、guanggao 等有机会和广告挂勾的不建议直接用来做 ClassName，因为有些浏览器插件（Chrome 的广告拦截插件等）会直接过滤这些类名，因此

```
<div class="ad"></div>
```

这种广告的英文或拼音类名不应该出现。

另外，敏感不和谐字眼也不应该出现，如：

```
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div> 
<div class="ass"></div> 
<div class="KMT"></div> 
...
```

| ClassName              | 含义                                     |
| ---------------------- | ---------------------------------------- |
| about                  | 关于                                     |
| account                | 账户                                     |
| arrow                  | 箭头图标                                 |
| article                | 文章                                     |
| aside                  | 边栏                                     |
| audio                  | 音频                                     |
| avatar                 | 头像                                     |
| bg,background          | 背景                                     |
| bar                    | 栏（工具类）                             |
| branding               | 品牌化                                   |
| crumb,breadcrumbs      | 面包屑                                   |
| btn,button             | 按钮                                     |
| caption                | 标题，说明                               |
| category               | 分类                                     |
| chart                  | 图表                                     |
| clearfix               | 清除浮动                                 |
| close                  | 关闭                                     |
| col,column             | 列                                       |
| comment                | 评论                                     |
| community              | 社区                                     |
| container              | 容器                                     |
| content                | 内容                                     |
| copyright              | 版权                                     |
| current                | 当前态，选中态                           |
| default                | 默认                                     |
| description            | 描述                                     |
| details                | 细节                                     |
| disabled               | 不可用                                   |
| entry                  | 文章，博文                               |
| error                  | 错误                                     |
| even                   | 偶数，常用于多行列表或表格中             |
| fail                   | 失败（提示）                             |
| feature                | 专题                                     |
| fewer                  | 收起                                     |
| field                  | 用于表单的输入区域                       |
| figure                 | 图                                       |
| filter                 | 筛选                                     |
| first                  | 第一个，常用于列表中                     |
| footer                 | 页脚                                     |
| forum                  | 论坛                                     |
| gallery                | 画廊                                     |
| group                  | 模块，清除浮动                           |
| header                 | 页头                                     |
| help                   | 帮助                                     |
| hide                   | 隐藏                                     |
| hightlight             | 高亮                                     |
| home                   | 主页                                     |
| icon                   | 图标                                     |
| info,information       | 信息                                     |
| last                   | 最后一个，常用于列表中                   |
| links                  | 链接                                     |
| login                  | 登录                                     |
| logout                 | 退出                                     |
| logo                   | 标志                                     |
| main                   | 主体                                     |
| menu                   | 菜单                                     |
| meta                   | 作者、更新时间等信息栏，一般位于标题之下 |
| module                 | 模块                                     |
| more                   | 更多（展开）                             |
| msg,message            | 消息                                     |
| nav,navigation         | 导航                                     |
| next                   | 下一页                                   |
| nub                    | 小块                                     |
| odd                    | 奇数，常用于多行列表或表格中             |
| off                    | 鼠标离开                                 |
| on                     | 鼠标移过                                 |
| output                 | 输出                                     |
| pagination             | 分页                                     |
| pop,popup              | 弹窗                                     |
| preview                | 预览                                     |
| previous               | 上一页                                   |
| primary                | 主要                                     |
| progress               | 进度条                                   |
| promotion              | 促销                                     |
| rcommd,recommendations | 推荐                                     |
| reg,register           | 注册                                     |
| save                   | 保存                                     |
| search                 | 搜索                                     |
| secondary              | 次要                                     |
| section                | 区块                                     |
| selected               | 已选                                     |
| share                  | 分享                                     |
| show                   | 显示                                     |
| sidebar                | 边栏，侧栏                               |
| slide                  | 幻灯片，图片切换                         |
| sort                   | 排序                                     |
| sub                    | 次级的，子级的                           |
| submit                 | 提交                                     |
| subscribe              | 订阅                                     |
| subtitle               | 副标题                                   |
| success                | 成功（提示）                             |
| summary                | 摘要                                     |
| tab                    | 标签页                                   |
| table                  | 表格                                     |
| txt,text               | 文本                                     |
| thumbnail              | 缩略图                                   |
| time                   | 时间                                     |
| tips                   | 提示                                     |
| title                  | 标题                                     |
| video                  | 视频                                     |
| wrap                   | 容器，包，一般用于最外层                 |
| wrapper                | 容器，包，一般用于最外层                 |





