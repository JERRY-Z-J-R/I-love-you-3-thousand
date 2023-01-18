// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';
// 引入VueRouter
// 安装：npm i vue-router@3
import VueRouter from 'vue-router';
// 引入路由器（默认自动找到 index 文件）
import router from './router';

// 关闭Vue的生产提示
Vue.config.productionTip = false;
// 应用插件
Vue.use(VueRouter);

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    // key 与 value 相同，可以简写为 key
    router
});

// 当页面路径出现 /#/ 就证明 vue-router 已经生效了！！！
