import Vue from 'vue';
import App from './App.vue';
// 引入store
// 如果文件名为 index，那么不指定的情况下默认就是引入 index 文件
import store from './store';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    // key 与 value 相同时，可以简写为 key
    store
});
