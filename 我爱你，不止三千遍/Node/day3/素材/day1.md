## 0. 资源地址

1. 线上 DEMO 项目地址：http://www.escook.cn:8086/
2. 项目的 API 接口地址： https://www.showdoc.cc/escook?page_id=3707158761215217



## 1. 项目前期的准备工作

### 1.1 初始化项目结构

1. 将 `素材` 目录下的 `assets` 和 `home` 文件夹，拷贝到 `code` 目录下
2. 在 `code` 目录下新建 `login.html` 和 `index.html` 页面

### 1.2 使用GitHub管理大事件的项目

1. 在 `code` 目录中运行 `git init` 命令
2. 在 `code` 目录中运行 `git add .` 命令
3. 在 `code` 目录下运行 `git commit -m "init project"` 命令
4. 新建 Github 仓库 `web_bigevent`
5. 将本地仓库和Github仓库建立关联关系
6. 将本地仓库的代码推送到Github仓库中
7. 运行 `git checkout -b login` 命令，创建并切换到 `login` 分支

### 1.3 安装VSCode的Live Server插件辅助开发

1. 在插件市场，搜索 `Live Server` 并安装
2. 在页面上鼠标右键，选择 `Open With Live Server` 即可快速使用 http 协议访问页面



## 2. 登录注册

### 2.1 绘制login页面的基本结构

1. 编写 HTML 结构：

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>大事件-登录/注册</title>
       <!-- 导入 LayUI 的样式 -->
       <link rel="stylesheet" href="/assets/lib/layui/css/layui.css" />
       <!-- 导入自己的样式表 -->
       <link rel="stylesheet" href="/assets/css/login.css" />
     </head>
     <body>
       <!-- 头部的 Logo 区域 -->
       <div class="layui-main">
         <img src="/assets/images/logo.png" alt="" />
       </div>
   
       <!-- 登录注册区域 -->
       <div class="loginAndRegBox">
         <div class="title-box"></div>
       </div>
     </body>
   </html>
   
   ```

2. 美化样式：

   ```css
   html,
   body {
     margin: 0;
     padding: 0;
     height: 100%;
     width: 100%;
     background: url('/assets/images/login_bg.jpg') no-repeat center;
     background-size: cover;
   }
   
   .loginAndRegBox {
     width: 400px;
     height: 310px;
     background-color: #fff;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
   }
   
   .title-box {
     height: 60px;
     background: url('/assets/images/login_title.png') no-repeat center;
   }
   ```

### 2.2 实现登录和注册的按需切换

1. 编写 HTML 结构：

   ```html
       <!-- 登录注册区域 -->
       <div class="loginAndRegBox">
         <div class="title-box"></div>
         <!-- 登录的div -->
         <div class="login-box"></div>
         <!-- 注册的div -->
         <div class="reg-box"></div>
       </div>
   ```

2. 编写样式：

   ```css
   .reg-box {
     display: none;
   }
   ```

3. 编写 JavaScript 代码：

   ```js
   $(function() {
     // 点击“去注册账号”的链接
     $('#link_reg').on('click', function() {
       $('.login-box').hide()
       $('.reg-box').show()
     })
   
     // 点击“去登录”的链接
     $('#link_login').on('click', function() {
       $('.login-box').show()
       $('.reg-box').hide()
     })
   })
   ```

### 2.3 绘制登录表单的基本结构

1. 编写 HTML 结构：

   ```html
     <!-- 登录的div -->
     <div class="login-box">
       <!-- 登录的表单 -->
       <form class="layui-form" action="">
         <!-- 用户名 -->
         <div class="layui-form-item">
           <i class="layui-icon layui-icon-username"></i>
           <input type="text" name="username" required lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input" />
         </div>
         <!-- 密码 -->
         <div class="layui-form-item">
           <i class="layui-icon layui-icon-password"></i>
           <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input" />
         </div>
         <!-- 登录按钮 -->
         <div class="layui-form-item">
           <!-- 注意：表单提交按钮和普通按钮的区别，就是 lay-submit 属性 -->
           <button class="layui-btn layui-btn-fluid layui-btn-normal" lay-submit>登录</button>
         </div>
         <div class="layui-form-item links">
           <a href="javascript:;" id="link_reg">去注册账号</a>
         </div>
       </form>
     </div>
   ```

### 2.4 美化登录表单的样式

1. 编写样式：

   ```css
   .layui-form {
     padding: 0 30px;
   }
   
   .links {
     display: flex;
     justify-content: flex-end;
   }
   
   .links a {
     font-size: 12px;
   }
   ```

### 2.5 绘制文本框前面的小图标

1. 在用户名的文本框之前，添加如下的标签结构：

   ```html
   <i class="layui-icon layui-icon-username"></i>
   ```

2. 在密码框之前，添加如下的标签结构：

   ```html
   <i class="layui-icon layui-icon-password"></i>
   ```

3. 美化样式：

   ```css
   .layui-form-item {
     position: relative;
   }
   
   .layui-icon {
     position: absolute;
     left: 10px;
     top: 10px;
   }
   
   .layui-input {
     padding-left: 32px;
   }
   ```

### 2.6 快速绘制注册的表单

1. 将登录的表单复制一份，并修改为注册的表单即可：

   ```html
     <!-- 注册的div -->
     <div class="reg-box">
       <!-- 注册的表单 -->
       <form class="layui-form" action="">
         <!-- 用户名 -->
         <div class="layui-form-item">
           <i class="layui-icon layui-icon-username"></i>
           <input type="text" name="username" required lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input" />
         </div>
         <!-- 密码 -->
         <div class="layui-form-item">
           <i class="layui-icon layui-icon-password"></i>
           <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input" />
         </div>
         <!-- 密码确认框 -->
         <div class="layui-form-item">
           <i class="layui-icon layui-icon-password"></i>
           <input type="password" name="repassword" required lay-verify="required" placeholder="再次确认密码" autocomplete="off" class="layui-input" />
         </div>
         <!-- 注册按钮 -->
         <div class="layui-form-item">
           <!-- 注意：表单提交按钮和普通按钮的区别，就是 lay-submit 属性 -->
           <button class="layui-btn layui-btn-fluid layui-btn-normal" lay-submit>注册</button>
         </div>
         <div class="layui-form-item links">
           <a href="javascript:;" id="link_login">去登录</a>
         </div>
       </form>
     </div>
   ```

### 2.7 实现登录表单的验证

1. 导入 layui 的 js 文件：

   ```html
   <script src="/assets/lib/layui/layui.all.js"></script>
   ```

2. 为需要验证的表单项添加 `lay-verify` 属性，同时指定具体的校验规则即可。

### 2.8 自定义校验规则

1. 从 layui 中获取 form 对象：

   ```js
   var form = layui.form
   ```

2. 通过 form.verify() 函数自定义校验规则：

   ```js
     form.verify({
       // 自定义了一个叫做 pwd 校验规则
       pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
       // 校验两次密码是否一致的规则
       repwd: function(value) {
         // 通过形参拿到的是确认密码框中的内容
         // 还需要拿到密码框中的内容
         // 然后进行一次等于的判断
         // 如果判断失败,则return一个提示消息即可
         var pwd = $('.reg-box [name=password]').val()
         if (pwd !== value) {
           return '两次密码不一致！'
         }
       }
     })
   ```

3. 按需为表单项添加校验规则：

   ```html
   <input type="password" name="repassword" required lay-verify="required|pwd|repwd" placeholder="再次确认密码" autocomplete="off" class="layui-input" />
   ```


### 2.9 发起注册用户的Ajax请求

1. 为注册表单添加Id：

   ```html
   <!-- 注册的表单 -->
   <form class="layui-form" id="form_reg"></form>
   ```

2. 监听提交事件：

   ```js
   // 监听注册表单的提交事件
     $('#form_reg').on('submit', function(e) {
       // 1. 阻止默认的提交行为
       e.preventDefault()
       // 2. 发起Ajax的POST请求
       var data = {
         username: $('#form_reg [name=username]').val(),
         password: $('#form_reg [name=password]').val()
       }
       $.post('http://ajax.frontend.itheima.net/api/reguser', data, function(res) {
         if (res.status !== 0) {
           return layer.msg(res.message)
         }
      layer.msg('注册成功，请登录！')
         // 模拟人的点击行为
         $('#link_login').click()
       })
     })
   ```
   

### 2.10 使用layer提示消息

1. 导入 layer：

   ```js
   var layer = layui.layer
   ```

2. 调用 `layer.msg()` 提示消息：

   ```js
   layer.msg('注册成功，请登录！')
   ```


### 2.11 发起登录的Ajax请求

1. 为登录表单添加id：

   ```html
   <form class="layui-form" id="form_login"></form>
   ```

2. 监听提交事件：

   ```js
     // 监听登录表单的提交事件
     $('#form_login').submit(function(e) {
       // 阻止默认提交行为
       e.preventDefault()
       $.ajax({
         url: '/api/login',
         method: 'POST',
         // 快速获取表单中的数据
         data: $(this).serialize(),
         success: function(res) {
           if (res.status !== 0) {
             return layer.msg('登录失败！')
           }
           layer.msg('登录成功！')
           // 将登录成功得到的 token 字符串，保存到 localStorage 中
           localStorage.setItem('token', res.token)
           // 跳转到后台主页
           location.href = '/index.html'
         }
       })
     })
   ```

### 2.12 在ajaxPrefilter中统一拼接请求的根路径

1. 在 `/assets/js` 目录中新建 `baseAPI.js`

2. 编写如下代码：

   ```js
   // 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，
   // 会先调用 ajaxPrefilter 这个函数
   // 在这个函数中，可以拿到我们给Ajax提供的配置对象
   $.ajaxPrefilter(function(options) {
     // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
     options.url = 'http://ajax.frontend.itheima.net' + options.url
   })
   
   ```

### 2.13 提交login分支的代码到GitHub

1. 运行 `git add .` 命令
2. 运行 `git commit -m "完成了登录和注册的功能"` 命令
3. 运行 `git push -u origin login` 命令
4. 运行 `git checkout master` 命令
5. 运行 `git merge login` 命令
6. 运行 `git push` 命令
7. 运行 `git checkout -b index` 命令



## 3. 后台主页

### 3.1 快速实现后台主页的布局效果

1. 从 layUI 官方文档中粘贴布局的主要代码，并修改如下：

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>后台主页</title>
       <!-- 导入 layui 的样式表 -->
       <link rel="stylesheet" href="/assets/lib/layui/css/layui.css" />
     </head>
     <body class="layui-layout-body">
       <div class="layui-layout layui-layout-admin">
         <div class="layui-header">
           <div class="layui-logo">
             <img src="/assets/images/logo.png" alt="" />
           </div>
           <!-- 头部区域（可配合layui已有的水平导航） -->
           <ul class="layui-nav layui-layout-right">
             <li class="layui-nav-item">
               <a href="javascript:;">
                 <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
                 个人中心
               </a>
               <dl class="layui-nav-child">
                 <dd><a href="">基本资料</a></dd>
                 <dd><a href="">更换头像</a></dd>
                 <dd><a href="">重置密码</a></dd>
               </dl>
             </li>
             <li class="layui-nav-item"><a href="">退出</a></li>
           </ul>
         </div>
   
         <div class="layui-side layui-bg-black">
           <div class="layui-side-scroll">
             <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
             <ul class="layui-nav layui-nav-tree" lay-filter="test">
               <li class="layui-nav-item layui-nav-itemed">
                 <a class="" href="javascript:;">所有商品</a>
                 <dl class="layui-nav-child">
                   <dd><a href="javascript:;">列表一</a></dd>
                   <dd><a href="javascript:;">列表二</a></dd>
                   <dd><a href="javascript:;">列表三</a></dd>
                   <dd><a href="">超链接</a></dd>
                 </dl>
               </li>
               <li class="layui-nav-item">
                 <a href="javascript:;">解决方案</a>
                 <dl class="layui-nav-child">
                   <dd><a href="javascript:;">列表一</a></dd>
                   <dd><a href="javascript:;">列表二</a></dd>
                   <dd><a href="">超链接</a></dd>
                 </dl>
               </li>
               <li class="layui-nav-item"><a href="">云市场</a></li>
               <li class="layui-nav-item"><a href="">发布商品</a></li>
             </ul>
           </div>
         </div>
   
         <div class="layui-body">
           <!-- 内容主体区域 -->
           <div style="padding: 15px;">内容主体区域</div>
         </div>
   
         <div class="layui-footer">
           <!-- 底部固定区域 -->
           © layui.com - 底部固定区域
         </div>
       </div>
       <!-- 导入 layui 的JS文件 -->
       <script src="/assets/lib/layui/layui.all.js"></script>
     </body>
   </html>
   ```


### 3.2 修改侧边栏的结构

```html
<div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
          <ul class="layui-nav layui-nav-tree">
            <li class="layui-nav-item">
              <a href="/">首页</a>
            </li>
            <li class="layui-nav-item">
              <a class="" href="javascript:;">文章管理</a>
              <dl class="layui-nav-child">
                <dd>
                  <a href="javascript:;">文章类别</a>
                </dd>
                <dd>
                  <a href="javascript:;">文章列表</a>
                </dd>
                <dd>
                  <a href="javascript:;">发布文章</a>
                </dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href="javascript:;">个人中心</a>
              <dl class="layui-nav-child">
                <dd>
                  <a href="javascript:;">基本资料</a>
                </dd>
                <dd>
                  <a href="javascript:;">更换头像</a>
                </dd>
                <dd>
                  <a href="javascript:;">重置密码</a>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
```

### 3.3 使用lay-shrink实现左侧菜单互斥效果

```html
      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
          <ul class="layui-nav layui-nav-tree" lay-shrink="all">
            <!-- 省略其他代码 -->
          </ul>
        </div>
      </div>
```

### 3.4 为菜单项添加图标

1. 导入第三方的图标库：

   ```html
   <!-- 导入第三方图标库 -->
   <link rel="stylesheet" href="/assets/fonts/iconfont.css" />
   ```

2. 修改左侧菜单的结构：

   ```html
     <div class="layui-side layui-bg-black">
       <div class="layui-side-scroll">
         <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
         <ul class="layui-nav layui-nav-tree" lay-shrink="all">
           <li class="layui-nav-item">
             <a href=""><span class="iconfont icon-home"></span>首页</a>
           </li>
           <li class="layui-nav-item">
             <a class="" href="javascript:;"><span class="iconfont icon-16"></span>文章管理</a>
             <dl class="layui-nav-child">
               <dd>
                 <a href="javascript:;"><i class="layui-icon layui-icon-app"></i>文章类别</a>
               </dd>
               <dd>
                 <a href="javascript:;"><i class="layui-icon layui-icon-app"></i>文章列表</a>
               </dd>
               <dd>
                 <a href="javascript:;"><i class="layui-icon layui-icon-app"></i>发布文章</a>
               </dd>
             </dl>
           </li>
           <li class="layui-nav-item">
             <a href="javascript:;"><span class="iconfont icon-user"></span>个人中心</a>
             <dl class="layui-nav-child">
               <dd>
                 <a href="javascript:;"><i class="layui-icon layui-icon-app"></i>基本资料</a>
               </dd>
               <dd>
                 <a href="javascript:;"><i class="layui-icon layui-icon-app"></i>更换头像</a>
               </dd>
               <dd>
                 <a href="javascript:;"><i class="layui-icon layui-icon-app"></i>重置密码</a>
               </dd>
             </dl>
           </li>
         </ul>
       </div>
     </div>
   ```

3. 修改头部“退出”按钮的结构：

   ```html
   <li class="layui-nav-item">
   	<a href=""><span class="iconfont icon-tuichu"></span>退出</a>
   </li>
   ```

4. 导入自己的样式表文件：

   ```html
   <link rel="stylesheet" href="/assets/css/index.css" />
   ```

5. 编写自己的样式：

   ```css
   .layui-footer {
     text-align: center;
     font-size: 12px;
   }
   
   .iconfont {
     margin-right: 8px;
   }
   
   .layui-icon {
     margin-right: 8px;
     margin-left: 20px;
   }
   ```

### 3.5 使用iframe标签在内容主体区域显示网页内容

1. 在页面主体的 div 中添加 `iframe`：

   ```html
     <div class="layui-body">
       <!-- 内容主体区域 -->
       <iframe name="fm" src="" frameborder="0"></iframe>
     </div>
   ```

2. 为`首页`链接添加`href`和`target`属性：

   ```html
   <a href="/home/dashboard.html" target="fm"><span class="iconfont icon-home"></span>首页</a>
   ```

3. 美化样式：

   ```css
   iframe {
     width: 100%;
     height: 100%;
   }
   
   .layui-body {
     overflow: hidden;
   }
   ```

### 3.6 解决3个小问题

1. 为 `iframe` 指定默认页面：

   ```html
   <iframe name="fm" src="/home/dashboard.html" frameborder="0"></iframe>
   ```

2. 为 `首页` 对应的导航 Item 项添加 `layui-this` 属性：

   ```html
   <li class="layui-nav-item layui-this">
     <a href="/home/dashboard.html" target="fm"><span class="iconfont icon-home"></span>首页</a>
   </li>
   ```

3. 强制清除 `<a>` 链接的 CSS3 动画：

   ```css
   a {
     transition: none !important;
   }
   ```


### 3.7 渲染图片头像和文字头像

1. 修改头部区域的的头像结构如下：

   ```html
   <a href="javascript:;" class="userinfo">
     <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
     <span class="text-avatar">A</span>
     个人中心
   </a>
   ```

2. 在左侧导航区域的 `ul` 之前添加如下头像结构：

   ```html
   <div class="userinfo">
       <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
       <span class="text-avatar">A</span>
       <span id="welcome">欢迎 ***</span>
   </div>
   ```

3. 添加样式美化 UI 结构：

   ```css
   .userinfo {
     height: 60px;
     line-height: 60px;
     text-align: center;
     font-size: 12px;
     user-select: none;
   }
   
   .layui-side-scroll .userinfo {
     border-bottom: 1px solid #282b33;
   }
   
   .layui-nav-img {
     width: 40px;
     height: 40px;
   }
   
   .text-avatar {
     display: inline-block;
     width: 40px;
     height: 40px;
     background-color: #009688;
     border-radius: 50%;
     line-height: 40px;
     text-align: center;
     font-size: 20px;
     color: #fff;
     position: relative;
     top: 4px;
     margin-right: 10px;
   }
   ```

   