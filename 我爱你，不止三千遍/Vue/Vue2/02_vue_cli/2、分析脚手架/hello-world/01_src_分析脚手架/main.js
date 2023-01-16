/* 
	该文件是整个项目的入口文件，当我们执行了 npm run serve 之后直接就会运行该文件！
    至于为什么 main.js 是入口文件，那时因为 vue-cli 脚手架配置好的^^
*/
// 引入 Vue
import Vue from 'vue';
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue';
// 关闭 vue 的生产提示
Vue.config.productionTip = false;

/*
    import Vue from 'vue'; 所引入的 vue 并不是我们之前学习引入的 vue.js 文件！！！而是 vue.runtime.esm.js
    （vue.runtime.esm.js 位于 node_modules/vue/dist/ 下，里面有 vue 的完整版、压缩版、残缺版……）

	关于不同版本的 Vue：
		1.vue.js 与 vue.runtime.esm.js 的区别：
		    (1) vue.js 是完整版的 Vue，包含：核心功能 + 模板解析器。
		    (2) vue.runtime.esm.js 是运行版的 Vue，只包含：核心功能，没有模板解析器。

		2.因为 vue.runtime.esm.js 没有模板解析器，所以不能使用 template 配置项，需要使用
			render 函数去指定具体内容。
		  （如果我们非要使用 template 配置项，那么我们需要 import Vue from 'vue/dist/vue'）

		为什么要有 vue.runtime.esm.js？ 答：在打包时可以提高性能，降低包体积。

        关于其它版本（了解即可）：
            vue.common.dev.js           完整CommonJS模块化开发环境版
            vue.common.js               完整CommonJS模块化版
            vue.commom.prod.js          完整CommonJS模块化生产环境版
            vue.esm.brower.js           完整ES模块化浏览器运行版，在浏览器中通过 <script type="module"> 来使用（浏览器原生 ES 模块导入使用）
            vue.esm.brower.min.js       完整ES模块化浏览器运行压缩版，在浏览器中通过 <script type="module"> 来使用（浏览器原生 ES 模块导入使用）
            vue.esm.js                  完整ES模块化版
            vue.js                      完整版
            vue.min.js                  完整压缩版
            vue.runtime.common.dev.js   运行版的vue.common.dev.js
            vue.runtime.common.js       运行版的vue.common.js
            vue.runtime.common.prod.js  运行版的vue.commom.prod.js
            vue.runtime.esm.js          运行版的vue.esm.js
            vue.runtime.js              运行版的vue.js
            vue.runtime.min.js          运行版的vue.runtime.min.js
*/

// 创建 Vue 实例对象：vm
new Vue({
    // 可以将 .$mount() 改用 el，但是不推荐
    // el: '#app',

    // 因为 vue.runtime.esm.js 没有模板解析器，识别解析不了 template 配置项，而需要使用 render 函数去指定具体内容
    // template: `<App></App>`,
    // components: {App}

    // render 函数的功能：将 App 组件放入容器中！
    render: h => h(App)
}).$mount('#app');
// 这里指定 id 为 app 的标签为容器
// 容器位置：public index.html 中的 <div id="app"></div>
// 至于为什么它知道容器在 public index.html 中，那时因为 vue-cli 脚手架配置好的^^
