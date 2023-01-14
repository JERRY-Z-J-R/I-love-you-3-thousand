/* 
	该文件是整个项目的入口文件
*/
// 引入 Vue
import Vue from 'vue';
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue';
// 关闭 vue 的生产提示
Vue.config.productionTip = false;

/*
    import Vue from 'vue'; 所引入的 vue 并不是我们之前学习引入的 vue.js 文件！！！而是 vue.runtime.xxx.js
    （vue.runtime.xxx.js 位于 node_modules/vue/dist/ 下，里面有 vue 的完整版、压缩版、残缺版……）

	关于不同版本的 Vue：
		1.vue.js 与 vue.runtime.xxx.js 的区别：
		    (1) vue.js 是完整版的 Vue，包含：核心功能 + 模板解析器。
		    (2) vue.runtime.xxx.js 是运行版的 Vue，只包含：核心功能，没有模板解析器。

		2.因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用
			render 函数接收到的 createElement 函数去指定具体内容。
		  （如果我们非要使用 template 配置项，那么我们需要 import Vue from 'vue/dist/vue'）

		为什么要有 vue.runtime.xxx.js？ 答：在打包时可以提高性能，降低包体积。
*/

// 创建 Vue 实例对象：vm
new Vue({
    // 可以将 .$mount() 改用 el，但是不推荐
    // el: '#app',

    render: h => h(App)
    // render 函数的功能：将 App 组件放入容器中！
    // render: q => q('h1', '你好啊')

    // 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用 render 函数接收到的 createElement 函数去指定具体内容
    // template: `<App></App>`,
    // components: {App}
}).$mount('#app');
// 这里 id 为 app 的标签在 index.html 中
