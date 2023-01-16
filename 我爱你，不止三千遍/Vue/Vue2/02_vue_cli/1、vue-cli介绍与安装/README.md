# Vue CLI

> Vue.js 开发的标准工具（基于 Webpack）

## 安装

注意：vue.js 与 vue-cli 是两个独立的东西，所以他们的版本也是独立的，一般来说高版本的 vue-cli 可以兼容低版本的 vue.js！不建议将高版本的 vue.js 与低版本的 vue-cli 搭配，所以通常情况下，我们选择安装默认的最高版本的 vue-cli 即可。
> 关于旧版本：
> Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)
> ，你需要先通过 `npm uninstall vue-cli -g` 或 `yarn global remove vue-cli` 卸载它。

> Node 版本要求：
> Vue CLI 4.x 需要 Node.js v8.9 或更高版本 (推荐 v10 以上)。你可以使用 npm，nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

- 安装：
  `npm install -g @vue/cli` 或 `yarn global add @vue/cli`

- 查看版本：
  `vue -V`

- 升级：
  `npm update -g @vue/cli` 或 `yarn global upgrade --latest @vue/cli`

## 创建项目

创建新项目命令：`vue create 项目名`
> 提示：项目名请不要与目前已有的 npm 公共依赖名冲突！

选择一个 vue.js 的版本：我们目前选择 Vue 2

```
Vue CLI v5.0.8
? Please pick a preset: (Use arrow keys)
  Default ([Vue 3] babel, eslint) 
> Default ([Vue 2] babel, eslint) 
  Manually select features 
  
---------------------------------------------------

Vue CLI v5.0.8
? 请选择一个预设: (使用方向键)
  默认([Vue 3] babel, eslint)
> 默认([Vue 2] babel, eslint)
  手动选择功能
```

当看到一下提示时，说明 vue-cli 项目创建成功！

```
added 85 packages in 29s
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project 项目名.
👉  Get started with the following commands:

 $ cd 项目名
 $ npm run serve
 
---------------------------------------------------

在 29秒 内增加 85个包
⚓ 运行完成钩子…

📄 生成 README.md…

🎉 成功创建项目。
👉 使用以下命令开始:

 $ cd 项目名
 $ npm run serve
```

## 运行项目

我们进入到项目根目录，执行 `npm run serve` 就会编译项目并启动 vue-cli 提供的一个本地服务器
（每次创建 Vue-cli 项目都会自动提供一个 Hello World 案例）

```
> 项目名@0.1.0 serve
> vue-cli-service serve

 INFO  Starting development server...


 DONE  Compiled successfully in 11278ms                                               上午2:31:38


  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.2.102:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

- http://localhost:8080/：这个为服务器为我们项目运行提供的本地范围访问的地址及端口。

- http://192.168.2.102:8080/：这个为服务器为我们项目运行提供的局域网范围访问的地址及端口
