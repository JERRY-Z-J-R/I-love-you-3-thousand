import Vue from 'vue'
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'

Vue.config.productionTip = false
// 使用插件
Vue.use(vueResource)

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})

/*
	vue-resource 是一个 Vue 提供的 http 请求库（目前已经很少使用了，但是还是要了解）
	这是一个插件库！
	安装：npm i vue-resource
	配置：使用 import 引入，使用 Vue.use 使用
	也是基于 Promise 的，语法类似于 Axiso
 */